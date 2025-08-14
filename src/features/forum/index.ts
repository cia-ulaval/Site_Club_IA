// Export forum routes configuration
export { default as ForumRoutes } from './ForumRoutes.tsx';

// Export all forum components and hooks
export * from './components';
export * from './hooks';

// Export pages individually to avoid conflicts
export {
  ForumIndex,
  CategoryThreads,
  ThreadView as ThreadViewPage,
  NewThread,
  Search,
  Activity,
  Login,
  Signup
} from './pages';

// Export types individually to avoid conflicts
export type {
  UserRole,
  Profile,
  Category,
  Thread,
  Post,
  ThreadSubscription,
  ThreadView,
  CategoryWithStats,
  ThreadWithDetails,
  PostWithDetails,
  CreateThreadForm,
  CreatePostForm,
  UpdateProfileForm,
  SearchResult,
  RecentActivity,
  Theme,
  PaginationParams,
  PaginatedResponse
} from './types';
