import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Pin,
  Lock,
  Trash2,
  Users,
  MessageSquare,
} from "lucide-react";
import { supabase } from "../../../lib/supabase";
import {
  useThread,
  usePostsByThread,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
  useUpdateThread,
  useDeleteThread,
  useIncrementThreadViews,
} from "../hooks";
import { PostItem } from "../components/PostItem";
import { PostComposer } from "../components/PostComposer";
import { MarkdownRenderer } from "../components/MarkdownRenderer";
import { PostWithDetails, UserRole } from "../types";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

export function ThreadView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentUserProfile, setCurrentUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [replyTo, setReplyTo] = useState<PostWithDetails | null>(null);
  const [editingPost, setEditingPost] = useState<PostWithDetails | null>(null);

  // Hooks
  const { data: thread, isLoading: threadLoading } = useThread(id!);
  const { data: postsData, isLoading: postsLoading } = usePostsByThread(id!, {
    pageSize: 50,
  });
  const createPostMutation = useCreatePost();
  const updatePostMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();
  const updateThreadMutation = useUpdateThread();
  const deleteThreadMutation = useDeleteThread();
  const incrementViewsMutation = useIncrementThreadViews();

  // Load current user
  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user);

      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        setCurrentUserProfile(profile);
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  // Increment views when thread loads
  useEffect(() => {
    if (thread && currentUser) {
      incrementViewsMutation.mutate({
        threadId: thread.id,
        userId: currentUser.id,
      });
    }
  }, [thread, currentUser, incrementViewsMutation]);

  const handleCreatePost = async (content: string) => {
    if (!currentUser) return;

    await createPostMutation.mutateAsync({
      post: {
        content,
        thread_id: id!,
        reply_to_id: replyTo?.id,
      },
      authorId: currentUser.id,
    });

    setReplyTo(null);
  };

  const handleUpdatePost = async (content: string) => {
    if (!editingPost) return;

    await updatePostMutation.mutateAsync({
      id: editingPost.id,
      content,
    });

    setEditingPost(null);
  };

  const handleDeletePost = async (postId: string) => {
    await deletePostMutation.mutateAsync(postId);
  };

  const handleReply = (post: PostWithDetails) => {
    setReplyTo(post);
    setEditingPost(null);
  };

  const handleQuote = (post: PostWithDetails) => {
    const quotedContent = `> ${post.content.split("\n").join("\n> ")}\n\n`;
    setReplyTo({ ...post, content: quotedContent });
    setEditingPost(null);
  };

  const handleEdit = (post: PostWithDetails) => {
    setEditingPost(post);
    setReplyTo(null);
  };

  const handleTogglePin = async () => {
    if (!thread || !canModerate) return;

    await updateThreadMutation.mutateAsync({
      id: thread.id,
      updates: { is_pinned: !thread.is_pinned },
    });
  };

  const handleToggleLock = async () => {
    if (!thread || !canModerate) return;

    await updateThreadMutation.mutateAsync({
      id: thread.id,
      updates: { is_locked: !thread.is_locked },
    });
  };

  const handleDeleteThread = async () => {
    if (!thread || !canModerate) return;

    if (confirm("Êtes-vous sûr de vouloir supprimer ce sujet ?")) {
      await deleteThreadMutation.mutateAsync(thread.id);
      navigate(`/forum/c/${thread.category?.slug}`);
    }
  };

  if (isLoading || threadLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-8"></div>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gray-300 dark:bg-gray-600 rounded"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!thread) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Sujet introuvable
        </h2>
        <Link
          to="/forum"
          className="text-red-600 dark:text-red-400 hover:underline"
        >
          Retour au forum
        </Link>
      </div>
    );
  }

  const canModerate = [
    "développeur",
    "président",
    "leader",
    "responsable",
  ].includes(currentUserProfile?.role || "");
  const canPost = currentUser && !thread.is_locked;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <Link
            to={`/forum/c/${thread.category?.slug}`}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              {thread.is_pinned && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  <Pin className="w-3 h-3 mr-1" />
                  Épinglé
                </span>
              )}
              {thread.is_locked && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  <Lock className="w-3 h-3 mr-1" />
                  Verrouillé
                </span>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-900 dark:text-white truncate">
              {thread.title}
            </h1>

            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>
                  par {thread.author?.display_name || thread.author?.username}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>{thread.replies_count} réponses</span>
              </div>
              <span>
                {formatDistanceToNow(new Date(thread.created_at), {
                  addSuffix: true,
                  locale: fr,
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Moderation Actions */}
        {canModerate && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleTogglePin}
              className={`p-2 rounded-md transition-colors ${
                thread.is_pinned
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
              } hover:bg-gray-200 dark:hover:bg-gray-600`}
              title={thread.is_pinned ? "Désépingler" : "Épingler"}
            >
              <Pin className="w-4 h-4" />
            </button>

            <button
              onClick={handleToggleLock}
              className={`p-2 rounded-md transition-colors ${
                thread.is_locked
                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
              } hover:bg-gray-200 dark:hover:bg-gray-600`}
              title={thread.is_locked ? "Déverrouiller" : "Verrouiller"}
            >
              <Lock className="w-4 h-4" />
            </button>

            <button
              onClick={handleDeleteThread}
              className="p-2 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-md hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-400 transition-colors"
              title="Supprimer le sujet"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Original Post */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="flex">
          {/* Author Sidebar */}
          <div className="w-32 sm:w-48 border-r border-gray-200 dark:border-gray-700 p-4">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                {thread.author?.avatar_url ? (
                  <img
                    src={thread.author.avatar_url}
                    alt={thread.author.display_name || thread.author.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                    {(thread.author?.display_name ||
                      thread.author?.username)?.[0]?.toUpperCase()}
                  </span>
                )}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {thread.author?.display_name || thread.author?.username}
              </div>
              {thread.author?.role && (
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    thread.author.role === "développeur"
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      : thread.author.role === "président"
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      : thread.author.role === "leader"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : thread.author.role === "responsable"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  {thread.author.role === "développeur"
                    ? "Développeur"
                    : thread.author.role === "président"
                    ? "Président"
                    : thread.author.role === "leader"
                    ? "Leader"
                    : thread.author.role === "responsable"
                    ? "Responsable"
                    : "Membre"}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <MarkdownRenderer content={thread.content} />
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      {postsLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {postsData?.data.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              currentUserId={currentUser?.id}
              currentUserRole={currentUserProfile?.role as UserRole}
              onEdit={handleEdit}
              onDelete={handleDeletePost}
              onReply={handleReply}
              onQuote={handleQuote}
            />
          ))}
        </div>
      )}

      {/* Reply/Edit Composer */}
      {(canPost || editingPost) && (
        <div className="space-y-4">
          {!currentUser && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                Vous devez être connecté pour répondre à ce sujet.
              </p>
            </div>
          )}

          {currentUser && !thread.is_locked && (
            <PostComposer
              onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
              replyTo={
                replyTo
                  ? {
                      id: replyTo.id,
                      content: replyTo.content,
                      author:
                        replyTo.author?.display_name ||
                        replyTo.author?.username ||
                        "Utilisateur",
                    }
                  : undefined
              }
              placeholder={
                editingPost ? "Modifier votre message..." : "Votre réponse..."
              }
              submitLabel={editingPost ? "Modifier" : "Répondre"}
              disabled={
                createPostMutation.isPending || updatePostMutation.isPending
              }
            />
          )}

          {editingPost && (
            <div className="flex space-x-2">
              <button
                onClick={() => setEditingPost(null)}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Annuler
              </button>
            </div>
          )}
        </div>
      )}

      {thread.is_locked && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-red-600 dark:text-red-400" />
            <p className="text-red-800 dark:text-red-200">
              Ce sujet est verrouillé. Aucune nouvelle réponse n'est autorisée.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
