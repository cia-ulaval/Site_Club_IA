import { useRef } from 'react';
import { Rocket, Users, Braces } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import TeamMemberCard from '../components/TeamMemberCard';
import DiscordCTA from '../components/DiscordCTA';
import { useTranslation } from 'react-i18next';
import BackToProjects from '../components/BackToProjects';
import { useMotion } from '../hooks/useMotion';
function FlapEEG() {
  const { t } = useTranslation();
  const m = useMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const teamMembers = [
    { title: 'Louis-Étienne Messier', description: t('flapeeg.team.members.louis.description') },
    { title: 'Jordan Mathieu', description: t('flapeeg.team.members.jordan.description') },
    { title: 'Dereck Bélanger', description: t('flapeeg.team.members.dereck.description') },
    { title: 'Amen Ouannes', description: t('flapeeg.team.members.amen.description') },
    { title: 'Estelle Tournassat', description: t('flapeeg.team.members.estelle.description') },
    { title: 'Hedi Braham', description: t('flapeeg.team.members.hedi.description') },
    {
      title: 'William Blanchet Lafrenière',
      description: t('flapeeg.team.members.william.description'),
    },
  ];
  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>FlappyBrain EEG - Jeu Contrôlé par Ondes Cérébrales | Club IA ULaval</title>
        {/* Description */}
        <meta
          name="description"
          content="FlappyBrain : jeu révolutionnaire contrôlé par EEG et ondes cérébrales. Interface cerveau-ordinateur développée par le Club IA ULaval avec Muse headband et intelligence artificielle."
        />
        {/* Mots-clés */}
        <meta
          name="keywords"
          content="FlappyBrain, EEG, ondes cérébrales, interface cerveau-ordinateur, BCI, neurotechnologie, jeu EEG, Muse headband, brain-computer interface, Club IA ULaval, Louis-Étienne Messier, Jordan Mathieu"
        />
        {/* Auteur */}
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        {/* Open Graph pour Facebook/LinkedIn */}
        <meta property="og:title" content="FlappyBrain EEG - Jeu Contrôlé par Ondes Cérébrales" />
        <meta
          property="og:description"
          content="Découvrez FlappyBrain, le jeu révolutionnaire contrôlé par vos ondes cérébrales via EEG. Interface cerveau-ordinateur du Club IA ULaval."
        />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/project/FlappyBrain.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/flapeeg" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FlappyBrain EEG - Jeu Contrôlé par Ondes Cérébrales" />
        <meta
          name="twitter:description"
          content="Jeu révolutionnaire contrôlé par EEG et ondes cérébrales. Interface cerveau-ordinateur innovante."
        />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/project/FlappyBrain.webp" />
        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/flapeeg" />
        {/* Langue */} <html lang="fr" />
        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "FlappyBrain EEG - Jeu Contrôlé par Ondes Cérébrales", "url": "https://cia.ift.ulaval.ca/flapeeg", "description": "Jeu révolutionnaire contrôlé par EEG et ondes cérébrales utilisant une interface cerveau-ordinateur", "applicationCategory": "GameApplication", "operatingSystem": "Cross-platform", "author": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca", "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp", "description": "Club étudiant d'intelligence artificielle de l'Université Laval", "foundingLocation": { "@type": "Place", "name": "Québec, Canada" }, "parentOrganization": { "@type": "EducationalOrganization", "name": "Université Laval" }, "sameAs": [ "https://www.instagram.com/ciaulaval/", "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all", "https://github.com/cia-ulaval", "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp" ] }, "creator": [ { "@type": "Person", "name": "Louis-Étienne Messier", "jobTitle": "Chef d'équipe et développeur principal" }, { "@type": "Person", "name": "Jordan Mathieu", "jobTitle": "Développeur IA et machine learning" }, { "@type": "Person", "name": "Dereck Bélanger", "jobTitle": "Développeur interface utilisateur" }, { "@type": "Person", "name": "Amen Ouannes", "jobTitle": "Développeur backend" }, { "@type": "Person", "name": "Estelle Tournassat", "jobTitle": "Analyste données EEG" }, { "@type": "Person", "name": "Hedi Braham", "jobTitle": "Spécialiste traitement signal" }, { "@type": "Person", "name": "William Blanchet Lafrenière", "jobTitle": "Développeur et testeur" } ], "featureList": [ "Contrôle par ondes cérébrales EEG", "Interface cerveau-ordinateur (BCI)", "Utilisation du casque Muse", "Traitement signal en temps réel", "Apprentissage automatique personnalisé", "Filtrage numérique des signaux", "Interface utilisateur intuitive" ], "keywords": [ "EEG", "ondes cérébrales", "interface cerveau-ordinateur", "BCI", "neurotechnologie", "Muse headband", "jeu mental", "brain-computer interface" ], "screenshot": "https://cia.ift.ulaval.ca/implication/flappyeegmain.webp", "image": "https://cia.ift.ulaval.ca/project/FlappyBrain.webp", "codeRepository": "https://github.com/cia-ulaval/FlapEEG_interface_v1", "programmingLanguage": ["Python", "JavaScript", "React"], "requirements": "Casque EEG Muse, ordinateur compatible" } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <BackToProjects />
          {/* Hero Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="theme-media-frame max-w-lg">
                  <img
                    src="/implication/flappyeegmain.webp"
                    alt={t('flapeeg.hero.image.alt')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="cia-heading-hero mb-4">
                  <span className="theme-text-gradient">FlapEEG</span>
                </h1>
                <p className="cia-body-lead text-neutral-200 mb-4">
                  {t('flapeeg.hero.description.paragraph1')}
                </p>
                <p className="text-neutral-300">{t('flapeeg.hero.description.paragraph2')}</p>
              </div>
            </div>
          </motion.section>
          {/* Team Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('flapeeg.team.title')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div key={index} {...m.stagger(index)}>
                  <TeamMemberCard title={member.title} description={member.description} />
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Timeline Section */}
          <motion.section id="Week1" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('flapeeg.timeline.beginning.title')}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 cia-card cia-card-content">
                <div className="theme-media-frame mb-4">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/project/flappyproto.mp4"
                    autoPlay
                    loop
                    playsInline
                    poster="/project/flappyproto-poster.webp"
                    aria-label={t('flapeeg.timeline.beginning.video.ariaLabel')}
                  />
                </div>
                <div>
                  <span className="cia-heading-card text-neutral-100 flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 theme-text-accent" />
                    {t('flapeeg.timeline.beginning.prototype.title')}
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {t('flapeeg.timeline.beginning.prototype.description')}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-neutral-300">{t('flapeeg.timeline.beginning.description')}</p>
              </div>
            </div>
          </motion.section>
          <motion.section id="Week2-4" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('flapeeg.timeline.dataCollection.title')}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 theme-text-accent" />
                  <span className="cia-heading-card text-neutral-100">
                    {t('flapeeg.timeline.dataCollection.subtitle')}
                  </span>
                </div>
                <p className="text-neutral-300">
                  {t('flapeeg.timeline.dataCollection.paragraph1')}
                </p>
                <p className="text-neutral-300 mt-4">
                  {t('flapeeg.timeline.dataCollection.paragraph2')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="theme-media-frame max-w-lg">
                  <img
                    src="/project/FlappyBrain.webp"
                    alt={t('flapeeg.timeline.dataCollection.image.alt')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section id="Week4-6" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('flapeeg.timeline.filtering.title')}
            </h2>
            <div className="cia-card cia-card-content max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <Braces className="w-5 h-5 theme-text-accent" />
                <span className="cia-heading-card text-neutral-100">
                  {t('flapeeg.timeline.filtering.subtitle')}
                </span>
              </div>
              <p className="text-neutral-300 pb-3">{t('flapeeg.timeline.filtering.paragraph1')}</p>
              <p className="text-neutral-300">{t('flapeeg.timeline.filtering.paragraph2')}</p>
            </div>
          </motion.section>
          <motion.section id="Week6-9" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('flapeeg.timeline.challenge.title')}
            </h2>
            <p className="text-neutral-300 max-w-3xl mx-auto">
              {t('flapeeg.timeline.challenge.description')}
            </p>
          </motion.section>
          <motion.section id="project-status" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('flapeeg.status.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cia-card cia-card-content">
                <h3 className="cia-heading-card text-neutral-100 mb-3">
                  {t('flapeeg.status.current.title')}
                </h3>
                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                  <li>{t('flapeeg.status.current.items.0')}</li>
                  <li>{t('flapeeg.status.current.items.1')}</li>
                  <li>{t('flapeeg.status.current.items.2')}</li>
                  <li>{t('flapeeg.status.current.items.3')}</li>
                </ul>
              </div>
              <div className="cia-card cia-card-content">
                <h3 className="cia-heading-card text-neutral-100 mb-3">
                  {t('flapeeg.status.next.title')}
                </h3>
                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                  <li>{t('flapeeg.status.next.items.0')}</li>
                  <li>{t('flapeeg.status.next.items.1')}</li>
                  <li>{t('flapeeg.status.next.items.2')}</li>
                  <li>{t('flapeeg.status.next.items.3')}</li>
                </ul>
              </div>
            </div>
            <DiscordCTA label={t('joinus.discordButton')}>
              {t('flapeeg.status.conclusion.line1')} <br />
              {t('flapeeg.status.conclusion.line2')} <br />
              <span className="text-accent-400 font-bold">
                {t('flapeeg.status.conclusion.line3')}
              </span>
            </DiscordCTA>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}
export default FlapEEG;
