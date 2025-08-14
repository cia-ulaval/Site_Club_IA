import { Routes, Route } from "react-router-dom";
import { ForumLayout } from "./components/ForumLayout";
import {
  ForumIndex,
  CategoryThreads,
  ThreadView,
  NewThread,
  Search,
  Activity,
  Login,
  Signup,
} from "./pages";

export function ForumRoutes() {
  return (
    <ForumLayout>
      <Routes>
        {/* Public routes */}
        <Route index element={<ForumIndex />} />
        <Route path="c/:categorySlug" element={<CategoryThreads />} />
        <Route path="t/:threadId" element={<ThreadView />} />
        <Route path="search" element={<Search />} />
        <Route path="activity" element={<Activity />} />

        {/* Auth routes */}
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route path="new" element={<NewThread />} />
      </Routes>
    </ForumLayout>
  );
}

// Export all forum components and hooks
export * from "./components";
export * from "./hooks";
// Explicitly re-export to avoid ambiguity
export {
  ForumIndex,
  CategoryThreads,
  ThreadView,
  NewThread,
  Search,
  Activity,
  Login,
  Signup,
} from "./pages";
export * from "./types";
