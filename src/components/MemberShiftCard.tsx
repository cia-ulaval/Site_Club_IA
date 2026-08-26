import { User } from 'lucide-react';
import type { TeamMember } from './MemberModal';
import { ShiftCard } from './ui/shift-card';

interface Props {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
  viewProfileLabel: string;
}

export default function MemberShiftCard({ member, onSelect, viewProfileLabel }: Props) {
  return (
    <ShiftCard
      onClick={() => onSelect(member)}
      aria-label={`${member.name} — ${viewProfileLabel}`}
      className="group"
      media={
        <div className="relative aspect-3/4 bg-primary-950">
          {member.imgSrc ? (
            <img
              src={member.imgSrc}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-portrait saturate-90 transition-media duration-base ease-out group-hover:scale-103 group-hover:saturate-100"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <User className="h-8 w-8 text-primary-600" aria-hidden="true" />
            </div>
          )}
        </div>
      }
      label={
        <h3 className="font-heading text-base font-semibold leading-tight text-ink">
          {member.name}
        </h3>
      }
      detail={
        <>
          <p className="cia-meta-accent mt-2">{member.role}</p>
          {member.mission && (
            <p className="mt-2 line-clamp-3 font-body text-xs leading-relaxed text-ink-muted">
              {member.mission}
            </p>
          )}
          <span className="cia-index mt-3 block text-accent-400">{viewProfileLabel} →</span>
        </>
      }
    />
  );
}
