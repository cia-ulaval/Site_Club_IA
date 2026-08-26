import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CutoutCard from '../components/CutoutCard';
import GalleryLightbox from '../components/GalleryLightbox';
import Seo from '../components/Seo';
import { GALLERY_CATEGORIES, galleryImages, type GalleryImage } from '../data/gallery';
import { useMotion } from '../hooks/useMotion';
import { ORGANIZATION_LD, SITE } from '../lib/site';

const FILTERS = ['all', ...GALLERY_CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

function Gallery() {
  const { t } = useTranslation();
  const m = useMotion();
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  const shown =
    filter === 'all' ? galleryImages : galleryImages.filter((i) => i.category === filter);

  return (
    <>
      <Seo
        title="Galerie Photos - Club Intelligence Artificielle Université Laval | CIA ULaval"
        description="Découvrez la galerie photos du Club IA ULaval : projets EEG, compétitions, formations, événements communautaires et moments marquants de notre club d'intelligence artificielle."
        keywords="galerie Club IA, photos CIA ULaval, projets EEG, compétitions IA, formations machine learning, événements club IA, FlappyBrain photos, F1Tenth images, communauté IA Université Laval"
        path="/gallery"
        image="/implication/front-image.webp"
        socialTitle="Galerie Photos - Club Intelligence Artificielle Université Laval"
        socialDescription="Découvrez notre galerie : projets EEG, compétitions et événements du Club IA ULaval."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Galerie Photos - Club Intelligence Artificielle Université Laval',
          url: `${SITE}/gallery`,
          description:
            'Galerie photos du Club IA ULaval présentant nos projets, compétitions, formations et événements communautaires',
          creator: ORGANIZATION_LD,
          image: `${SITE}/implication/front-image.webp`,
          numberOfItems: galleryImages.length,
          mainEntity: galleryImages.map((image) => ({
            '@type': 'ImageObject',
            url: `${SITE}${image.src}`,
          })),
        }}
      />

      <header className="mx-auto w-full max-w-7xl px-6 pb-12 pt-16 md:pb-20 md:pt-24">
        <h1 className="cia-display text-display">{t('gallery.heroTitle')}</h1>
        <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-primary-400 md:text-xl">
          {t('gallery.heroSubtitle')}
        </p>
      </header>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="mb-12 flex flex-wrap gap-x-8 gap-y-3 py-4 cia-rule cia-rule-b">
          {FILTERS.map((id) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={active}
                className={`relative inline-flex min-h-11 items-center pl-3 cia-mono text-xs uppercase tracking-eyebrow transition-colors cia-focus-ring ${
                  active ? 'cia-tick text-accent-400' : 'text-primary-400 hover:text-primary-300'
                }`}
              >
                {t(`gallery.categories.${id}`)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((image) => (
            <CutoutCard
              key={image.src}
              src={image.src}
              description={t(image.descKey)}
              category={t(`gallery.categoryLabels.${image.category}`)}
              viewLabel={t('gallery.viewImage', 'Agrandir')}
              layoutId={m.reduce ? undefined : `gallery-${image.src}`}
              onSelect={() => setSelected(image)}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <GalleryLightbox
            src={selected.src}
            description={t(selected.descKey)}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Gallery;
