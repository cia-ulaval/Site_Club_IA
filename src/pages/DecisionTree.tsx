import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import TeamMemberCard from "../components/TeamMemberCard";

function DecisionTree() {
  const { t } = useTranslation();

  // Team members data
  const teamMembers = [
    {
      icon: <SwatchBook className="w-8 h-8" />,
      title: "Benjamin Leblanc",
      description: "Team Lead",
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Mathieu Bazinet",
      description: "Client",
    },
    {
      icon: <TextCursorInput className="w-8 h-8" />,
      title: "Émylie-Rose Desmarais",
      description: "",
    },
    {
      icon: <Rss className="w-8 h-8" />,
      title: "Antoine Jean",
      description: "",
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Tadagbé Dhossou",
      description: "",
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Alamaoudata Walet",
      description: "",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>
          Decision Tree - Recherche Arbres de Décision | Projet IA Club ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Projet Decision Tree : recherche et développement d'algorithmes d'arbres de décision optimisés. Machine learning, classification et analyse de données par le Club IA ULaval."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="Decision Tree, arbres de décision, machine learning, classification, algorithmes d'apprentissage, data science, recherche IA, Club IA ULaval, Émylie-Rose Desmarais, Benjamin Leblanc, Antoine Jean"
        />

        {/* Auteur */}
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Decision Tree - Recherche Arbres de Décision | Projet IA Club ULaval"
        />
        <meta
          property="og:description"
          content="Découvrez notre projet Decision Tree : recherche et développement d'algorithmes d'arbres de décision pour machine learning et classification."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/project/decisiontree.webp"
        />
        <meta
          property="og:url"
          content="https://cia.ift.ulaval.ca/decisiontree"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Decision Tree - Recherche Arbres de Décision | Projet IA Club ULaval"
        />
        <meta
          name="twitter:description"
          content="Projet de recherche sur les algorithmes d'arbres de décision pour machine learning et classification."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/project/decisiontree.webp"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/decisiontree" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ResearchProject",
              "name": "Decision Tree - Recherche Arbres de Décision",
              "url": "https://cia.ift.ulaval.ca/decisiontree",
              "description": "Projet de recherche et développement d'algorithmes d'arbres de décision optimisés pour machine learning et classification",
              "about": [
                {
                  "@type": "Thing",
                  "name": "Arbres de décision"
                },
                {
                  "@type": "Thing",
                  "name": "Machine Learning"
                },
                {
                  "@type": "Thing",
                  "name": "Classification"
                },
                {
                  "@type": "Thing",
                  "name": "Algorithmes d'apprentissage"
                }
              ],
              "author": {
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
              "contributor": [
                {
                  "@type": "Person",
                  "name": "Émylie-Rose Desmarais",
                  "jobTitle": "Chercheuse principale"
                },
                {
                  "@type": "Person",
                  "name": "Benjamin Leblanc",
                  "jobTitle": "Développeur algorithmes"
                },
                {
                  "@type": "Person",
                  "name": "Antoine Jean",
                  "jobTitle": "Analyste données"
                },
                {
                  "@type": "Person",
                  "name": "Tadagbé Dhossou",
                  "jobTitle": "Développeur"
                },
                {
                  "@type": "Person",
                  "name": "Alamaoudata Walet",
                  "jobTitle": "Chercheuse"
                },
                {
                  "@type": "Person",
                  "name": "Mathieu Bazinet",
                  "jobTitle": "Spécialiste machine learning"
                }
              ],
              "keywords": [
                "arbres de décision",
                "decision trees",
                "machine learning",
                "classification",
                "algorithmes d'apprentissage",
                "data science",
                "intelligence artificielle"
              ],
              "researchField": [
                "Machine Learning",
                "Data Science",
                "Algorithmes d'apprentissage",
                "Classification automatique"
              ],
              "image": "https://cia.ift.ulaval.ca/project/decisiontree.webp",
              "funding": {
                "@type": "Organization",
                "name": "Université Laval"
              }
            }
          `}
        </script>
      </Helmet>

      <section className="relative overflow-hidden">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            {/* Hero Section */}
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-0">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                      {t("decisionTree.hero.title")}
                    </span>
                  </h1>
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-justify">
                      {t("decisionTree.hero.description1")}
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-justify">
                      {t("decisionTree.hero.description2")}
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-justify">
                      {t("decisionTree.hero.description3")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center px-4 sm:px-8 lg:px-0 mt-8 lg:mt-0">
                  <img
                    src="/project/decisiontree.webp"
                    alt={t("decisionTree.hero.imageAlt")}
                    className="rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square object-cover"
                  />
                </div>
              </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
              className="mb-12 sm:mb-20 mt-12 sm:mt-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-8 sm:mb-12">
                {t("decisionTree.team.title")}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <TeamMemberCard
                      icon={member.icon}
                      title={member.title}
                      description={member.description}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default DecisionTree;
