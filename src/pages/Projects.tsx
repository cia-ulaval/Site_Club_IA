import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "flapeeg",
    image: "/project/FlappyBrain.png",
    defaultTitle: "FlapEEG",
    defaultDescription: "A mind-controlled video game",
    link: "/flapeeg",
    github: "https://github.com/cia-ulaval/FlapEEG_interface_v1",
  },
  {
    key: "f1tenth",
    image: "/project/f1tenthcar.png",
    defaultTitle: "F1Tenth",
    defaultDescription: "EMG racing with 1/10th-scale F1 cars",
    link: "/f1tenth",
    github: "https://github.com/cia-ulaval/F1-team-1",
  },
  {
    key: "decisiontree",
    image: "/project/decisiontree.jpg",
    defaultTitle: "Decision Tree",
    defaultDescription: "Research and development of decision trees",
    link: "/decisiontree",
  },
  {
    key: "lenia",
    image: "/project/leniacover.png",
    defaultTitle: "Lenia",
    defaultDescription: "Autonomous cellular automata",
    link: "/lenia",
    github: "https://github.com/cia-ulaval/LENIA-frontend",
  },
  {
    key: "mangaai",
    image: "/project/mangaai2.png",
    defaultTitle: "MangaAI",
    defaultDescription: "Automatic manga translation and analysis",
    link: "/mangaai",
    github: "https://github.com/cia-ulaval/MangaAutoTranslator",
  },
];

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>CIA Site</title>
        <meta name="description" content={t("home.about.description")} />
        <meta
          name="keywords"
          content="EEG projects, FlapEEG, MangaAI, Lenia, F1Tenth, Decision Tree, innovative technology, research"
        />
        <meta name="author" content="Dereck Bélanger" />
      </Head>

      <motion.section
        className="overflow-hidden mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 pb-16">
          {/* ---- en-tête ---- */}
          <header className="text-center mb-16">
            <motion.h1
              className="text-5xl font-extrabold text-white tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("home.projects.title", "Projects")}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("home.projects.subtitle", "Discover our innovative projects!")}
            </motion.p>
          </header>

          {/* ---- cartes projets ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.key}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div className="container bg-red-900/20 rounded-xl overflow-hidden shadow-lg w-full max-w-sm h-120 transition-all duration-300">
                  <div
                    className="w-full h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${
                        project.image || "/project/placeholder.jpg"
                      })`,
                    }}
                  />
                  <div className="p-6 flex flex-col h-48">
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {t(
                        `home.projects.${project.key}.title`,
                        project.defaultTitle
                      )}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow overflow-hidden line-clamp-3">
                      {t(
                        `home.projects.${project.key}.description`,
                        project.defaultDescription
                      )}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto sm:flex-row flex-col">
                      <Link
                        to={project.link}
                        className="px-4 py-2 text-sm text-white font-medium rounded-md bg-red-600 transition-all duration-300 hover:bg-red-500 flex items-center justify-center sm:flex-grow"
                      >
                        {t("home.projects.learnMore", "Learn more")} →
                      </Link>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm text-white font-medium rounded-md bg-gray-800 transition-all duration-300 hover:bg-gray-700 flex items-center justify-center sm:flex-grow"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          <span>{t("home.projects.github", "GitHub")}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
