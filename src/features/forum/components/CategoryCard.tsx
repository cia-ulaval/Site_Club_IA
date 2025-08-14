import { Link } from "react-router-dom";
import { MessageSquare, Eye, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { CategoryWithStats } from "../types";

interface CategoryCardProps {
  category: CategoryWithStats;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="hero-card hover:shadow-lg transition-all duration-200">
      <Link
        to={`/forum/c/${category.slug}`}
        className="block p-6 hover:bg-gray-800 transition-colors rounded-lg"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {category.icon && (
                <span
                  className="text-2xl"
                  role="img"
                  aria-label={category.name}
                >
                  {category.icon}
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">
                {category.name}
              </h3>
            </div>

            {category.description && (
              <p className="text-gray-300 text-sm mb-4">
                {category.description}
              </p>
            )}

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>{category.threads_count} sujets</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{category.posts_count} messages</span>
              </div>
            </div>
          </div>

          {/* Last Post Info */}
          {category.last_post && (
            <div className="ml-6 text-right min-w-0">
              <div className="text-sm text-white font-medium truncate">
                {category.last_post.thread_title}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                par{" "}
                {category.last_post.author.display_name ||
                  category.last_post.author.username}
              </div>
              <div className="flex items-center justify-end space-x-1 text-xs text-gray-400 mt-1">
                <Clock className="w-3 h-3" />
                <span>
                  {formatDistanceToNow(
                    new Date(category.last_post.created_at),
                    {
                      addSuffix: true,
                      locale: fr,
                    }
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

interface CategoriesGridProps {
  categories: CategoryWithStats[];
  loading?: boolean;
}

export function CategoriesGrid({ categories, loading }: CategoriesGridProps) {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="hero-card p-6">
            <div className="animate-pulse">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-600 rounded w-1/3"></div>
              </div>
              <div className="h-3 bg-gray-600 rounded w-2/3 mb-2"></div>
              <div className="h-3 bg-gray-600 rounded w-1/2 mb-4"></div>
              <div className="flex space-x-4">
                <div className="h-3 bg-gray-600 rounded w-16"></div>
                <div className="h-3 bg-gray-600 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
