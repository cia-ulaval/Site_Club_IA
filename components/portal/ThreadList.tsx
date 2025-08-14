import Link from "next/link";
import Paginator from "./Paginator";
import EmptyState from "./EmptyState";

export default function ThreadList({ threads, total, category, page }: any) {
  if (!threads?.length)
    return <EmptyState message="Aucun sujet dans cette catégorie." />;
  return (
    <div>
      <ul className="divide-y">
        {threads.map((thread: any) => (
          <li key={thread.id} className="py-4">
            <Link
              href={`/portal/t/${thread.id}`}
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {thread.title}
            </Link>
            <div className="text-xs text-gray-500 mt-1">
              par {thread.author?.username || "Anonyme"} •{" "}
              {new Date(thread.created_at).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
      <Paginator total={total} page={page} />
    </div>
  );
}
