import React from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks";

interface ForumLayoutProps {
  children?: React.ReactNode;
}

export function ForumLayout({ children }: ForumLayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navItems = [
    { to: "/forum", label: t("forum.nav.forums"), exact: true },
    { to: "/forum/activity", label: t("forum.nav.activity") },
    { to: "/forum/search", label: t("forum.nav.search") },
  ];

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/forum/auth/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Forum Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Forum Title */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold gradient-text">Forum CIA</h1>
            </div>

            {/* User Actions */}
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  title="Se déconnecter"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Déconnexion</span>
                </button>
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 border-b border-gray-800">
            {navItems.map((item) => {
              const isActive = item.exact
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    isActive
                      ? "border-red-500 text-red-400"
                      : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children || <Outlet />}
      </main>
    </div>
  );
}
