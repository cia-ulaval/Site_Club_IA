import {
  CreditCard,
  Rocket,
  Award,
  Users,
  MessageCircle,
  GraduationCap,
  Briefcase,
  BadgeCheck,
  Zap,
  Globe,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';

// Sponsorship tiers — accent colors only, dark card base
const sponsorshipTiers = [
  {
    name: 'Bronze',
    price: '$1,000',
    accentBorder: 'border-t-amber-700/80',
    accentText: 'text-amber-500',
    featured: false,
    benefits: [
      'Your logo and link on our website',
      'Your logo presented at our events',
      'Your logo on our t-shirts',
    ],
  },
  {
    name: 'Silver',
    price: '$5,000',
    accentBorder: 'border-t-slate-400/70',
    accentText: 'text-slate-300',
    featured: false,
    benefits: [
      'Your logo and link on our website',
      'Your logo presented in bold at our events',
      'Your logo in bold on our t-shirts',
      'Special thanks on our social media',
      'Invitation of one member to one of our opening events',
      'Repost of an ad',
    ],
  },
  {
    name: 'Gold',
    price: '$10,000',
    accentBorder: 'border-t-yellow-400/90',
    accentText: 'text-yellow-400',
    featured: true,
    benefits: [
      'Your logo and link on our website',
      'Your logo presented in very bold at our events',
      'Your logo in very bold on our t-shirts',
      'Special thanks on our social media',
      'Invitation of three members to one of our opening events',
      'Repost of three ads',
      'Sponsorship of one of our projects',
      'Access to our CV book of student researchers',
      'Your logo on one of our projects',
    ],
  },
];

const fundedProjects = [
  {
    title: 'MangaTranslator AI',
    description: 'AI-powered manga translation system for real-time panel conversion.',
    progress: 85,
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'FlapEEG',
    description: 'A video game controlled by brain signals using EEG technology.',
    progress: 60,
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: 'F1Tenth',
    description: 'F1 racing with 1/10th scale cars controlled by muscle signals.',
    progress: 60,
    icon: <Zap className="w-6 h-6" />,
  },
];

const currentSponsors = [
  { name: 'Université Laval', tier: 'Gold', link: 'https://www.ulaval.ca/' },
  { name: 'AESGUL', tier: 'Gold', link: 'https://www.aesgul.com/accueil' },
  { name: 'ASETIN', tier: 'Gold', link: 'https://www.asetin.ca/' },
  { name: 'MonAvenirTI', tier: 'Gold', link: 'https://monavenirti.org/' },
  { name: 'Tracel AI', tier: 'Silver', link: 'https://tracel.ai/' },
  { name: 'SiFi Labs', tier: 'Silver', link: 'https://sifilabs.com/' },
  { name: 'Ingeno', tier: 'Gold', link: 'https://ingeno.ca/fr/' },
  { name: 'Vooban', tier: 'Bronze', link: 'https://vooban.com/' },
  {
    name: 'Service du développement professionnel - Université Laval',
    tier: 'Gold',
    link: 'https://sdp.ulaval.ca/',
  },
  { name: 'CRTI', tier: 'Gold', link: 'https://crti.ulaval.ca/' },
];

const impactMetrics = [
  {
    metric: '3',
    labelKey: 'projectsCompleted',
    icon: <Rocket className="w-8 h-8 theme-text-accent" />,
  },
  {
    metric: '30+',
    labelKey: 'studentResearchers',
    icon: <Users className="w-8 h-8 theme-text-accent" />,
  },
  {
    metric: '6',
    labelKey: 'industryPartners',
    icon: <Briefcase className="w-8 h-8 theme-text-accent" />,
  },
  {
    metric: '2',
    labelKey: 'publishedPapers',
    icon: <GraduationCap className="w-8 h-8 theme-text-accent" />,
  },
];

interface SponsorshipTierProps {
  tier: {
    name: string;
    price: string;
    accentBorder: string;
    accentText: string;
    featured: boolean;
    benefits: string[];
  };
  onBecomePartner?: () => void;
}

const SponsorshipTier = ({ tier, onBecomePartner }: SponsorshipTierProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={`relative flex flex-col h-full p-6 rounded-xl bg-primary-900/80 border-t-4 ${tier.accentBorder} border-x border-b border-primary-500/30 hover:border-primary-400/50 transition-all duration-300
        ${tier.featured ? 'ring-2 ring-yellow-400/35 shadow-xl shadow-yellow-400/12 bg-primary-900/90' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-center mb-6 pt-2">
        <Award className={`w-8 h-8 mx-auto mb-3 ${tier.accentText}`} />
        <h3 className={`text-2xl font-bold mb-1 ${tier.accentText}`}>
          {t(`collaborationPage.sponsorshipTiersNames.${tier.name}`)}
        </h3>
        <div className="text-3xl font-bold text-base-inverse">{tier.price}</div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {tier.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <BadgeCheck className="w-5 h-5 theme-text-accent flex-shrink-0 mt-0.5" />
            <span className="text-primary-200 text-sm leading-relaxed">
              {t(`collaborationPage.tierBenefits.${benefit}`, benefit)}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        className="w-full py-3 px-6 theme-btn-gradient rounded-lg text-base-inverse font-semibold transition-all duration-300 mt-auto cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onBecomePartner}
      >
        {t('collaborationPage.becomeSponsorButton', {
          tier: t(`collaborationPage.sponsorshipTiersNames.${tier.name}`, tier.name),
        })}
      </motion.button>
    </motion.div>
  );
};

interface ProjectProps {
  project: {
    title: string;
    description: string;
    progress: number;
    icon: JSX.Element;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="p-6 rounded-xl bg-primary-900/50 border border-primary-500/30 hover:border-primary-400/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 theme-text-accent flex justify-center">{project.icon}</div>
      <h3 className="text-xl font-bold text-base-inverse mb-3 text-center">
        {t(`collaborationPage.fundedProjects.${project.title}`)}
      </h3>
      <p className="text-primary-300/80 text-sm text-center mb-5">
        {t(`collaborationPage.fundedProjectsDescriptions.${project.title}`, project.description)}
      </p>
      <div className="w-full bg-primary-900/30 rounded-full h-2 mb-2">
        <div
          className="bg-gradient-to-r from-primary-300 to-primary-500 h-2 rounded-full"
          style={{ width: `${project.progress}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-primary-400/70">
        <span>{t('collaborationPage.progress')}</span>
        <span>{project.progress}%</span>
      </div>
    </motion.div>
  );
};

const MetricCard = ({ metric }: { metric: (typeof impactMetrics)[0] }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="p-6 rounded-xl bg-primary-900/50 border border-primary-500/30 text-center transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex justify-center mb-4">{metric.icon}</div>
      <h3 className="text-3xl font-bold text-base-inverse mb-1">{metric.metric}</h3>
      <p className="text-primary-300/80 text-sm">
        {t(`collaborationPage.impactMetrics.${metric.labelKey}`)}
      </p>
    </motion.div>
  );
};

