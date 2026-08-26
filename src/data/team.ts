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
        imgSrc: '/portrait/CyrilleBernier.webp',
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
        imgSrc: '/portrait/NezarMahane.webp',
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
        imgSrc: '/portrait/DouaeSakkat.webp',
      },
      {
        name: 'Seynabou Diakité',
        roleKey: 'management.roles.recruitmentManager',
        imgSrc: '/portrait/SeynabouDiakité.webp',
      },
      {
        name: 'Hiba Arfaoui',
        roleKey: 'management.roles.recruitmentAssistant',
        imgSrc: '/portrait/HibaArfoui.webp',
        linkedIn: 'http://linkedin.com/in/hiba-arfaoui/',
      },
      {
        name: 'Rana Azemdroub',
        roleKey: 'management.roles.talentsLeader',
        missionKey: 'management.missions.rana',
        imgSrc: '/portrait/RanaAzemdroub.jpg',
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
        imgSrc: '/portrait/Yves.webp',
        linkedIn: 'https://www.linkedin.com/in/yves-faye-3b45062a5/',
        github: 'https://github.com/yvesFaye',
      },
      {
        name: 'Hiba Arfaoui',
        roleKey: 'management.roles.communicationsManager',
        missionKey: 'management.missions.hibaComm',
        imgSrc: '/portrait/HibaArfoui.webp',
        linkedIn: 'http://linkedin.com/in/hiba-arfaoui/',
      },
      {
        name: 'Mimi Baret',
        roleKey: 'management.roles.designsManager',
        imgSrc: '/portrait/MimiBaret.webp',
      },
      {
        name: 'Dereck Bélanger',
        roleKey: 'management.roles.websiteManager',
        missionKey: 'management.missions.dereck',
        aboutKey: 'management.aboutMe.dereck',
        imgSrc: '/portrait/Dereck.JPG',
        linkedIn: 'https://www.linkedin.com/in/dereck-bélanger-437259338/',
        github: 'https://github.com/DereckBelanger152',
        portfolio: 'https://dereckbelanger.me',
      },
      {
        name: 'Aboubacar Sylla',
        roleKey: 'management.roles.websiteAuxiliary',
        imgSrc: '/portrait/AboubacarSylla.webp',
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
        imgSrc: '/portrait/GuilhemAne.webp',
        linkedIn: 'https://www.linkedin.com/in/guilhemane/',
      },
      {
        name: 'Benjamin Sekpona-Medjago',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/BenjaminSekpona.webp',
      },
      {
        name: 'Babacar Thiam',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/BabacarThiam.webp',
      },
      {
        name: 'Zachary Bois',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/ZacharyBois.webp',
      },
      {
        name: 'Prince Emiliano Akissoe',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/PrinceEmiliano.webp',
      },
      {
        name: 'Teddy Kana',
        roleKey: 'management.roles.projectsManager',
        imgSrc: '/portrait/TeddyKana.webp',
      },
      {
        name: 'Tristan Lépine',
        roleKey: 'management.roles.trainingsManager',
        imgSrc: '/portrait/TristanLepine.png',
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
        imgSrc: '/portrait/Alexandrine.webp',
        linkedIn: 'https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/',
      },
      {
        name: 'Michal Naumiak',
        roleKey: 'management.roles.partnershipsManager',
        missionKey: 'management.missions.mihal',
        imgSrc: '/portrait/MichalNaumiak.webp',
      },
      {
        name: 'Chaima Mohsni',
        roleKey: 'management.roles.partnershipsManager',
        imgSrc: '/portrait/ChaimaMohsni.webp',
      },
      {
        name: 'Adriana Paternina',
        roleKey: 'management.roles.treasuryManager',
        missionKey: 'management.missions.adriana',
        imgSrc: '/portrait/AdrianaMaria.webp',
        linkedIn: 'https://www.linkedin.com/in/adriana-paternina/',
      },
      {
        name: 'Anthony Lavertu',
        roleKey: 'management.roles.externalRelationsManager',
        missionKey: 'management.missions.anthony',
        imgSrc: '/portrait/Anthony.webp',
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
        imgSrc: '/portrait/UlysseGagné.webp',
      },
      {
        name: 'William Blanchet Lafrenière',
        roleKey: 'management.roles.socialManager',
        missionKey: 'management.missions.william',
        imgSrc: '/portrait/WilliamBlanchet.webp',
        linkedIn: 'https://www.linkedin.com/in/william-blanchet-lafrenière-8337282b1/',
      },
      {
        name: 'Félix Larrivée',
        roleKey: 'management.roles.socialManager',
        imgSrc: '/portrait/FelixLarrivee.webp',
      },
      {
        name: 'Melek Sebri',
        roleKey: 'management.roles.socialManager',
        imgSrc: '/portrait/MelekSebri.webp',
        linkedIn: 'https://www.linkedin.com/in/melek-sebri/',
      },
      {
        name: 'Nora Belattar',
        roleKey: 'management.roles.recognitionManager',
        missionKey: 'management.missions.nora',
        imgSrc: '/portrait/NoraBelattar.webp',
        linkedIn: 'https://www.linkedin.com/in/nora-belattar-77243b302/',
      },
      {
        name: 'Tiana Daniele Tekamgueu Epome',
        roleKey: 'management.roles.readingGroupManager',
        imgSrc: '/portrait/TianaDaniele.jpg',
      },
      {
        name: 'Khaled Ait Fella',
        roleKey: 'management.roles.competitionsManager',
        imgSrc: '/portrait/KhaledAit.jpg',
      },
    ],
  },
  {
    titleKey: 'management.sections.teamLeads',
    members: [
      {
        name: 'Anthony Lavertu',
        role: 'Drone Team Lead',
        imgSrc: '/portrait/Anthony.webp',
        linkedIn: 'https://www.linkedin.com/in/anthony-lavertu-2a29a7179/',
      },
      {
        name: 'Benjamin Leblanc',
        role: 'SGD-Beyond Team Lead',
        imgSrc: '/portrait/Benjamin_Leblanc.webp',
        linkedIn: 'https://www.linkedin.com/in/benjamin-leblanc-a9217128b/',
      },
      {
        name: 'Eloïse Prevot',
        role: 'NutriNov Team Lead',
        imgSrc: '/portrait/Eloise.webp',
        linkedIn: 'https://www.linkedin.com/in/eloise-prevot/',
      },
      {
        name: 'Cyrille Bernier',
        role: 'Poppy Humanoid (Conception) Team Lead',
        imgSrc: '/portrait/CyrilleBernier.webp',
        linkedIn: 'https://www.linkedin.com/in/cyrille-bernier-31208a252/',
      },
      {
        name: 'Baptiste Gabriel Bonin',
        role: 'Poppy Humanoid (Simulation) Team Lead',
        imgSrc: '/portrait/Baptiste.webp',
        linkedIn: 'https://www.linkedin.com/in/baptiste-bonin/',
      },
      {
        name: 'Deoth Guei',
        role: 'F1 Jedi Team Lead',
        imgSrc: '/portrait/Deoth.webp',
        linkedIn: 'https://www.linkedin.com/in/deoth-guei-382269191/',
      },
      {
        name: 'Jérôme Collet',
        role: 'F1 Jedi Team Lead (Team 2)',
        imgSrc: '/portrait/Jerome.webp',
        linkedIn: 'https://ca.linkedin.com/in/jérôme-collet-577953199',
      },
      {
        name: 'Akram Omari',
        role: 'FlapEEG Team Lead',
        imgSrc: '/portrait/Akram.webp',
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
