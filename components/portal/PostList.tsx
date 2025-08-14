import EmptyState from "./EmptyState";
import Paginator from "./Paginator";

export default function PostList({ posts, total, thread, page }: any) {
  if (!posts?.length)
    return <EmptyState message="Aucune réponse pour ce sujet." />;
  return (
    <div>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li
            key={post.id}
            className="border rounded p-4 bg-white dark:bg-gray-800"
          >
            <div className="text-sm text-gray-500 mb-2">
              par {post.author?.username || "Anonyme"} •{" "}
              {new Date(post.created_at).toLocaleString()}
            </div>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content_html || post.content,
              }}
            />
          </li>
        ))}
      </ul>
      <Paginator total={total} page={page} />
    </div>
  );
}
