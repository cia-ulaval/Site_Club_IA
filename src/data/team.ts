export interface TeamMemberSource {
  name: string;
  roleKey?: string;
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
        name: 'Maëli Morneau',
        roleKey: 'management.roles.designsManager',
        imgSrc: '/portrait/maeli-morneau.webp',
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
        name: 'Adriana Paternina',
        roleKey: 'management.roles.treasuryManager',
        missionKey: 'management.missions.adriana',
        imgSrc: '/portrait/adriana-maria.webp',
        linkedIn: 'https://www.linkedin.com/in/adriana-paternina/',
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
        name: 'Félix Larrivée',
        roleKey: 'management.roles.socialManager',
        imgSrc: '/portrait/felix-larrivee.webp',
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
        name: 'Ala Edine',
        role: 'Synthetic Consumer Lab Team Lead',
        imgSrc: '/portrait/ala-edine.webp',
      },
      {
        name: 'Marc-Olivier Beaudry',
        role: 'Drone - Laser Tag Team Lead',
        imgSrc: '/portrait/marc-olivier-beaudry.webp',
      },
      {
        name: 'Khadidiatou Seck Dieng',
        role: 'BioVision Team Lead',
        imgSrc: '/portrait/khadidiatou-seck.webp',
      },
      {
        name: 'Nourhane Anani',
        role: 'BioVision Team Lead',
        imgSrc: '/portrait/nourhane-anani.webp',
      },
    ],
  },
];

export const alumni: { name: string; roleKey: string }[] = [
  { name: 'Nathaniel D’Amours', roleKey: 'management.roles.president' },
  { name: 'Mathieu Bazinet', roleKey: 'management.roles.trainingsManager' },
  { name: 'Louis-Étienne Messier', roleKey: 'management.roles.logisticsLeader' },
  { name: 'Jordan Mathieu', roleKey: 'management.roles.projectsManager' },
  { name: 'Anthony Lavertu', roleKey: 'management.roles.externalRelationsManager' },
  { name: 'Amen Ouannes', roleKey: 'management.roles.projectsManager' },
  { name: 'Youssouf Boubechiche', roleKey: 'management.roles.designsManager' },
];

export const LEADERSHIP_LD_NAMES = [
  'Cyrille Bernier',
  'Rana Azemdroub',
  'Alexandrine Lehoux',
  'Yves Mamadou Faye',
  'Dereck Bélanger',
  'Ulysse Gagné',
] as const;
