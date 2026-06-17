import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Camera, Crosshair, Navigation, Package, Eye, CheckCircle } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';
import { useMotion } from '../hooks/useMotion';
function AvionCargo() {
  const { t } = useTranslation();
  const m = useMotion();
  const pipelineIcons = [Camera, Eye, Crosshair, Navigation, Package];
  const pipeline = t('avionCargo.simple.pipelineSteps', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;
  const technologies = t('avionCargo.simple.technologies', {
    returnObjects: true,
  }) as string[];
  return (
    <>
      <Helmet>
        <title>{t('avionCargo.meta.title')}</title>
        <meta name="description" content={t('avionCargo.meta.description')} />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/avion-cargo" />
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <BackToProjects />
          {/* Hero Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="cia-badge-primary">{t('avionCargo.simple.badge')}</span>
                  <span className="cia-badge-neutral flex items-center gap-1">
                    <Crosshair className="w-3 h-3" />
                    {t('avionCargo.simple.precisionBadge')}
                  </span>
                </div>
                <h1 className="cia-heading-hero mb-5">
                  <span className="theme-text-gradient">{t('avionCargo.simple.title')}</span>
                </h1>
                <p className="cia-body-lead text-neutral-200 mb-4 leading-relaxed">
                  {t('avionCargo.simple.subtitle')}
                </p>
                <p className="text-neutral-300 mb-3 leading-relaxed">
                  {t('avionCargo.simple.description1')}
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  {t('avionCargo.simple.description2')}
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="theme-media-frame max-w-lg">
                  <img
                    src="/project/AvionCargo.webp"
                    alt={t('avionCargo.simple.imageAlt')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
          {/* Technologies */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('avionCargo.simple.technologiesTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="cia-card cia-card-content text-center"
                  {...m.stagger(i)}
                >
                  <p className="text-xl font-extrabold text-accent-400">{tech}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Pipeline */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-4">
              {t('avionCargo.simple.pipelineTitle')}
            </h2>
            <p className="text-neutral-400 text-center mb-8 max-w-xl mx-auto">
              {t('avionCargo.simple.pipelineSubtitle')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {pipeline.map((item, index) => {
                const Icon = pipelineIcons[index] ?? Camera;
                return (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center text-center"
                    {...m.stagger(index)}
                  >
                    <div className="relative mb-4">
                      <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center border theme-border-accent-important shadow-lg">
                        <Icon className="w-6 h-6 theme-text-accent" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-base-inverse text-xs font-bold shadow">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="cia-heading-card text-neutral-100 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
          {/* Summary */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="cia-card cia-card-content">
              <h2 className="cia-heading-section text-neutral-100 mb-4">
                {t('avionCargo.simple.summaryTitle')}
              </h2>
              <ul className="space-y-3">
                {(
                  t('avionCargo.simple.summaryItems', {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-neutral-300">
                    <CheckCircle className="w-5 h-5 theme-text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}
export default AvionCargo;
