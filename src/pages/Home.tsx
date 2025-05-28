import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <div className="max-w-7xl mx-auto px-4">
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Background decorative elements (hidden on mobile) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/5 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto px-6 md:px-8 lg:px-10 w-full max-w-4xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Side - Title & Subtitle & About */}
            <div className="space-y-6">
              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                  {t("home.header.title")}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {t("home.header.subtitle")}
              </motion.p>

              {/* About Section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
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
            <div className="hidden lg:flex justify-center">
              <motion.div
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <InstaPostEmbed url="https://www.instagram.com/p/DIUeVjTOhfZ" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="mb-20 pt-10">
        <motion.h2
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {t("home.projects.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-red-800/10 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 * index }}
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
                  className="inline-flex items-center text-red-400 hover:text-orange-800 transition-colors"
                >
                  {t("home.projects.learnMore")}{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="text-center mb-20 pt-10">
        <motion.h2
          className="text-4xl font-bold gradient-text mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {t("home.collaboration.title")}
        </motion.h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {t("home.collaboration.description")}
        </p>
        <Link
          to="/collaboration"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-colors"
        >
          {t("home.collaboration.button")}
        </Link>
      </section>
      <InfiniteScrollBanner />
    </div>
  );
}

export default Home;
