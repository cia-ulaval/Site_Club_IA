import {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardEyebrow,
  MinimalCardImage,
} from './ui/minimal-card';

interface Props {
  src: string;
  description: string;
  /** Omitted where the category is already the page's filter. */
  category?: string;
  onSelect: () => void;
  viewLabel: string;
  loading?: 'eager' | 'lazy';
}

export default function CutoutCard({
  src,
  description,
  category,
  onSelect,
  viewLabel,
  loading,
}: Props) {
  return (
    <MinimalCard interactive marker className="group p-2">
      <MinimalCardImage
        src={src}
        alt={description}
        frameClassName="aspect-3/2"
        className="group-hover:scale-103"
        loading={loading}
      />
      <MinimalCardContent className="px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:p-4">
        {category && <MinimalCardEyebrow>{category}</MinimalCardEyebrow>}
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
