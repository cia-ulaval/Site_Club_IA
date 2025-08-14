// Liste paginée des threads d’une catégorie
import ThreadList from "../../../components/portal/ThreadList";
import {
  getThreadsByCategory,
  getCategoryBySlug,
} from "../../../lib/supabase/server";
import SearchBar from "../../../components/portal/SearchBar";

export default async function CategoryPage({ params, searchParams }: any) {
  const { slug } = params;
  const page = Number(searchParams?.page) || 1;
  const q = searchParams?.q || "";
  const category = await getCategoryBySlug(slug);
  const { threads, total } = await getThreadsByCategory(slug, page, q);
  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-xl font-bold mb-4">{category?.name}</h1>
      <SearchBar defaultValue={q} />
      <ThreadList
        threads={threads}
        total={total}
        category={category}
        page={page}
      />
    </main>
  );
}
