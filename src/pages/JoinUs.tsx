import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Instagram, Facebook, Linkedin, Mail, Rocket, BookOpen, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
function JoinUs() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>
          Rejoindre le Club IA - Intelligence Artificielle Université Laval | CIA ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Rejoignez le Club Intelligence Artificielle de l'Université Laval ! Participez à nos projets IA, formations, événements et communauté Discord. Ouvert à tous les étudiants passionnés d'IA."
        />
        {/* Mots-clés */}
        <meta
          name="keywords"
          content="rejoindre Club IA, adhésion CIA ULaval, Discord Club IA, communauté IA, étudiants intelligence artificielle, formations IA, projets étudiants, Université Laval, machine learning, collaboration IA"
        />
        {/* Auteur */}
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Rejoindre le Club IA - Intelligence Artificielle Université Laval"
        />
        <meta
          property="og:description"
          content="Rejoignez notre communauté d'étudiants passionnés d'IA ! Projets innovants, formations et événements vous attendent."
        />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/join-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rejoindre le Club IA - Intelligence Artificielle Université Laval"
        />
        <meta
          name="twitter:description"
          content="Rejoignez notre communauté d'étudiants passionnés d'intelligence artificielle !"
        />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/join-us" />
        {/* Langue */} <html lang="fr" />
        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "WebPage", "name": "Rejoindre le Club IA - Intelligence Artificielle Université Laval", "url": "https://cia.ift.ulaval.ca/join-us", "description": "Page d'adhésion au Club Intelligence Artificielle de l'Université Laval", "mainEntity": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca", "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp", "description": "Club étudiant d'intelligence artificielle de l'Université Laval", "foundingLocation": { "@type": "Place", "name": "Québec, Canada" }, "parentOrganization": { "@type": "EducationalOrganization", "name": "Université Laval" }, "sameAs": [ "https://www.instagram.com/ciaulaval/", "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all", "https://github.com/cia-ulaval", "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp" ], "contactPoint": [ { "@type": "ContactPoint", "contactType": "general", "email": "cia@ulaval.ca" }, { "@type": "ContactPoint", "contactType": "community", "url": "https://discord.gg/ZPVwCjMpAq" } ], }, "potentialAction": { "@type": "JoinAction", "target": "https://discord.gg/ZPVwCjMpAq", "name": "Rejoindre le Discord" } } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden pt-20">
        <motion.div
          className="theme-content-shell theme-surface-primary shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-8 mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="theme-text-gradient">{t('joinus.heroSubtitle')}</span>
            </h1>
          </motion.div>

          {/* Value proposition — 3 pillars */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Rocket className="w-7 h-7 theme-text-accent" />,
                titleKey: 'joinus.valueProp.projects.title',
                descKey: 'joinus.valueProp.projects.description',
              },
              {
                icon: <BookOpen className="w-7 h-7 theme-text-accent" />,
                titleKey: 'joinus.valueProp.formations.title',
                descKey: 'joinus.valueProp.formations.description',
              },
              {
                icon: <Users className="w-7 h-7 theme-text-accent" />,
                titleKey: 'joinus.valueProp.community.title',
                descKey: 'joinus.valueProp.community.description',
              },
            ].map(({ icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-primary-500/20 bg-primary-950/30"
              >
                {icon}
                <h3 className="font-semibold text-base-inverse text-lg">{t(titleKey)}</h3>
                <p className="text-sm theme-text-muted leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </motion.div>

          {/* Discord CTA */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg theme-text-muted mb-6">{t('joinus.discordText')}</p>
            <a
              href="https://discord.gg/ZPVwCjMpAq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-400 text-base-inverse font-bold rounded-full shadow-lg hover:shadow-accent-500/30 transition-all duration-200"
            >
              {t('joinus.discordButton')}
            </a>
          </motion.div>

          {/* Social links with labels */}
          <motion.div
            className="text-center pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-primary-400/70 uppercase tracking-widest mb-6">
              {t('joinus.socialFollow')}
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {[
                {
                  href: 'https://www.linkedin.com/company/cia-ulaval/',
                  icon: <Linkedin size={22} />,
                  label: 'LinkedIn',
                },
                { href: 'mailto:cia@ulaval.ca', icon: <Mail size={22} />, label: 'Email' },
                {
                  href: 'https://www.instagram.com/ciaulaval/',
                  icon: <Instagram size={22} />,
                  label: 'Instagram',
                },
                {
                  href: 'https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/',
                  icon: <Facebook size={22} />,
                  label: 'Facebook',
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="flex flex-col items-center gap-2 theme-text-muted theme-hover-text-accent transition-colors duration-200 cursor-pointer"
                >
                  {icon}
                  <span className="text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
export default JoinUs;
