import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Plane,
  Target,
  Zap,
  Trophy,
  Clock,
  AlertCircle,
  Cpu,
  Radio,
  Box,
  Eye,
  Gamepad2,
  CheckCircle,
  Lightbulb,
  Users,
} from 'lucide-react';
import BackToProjects from '../components/BackToProjects';
import DiscordCTA from '../components/DiscordCTA';
import { useMotion } from '../hooks/useMotion';
function DroneLaserTag() {
  const { t } = useTranslation();
  const m = useMotion();
  const roles = [
    {
      icon: Radio,
      title: t('drone.roles.gel.title'),
      count: t('drone.roles.gel.count'),
      description: t('drone.roles.gel.description'),
      skills: t('drone.roles.gel.skills', { returnObjects: true }) as string[],
    },
    {
      icon: Box,
      title: t('drone.roles.simulation.title'),
      count: t('drone.roles.simulation.count'),
      description: t('drone.roles.simulation.description'),
      skills: t('drone.roles.simulation.skills', { returnObjects: true }) as string[],
    },
    {
      icon: Eye,
      title: t('drone.roles.ai.title'),
      count: t('drone.roles.ai.count'),
      description: t('drone.roles.ai.description'),
      skills: t('drone.roles.ai.skills', { returnObjects: true }) as string[],
    },
    {
      icon: Gamepad2,
      title: t('drone.roles.pilots.title'),
      count: t('drone.roles.pilots.count'),
      description: t('drone.roles.pilots.description'),
      skills: t('drone.roles.pilots.skills', { returnObjects: true }) as string[],
    },
  ];
  const droneObjectives = t('drone.objectives.drone.items', { returnObjects: true }) as string[];
  const aiObjectives = t('drone.objectives.ai.items', { returnObjects: true }) as string[];
  const deliverables = t('drone.objectives.deliverables.items', {
    returnObjects: true,
  }) as string[];
  const commitments = t('drone.commitment.items', { returnObjects: true }) as string[];
  const benefits = t('drone.benefits.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  return (
    <>
      <Helmet>
        <title>Drone Laser Tag - Compétition Drones Autonomes | Club IA ULaval</title>
        <meta
          name="description"
          content="Compétition de drones autonomes en laser tag. Conception, IA embarquée, Reinforcement Learning, Isaac Sim. Affrontez les meilleures universités du Québec!"
        />
        <meta
          name="keywords"
          content="drone, laser tag, IA embarquée, reinforcement learning, Isaac Sim, FPV, computer vision, SLAM, robotique, compétition"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta property="og:title" content="Drone Laser Tag - Compétition Drones Autonomes" />
        <meta
          property="og:description"
          content="Projet compétitif de drones autonomes. Conception hardware, IA embarquée et pilotage autonome pour gagner la compétition laser tag!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drone Laser Tag - Compétition Drones Autonomes" />
        <meta
          name="twitter:description"
          content="Affrontez les meilleures universités dans une compétition de drones autonomes!"
        />
        <html lang="fr" />
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "Event", "name": "Compétition de Drone Laser Tag", "description": "Compétition universitaire de drones autonomes avec IA embarquée et laser tag", "organizer": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca" }, "performer": { "@type": "Person", "name": "Anthony Lavertu", "jobTitle": "Team Lead" }, "sponsor": [ { "@type": "Person", "name": "Philippe Giguère" }, { "@type": "Organization", "name": "Tracel AI" } ], "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "eventStatus": "https://schema.org/EventScheduled", "keywords": ["drone", "IA", "reinforcement learning", "robotique", "compétition"] } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <div>
            <BackToProjects />
            {/* Hero Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  <span className="cia-label text-accent-400 mb-3">Compétition Universitaire</span>
                  <h1 className="cia-heading-hero mb-6">
                    <span className="theme-text-gradient">
                      Drone <br /> Laser Tag
                    </span>
                  </h1>
                  <p className="cia-body-lead text-neutral-200 mb-4">
                    {t('drone.hero.paragraph1')}
                  </p>
                  <p className="text-neutral-400 leading-relaxed">{t('drone.hero.paragraph2')}</p>
                </div>
                <div className="flex justify-center">
                  <div className="theme-media-frame max-w-lg">
                    <img
                      src="/project/drone.webp"
                      alt="Drone Laser Tag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
            {/* Team info */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="flex flex-wrap items-center justify-center gap-8 cia-card cia-card-content">
                <div className="text-center">
                  <Users className="w-6 h-6 theme-text-accent mx-auto mb-2" />
                  <p className="text-neutral-300 font-medium">{t('drone.team.lead')}</p>
                </div>
                <div className="h-8 w-px bg-primary-500/30" />
                <div className="text-center">
                  <Lightbulb className="w-6 h-6 theme-text-accent mx-auto mb-2" />
                  <p className="text-neutral-300 font-medium">{t('drone.team.partner')}</p>
                </div>
                <div className="h-8 w-px bg-primary-500/30" />
                <div className="text-center">
                  <Trophy className="w-6 h-6 theme-text-accent mx-auto mb-2" />
                  <p className="text-accent-400 font-bold text-lg">{t('drone.team.size')}</p>
                </div>
              </div>
            </motion.section>
            {/* Objectives */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('drone.objectives.title')}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div className="cia-card cia-card-content" {...m.stagger(0)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-6 h-6 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('drone.objectives.drone.title')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {droneObjectives.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-300">
                        <CheckCircle className="w-4 h-4 theme-text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div className="cia-card cia-card-content" {...m.stagger(1)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('drone.objectives.ai.title')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {aiObjectives.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-300">
                        <CheckCircle className="w-4 h-4 theme-text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div className="cia-card cia-card-content" {...m.stagger(2)}>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('drone.objectives.deliverables.title')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-300">
                        <Zap className="w-4 h-4 theme-text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>
            {/* Roles */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('drone.roles.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role, index) => {
                  const Icon = role.icon;
                  return (
                    <motion.div
                      key={index}
                      className="cia-card cia-card-content"
                      {...m.stagger(index)}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 theme-text-accent" />
                        </div>
                        <div>
                          <h3 className="cia-heading-card text-neutral-100 mb-1">{role.title}</h3>
                          <span className="text-accent-400 text-sm font-semibold">
                            {role.count}
                          </span>
                        </div>
                      </div>
                      <p className="text-neutral-300 text-sm mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill: string, idx: number) => (
                          <span key={idx} className="cia-badge-neutral text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* Commitment */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="cia-card cia-card-content">
                <div className="flex items-center gap-4 mb-6">
                  <AlertCircle className="w-8 h-8 theme-text-accent" />
                  <h2 className="cia-heading-section text-neutral-100">
                    {t('drone.commitment.title')}
                  </h2>
                </div>
                <p className="text-neutral-300 mb-6 text-lg">{t('drone.commitment.subtitle')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {commitments.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-primary-500/5 rounded-xl border theme-border-accent-important"
                    >
                      <Clock className="w-5 h-5 theme-text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
            {/* Benefits */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('drone.benefits.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const icons = [Lightbulb, Trophy, Zap];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="cia-card cia-card-content text-center"
                      {...m.stagger(index)}
                    >
                      <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 theme-text-accent" />
                      </div>
                      <h3 className="cia-heading-card text-neutral-100 mb-3">{benefit.title}</h3>
                      <p className="text-neutral-300">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* CTA */}
            <DiscordCTA label={t('drone.cta.button')}>
              {t('drone.cta.title')} <br />
              {t('drone.cta.subtitle')} <br />
              <span className="text-accent-400 font-bold">{t('drone.cta.description')}</span>
            </DiscordCTA>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default DroneLaserTag;
