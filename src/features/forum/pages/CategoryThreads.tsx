import { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Plus, Search, Filter } from "lucide-react";
import { useThreadsByCategory } from "../hooks";
import { ThreadsList } from "../components/ThreadsList";

export function CategoryThreads() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [filter, setFilter] = useState(searchParams.get("filter") || "all");

  const page = parseInt(searchParams.get("page") || "1");
  const search = searchParams.get("search") || "";

  const { data, isLoading } = useThreadsByCategory(slug!, {
    page,
    pageSize: 20,
    search,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery) {
      newParams.set("search", searchQuery);
    } else {
      newParams.delete("search");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    const newParams = new URLSearchParams(searchParams);
    if (newFilter !== "all") {
      newParams.set("filter", newFilter);
    } else {
      newParams.delete("filter");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  const category = data?.data?.[0]?.category;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/forum"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {category?.icon} {category?.name || "Catégorie"}
            </h1>
            {category?.description && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {category.description}
              </p>
            )}
          </div>
        </div>

        <Link
          to="/forum/new"
          state={{ categoryId: category?.id }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau sujet
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher dans cette catégorie..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
          </form>

          {/* Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <option value="all">Tous les sujets</option>
              <option value="unread">Non lus</option>
              <option value="mine">Mes sujets</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      {data && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {data.pagination.totalCount} sujet
          {data.pagination.totalCount !== 1 ? "s" : ""} trouvé
          {data.pagination.totalCount !== 1 ? "s" : ""}
          {search && ` pour "${search}"`}
        </div>
      )}

      {/* Threads List */}
      <ThreadsList threads={data?.data || []} loading={isLoading} />

      {/* Pagination */}
      {data && data.pagination.totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={!data.pagination.hasPreviousPage}
            className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            Précédent
          </button>

          <div className="flex items-center space-x-1">
            {Array.from(
              { length: Math.min(5, data.pagination.totalPages) },
              (_, i) => {
                let pageNum;
                if (data.pagination.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= data.pagination.totalPages - 2) {
                  pageNum = data.pagination.totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-2 text-sm border rounded-md ${
                      pageNum === page
                        ? "bg-red-600 text-white border-red-600"
                        : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }
            )}
          </div>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={!data.pagination.hasNextPage}
            className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}
