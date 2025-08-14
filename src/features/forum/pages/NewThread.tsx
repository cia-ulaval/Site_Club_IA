import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Eye, EyeOff, Send } from "lucide-react";
import { supabase } from "../../../lib/supabase";
import { useCategories, useCreateThread } from "../hooks";
import { MarkdownRenderer } from "../components/MarkdownRenderer";

const newThreadSchema = z.object({
  title: z
    .string()
    .min(5, "Le titre doit contenir au moins 5 caractères")
    .max(200, "Le titre ne peut pas dépasser 200 caractères"),
  content: z
    .string()
    .min(10, "Le contenu doit contenir au moins 10 caractères")
    .max(50000, "Le contenu ne peut pas dépasser 50000 caractères"),
  category_id: z.string().min(1, "Veuillez sélectionner une catégorie"),
});

type NewThreadForm = z.infer<typeof newThreadSchema>;

export function NewThread() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get pre-selected category from navigation state
  const preSelectedCategoryId = location.state?.categoryId;

  const { data: categories } = useCategories();
  const createThreadMutation = useCreateThread();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<NewThreadForm>({
    resolver: zodResolver(newThreadSchema),
    defaultValues: {
      category_id: preSelectedCategoryId || "",
    },
  });

  const title = watch("title", "");
  const content = watch("content", "");
  const categoryId = watch("category_id", "");

  // Load current user
  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user);
      setIsLoading(false);

      if (!user) {
        navigate("/forum");
      }
    };

    loadUser();
  }, [navigate]);

  // Set pre-selected category
  useEffect(() => {
    if (preSelectedCategoryId) {
      setValue("category_id", preSelectedCategoryId);
    }
  }, [preSelectedCategoryId, setValue]);

  const onSubmit = async (data: NewThreadForm) => {
    if (!currentUser) return;

    try {
      const newThread = await createThreadMutation.mutateAsync({
        thread: data,
        authorId: currentUser.id,
      });

      // Navigate to the created thread
      navigate(`/forum/t/${newThread.id}`);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-700 rounded"></div>
            <div className="h-32 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Connexion requise
        </h2>
        <p className="text-gray-300 mb-6">
          Vous devez être connecté pour créer un nouveau sujet.
        </p>
        <Link to="/forum" className="text-red-400 hover:underline">
          Retour au forum
        </Link>
      </div>
    );
  }

  const selectedCategory = categories?.find((cat) => cat.id === categoryId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link
          to="/forum"
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">
            Créer un nouveau sujet
          </h1>
          <p className="text-gray-300 mt-1">
            Partagez vos idées, questions ou discussions avec la communauté
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Category Selection */}
        <div className="hero-card">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Catégorie *
          </label>
          <select
            {...register("category_id")}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-900 text-white"
          >
            <option value="">Sélectionner une catégorie</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
          {errors.category_id && (
            <p className="mt-1 text-sm text-red-400">
              {errors.category_id.message}
            </p>
          )}

          {selectedCategory && (
            <div className="mt-2 p-3 bg-gray-900 rounded-md">
              <div className="flex items-center space-x-2 text-sm">
                <span>{selectedCategory.icon}</span>
                <span className="font-medium text-white">
                  {selectedCategory.name}
                </span>
              </div>
              {selectedCategory.description && (
                <p className="text-xs text-gray-400 mt-1">
                  {selectedCategory.description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Title */}
        <div className="hero-card">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Titre du sujet *
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Un titre descriptif pour votre sujet..."
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-900 text-white"
          />
          <div className="flex justify-between items-center mt-1">
            {errors.title ? (
              <p className="text-sm text-red-400">{errors.title.message}</p>
            ) : (
              <p className="text-xs text-gray-400">
                Un titre clair aide les autres à comprendre votre sujet
              </p>
            )}
            <span className="text-xs text-gray-400">{title.length}/200</span>
          </div>
        </div>

        {/* Content */}
        <div className="hero-card rounded-lg">
          <div className="p-6 pb-0">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-300">
                Contenu *
              </label>

              {/* Editor Tabs */}
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    !showPreview
                      ? "border-red-500 text-red-400"
                      : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <Eye className="w-4 h-4 inline mr-1" />
                  Éditer
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    showPreview
                      ? "border-red-500 text-red-400"
                      : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
                  disabled={!content}
                >
                  <EyeOff className="w-4 h-4 inline mr-1" />
                  Aperçu
                </button>
              </div>
            </div>

            {/* Content Area */}
            {showPreview ? (
              <div className="min-h-[200px] p-4 border border-gray-600 rounded-md bg-gray-900 mb-4">
                {content ? (
                  <MarkdownRenderer content={content} />
                ) : (
                  <p className="text-gray-400 italic">
                    Rien à prévisualiser...
                  </p>
                )}
              </div>
            ) : (
              <textarea
                {...register("content")}
                placeholder="Décrivez votre sujet en détail. Vous pouvez utiliser la syntaxe Markdown pour formater votre texte..."
                rows={12}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-900 text-white resize-vertical mb-4"
              />
            )}

            {errors.content && (
              <p className="text-sm text-red-400 mb-4">
                {errors.content.message}
              </p>
            )}

            {/* Markdown Help */}
            <div className="text-xs text-gray-400 mb-4">
              Vous pouvez utiliser la{" "}
              <a
                href="https://www.markdownguide.org/basic-syntax/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline"
              >
                syntaxe Markdown
              </a>{" "}
              pour formater votre message.
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-900 rounded-b-lg border-t border-gray-600">
            <div className="text-xs text-gray-400">
              {content.length}/50000 caractères
            </div>

            <div className="flex items-center space-x-3">
              <Link
                to="/forum"
                className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                Annuler
              </Link>

              <button
                type="submit"
                disabled={!isValid || createThreadMutation.isPending}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                {createThreadMutation.isPending
                  ? "Création..."
                  : "Créer le sujet"}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Guidelines */}
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-200 mb-2">
          Conseils pour un bon sujet
        </h3>
        <ul className="text-sm text-blue-300 space-y-1">
          <li>• Choisissez un titre descriptif et précis</li>
          <li>• Vérifiez que votre sujet n'existe pas déjà</li>
          <li>• Soyez respectueux et constructif</li>
          <li>• Ajoutez tous les détails pertinents dès le début</li>
        </ul>
      </div>
    </div>
  );
}
