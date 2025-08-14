export default function ThreadItem({ thread }: { thread: any }) {
  if (!thread) return null;
  return (
    <div className="mb-6 border-b pb-4">
      <h2 className="text-xl font-bold mb-2">{thread.title}</h2>
      <div className="text-sm text-gray-500 mb-2">
        par {thread.author?.username || "Anonyme"} •{" "}
        {new Date(thread.created_at).toLocaleString()}
      </div>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{
          __html: thread.content_html || thread.content,
        }}
      />
      {thread.is_pinned && (
        <span className="ml-2 px-2 py-1 text-xs bg-yellow-200 text-yellow-800 rounded">
          Épinglé
        </span>
      )}
      {thread.is_locked && (
        <span className="ml-2 px-2 py-1 text-xs bg-gray-300 text-gray-800 rounded">
          Fermé
        </span>
      )}
    </div>
  );
}
