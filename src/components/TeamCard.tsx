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
      className="flex flex-col items-center bg-gradient-to-br from-red-900/30 to-black/30 rounded-2xl shadow-lg px-4 py-5 md:px-6 md:py-7"
      style={{
        border: "2px solid #ef4444",
        boxShadow: "0 2px 12px 0 rgba(239,68,68,0.15)",
        minWidth: 180,
        maxWidth: 220,
      }}
    >
      <div className="text-red-400 mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-bold text-white mb-1 text-center">
        {title}
      </h3>
      <p className="text-gray-400 text-xs md:text-sm text-center">
        {description}
      </p>
    </div>
  );
}