interface Sponsor {
  name: string;
  tier: string;
  link: string;
}

const CurrentSponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <motion.a
    href={sponsor.link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 md:p-5 rounded-xl bg-primary-900/50 border border-primary-500/30 hover:border-primary-400/50 transition-all duration-300 text-center group flex flex-col items-center justify-center cursor-pointer"
    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
  >
    {(() => {
      const normalize = (s: string) =>
        s
          .toLowerCase()
          .normalize('NFD')
          .replace(/\p{Diacritic}/gu, '')
          .replace(/[^a-z0-9]/g, '');
      const mapping: Record<string, string> = {
        [normalize('Université Laval')]: '/banner/LogoDepartementInfo.png',
        [normalize('AESGUL')]: '/banner/aesgul.webp',
        [normalize('ASETIN')]: '/banner/asetin.webp',
        [normalize('MonAvenirTI')]: '/banner/avenirti.webp',
        [normalize('Tracel AI')]: '/banner/LogoTracel.png',
        [normalize('SiFi Labs')]: '/banner/SiFiLabs.png',
        [normalize('Ingeno')]: '/banner/ingeno.png',
        [normalize('Vooban')]: '/banner/LogoVooban.png',
        [normalize('CRTI')]: '/banner/LogoCRTI.png',
        [normalize('Service du développement professionnel - Université Laval')]: '/banner/SDP.png',
      };
      const key = normalize(sponsor.name);
      const logo = mapping[key];
      if (logo) {
        return (
          <img
            src={encodeURI(logo)}
            alt={sponsor.name}
            className="object-contain mb-2"
            style={{ width: 120, height: 64 }}
          />
        );
      }
      return <div className="text-base-inverse text-base font-semibold">{sponsor.name}</div>;
    })()}
    <div className="text-xs text-primary-400/70 mt-1">{sponsor.tier}</div>
  </motion.a>
);

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const canSubmit = name.trim().length > 0 && email.trim().length > 0;

  const handleContactClick = () => {
    const subject = encodeURIComponent(
      `Partenariat - ${name.trim()}${company.trim() ? ` (${company.trim()})` : ''}`
    );
    const body = encodeURIComponent(
      `Nom : ${name.trim()}\nEntreprise : ${company.trim() || '—'}\nEmail : ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:finance.cia@ulaval.ca?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full p-3 bg-primary-900/40 border border-primary-500/40 hover:border-primary-400/60 rounded-lg text-base-inverse placeholder:text-primary-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus:border-accent-500/50 transition-colors';

  return (
    <motion.div
      className="p-8 rounded-xl bg-primary-900/60 border border-primary-500/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-base-inverse mb-6 text-center">
        {t('collaborationPage.contactTitle')}
      </h3>
      <div className="space-y-3 mb-6">
        <input
          type="text"
          placeholder={t('collaborationPage.contactName')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          placeholder={t('collaborationPage.contactEmail')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder={t('collaborationPage.contactCompany')}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
        />
        <textarea
          placeholder={t('collaborationPage.contactMessage')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} h-32 resize-none`}
        />
      </div>
      <motion.button
        className="w-full py-3 bg-accent-500 hover:bg-accent-400 rounded-lg text-base-inverse font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        whileHover={canSubmit ? { scale: 1.02 } : undefined}
        whileTap={canSubmit ? { scale: 0.98 } : undefined}
        type="button"
        disabled={!canSubmit}
        onClick={handleContactClick}
        aria-label={`Contact finance.cia@ulaval.ca`}
      >
        {t('collaborationPage.contactButton')}
      </motion.button>
    </motion.div>
  );
};

