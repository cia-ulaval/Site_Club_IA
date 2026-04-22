import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  Bot,
  Wrench,
  Cpu,
  Printer,
  Cog,
  Zap,
  Users,
  Rocket,
  CheckCircle,
  Target,
  Award,
  ExternalLink,
  Lightbulb,
} from 'lucide-react';
function PoppyConception() {
  const { t } = useTranslation();
  const objectives = t('poppyConception.objectives.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  const skills = t('poppyConception.skills.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  const benefits = t('poppyConception.benefits.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  const timeline = t('poppyConception.timeline.items', {
    returnObjects: true,
  }) as Array<{ period: string; title: string; description: string }>;
  const timelineIcons = [Printer, Cog, Cpu, Zap, CheckCircle];
  return (
    <>
      <Helmet>
        <title>{t('poppyConception.meta.title')}</title>
        <meta name="description" content={t('poppyConception.meta.description')} />
        <meta
          name="keywords"
          content="Poppy, robot humanoïde, impression 3D, conception mécanique, électronique, robotique, open-source, Club IA ULaval"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta property="og:title" content={t('poppyConception.meta.title')} />
        <meta property="og:description" content={t('poppyConception.meta.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('poppyConception.meta.title')} />
        <meta name="twitter:description" content={t('poppyConception.meta.description')} />
        <html lang="fr" />
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div
          className="theme-content-shell theme-surface-primary shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="sr-only">{t('poppyConception.hero.title')}</h1>
            {/* Hero Section */}
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-10 h-10 theme-text-accent" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                      <span className="theme-text-gradient">{t('poppyConception.hero.title')}</span>
                    </h1>
                  </div>
                  <p className="theme-text-accent font-semibold mb-4">
                    {t('poppyConception.hero.subtitle')}
                  </p>
                  <p className="theme-text-muted mb-4 sm:mb-6 text-justify">
                    {t('poppyConception.hero.paragraph1')}
                  </p>
                  <p className="theme-text-muted text-justify">
                    {t('poppyConception.hero.paragraph2')}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src="/project/poppy.webp"
                    alt={t('poppyConception.hero.title')}
                    className="rounded-xl shadow-2xl mt-4 sm:mt-8 w-full h-80 sm:h-96 object-cover"
                    style={{
                      border: '2px solid rgb(var(--color-primary-500))',
                    }}
                  />
                </div>
              </div>
            </motion.section>
            {/* Team Section */}
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-4">
                {t('poppyConception.team.title')}
              </h2>
              <div className="text-center mb-8 space-y-2">
                <p className="theme-text-secondary text-lg">{t('poppyConception.team.leads')}</p>
                <p className="theme-text-accent font-semibold">{t('poppyConception.team.size')}</p>
                <p className="theme-text-muted text-sm">{t('poppyConception.team.profiles')}</p>
              </div>
            </motion.section>
            {/* Main Objective */}
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('poppyConception.objectives.title')}
              </h2>
              <div
                className="theme-surface-secondary rounded-2xl shadow-lg p-6 mb-8"
                style={{ border: '2px solid rgb(var(--color-primary-500))' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 theme-text-accent" />
                  <h3 className="text-xl font-bold text-accent-300">
                    {t('poppyConception.objectives.main.title')}
                  </h3>
                </div>
                <p className="theme-text-secondary text-lg">
                  {t('poppyConception.objectives.main.description')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectives.map((objective, index) => {
                  const icons = [Printer, Cog, Cpu, Zap, CheckCircle];
                  const Icon = icons[index] || CheckCircle;
                  return (
                    <motion.div
                      key={index}
                      className="theme-surface-secondary rounded-xl shadow-lg p-5"
                      style={{
                        border: '2px solid rgb(var(--color-primary-500))',
                      }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 theme-text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold text-accent-300 mb-2">{objective.title}</h4>
                          <p className="theme-text-muted text-sm">{objective.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
            {/* Timeline */}
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('poppyConception.timeline.title')}
              </h2>
              <div className="space-y-6">
                {timeline.map((week, index) => {
                  const Icon = timelineIcons[index] || CheckCircle;
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
            {/* Resources */}
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 text-center">
                {t('poppyConception.resources.title')}
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.poppy-project.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 border-2 theme-border-accent rounded-lg transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('poppyConception.resources.poppy')}
                </a>
              </div>
            </section>
            {/* CTA Section */}
            <motion.div
              className="mt-10 flex flex-col items-center pt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Wrench className="w-12 h-12 theme-text-accent mb-4" />
              <p className="text-lg text-neutral-200 font-medium text-center mb-6">
                {t('poppyConception.cta.title')} <br />
                {t('poppyConception.cta.subtitle')} <br />
                <span className="theme-text-accent font-bold">
                  {t('poppyConception.cta.description')}
                </span>
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
                {t('poppyConception.cta.button')}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default PoppyConception;
