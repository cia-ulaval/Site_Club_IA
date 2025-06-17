import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import InfiniteScrollBanner from "../components/Carousel";
import { useTranslation } from "react-i18next";
import InstaPostEmbed from "../components/InstaPostEmbed";

function Home() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const projects = [
    {
      title: t("home.projects.flapeeg.title"),
      image: "/project/FlappyBrain.png",
      description: t("home.projects.flapeeg.description"),
      link: "/flapeeg",
    },
    {
      title: t("home.projects.f1tenth.title"),
      image: "/project/f1tenthcar.png",
      description: t("home.projects.f1tenth.description"),
      link: "/f1tenth",
    },
    {
      title: t("home.projects.mangaai.title"),
      image: "/project/mangaai2.png",
      description: t("home.projects.mangaai.description"),
      link: "/mangaai",
    },
  ];

  return (
    <div className="w-full">
      <Helmet>
        {/* Titre */}
        <title>
          Club Intelligence Artificielle - Université Laval | CIA ULaval
        </title>
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
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Club Intelligence Artificielle - Université Laval"
        />
        <meta
          property="og:description"
          content="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants et rejoignez notre communauté."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.png"
        />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Club Intelligence Artificielle - Université Laval"
        />
        <meta
          name="twitter:description"
          content="Club étudiant d'intelligence artificielle de l'Université Laval. Découvrez nos projets innovants."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.png"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Club Intelligence Artificielle - Université Laval",
              "url": "https://cia.ift.ulaval.ca",
              "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.png",
              "description": "Club étudiant d'intelligence artificielle de l'Université Laval",
              "foundingLocation": {
                "@type": "Place",
                "name": "Québec, Canada"
              },
              "parentOrganization": {
                "@type": "EducationalOrganization",
                "name": "Université Laval"
              },
              "sameAs": [
                "https://www.instagram.com/ciaulaval/",
                "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all",
                "https://github.com/cia-ulaval",
                "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/5 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Side - Title & Subtitle & About */}
            <div className="space-y-6">
              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  {t("home.header.title")}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {t("home.header.subtitle")}
              </motion.p>

              {/* About Section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                  {t("home.about.title")}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                  {t("home.about.description")}
                </p>
              </motion.div>
            </div>

            {/* Right Side - Instagram (hidden on mobile) */}
            <div className="hidden lg:flex justify-center items-center h-full">
              <motion.div
                className="w-full h-full flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="w-full max-w-none lg:max-w-2xl xl:max-w-3xl flex justify-center">
                  <InstaPostEmbed url="https://www.instagram.com/p/DIUeVjTOhfZ" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-20 pt-10">
        <motion.h2
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {t("home.projects.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-lg hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={`Image of ${project.title}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                >
                  {t("home.projects.learnMore")}{" "}
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
          className="text-4xl font-bold gradient-text mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {t("home.collaboration.title")}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t("home.collaboration.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/collaboration"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-colors shadow-lg hover:shadow-xl hover:shadow-red-600/30"
          >
            {t("home.collaboration.button")}
          </Link>
        </motion.div>
      </section>

      <InfiniteScrollBanner />
    </div>
  );
}

export default Home;
