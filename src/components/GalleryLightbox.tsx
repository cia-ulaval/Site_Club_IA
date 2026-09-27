import { motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { thumbOf, type GalleryImage } from '../data/gallery';
import { useDialog } from '../hooks/useDialog';

interface Props {
  images: GalleryImage[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}

/* How far a swipe has to travel before it counts as prev/next. */
const SWIPE = 60;

export default function GalleryLightbox({ images, index, onIndex, onClose }: Props) {
  const { t } = useTranslation();
  const { containerRef, initialFocusRef } = useDialog(onClose);

  const image = images[index];
  const total = images.length;
  const description = t(image.descKey);
  const go = (step: number) => onIndex((index + step + total) % total);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onIndex((index + 1) % total);
      if (event.key === 'ArrowLeft') onIndex((index - 1 + total) % total);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index, total, onIndex]);

  /* Warm the neighbours so stepping through feels instant. */
  useEffect(() => {
    for (const step of [1, -1]) {
      new Image().src = images[(index + step + total) % total].src;
    }
  }, [images, index, total]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE) go(1);
    else if (info.offset.x > SWIPE) go(-1);
  };

  const arrow =
    'grid h-12 w-12 place-items-center rounded-full bg-paper-raised/90 text-ink shadow-sm transition-colors hover:bg-coral-dark hover:text-paper cia-focus-ring';

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-ink"
      role="dialog"
      aria-modal="true"
      aria-label={description}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <p className="cia-mono text-sm text-paper/80" aria-live="polite">
          {t('gallery.counter', { index: index + 1, total })}
        </p>
        <button
          ref={initialFocusRef}
          type="button"
          className={arrow}
          onClick={onClose}
          aria-label={t('gallery.closeLabel')}
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        {/* The grid already loaded the thumbnail, so it shows at once; the full
            image paints over it when ready. Same box + object-contain = no shift. */}
        <motion.div
          key={image.src}
          className="absolute inset-0 touch-pan-y"
          drag={total > 1 ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={onDragEnd}
        >
          <img
            src={thumbOf(image.src)}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain px-2 md:px-20"
          />
          <img
            src={image.src}
            alt={description}
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain px-2 md:px-20"
          />
        </motion.div>

        {total > 1 && (
          <>
            <button
              type="button"
              className={`${arrow} absolute left-4 top-1/2 hidden -translate-y-1/2 md:grid`}
              onClick={(event) => {
                event.stopPropagation();
                go(-1);
              }}
              aria-label={t('gallery.previous')}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`${arrow} absolute right-4 top-1/2 hidden -translate-y-1/2 md:grid`}
              onClick={(event) => {
                event.stopPropagation();
                go(1);
              }}
              aria-label={t('gallery.next')}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-4 px-4 pb-6 pt-4 md:px-6">
        <div className="min-w-0 flex-1">
          <p className="cia-meta-accent">{t(`gallery.categoryLabels.${image.category}`)}</p>
          <p className="mt-1 font-body text-base font-medium text-paper md:text-lg">
            {description}
          </p>
        </div>
        {total > 1 && (
          <div className="flex shrink-0 gap-2 md:hidden">
            <button
              type="button"
              className={arrow}
              onClick={() => go(-1)}
              aria-label={t('gallery.previous')}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={arrow}
              onClick={() => go(1)}
              aria-label={t('gallery.next')}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
