// Création d’un nouveau thread
import ThreadComposer from "../../../components/portal/ThreadComposer";
import { getCategories } from "../../../lib/supabase/server";

export default async function NewThreadPage() {
  const categories = await getCategories();
  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-xl font-bold mb-4">Nouveau sujet</h1>
      <ThreadComposer categories={categories} />
    </main>
  );
}
