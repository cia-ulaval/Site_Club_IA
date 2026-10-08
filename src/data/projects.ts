export type ProjectStatus = 'active' | 'shipped';

export const SEMESTERS = [
  'automne2026',
  'hiver2026',
  'automne2025',
  'hiver2025',
  'automne2024',
  'hiver2024',
  'automne2023',
] as const;
export type Semester = (typeof SEMESTERS)[number];

export interface Project {
  key: string;
  image: string;
  defaultTitle: string;
  defaultDescription: string;
  link: string;
  github?: string;
  category: 'iaml' | 'hardware' | 'application' | 'robotics';
  status: ProjectStatus;
  semester: Semester;
  partner?: string;
  /* Taking applicants this term. Not every active project is. */
  recruiting?: boolean;
}

export const projects: Project[] = [
  {
    key: 'flapeeg',
    image: '/project/flappy-brain.webp',
    defaultTitle: 'FlapEEG',
    defaultDescription:
      "Un jeu vidéo innovant contrôlé par les ondes cérébrales (EEG). Découvrez comment l'IA et la neurotechnologie permettent de piloter un oiseau virtuel par la pensée. Projet pionnier en interface cerveau-machine, ouvert à tous les profils (neuro, IA, dev, design).",
    link: '/flapeeg',
    github: 'https://github.com/cia-ulaval/FlapEEG_interface_v1',
    category: 'iaml',
    status: 'active',
    semester: 'automne2024',
    recruiting: true,
  },
  {
    key: 'f1tenth',
    image: '/project/f1tenthcar.webp',
    defaultTitle: 'F1Tenth',
    defaultDescription:
      "En partenariat avec le club étudiant VAUL (propriétaire de la voiture F1TENTH), développer un mode de contrôle via bracelet EMG. Objectif : détecter les mouvements du bras à partir des signaux musculaires, les interpréter avec de l'IA, puis les convertir en commandes de pilotage (direction/vitesse) pour contrôler le véhicule. Projet axé sur EMG et IA.",
    link: '/f1tenth',
    github: 'https://github.com/cia-ulaval/F1-team-1',
    category: 'hardware',
    status: 'active',
    semester: 'automne2024',
    partner: 'VAUL',
    recruiting: true,
  },
  {
    key: 'drone',
    image: '/project/drone.webp',
    defaultTitle: 'Drone - Laser Tag',
    defaultDescription:
      'Développez un système laser clé en main pour une compétition FPV autonome : capteur 180°, émission, PCB custom et logiciel de gestion centralisé. Partenaire académique : Philippe Giguère.',
    link: '/drone',
    github: 'https://github.com/cia-ulaval/drone',
    category: 'hardware',
    status: 'active',
    semester: 'hiver2025',
    partner: 'Philippe Giguère',
    recruiting: true,
  },
  {
    key: 'poppy-conception',
    image: '/project/poppy.webp',
    defaultTitle: 'Poppy Humanoid (Conception)',
    defaultDescription:
      "Impression 3D, assemblage des articulations et intégration électronique d'un humanoïde open-source. Rejoignez le projet pour participer à la conception technique.",
    link: '/poppy-conception',
    github: 'https://github.com/cia-ulaval/poppy-conception',
    category: 'hardware',
    status: 'shipped',
    semester: 'hiver2025',
  },
  {
    key: 'poppy-simulation',
    image: '/project/poppysimulation.webp',
    defaultTitle: 'Poppy Humanoid (Simulation)',
    defaultDescription:
      "Apprenez à un robot à marcher en développant des algorithmes RL en simulation, puis transférez-les sur le robot réel. Rejoignez le projet pour explorer l'IA robotique.",
    link: '/poppy-simulation',
    github: 'https://github.com/cia-ulaval/poppy-simulation-team-1',
    category: 'robotics',
    status: 'active',
    semester: 'hiver2025',
    partner: 'Vooban',
    recruiting: true,
  },
  {
    key: 'nutrinov',
    image: '/project/nutrinov.webp',
    defaultTitle: 'NutriNov',
    defaultDescription:
      'Identifiez un problème alimentaire et développez un prototype tech viable — en partenariat avec Open Food Facts. Type : Projet Entrepreneurial. Team Lead : Eloïse Prevot.',
    link: '/nutrinov',
    category: 'application',
    status: 'active',
    semester: 'hiver2025',
    partner: 'Open Food Facts',
  },
  {
    key: 'sgd-beyond',
    image: '/project/sgd.webp',
    defaultTitle: 'SGD - Beyond',
    defaultDescription:
      "Analyse et amélioration d'un algorithme fondamental d'IA (SGD) en y intégrant une méthode d'optimisation par bruit. Plus d'infos et code sur GitHub.",
    link: '/sgd-beyond',
    github: 'https://github.com/cia-ulaval/sgd',
    category: 'iaml',
    status: 'shipped',
    semester: 'hiver2025',
  },
  {
    key: 'avion-cargo',
    image: '/project/avion-cargo.webp',
    defaultTitle: 'Avion-Cargo',
    defaultDescription:
      "Système d'atterrissage autonome de précision par vision par ordinateur. Détection de marqueurs ArUco, estimation 3D en temps réel et guidage intelligent pour des atterrissages < 10 cm.",
    link: '/avion-cargo',
    github: 'https://github.com/cia-ulaval/avion-cargo',
    category: 'hardware',
    status: 'active',
    semester: 'automne2026',
    recruiting: true,
  },
  {
    key: 'navflow',
    image: '',
    defaultTitle: 'NavFlow',
    defaultDescription:
      "Et si les feux de circulation pouvaient apprendre à réduire eux-mêmes les embouteillages ? NavFlow entraîne des agents par renforcement dans un environnement urbain simulé, puis mesure leur effet sur le temps d'attente, la durée des trajets et la congestion.",
    link: '/navflow',
    github: 'https://github.com/cia-ulaval/NavFlow',
    category: 'iaml',
    status: 'active',
    semester: 'automne2026',
    recruiting: true,
  },
  {
    key: 'biovision',
    image: '',
    defaultTitle: 'BioVision',
    defaultDescription:
      "Des téraoctets de vidéo captés par des colliers-caméras portés par des caribous de la Côte-Nord. BioVision développe des modèles de vision par ordinateur pour y reconnaître des comportements et caractériser l'environnement, avec le Département de biologie.",
    link: '/biovision',
    github: 'https://github.com/cia-ulaval/BioVision',
    category: 'iaml',
    status: 'active',
    semester: 'automne2026',
    partner: 'Département de biologie, ULaval',
    recruiting: true,
  },
  {
    key: 'hemomentor',
    image: '',
    defaultTitle: 'HemoMentor',
    defaultDescription:
      "Un assistant qui observe l'interface d'une machine d'hémolyse avec une caméra et montre à l'utilisateur où appuyer. Modèles vision-langage, inférence locale et suivi de la main, sans aucune modification de l'équipement.",
    link: '/hemomentor',
    github: 'https://github.com/cia-ulaval/HemoMentor',
    category: 'iaml',
    status: 'active',
    semester: 'automne2026',
    partner: 'Utili-M',
    recruiting: true,
  },
  {
    key: 'asldecoder',
    image: '/project/asl.webp',
    defaultTitle: 'ASL Decoder',
    defaultDescription:
      "Système Raspberry Pi avec caméra pour la reconnaissance du langage des signes américain (ASL) en temps réel grâce à l'IA. Projet terminé combinant vision par ordinateur et apprentissage automatique.",
    link: '/asl-decoder',
    category: 'iaml',
    status: 'shipped',
    semester: 'hiver2025',
  },
  {
    key: 'synthetic-consumer-lab',
    image: '',
    defaultTitle: 'Synthetic Consumer Lab',
    defaultDescription:
      'Simuler des populations pour mieux comprendre leurs décisions. Le projet crée des populations virtuelles composées d’agents intelligents aux profils variés, à partir de données publiques (Statistique Canada, Institut de la statistique du Québec), pour prédire les réactions à un nouveau produit ou service avant son déploiement.',
    link: '/synthetic-consumer-lab',
    category: 'application',
    status: 'active',
    semester: 'automne2026',
  },
  {
    key: 'canlock',
    image: '',
    defaultTitle: 'CANlock',
    defaultDescription:
      'Projet partenaire avec Thales : Concevez un système intelligent pour détecter les attaques sur le bus CAN des véhicules. Objectif : réduire les faux positifs et livrer un pipeline exploitable. Profils recherchés : IA/Data, Cybersécurité, Embarqué.',
    link: '/canlock',
    github: 'https://github.com/cia-ulaval/CANlock',
    category: 'application',
    status: 'shipped',
    semester: 'hiver2025',
    partner: 'Thales',
  },
];

export const domainCount = new Set(projects.map((p) => p.category)).size;
