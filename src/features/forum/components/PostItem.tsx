import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { MoreVertical, Edit, Trash2, Reply, Quote, Clock } from "lucide-react";
import { PostWithDetails, UserRole } from "../types";
import { MarkdownRenderer } from ".";

interface PostItemProps {
  post: PostWithDetails;
  currentUserId?: string;
  currentUserRole?: UserRole;
  onEdit?: (post: PostWithDetails) => void;
  onDelete?: (postId: string) => void;
  onReply?: (post: PostWithDetails) => void;
  onQuote?: (post: PostWithDetails) => void;
}

export function PostItem({
  post,
  currentUserId,
  currentUserRole,
  onEdit,
  onDelete,
  onReply,
  onQuote,
}: PostItemProps) {
  const [showMenu, setShowMenu] = useState(false);

  const canEdit =
    currentUserId === post.author_id ||
    ["développeur", "président", "leader", "responsable"].includes(
      currentUserRole || ""
    );
  const canDelete =
    currentUserId === post.author_id ||
    ["développeur", "président", "leader", "responsable"].includes(
      currentUserRole || ""
    );

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case "développeur":
        return "bg-purple-900 text-purple-200";
      case "président":
        return "bg-red-900 text-red-200";
      case "leader":
        return "bg-blue-900 text-blue-200";
      case "responsable":
        return "bg-green-900 text-green-200";
      default:
        return "bg-gray-700 text-gray-200";
    }
  };

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case "développeur":
        return "Développeur";
      case "président":
        return "Président";
      case "leader":
        return "Leader";
      case "responsable":
        return "Responsable";
      default:
        return "Membre";
    }
  };

  return (
    <div className="hero-card">
      <div className="flex">
        {/* Author Info Sidebar */}
        <div className="w-32 sm:w-48 border-r border-gray-700 p-4">
          <div className="text-center">
            {/* Avatar */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
              {post.author?.avatar_url ? (
                <img
                  src={post.author.avatar_url}
                  alt={post.author.display_name || post.author.username}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-lg font-semibold text-gray-300">
                  {(post.author?.display_name ||
                    post.author?.username)?.[0]?.toUpperCase()}
                </span>
              )}
            </div>

            {/* Username */}
            <div className="text-sm font-semibold text-white mb-1">
              {post.author?.display_name || post.author?.username}
            </div>

            {/* Role Badge */}
            {post.author?.role && (
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
                  post.author.role
                )}`}
              >
                {getRoleLabel(post.author.role)}
              </span>
            )}
          </div>
        </div>

        {/* Post Content */}
        <div className="flex-1 p-4">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: fr,
                })}
              </span>
              {post.is_edited && (
                <>
                  <span>•</span>
                  <span className="italic">modifié</span>
                </>
              )}
            </div>

            {/* Actions Menu */}
            {(canEdit || canDelete || onReply || onQuote) && (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 hero-card border border-gray-700 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      {onReply && (
                        <button
                          onClick={() => {
                            onReply(post);
                            setShowMenu(false);
                          }}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <Reply className="w-4 h-4" />
                          <span>Répondre</span>
                        </button>
                      )}
                      {onQuote && (
                        <button
                          onClick={() => {
                            onQuote(post);
                            setShowMenu(false);
                          }}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <Quote className="w-4 h-4" />
                          <span>Citer</span>
                        </button>
                      )}
                      {canEdit && onEdit && (
                        <button
                          onClick={() => {
                            onEdit(post);
                            setShowMenu(false);
                          }}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Modifier</span>
                        </button>
                      )}
                      {canDelete && onDelete && (
                        <button
                          onClick={() => {
                            if (
                              confirm(
                                "Êtes-vous sûr de vouloir supprimer ce message ?"
                              )
                            ) {
                              onDelete(post.id);
                            }
                            setShowMenu(false);
                          }}
                          className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Supprimer</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quote if reply */}
          {post.reply_to && (
            <div className="mb-4 p-3 bg-gray-800 border-l-4 border-gray-600 rounded-r">
              <div className="text-xs text-gray-400 mb-1">
                En réponse à {post.reply_to.author?.username}
              </div>
              <div className="text-sm text-gray-300 line-clamp-3">
                <MarkdownRenderer content={post.reply_to.content} />
              </div>
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-sm max-w-none prose-invert">
            <MarkdownRenderer content={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
