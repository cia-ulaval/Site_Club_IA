import Link from "next/link";

export default function Paginator({
  total,
  page,
}: {
  total: number;
  page: number;
}) {
  const pageSize = 20;
  const lastPage = Math.ceil(total / pageSize);
  if (lastPage <= 1) return null;
  return (
    <nav className="flex justify-center mt-6 gap-2">
      {Array.from({ length: lastPage }, (_, i) => (
        <Link
          key={i}
          href={`?page=${i + 1}`}
          className={`px-3 py-1 rounded ${
            page === i + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </nav>
  );
}
