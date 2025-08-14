// Page d’accueil du portail : liste des catégories
import CategoryList from "../../components/portal/CategoryList";
import { getCategories } from "../../lib/supabase/server";

export default async function PortalHome() {
  const categories = await getCategories();
  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Portail du Club IA</h1>
      <CategoryList categories={categories} />
    </main>
  );
}
