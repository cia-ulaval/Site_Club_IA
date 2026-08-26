import type { ProjectPageSpec } from '../projectPages';

const JSON_LD = `{"@context":"https://schema.org","@type":"ResearchProject","name":"Poppy Simulation - Reinforcement Learning pour Robot Humanoïde","description":"Développement d'une IA basée sur le Reinforcement Learning pour apprendre à un robot humanoïde Poppy à marcher","provider":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca"},"author":[{"@type":"Person","name":"Baptiste Bonin","jobTitle":"Team Lead"},{"@type":"Person","name":"Jonathan Caron-Roberge","jobTitle":"Team Lead"}],"sponsor":{"@type":"Organization","name":"Vooban"},"about":["Reinforcement Learning","Robotics","Simulation","Artificial Intelligence","Sim2Real"],"keywords":["Poppy","robot humanoïde","reinforcement learning","RL","simulation robotique"]}`;

/* The simulation half of Poppy. The render is the only picture of work
   that happens entirely inside a machine, so it runs full width under the
   title rather than sharing a column — the opposite opening to its
   sibling conception page. */
export const poppySimulation: ProjectPageSpec = {
  key: 'poppy-simulation',
  edition: 'plate',
  titleKey: 'home.projects.poppy-simulation.title',
  hero: {
    media: {
      type: 'image',
      src: '/project/poppysimulation.webp',
      altKey: 'poppy.hero.image.alt',
    },
    bodyKeys: ['poppy.hero.paragraph1', 'poppy.hero.paragraph2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'poppy.team.title',
      itemKeys: [
        'poppy.team.leads',
        'poppy.team.partner',
        'poppy.team.size',
        'poppy.team.profiles',
      ],
    },
    {
      kind: 'panel',
      titleKey: 'poppy.objectives.title',
      subtitleKey: 'poppy.objectives.main.title',
      bodyKeys: ['poppy.objectives.main.description'],
    },
    {
      kind: 'cards',
      titleKey: 'poppy.technical.title',
      items: [
        { titleKey: 'poppy.technical.rl.title', descriptionKey: 'poppy.technical.rl.description' },
        {
          titleKey: 'poppy.technical.simulation.title',
          descriptionKey: 'poppy.technical.simulation.description',
        },
        {
          titleKey: 'poppy.technical.sim2real.title',
          descriptionKey: 'poppy.technical.sim2real.description',
        },
      ],
    },
    {
      kind: 'steps',
      titleKey: 'poppy.timeline.title',
      itemsKey: 'poppy.timeline.weeks',
    },
    {
      kind: 'columns',
      tone: 'invert',
      titleKey: 'poppy.technologies.title',
      cols: 3,
      columns: [
        {
          titleKey: 'poppy.technologies.software.title',
          itemsKey: 'poppy.technologies.software.items',
        },
        {
          titleKey: 'poppy.technologies.hardware.title',
          itemsKey: 'poppy.technologies.hardware.items',
        },
        {
          titleKey: 'poppy.technologies.skills.title',
          itemsKey: 'poppy.technologies.skills.items',
        },
      ],
    },
    { kind: 'cards', titleKey: 'poppy.benefits.title', itemsKey: 'poppy.benefits.items' },
    {
      kind: 'links',
      titleKey: 'poppy.resources.title',
      links: [{ labelKey: 'poppy.resources.poppy', href: 'https://www.poppy-project.org/' }],
    },
  ],
  cta: {
    bodyKeys: ['poppy.cta.title', 'poppy.cta.subtitle'],
    emphasisKey: 'poppy.cta.description',
  },
  seo: {
    title: 'Poppy Simulation - Robot Humanoïde IA Apprentissage | Club IA ULaval',
    description:
      'Poppy Simulation : projet de Reinforcement Learning pour apprendre à un robot humanoïde à marcher. RL, simulation robotique, Sim2Real au Club IA ULaval.',
    image: '/project/poppysimulation.webp',
    path: '/poppy-simulation',
    jsonLd: JSON_LD,
  },
};
