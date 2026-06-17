import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Bot,
  Brain,
  Box,
  Zap,
  Book,
  FlaskConical,
  Cpu,
  Cable,
  RefreshCw,
  CheckCircle,
  Target,
  Terminal,
  Award,
  ExternalLink,
} from 'lucide-react';
import BackToProjects from '../components/BackToProjects';
import DiscordCTA from '../components/DiscordCTA';
import { useMotion } from '../hooks/useMotion';
function PoppySimulation() {
  const { t } = useTranslation();
  const m = useMotion();
  const timeline = t('poppy.timeline.weeks', { returnObjects: true }) as Array<{
    period: string;
    title: string;
    description: string;
  }>;
  const benefits = t('poppy.benefits.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const weekIcons = [Book, FlaskConical, Cpu, Cable, RefreshCw, CheckCircle];
  return (
    <>
      <Helmet>
        <title>Poppy Simulation - Robot Humanoïde IA Apprentissage | Club IA ULaval</title>
        <meta
          name="description"
          content="Poppy Simulation : projet de Reinforcement Learning pour apprendre à un robot humanoïde à marcher. RL, simulation robotique, Sim2Real au Club IA ULaval."
        />
        <meta
          name="keywords"
          content="Poppy, robot humanoïde, reinforcement learning, simulation, IA, robotique, Sim2Real, RL, PyTorch, OpenAI Gym, Club IA ULaval"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta property="og:title" content="Poppy Simulation - Robot Humanoïde IA Apprentissage" />
        <meta
          property="og:description"
          content="Développez un modèle de RL pour faire marcher un robot humanoïde. Projet innovant du Club IA ULaval avec Vooban."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Poppy Simulation - Robot Humanoïde IA" />
        <meta
          name="twitter:description"
          content="Reinforcement Learning appliqué à la robotique humanoïde. Club IA ULaval."
        />
        <html lang="fr" />
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "ResearchProject", "name": "Poppy Simulation - Reinforcement Learning pour Robot Humanoïde", "description": "Développement d'une IA basée sur le Reinforcement Learning pour apprendre à un robot humanoïde Poppy à marcher", "provider": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca" }, "author": [ { "@type": "Person", "name": "Baptiste Bonin", "jobTitle": "Team Lead" }, { "@type": "Person", "name": "Jonathan Caron-Roberge", "jobTitle": "Team Lead" } ], "sponsor": { "@type": "Organization", "name": "Vooban" }, "about": ["Reinforcement Learning", "Robotics", "Simulation", "Artificial Intelligence", "Sim2Real"], "keywords": ["Poppy", "robot humanoïde", "reinforcement learning", "RL", "simulation robotique"] } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <div>
            <BackToProjects />
            {/* Hero Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-8 h-8 theme-text-accent" />
                  </div>
                  <h1 className="cia-heading-hero mb-4">
                    <span className="theme-text-gradient">Poppy Simulation</span>
                  </h1>
                  <p className="cia-body-lead text-neutral-200 mb-4">
                    {t('poppy.hero.paragraph1')}
                  </p>
                  <p className="text-neutral-300">{t('poppy.hero.paragraph2')}</p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="theme-media-frame max-w-lg">
                    <img
                      src="/project/poppysimulation.webp"
                      alt={t('poppy.hero.image.alt')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
            {/* Team Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-4">
                {t('poppy.team.title')}
              </h2>
              <div className="text-center space-y-2">
                <p className="text-neutral-300 text-lg">{t('poppy.team.leads')}</p>
                <p className="text-neutral-400">{t('poppy.team.partner')}</p>
                <p className="text-accent-400 font-semibold">{t('poppy.team.size')}</p>
                <p className="text-neutral-400 text-sm">{t('poppy.team.profiles')}</p>
              </div>
            </motion.section>
            {/* Objectives */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppy.objectives.title')}
              </h2>
              <div className="cia-card cia-card-content max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 theme-text-accent" />
                  <h3 className="cia-heading-card text-neutral-100">
                    {t('poppy.objectives.main.title')}
                  </h3>
                </div>
                <p className="text-neutral-300 text-lg">{t('poppy.objectives.main.description')}</p>
              </div>
            </motion.section>
            {/* Timeline */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppy.timeline.title')}
              </h2>
              <div className="space-y-4">
                {timeline.map((week, index) => {
                  const Icon = weekIcons[index] || CheckCircle;
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-4 items-start cia-card cia-card-content"
                      {...m.stagger(index)}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 theme-text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-accent-400 font-semibold block mb-1">
                          {week.period}
                        </span>
                        <h3 className="cia-heading-card text-neutral-100 mb-1">{week.title}</h3>
                        <p className="text-neutral-300 text-sm">{week.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* Technical */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppy.technical.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-5 h-5 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('poppy.technical.rl.title')}
                    </h3>
                  </div>
                  <p className="text-neutral-300 text-sm">{t('poppy.technical.rl.description')}</p>
                </div>
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Box className="w-5 h-5 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('poppy.technical.simulation.title')}
                    </h3>
                  </div>
                  <p className="text-neutral-300 text-sm">
                    {t('poppy.technical.simulation.description')}
                  </p>
                </div>
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-5 h-5 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('poppy.technical.sim2real.title')}
                    </h3>
                  </div>
                  <p className="text-neutral-300 text-sm">
                    {t('poppy.technical.sim2real.description')}
                  </p>
                </div>
              </div>
            </motion.section>
            {/* Technologies */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppy.technologies.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-5 h-5 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('poppy.technologies.software.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    {(
                      t('poppy.technologies.software.items', { returnObjects: true }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-accent-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-5 h-5 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('poppy.technologies.hardware.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    {(
                      t('poppy.technologies.hardware.items', { returnObjects: true }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-accent-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 theme-text-accent" />
                    <h3 className="cia-heading-card text-neutral-100">
                      {t('poppy.technologies.skills.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-neutral-300 text-sm">
                    {(
                      t('poppy.technologies.skills.items', { returnObjects: true }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-accent-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
            {/* Benefits */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppy.benefits.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const icons = [Bot, Brain, Zap];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="cia-card cia-card-content text-center"
                      {...m.stagger(index)}
                    >
                      <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 theme-text-accent" />
                      </div>
                      <h3 className="cia-heading-card text-neutral-100 mb-3">{benefit.title}</h3>
                      <p className="text-neutral-300">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* Resources */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-6">
                {t('poppy.resources.title')}
              </h2>
              <div className="flex justify-center">
                <a
                  href="https://www.poppy-project.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cia-btn-ghost inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('poppy.resources.poppy')}
                </a>
              </div>
            </motion.section>
            {/* CTA */}
            <DiscordCTA label={t('poppy.cta.button')}>
              {t('poppy.cta.title')} <br /> {t('poppy.cta.subtitle')} <br />
              <span className="text-accent-400 font-bold">{t('poppy.cta.description')}</span>
            </DiscordCTA>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default PoppySimulation;
