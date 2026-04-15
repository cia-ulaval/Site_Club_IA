import { ReactNode } from 'react';

interface TeamMemberCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function TeamMemberCard({ icon, title, description }: TeamMemberCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-between bg-gradient-to-br from-primary-900/30 to-base/30 rounded-2xl shadow-lg px-4 py-4 mx-2 my-3"
      style={{
        border: '2px solid rgb(var(--color-primary-500))',
        boxShadow: '0 2px 12px 0 rgb(var(--color-primary-500) / 0.15)',
        width: 170,
        minWidth: 170,
        maxWidth: 170,
        height: 200,
        minHeight: 200,
        maxHeight: 200,
        overflow: 'hidden',
      }}
    >
      <div className="theme-text-accent mb-2 flex justify-center">{icon}</div>
      <h3 className="text-xs font-bold text-accent-300 mb-1 text-center break-words">{title}</h3>
      <p className="theme-text-muted text-[10px] text-center break-words min-h-[32px]">
        {description || '\u00A0'}
      </p>
    </div>
  );
}
