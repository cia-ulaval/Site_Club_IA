import { supabase } from '../../../lib/supabase';
import { 
  CategoryWithStats, 
  ThreadWithDetails, 
  PostWithDetails, 
  CreateThreadForm, 
  CreatePostForm,
  SearchResult,
  RecentActivity,
  PaginatedResponse,
  Thread,
  Post
} from '../types';

// Categories API
export const categoriesApi = {
  async getAll(): Promise<CategoryWithStats[]> {
    const { data, error } = await supabase
      .from('categories')
      .select(`
        *,
        threads:threads(count),
        posts:posts(count)
      `)
      .order('position');

    if (error) throw error;

    // Get last posts for each category
    const categoriesWithStats = await Promise.all(
      (data || []).map(async (category) => {
        const { data: lastPostData } = await supabase
          .from('posts')
          .select(`
            id,
            created_at,
            author:profiles(*),
            thread:threads!inner(
              title,
              slug,
              category_id
            )
          `)
          .eq('thread.category_id', category.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        return {
          ...category,
          threads_count: category.threads?.[0]?.count || 0,
          posts_count: category.posts?.[0]?.count || 0,
          last_post: lastPostData ? {
            id: lastPostData.id,
            author: lastPostData.author as any,
            thread_title: (lastPostData.thread as any).title,
            thread_slug: (lastPostData.thread as any).slug,
            created_at: lastPostData.created_at
          } : undefined
        };
      })
    );

    return categoriesWithStats;
  },

  async getBySlug(slug: string) {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  }
};

// Threads API
export const threadsApi = {
  async getByCategory(
    categorySlug: string, 
    { page = 1, pageSize = 20, search = '' } = {}
  ): Promise<PaginatedResponse<ThreadWithDetails>> {
    const offset = (page - 1) * pageSize;
    
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
      .eq('category.slug', categorySlug);

    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`);
    }

    const { data, error, count } = await query
      .order('is_pinned', { ascending: false })
      .order('last_post_at', { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: data || [],
      pagination: {
        page,
        pageSize,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  },

  async getById(id: string): Promise<ThreadWithDetails> {
    const { data, error } = await supabase
      .from('threads')
      .select(`
        *,
        author:profiles(*),
        category:categories(*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async create(thread: CreateThreadForm, authorId: string): Promise<Thread> {
    const slug = thread.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const { data, error } = await supabase
      .from('threads')
      .insert({
        ...thread,
        slug: `${slug}-${Date.now()}`,
        author_id: authorId
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<Thread>): Promise<Thread> {
    const { data, error } = await supabase
      .from('threads')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('threads')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async incrementViews(threadId: string, userId?: string): Promise<void> {
    try {
      // For authenticated users, one view per user per thread
      // For anonymous users, one view per IP per thread
      const viewData: any = {
        thread_id: threadId,
        viewed_at: new Date().toISOString()
      };

      if (userId) {
        viewData.user_id = userId;
      } else {
        // For anonymous users, we'll use a placeholder or skip IP tracking for now
        viewData.ip_address = '127.0.0.1'; // Placeholder - in real app, get actual IP
      }

      const { error } = await supabase
        .from('thread_views')
        .upsert(viewData, {
          onConflict: userId ? 'user_id,thread_id' : 'ip_address,thread_id'
        });

      // Ignore unique constraint violations
      if (error && !error.message.includes('duplicate key') && !error.message.includes('violates unique constraint')) {
        throw error;
      }
    } catch (error) {
      // Silently ignore duplicate view errors
      console.debug('View tracking error (ignored):', error);
    }
  }
};

// Posts API
export const postsApi = {
  async getByThread(
    threadId: string,
    { page = 1, pageSize = 20 } = {}
  ): Promise<PaginatedResponse<PostWithDetails>> {
    const offset = (page - 1) * pageSize;

    const { data, error, count } = await supabase
      .from('posts')
      .select(`
        *,
        author:profiles(*),
        reply_to:posts(
          id,
          content,
          author:profiles(username, display_name)
        )
      `)
      .eq('thread_id', threadId)
      .order('created_at')
      .range(offset, offset + pageSize - 1);

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: data || [],
      pagination: {
        page,
        pageSize,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  },

  async create(post: CreatePostForm, authorId: string): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .insert({
        ...post,
        author_id: authorId
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, content: string): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .update({
        content,
        is_edited: true,
        edited_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};

// Search API
export const searchApi = {
  async search(query: string, { page = 1, pageSize = 20 } = {}): Promise<PaginatedResponse<SearchResult>> {
    const offset = (page - 1) * pageSize;

    // Search in threads
    const { data: threadResults, error: threadError } = await supabase
      .from('threads')
      .select(`
        id,
        title,
        content,
        slug,
        created_at,
        author:profiles(*)
      `)
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .order('created_at', { ascending: false });

    if (threadError) throw threadError;

    // Search in posts
    const { data: postResults, error: postError } = await supabase
      .from('posts')
      .select(`
        id,
        content,
        created_at,
        author:profiles(*),
        thread:threads(id, title, slug)
      `)
      .ilike('content', `%${query}%`)
      .order('created_at', { ascending: false });

    if (postError) throw postError;

    // Combine and format results
    const results: SearchResult[] = [
      ...(threadResults || []).map(thread => ({
        type: 'thread' as const,
        id: thread.id,
        title: thread.title,
        content: thread.content,
        author: thread.author as any,
        created_at: thread.created_at,
        thread: {
          id: thread.id,
          title: thread.title,
          slug: thread.slug
        }
      })),
      ...(postResults || []).map(post => ({
        type: 'post' as const,
        id: post.id,
        content: post.content,
        author: post.author as any,
        created_at: post.created_at,
        thread: post.thread as any
      }))
    ];

    // Sort by relevance (simple text matching for now)
    results.sort((a, b) => {
      const aRelevance = (a.title?.toLowerCase().includes(query.toLowerCase()) ? 2 : 0) +
                        (a.content.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      const bRelevance = (b.title?.toLowerCase().includes(query.toLowerCase()) ? 2 : 0) +
                        (b.content.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      return bRelevance - aRelevance;
    });

    const totalCount = results.length;
    const paginatedResults = results.slice(offset, offset + pageSize);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: paginatedResults,
      pagination: {
        page,
        pageSize,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  }
};

// Activity API
export const activityApi = {
  async getRecentActivity(): Promise<RecentActivity> {
    // Get recent posts
    const { data: recentPosts, error: postsError } = await supabase
      .from('posts')
      .select(`
        id,
        content,
        created_at,
        author:profiles(*),
        thread:threads(id, title, slug)
      `)
      .order('created_at', { ascending: false })
      .limit(10);

    if (postsError) throw postsError;

    // Get recent threads
    const { data: recentThreads, error: threadsError } = await supabase
      .from('threads')
      .select(`
        id,
        title,
        slug,
        replies_count,
        views_count,
        created_at,
        author:profiles(*),
        category:categories(*)
      `)
      .order('created_at', { ascending: false })
      .limit(10);

    if (threadsError) throw threadsError;

    return {
      recent_posts: (recentPosts || []) as any,
      recent_threads: (recentThreads || []) as any
    };
  }
};
