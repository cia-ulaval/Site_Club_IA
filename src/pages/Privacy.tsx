import { BarChart3, Mail, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { openEmailDraft } from '../lib/email';
import { ORGANIZATION_LD, SITE } from '../lib/site';

const RESOURCE_LINKS = [
  {
    key: 'analytics',
    href: 'https://vercel.com/docs/analytics/privacy-policy',
  },
  {
    key: 'speedInsights',
    href: 'https://vercel.com/docs/speed-insights/privacy-policy',
  },
  {
    key: 'vercelPrivacy',
    href: 'https://vercel.com/legal/privacy-notice',
  },
  {
    key: 'googleFonts',
    href: 'https://developers.google.com/fonts/faq/privacy',
  },
  {
    key: 'cai',
    href: 'https://www.cai.gouv.qc.ca/protection-renseignements-personnels',
  },
] as const;

function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('privacyPage.seoTitle')}
        description={t('privacyPage.seoDescription')}
        path="/privacy"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: t('privacyPage.title'),
          url: `${SITE}/privacy`,
          description: t('privacyPage.seoDescription'),
          isPartOf: ORGANIZATION_LD,
          dateModified: '2026-08-25',
        }}
      />

      <article className="pb-24 pt-16 md:pt-24">
        <div className="cia-measure">
          <header className="border-b border-steel/25 pb-14 md:pb-20">
            <p className="cia-meta-accent mb-5">{t('privacyPage.eyebrow')}</p>
            <h1 className="cia-display max-w-5xl text-display">{t('privacyPage.title')}</h1>
            <div className="mt-8 grid gap-5 md:grid-cols-12 md:items-end">
              <p className="max-w-2xl text-lg leading-relaxed text-ink-muted md:col-span-8">
                {t('privacyPage.intro')}
              </p>
              <p className="cia-index md:col-span-4 md:text-right">{t('privacyPage.updated')}</p>
            </div>
          </header>

          <div className="grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 md:py-20">
            <aside className="lg:col-span-4">
              <div className="cia-panel-soft lg:sticky lg:top-24">
                <h2 className="font-heading text-2xl font-bold text-ink">
                  {t('privacyPage.atGlance.title')}
                </h2>
                <ul className="mt-6 space-y-6">
                  {[
                    { Icon: Mail, key: 'contact' },
                    { Icon: BarChart3, key: 'analytics' },
                    { Icon: ShieldCheck, key: 'noSale' },
                  ].map(({ Icon, key }) => (
                    <li key={key} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-coral-dark"
                        aria-hidden="true"
                      />
                      <span>{t(`privacyPage.atGlance.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="cia-measure-read space-y-12 lg:col-span-8">
              <section aria-labelledby="privacy-responsible">
                <h2 id="privacy-responsible" className="cia-heading-section text-ink">
                  {t('privacyPage.responsible.title')}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  {t('privacyPage.responsible.body')}
                </p>
              </section>

              <section
                className="border-t border-steel/25 pt-10"
                aria-labelledby="privacy-information"
              >
                <h2 id="privacy-information" className="cia-heading-section text-ink">
                  {t('privacyPage.information.title')}
                </h2>
                <div className="mt-7 space-y-8">
                  {(['messages', 'technical', 'storage'] as const).map((key) => (
                    <div key={key}>
                      <h3 className="font-heading text-xl font-semibold text-primary-300">
                        {t(`privacyPage.information.${key}.title`)}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink-muted">
                        {t(`privacyPage.information.${key}.body`)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {(
                ['purposes', 'sharing', 'transfers', 'retention', 'consent', 'rights'] as const
              ).map((key) => (
                <section
                  key={key}
                  className="border-t border-steel/25 pt-10"
                  aria-labelledby={`privacy-${key}`}
                >
                  <h2 id={`privacy-${key}`} className="cia-heading-section text-ink">
                    {t(`privacyPage.${key}.title`)}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-muted">
                    {t(`privacyPage.${key}.body`)}
                  </p>
                </section>
              ))}

              <section
                className="border-t border-steel/25 pt-10"
                aria-labelledby="privacy-resources"
              >
                <h2 id="privacy-resources" className="cia-heading-section text-ink">
                  {t('privacyPage.resources.title')}
                </h2>
                <ul className="mt-4 space-y-3">
                  {RESOURCE_LINKS.map(({ key, href }) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-accent-300 underline decoration-accent-500/50 underline-offset-4 hover:decoration-accent-500 cia-focus-ring"
                      >
                        {t(`privacyPage.resources.${key}`)} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="cia-panel-soft" aria-labelledby="privacy-contact">
                <ShieldCheck className="h-6 w-6 text-coral-dark" aria-hidden="true" />
                <h2 id="privacy-contact" className="mt-4 cia-heading-section text-ink">
                  {t('privacyPage.contact.title')}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {t('privacyPage.contact.body')}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openEmailDraft('general', { subject: t('privacyPage.contact.subject') })
                  }
                  className="cia-btn-accent mt-6"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t('privacyPage.contact.button')}
                </button>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Privacy;
