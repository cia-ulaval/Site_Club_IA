"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  const [q, setQ] = useState(defaultValue);
  const router = useRouter();
  return (
    <form
      className="mb-4 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`?q=${encodeURIComponent(q)}`);
      }}
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher…"
        className="flex-1 p-2 rounded border"
      />
      <button type="submit" className="btn btn-secondary">
        Rechercher
      </button>
    </form>
  );
}
