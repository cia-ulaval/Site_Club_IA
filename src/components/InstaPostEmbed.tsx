import { useEffect } from 'react';

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
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div
      className="rounded-xl bg-gradient-to-br from-primary-900/60 via-base/60 to-primary-500/40 shadow-lg p-4 max-w-xl mx-auto"
      style={{
        border: '2px solid rgb(var(--color-primary-500))',
        boxShadow: '0 4px 24px 0 rgb(var(--color-primary-500) / 0.15)',
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          margin: 'auto',
          background: 'transparent',
          border: 'none',
          minWidth: 320,
          maxWidth: 500,
        }}
      ></blockquote>
    </div>
  );
}
