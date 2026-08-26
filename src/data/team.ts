/* The executive roster. Held as data rather than as eight arrays built
   inside the component: the page rebuilt every member object on every
   render purely because the role strings were translated in place, and a
   section could only be reordered by moving a JSX call.

   Roles come either as an i18n key (`roleKey`) or as a literal (`role`) —
   a project team lead's title carries the project's own name and was never
   translated. Same split the project index uses for its titles. */

export interface TeamMemberSource {
  name: string;
  /** Translated role. */
  roleKey?: string;
  /** Untranslated role, for titles that name a project. */
  role?: string;
  missionKey?: string;
  aboutKey?: string;
  imgSrc?: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
}

interface TeamSection {
  titleKey: string;
  /** The president's section is set larger; every other pole is equal. */
  emphasis?: boolean;
  members: TeamMemberSource[];
}

export const teamSections: TeamSection[] = [
  {
    titleKey: 'management.sections.president',
    emphasis: true,
    members: [
      {
        name: 'Cyrille Bernier',
        roleKey: 'management.roles.president',
        imgSrc: '/portrait/cyrille-bernier.webp',
        linkedIn: 'https://www.linkedin.com/in/cyrille-bernier-31208a252/',
      },
    ],
  },
  {
    titleKey: 'management.sections.leadership',
    members: [
      {
        name: 'Nezar Mahane',
        roleKey: 'management.roles.logisticsManager',
        imgSrc: '/portrait/nezar-mahane.webp',
      },
    ],
  },
  {
    titleKey: 'management.sections.talentTeam',
    members: [
      {
        name: 'Douae Sakkat',
        roleKey: 'management.roles.recruitmentManager',
        missionKey: 'management.missions.douae',
        imgSrc: '/portrait/douae-sakkat.webp',
      },
      {
        name: 'Seynabou Diakité',
        roleKey: 'management.roles.recruitmentManager',
        imgSrc: '/portrait/seynabou-diakite.webp',
      },
      {
        name: 'Hiba Arfaoui',
        roleKey: 'management.roles.recruitmentAssistant',
        imgSrc: '/portrait/hiba-arfoui.webp',
        linkedIn: 'http://linkedin.com/in/hiba-arfaoui/',
      },
      {
        name: 'Rana Azemdroub',
        roleKey: 'management.roles.talentsLeader',
        missionKey: 'management.missions.rana',
        imgSrc: '/portrait/rana-azemdroub.webp',
        linkedIn: 'https://www.linkedin.com/in/rana-azemdroub/',
      },
    ],
  },
  {
    titleKey: 'management.sections.marketingTeam',
    members: [
      {
        name: 'Yves Mamadou Faye',
        roleKey: 'management.roles.marketingLeader',
        missionKey: 'management.missions.yves',
        aboutKey: 'management.aboutMe.yves',
        imgSrc: '/portrait/yves.webp',
        linkedIn: 'https://www.linkedin.com/in/yves-faye-3b45062a5/',
        github: 'https://github.com/yvesFaye',
      },
      {
        name: 'Hiba Arfaoui',
        roleKey: 'management.roles.communicationsManager',
        missionKey: 'management.missions.hibaComm',
        imgSrc: '/portrait/hiba-arfoui.webp',
        linkedIn: 'http://linkedin.com/in/hiba-arfaoui/',
      },
      {
        name: 'Mimi Baret',
        roleKey: 'management.roles.designsManager',
        imgSrc: '/portrait/mimi-baret.webp',
      },
      {
        name: 'Dereck Bélanger',
        roleKey: 'management.roles.websiteManager',
        missionKey: 'management.missions.dereck',
        aboutKey: 'management.aboutMe.dereck',
        imgSrc: '/portrait/dereck.webp',
        linkedIn: 'https://www.linkedin.com/in/dereck-bélanger-437259338/',
        github: 'https://github.com/DereckBelanger152',
        portfolio: 'https://dereckbelanger.me',
      },
      {
        name: 'Aboubacar Sylla',
        roleKey: 'management.roles.websiteAuxiliary',
        imgSrc: '/portrait/aboubacar-sylla.webp',
      },
    ],
  },
  {
    titleKey: 'management.sections.projectsTeam',
    members: [
      {
        name: 'Guilhem Ané',
        roleKey: 'management.roles.trainingsManager',
        missionKey: 'management.missions.guilhem',
        imgSrc: '/portrait/guilhem-ane.webp',
        linkedIn: 'https://www.linkedin.com/in/guilhemane/',
      },
      {
        name: 'Benjamin Sekpona-Medjago',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/benjamin-sekpona.webp',
      },
      {
        name: 'Babacar Thiam',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/babacar-thiam.webp',
      },
      {
        name: 'Zachary Bois',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/zachary-bois.webp',
      },
      {
        name: 'Prince Emiliano Akissoe',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/prince-emiliano.webp',
      },
      {
        name: 'Teddy Kana',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/teddy-kana.webp',
      },
      {
        name: 'Tristan Lépine',
        roleKey: 'management.roles.trainingsManager',
        imgSrc: '/portrait/tristan-lepine.webp',
      },
    ],
  },
  {
    titleKey: 'management.sections.financeTeam',
    members: [
      {
        name: 'Alexandrine Lehoux',
        roleKey: 'management.roles.financeLeader',
        missionKey: 'management.missions.alexandrine',
        imgSrc: '/portrait/alexandrine.webp',
        linkedIn: 'https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/',
      },
      {
        name: 'Michal Naumiak',
        roleKey: 'management.roles.partnershipsManager',
        missionKey: 'management.missions.mihal',
        imgSrc: '/portrait/michal-naumiak.webp',
      },
      {
        name: 'Chaima Mohsni',
        roleKey: 'management.roles.partnershipsManager',
        imgSrc: '/portrait/chaima-mohsni.webp',
      },
      {
        name: 'Adriana Paternina',
        roleKey: 'management.roles.treasuryManager',
        missionKey: 'management.missions.adriana',
        imgSrc: '/portrait/adriana-maria.webp',
        linkedIn: 'https://www.linkedin.com/in/adriana-paternina/',
      },
      {
        name: 'Anthony Lavertu',
        roleKey: 'management.roles.externalRelationsManager',
        missionKey: 'management.missions.anthony',
        imgSrc: '/portrait/anthony.webp',
        linkedIn: 'https://www.linkedin.com/in/anthony-lavertu-2a29a7179/',
      },
    ],
  },
  {
    titleKey: 'management.sections.activitiesTeam',
    members: [
      {
        name: 'Ulysse Gagné',
        roleKey: 'management.roles.activitiesLeader',
        missionKey: 'management.missions.ulysse',
        imgSrc: '/portrait/ulysse-gagne.webp',
      },
      {
        name: 'William Blanchet Lafrenière',
        roleKey: 'management.roles.socialManager',
        missionKey: 'management.missions.william',
        imgSrc: '/portrait/william-blanchet.webp',
        linkedIn: 'https://www.linkedin.com/in/william-blanchet-lafrenière-8337282b1/',
      },
      {
        name: 'Félix Larrivée',
        roleKey: 'management.roles.socialManager',
        imgSrc: '/portrait/felix-larrivee.webp',
      },
      {
        name: 'Melek Sebri',
        roleKey: 'management.roles.socialManager',
        imgSrc: '/portrait/melek-sebri.webp',
        linkedIn: 'https://www.linkedin.com/in/melek-sebri/',
      },
      {
        name: 'Nora Belattar',
        roleKey: 'management.roles.recognitionManager',
        missionKey: 'management.missions.nora',
        imgSrc: '/portrait/nora-belattar.webp',
        linkedIn: 'https://www.linkedin.com/in/nora-belattar-77243b302/',
      },
      {
        name: 'Tiana Daniele Tekamgueu Epome',
        roleKey: 'management.roles.readingGroupManager',
        imgSrc: '/portrait/tiana-daniele.webp',
      },
      {
        name: 'Khaled Ait Fella',
        roleKey: 'management.roles.competitionsManager',
        imgSrc: '/portrait/khaled-ait.webp',
      },
    ],
  },
  {
    titleKey: 'management.sections.teamLeads',
    members: [
      {
        name: 'Anthony Lavertu',
        role: 'Drone Team Lead',
        imgSrc: '/portrait/anthony.webp',
        linkedIn: 'https://www.linkedin.com/in/anthony-lavertu-2a29a7179/',
      },
      {
        name: 'Benjamin Leblanc',
        role: 'SGD-Beyond Team Lead',
        imgSrc: '/portrait/benjamin-leblanc.webp',
        linkedIn: 'https://www.linkedin.com/in/benjamin-leblanc-a9217128b/',
      },
      {
        name: 'Eloïse Prevot',
        role: 'NutriNov Team Lead',
        imgSrc: '/portrait/eloise.webp',
        linkedIn: 'https://www.linkedin.com/in/eloise-prevot/',
      },
      {
        name: 'Cyrille Bernier',
        role: 'Poppy Humanoid (Conception) Team Lead',
        imgSrc: '/portrait/cyrille-bernier.webp',
        linkedIn: 'https://www.linkedin.com/in/cyrille-bernier-31208a252/',
      },
      {
        name: 'Baptiste Gabriel Bonin',
        role: 'Poppy Humanoid (Simulation) Team Lead',
        imgSrc: '/portrait/baptiste.webp',
        linkedIn: 'https://www.linkedin.com/in/baptiste-bonin/',
      },
      {
        name: 'Deoth Guei',
        role: 'F1 Jedi Team Lead',
        imgSrc: '/portrait/deoth.webp',
        linkedIn: 'https://www.linkedin.com/in/deoth-guei-382269191/',
      },
      {
        name: 'Jérôme Collet',
        role: 'F1 Jedi Team Lead (Team 2)',
        imgSrc: '/portrait/jerome.webp',
        linkedIn: 'https://ca.linkedin.com/in/jérôme-collet-577953199',
      },
      {
        name: 'Akram Omari',
        role: 'FlapEEG Team Lead',
        imgSrc: '/portrait/akram.webp',
      },
    ],
  },
];

/* Past executives, across several mandates. A sober list, not the portrait
   grid the sitting team gets. */
export const alumni: { name: string; roleKey: string }[] = [
  { name: 'Nathaniel D’Amours', roleKey: 'management.roles.president' },
  { name: 'Louis-Étienne Messier', roleKey: 'management.roles.logisticsLeader' },
  { name: 'Jordan Mathieu', roleKey: 'management.roles.projectsManager' },
  { name: 'Amen Ouannes', roleKey: 'management.roles.projectsManager' },
  { name: 'Youssouf Boubechiche', roleKey: 'management.roles.designsManager' },
];

/* The subset the Organization's structured data names — the pole leads,
   each of whom has a public profile to point `sameAs` at. */
export const LEADERSHIP_LD_NAMES = [
  'Cyrille Bernier',
  'Rana Azemdroub',
  'Alexandrine Lehoux',
  'Yves Mamadou Faye',
  'Anthony Lavertu',
  'Dereck Bélanger',
  'Guilhem Ané',
  'Ulysse Gagné',
] as const;
