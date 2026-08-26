export const GALLERY_CATEGORIES = ['formation', 'competition', 'project', 'community'] as const;

type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryImage {
  src: string;
  descKey: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/formation/tuto2.webp',
    descKey: 'gallery.images.formation.tuto2',
    category: 'formation',
  },

  {
    src: '/competition/competition-1.webp',
    descKey: 'gallery.images.competition.competition1',
    category: 'competition',
  },
  {
    src: '/competition/competition-2.webp',
    descKey: 'gallery.images.competition.competition2',
    category: 'competition',
  },
  {
    src: '/competition/competition-3.webp',
    descKey: 'gallery.images.competition.competition3',
    category: 'competition',
  },
  {
    src: '/competition/competition-a2024-1.webp',
    descKey: 'gallery.images.competition.competitionA2024',
    category: 'competition',
  },

  {
    src: '/project/club2024.webp',
    descKey: 'gallery.images.project.club2024',
    category: 'project',
  },
  {
    src: '/project/clubrencontre.webp',
    descKey: 'gallery.images.project.clubrencontre',
    category: 'project',
  },
  { src: '/project/f1tenth.webp', descKey: 'gallery.images.project.f1tenth', category: 'project' },
  {
    src: '/project/f1tenthcar.webp',
    descKey: 'gallery.images.project.f1tenthcar',
    category: 'project',
  },
  {
    src: '/project/flappycard.webp',
    descKey: 'gallery.images.project.flappycard',
    category: 'project',
  },

  {
    src: '/implication/filleclub.webp',
    descKey: 'gallery.images.community.filleclub',
    category: 'community',
  },
  {
    src: '/implication/eeg-presentation.webp',
    descKey: 'gallery.images.community.eegPresentation',
    category: 'community',
  },
  {
    src: '/implication/flappyeegmain.webp',
    descKey: 'gallery.images.community.flappyeegmain',
    category: 'community',
  },
  {
    src: '/implication/front-image.webp',
    descKey: 'gallery.images.community.frontImage',
    category: 'community',
  },
  {
    src: '/implication/kalven-presenter.webp',
    descKey: 'gallery.images.community.kalvenPresenter',
    category: 'community',
  },
  {
    src: '/implication/kiosque.webp',
    descKey: 'gallery.images.community.kiosque',
    category: 'community',
  },
  {
    src: '/implication/presentation.webp',
    descKey: 'gallery.images.community.presentation',
    category: 'community',
  },
  {
    src: '/implication/table.webp',
    descKey: 'gallery.images.community.table',
    category: 'community',
  },
  {
    src: '/implication/table3.webp',
    descKey: 'gallery.images.community.table3',
    category: 'community',
  },
  {
    src: '/implication/testclub.webp',
    descKey: 'gallery.images.community.testclub',
    category: 'community',
  },
];
