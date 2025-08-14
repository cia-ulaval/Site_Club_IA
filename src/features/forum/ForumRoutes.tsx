import { Routes, Route } from "react-router-dom";
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
import { ForumLayout, ProtectedRoute } from "./components";

export default function ForumRoutes() {
  return (
    <ForumLayout>
      <Routes>
        {/* Auth routes - accessible sans connexion */}
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />

        {/* Toutes les autres routes nécessitent une connexion ET un rôle du bureau */}
        <Route
          path="*"
          element={
            <ProtectedRoute requireAdmin={true}>
              <Routes>
                <Route index element={<ForumIndex />} />
                <Route path="c/:categorySlug" element={<CategoryThreads />} />
                <Route path="t/:threadId" element={<ThreadView />} />
                <Route path="search" element={<Search />} />
                <Route path="activity" element={<Activity />} />
                <Route path="new" element={<NewThread />} />
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </ForumLayout>
  );
}
