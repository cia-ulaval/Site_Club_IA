import React, { useState } from "react";
import { createThread } from "../../lib/supabase/client";
import MarkdownPreview from "./MarkdownPreview";

export default function ThreadComposer({ categories }: { categories: any[] }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories?.[0]?.id || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  // Cooldown timer
  React.useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const res = await createThread({ title, content, category_id: category });
    if (res?.error) setError(res.error);
    else {
      setSuccess(true);
      setCooldown(10); // 10s cooldown
      setTitle("");
      setContent("");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 rounded border"
      >
        {categories.map((cat: any) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        minLength={3}
        maxLength={160}
        placeholder="Titre du sujet"
        className="w-full p-2 rounded border"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        minLength={3}
        maxLength={20000}
        placeholder="Contenu (Markdown)"
        className="w-full p-2 rounded border h-40"
      />
      <MarkdownPreview content={content} />
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">Sujet créé !</div>}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading || cooldown > 0}
      >
        {cooldown > 0
          ? `Attendez ${cooldown}s`
          : loading
          ? "Création…"
          : "Créer le sujet"}
      </button>
    </form>
  );
}
