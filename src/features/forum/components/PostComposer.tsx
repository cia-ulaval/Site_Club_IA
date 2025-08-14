import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Eye, EyeOff } from 'lucide-react';
import { MarkdownRenderer } from './MarkdownRenderer';

const postSchema = z.object({
  content: z.string().min(1, 'Le contenu est requis').max(10000, 'Le contenu ne peut pas dépasser 10000 caractères'),
});

type PostForm = z.infer<typeof postSchema>;

interface PostComposerProps {
  onSubmit: (content: string) => Promise<void>;
  replyTo?: {
    id: string;
    content: string;
    author: string;
  };
  placeholder?: string;
  submitLabel?: string;
  disabled?: boolean;
}

export function PostComposer({ 
  onSubmit, 
  replyTo, 
  placeholder = "Votre message...",
  submitLabel = "Publier",
  disabled = false
}: PostComposerProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
  });

  const content = watch('content', '');

  const handleFormSubmit = async (data: PostForm) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(data.content);
      reset();
      setShowPreview(false);
    } catch (error) {
      console.error('Error submitting post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      {/* Reply To Preview */}
      {replyTo && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-500 p-3 rounded-r">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              En réponse à {replyTo.author}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              <MarkdownRenderer content={replyTo.content} />
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="p-4">
          {/* Editor Tabs */}
          <div className="flex items-center space-x-4 mb-4 border-b border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => setShowPreview(false)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                !showPreview
                  ? 'border-red-500 text-red-600 dark:text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
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
                  ? 'border-red-500 text-red-600 dark:text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              disabled={!content}
            >
              <EyeOff className="w-4 h-4 inline mr-1" />
              Aperçu
            </button>
          </div>

          {/* Content Area */}
          {showPreview ? (
            <div className="min-h-[120px] p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
              {content ? (
                <MarkdownRenderer content={content} />
              ) : (
                <p className="text-gray-500 dark:text-gray-400 italic">
                  Rien à prévisualiser...
                </p>
              )}
            </div>
          ) : (
            <textarea
              {...register('content')}
              placeholder={placeholder}
              rows={6}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-vertical"
            />
          )}

          {errors.content && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.content.message}
            </p>
          )}

          {/* Markdown Help */}
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Vous pouvez utiliser la{' '}
            <a 
              href="https://www.markdownguide.org/basic-syntax/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline"
            >
              syntaxe Markdown
            </a>
            {' '}pour formater votre message.
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {content.length}/10000 caractères
          </div>
          
          <button
            type="submit"
            disabled={disabled || isSubmitting || !content.trim()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Publication...' : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
