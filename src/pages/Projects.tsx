import { ArrowRight, CircuitBoard, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useMotion } from '../hooks/useMotion';

const projects = [
  {
    key: 'flapeeg',
    image: '/project/FlappyBrain.webp',
    defaultTitle: 'FlapEEG',
    defaultDescription:
      "Un jeu vidéo innovant contrôlé par les ondes cérébrales (EEG). Découvrez comment l'IA et la neurotechnologie permettent de piloter un oiseau virtuel par la pensée. Projet pionnier en interface cerveau-machine, ouvert à tous les profils (neuro, IA, dev, design).",
    link: '/flapeeg',
    github: 'https://github.com/cia-ulaval/FlapEEG_interface_v1',
    category: 'iaml',
    featured: true,
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
  },
  {
    key: 'drone',
    image: '/project/drone.jpeg',
    defaultTitle: 'Drone - Laser Tag',
    defaultDescription:
      'Développez un système laser clé en main pour une compétition FPV autonome : capteur 180°, émission, PCB custom et logiciel de gestion centralisé. Partenaire académique : Philippe Giguère. Team Lead : Anthony Lavertu.',
    link: '/drone',
    github: 'https://github.com/cia-ulaval/drone',
    category: 'hardware',
  },
  {
    key: 'poppy-conception',
    image: '/project/poppy.jpeg',
    defaultTitle: 'Poppy Humanoid (Conception)',
    defaultDescription:
      "Impression 3D, assemblage des articulations et intégration électronique d'un humanoïde open-source. Rejoignez le projet pour participer à la conception technique.",
    link: '/poppy-conception',
    github: 'https://github.com/cia-ulaval/poppy-conception',
    category: 'hardware',
  },
  {
    key: 'poppy-simulation',
    image: '/project/poppysimulation.jpeg',
    defaultTitle: 'Poppy Humanoid (Simulation)',
    defaultDescription:
      "Apprenez à un robot à marcher en développant des algorithmes RL en simulation, puis transférez-les sur le robot réel. Rejoignez le projet pour explorer l'IA robotique.",
    link: '/poppy-simulation',
    github: 'https://github.com/cia-ulaval/poppy-simulation-team-1',
    category: 'robotics',
  },
  {
    key: 'nutrinov',
    image: '/project/nutrinov.png',
    defaultTitle: 'NutriNov',
    defaultDescription:
      'Identifiez un problème alimentaire et développez un prototype tech viable — en partenariat avec Open Food Facts. Type : Projet Entrepreneurial. Team Lead : Eloïse Prevot.',
    link: '/nutrinov',
    category: 'application',
  },
  {
    key: 'sgd-beyond',
    image: '/project/sgd.png',
    defaultTitle: 'SGD - Beyond',
    defaultDescription:
      "Analyse et amélioration d'un algorithme fondamental d'IA (SGD) en y intégrant une méthode d'optimisation par bruit. Plus d'infos et code sur GitHub.",
    link: '/sgd-beyond',
    github: 'https://github.com/cia-ulaval/sgd',
    category: 'iaml',
  },
  {
    key: 'avion-cargo',
    image: '/project/AvionCargo.jpg',
    defaultTitle: 'Avion-Cargo',
    defaultDescription:
      "Système d'atterrissage autonome de précision par vision par ordinateur. Détection de marqueurs ArUco, estimation 3D en temps réel et guidage intelligent pour des atterrissages < 10 cm.",
    link: '/avion-cargo',
    github: 'https://github.com/cia-ulaval/avion-cargo',
    category: 'hardware',
  },
  {
    key: 'asldecoder',
    image: '/project/asl.png',
    defaultTitle: 'ASL Decoder',
    defaultDescription:
      "Système Raspberry Pi avec caméra pour la reconnaissance du langage des signes américain (ASL) en temps réel grâce à l'IA. Projet terminé combinant vision par ordinateur et apprentissage automatique.",
    link: '/asl-decoder',
    category: 'iaml',
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
  },
];

function Projects() {
  const { t } = useTranslation();
  const m = useMotion();

  return (
    <>
      <Helmet>
        <title>Projets IA - Club Intelligence Artificielle Université Laval | CIA ULaval</title>
        <meta
          name="description"
          content="Découvrez les projets innovants du Club IA ULaval : FlappyBrain EEG, F1Tenth autonome, MangaAI, Lenia, Decision Tree et plus. Projets d'intelligence artificielle et machine learning."
        />
        <meta
          name="keywords"
          content="projets IA, FlappyBrain, F1Tenth, MangaAI, Lenia, Decision Tree, EEG, voiture autonome, génération manga, projets étudiants, machine learning, deep learning, Club IA ULaval"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
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
        <link rel="canonical" href="https://cia.ift.ulaval.ca/projects" />
        <html lang="fr" />
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
                "url": "https://cia.ift.ulaval.ca"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.section className="overflow-hidden mt-24" {...m.fadeIn}>
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {/* Header */}
          <header className="mb-12">
            <motion.h1
              className="text-5xl font-extrabold theme-text-gradient tracking-wide mb-4"
              {...m.slideUp}
            >
              {t('home.projects.title', 'Projects')}
            </motion.h1>
            <motion.p
              className="text-primary-400/70 text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('home.projectsPage.subtitle')}
            </motion.p>
          </header>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.key} {...m.stagger(index)} className="h-full">
                <Link
                  to={project.link}
                  className="group flex flex-col h-full rounded-xl overflow-hidden border !border-primary-500/50 hover:!border-primary-400 bg-gradient-to-br from-primary-950/85 via-primary-900/65 to-primary-950/75 shadow-md hover:shadow-xl hover:shadow-primary-900/20 transition-all duration-300 cursor-pointer"
                >
                  {/* Image region */}
                  <div className="relative h-52 overflow-hidden bg-primary-900/40">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={t(`home.projects.${project.key}.title`, project.defaultTitle)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-primary-500/50">
                        <CircuitBoard className="w-10 h-10" />
                        <span className="text-xs font-medium tracking-wide uppercase text-primary-500/40">
                          {t(`home.projects.${project.key}.title`, project.defaultTitle)}
                        </span>
                      </div>
                    )}

                    {/* GitHub icon — visible on group hover */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 p-2 bg-base/70 backdrop-blur-sm rounded-full text-primary-300 hover:text-accent-300 opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 cia-focus-ring"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {/* Nomination badge */}
                    {project.key === 'flapeeg' && (
                      <span className="absolute top-3 left-3 z-10 rounded-full border !border-accent-300/80 bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-200 shadow-lg backdrop-blur-sm">
                        {t(
                          'home.projects.flapeeg.nominationBadge',
                          'Nominated at Gala de la vie étudiante'
                        )}
                      </span>
                    )}
                  </div>

                  {/* Text region — fills remaining card height */}
                  <div className="flex-1 flex flex-col p-5 gap-2">
                    <span className="text-xs font-semibold text-primary-400/70 uppercase tracking-wider">
                      {t(`projects.categories.${project.category}`)}
                    </span>
                    <h3 className="text-lg font-bold text-accent-300 leading-snug">
                      {t(`home.projects.${project.key}.title`, project.defaultTitle)}
                    </h3>
                    <p className="text-sm text-accent-300/70 leading-relaxed line-clamp-3">
                      {t(`home.projects.${project.key}.description`, project.defaultDescription)}
                    </p>
                    <span className="mt-auto pt-3 text-sm font-medium text-accent-400 flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      {t('home.projects.learnMore', 'En savoir plus')}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
