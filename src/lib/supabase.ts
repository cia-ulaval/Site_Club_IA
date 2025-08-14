import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Types
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          display_name: string | null;
          avatar_url: string | null;
          role: 'member' | 'mentor' | 'admin';
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          display_name?: string | null;
          avatar_url?: string | null;
          role?: 'member' | 'mentor' | 'admin';
          bio?: string | null;
        };
        Update: {
          username?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          role?: 'member' | 'mentor' | 'admin';
          bio?: string | null;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon: string | null;
          position: number;
          is_private: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          slug: string;
          description?: string | null;
          icon?: string | null;
          position?: number;
          is_private?: boolean;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          icon?: string | null;
          position?: number;
          is_private?: boolean;
        };
      };
      threads: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          author_id: string;
          category_id: string;
          is_pinned: boolean;
          is_locked: boolean;
          views_count: number;
          replies_count: number;
          last_post_id: string | null;
          last_post_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          content: string;
          author_id: string;
          category_id: string;
          is_pinned?: boolean;
          is_locked?: boolean;
        };
        Update: {
          title?: string;
          content?: string;
          is_pinned?: boolean;
          is_locked?: boolean;
        };
      };
      posts: {
        Row: {
          id: string;
          content: string;
          author_id: string;
          thread_id: string;
          reply_to_id: string | null;
          is_edited: boolean;
          edited_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          content: string;
          author_id: string;
          thread_id: string;
          reply_to_id?: string | null;
        };
        Update: {
          content?: string;
          is_edited?: boolean;
          edited_at?: string | null;
        };
      };
      thread_subscriptions: {
        Row: {
          id: string;
          user_id: string;
          thread_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          thread_id: string;
        };
        Update: {};
      };
      thread_views: {
        Row: {
          id: string;
          user_id: string | null;
          thread_id: string;
          ip_address: string | null;
          viewed_at: string;
        };
        Insert: {
          user_id?: string | null;
          thread_id: string;
          ip_address?: string | null;
        };
        Update: {};
      };
    };
  };
};
