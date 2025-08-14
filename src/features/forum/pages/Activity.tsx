import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity as ActivityIcon,
  MessageSquare,
  Clock,
  TrendingUp,
  Users,
  Eye,
  Filter,
  Calendar,
  UserPlus,
} from "lucide-react";
import { useCategories, useAuth } from "../hooks";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { supabase } from "../../../lib/supabase";
import { InvitationManager } from "../components";

type ActivityFilter = "all" | "threads" | "posts" | "users" | "invitations";
type TimeFilter = "today" | "week" | "month" | "all";

interface ExtendedActivity {
  recent_posts: any[];
  recent_threads: any[];
  active_users: any[];
  popular_threads: any[];
  stats: {
    total_threads: number;
    total_posts: number;
    total_users: number;
    threads_today: number;
    posts_today: number;
  };
}

export function Activity() {
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("all");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("week");
  const [extendedActivity, setExtendedActivity] =
    useState<ExtendedActivity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data: categories } = useCategories();
  const { profile } = useAuth();

  // Load extended activity data
  useEffect(() => {
    const loadExtendedActivity = async () => {
      try {
        setIsLoading(true);

        const now = new Date();
        const timeFilters = {
          today: new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          ).toISOString(),
          week: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          month: new Date(
            now.getTime() - 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
          all: "2020-01-01T00:00:00.000Z",
        };

        const timeFilterValue = timeFilters[timeFilter];

        // Get recent posts
        const { data: recentPosts } = await supabase
          .from("posts")
          .select(
            `
            id,
            content,
            created_at,
            author:profiles(*),
            thread:threads(id, title, slug, category_id)
          `
          )
          .gte("created_at", timeFilterValue)
          .order("created_at", { ascending: false })
          .limit(20);

        // Get recent threads
        const { data: recentThreads } = await supabase
          .from("threads")
          .select(
            `
            id,
            title,
            slug,
            content,
            replies_count,
            views_count,
            created_at,
            author:profiles(*),
            category:categories(*)
          `
          )
          .gte("created_at", timeFilterValue)
          .order("created_at", { ascending: false })
          .limit(20);

        // Get active users (users who posted recently)
        const { data: activeUsers } = await supabase
          .from("profiles")
          .select(
            `
            id,
            username,
            display_name,
            avatar_url,
            role,
            created_at
          `
          )
          .order("created_at", { ascending: false })
          .limit(10);

        // Get popular threads (by views and replies)
        const { data: popularThreads } = await supabase
          .from("threads")
          .select(
            `
            id,
            title,
            slug,
            replies_count,
            views_count,
            created_at,
            author:profiles(*),
            category:categories(*)
          `
          )
          .gte("created_at", timeFilterValue)
          .order("views_count", { ascending: false })
          .limit(10);

        // Get basic stats
        const { data: statsData } = await supabase.rpc("get_forum_stats");

        setExtendedActivity({
          recent_posts: recentPosts || [],
          recent_threads: recentThreads || [],
          active_users: activeUsers || [],
          popular_threads: popularThreads || [],
          stats: statsData || {
            total_threads: 0,
            total_posts: 0,
            total_users: 0,
            threads_today: 0,
            posts_today: 0,
          },
        });
      } catch (error) {
        console.error("Error loading extended activity:", error);
        setExtendedActivity({
          recent_posts: [],
          recent_threads: [],
          active_users: [],
          popular_threads: [],
          stats: {
            total_threads: 0,
            total_posts: 0,
            total_users: 0,
            threads_today: 0,
            posts_today: 0,
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadExtendedActivity();
  }, [timeFilter]);

  // Filter the activity based on the selected filter
  const getFilteredActivity = () => {
    if (!extendedActivity) return { posts: [], threads: [] };

    switch (activityFilter) {
      case "threads":
        return { posts: [], threads: extendedActivity.recent_threads };
      case "posts":
        return { posts: extendedActivity.recent_posts, threads: [] };
      case "users":
        return { posts: [], threads: [] };
      default:
        return {
          posts: extendedActivity.recent_posts,
          threads: extendedActivity.recent_threads,
        };
    }
  };

  const filteredActivity = getFilteredActivity();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <ActivityIcon className="w-6 h-6 mr-2 text-red-400" />
            Activité du forum
          </h1>
          <p className="text-gray-300 mt-1">
            Suivez les dernières discussions et interactions de la communauté
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      {extendedActivity?.stats && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="hero-card">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-400">Sujets</p>
                <p className="text-lg font-semibold text-white">
                  {extendedActivity.stats.total_threads}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-green-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-400">Messages</p>
                <p className="text-lg font-semibold text-white">
                  {extendedActivity.stats.total_posts}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-purple-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-400">Membres</p>
                <p className="text-lg font-semibold text-white">
                  {extendedActivity.stats.total_users}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-400">
                  Sujets aujourd'hui
                </p>
                <p className="text-lg font-semibold text-white">
                  {extendedActivity.stats.threads_today}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-red-400" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-400">
                  Messages aujourd'hui
                </p>
                <p className="text-lg font-semibold text-white">
                  {extendedActivity.stats.posts_today}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="hero-card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          {/* Activity Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Type:</span>
            <div className="flex space-x-1">
              {(
                [
                  "all",
                  "threads",
                  "posts",
                  "users",
                  ...([
                    "développeur",
                    "président",
                    "leader",
                    "responsable",
                  ].includes(profile?.role || "")
                    ? (["invitations"] as const)
                    : []),
                ] as ActivityFilter[]
              ).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActivityFilter(filter)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activityFilter === filter
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {filter === "all"
                    ? "Tout"
                    : filter === "threads"
                    ? "Sujets"
                    : filter === "posts"
                    ? "Messages"
                    : filter === "users"
                    ? "Utilisateurs"
                    : "Invitations"}
                </button>
              ))}
            </div>
          </div>

          {/* Time Filter */}
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Période:</span>
            <div className="flex space-x-1">
              {(["today", "week", "month", "all"] as TimeFilter[]).map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setTimeFilter(filter)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      timeFilter === filter
                        ? "bg-red-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {filter === "today"
                      ? "Aujourd'hui"
                      : filter === "week"
                      ? "Cette semaine"
                      : filter === "month"
                      ? "Ce mois"
                      : "Tout"}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Activity Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          {(activityFilter === "all" ||
            activityFilter === "threads" ||
            activityFilter === "posts") && (
            <div className="hero-card">
              <div className="p-4 border-b border-gray-600">
                <h2 className="text-lg font-semibold text-white">
                  Activité récente
                </h2>
              </div>

              <div className="divide-y divide-gray-600">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <div key={i} className="p-4 animate-pulse">
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    {/* Recent Threads */}
                    {filteredActivity.threads.map((thread) => (
                      <div
                        key={`thread-${thread.id}`}
                        className="p-4 hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                              <MessageSquare className="w-4 h-4 text-blue-400" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-white">
                                {thread.author.display_name ||
                                  thread.author.username}
                              </span>
                              <span className="text-sm text-gray-400">
                                a créé un nouveau sujet
                              </span>
                              <span className="text-xs text-gray-500">
                                {formatDistanceToNow(
                                  new Date(thread.created_at),
                                  {
                                    addSuffix: true,
                                    locale: fr,
                                  }
                                )}
                              </span>
                            </div>
                            <Link
                              to={`/forum/t/${thread.id}`}
                              className="text-red-400 hover:underline font-medium"
                            >
                              {thread.title}
                            </Link>
                            {thread.category && (
                              <div className="flex items-center space-x-1 mt-1">
                                <span className="text-xs">
                                  {thread.category.icon}
                                </span>
                                <span className="text-xs text-gray-400">
                                  dans {thread.category.name}
                                </span>
                              </div>
                            )}
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                              <span className="flex items-center">
                                <MessageSquare className="w-3 h-3 mr-1" />
                                {thread.replies_count} réponses
                              </span>
                              <span className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {thread.views_count} vues
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Recent Posts */}
                    {filteredActivity.posts.map((post) => (
                      <div
                        key={`post-${post.id}`}
                        className="p-4 hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
                              <MessageSquare className="w-4 h-4 text-green-400" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-white">
                                {post.author.display_name ||
                                  post.author.username}
                              </span>
                              <span className="text-sm text-gray-400">
                                a répondu dans
                              </span>
                              <span className="text-xs text-gray-500">
                                {formatDistanceToNow(
                                  new Date(post.created_at),
                                  {
                                    addSuffix: true,
                                    locale: fr,
                                  }
                                )}
                              </span>
                            </div>
                            <Link
                              to={`/forum/t/${post.thread.id}#post-${post.id}`}
                              className="text-red-400 hover:underline font-medium"
                            >
                              {post.thread.title}
                            </Link>
                            <div className="mt-2">
                              <p className="text-sm text-gray-300 line-clamp-2">
                                {post.content.substring(0, 150)}
                                {post.content.length > 150 && "..."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {filteredActivity.threads.length === 0 &&
                      filteredActivity.posts.length === 0 && (
                        <div className="p-8 text-center text-gray-400">
                          <ActivityIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>Aucune activité trouvée pour cette période.</p>
                        </div>
                      )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Active Users */}
          {activityFilter === "users" && (
            <div className="hero-card">
              <div className="p-4 border-b border-gray-600">
                <h2 className="text-lg font-semibold text-white">
                  Membres actifs
                </h2>
              </div>

              <div className="divide-y divide-gray-600">
                {isLoading ? (
                  [...Array(5)].map((_, i) => (
                    <div key={i} className="p-4 animate-pulse">
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                          <div className="h-3 bg-gray-600 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    {extendedActivity?.active_users.map((user) => (
                      <div
                        key={user.id}
                        className="p-4 hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {user.avatar_url ? (
                              <img
                                src={user.avatar_url}
                                alt={user.display_name || user.username}
                                className="w-10 h-10 rounded-full"
                              />
                            ) : (
                              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-medium">
                                  {(user.display_name || user.username)
                                    .charAt(0)
                                    .toUpperCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-white">
                                {user.display_name || user.username}
                              </span>
                              {user.role && (
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    user.role === "développeur"
                                      ? "bg-purple-100 text-purple-800"
                                      : user.role === "président"
                                      ? "bg-red-100 text-red-800"
                                      : user.role === "leader"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {user.role}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400">
                              Membre depuis{" "}
                              {formatDistanceToNow(new Date(user.created_at), {
                                addSuffix: true,
                                locale: fr,
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Invitation Manager */}
          {activityFilter === "invitations" &&
            ["développeur", "président", "leader", "responsable"].includes(
              profile?.role || ""
            ) && (
              <div className="hero-card">
                <div className="p-4 border-b border-gray-600">
                  <h2 className="text-lg font-semibold text-white flex items-center">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Gestion des invitations
                  </h2>
                </div>
                <div className="p-4">
                  <InvitationManager />
                </div>
              </div>
            )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Threads */}
          <div className="hero-card">
            <div className="p-4 border-b border-gray-600">
              <h3 className="text-lg font-semibold text-white">
                Sujets populaires
              </h3>
            </div>
            <div className="divide-y divide-gray-600">
              {isLoading ? (
                [...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 animate-pulse">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {extendedActivity?.popular_threads
                    .slice(0, 5)
                    .map((thread) => (
                      <div
                        key={thread.id}
                        className="p-4 hover:bg-gray-800 transition-colors"
                      >
                        <Link
                          to={`/forum/t/${thread.id}`}
                          className="block space-y-1"
                        >
                          <h4 className="text-sm font-medium text-white hover:text-red-400 transition-colors line-clamp-2">
                            {thread.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>
                              {thread.author.display_name ||
                                thread.author.username}
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {thread.views_count}
                              </span>
                              <span className="flex items-center">
                                <MessageSquare className="w-3 h-3 mr-1" />
                                {thread.replies_count}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>

          {/* Forum Categories */}
          <div className="hero-card">
            <div className="p-4 border-b border-gray-600">
              <h3 className="text-lg font-semibold text-white">Catégories</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {categories?.map((category) => (
                  <Link
                    key={category.id}
                    to={`/forum/c/${category.slug}`}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-sm text-gray-300">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {category.threads_count || 0}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
