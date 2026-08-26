import { SiDiscord } from '@icons-pack/react-simple-icons';
import { ReactNode } from 'react';
import { DISCORD_URL } from '../lib/site';

interface DiscordCTAProps {
  /** Optional headline block shown above the button (already-translated nodes). */
  children?: ReactNode;
  /** Translated button label. */
  label: string;
}

export default function DiscordCTA({ children, label }: DiscordCTAProps) {
  return (
    <div className="text-center pt-8">
      {children && <p className="cia-body-lead mx-auto mb-6 max-w-2xl text-ink">{children}</p>}
      <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="cia-btn-primary">
        <SiDiscord className="h-5 w-5" aria-hidden="true" />
        {label}
      </a>
    </div>
  );
}
