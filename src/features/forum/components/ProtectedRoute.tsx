import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { ForumAccessDenied } from "./ForumAccessDenied";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/forum/auth/login" replace />;
  }

  // Si requireAdmin est true, vérifier que l'utilisateur a un rôle autorisé
  if (requireAdmin) {
    const allowedRoles = ["développeur", "président", "leader", "responsable"];
    if (!profile?.role || !allowedRoles.includes(profile.role)) {
      return <ForumAccessDenied />;
    }
  }

  return <>{children}</>;
}
