import { motion } from 'framer-motion';
import {
  Shield,
  Car,
  AlertTriangle,
  Target,
  Calendar,
  Code,
  Cpu,
  Rocket,
  Users,
  Building2,
  CheckCircle,
  BookOpen,
  FileText,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
function CANlock() {
  const { t } = useTranslation();
  const timelineIcons = [
    <BookOpen className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <Code className="w-5 h-5" />,
    <FileText className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <CheckCircle className="w-5 h-5" />,
  ];
  const technologies = [
    { name: 'Python', type: 'language' },
    { name: 'PyTorch / TensorFlow', type: 'framework' },
    { name: 'Scikit-learn', type: 'library' },
    { name: 'Pandas', type: 'library' },
    { name: 'Jupyter', type: 'tool' },
    { name: 'Git', type: 'tool' },
  ];
  const profileIcons = [
    <Cpu className="w-8 h-8" />,
    <Shield className="w-8 h-8" />,
    <Car className="w-8 h-8" />,
  ];
  const whyJoinIcons = [
    <Building2 className="w-10 h-10" />,
    <Shield className="w-10 h-10" />,
    <Rocket className="w-10 h-10" />,
  ];
  return (
    <>
      <Helmet>
        <title>{t('canlock.meta.title')}</title>
        <meta name="description" content={t('canlock.meta.description')} />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/canlock" />
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div
          className="theme-content-shell theme-surface-primary shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-500/30 theme-text-accent text-sm font-medium rounded-full">
                    {t('canlock.hero.badge')}
                  </span>
                  <span className="px-3 py-1 bg-info-600/30 text-info-400 text-sm font-medium rounded-full flex items-center gap-1">
                    <Building2 className="w-3 h-3" /> Thales
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  <span className="theme-text-gradient">{t('canlock.hero.title')}</span>
                  <span className="ml-3">🔒</span>
                </h1>
                <p className="text-xl theme-text-secondary mb-6 font-medium">
                  {t('canlock.hero.subtitle')}
                </p>
                <p className="theme-text-muted mb-4 text-justify">
                  {t('canlock.hero.description')}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <div className="flex items-center gap-2 theme-text-muted">
                    <Users className="w-4 h-4 theme-text-accent" />
                    <span className="text-sm">{t('canlock.hero.members')}</span>
                  </div>
                  <div className="flex items-center gap-2 theme-text-muted">
                    <Shield className="w-4 h-4 theme-text-accent" />
                    <span className="text-sm">{t('canlock.hero.teamLead')}</span>
                  </div>
                </div>
              </div>
              {/* Vehicle Section - Circuit Board Style */}
              <div className="flex items-center justify-center">
                <motion.div
                  className="relative w-full max-w-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="aspect-square bg-base rounded-2xl flex items-center justify-center relative overflow-hidden border theme-border-accent-important">
                    {/* Circuit board pattern */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 100 100"
                    >
                      {/* Horizontal lines */}
                      <line
                        x1="0"
                        y1="20"
                        x2="100"
                        y2="20"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <line
                        x1="0"
                        y1="50"
                        x2="100"
                        y2="50"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <line
                        x1="0"
                        y1="80"
                        x2="100"
                        y2="80"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      {/* Vertical lines */}
                      <line
                        x1="20"
                        y1="0"
                        x2="20"
                        y2="100"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <line
                        x1="50"
                        y1="0"
                        x2="50"
                        y2="100"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <line
                        x1="80"
                        y1="0"
                        x2="80"
                        y2="100"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      {/* Nodes */}
                      <circle cx="20" cy="20" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="50" cy="20" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="80" cy="20" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="20" cy="50" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="80" cy="50" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="20" cy="80" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="50" cy="80" r="2" fill="rgb(var(--color-primary-500))" />
                      <circle cx="80" cy="80" r="2" fill="rgb(var(--color-primary-500))" />
                      {/* Corner connectors */}
                      <path
                        d="M 10 30 L 10 10 L 30 10"
                        fill="none"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M 90 30 L 90 10 L 70 10"
                        fill="none"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M 10 70 L 10 90 L 30 90"
                        fill="none"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M 90 70 L 90 90 L 70 90"
                        fill="none"
                        stroke="rgb(var(--color-primary-500))"
                        strokeWidth="0.3"
                      />
                    </svg>
                    {/* Central content */}
                    <div className="text-center z-10 relative bg-base/80 rounded-xl p-8">
                      <div className="relative inline-block">
                        <Car className="w-20 h-20 text-primary-500 mx-auto" />
                        <div className="absolute -bottom-1 -right-1 bg-base rounded-full p-1">
                          <Shield className="w-8 h-8 theme-text-accent" />
                        </div>
                      </div>
                      <p className="theme-text-muted mt-4 text-sm font-medium">
                        {t('canlock.hero.cybersecurityLabel')}
                      </p>
                      <div className="flex justify-center gap-2 mt-3">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                        <span className="w-2 h-2 bg-primary-500/60 rounded-full animate-pulse delay-100" />
                        <span className="w-2 h-2 bg-primary-500/30 rounded-full animate-pulse delay-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
          {/* Profiles recherchés */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8">
              {t('canlock.profiles.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(
                t('canlock.profiles.items', { returnObjects: true }) as Array<{
                  title: string;
                  desc: string;
                }>
              ).map((profile, index) => (
                <motion.div
                  key={index}
                  className="theme-surface-secondary rounded-xl p-6 hover:bg-primary-900/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="theme-text-accent mb-3">{profileIcons[index]}</div>
                  <h3 className="text-lg font-semibold text-accent-300 mb-2">{profile.title}</h3>
                  <p className="theme-text-muted text-sm">{profile.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Le Défi Section */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8">
              {t('canlock.challenge.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="theme-surface-secondary rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-warning-500" />
                  <span className="text-lg font-semibold text-accent-300">
                    {t('canlock.challenge.threat.title')}
                  </span>
                </div>
                <p className="theme-text-muted mb-4">{t('canlock.challenge.threat.description')}</p>
                <ul className="space-y-2">
                  {(
                    t('canlock.challenge.threat.items', {
                      returnObjects: true,
                    }) as string[]
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 theme-text-secondary">
                      <span className="w-2 h-2 bg-primary-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="theme-surface-secondary rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 theme-text-accent" />
                  <span className="text-lg font-semibold text-accent-300">
                    {t('canlock.challenge.falsePositives.title')}
                  </span>
                </div>
                <p className="theme-text-muted mb-4">
                  {t('canlock.challenge.falsePositives.description1')}
                  <span className="theme-text-accent font-medium">
                    {t('canlock.challenge.falsePositives.errorRate')}
                  </span>
                  , {t('canlock.challenge.falsePositives.description2')}
                  <span className="text-accent-300 font-medium">
                    {t('canlock.challenge.falsePositives.signalsPerMinute')}
                  </span>
                  , {t('canlock.challenge.falsePositives.description3')}
                </p>
                <div className="bg-base/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold theme-text-accent mb-1">
                    {t('canlock.challenge.falsePositives.stat')}
                  </p>
                  <p className="theme-text-muted text-sm">
                    {t('canlock.challenge.falsePositives.statLabel')}
                  </p>
                  <p className="text-neutral-500 text-xs mt-2">
                    {t('canlock.challenge.falsePositives.statNote')}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          {/* Objectifs & Livrables */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8">
              {t('canlock.objectives.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold theme-text-accent mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {t('canlock.objectives.main.title')}
                </h3>
                <p className="theme-text-secondary text-lg">
                  {t('canlock.objectives.main.description')}
                  <span className="text-accent-300 font-medium">
                    {t('canlock.objectives.main.highlight')}
                  </span>
                  {t('canlock.objectives.main.description2')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold theme-text-accent mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {t('canlock.objectives.deliverables.title')}
                </h3>
                <ul className="space-y-3">
                  {(
                    t('canlock.objectives.deliverables.items', {
                      returnObjects: true,
                    }) as string[]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 theme-text-secondary">
                      <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
          {/* Timeline */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8">
              <Calendar className="inline-block w-8 h-8 mr-2 mb-1" />
              {t('canlock.timeline.title')}
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-500/30" />
              <div className="space-y-6">
                {(
                  t('canlock.timeline.items', {
                    returnObjects: true,
                  }) as Array<{
                    weeks: string;
                    phase: string;
                    description: string;
                  }>
                ).map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col md:flex-row gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div className="flex-1" />
                    <div className="hidden md:flex items-center justify-center w-10 h-10 bg-primary-500 rounded-full z-10">
                      {timelineIcons[index]}
                    </div>
                    <div
                      className={`flex-1 theme-surface-secondary rounded-xl p-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                    >
                      <span className="theme-text-accent text-sm font-medium">
                        {t('canlock.timeline.week')} {item.weeks}
                      </span>
                      <h3 className="text-accent-300 font-semibold mt-1">{item.phase}</h3>
                      <p className="theme-text-muted text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          {/* Technologies & Compétences */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8">
              {t('canlock.tech.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="theme-surface-secondary rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-accent-300 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 theme-text-accent" />
                  {t('canlock.tech.stack.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t theme-border-soft">
                  <p className="theme-text-muted text-sm flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    {t('canlock.tech.stack.note')}
                  </p>
                </div>
              </div>
              <div className="theme-surface-secondary rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-accent-300 mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 theme-text-accent" />
                  {t('canlock.tech.skills.title')}
                </h3>
                <ul className="space-y-2">
                  {(
                    t('canlock.tech.skills.items', {
                      returnObjects: true,
                    }) as string[]
                  ).map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 theme-text-secondary">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
          {/* Pourquoi rejoindre */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold theme-text-gradient text-center mb-8">
              {t('canlock.whyJoin.title')}
            </h2>
            <div className="bg-gradient-to-br from-base/40 to-primary-900/20 rounded-2xl shadow-lg p-8">
              <p className="text-xl theme-text-secondary text-center mb-6">
                {t('canlock.whyJoin.intro')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(
                  t('canlock.whyJoin.items', { returnObjects: true }) as Array<{
                    title: string;
                    desc: string;
                  }>
                ).map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * index, duration: 0.5 }}
                  >
                    <div className="theme-text-accent flex justify-center mb-3">
                      {whyJoinIcons[index]}
                    </div>
                    <h3 className="text-lg font-semibold text-accent-300 mb-2">{item.title}</h3>
                    <p className="theme-text-muted text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          {/* CTA Section */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Rocket className="w-12 h-12 theme-text-accent mx-auto mb-4" />
            <p className="text-lg text-neutral-200 font-medium text-center mb-6">
              {t('canlock.cta.title')} <br />
              <span className="theme-text-accent font-bold">{t('canlock.cta.subtitle')}</span>
            </p>
            <motion.a
              href="https://discord.gg/ZPVwCjMpAq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary-500 theme-btn-solid-hover text-base-inverse font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300"
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
              {t('canlock.cta.discord')}
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
export default CANlock;
