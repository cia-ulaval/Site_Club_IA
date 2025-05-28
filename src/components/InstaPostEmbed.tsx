import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstaPostEmbedProps {
  url: string;
}

export default function InstaPostEmbed({ url }: InstaPostEmbedProps) {
  useEffect(() => {
    // Nécessaire pour charger le script Instagram une seule fois
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div
      className="rounded-xl bg-gradient-to-br from-red-900/60 via-black/60 to-red-700/40 shadow-lg p-4 max-w-xl mx-auto"
      style={{
        border: "2px solid #dc2626", // Tailwind red-600
        boxShadow: "0 4px 24px 0 rgba(220,38,38,0.15)",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          margin: "auto",
          background: "transparent",
          border: "none",
          minWidth: 320,
          maxWidth: 500,
        }}
      ></blockquote>
    </div>
  );
}
