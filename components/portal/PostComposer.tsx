import React, { useState } from "react";
import { createPost } from "../../lib/supabase/client";
import MarkdownPreview from "./MarkdownPreview";

export default function PostComposer({ threadId }: { threadId: number }) {
  const [content, setContent] = useState("");
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
    const res = await createPost({ thread_id: threadId, content });
    if (res?.error) setError(res.error);
    else {
      setSuccess(true);
      setCooldown(10); // 10s cooldown
      setContent("");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        minLength={1}
        maxLength={20000}
        placeholder="Votre réponse (Markdown)"
        className="w-full p-2 rounded border h-32"
      />
      <MarkdownPreview content={content} />
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">Réponse publiée !</div>}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading || cooldown > 0}
      >
        {cooldown > 0
          ? `Attendez ${cooldown}s`
          : loading
          ? "Envoi…"
          : "Répondre"}
      </button>
    </form>
  );
}
