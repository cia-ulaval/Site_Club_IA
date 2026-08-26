import type { ProjectPageSpec } from '../projectPages';

const JSON_LD = `{"@context":"https://schema.org","@type":"Event","name":"Compétition de Drone Laser Tag","description":"Compétition universitaire de drones autonomes avec IA embarquée et laser tag","organizer":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca"},"performer":{"@type":"Person","name":"Anthony Lavertu","jobTitle":"Team Lead"},"sponsor":[{"@type":"Person","name":"Philippe Giguère"},{"@type":"Organization","name":"Tracel AI"}],"eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","keywords":["drone","IA","reinforcement learning","robotique","compétition"]}`;

/* The largest crew in the index and the only project with a scoreboard.
   The page is a call for ten people, so the staffing table is the centre
   of it and everything else is what the seats are being hired to build. */
export const drone: ProjectPageSpec = {
  key: 'drone',
  edition: 'field',
  titleKey: 'drone.hero.title',
  hero: {
    media: { type: 'image', src: '/project/drone.webp', altKey: 'drone.hero.image.alt' },
    bodyKeys: ['drone.hero.paragraph1', 'drone.hero.paragraph2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'drone.team.title',
      itemKeys: ['drone.team.lead', 'drone.team.partner', 'drone.team.size'],
    },
    {
      kind: 'columns',
      titleKey: 'drone.objectives.title',
      cols: 3,
      columns: [
        { titleKey: 'drone.objectives.drone.title', itemsKey: 'drone.objectives.drone.items' },
        { titleKey: 'drone.objectives.ai.title', itemsKey: 'drone.objectives.ai.items' },
        {
          titleKey: 'drone.objectives.deliverables.title',
          itemsKey: 'drone.objectives.deliverables.items',
        },
      ],
    },
    {
      kind: 'roles',
      titleKey: 'drone.roles.title',
      roles: [
        {
          titleKey: 'drone.roles.gel.title',
          metaKey: 'drone.roles.gel.count',
          descriptionKey: 'drone.roles.gel.description',
          skillsKey: 'drone.roles.gel.skills',
        },
        {
          titleKey: 'drone.roles.simulation.title',
          metaKey: 'drone.roles.simulation.count',
          descriptionKey: 'drone.roles.simulation.description',
          skillsKey: 'drone.roles.simulation.skills',
        },
        {
          titleKey: 'drone.roles.ai.title',
          metaKey: 'drone.roles.ai.count',
          descriptionKey: 'drone.roles.ai.description',
          skillsKey: 'drone.roles.ai.skills',
        },
        {
          titleKey: 'drone.roles.pilots.title',
          metaKey: 'drone.roles.pilots.count',
          descriptionKey: 'drone.roles.pilots.description',
          skillsKey: 'drone.roles.pilots.skills',
        },
      ],
    },
    /* The conditions are the one thing on the page a candidate must read
       before deciding, so they get the quiet measured column. */
    {
      kind: 'list',
      tone: 'invert',
      titleKey: 'drone.commitment.title',
      bodyKeys: ['drone.commitment.subtitle'],
      itemsKey: 'drone.commitment.items',
    },
    { kind: 'cards', titleKey: 'drone.benefits.title', itemsKey: 'drone.benefits.items' },
  ],
  cta: {
    bodyKeys: ['drone.cta.title', 'drone.cta.subtitle'],
    emphasisKey: 'drone.cta.description',
  },
  seo: {
    title: 'Drone Laser Tag - Compétition Drones Autonomes | Club IA ULaval',
    description:
      'Compétition de drones autonomes en laser tag. Conception, IA embarquée, Reinforcement Learning, Isaac Sim. Affrontez les meilleures universités du Québec!',
    image: '/project/drone.webp',
    path: '/drone',
    jsonLd: JSON_LD,
  },
};
