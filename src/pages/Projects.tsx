import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const projects = [
  {
    key: "flapeeg",
    image: "/project/FlappyBrain.webp",
    defaultTitle: "FlapEEG",
    defaultDescription: "A mind-controlled video game",
    link: "/flapeeg",
    github: "https://github.com/cia-ulaval/FlapEEG_interface_v1",
  },
  {
    key: "f1tenth",
    image: "/project/f1tenthcar.webp",
    defaultTitle: "F1Tenth",
    defaultDescription: "EMG racing with 1/10th-scale F1 cars",
    link: "/f1tenth",
    github: "https://github.com/cia-ulaval/F1-team-1",
  },
  {
    key: "decisiontree",
    image: "/project/decisiontree.webp",
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
    image: "/project/mangaai2.webp",
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
      <Helmet>
        {/* Titre */}
        <title>
          Projets IA - Club Intelligence Artificielle Université Laval | CIA
          ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Découvrez les projets innovants du Club IA ULaval : FlappyBrain EEG, F1Tenth autonome, MangaAI, Lenia, Decision Tree et plus. Projets d'intelligence artificielle et machine learning."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="projets IA, FlappyBrain, F1Tenth, MangaAI, Lenia, Decision Tree, EEG, voiture autonome, génération manga, projets étudiants, machine learning, deep learning, Club IA ULaval"
        />

        {/* Auteur */}
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Projets IA - Club Intelligence Artificielle Université Laval"
        />
        <meta
          property="og:description"
          content="Découvrez nos projets innovants d'intelligence artificielle : FlappyBrain EEG, F1Tenth autonome, MangaAI et plus."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/project/FlappyBrain.webp"
        />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projets IA - Club Intelligence Artificielle Université Laval"
        />
        <meta
          name="twitter:description"
          content="Découvrez nos projets innovants d'intelligence artificielle et machine learning."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/project/FlappyBrain.webp"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/projects" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Projets IA - Club Intelligence Artificielle Université Laval",
              "url": "https://cia.ift.ulaval.ca/projects",
              "description": "Collection des projets d'intelligence artificielle du Club IA ULaval",
              "mainEntity": {
                "@type": "Organization",
                "name": "Club Intelligence Artificielle - Université Laval",
                "url": "https://cia.ift.ulaval.ca",
                "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp",
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
              },
              "hasPart": [
                {
                  "@type": "SoftwareApplication",
                  "name": "FlappyBrain EEG",
                  "description": "Jeu contrôlé par ondes cérébrales"
                },
                {
                  "@type": "SoftwareApplication", 
                  "name": "F1Tenth",
                  "description": "Voiture de course autonome"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "MangaAI",
                  "description": "Génération et traduction automatique de manga"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Lenia",
                  "description": "Automates cellulaires autonomes"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Decision Tree",
                  "description": "Recherche et développement d'arbres de décision"
                }
              ]
            }
          `}
        </script>
      </Helmet>

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
                        project.image || "/project/placeholder.webp"
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
