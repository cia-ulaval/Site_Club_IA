import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

interface ForumLayoutProps {
  children?: React.ReactNode;
}

export function ForumLayout({ children }: ForumLayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { to: '/forum', label: t('forum.nav.forums'), exact: true },
    { to: '/forum/activity', label: t('forum.nav.activity') },
    { to: '/forum/search', label: t('forum.nav.search') },
  ];

  const themeOptions = [
    { value: 'light', icon: Sun, label: t('forum.theme.light') },
    { value: 'dark', icon: Moon, label: t('forum.theme.dark') },
    { value: 'system', icon: Monitor, label: t('forum.theme.system') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Forum Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Forum Title */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Forum CIA
              </h1>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as any)}
                  className="appearance-none bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
                >
                  {themeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-700">
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
                      ? 'border-red-500 text-red-600 dark:text-red-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
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
