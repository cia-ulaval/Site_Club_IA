import { ReactNode } from "react";

interface TeamMemberCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function TeamMemberCard({
  icon,
  title,
  description,
}: TeamMemberCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-between bg-gradient-to-br from-red-900/20 to-black/10 dark:from-red-900/30 dark:to-black/30 rounded-2xl shadow-lg px-4 py-4 mx-2 my-3"
      style={{
        border: "2px solid #ef4444",
        boxShadow: "0 2px 12px 0 rgba(239,68,68,0.15)",
        width: 170,
        minWidth: 170,
        maxWidth: 170,
        height: 200,
        minHeight: 200,
        maxHeight: 200,
        overflow: "hidden",
      }}
    >
      <div className="text-red-400 mb-2 flex justify-center">{icon}</div>
      <h3 className="text-xs font-bold text-white mb-1 text-center break-words">
        {title}
      </h3>
      <p className="card-text text-gray-200 dark:text-gray-400 text-[10px] text-center break-words min-h-[32px]">
        {description || "\u00A0"}
      </p>
    </div>
  );
}
