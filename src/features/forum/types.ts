export type UserRole = 'member' | 'mentor' | 'admin';

export interface Profile {
  id: string;
  username: string;
  display_name?: string;
  avatar_url?: string;
  role: UserRole;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  position: number;
  is_private: boolean;
  created_at: string;
  updated_at: string;
  // Computed fields
  threads_count?: number;
  posts_count?: number;
  last_post?: {
    id: string;
    author: Profile;
    thread_title: string;
    created_at: string;
  };
}

export interface Thread {
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
  last_post_id?: string;
  last_post_at: string;
  created_at: string;
  updated_at: string;
  // Relations
  author?: Profile;
  category?: Category;
  last_post?: Post;
}

export interface Post {
  id: string;
  content: string;
  author_id: string;
  thread_id: string;
  reply_to_id?: string;
  is_edited: boolean;
  edited_at?: string;
  created_at: string;
  updated_at: string;
  // Relations
  author?: Profile;
  thread?: Thread;
  reply_to?: Post;
}

export interface ThreadSubscription {
  id: string;
  user_id: string;
  thread_id: string;
  created_at: string;
}

export interface ThreadView {
  id: string;
  user_id?: string;
  thread_id: string;
  ip_address?: string;
  viewed_at: string;
}

// API Response types
export interface CategoryWithStats extends Category {
  threads_count: number;
  posts_count: number;
  last_post?: {
    id: string;
    author: Profile;
    thread_title: string;
    thread_slug: string;
    created_at: string;
  };
}

export interface ThreadWithDetails extends Thread {
  author: Profile;
  category: Category;
  last_post?: Post & { author: Profile };
}

export interface PostWithDetails extends Post {
  author: Profile;
  reply_to?: Post & { author: Profile };
}

// Form types
export interface CreateThreadForm {
  title: string;
  content: string;
  category_id: string;
}

export interface CreatePostForm {
  content: string;
  thread_id: string;
  reply_to_id?: string;
}

export interface UpdateProfileForm {
  username: string;
  display_name?: string;
  bio?: string;
}

// Search types
export interface SearchResult {
  type: 'thread' | 'post';
  id: string;
  title?: string;
  content: string;
  author: Profile;
  created_at: string;
  thread?: {
    id: string;
    title: string;
    slug: string;
  };
  highlights?: string[];
}

// Activity types
export interface RecentActivity {
  recent_posts: Array<{
    id: string;
    content: string;
    author: Profile;
    thread: {
      id: string;
      title: string;
      slug: string;
    };
    created_at: string;
  }>;
  recent_threads: Array<{
    id: string;
    title: string;
    slug: string;
    author: Profile;
    category: Category;
    replies_count: number;
    views_count: number;
    created_at: string;
  }>;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Pagination types
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
