import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export function createSupabaseServer() {
  return createServerComponentClient({ cookies });
}

// Fonctions d’accès aux données (exemples, à compléter)
export async function getCategories() {
  const supabase = createSupabaseServer();
  const { data } = await supabase.from('categories').select('*').order('position');
  return data || [];
}

export async function getCategoryBySlug(slug: string) {
  const supabase = createSupabaseServer();
  const { data } = await supabase.from('categories').select('*').eq('slug', slug).single();
  return data;
}

export async function getThreadsByCategory(slug: string, page = 1, q = '') {
  const supabase = createSupabaseServer();
  const pageSize = 20;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  let query = supabase
    .from('threads')
    .select('*, author:profiles(username,role)', { count: 'exact' })
    .order('is_pinned', { ascending: false })
    .order('created_at', { ascending: false });
  if (q) query = query.ilike('title', `%${q}%`);
  const { data, count } = await query
    .in('category_id', [
      (await supabase.from('categories').select('id').eq('slug', slug).single()).data.id
    ])
    .range(from, to);
  return { threads: data || [], total: count || 0 };
}

export async function getThreadById(id: string) {
  const supabase = createSupabaseServer();
  const { data } = await supabase
    .from('threads')
    .select('*, author:profiles(username,role), category:categories(name,slug)')
    .eq('id', id)
    .single();
  return data;
}

export async function getPostsByThread(threadId: string, page = 1) {
  const supabase = createSupabaseServer();
  const pageSize = 20;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  const { data, count } = await supabase
    .from('posts')
    .select('*, author:profiles(username,role)')
    .eq('thread_id', threadId)
    .order('created_at', { ascending: true })
    .range(from, to);
  return { posts: data || [], total: count || 0 };
}
