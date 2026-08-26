import type { ProjectPageSpec } from '../projectPages';

export const avionCargo: ProjectPageSpec = {
  key: 'avion-cargo',
  edition: 'field',
  titleKey: 'avionCargo.simple.title',
  hero: {
    /* The landing photograph is the point of this project, so it runs full
       width under the title rather than sharing a column with the prose. */
    media: {
      type: 'image',
      src: '/project/avion-cargo.webp',
      altKey: 'avionCargo.simple.imageAlt',
    },
    bodyKeys: [
      'avionCargo.simple.subtitle',
      'avionCargo.simple.description1',
      'avionCargo.simple.description2',
    ],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'avionCargo.simple.technologiesTitle',
      itemsKey: 'avionCargo.simple.technologies',
    },
    {
      kind: 'steps',
      titleKey: 'avionCargo.simple.pipelineTitle',
      subtitleKey: 'avionCargo.simple.pipelineSubtitle',
      itemsKey: 'avionCargo.simple.pipelineSteps',
    },
    {
      kind: 'list',
      tone: 'invert',
      titleKey: 'avionCargo.simple.summaryTitle',
      itemsKey: 'avionCargo.simple.summaryItems',
    },
  ],
  seo: {
    titleKey: 'avionCargo.meta.title',
    descriptionKey: 'avionCargo.meta.description',
    image: '/project/avion-cargo.webp',
    path: '/avion-cargo',
  },
};
