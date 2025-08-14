import { useMemo } from 'react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const processedContent = useMemo(() => {
    try {
      const result = remark()
        .use(remarkBreaks)
        .use(remarkGfm)
        .use(rehypeRaw)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .processSync(content);
      
      return result.toString();
    } catch (error) {
      console.error('Error processing markdown:', error);
      return content;
    }
  }, [content]);

  return (
    <div 
      className={`prose prose-sm max-w-none dark:prose-invert prose-gray dark:prose-gray ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
