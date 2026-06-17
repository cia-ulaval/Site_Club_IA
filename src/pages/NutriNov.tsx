import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Target, Rocket, Database, Trophy, CheckCircle } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import BackToProjects from '../components/BackToProjects';
import DiscordCTA from '../components/DiscordCTA';
import { useMotion } from '../hooks/useMotion';
function NutriNov() {
  const { t } = useTranslation();
  const m = useMotion();
  const roles = [
    {
      title: t('nutrinov.roles.speaker.title'),
      skills: t('nutrinov.roles.speaker.skills', { returnObjects: true }) as string[],
      bonus: t('nutrinov.roles.speaker.bonus'),
    },
    {
      title: t('nutrinov.roles.innovator.title'),
      skills: t('nutrinov.roles.innovator.skills', { returnObjects: true }) as string[],
      bonus: t('nutrinov.roles.innovator.bonus'),
    },
    {
      title: t('nutrinov.roles.entrepreneur.title'),
      skills: t('nutrinov.roles.entrepreneur.skills', { returnObjects: true }) as string[],
      bonus: t('nutrinov.roles.entrepreneur.bonus'),
    },
    {
      title: t('nutrinov.roles.designer.title'),
      skills: t('nutrinov.roles.designer.skills', { returnObjects: true }) as string[],
      bonus: t('nutrinov.roles.designer.bonus'),
    },
    {
      title: t('nutrinov.roles.analyst.title'),
      skills: t('nutrinov.roles.analyst.skills', { returnObjects: true }) as string[],
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
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <div>
            <BackToProjects />
            {/* Hero Section */}
            <motion.section className="cia-section" {...m.slideUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  <h1 className="cia-heading-hero mb-4">
                    <span className="theme-text-gradient">NutriNov</span>
                  </h1>
                  <p className="cia-body-lead text-neutral-200 mb-4">
                    {t('nutrinov.hero.paragraph1')}
                  </p>
                  <p className="text-neutral-300">{t('nutrinov.hero.paragraph2')}</p>
                </div>
                <div className="flex justify-center">
                  <div className="theme-media-frame max-w-lg">
                    <img
                      src="/project/nutrinov.webp"
                      alt={t('nutrinov.hero.title')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
            {/* Team */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-4">
                {t('nutrinov.team.title')}
              </h2>
              <div className="text-center space-y-2">
                <p className="text-neutral-300 text-lg">{t('nutrinov.team.lead')}</p>
                <p className="text-neutral-400">{t('nutrinov.team.partner')}</p>
                <p className="text-accent-400 font-semibold">{t('nutrinov.team.size')}</p>
              </div>
            </motion.section>
            {/* Roles */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('nutrinov.roles.title')}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {roles.map((role, index) => (
                  <motion.div key={index} {...m.stagger(index)}>
                    <TeamMemberCard title={role.title} description={role.bonus} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Description / Mission */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('nutrinov.description.title')}
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 theme-text-accent" />
                    <span className="cia-heading-card text-neutral-100">Mission</span>
                  </div>
                  <p className="text-neutral-300 mb-6">{t('nutrinov.description.mission')}</p>
                  <p className="text-neutral-300">{t('nutrinov.description.approach')}</p>
                </div>
                <div className="flex-1 cia-card cia-card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-5 h-5 theme-text-accent" />
                    <span className="cia-heading-card text-neutral-100">
                      {t('nutrinov.description.partnership.title')}
                    </span>
                  </div>
                  <p className="text-neutral-300">
                    {t('nutrinov.description.partnership.description')}
                  </p>
                </div>
              </div>
            </motion.section>
            {/* Objectives */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('nutrinov.objectives.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    className="cia-card cia-card-content flex gap-4 items-start"
                    {...m.stagger(index)}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-accent-400 font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 theme-text-accent" />
                        <span className="text-sm text-primary-300 font-semibold">
                          {objective.phase}
                        </span>
                      </div>
                      <h3 className="cia-heading-card text-neutral-100 mb-1">{objective.title}</h3>
                      <p className="text-neutral-300 text-sm">{objective.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Benefits */}
            <motion.section className="cia-section" {...m.slideUp}>
              <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
                {t('nutrinov.benefits.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const icons = [Rocket, Lightbulb, Trophy];
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
            {/* CTA */}
            <DiscordCTA label={t('nutrinov.cta.button')}>
              {t('nutrinov.cta.title')} <br /> {t('nutrinov.cta.subtitle')} <br />
              <span className="text-accent-400 font-bold">{t('nutrinov.cta.description')}</span>
            </DiscordCTA>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default NutriNov;
