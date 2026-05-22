import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import InfiniteScrollBanner from '../components/Carousel';
import { useTranslation } from 'react-i18next';
import InstaPostEmbed from '../components/InstaPostEmbed';
import { useMotion } from '../hooks/useMotion';
function Home() {
  const { t } = useTranslation();
  const m = useMotion();
  const projects = [
    {
      title: t('home.projects.flapeeg.title'),
      image: '/project/FlappyBrain.webp',
      description: t(
        'home.projects.flapeeg.homeDescription',
        'Play FlapEEG with your brainwaves: AI reads EEG signals to control the bird.'
      ),
      link: '/flapeeg',
    },
    {
      title: t('home.projects.f1tenth.title'),
      image: '/project/f1tenthcar.webp',
      description: t(
        'home.projects.f1tenth.homeDescription',
        'Control a 1/10 F1TENTH car with an EMG bracelet: AI turns arm movement into steering and speed.'
      ),
      link: '/f1tenth',
    },
    {
      title: t('home.projects.mangaai.title'),
      image: '/project/mangaai2.webp',
      description: t(
        'home.projects.mangaai.homeDescription',
        'Translate manga panels with AI using OCR, language processing, and context-aware text replacement.'
      ),
      link: '/mangaai',
    },
  ];
  return (
    <div className="w-full">
      <Helmet>
        {/* Titre */}
        <title>Club Intelligence Artificielle - Université Laval | CIA ULaval</title>
        {/* Description */}
        <meta
          name="description"
          content="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants, événements, ateliers et rejoignez notre communauté passionnée d'IA."
        />
        {/* Mots-clés */}
        <meta
          name="keywords"
          content="intelligence artificielle, IA, club étudiant, Université Laval, machine learning, deep learning, projets IA, événements tech, programmation, data science"
        />
        {/* Auteur */}
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        {/* Open Graph pour Facebook/LinkedIn */}
        <meta property="og:title" content="Club Intelligence Artificielle - Université Laval" />
        <meta
          property="og:description"
          content="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants et rejoignez notre communauté."
        />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Club Intelligence Artificielle - Université Laval" />
        <meta
          name="twitter:description"
          content="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants."
        />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/" />
        {/* Langue */} <html lang="fr" />
        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">{` { "@context": "https://schema.org", "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca", "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp", "description": "Club étudiant d'intelligence artificielle de l'Université Laval", "foundingLocation": { "@type": "Place", "name": "Québec, Canada" }, "parentOrganization": { "@type": "EducationalOrganization", "name": "Université Laval" }, "sameAs": [ "https://www.instagram.com/ciaulaval/", "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all", "https://github.com/cia-ulaval", "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp" ] } `}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 md:py-12 w-full max-w-7xl mx-auto px-4 md:px-8 min-h-screen flex items-start md:items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-primary-500/5 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 w-full">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-28 items-center">
            {/* Left Side - Title & Subtitle & About */}
            <div className="space-y-10">
              {/* Title */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
                {...m.fadeIn}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary-500 to-primary-500">
                  {t('home.header.title')}
                </span>
              </motion.h1>
              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-primary-300 font-light leading-relaxed"
                {...m.slideUp}
              >
                {t('home.header.subtitle')}
              </motion.p>
              {/* About Section */}
              <motion.div className="space-y-6" {...m.slideUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-accent-300">
                  {t('home.about.title')}
                </h2>
                <p className="text-accent-300 text-lg leading-relaxed">
                  {t('home.about.description')}
                </p>
              </motion.div>
            </div>
            {/* Right Side - Instagram (visible on all screens) */}
            <div className="flex justify-center items-center h-full mt-10 md:mt-0">
              <motion.div className="w-full h-full flex justify-center items-center" {...m.fadeIn}>
                <div className="w-full max-w-none lg:max-w-2xl xl:max-w-3xl flex justify-center">
                  <InstaPostEmbed url="https://www.instagram.com/p/DU0Z_U4iEzK/?img_index=1" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner Logos */}
      <section className="w-full py-6 md:py-10">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <InfiniteScrollBanner />
        </div>
      </section>
      {/* Section Projets */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-20 pt-10">
        <motion.h2
          className="text-4xl font-bold theme-text-gradient text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {t('home.projects.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl theme-surface-primary border !border-primary-500/70 hover:!border-primary-400 shadow-lg hover:shadow-xl hover:shadow-primary-900/20 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <img
                src={project.image}
                alt={`Image of ${project.title}`}
                className="w-full h-64 object-cover blur-[1.5px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/45 to-transparent p-6 flex flex-col justify-end backdrop-blur-[0.5px]">
                <h3 className="text-xl font-bold text-accent-300 mb-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] transform-gpu transition-transform duration-300 group-hover:-translate-y-0.5">
                  {project.title}
                </h3>
                <p className="text-accent-300 mb-4 text-sm leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] transform-gpu transition-transform duration-300 group-hover:-translate-y-0.5">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-flex items-center theme-text-accent hover:text-primary-300 transition-colors drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] cia-focus-ring rounded"
                >
                  {t('home.projects.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Section Collaboration */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center mb-20 pt-10">
        <motion.h2
          className="text-4xl font-bold text-primary-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {t('home.collaboration.title')}
        </motion.h2>
        <motion.p
          className="text-xl text-primary-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {t('home.collaboration.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <Link
            to="/collaboration"
            className="inline-block px-8 py-3 bg-accent-500 hover:bg-accent-300 rounded-full text-base-inverse font-semibold transition-colors shadow-lg hover:shadow-xl hover:shadow-accent-500/30"
          >
            {t('home.collaboration.button')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
export default Home;
