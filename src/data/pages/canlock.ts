import type { ProjectPageSpec } from '../projectPages';

export const canlock: ProjectPageSpec = {
  key: 'canlock',
  edition: 'readout',
  titleKey: 'canlock.hero.title',
  hero: {
    bodyKeys: ['canlock.hero.subtitle', 'canlock.hero.description'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'canlock.team.title',
      itemKeys: ['canlock.hero.teamLead', 'canlock.hero.members'],
    },
    {
      kind: 'list',
      titleKey: 'canlock.challenge.threat.title',
      bodyKeys: ['canlock.challenge.threat.description'],
      itemsKey: 'canlock.challenge.threat.items',
    },
    {
      kind: 'stat',
      tone: 'invert',
      titleKey: 'canlock.challenge.falsePositives.title',
      valueKey: 'canlock.challenge.falsePositives.stat',
      labelKey: 'canlock.challenge.falsePositives.statLabel',
      noteKey: 'canlock.challenge.falsePositives.statNote',
      bodyKeys: [
        {
          runs: [
            { key: 'canlock.challenge.falsePositives.description1' },
            { key: 'canlock.challenge.falsePositives.errorRate', live: true },
            { key: 'canlock.challenge.falsePositives.description2' },
            { key: 'canlock.challenge.falsePositives.signalsPerMinute', live: true },
            { key: 'canlock.challenge.falsePositives.description3' },
          ],
        },
      ],
    },
    {
      kind: 'panel',
      titleKey: 'canlock.objectives.main.title',
      subtitleKey: 'canlock.objectives.title',
      bodyKeys: [
        {
          runs: [
            { key: 'canlock.objectives.main.description' },
            { key: 'canlock.objectives.main.highlight', live: true },
            { key: 'canlock.objectives.main.description2' },
          ],
        },
      ],
    },
    {
      kind: 'list',
      titleKey: 'canlock.objectives.deliverables.title',
      itemsKey: 'canlock.objectives.deliverables.items',
    },
    {
      kind: 'steps',
      titleKey: 'canlock.timeline.title',
      itemsKey: 'canlock.timeline.items',
      metaPrefixKey: 'canlock.timeline.week',
    },
    {
      kind: 'roles',
      titleKey: 'canlock.profiles.title',
      roles: [
        {
          titleKey: 'canlock.profiles.items.0.title',
          descriptionKey: 'canlock.profiles.items.0.desc',
        },
        {
          titleKey: 'canlock.profiles.items.1.title',
          descriptionKey: 'canlock.profiles.items.1.desc',
        },
        {
          titleKey: 'canlock.profiles.items.2.title',
          descriptionKey: 'canlock.profiles.items.2.desc',
        },
      ],
    },
    {
      kind: 'columns',
      titleKey: 'canlock.tech.title',
      bodyKeys: ['canlock.tech.stack.note'],
      columns: [
        {
          titleKey: 'canlock.tech.stack.title',
          items: ['Python', 'PyTorch / TensorFlow', 'Scikit-learn', 'Pandas', 'Jupyter', 'Git'],
        },
        { titleKey: 'canlock.tech.skills.title', itemsKey: 'canlock.tech.skills.items' },
      ],
    },
    {
      kind: 'cards',
      titleKey: 'canlock.whyJoin.title',
      itemsKey: 'canlock.whyJoin.items',
    },
  ],
  cta: {
    bodyKeys: ['canlock.cta.title'],
    emphasisKey: 'canlock.cta.subtitle',
  },
  seo: {
    titleKey: 'canlock.meta.title',
    descriptionKey: 'canlock.meta.description',
    path: '/canlock',
  },
};
