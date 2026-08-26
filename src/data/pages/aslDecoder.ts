import type { ProjectPageSpec } from '../projectPages';

export const aslDecoder: ProjectPageSpec = {
  key: 'asldecoder',
  edition: 'dossier',
  titleKey: 'home.projects.asldecoder.title',
  hero: {
    media: { type: 'image', src: '/project/asl.webp', altKey: 'asldecoder.hero.imageAlt' },
    bodyKeys: ['asldecoder.hero.subtitle', 'asldecoder.hero.description'],
  },
  blocks: [
    {
      kind: 'cards',
      tone: 'invert',
      titleKey: 'asldecoder.features.title',
      items: [
        {
          titleKey: 'asldecoder.features.camera.title',
          descriptionKey: 'asldecoder.features.camera.description',
        },
        {
          titleKey: 'asldecoder.features.ai.title',
          descriptionKey: 'asldecoder.features.ai.description',
        },
        {
          titleKey: 'asldecoder.features.gestures.title',
          descriptionKey: 'asldecoder.features.gestures.description',
        },
      ],
    },
    {
      kind: 'tags',
      titleKey: 'asldecoder.tech.title',
      itemsKey: 'asldecoder.tech.items',
    },
    {
      kind: 'team',
      titleKey: 'asldecoder.team.title',
      members: [
        { title: 'Amen Ouannes', descriptionKey: 'asldecoder.team.leadRole' },
        { title: 'Vincent Bellemare' },
        { title: 'Hiba Arfaoui' },
        { title: 'Guillhem Ané' },
        { title: 'Nidel Kouicem' },
      ],
    },
  ],
  seo: {
    title: 'ASL Decoder - Reconnaissance du Langage des Signes par IA',
    descriptionKey: 'asldecoder.meta.description',
    image: '/project/asl.webp',
    path: '/asl-decoder',
  },
};
