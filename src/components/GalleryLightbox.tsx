import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDialog } from '../hooks/useDialog';
import { useMotion } from '../hooks/useMotion';

interface Props {
  src: string;
  description: string;
  onClose: () => void;
}

export default function GalleryLightbox({ src, description, onClose }: Props) {
  const { t } = useTranslation();
  const m = useMotion();
  const { containerRef, initialFocusRef } = useDialog(onClose);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={description}
      {...m.overlay}
      onClick={onClose}
    >
      <motion.div
        ref={containerRef}
        className="cia-modal relative w-full max-w-5xl overflow-hidden rounded-cut-lg shadow-2xl"
        {...(m.reduce ? m.panel : { layoutId: `gallery-${src}`, transition: m.shared })}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={description}
          decoding="async"
          className="h-auto max-h-lightbox w-full object-contain"
        />
        <div className="cia-scrim absolute inset-x-0 bottom-0 p-6 pt-20">
          <p className="font-body text-lg font-medium text-paper">{description}</p>
        </div>
        <button
          ref={initialFocusRef}
          type="button"
          className="absolute right-5 top-5 rounded bg-paper-raised p-3 text-ink shadow-sm transition-colors hover:bg-coral-dark hover:text-paper cia-focus-ring"
          onClick={onClose}
          aria-label={t('gallery.closeLabel')}
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </motion.div>
    </motion.div>
  );
}
