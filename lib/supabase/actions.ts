import { z } from 'zod';
import { threadSchema, postSchema } from './validators';
import { createSupabaseServer } from './server';
import sanitizeHtml from 'sanitize-html';

// Utilitaire pour vérifier l'utilisateur connecté
export async function requireUser() {
  const supabase = createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Non authentifié');
  return user;
}

export async function createThread(form: any) {
  const user = await requireUser();
  const parsed = threadSchema.parse(form);
  const supabase = createSupabaseServer();
  // Sanitize le contenu Markdown (pas de HTML direct)
  const content = sanitizeHtml(parsed.content, { allowedTags: [], allowedAttributes: {} });
  const { data, error } = await supabase.from('threads').insert({
    title: parsed.title,
    content,
    category_id: parsed.category_id,
    author_id: user.id
  }).select().single();
  if (error) return { error: error.message };
  return { thread: data };
}

export async function createPost(form: any) {
  const user = await requireUser();
  const parsed = postSchema.parse(form);
  const supabase = createSupabaseServer();
  const content = sanitizeHtml(parsed.content, { allowedTags: [], allowedAttributes: {} });
  const { data, error } = await supabase.from('posts').insert({
    thread_id: parsed.thread_id,
    content,
    author_id: user.id
  }).select().single();
  if (error) return { error: error.message };
  return { post: data };
}

export async function deleteOwnPost(postId: number) {
  const user = await requireUser();
  const supabase = createSupabaseServer();
  // Supprime seulement si owner ou admin (RLS enforce)
  const { error } = await supabase.from('posts').delete().eq('id', postId).eq('author_id', user.id);
  if (error) return { error: error.message };
  return { success: true };
}

export async function togglePin(threadId: number) {
  const user = await requireUser();
  const supabase = createSupabaseServer();
  // Vérifie si admin
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') return { error: 'Non autorisé' };
  const { data: thread } = await supabase.from('threads').select('is_pinned').eq('id', threadId).single();
  if (!thread) return { error: 'Thread introuvable' };
  const { error } = await supabase.from('threads').update({ is_pinned: !thread.is_pinned }).eq('id', threadId);
  if (error) return { error: error.message };
  return { success: true };
}

export async function toggleLock(threadId: number) {
  const user = await requireUser();
  const supabase = createSupabaseServer();
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
  if (profile?.role !== 'admin') return { error: 'Non autorisé' };
  const { data: thread } = await supabase.from('threads').select('is_locked').eq('id', threadId).single();
  if (!thread) return { error: 'Thread introuvable' };
  const { error } = await supabase.from('threads').update({ is_locked: !thread.is_locked }).eq('id', threadId);
  if (error) return { error: error.message };
  return { success: true };
}
