import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase';
import { 
  categoriesApi, 
  threadsApi, 
  postsApi, 
  searchApi, 
  activityApi 
} from '../api';
import { CreateThreadForm, CreatePostForm } from '../types';

// Export theme hook
export { useTheme } from './useTheme';
// Export auth hook
export { useAuth } from './useAuth';

// Query keys
export const forumKeys = {
  all: ['forum'] as const,
  categories: () => [...forumKeys.all, 'categories'] as const,
  threads: () => [...forumKeys.all, 'threads'] as const,
  threadsByCategory: (slug: string, params: any) => 
    [...forumKeys.threads(), 'category', slug, params] as const,
  thread: (id: string) => [...forumKeys.threads(), id] as const,
  posts: () => [...forumKeys.all, 'posts'] as const,
  postsByThread: (threadId: string, params: any) => 
    [...forumKeys.posts(), 'thread', threadId, params] as const,
  search: (query: string, params: any) => 
    [...forumKeys.all, 'search', query, params] as const,
  activity: () => [...forumKeys.all, 'activity'] as const,
};

// Categories hooks
export function useCategories() {
  return useQuery({
    queryKey: forumKeys.categories(),
    queryFn: categoriesApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Threads hooks
export function useThreadsByCategory(
  categorySlug: string, 
  params: { page?: number; pageSize?: number; search?: string } = {}
) {
  return useQuery({
    queryKey: forumKeys.threadsByCategory(categorySlug, params),
    queryFn: () => threadsApi.getByCategory(categorySlug, params),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

export function useThread(id: string) {
  return useQuery({
    queryKey: forumKeys.thread(id),
    queryFn: () => threadsApi.getById(id),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
}

export function useCreateThread() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ thread, authorId }: { thread: CreateThreadForm; authorId: string }) =>
      threadsApi.create(thread, authorId),
    onSuccess: (newThread) => {
      // Invalidate categories to update thread counts
      queryClient.invalidateQueries({ queryKey: forumKeys.categories() });
      // Invalidate thread list for the category
      queryClient.invalidateQueries({ 
        queryKey: forumKeys.threadsByCategory(newThread.category_id, {}) 
      });
    },
  });
}

export function useUpdateThread() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      threadsApi.update(id, updates),
    onSuccess: (updatedThread) => {
      // Update the specific thread
      queryClient.setQueryData(forumKeys.thread(updatedThread.id), updatedThread);
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: forumKeys.threads() });
    },
  });
}

export function useDeleteThread() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: threadsApi.delete,
    onSuccess: () => {
      // Invalidate all thread-related queries
      queryClient.invalidateQueries({ queryKey: forumKeys.threads() });
      queryClient.invalidateQueries({ queryKey: forumKeys.categories() });
    },
  });
}

// Posts hooks
export function usePostsByThread(
  threadId: string,
  params: { page?: number; pageSize?: number } = {}
) {
  return useQuery({
    queryKey: forumKeys.postsByThread(threadId, params),
    queryFn: () => postsApi.getByThread(threadId, params),
    staleTime: 30 * 1000, // 30 seconds
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ post, authorId }: { post: CreatePostForm; authorId: string }) =>
      postsApi.create(post, authorId),
    onSuccess: (newPost) => {
      // Invalidate posts for the thread
      queryClient.invalidateQueries({ 
        queryKey: forumKeys.postsByThread(newPost.thread_id, {}) 
      });
      // Update thread stats
      queryClient.invalidateQueries({ queryKey: forumKeys.thread(newPost.thread_id) });
      queryClient.invalidateQueries({ queryKey: forumKeys.threads() });
      // Update activity feed
      queryClient.invalidateQueries({ queryKey: forumKeys.activity() });
    },
  });
}

export function useUpdatePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, content }: { id: string; content: string }) =>
      postsApi.update(id, content),
    onSuccess: (updatedPost) => {
      // Invalidate posts for the thread
      queryClient.invalidateQueries({ 
        queryKey: forumKeys.postsByThread(updatedPost.thread_id, {}) 
      });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postsApi.delete,
    onSuccess: () => {
      // Invalidate all post-related queries
      queryClient.invalidateQueries({ queryKey: forumKeys.posts() });
      queryClient.invalidateQueries({ queryKey: forumKeys.threads() });
    },
  });
}

// Search hooks
export function useSearch(
  query: string,
  params: { page?: number; pageSize?: number } = {},
  enabled = true
) {
  return useQuery({
    queryKey: forumKeys.search(query, params),
    queryFn: () => searchApi.search(query, params),
    enabled: enabled && query.length > 2,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
}

export function useSearchThreads(params: {
  query: string;
  categoryId?: string;
  sortBy?: 'relevance' | 'date' | 'replies' | 'views';
}) {
  return useQuery({
    queryKey: forumKeys.search(params.query, params),
    queryFn: async () => {
      if (!params.query || params.query.length < 2) return [];
      
      // Build the search query
      let query = supabase
        .from('threads')
        .select(`
          *,
          author:profiles(*),
          category:categories(*),
          last_post:posts(
            *,
            author:profiles(*)
          )
        `)
        .or(`title.ilike.%${params.query}%,content.ilike.%${params.query}%`);

      // Filter by category if specified
      if (params.categoryId) {
        query = query.eq('category_id', params.categoryId);
      }

      // Apply sorting
      switch (params.sortBy) {
        case 'date':
          query = query.order('created_at', { ascending: false });
          break;
        case 'replies':
          query = query.order('replies_count', { ascending: false });
          break;
        case 'views':
          query = query.order('views_count', { ascending: false });
          break;
        default: // relevance
          query = query.order('created_at', { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    },
    enabled: params.query.length > 2,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
}

// Activity hooks
export function useRecentActivity() {
  return useQuery({
    queryKey: forumKeys.activity(),
    queryFn: activityApi.getRecentActivity,
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 2 * 60 * 1000, // Refetch every 2 minutes
  });
}

// Thread views
export function useIncrementThreadViews() {
  return useMutation({
    mutationFn: ({ threadId, userId }: { threadId: string; userId?: string }) =>
      threadsApi.incrementViews(threadId, userId),
  });
}
