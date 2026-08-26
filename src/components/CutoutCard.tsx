import {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardEyebrow,
  MinimalCardImage,
} from './ui/minimal-card';

interface Props {
  src: string;
  /** Already-translated description; doubles as the alt text. */
  description: string;
  /** Already-translated category label shown in the inset strip. */
  category: string;
  onSelect: () => void;
  viewLabel: string;
  /** Shared-layout id linking this thumbnail to the lightbox plate. */
  layoutId?: string;
}

/* Gallery adaptation of Cult UI's MinimalCard: the photograph is the focal
   point and its metadata sits on paper instead of fighting a dark scrim. */
export default function CutoutCard({
  src,
  description,
  category,
  onSelect,
  viewLabel,
  layoutId,
}: Props) {
  return (
    <MinimalCard interactive marker className="group p-2">
      <MinimalCardImage
        src={src}
        alt={description}
        frameClassName="aspect-3/2"
        className="group-hover:scale-103"
        layoutId={layoutId}
      />
      <MinimalCardContent className="pb-4 pt-4">
        <MinimalCardEyebrow>{category}</MinimalCardEyebrow>
        <MinimalCardDescription className="mt-0 line-clamp-2 text-ink">
          {description}
        </MinimalCardDescription>
      </MinimalCardContent>
      <button
        type="button"
        onClick={onSelect}
        aria-label={`${description} — ${viewLabel}`}
        className="absolute inset-0 z-10 rounded-cut cia-focus-ring"
      >
        <span className="sr-only">{viewLabel}</span>
      </button>
    </MinimalCard>
  );
}
