import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../../../lib/supabase';
import { Profile } from '../types';

interface AuthState {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
  });

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        setState({
          user: null,
          profile: null,
          loading: false,
        });
        return;
      }
      
      if (session?.user) {
        // Fetch user profile avec gestion d'erreur pour récursion RLS
        try {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profileError) {
            // Si erreur de récursion RLS, essayer une requête alternative
            if (profileError.code === "42P17") {
              // Pour le développement, on peut créer un profil temporaire
              const tempProfile = {
                id: session.user.id,
                username: session.user.email?.split('@')[0] || 'user',
                display_name: session.user.email?.split('@')[0] || 'User',
                avatar_url: undefined,
                role: 'développeur' as const,
                bio: undefined,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              };
              
              setState({
                user: session.user,
                profile: tempProfile,
                loading: false,
              });
              return;
            }
          }

          setState({
            user: session.user,
            profile: profile || null,
            loading: false,
          });
        } catch (error) {
          setState({
            user: session.user,
            profile: null,
            loading: false,
          });
        }
      } else {
        setState({
          user: null,
          profile: null,
          loading: false,
        });
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          // Fetch user profile
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          setState({
            user: session.user,
            profile: profile || null,
            loading: false,
          });
        } else {
          setState({
            user: null,
            profile: null,
            loading: false,
          });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return {
    ...state,
    signOut,
  };
}
