import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    key: 'flapeeg',
    image: '/project/FlappyBrain.webp',
    defaultTitle: 'FlapEEG',
    defaultDescription:
      "Un jeu vidéo innovant contrôlé par les ondes cérébrales (EEG). Découvrez comment l'IA et la neurotechnologie permettent de piloter un oiseau virtuel par la pensée. Projet pionnier en interface cerveau-machine, ouvert à tous les profils (neuro, IA, dev, design).",
    link: '/flapeeg',
    github: 'https://github.com/cia-ulaval/FlapEEG_interface_v1',
  },
  {
    key: 'f1tenth',
    image: '/project/f1tenthcar.webp',
    defaultTitle: 'F1Tenth',
    defaultDescription:
      "En partenariat avec le club étudiant VAUL (propriétaire de la voiture F1TENTH), développer un mode de contrôle via bracelet EMG. Objectif : détecter les mouvements du bras à partir des signaux musculaires, les interpréter avec de l'IA, puis les convertir en commandes de pilotage (direction/vitesse) pour contrôler le véhicule. Projet axé sur EMG et IA.",
    link: '/f1tenth',
    github: 'https://github.com/cia-ulaval/F1-team-1',
  },
  {
    key: 'drone',
    image: '/project/drone.webp',
    defaultTitle: 'Drone - Laser Tag',
    defaultDescription:
      'Développez un système laser clé en main pour une compétition FPV autonome : capteur 180°, émission, PCB custom et logiciel de gestion centralisé. Partenaire académique : Philippe Giguère. Team Lead : Anthony Lavertu.',
    link: '/drone',
    github: 'https://github.com/cia-ulaval/drone',
  },
  {
    key: 'poppy-conception',
    image: '/project/poppy.webp',
    defaultTitle: 'Poppy Humanoid (Conception)',
    defaultDescription:
      "Impression 3D, assemblage des articulations et intégration électronique d'un humanoïde open-source. Rejoignez le projet pour participer à la conception technique.",
    link: '/poppy-conception',
    github: 'https://github.com/cia-ulaval/poppy-conception',
  },
  {
    key: 'poppy-simulation',
    image: '/project/poppysimulation.webp',
    defaultTitle: 'Poppy Humanoid (Simulation)',
    defaultDescription:
      "Apprenez à un robot à marcher en développant des algorithmes RL en simulation, puis transférez-les sur le robot réel. Rejoignez le projet pour explorer l'IA robotique.",
    link: '/poppy-simulation',
    github: 'https://github.com/cia-ulaval/poppy-simulation-team-1',
  },
  {
    key: 'nutrinov',
    image: '/project/nutrinov.webp',
    defaultTitle: 'NutriNov',
    defaultDescription:
      'Identifiez un problème alimentaire et développez un prototype tech viable — en partenariat avec Open Food Facts. Type : Projet Entrepreneurial. Team Lead : Eloïse Prevot.',
    link: '/nutrinov',
  },
  {
    key: 'sgd-beyond',
    image: '/project/sgd.webp',
    defaultTitle: 'SGD - Beyond',
    defaultDescription:
      "Analyse et amélioration d'un algorithme fondamental d'IA (SGD) en y intégrant une méthode d'optimisation par bruit. Plus d'infos et code sur GitHub.",
    link: '/sgd-beyond',
    github: 'https://github.com/cia-ulaval/sgd',
  },
  {
    key: 'avion-cargo',
    image: '/project/AvionCargo.webp',
    defaultTitle: 'Avion-Cargo',
    defaultDescription:
      "Système d'atterrissage autonome de précision par vision par ordinateur. Détection de marqueurs ArUco, estimation 3D en temps réel et guidage intelligent pour des atterrissages < 10 cm.",
    link: '/avion-cargo',
    github: 'https://github.com/cia-ulaval/avion-cargo',
  },
  {
    key: 'asldecoder',
    image: '/project/asl.webp',
    defaultTitle: 'ASL Decoder',
    defaultDescription:
      "Système Raspberry Pi avec caméra pour la reconnaissance du langage des signes américain (ASL) en temps réel grâce à l'IA. Projet terminé combinant vision par ordinateur et apprentissage automatique.",
    link: '/asl-decoder',
  },
  {
    key: 'decisiontree',
    image: '/project/decisiontree.webp',
    defaultTitle: 'Decision Tree',
    defaultDescription:
      "Projet de recherche et développement sur les arbres de décision : explorez les algorithmes classiques et avancés, optimisez la prise de décision automatique et participez à la création d'outils open-source pour l'IA. Idéal pour les étudiants en data science, mathématiques et informatique.",
    link: '/decisiontree',
  },
  {
    key: 'lenia',
    image: '/project/leniacover.webp',
    defaultTitle: 'Lenia',
    defaultDescription:
      "Automate cellulaire autonome inspiré de la vie artificielle : simulez des créatures virtuelles capables d'émergence, d'évolution et d'interaction. Ce projet allie mathématiques, simulation, IA et visualisation scientifique. Rejoignez-nous pour explorer la vie numérique et l'algorithmique créative.",
    link: '/lenia',
    github: 'https://github.com/cia-ulaval/LENIA-frontend',
  },
  {
    key: 'mangaai',
    image: '/project/mangaai2.webp',
    defaultTitle: 'MangaAI',
    defaultDescription:
      "Traduction et analyse automatique de mangas grâce à l'IA : OCR, NLP, génération de dialogues et analyse de style. Participez à la création d'outils pour la culture japonaise, la linguistique computationnelle et la vision par ordinateur. Idéal pour les passionnés d'IA, de manga et de traitement du langage.",
    link: '/mangaai',
    github: 'https://github.com/cia-ulaval/MangaAutoTranslator',
  },
  {
    key: 'canlock',
    image: '',
    defaultTitle: 'CANlock',
    defaultDescription:
      'Projet partenaire avec Thales : Concevez un système intelligent pour détecter les attaques sur le bus CAN des véhicules. Objectif : réduire les faux positifs et livrer un pipeline exploitable. Profils recherchés : IA/Data, Cybersécurité, Embarqué.',
    link: '/canlock',
    github: 'https://github.com/cia-ulaval/CANlock',
  },
];

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>Projets IA - Club Intelligence Artificielle Université Laval | CIA ULaval</title>
        {/* Description */}
        <meta
          name="description"
          content="Découvrez les projets innovants du Club IA ULaval : FlappyBrain EEG, F1Tenth autonome, MangaAI, Lenia, Decision Tree et plus. Projets d'intelligence artificielle et machine learning."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="projets IA, FlappyBrain, F1Tenth, MangaAI, Lenia, Decision Tree, EEG, voiture autonome, génération manga, projets étudiants, machine learning, deep learning, Club IA ULaval"
        />

        {/* Auteur */}
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Projets IA - Club Intelligence Artificielle Université Laval"
        />
        <meta
          property="og:description"
          content="Découvrez nos projets innovants d'intelligence artificielle : FlappyBrain EEG, F1Tenth autonome, MangaAI et plus."
        />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/project/FlappyBrain.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projets IA - Club Intelligence Artificielle Université Laval"
        />
        <meta
          name="twitter:description"
          content="Découvrez nos projets innovants d'intelligence artificielle et machine learning."
        />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/project/FlappyBrain.webp" />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/projects" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Projets IA - Club Intelligence Artificielle Université Laval",
              "url": "https://cia.ift.ulaval.ca/projects",
              "description": "Collection des projets d'intelligence artificielle du Club IA ULaval",
              "mainEntity": {
                "@type": "Organization",
                "name": "Club Intelligence Artificielle - Université Laval",
                "url": "https://cia.ift.ulaval.ca",
                "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp",
                "description": "Club étudiant d'intelligence artificielle de l'Université Laval",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Québec, Canada"
                },
                "parentOrganization": {
                  "@type": "EducationalOrganization",
                  "name": "Université Laval"
                },
                "sameAs": [
                  "https://www.instagram.com/ciaulaval/",
                  "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all",
                  "https://github.com/cia-ulaval",
                  "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                ]
              },
              "hasPart": [
                {
                  "@type": "SoftwareApplication",
                  "name": "FlappyBrain EEG",
                  "description": "Jeu contrôlé par ondes cérébrales"
                },
                {
                  "@type": "SoftwareApplication", 
                  "name": "F1Tenth",
                  "description": "Voiture de course autonome"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "MangaAI",
                  "description": "Génération et traduction automatique de manga"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Lenia",
                  "description": "Automates cellulaires autonomes"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Decision Tree",
                  "description": "Recherche et développement d'arbres de décision"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <motion.section
        className="overflow-hidden mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {/* ---- en-tête ---- */}
          <header className="text-center mb-16">
            <motion.h1
              className="text-5xl font-extrabold theme-text-gradient tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('home.projects.title', 'Projects')}
            </motion.h1>
            <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-accent-500 to-primary-500" />
          </header>

          {/* ---- cartes projets ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.key}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div
                  className={`rounded-xl overflow-hidden border-2 !border-primary-500/75 hover:!border-primary-400 bg-gradient-to-br from-primary-950/85 via-primary-900/65 to-primary-950/75 shadow-lg hover:shadow-xl hover:shadow-primary-900/20 w-full max-w-sm transition-all duration-300 h-auto min-h-[400px] sm:min-h-[450px] ${
                    project.key === 'flapeeg'
                      ? 'ring-2 ring-accent-400/70 shadow-accent-500/25'
                      : ''
                  }`}
                >
                  {['canlock'].includes(project.key) ? (
                    <div className="w-full h-64 bg-primary-900/35 border-b !border-primary-500/75 rounded-xl flex items-center justify-center text-accent-300 text-lg">
                      {t('home.projects.imageComing', 'Image du projet à venir')}
                    </div>
                  ) : (
                    <div
                      className="relative w-full h-64 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${project.image || '/project/placeholder.webp'})`,
                      }}
                    >
                      {project.key === 'flapeeg' && (
                        <span className="absolute top-3 left-3 z-10 rounded-full border !border-accent-300/80 bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-200 shadow-lg backdrop-blur-sm">
                          {t(
                            'home.projects.flapeeg.nominationBadge',
                            'Nominated at Gala de la vie étudiante'
                          )}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6 flex flex-col min-h-[200px]">
                    <h3 className="text-xl font-bold text-accent-300 mb-2">
                      {t(`home.projects.${project.key}.title`, project.defaultTitle)}
                    </h3>
                    <p className="!text-accent-300 mb-4 flex-grow overflow-visible break-words leading-relaxed text-sm sm:text-base">
                      {t(`home.projects.${project.key}.description`, project.defaultDescription)}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto sm:flex-row flex-col">
                      <Link
                        to={project.link}
                        className="px-4 py-2 text-sm text-base-inverse font-medium rounded-md theme-btn-gradient transition-all duration-300 flex items-center justify-center sm:flex-grow"
                      >
                        {t('home.projects.learnMore', 'Learn more')} →
                      </Link>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm text-base-inverse font-medium rounded-md theme-btn-secondary transition-all duration-300 flex items-center justify-center sm:flex-grow"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          <span>{t('home.projects.github', 'GitHub')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
