import type { ProjectPageSpec } from '../projectPages';

const JSON_LD = `{"@context":"https://schema.org","@type":"Course","name":"NutriNov - Projet Entrepreneurial IA Alimentaire","description":"Projet entrepreneurial innovant visant à révolutionner le secteur alimentaire grâce à l'intelligence artificielle","provider":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca"},"instructor":{"@type":"Person","name":"Éloïse Prevot","jobTitle":"Team Lead"},"teaches":["Entrepreneurship","Data Analysis","Web Development","Pitch Presentation","Design Thinking"],"keywords":["NutriNov","Open Food Facts","entrepreneuriat","IA","alimentation"]}`;

/* The only entrepreneurial project in the index: it recruits for pitch and
   design seats, not just engineering ones, so the staffing table carries
   more of the page than the technical sections do. */
export const nutrinov: ProjectPageSpec = {
  key: 'nutrinov',
  edition: 'dossier',
  titleKey: 'home.projects.nutrinov.title',
  hero: {
    media: { type: 'image', src: '/project/nutrinov.webp', altKey: 'nutrinov.hero.title' },
    bodyKeys: ['nutrinov.hero.paragraph1', 'nutrinov.hero.paragraph2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'nutrinov.team.title',
      itemKeys: ['nutrinov.team.lead', 'nutrinov.team.partner', 'nutrinov.team.size'],
    },
    {
      kind: 'prose',
      tone: 'invert',
      titleKey: 'nutrinov.description.title',
      bodyKeys: ['nutrinov.description.mission', 'nutrinov.description.approach'],
    },
    {
      kind: 'panel',
      titleKey: 'nutrinov.description.partnership.title',
      subtitleKey: 'nutrinov.team.partner',
      bodyKeys: ['nutrinov.description.partnership.description'],
    },
    {
      kind: 'roles',
      titleKey: 'nutrinov.roles.title',
      roles: [
        {
          titleKey: 'nutrinov.roles.speaker.title',
          metaKey: 'nutrinov.roles.speaker.bonus',
          skillsKey: 'nutrinov.roles.speaker.skills',
        },
        {
          titleKey: 'nutrinov.roles.innovator.title',
          metaKey: 'nutrinov.roles.innovator.bonus',
          skillsKey: 'nutrinov.roles.innovator.skills',
        },
        {
          titleKey: 'nutrinov.roles.entrepreneur.title',
          metaKey: 'nutrinov.roles.entrepreneur.bonus',
          skillsKey: 'nutrinov.roles.entrepreneur.skills',
        },
        {
          titleKey: 'nutrinov.roles.designer.title',
          metaKey: 'nutrinov.roles.designer.bonus',
          skillsKey: 'nutrinov.roles.designer.skills',
        },
        {
          titleKey: 'nutrinov.roles.analyst.title',
          metaKey: 'nutrinov.roles.analyst.bonus',
          skillsKey: 'nutrinov.roles.analyst.skills',
        },
      ],
    },
    /* Nine phases, each already labelled with its own — the interval is
       the useful index here, not a running count. */
    {
      kind: 'steps',
      titleKey: 'nutrinov.objectives.title',
      itemsKey: 'nutrinov.objectives.items',
    },
    { kind: 'cards', titleKey: 'nutrinov.benefits.title', itemsKey: 'nutrinov.benefits.items' },
  ],
  cta: {
    bodyKeys: ['nutrinov.cta.title', 'nutrinov.cta.subtitle'],
    emphasisKey: 'nutrinov.cta.description',
  },
  seo: {
    title: 'NutriNov - Projet Entrepreneurial IA Alimentaire | Club IA ULaval',
    description:
      'NutriNov : projet entrepreneurial innovant en IA alimentaire. Développez des solutions créatives avec Open Food Facts. Rejoignez notre équipe multidisciplinaire au Club IA ULaval.',
    image: '/project/nutrinov.webp',
    path: '/nutrinov',
    jsonLd: JSON_LD,
  },
};
