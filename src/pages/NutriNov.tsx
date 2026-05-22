import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  ShoppingCart,
  MessageSquare,
  Lightbulb,
  Briefcase,
  Palette,
  BarChart,
  Target,
  Rocket,
  Users,
  Database,
  Trophy,
  CheckCircle,
} from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import BackToProjects from '../components/BackToProjects';
function NutriNov() {
  const { t } = useTranslation();
  const roles = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: t('nutrinov.roles.speaker.title'),
      skills: t('nutrinov.roles.speaker.skills', {
        returnObjects: true,
      }) as string[],
      bonus: t('nutrinov.roles.speaker.bonus'),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('nutrinov.roles.innovator.title'),
      skills: t('nutrinov.roles.innovator.skills', {
        returnObjects: true,
      }) as string[],
      bonus: t('nutrinov.roles.innovator.bonus'),
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: t('nutrinov.roles.entrepreneur.title'),
      skills: t('nutrinov.roles.entrepreneur.skills', {
        returnObjects: true,
      }) as string[],
      bonus: t('nutrinov.roles.entrepreneur.bonus'),
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t('nutrinov.roles.designer.title'),
      skills: t('nutrinov.roles.designer.skills', {
        returnObjects: true,
      }) as string[],
      bonus: t('nutrinov.roles.designer.bonus'),
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: t('nutrinov.roles.analyst.title'),
      skills: t('nutrinov.roles.analyst.skills', {
        returnObjects: true,
      }) as string[],
      bonus: t('nutrinov.roles.analyst.bonus'),
    },
  ];
  const objectives = t('nutrinov.objectives.items', {
    returnObjects: true,
  }) as Array<{ phase: string; title: string; description: string }>;
  const benefits = t('nutrinov.benefits.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  return (
    <>
      <Helmet>
        <title>NutriNov - Projet Entrepreneurial IA Alimentaire | Club IA ULaval</title>
        <meta
          name="description"
          content="NutriNov : projet entrepreneurial innovant en IA alimentaire. Développez des solutions créatives avec Open Food Facts. Rejoignez notre équipe multidisciplinaire au Club IA ULaval."
        />
        <meta
          name="keywords"
          content="NutriNov, Open Food Facts, entrepreneuriat, alimentation, innovation, IA, intelligence artificielle, startup, ULaval, Club IA"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta property="og:title" content="NutriNov - Projet Entrepreneurial IA Alimentaire" />
        <meta
          property="og:description"
          content="Projet entrepreneurial innovant combinant IA et alimentation. Rejoignez NutriNov au Club IA ULaval."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NutriNov - Projet Entrepreneurial IA Alimentaire" />
        <meta
          name="twitter:description"
          content="Innovation alimentaire par l'IA. Projet entrepreneurial du Club IA ULaval."
        />
        <html lang="fr" />
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "Course", "name": "NutriNov - Projet Entrepreneurial IA Alimentaire", "description": "Projet entrepreneurial innovant visant à révolutionner le secteur alimentaire grâce à l'intelligence artificielle", "provider": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca" }, "instructor": { "@type": "Person", "name": "Éloïse Prevot", "jobTitle": "Team Lead" }, "teaches": ["Entrepreneurship", "Data Analysis", "Web Development", "Pitch Presentation", "Design Thinking"], "keywords": ["NutriNov", "Open Food Facts", "entrepreneuriat", "IA", "alimentation"] } `}
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
            <BackToProjects />
            <h1 className="sr-only">{t('nutrinov.hero.title')}</h1>
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="sr-only">{t('nutrinov.hero.subtitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <ShoppingCart className="w-10 h-10 theme-text-accent" />
                    <h1 className="cia-heading-hero">
                      <span className="theme-text-gradient">NutriNov</span>
                    </h1>
                  </div>
                  <p className="sr-only">{t('nutrinov.hero.subtitle')}</p>
                  <p className="theme-text-muted mb-4 sm:mb-6 text-justify">
                    {t('nutrinov.hero.paragraph1')}
                  </p>
                  <p className="theme-text-muted text-justify">{t('nutrinov.hero.paragraph2')}</p>
                </div>
                <div>
                  <div
                    className="rounded-xl shadow-2xl mt-4 sm:mt-8 w-full h-64 sm:h-80 bg-gradient-to-br from-primary-500/20 to-primary-900/40 flex items-center justify-center"
                    style={{
                      border: '2px solid rgb(var(--color-primary-500))',
                    }}
                  >
                    <ShoppingCart className="w-32 h-32 theme-text-accent opacity-30" />
                  </div>
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
                {t('nutrinov.team.title')}
              </h2>
              <div className="text-center mb-8 space-y-2">
                <p className="theme-text-secondary text-lg">{t('nutrinov.team.lead')}</p>
                <p className="theme-text-muted">{t('nutrinov.team.partner')}</p>
                <p className="theme-text-accent font-semibold">{t('nutrinov.team.size')}</p>
              </div>
            </motion.section>
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8 sm:mb-12">
                {t('nutrinov.roles.title')}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-2 md:px-6">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <TeamMemberCard
                      key={index}
                      icon={role.icon}
                      title={role.title}
                      description={role.bonus}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('nutrinov.description.title')}
              </h2>
              <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 theme-text-accent" />
                    <span className="text-lg font-semibold text-accent-300">Mission</span>
                  </div>
                  <p className="theme-text-muted mb-6">{t('nutrinov.description.mission')}</p>
                  <p className="theme-text-muted">{t('nutrinov.description.approach')}</p>
                </div>
                <div
                  className="flex-1 theme-surface-secondary rounded-2xl shadow-lg p-6"
                  style={{ border: '2px solid rgb(var(--color-primary-500))' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 theme-text-accent" />
                    <span className="text-lg font-semibold text-accent-300">
                      {t('nutrinov.description.partnership.title')}
                    </span>
                  </div>
                  <p className="theme-text-muted">
                    {t('nutrinov.description.partnership.description')}
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-6 sm:mb-8 text-center">
                {t('nutrinov.objectives.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start theme-surface-secondary rounded-xl p-5"
                    style={{
                      border: '2px solid rgb(var(--color-primary-500))',
                    }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center theme-text-accent font-bold border-2 theme-border-accent">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 theme-text-accent" />
                        <span className="text-sm text-primary-300 font-semibold">
                          {objective.phase}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-accent-300 mb-1">{objective.title}</h3>
                      <p className="theme-text-muted text-sm">{objective.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            <section className="mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-8 text-center">
                {t('nutrinov.benefits.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const icons = [Rocket, Lightbulb, Trophy];
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
            <motion.div
              className="mt-10 flex flex-col items-center pt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 theme-text-accent mb-4" />
              <p className="text-lg text-neutral-200 font-medium text-center mb-6">
                {t('nutrinov.cta.title')} <br /> {t('nutrinov.cta.subtitle')}
                <br />
                <span className="theme-text-accent font-bold">{t('nutrinov.cta.description')}</span>
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
                {t('nutrinov.cta.button')}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default NutriNov;
