import Link from "next/link";

export default function CategoryList({ categories }: { categories: any[] }) {
  if (!categories?.length)
    return <div className="text-center text-gray-500">Aucune catégorie.</div>;
  return (
    <ul className="space-y-4">
      {categories.map((cat) => (
        <li
          key={cat.id}
          className="border rounded p-4 bg-white dark:bg-gray-800"
        >
          <Link
            href={`/portal/c/${cat.slug}`}
            className="font-semibold text-lg hover:underline"
          >
            {cat.name}
          </Link>
          <div className="text-sm text-gray-500 mt-1">{cat.description}</div>
        </li>
      ))}
    </ul>
  );
}
