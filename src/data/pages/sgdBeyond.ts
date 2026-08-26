import type { ProjectPageSpec } from '../projectPages';

const JSON_LD = `{"@context":"https://schema.org","@type":"ResearchProject","name":"Stochastic Gradient Descent, and Beyond!","description":"Projet de recherche en optimisation stochastique visant à améliorer SGD par injection de bruit intelligent","provider":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca"},"author":{"@type":"Person","name":"Benjamin Leblanc","jobTitle":"Team Lead"},"about":["Stochastic Optimization","Deep Learning","Machine Learning","Scientific Research"],"keywords":["SGD","optimization","deep learning","research","gradient descent"]}`;

/* A paper, not a device: there is nothing to photograph, so the page opens
   on the title alone. The hypothesis, what the team wants to understand
   and what it is aiming at were three separate panels on the old page —
   they are one argument, so they are now one reading column. */
export const sgdBeyond: ProjectPageSpec = {
  key: 'sgd-beyond',
  edition: 'readout',
  titleKey: 'home.projects.sgd-beyond.title',
  hero: {
    bodyKeys: ['sgdbeyond.hero.paragraph1', 'sgdbeyond.hero.paragraph2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'sgdbeyond.team.title',
      itemKeys: ['sgdbeyond.team.lead', 'sgdbeyond.team.size'],
      bodyKeys: ['sgdbeyond.mission.status'],
    },
    {
      kind: 'prose',
      tone: 'invert',
      titleKey: 'sgdbeyond.mission.hypothesis.title',
      bodyKeys: [
        'sgdbeyond.mission.hypothesis.description',
        'sgdbeyond.mission.understanding.description',
        'sgdbeyond.mission.goal.description',
      ],
    },
    {
      kind: 'plate',
      bleed: true,
      figure: true,
      media: {
        type: 'image',
        src: '/project/sgd.webp',
        altKey: 'sgdbeyond.hero.image.alt',
      },
    },
    {
      kind: 'steps',
      titleKey: 'sgdbeyond.timeline.title',
      itemsKey: 'sgdbeyond.timeline.weeks',
    },
    {
      kind: 'roles',
      titleKey: 'sgdbeyond.profiles.title',
      subtitleKey: 'sgdbeyond.profiles.note',
      roles: [
        {
          titleKey: 'sgdbeyond.profiles.programmer.title',
          descriptionKey: 'sgdbeyond.profiles.programmer.description',
          skillsKey: 'sgdbeyond.profiles.programmer.skills',
        },
        {
          titleKey: 'sgdbeyond.profiles.theorist.title',
          descriptionKey: 'sgdbeyond.profiles.theorist.description',
          skillsKey: 'sgdbeyond.profiles.theorist.skills',
        },
      ],
    },
    {
      kind: 'cards',
      titleKey: 'sgdbeyond.objectives.deliverables.title',
      itemsKey: 'sgdbeyond.objectives.deliverables.items',
    },
    {
      kind: 'cards',
      titleKey: 'sgdbeyond.benefits.title',
      itemsKey: 'sgdbeyond.benefits.items',
    },
  ],
  cta: { bodyKeys: ['sgdbeyond.cta.description'] },
  seo: {
    title: 'SGD Research - Optimisation Stochastique | Club IA ULaval',
    description:
      'Recherche en optimisation stochastique : améliorer la descente de gradient par injection de bruit intelligent. Publication scientifique au Club IA ULaval.',
    image: '/project/sgd.webp',
    path: '/sgd-beyond',
    jsonLd: JSON_LD,
  },
};
