import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search as SearchIcon,
  Filter,
  Clock,
  MessageSquare,
  User,
  Tag,
} from "lucide-react";
import { useSearchThreads, useCategories } from "../hooks";
import { ThreadsList } from "../components/ThreadsList";

type SearchType = "threads" | "posts" | "users";
type SortBy = "relevance" | "date" | "replies" | "views";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract search params
  const initialQuery = searchParams.get("q") || "";
  const initialType = (searchParams.get("type") as SearchType) || "threads";
  const initialCategory = searchParams.get("category") || "";
  const initialSort = (searchParams.get("sort") as SortBy) || "relevance";

  const [query, setQuery] = useState(initialQuery);
  const [searchType, setSearchType] = useState<SearchType>(initialType);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortBy>(initialSort);
  const [showFilters, setShowFilters] = useState(false);

  const { data: categories } = useCategories();
  const {
    data: searchResults,
    isLoading,
    error,
  } = useSearchThreads({
    query: initialQuery,
    categoryId: initialCategory || undefined,
    sortBy: initialSort,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Update URL params
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (searchType !== "threads") params.set("type", searchType);
    if (selectedCategory) params.set("category", selectedCategory);
    if (sortBy !== "relevance") params.set("sort", sortBy);

    setSearchParams(params);
  };

  const clearFilters = () => {
    setQuery("");
    setSearchType("threads");
    setSelectedCategory("");
    setSortBy("relevance");
    setSearchParams({});
  };

  const getSearchTypeIcon = (type: SearchType) => {
    switch (type) {
      case "threads":
        return <MessageSquare className="w-4 h-4" />;
      case "posts":
        return <Tag className="w-4 h-4" />;
      case "users":
        return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Recherche dans le forum
        </h1>
        <p className="text-gray-300 mt-1">
          Trouvez des sujets, messages et utilisateurs
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Main Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher dans le forum..."
            className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-300"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Search Types */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
          {(["threads", "posts", "users"] as SearchType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSearchType(type)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                searchType === type
                  ? "bg-gray-700 text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {getSearchTypeIcon(type)}
              <span className="capitalize">
                {type === "threads"
                  ? "Sujets"
                  : type === "posts"
                  ? "Messages"
                  : "Utilisateurs"}
              </span>
            </button>
          ))}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="hero-card space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Catégorie
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-900 text-white"
                >
                  <option value="">Toutes les catégories</option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Trier par
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortBy)}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-900 text-white"
                >
                  <option value="relevance">Pertinence</option>
                  <option value="date">Date (plus récent)</option>
                  <option value="replies">Nombre de réponses</option>
                  <option value="views">Nombre de vues</option>
                </select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-600">
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-gray-200"
              >
                Effacer les filtres
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Appliquer les filtres
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Search Results */}
      {initialQuery && (
        <div className="space-y-4">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Résultats pour "{initialQuery}"
              </h2>
              {searchResults && (
                <p className="text-sm text-gray-400">
                  {searchResults.length} résultat
                  {searchResults.length !== 1 ? "s" : ""} trouvé
                  {searchResults.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>

            {(initialCategory || initialSort !== "relevance") && (
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-400">Filtres actifs:</span>
                {initialCategory && (
                  <span className="px-2 py-1 bg-red-900/30 text-red-300 rounded-full text-xs">
                    {categories?.find((c) => c.id === initialCategory)?.name}
                  </span>
                )}
                {initialSort !== "relevance" && (
                  <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">
                    Trié par{" "}
                    {initialSort === "date"
                      ? "date"
                      : initialSort === "replies"
                      ? "réponses"
                      : "vues"}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse hero-card">
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <p className="text-red-300">
                Une erreur est survenue lors de la recherche. Veuillez
                réessayer.
              </p>
            </div>
          )}

          {/* Results */}
          {searchResults && !isLoading && (
            <>
              {searchResults.length > 0 ? (
                <ThreadsList threads={searchResults} />
              ) : (
                <div className="text-center py-12">
                  <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Essayez avec des mots-clés différents ou modifiez vos
                    filtres.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Suggestions :</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Vérifiez l'orthographe de vos mots-clés</li>
                      <li>• Utilisez des termes plus généraux</li>
                      <li>• Essayez différentes catégories</li>
                      <li>• Supprimez certains filtres</li>
                    </ul>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Search Suggestions (when no query) */}
      {!initialQuery && (
        <div className="space-y-6">
          {/* Popular Searches */}
          <div className="hero-card">
            <h3 className="text-lg font-semibold text-white mb-4">
              Recherches populaires
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Intelligence artificielle",
                "Machine learning",
                "Deep learning",
                "Python",
                "Projets",
                "Événements",
                "Formation",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    const params = new URLSearchParams();
                    params.set("q", term);
                    setSearchParams(params);
                  }}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Search Tips */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-200 mb-2">
              Conseils de recherche
            </h3>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>
                • Utilisez des guillemets pour rechercher une phrase exacte
              </li>
              <li>• Ajoutez un + devant un mot pour le rendre obligatoire</li>
              <li>• Ajoutez un - devant un mot pour l'exclure</li>
              <li>• Utilisez les filtres pour affiner vos résultats</li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="hero-card">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-gray-400" />
              <h3 className="text-lg font-semibold text-white">
                Activité récente
              </h3>
            </div>
            <div className="text-center py-4">
              <p className="text-gray-400">
                <Link
                  to="/forum/activity"
                  className="text-red-400 hover:underline"
                >
                  Voir toute l'activité du forum
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
