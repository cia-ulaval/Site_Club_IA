import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  TrendingDown,
  BookOpen,
  Target,
  Lightbulb,
  Zap,
  Award,
  Code,
  FileText,
  CheckCircle,
  Sparkles,
  GraduationCap,
  FlaskConical,
} from 'lucide-react';
import BackToProjects from '../components/BackToProjects';
import DiscordCTA from '../components/DiscordCTA';
import { useMotion } from '../hooks/useMotion';
function SGDResearch() {
  const { t } = useTranslation();
  const m = useMotion();
  const deliverables = t('sgdbeyond.objectives.deliverables.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  const timeline = t('sgdbeyond.timeline.weeks', {
    returnObjects: true,
  }) as Array<{ period: string; title: string; description: string }>;
  const benefits = t('sgdbeyond.benefits.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  return (
    <>
      <Helmet>
        <title>SGD Research - Optimisation Stochastique | Club IA ULaval</title>
        <meta
          name="description"
          content="Recherche en optimisation stochastique : améliorer la descente de gradient par injection de bruit intelligent. Publication scientifique au Club IA ULaval."
        />
        <meta
          name="keywords"
          content="SGD, stochastic gradient descent, optimisation, deep learning, recherche, publication scientifique, mathématiques, PyTorch"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta property="og:title" content="SGD Research - Optimisation Stochastique" />
        <meta
          property="og:description"
          content="Projet de recherche visant à améliorer SGD par injection de bruit intelligent. Publication scientifique en cours."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SGD Research - Optimisation Stochastique" />
        <meta
          name="twitter:description"
          content="Recherche en optimisation pour améliorer l'entraînement des modèles de deep learning"
        />
        <html lang="fr" />
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "ResearchProject", "name": "Stochastic Gradient Descent, and Beyond!", "description": "Projet de recherche en optimisation stochastique visant à améliorer SGD par injection de bruit intelligent", "provider": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca" }, "author": { "@type": "Person", "name": "Benjamin Leblanc", "jobTitle": "Team Lead" }, "about": ["Stochastic Optimization", "Deep Learning", "Machine Learning", "Scientific Research"], "keywords": ["SGD", "optimization", "deep learning", "research", "gradient descent"] } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <div>
            <BackToProjects />
            {/* Hero Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary-500/20 rounded-full">
                  <Award className="w-5 h-5 theme-text-accent" />
                  <span className="text-primary-300 font-medium">Publication Scientifique</span>
                </div>
                <h1 className="cia-heading-hero mb-6">
                  <span className="theme-text-gradient">SGD, and Beyond!</span>
                </h1>
                <p className="cia-body-lead text-neutral-200 max-w-3xl mx-auto mb-4">
                  {t('sgdbeyond.hero.paragraph1')}
                </p>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  {t('sgdbeyond.hero.paragraph2')}
                </p>
              </div>
            </motion.section>
            {/* Mission + Team */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 cia-card cia-card-content">
                  <div className="flex items-start gap-4 mb-6">
                    <Lightbulb className="w-6 h-6 theme-text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="cia-heading-section text-neutral-100 mb-2">
                        {t('sgdbeyond.mission.hypothesis.title')}
                      </h2>
                      <p className="text-neutral-300 leading-relaxed">
                        {t('sgdbeyond.mission.hypothesis.description')}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 theme-text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="cia-heading-card text-neutral-100 mb-1">
                          {t('sgdbeyond.mission.understanding.title')}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {t('sgdbeyond.mission.understanding.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 theme-text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="cia-heading-card text-neutral-100 mb-1">
                          {t('sgdbeyond.mission.goal.title')}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {t('sgdbeyond.mission.goal.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cia-card cia-card-content flex flex-col justify-center">
                  <GraduationCap className="w-10 h-10 theme-text-accent mb-4" />
                  <h3 className="cia-heading-card text-neutral-100 mb-2">Team Lead</h3>
                  <p className="text-neutral-300 mb-4">{t('sgdbeyond.team.lead').split(': ')[1]}</p>
                  <p className="text-neutral-400 text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 theme-text-accent" />
                    {t('sgdbeyond.team.size')}
                  </p>
                </div>
              </div>
            </motion.section>
            {/* Status */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="cia-card cia-card-content">
                <div className="flex items-center gap-3 justify-center">
                  <Sparkles className="w-6 h-6 theme-text-accent" />
                  <p className="text-lg text-neutral-300 text-center">
                    {t('sgdbeyond.mission.status')}
                  </p>
                </div>
              </div>
            </motion.section>
            {/* Timeline */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('sgdbeyond.timeline.title')}
              </h2>
              <div className="space-y-4">
                {timeline.map((week, index) => {
                  const icons = [Sparkles, TrendingDown, FlaskConical, FileText, CheckCircle];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-4 items-start cia-card cia-card-content"
                      {...m.stagger(index)}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 theme-text-accent" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-accent-400 uppercase tracking-wider">
                          {week.period}
                        </span>
                        <h3 className="cia-heading-card text-neutral-100 mt-1 mb-2">
                          {week.title}
                        </h3>
                        <p className="text-neutral-300">{week.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* Deliverables */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('sgdbeyond.objectives.deliverables.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => {
                  const icons = [Sparkles, FlaskConical, FileText];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="cia-card cia-card-content"
                      {...m.stagger(index)}
                    >
                      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 theme-text-accent" />
                      </div>
                      <h3 className="cia-heading-card text-neutral-100 mb-2">
                        {deliverable.title}
                      </h3>
                      <p className="text-neutral-300 text-sm">{deliverable.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* Profiles */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 theme-text-accent" />
                    <h2 className="cia-heading-section text-neutral-100">
                      {t('sgdbeyond.profiles.programmer.title')}
                    </h2>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    {t('sgdbeyond.profiles.programmer.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(
                      t('sgdbeyond.profiles.programmer.skills', {
                        returnObjects: true,
                      }) as string[]
                    ).map((skill, index) => (
                      <span key={index} className="cia-badge-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 theme-text-accent" />
                    <h2 className="cia-heading-section text-neutral-100">
                      {t('sgdbeyond.profiles.theorist.title')}
                    </h2>
                  </div>
                  <p className="text-neutral-300 mb-4">
                    {t('sgdbeyond.profiles.theorist.description')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(
                      t('sgdbeyond.profiles.theorist.skills', {
                        returnObjects: true,
                      }) as string[]
                    ).map((skill, index) => (
                      <span key={index} className="cia-badge-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cia-card cia-card-content mt-6 text-center">
                <Lightbulb className="w-6 h-6 theme-text-accent mx-auto mb-2" />
                <p className="text-neutral-300">{t('sgdbeyond.profiles.note')}</p>
              </div>
            </motion.section>
            {/* Benefits */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('sgdbeyond.benefits.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => {
                  const icons = [BookOpen, FileText, FlaskConical, Target];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="cia-card cia-card-content text-center"
                      {...m.stagger(index)}
                    >
                      <Icon className="w-8 h-8 theme-text-accent mx-auto mb-3" />
                      <h3 className="cia-heading-card text-neutral-100 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-neutral-400">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
            {/* CTA */}
            <DiscordCTA label={t('sgdbeyond.cta.button')}>
              {t('sgdbeyond.cta.description')}
            </DiscordCTA>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default SGDResearch;