function Collaboration() {
  const { t } = useTranslation();
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>
          Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval | CIA ULaval
        </title>
        <meta
          name="description"
          content="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants d'intelligence artificielle. Offres Bronze, Silver, Gold. Visibilité, networking et accès aux talents IA."
        />
        <meta
          name="keywords"
          content="sponsoring IA, partenariat Club IA, collaboration entreprise, financement projets IA, sponsoring étudiant, Bronze Silver Gold, networking IA, talents IA, Université Laval, recherche IA"
        />
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        <meta
          property="og:title"
          content="Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval"
        />
        <meta
          property="og:description"
          content="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants et accédez aux meilleurs talents en intelligence artificielle."
        />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/collaboration" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval"
        />
        <meta
          name="twitter:description"
          content="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants et accédez aux talents IA."
        />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/collaboration" />
        <html lang="fr" />
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "WebPage", "name": "Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval", "url": "https://cia.ift.ulaval.ca/collaboration" } `}
        </script>
      </Helmet>

      <section className="relative overflow-hidden">
        <h1 className="sr-only">{t('collaborationPage.mainTitle')} | Support AI Research</h1>
        <div
          className="absolute top-40 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-96 right-20 w-80 h-80 bg-primary-800/10 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        />

        <motion.div
          className="theme-content-shell shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Hero */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
                {t('collaborationPage.mainTitle')}
              </span>
            </h2>
            <h2 className="text-3xl font-bold text-base-inverse mb-6">
              {t('collaborationPage.subtitle')}
            </h2>
            <p className="text-xl text-primary-300/80 max-w-3xl mx-auto">
              {t('collaborationPage.intro')}
            </p>
          </motion.div>

          {/* Impact Metrics */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
              {t('collaborationPage.impactTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </div>
          </motion.div>

          {/* Current Sponsors — social proof BEFORE the pricing ask */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
              {t('collaborationPage.currentSponsorsTitle')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
              {currentSponsors.map((sponsor, index) => (
                <CurrentSponsorLogo key={index} sponsor={sponsor} />
              ))}
            </div>
          </motion.div>

          {/* Sponsorship Tiers */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
              {t('collaborationPage.tiersTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sponsorshipTiers.map((tier, index) => (
                <SponsorshipTier key={index} tier={tier} onBecomePartner={scrollToContact} />
              ))}
            </div>
          </motion.div>

          {/* Funded Projects */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
              {t('collaborationPage.projectsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fundedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
                {t('collaborationPage.readyTitle')}
              </h3>
              <p className="text-primary-300/80 mb-6">{t('collaborationPage.readyText1')}</p>
              <p className="text-primary-300/80 mb-6">{t('collaborationPage.readyText2')}</p>
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 theme-text-accent" />
                <span className="text-base-inverse">{t('collaborationPage.flexiblePayment')}</span>
              </div>
            </div>
            <div ref={contactRef}>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Collaboration;
