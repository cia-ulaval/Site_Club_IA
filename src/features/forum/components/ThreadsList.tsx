import { Link } from 'react-router-dom';
import { Pin, Lock, MessageSquare, Eye, Clock, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ThreadWithDetails } from '../types';

interface ThreadBadgesProps {
  isPinned: boolean;
  isLocked: boolean;
}

export function ThreadBadges({ isPinned, isLocked }: ThreadBadgesProps) {
  if (!isPinned && !isLocked) return null;

  return (
    <div className="flex items-center space-x-1">
      {isPinned && (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
          <Pin className="w-3 h-3 mr-1" />
          Épinglé
        </span>
      )}
      {isLocked && (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
          <Lock className="w-3 h-3 mr-1" />
          Verrouillé
        </span>
      )}
    </div>
  );
}

interface StatsPillProps {
  icon: React.ComponentType<{ className?: string }>;
  count: number;
  label: string;
}

export function StatsPill({ icon: Icon, count, label }: StatsPillProps) {
  return (
    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{count}</span>
      <span className="text-xs hidden sm:inline">{label}</span>
    </div>
  );
}

interface ThreadRowProps {
  thread: ThreadWithDetails;
}

export function ThreadRow({ thread }: ThreadRowProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow">
      <div className="p-4">
        <div className="flex items-start justify-between space-x-4">
          {/* Thread Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <ThreadBadges isPinned={thread.is_pinned} isLocked={thread.is_locked} />
            </div>
            
            <Link 
              to={`/forum/t/${thread.id}`}
              className="block group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                {thread.title}
              </h3>
            </Link>
            
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>par {thread.author?.display_name || thread.author?.username}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>
                  {formatDistanceToNow(new Date(thread.created_at), {
                    addSuffix: true,
                    locale: fr
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6">
            <StatsPill 
              icon={MessageSquare} 
              count={thread.replies_count} 
              label="réponses" 
            />
            <StatsPill 
              icon={Eye} 
              count={thread.views_count} 
              label="vues" 
            />
          </div>

          {/* Last Post */}
          {thread.last_post && (
            <div className="text-right min-w-0 hidden md:block">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Dernier message
              </div>
              <div className="text-sm text-gray-900 dark:text-white font-medium">
                {thread.last_post.author?.display_name || thread.last_post.author?.username}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {formatDistanceToNow(new Date(thread.last_post.created_at), {
                  addSuffix: true,
                  locale: fr
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ThreadsListProps {
  threads: ThreadWithDetails[];
  loading?: boolean;
}

export function ThreadsList({ threads, loading }: ThreadsListProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
              <div className="flex space-x-4">
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-12"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (threads.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Aucun sujet trouvé
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Soyez le premier à créer un sujet dans cette catégorie !
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {threads.map((thread) => (
        <ThreadRow key={thread.id} thread={thread} />
      ))}
    </div>
  );
}
