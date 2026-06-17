interface TeamMemberCardProps {
  /** Person's name. */
  title: string;
  /** Role or short blurb (optional). */
  description?: string;
}

export default function TeamMemberCard({ title, description }: TeamMemberCardProps) {
  return (
    <div className="cia-card cia-card-content flex flex-col items-center justify-center text-center w-full min-w-[150px] max-w-[210px] min-h-[120px]">
      <h3 className="cia-heading-card text-neutral-100 break-words">{title}</h3>
      {description && (
        <p className="cia-body-sm text-neutral-400 mt-1 break-words">{description}</p>
      )}
    </div>
  );
}
