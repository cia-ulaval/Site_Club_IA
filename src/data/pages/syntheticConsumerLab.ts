import type { ProjectPageSpec } from '../projectPages';

export const syntheticConsumerLab: ProjectPageSpec = {
  key: 'synthetic-consumer-lab',
  edition: 'readout',
  titleKey: 'home.projects.synthetic-consumer-lab.title',
  hero: {
    bodyKeys: ['syntheticconsumerlab.hero.subtitle', 'syntheticconsumerlab.hero.paragraph1'],
  },
  blocks: [
    {
      kind: 'prose',
      tone: 'invert',
      titleKey: 'syntheticconsumerlab.mission.title',
      bodyKeys: [
        'syntheticconsumerlab.mission.paragraph1',
        'syntheticconsumerlab.mission.paragraph2',
      ],
    },
  ],
  seo: {
    titleKey: 'syntheticconsumerlab.meta.title',
    descriptionKey: 'syntheticconsumerlab.meta.description',
    path: '/synthetic-consumer-lab',
  },
};
