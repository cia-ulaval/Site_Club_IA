import React, { useState } from "react";

export default function RealtimeToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      className={`px-3 py-1 rounded text-xs ml-2 ${
        enabled
          ? "bg-green-600 text-white"
          : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      }`}
      onClick={() => onToggle(!enabled)}
    >
      {enabled ? "Realtime activé" : "Activer Realtime"}
    </button>
  );
}
