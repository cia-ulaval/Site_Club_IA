import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

export default function MarkdownPreview({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    if (!content) return setHtmlContent("");
    remark()
      .use(html)
      .process(content)
      .then((file) => {
        setHtmlContent(String(file));
      });
  }, [content]);
  if (!content) return null;
  return (
    <div
      className="prose dark:prose-invert max-w-none border p-2 bg-gray-50 dark:bg-gray-900 mt-2"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
