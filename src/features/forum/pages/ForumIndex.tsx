import { Link } from "react-router-dom";
import { Plus, TrendingUp, Clock } from "lucide-react";
import { useCategories, useRecentActivity } from "../hooks";
import { CategoriesGrid } from "../components/CategoryCard";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

export function ForumIndex() {
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: activity, isLoading: activityLoading } = useRecentActivity();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Forum CIA</h1>
          <p className="mt-2 text-gray-300">
            Échangez avec la communauté du Club d'Intelligence Artificielle
          </p>
        </div>

        <Link
          to="/forum/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-rose-400 to-red-800 hover:from-rose-500 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau sujet
        </Link>
      </div>

      {/* Categories Grid */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Catégories</h2>
        <CategoriesGrid
          categories={categories || []}
          loading={categoriesLoading}
        />
      </div>

      {/* Activity Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <div className="hero-card">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">
              Messages récents
            </h3>
          </div>

          {activityLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {activity?.recent_posts?.slice(0, 5).map((post) => (
                <div
                  key={post.id}
                  className="border-b border-gray-700 pb-3 last:border-b-0"
                >
                  <Link
                    to={`/forum/t/${post.thread.id}`}
                    className="block hover:text-red-400 transition-colors"
                  >
                    <div className="font-medium text-white line-clamp-1">
                      {post.thread.title}
                    </div>
                    <div className="text-sm text-gray-300 line-clamp-2 mt-1">
                      {post.content.replace(/[#*`_]/g, "").substring(0, 120)}...
                    </div>
                    <div className="flex items-center space-x-2 mt-2 text-xs text-gray-400">
                      <span>
                        par {post.author.display_name || post.author.username}
                      </span>
                      <span>•</span>
                      <span>
                        {formatDistanceToNow(new Date(post.created_at), {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}

              {(!activity?.recent_posts ||
                activity.recent_posts.length === 0) && (
                <p className="text-gray-400 text-center py-4">
                  Aucun message récent
                </p>
              )}
            </div>
          )}
        </div>

        {/* Recent Topics */}
        <div className="hero-card">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Sujets récents</h3>
          </div>

          {activityLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {activity?.recent_threads?.slice(0, 5).map((thread) => (
                <div
                  key={thread.id}
                  className="border-b border-gray-700 pb-3 last:border-b-0"
                >
                  <Link
                    to={`/forum/t/${thread.id}`}
                    className="block hover:text-red-400 transition-colors"
                  >
                    <div className="font-medium text-white line-clamp-1">
                      {thread.title}
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                      <span>
                        par{" "}
                        {thread.author.display_name || thread.author.username}
                      </span>
                      <span>•</span>
                      <span>{thread.replies_count} réponses</span>
                      <span>•</span>
                      <span>{thread.views_count} vues</span>
                      <span>•</span>
                      <span>
                        {formatDistanceToNow(new Date(thread.created_at), {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}

              {(!activity?.recent_threads ||
                activity.recent_threads.length === 0) && (
                <p className="text-gray-400 text-center py-4">
                  Aucun sujet récent
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
