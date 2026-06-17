import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Wrench, Cpu, Printer, Cog, Zap, CheckCircle, Target, ExternalLink } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';
import DiscordCTA from '../components/DiscordCTA';
import { useMotion } from '../hooks/useMotion';
function PoppyConception() {
  const { t } = useTranslation();
  const m = useMotion();
  const objectives = t('poppyConception.objectives.items', {
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
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <div>
            <BackToProjects />
            {/* Hero Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-8 h-8 theme-text-accent" />
                  </div>
                  <h1 className="cia-heading-hero mb-4">
                    <span className="theme-text-gradient">{t('poppyConception.hero.title')}</span>
                  </h1>
                  <p className="text-accent-400 font-semibold mb-4">
                    {t('poppyConception.hero.subtitle')}
                  </p>
                  <p className="text-neutral-300 mb-4">{t('poppyConception.hero.paragraph1')}</p>
                  <p className="text-neutral-300">{t('poppyConception.hero.paragraph2')}</p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="theme-media-frame max-w-lg">
                    <img
                      src="/project/poppy.webp"
                      alt={t('poppyConception.hero.title')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
            {/* Team Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-4">
                {t('poppyConception.team.title')}
              </h2>
              <div className="text-center space-y-2">
                <p className="text-neutral-300 text-lg">{t('poppyConception.team.leads')}</p>
                <p className="text-accent-400 font-semibold">{t('poppyConception.team.size')}</p>
                <p className="text-neutral-400 text-sm">{t('poppyConception.team.profiles')}</p>
              </div>
            </motion.section>
            {/* Objectives */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppyConception.objectives.title')}
              </h2>
              <div className="cia-card cia-card-content mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 theme-text-accent" />
                  <h3 className="cia-heading-card text-neutral-100">
                    {t('poppyConception.objectives.main.title')}
                  </h3>
                </div>
                <p className="text-neutral-300 text-lg">
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
                      className="cia-card cia-card-content"
                      {...m.stagger(index)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 theme-text-accent" />
                        </div>
                        <div>
                          <h4 className="cia-heading-card text-neutral-100 mb-2">
                            {objective.title}
                          </h4>
                          <p className="text-neutral-300 text-sm">{objective.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* Timeline */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('poppyConception.timeline.title')}
              </h2>
              <div className="space-y-4">
                {timeline.map((week, index) => {
                  const Icon = timelineIcons[index] || CheckCircle;
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
            {/* Resources */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-6">
                {t('poppyConception.resources.title')}
              </h2>
              <div className="flex justify-center">
                <a
                  href="https://www.poppy-project.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cia-btn-ghost inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t('poppyConception.resources.poppy')}
                </a>
              </div>
            </motion.section>
            {/* CTA */}
            <DiscordCTA label={t('poppyConception.cta.button')}>
              {t('poppyConception.cta.title')} <br />
              {t('poppyConception.cta.subtitle')} <br />
              <span className="text-accent-400 font-bold">
                {t('poppyConception.cta.description')}
              </span>
            </DiscordCTA>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default PoppyConception;
