import { supabase } from './client';

export function subscribeToPosts(threadId: number, onNewPost: (post: any) => void) {
  // Abonnement Realtime sur la table posts pour un thread donné
  return supabase
    .channel('public:posts')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'posts', filter: `thread_id=eq.${threadId}` },
      (payload) => {
        onNewPost(payload.new);
      }
    )
    .subscribe();
}

export function unsubscribe(channel: any) {
  supabase.removeChannel(channel);
}
