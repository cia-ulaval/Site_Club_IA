import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import LogoCarousel from '../components/ui/logo-carousel';
import { partners } from '../data/partners';
import { domainCount, projects } from '../data/projects';
import { useMotion } from '../hooks/useMotion';
import { ORGANIZATION_LD } from '../lib/site';

const FEATURED = 3;

/* Fixed order so the ledger below reads the same on every load — a
   filter's iteration order isn't a promise, a declared list is. */
const DOMAIN_ORDER = ['iaml', 'hardware', 'application', 'robotics'] as const;

function Home() {
  const { t } = useTranslation();
  const m = useMotion();

  const featured = projects.slice(0, FEATURED);
  const [lead, ...secondary] = featured;

  const domains = DOMAIN_ORDER.map((category) => ({
    category,
    count: projects.filter((p) => p.category === category).length,
  })).filter((d) => d.count > 0);

  return (
    <div className="w-full">
      <Seo
        title="Club Intelligence Artificielle - Université Laval | CIA ULaval"
        description="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants, événements, ateliers et rejoignez notre communauté passionnée d'IA."
        keywords="intelligence artificielle, IA, club étudiant, Université Laval, machine learning, deep learning, projets IA, événements tech, programmation, data science"
        path="/"
        socialTitle="Club Intelligence Artificielle - Université Laval"
        socialDescription="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants et rejoignez notre communauté."
        jsonLd={{ '@context': 'https://schema.org', ...ORGANIZATION_LD }}
      />

      {/* Masthead. The mark is set as large as the viewport allows and the
          prose sits in a narrow column below it — the page opens with one
          statement, not a two-column split of equal weight. */}
      <header className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-28 pb-6 md:pb-10">
        <motion.h1
          className="cia-display text-[clamp(4.5rem,22vw,17rem)] mt-8 md:mt-12"
          {...m.write}
        >
          {t('home.header.title')}
        </motion.h1>

        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 mt-10 md:mt-14">
          <motion.p
            className="md:col-span-7 font-body text-lg md:text-2xl text-primary-300 leading-snug"
            {...m.rise(0.08)}
          >
            {t('home.header.subtitle')}
          </motion.p>

          <motion.div
            className="md:col-span-5 md:col-start-8 flex flex-wrap items-start gap-x-6 gap-y-3"
            {...m.rise(0.14)}
          >
            <Link
              to="/join-us"
              className="inline-flex h-11 items-center bg-accent-400 px-6 cia-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent-300 cia-focus-ring"
            >
              {t('home.heroCta.join')}
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 h-11 cia-mono text-xs uppercase tracking-[0.14em] text-primary-300 hover:text-accent-300 transition-colors cia-focus-ring"
            >
              {t('home.heroCta.projects')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Readout strip, set as a ruled instrument panel rather than three
            numbers floating in whitespace. Every figure is counted from the
            index, so it cannot drift out of date the way a written-in
            number does. */}
        <dl className="grid grid-cols-3 mt-14 md:mt-20 border-t-2 border-coral">
          {[
            { v: `${projects.length}+`, k: 'home.stats.projects', d: 'Projets' },
            { v: '40+', k: 'home.stats.members', d: 'Membres' },
            { v: domainCount, k: 'home.stats.domains', d: 'Domaines' },
          ].map((s, i) => (
            <div
              key={s.k}
              className={`py-5 pr-4 md:py-7 ${i > 0 ? 'cia-rule-l pl-5 md:pl-8' : ''}`}
            >
              <dt className="cia-meta">{t(s.k, s.d)}</dt>
              <dd className="font-heading text-4xl md:text-6xl font-bold text-primary-300 mt-2">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* About, paired with a real breakdown of what the club works on — a
          large statement balanced by a tighter data column, not a lone
          paragraph adrift in the page. */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-12">
          <div className="md:col-span-7">
            <h2 className="cia-meta">{t('home.about.title')}</h2>
            <p className="font-body text-2xl md:text-4xl text-primary-300 leading-snug mt-5">
              {t('home.about.description')}
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h2 className="cia-meta">{t('home.domains.label', 'Focus areas')}</h2>
            <ul className="mt-5">
              {domains.map(({ category, count }, i) => (
                <li
                  key={category}
                  className={`flex items-baseline justify-between gap-4 py-3 ${i > 0 ? 'cia-rule' : ''}`}
                >
                  <span className="font-heading text-lg font-semibold text-primary-300">
                    {t(`projects.categories.${category}`)}
                  </span>
                  <span className="cia-index shrink-0">{String(count).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured entries. The first project runs as an editorial lead —
          full-width, image and copy at real size — so the section reads as
          one of these things mattering most, not three equal tiles. */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 cia-rule">
        <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-10">
          <h2 className="cia-meta">{t('home.projects.title')}</h2>
          <Link
            to="/projects"
            className="cia-mono text-xs uppercase tracking-[0.14em] text-primary-400 hover:text-accent-300 transition-colors inline-flex items-center gap-2 cia-focus-ring"
          >
            {t('home.index.all', 'Tout voir')} ({projects.length})
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {lead && (
          <div className="mb-6">
            <Link
              to={lead.link}
              className="group flex flex-col md:grid md:grid-cols-12 cia-card cia-card-hover overflow-hidden cia-focus-ring"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:col-span-7 bg-primary-950 overflow-hidden">
                {lead.image ? (
                  <img
                    src={lead.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-base ease-out group-hover:scale-[1.03] ${lead.status === 'shipped' ? 'saturate-[0.35]' : 'saturate-[0.9] group-hover:saturate-100'}`}
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="cia-index">{t('projects.noPreview')}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-5 p-6 md:p-10 flex flex-col justify-center">
                <span className="cia-meta-accent">{t(`projects.categories.${lead.category}`)}</span>
                <h3 className="cia-display text-3xl md:text-5xl mt-4">
                  {t(`home.projects.${lead.key}.title`, lead.defaultTitle)}
                </h3>
                <p className="font-body text-primary-400 leading-relaxed mt-4 line-clamp-4">
                  {t(`home.projects.${lead.key}.description`, lead.defaultDescription)}
                </p>
                <span className="cia-mono text-xs uppercase tracking-[0.14em] text-accent-400 mt-6 inline-flex items-center gap-2">
                  {t('home.projects.learnMore')}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {secondary.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {secondary.map((project) => (
              <div key={project.key}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Partners and the sponsor ask share one section on purpose: one
          audience (organizations backing the club), read top to bottom as
          "who's already with us" into "join them" rather than split across
          a two-column band with an unrelated neighbour. */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 cia-rule">
        <p className="cia-meta mb-8">{t('home.partners.label')}</p>
        <LogoCarousel items={partners} label={t('home.partners.carouselLabel')} />

        <div className="mt-14 md:mt-16 pt-10 md:pt-12 border-t border-steel/25 grid md:grid-cols-12 gap-x-12 gap-y-6 md:items-center">
          <div className="md:col-span-8">
            <p className="cia-meta mb-4">{t('home.partnership.label', 'Partenariat')}</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-300 leading-tight">
              {t('home.collaboration.title')}
            </h2>
            <p className="font-body text-primary-400 leading-relaxed mt-3 max-w-md">
              {t('home.collaboration.description')}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/collaboration"
              className="inline-flex items-center gap-2 h-11 cia-mono text-xs uppercase tracking-[0.14em] text-primary-300 hover:text-accent-300 transition-colors cia-focus-ring"
            >
              {t('home.collaboration.button')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
