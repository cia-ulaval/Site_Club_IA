import type { ProjectPageSpec } from '../projectPages';

export const poppyConception: ProjectPageSpec = {
  key: 'poppy-conception',
  edition: 'dossier',
  titleKey: 'poppyConception.hero.title',
  hero: {
    media: { type: 'image', src: '/project/poppy.webp', altKey: 'poppyConception.hero.title' },
    bodyKeys: [
      'poppyConception.hero.subtitle',
      'poppyConception.hero.paragraph1',
      'poppyConception.hero.paragraph2',
    ],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'poppyConception.team.title',
      itemKeys: [
        'poppyConception.team.leads',
        'poppyConception.team.size',
        'poppyConception.team.profiles',
      ],
    },
    {
      kind: 'panel',
      tone: 'invert',
      titleKey: 'poppyConception.objectives.title',
      subtitleKey: 'poppyConception.objectives.main.title',
      bodyKeys: ['poppyConception.objectives.main.description'],
    },
    { kind: 'cards', itemsKey: 'poppyConception.objectives.items' },
    {
      kind: 'steps',
      titleKey: 'poppyConception.timeline.title',
      itemsKey: 'poppyConception.timeline.items',
    },
    {
      kind: 'links',
      titleKey: 'poppyConception.resources.title',
      links: [
        { labelKey: 'poppyConception.resources.poppy', href: 'https://www.poppy-project.org/' },
      ],
    },
  ],
  cta: {
    bodyKeys: ['poppyConception.cta.title', 'poppyConception.cta.subtitle'],
    emphasisKey: 'poppyConception.cta.description',
  },
  seo: {
    titleKey: 'poppyConception.meta.title',
    descriptionKey: 'poppyConception.meta.description',
    image: '/project/poppy.webp',
    path: '/poppy-conception',
  },
};
