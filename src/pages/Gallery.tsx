import { ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import CutoutCard from '../components/CutoutCard';
import GalleryLightbox from '../components/GalleryLightbox';
import Seo from '../components/Seo';
import {
  GALLERY_CATEGORIES,
  galleryImages,
  thumbOf,
  type GalleryCategory,
  type GalleryImage,
} from '../data/gallery';
import { scrollBehavior } from '../hooks/useMotion';
import { ORGANIZATION_LD, SITE } from '../lib/site';

const FILTERS = ['all', ...GALLERY_CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

/* Overview: each category gets the same preview slot (2 rows of 3 on desktop,
   a swipeable strip on mobile), so no single category buries the others. */
const PREVIEW = 6;
/* Category view: reveal in pages instead of one endless grid. */
const PAGE = 12;
/* Navbar (h-16) — lands the sticky filter bar right below it. */
const NAV_OFFSET = 64;

const byCategory = Object.fromEntries(
  GALLERY_CATEGORIES.map((c) => [c, galleryImages.filter((i) => i.category === c)])
) as Record<GalleryCategory, GalleryImage[]>;

/* Overview order, so the lightbox steps through photos as they appear on screen. */
const overviewOrder = GALLERY_CATEGORIES.flatMap((c) => byCategory[c]);

const isFilter = (value: string | null): value is Filter => FILTERS.includes(value as Filter);

function Gallery() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const param = params.get('c');
  const filter: Filter = isFilter(param) ? param : 'all';
  const [limit, setLimit] = useState(PAGE);
  const [viewer, setViewer] = useState<{ list: GalleryImage[]; index: number } | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const choose = (next: Filter) => {
    setParams(next === 'all' ? {} : { c: next });
    setLimit(PAGE);
    const bar = barRef.current;
    if (bar && bar.getBoundingClientRect().top < NAV_OFFSET) {
      window.scrollTo({
        top: bar.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
        behavior: scrollBehavior(),
      });
    }
  };

  const open = (list: GalleryImage[], image: GalleryImage) =>
    setViewer({ list, index: list.indexOf(image) });

  const card = (image: GalleryImage, list: GalleryImage[], eager = false) => (
    <CutoutCard
      src={thumbOf(image.src)}
      description={t(image.descKey)}
      category={filter === 'all' ? t(`gallery.categoryLabels.${image.category}`) : undefined}
      viewLabel={t('gallery.viewImage')}
      loading={eager ? 'eager' : 'lazy'}
      onSelect={() => open(list, image)}
    />
  );

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

      <header className="mx-auto w-full max-w-7xl px-6 pb-10 pt-16 md:pb-16 md:pt-24">
        <h1 className="cia-display text-display">{t('gallery.heroTitle')}</h1>
        <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-primary-400 md:text-xl">
          {t('gallery.heroSubtitle')}
        </p>
      </header>

      <div
        ref={barRef}
        className="sticky top-16 z-20 border-y border-steel/25 bg-paper/95 backdrop-blur-sm"
      >
        <nav
          aria-label={t('gallery.filterLabel')}
          className="mx-auto flex max-w-7xl gap-x-8 overflow-x-auto px-6 [mask-image:linear-gradient(to_right,black_80%,transparent)] [scrollbar-width:none] lg:[mask-image:none]"
        >
          {FILTERS.map((id) => {
            const active = filter === id;
            const count = id === 'all' ? galleryImages.length : byCategory[id].length;
            return (
              <button
                key={id}
                type="button"
                onClick={(event) => {
                  event.currentTarget.scrollIntoView({ inline: 'center', block: 'nearest' });
                  choose(id);
                }}
                aria-pressed={active}
                className={`relative inline-flex min-h-12 shrink-0 items-center gap-2 whitespace-nowrap pl-3 cia-mono text-xs uppercase tracking-eyebrow transition-colors cia-focus-ring ${
                  active ? 'cia-tick text-accent-400' : 'text-primary-400 hover:text-primary-300'
                }`}
              >
                {t(`gallery.categories.${id}`)}
                <span className="text-primary-500">{count}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24">
        {filter === 'all' ? (
          GALLERY_CATEGORIES.filter((c) => byCategory[c].length > 0).map((category, row) => {
            const images = byCategory[category];
            const more = images.length > PREVIEW;
            return (
              <section key={category} className="pt-12">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <h2 className="cia-display text-2xl sm:text-3xl">
                    {t(`gallery.categories.${category}`)}
                  </h2>
                  {more && (
                    <button
                      type="button"
                      onClick={() => choose(category)}
                      className="inline-flex min-h-11 shrink-0 items-center gap-2 cia-mono text-xs uppercase tracking-eyebrow text-accent-400 hover:text-accent-300 cia-focus-ring"
                    >
                      {t('gallery.seeAll', { count: images.length })}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                </div>

                {/* Mobile/tablet: one swipeable row with the next card peeking in.
                    Desktop: a fixed 3×2 grid. */}
                <ul className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
                  {images.slice(0, PREVIEW).map((image, i) => (
                    <li key={image.src} className="w-4/5 shrink-0 snap-start sm:w-5/12 lg:w-auto">
                      {card(image, overviewOrder, row === 0 && i < 3)}
                    </li>
                  ))}
                  {more && (
                    <li className="w-2/5 shrink-0 snap-start sm:w-1/4 lg:hidden">
                      <button
                        type="button"
                        onClick={() => choose(category)}
                        className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-cut border border-steel/30 p-4 text-center cia-mono text-xs uppercase tracking-eyebrow text-accent-400 cia-focus-ring"
                      >
                        <ArrowRight className="h-6 w-6" aria-hidden="true" />
                        {t('gallery.seeAll', { count: images.length })}
                      </button>
                    </li>
                  )}
                </ul>
              </section>
            );
          })
        ) : (
          <section className="pt-12">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {byCategory[filter].slice(0, limit).map((image, i) => (
                <li key={image.src}>{card(image, byCategory[filter], i < 4)}</li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="cia-index">
                {t('gallery.showing', {
                  shown: Math.min(limit, byCategory[filter].length),
                  total: byCategory[filter].length,
                })}
              </p>
              <div className="h-0.5 w-48 bg-steel/25" aria-hidden="true">
                <div
                  className="h-full bg-coral transition-[width] duration-base"
                  style={{
                    width: `${(Math.min(limit, byCategory[filter].length) / byCategory[filter].length) * 100}%`,
                  }}
                />
              </div>
              {limit < byCategory[filter].length ? (
                <button
                  type="button"
                  onClick={() => setLimit((n) => n + PAGE)}
                  className="cia-btn-primary mt-2"
                >
                  {t('gallery.loadMore')}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => choose('all')}
                  className="mt-2 inline-flex min-h-11 items-center cia-mono text-xs uppercase tracking-eyebrow text-accent-400 hover:text-accent-300 cia-focus-ring"
                >
                  {t('gallery.backToAll')}
                </button>
              )}
            </div>
          </section>
        )}
      </div>

      {viewer && (
        <GalleryLightbox
          images={viewer.list}
          index={viewer.index}
          onIndex={(index) => setViewer((v) => (v ? { ...v, index } : v))}
          onClose={() => setViewer(null)}
        />
      )}
    </>
  );
}

export default Gallery;
