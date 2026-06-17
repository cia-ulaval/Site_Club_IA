import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Camera, Cpu, CheckCircle, Users, Brain, Hand } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import BackToProjects from '../components/BackToProjects';
import { useMotion } from '../hooks/useMotion';
function ASLDecoder() {
  const { t } = useTranslation();
  const m = useMotion();
  const teamMembers = [
    { name: 'Amen Ouannes', role: 'Team Lead' },
    { name: 'Vincent Bellemare' },
    { name: 'Hiba Arfaoui' },
    { name: 'Guillhem Ané' },
    { name: 'Nidel Kouicem' },
  ];
  const features = [
    {
      icon: Camera,
      title: t('asldecoder.features.camera.title'),
      description: t('asldecoder.features.camera.description'),
    },
    {
      icon: Brain,
      title: t('asldecoder.features.ai.title'),
      description: t('asldecoder.features.ai.description'),
    },
    {
      icon: Hand,
      title: t('asldecoder.features.gestures.title'),
      description: t('asldecoder.features.gestures.description'),
    },
  ];
  return (
    <>
      <Helmet>
        <title>ASL Decoder - {t('asldecoder.meta.title')}</title>
        <meta name="description" content={t('asldecoder.meta.description')} />
        <meta name="keywords" content={t('asldecoder.meta.keywords')} />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta property="og:title" content={`ASL Decoder - ${t('asldecoder.meta.title')}`} />
        <meta property="og:description" content={t('asldecoder.meta.description')} />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/project/asl.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/asl-decoder" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/asl-decoder" />
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <BackToProjects />
          {/* Completed Badge */}
          <motion.div className="flex justify-center mb-6" {...m.slideUp}>
            <div className="flex items-center gap-2 px-4 py-2 bg-success-500/20 border border-success-500/50 rounded-full">
              <CheckCircle className="w-5 h-5 text-success-400" />
              <span className="text-success-400 font-semibold">
                {t('asldecoder.status.completed')}
              </span>
            </div>
          </motion.div>
          {/* Hero Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="cia-heading-hero mb-4">
                  <span className="theme-text-gradient">ASL Decoder</span>
                </h1>
                <h2 className="cia-heading-section text-neutral-100">
                  {t('asldecoder.hero.subtitle')}
                </h2>
                <p className="cia-body-lead text-neutral-200 leading-relaxed">
                  {t('asldecoder.hero.description')}
                </p>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Users className="w-5 h-5 theme-text-accent" />
                  <span>
                    <strong>Team Lead:</strong> Amen Ouannes
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="theme-media-frame max-w-md">
                  <img
                    src="/project/asl.webp"
                    alt="ASL Decoder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
          {/* Features Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('asldecoder.features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="cia-card cia-card-content"
                    {...m.stagger(index)}
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 theme-text-accent" />
                    </div>
                    <h3 className="cia-heading-card text-neutral-100 mb-2">{feature.title}</h3>
                    <p className="text-neutral-300">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
          {/* Technology Stack */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="cia-card cia-card-content">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 theme-text-accent" />
                <h2 className="cia-heading-section text-neutral-100">
                  {t('asldecoder.tech.title')}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {(t('asldecoder.tech.items', { returnObjects: true }) as string[]).map(
                  (item, index) => (
                    <span key={index} className="cia-badge-primary">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.section>
          {/* Team Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-4">
              {t('asldecoder.team.title')}
            </h2>
            <p className="text-neutral-400 text-center mb-8">{t('asldecoder.team.subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div key={index} {...m.stagger(index)}>
                  <TeamMemberCard title={member.name} description={member.role} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}
export default ASLDecoder;
