import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  Target,
  Calendar,
  Code,
  Cpu,
  Rocket,
  Users,
  Building2,
  CheckCircle,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import BackToProjects from '../components/BackToProjects';
import DiscordCTA from '../components/DiscordCTA';
import { useMotion } from '../hooks/useMotion';
function CANlock() {
  const { t } = useTranslation();
  const m = useMotion();
  const technologies = [
    { name: 'Python', type: 'language' },
    { name: 'PyTorch / TensorFlow', type: 'framework' },
    { name: 'Scikit-learn', type: 'library' },
    { name: 'Pandas', type: 'library' },
    { name: 'Jupyter', type: 'tool' },
    { name: 'Git', type: 'tool' },
  ];
  return (
    <>
      <Helmet>
        <title>{t('canlock.meta.title')}</title>
        <meta name="description" content={t('canlock.meta.description')} />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/canlock" />
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <BackToProjects />
          {/* Hero Section — single column (no real image) */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="flex flex-col justify-center max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="cia-badge-primary">{t('canlock.hero.badge')}</span>
                <span className="cia-badge-neutral flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> Thales
                </span>
              </div>
              <h1 className="cia-heading-hero mb-4">
                <span className="theme-text-gradient">{t('canlock.hero.title')}</span>
              </h1>
              <p className="cia-body-lead text-neutral-200 mb-4">{t('canlock.hero.subtitle')}</p>
              <p className="text-neutral-300 mb-4">{t('canlock.hero.description')}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-400 text-sm">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 theme-text-accent" />
                  {t('canlock.hero.members')}
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 theme-text-accent" />
                  {t('canlock.hero.teamLead')}
                </span>
              </div>
            </div>
          </motion.section>
          {/* Profiles recherchés */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('canlock.profiles.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(
                t('canlock.profiles.items', { returnObjects: true }) as Array<{
                  title: string;
                  desc: string;
                }>
              ).map((profile, index) => (
                <motion.div key={index} className="cia-card cia-card-content" {...m.stagger(index)}>
                  <h3 className="cia-heading-card text-neutral-100 mb-2">{profile.title}</h3>
                  <p className="text-neutral-300 text-sm">{profile.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Le Défi Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('canlock.challenge.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cia-card cia-card-content">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-warning-500" />
                  <span className="cia-heading-card text-neutral-100">
                    {t('canlock.challenge.threat.title')}
                  </span>
                </div>
                <p className="text-neutral-300 mb-4">{t('canlock.challenge.threat.description')}</p>
                <ul className="space-y-2">
                  {(
                    t('canlock.challenge.threat.items', {
                      returnObjects: true,
                    }) as string[]
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-300">
                      <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cia-card cia-card-content">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 theme-text-accent" />
                  <span className="cia-heading-card text-neutral-100">
                    {t('canlock.challenge.falsePositives.title')}
                  </span>
                </div>
                <p className="text-neutral-300 mb-4">
                  {t('canlock.challenge.falsePositives.description1')}
                  <span className="text-accent-400 font-medium">
                    {t('canlock.challenge.falsePositives.errorRate')}
                  </span>
                  , {t('canlock.challenge.falsePositives.description2')}
                  <span className="text-accent-400 font-medium">
                    {t('canlock.challenge.falsePositives.signalsPerMinute')}
                  </span>
                  , {t('canlock.challenge.falsePositives.description3')}
                </p>
                <div className="bg-base/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-accent-400 mb-1">
                    {t('canlock.challenge.falsePositives.stat')}
                  </p>
                  <p className="text-neutral-400 text-sm">
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
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('canlock.objectives.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="cia-heading-card text-neutral-100 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 theme-text-accent" />
                  {t('canlock.objectives.main.title')}
                </h3>
                <p className="text-neutral-300 text-lg">
                  {t('canlock.objectives.main.description')}
                  <span className="text-accent-400 font-medium">
                    {t('canlock.objectives.main.highlight')}
                  </span>
                  {t('canlock.objectives.main.description2')}
                </p>
              </div>
              <div>
                <h3 className="cia-heading-card text-neutral-100 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 theme-text-accent" />
                  {t('canlock.objectives.deliverables.title')}
                </h3>
                <ul className="space-y-3">
                  {(
                    t('canlock.objectives.deliverables.items', {
                      returnObjects: true,
                    }) as string[]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-success-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
          {/* Timeline */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              <Calendar className="inline-block w-6 h-6 mr-2 mb-1 theme-text-accent" />
              {t('canlock.timeline.title')}
            </h2>
            <div className="space-y-4">
              {(
                t('canlock.timeline.items', {
                  returnObjects: true,
                }) as Array<{
                  weeks: string;
                  phase: string;
                  description: string;
                }>
              ).map((item, index) => (
                <motion.div key={index} className="cia-card cia-card-content" {...m.stagger(index)}>
                  <span className="text-accent-400 text-sm font-medium">
                    {t('canlock.timeline.week')} {item.weeks}
                  </span>
                  <h3 className="cia-heading-card text-neutral-100 mt-1">{item.phase}</h3>
                  <p className="text-neutral-300 text-sm mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Technologies & Compétences */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('canlock.tech.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cia-card cia-card-content">
                <h3 className="cia-heading-card text-neutral-100 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 theme-text-accent" />
                  {t('canlock.tech.stack.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span key={i} className="cia-badge-primary">
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t theme-border-soft">
                  <p className="text-neutral-400 text-sm flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    {t('canlock.tech.stack.note')}
                  </p>
                </div>
              </div>
              <div className="cia-card cia-card-content">
                <h3 className="cia-heading-card text-neutral-100 mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5 theme-text-accent" />
                  {t('canlock.tech.skills.title')}
                </h3>
                <ul className="space-y-2">
                  {(
                    t('canlock.tech.skills.items', {
                      returnObjects: true,
                    }) as string[]
                  ).map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-success-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
          {/* Pourquoi rejoindre */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('canlock.whyJoin.title')}
            </h2>
            <p className="text-neutral-300 text-center mb-6 max-w-3xl mx-auto">
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
                  className="cia-card cia-card-content text-center"
                  {...m.stagger(index)}
                >
                  <h3 className="cia-heading-card text-neutral-100 mb-2">{item.title}</h3>
                  <p className="text-neutral-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* CTA Section */}
          <DiscordCTA label={t('canlock.cta.discord')}>
            {t('canlock.cta.title')} <br />
            <span className="text-accent-400 font-bold">{t('canlock.cta.subtitle')}</span>
          </DiscordCTA>
        </motion.div>
      </section>
    </>
  );
}
export default CANlock;
