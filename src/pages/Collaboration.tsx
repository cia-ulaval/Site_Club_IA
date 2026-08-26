import { BadgeCheck, CreditCard } from 'lucide-react';
import { useRef, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import LogoCarousel from '../components/ui/logo-carousel';
import { MinimalCard, MinimalCardContent, MinimalCardTitle } from '../components/ui/minimal-card';
import { partners } from '../data/partners';
import { scrollBehavior } from '../hooks/useMotion';
import { openEmailDraft } from '../lib/email';
import { ORGANIZATION_LD, SITE } from '../lib/site';

const sponsorshipTiers = [
  {
    name: 'Bronze',
    price: '$1,000',
    accentBorder: 'border-t-amber-700/80',
    accentText: 'text-amber-800',
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
    accentText: 'text-slate-700',
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
    accentText: 'text-amber-700',
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

const impactMetrics = [
  { metric: '3', labelKey: 'projectsCompleted' },
  { metric: '30+', labelKey: 'studentResearchers' },
  { metric: '6', labelKey: 'industryPartners' },
  { metric: '2', labelKey: 'publishedPapers' },
];

interface SponsorshipTierProps {
  tier: (typeof sponsorshipTiers)[number];
  onBecomePartner?: () => void;
}

const SponsorshipTier = ({ tier, onBecomePartner }: SponsorshipTierProps) => {
  const { t } = useTranslation();
  return (
    <MinimalCard
      marker
      className={`flex h-full flex-col border-t-4 ${tier.accentBorder} ${
        tier.featured ? 'border-x-coral/50 border-b-coral/50' : ''
      }`}
    >
      <MinimalCardContent className="flex h-full flex-col">
        <div className="mb-6 pt-2">
          <p className={`cia-meta mb-2 ${tier.accentText}`}>
            {t(`collaborationPage.sponsorshipTiersNames.${tier.name}`)}
          </p>
          <p className="font-heading text-4xl font-bold text-ink">{tier.price}</p>
        </div>

        <ul className="mb-8 flex-grow space-y-3">
          {tier.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral-dark" />
              <span className="text-sm leading-relaxed text-ink-muted">
                {t(`collaborationPage.tierBenefits.${benefit}`, benefit)}
              </span>
            </li>
          ))}
        </ul>

        <button className="cia-btn-ghost mt-auto w-full" onClick={onBecomePartner} type="button">
          {t('collaborationPage.becomeSponsorButton', {
            tier: t(`collaborationPage.sponsorshipTiersNames.${tier.name}`, tier.name),
          })}
        </button>
      </MinimalCardContent>
    </MinimalCard>
  );
};

const MetricCard = ({ metric }: { metric: (typeof impactMetrics)[0] }) => {
  const { t } = useTranslation();
  return (
    <div>
      <p className="font-heading text-5xl font-bold leading-none text-ink">{metric.metric}</p>
      <p className="mt-3 text-sm text-ink-muted">
        {t(`collaborationPage.impactMetrics.${metric.labelKey}`)}
      </p>
    </div>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const canSubmit = name.trim().length > 0 && email.trim().length > 0;

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;
    const subject = `Partenariat - ${name.trim()}${company.trim() ? ` (${company.trim()})` : ''}`;
    const body = `Nom : ${name.trim()}\nEntreprise : ${company.trim() || '—'}\nEmail : ${email.trim()}\n\n${message.trim()}`;
    openEmailDraft('partnerships', { subject, body });
  };

  const inputClass =
    'w-full rounded border border-steel/60 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-muted transition-colors hover:border-steel focus:border-coral-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-dark';

  return (
    <MinimalCard marker>
      <MinimalCardContent>
        <MinimalCardTitle className="mb-6">{t('collaborationPage.contactTitle')}</MinimalCardTitle>
        <form onSubmit={handleContactSubmit}>
          <div className="mb-6 space-y-3">
            <label htmlFor="partner-name" className="sr-only">
              {t('collaborationPage.contactName')}
            </label>
            <input
              id="partner-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder={t('collaborationPage.contactName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            <label htmlFor="partner-email" className="sr-only">
              {t('collaborationPage.contactEmail')}
            </label>
            <input
              id="partner-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder={t('collaborationPage.contactEmail')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
            <label htmlFor="partner-company" className="sr-only">
              {t('collaborationPage.contactCompany')}
            </label>
            <input
              id="partner-company"
              type="text"
              name="organization"
              autoComplete="organization"
              placeholder={t('collaborationPage.contactCompany')}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={inputClass}
            />
            <label htmlFor="partner-message" className="sr-only">
              {t('collaborationPage.contactMessage')}
            </label>
            <textarea
              id="partner-message"
              name="message"
              placeholder={t('collaborationPage.contactMessage')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} h-32 resize-none`}
            />
          </div>
          <button
            className="cia-btn-accent w-full disabled:cursor-not-allowed disabled:opacity-40"
            type="submit"
            disabled={!canSubmit}
          >
            {t('collaborationPage.contactButton')}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            {t('collaborationPage.contactPrivacyNotice')}{' '}
            <Link
              to="/privacy"
              className="font-semibold text-accent-300 underline decoration-accent-500/50 underline-offset-4 hover:decoration-accent-500 cia-focus-ring"
            >
              {t('collaborationPage.contactPrivacyLink')}
            </Link>
          </p>
        </form>
      </MinimalCardContent>
    </MinimalCard>
  );
};

function Collaboration() {
  const { t } = useTranslation();
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    if (!contactRef.current) return;
    contactRef.current.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    contactRef.current.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
  };

  return (
    <>
      <Seo
        title="Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval | CIA ULaval"
        description="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants d'intelligence artificielle. Offres Bronze, Silver, Gold. Visibilité, networking et accès aux talents IA."
        keywords="sponsoring IA, partenariat Club IA, collaboration entreprise, financement projets IA, sponsoring étudiant, Bronze Silver Gold, networking IA, talents IA, Université Laval, recherche IA"
        path="/collaboration"
        socialTitle="Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval"
        socialDescription="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants et accédez aux talents IA."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval',
          url: `${SITE}/collaboration`,
          mainEntity: ORGANIZATION_LD,
        }}
      />

      <section>
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-16 md:px-6 md:pt-24">
          <header className="mb-20 border-b border-steel/25 pb-14 md:mb-28 md:pb-20">
            <h1 className="cia-display max-w-5xl text-display">
              {t('collaborationPage.mainTitle')}
            </h1>
            <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-12">
              <h2 className="font-heading text-2xl font-semibold leading-tight text-ink md:col-span-4 md:text-3xl">
                {t('collaborationPage.subtitle')}
              </h2>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-muted md:col-span-7 md:col-start-6">
                {t('collaborationPage.intro')}
              </p>
            </div>
          </header>

          <section className="mb-24">
            <h2 className="cia-display mb-12 text-4xl md:text-5xl">
              {t('collaborationPage.impactTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric) => (
                <MetricCard key={metric.labelKey} metric={metric} />
              ))}
            </div>
          </section>

          <section className="mb-24 border-t border-steel/25 pt-16">
            <h2 className="cia-display mb-8 text-4xl md:text-5xl">
              {t('collaborationPage.currentSponsorsTitle')}
            </h2>
            <LogoCarousel items={partners} label={t('home.partners.carouselLabel')} />
          </section>

          <section className="mb-24 border-t border-steel/25 pt-16">
            <h2 className="cia-display mb-12 text-4xl md:text-5xl">
              {t('collaborationPage.tiersTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sponsorshipTiers.map((tier) => (
                <SponsorshipTier key={tier.name} tier={tier} onBecomePartner={scrollToContact} />
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 items-start gap-12 border-t border-steel/25 pt-16 lg:grid-cols-2">
            <div>
              <h2 className="cia-display mb-6 text-4xl md:text-5xl">
                {t('collaborationPage.readyTitle')}
              </h2>
              <p className="mb-6 max-w-xl text-ink-muted">{t('collaborationPage.readyText1')}</p>
              <p className="mb-6 max-w-xl text-ink-muted">{t('collaborationPage.readyText2')}</p>
              <div className="flex items-center gap-4">
                <CreditCard className="h-6 w-6 text-coral-dark" />
                <span className="text-ink">{t('collaborationPage.flexiblePayment')}</span>
              </div>
            </div>
            <div ref={contactRef}>
              <ContactForm />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Collaboration;
