import { SiDiscord } from '@icons-pack/react-simple-icons';
import { BookOpen, Facebook, Github, Instagram, Linkedin, Mail, Rocket, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { openEmailDraft } from '../lib/email';
import { DISCORD_URL, ORGANIZATION_LD, SITE, SOCIAL_LINKS } from '../lib/site';

/* Every real point of contact for the club: a project team, admin roles,
   or general questions all route through one of these. */
const CONTACT_POINTS = [
  {
    kind: 'link',
    href: DISCORD_URL,
    icon: SiDiscord,
    label: 'Discord',
    handle: DISCORD_URL.replace('https://', ''),
  },
  { kind: 'email', icon: Mail, label: 'Email' },
  {
    kind: 'link',
    href: SOCIAL_LINKS.instagram,
    icon: Instagram,
    label: 'Instagram',
    handle: '@ciaulaval',
  },
  {
    kind: 'link',
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'cia-ulaval',
  },
  { kind: 'link', href: SOCIAL_LINKS.github, icon: Github, label: 'GitHub', handle: 'cia-ulaval' },
  {
    kind: 'link',
    href: SOCIAL_LINKS.facebook,
    icon: Facebook,
    label: 'Facebook',
    handle: 'Club IA ULaval',
  },
] as const;

/* The three reasons to join, in the order the page argues them. */
const VALUE_PROPS = [
  { icon: Rocket, key: 'projects' },
  { icon: BookOpen, key: 'formations' },
  { icon: Users, key: 'community' },
] as const;

function JoinUs() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title="Rejoindre le Club IA - Intelligence Artificielle Université Laval | CIA ULaval"
        description="Rejoignez le Club Intelligence Artificielle de l'Université Laval ! Participez à nos projets IA, formations, événements et communauté Discord. Ouvert à tous les étudiants passionnés d'IA."
        keywords="rejoindre Club IA, adhésion CIA ULaval, Discord Club IA, communauté IA, étudiants intelligence artificielle, formations IA, projets étudiants, Université Laval, machine learning, collaboration IA"
        path="/join-us"
        socialTitle="Rejoindre le Club IA - Intelligence Artificielle Université Laval"
        socialDescription="Rejoignez notre communauté d'étudiants passionnés d'IA ! Projets innovants, formations et événements vous attendent."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Rejoindre le Club IA - Intelligence Artificielle Université Laval',
          url: `${SITE}/join-us`,
          description: "Page d'adhésion au Club Intelligence Artificielle de l'Université Laval",
          mainEntity: {
            ...ORGANIZATION_LD,
            contactPoint: [
              { '@type': 'ContactPoint', contactType: 'general', url: `${SITE}/join-us` },
              { '@type': 'ContactPoint', contactType: 'community', url: DISCORD_URL },
            ],
          },
          potentialAction: {
            '@type': 'JoinAction',
            target: DISCORD_URL,
            name: 'Rejoindre le Discord',
          },
        }}
      />
      <section className="pb-24 pt-16 md:pt-24">
        <div className="cia-measure">
          <header className="grid gap-10 border-b border-steel/25 pb-16 md:grid-cols-12 md:items-end md:pb-20">
            <h1 className="cia-display text-[clamp(3.75rem,10vw,8.5rem)] md:col-span-8">
              {t('joinus.heroSubtitle')}
            </h1>
            <div className="md:col-span-4 md:pb-2">
              <p className="mb-7 text-lg leading-relaxed text-ink-muted">
                {t('joinus.discordText')}
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cia-btn-accent"
              >
                {t('joinus.discordButton')}
              </a>
            </div>
          </header>

          <section className="py-16 md:py-20" aria-labelledby="join-value-title">
            <h2 id="join-value-title" className="cia-display mb-10 text-4xl md:text-5xl">
              {t('joinus.valueProp.title')}
            </h2>
            <div className="grid border-t border-steel/30 md:grid-cols-3">
              {VALUE_PROPS.map(({ icon: Icon, key }, index) => (
                <article
                  key={key}
                  className="relative border-b border-steel/30 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="absolute left-0 top-0 h-1.5 w-9 bg-coral" aria-hidden="true" />
                  <div className="mb-10 flex items-center justify-between text-steel">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="cia-index">0{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-ink">
                    {t(`joinus.valueProp.${key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-ink-muted">
                    {t(`joinus.valueProp.${key}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="border-t border-steel/25 pt-14 md:pt-16"
            aria-labelledby="contact-title"
          >
            <h2 id="contact-title" className="cia-display mb-10 text-4xl md:text-5xl">
              {t('joinus.socialFollow')}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CONTACT_POINTS.map((point) => {
                const Icon = point.icon;
                const content = (
                  <>
                    <Icon
                      className="h-6 w-6 shrink-0 text-primary-500 transition-colors group-hover:text-accent-400"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-heading text-base font-semibold text-ink">
                        {point.label}
                      </span>
                      <span className="mt-0.5 block cia-mono text-xs text-ink-muted">
                        {point.kind === 'email' ? t('joinus.emailAction') : point.handle}
                      </span>
                    </span>
                  </>
                );

                return point.kind === 'email' ? (
                  <button
                    key={point.label}
                    type="button"
                    onClick={() => openEmailDraft('general')}
                    className="group flex items-center gap-4 text-left cia-card cia-card-hover p-5 cia-focus-ring"
                  >
                    {content}
                  </button>
                ) : (
                  <a
                    key={point.label}
                    href={point.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 cia-card cia-card-hover p-5 cia-focus-ring"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default JoinUs;
