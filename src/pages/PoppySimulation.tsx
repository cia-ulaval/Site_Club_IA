import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Bot,
  Brain,
  Box,
  Zap,
  FileText,
  ArrowRight,
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
function PoppySimulation() {
  const { t } = useTranslation();
  const deliverables = t('poppy.objectives.deliverables.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
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
        <motion.div
          className="theme-content-shell theme-surface-primary shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="sr-only">{t('poppy.hero.title')}</h1>
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="sr-only">{t('poppy.hero.subtitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-10 h-10 theme-text-accent" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                      <span className="theme-text-gradient">Poppy Simulation</span>
                    </h1>
                  </div>
                  <p className="sr-only">{t('poppy.hero.subtitle')}</p>
                  <p className="theme-text-muted mb-4 sm:mb-6 text-justify">
                    {t('poppy.hero.paragraph1')}
                  </p>
                  <p className="theme-text-muted text-justify">{t('poppy.hero.paragraph2')}</p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src="/project/poppy.webp"
                    alt={t('poppy.hero.image.alt')}
                    className="rounded-xl shadow-2xl mt-4 sm:mt-8 w-full h-80 sm:h-96 object-cover"
                    style={{
                      border: '2px solid rgb(var(--color-primary-500))',
                    }}
                  />
                </div>
              </div>
            </motion.section>
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-4">
                {t('poppy.team.title')}
              </h2>
              <div className="text-center mb-8 space-y-2">
                <p className="theme-text-secondary text-lg">{t('poppy.team.leads')}</p>
                <p className="theme-text-muted">{t('poppy.team.partner')}</p>
                <p className="theme-text-accent font-semibold">{t('poppy.team.size')}</p>
                <p className="theme-text-muted text-sm">{t('poppy.team.profiles')}</p>
              </div>
            </motion.section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('poppy.objectives.title')}
              </h2>
              <div
                className="theme-surface-secondary rounded-2xl shadow-lg p-6 mb-8"
                style={{ border: '2px solid rgb(var(--color-primary-500))' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 theme-text-accent" />
                  <h3 className="text-xl font-bold text-accent-300">
                    {t('poppy.objectives.main.title')}
                  </h3>
                </div>
                <p className="theme-text-secondary text-lg">
                  {t('poppy.objectives.main.description')}
                </p>
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('poppy.timeline.title')}
              </h2>
              <div className="space-y-6">
                {timeline.map((week, index) => {
                  const Icon = weekIcons[index] || CheckCircle;
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-4 items-start"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center border-2 theme-border-accent">
                          <Icon className="w-6 h-6 theme-text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-primary-300 font-semibold block mb-1">
                          {week.period}
                        </span>
                        <h3 className="text-lg font-bold text-accent-300 mb-1">{week.title}</h3>
                        <p className="theme-text-muted text-sm">{week.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('poppy.technical.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 theme-text-accent" />
                    <h3 className="text-lg font-bold text-accent-300">
                      {t('poppy.technical.rl.title')}
                    </h3>
                  </div>
                  <p className="theme-text-muted text-sm">{t('poppy.technical.rl.description')}</p>
                </div>
                <div
                  className="theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Box className="w-6 h-6 theme-text-accent" />
                    <h3 className="text-lg font-bold text-accent-300">
                      {t('poppy.technical.simulation.title')}
                    </h3>
                  </div>
                  <p className="theme-text-muted text-sm">
                    {t('poppy.technical.simulation.description')}
                  </p>
                </div>
                <div
                  className="theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 theme-text-accent" />
                    <h3 className="text-lg font-bold text-accent-300">
                      {t('poppy.technical.sim2real.title')}
                    </h3>
                  </div>
                  <p className="theme-text-muted text-sm">
                    {t('poppy.technical.sim2real.description')}
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('poppy.technologies.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="w-6 h-6 theme-text-accent" />
                    <h3 className="text-lg font-bold text-accent-300">
                      {t('poppy.technologies.software.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 theme-text-secondary text-sm">
                    {(
                      t('poppy.technologies.software.items', {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="theme-text-accent">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6 theme-text-accent" />
                    <h3 className="text-lg font-bold text-accent-300">
                      {t('poppy.technologies.hardware.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 theme-text-secondary text-sm">
                    {(
                      t('poppy.technologies.hardware.items', {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="theme-text-accent">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 theme-text-accent" />
                    <h3 className="text-lg font-bold text-accent-300">
                      {t('poppy.technologies.skills.title')}
                    </h3>
                  </div>
                  <ul className="space-y-2 theme-text-secondary text-sm">
                    {(
                      t('poppy.technologies.skills.items', {
                        returnObjects: true,
                      }) as string[]
                    ).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="theme-text-accent">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-8 text-center">
                {t('poppy.benefits.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const icons = [Bot, Brain, Zap];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="theme-surface-secondary rounded-2xl shadow-lg p-6 text-center"
                      style={{
                        border: '2px solid rgb(var(--color-primary-500))',
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 theme-text-accent" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-accent-300 mb-3">{benefit.title}</h3>
                      <p className="theme-text-muted">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 text-center">
                {t('poppy.resources.title')}
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.poppy-project.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 border-2 theme-border-accent rounded-lg transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('poppy.resources.poppy')}
                </a>
              </div>
            </section>
            <motion.div
              className="mt-10 flex flex-col items-center pt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Bot className="w-12 h-12 theme-text-accent mb-4" />
              <p className="text-lg text-neutral-200 font-medium text-center mb-6">
                {t('poppy.cta.title')} <br /> {t('poppy.cta.subtitle')} <br />
                <span className="theme-text-accent font-bold">{t('poppy.cta.description')}</span>
              </p>
              <motion.a
                href="https://discord.gg/ZPVwCjMpAq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary-500 theme-btn-solid-hover text-base-inverse font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                {t('poppy.cta.button')}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default PoppySimulation;
