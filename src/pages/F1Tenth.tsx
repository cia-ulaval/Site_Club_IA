import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Target,
  Braces,
  Rotate3d,
  UserRoundCog,
} from "lucide-react";
import { Helmet } from "react-helmet";
import TeamMemberCard from "../components/TeamMemberCard";
import { useTranslation } from "react-i18next";

function F1Tenth() {
  const { t } = useTranslation();

  // Team data for the two groups
  const team1 = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Deoth Guei",
      description: t("f1tenth.team1.deoth.description"),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Théophile Bertelot",
      description: t("f1tenth.team1.theophile.description"),
    },
    {
      icon: <UserRoundCog className="w-8 h-8" />,
      title: "Felix Ly",
      description: t("f1tenth.team1.felix.description"),
    },
    {
      icon: <Rotate3d className="w-8 h-8" />,
      title: "Melek Sebri",
      description: t("f1tenth.team1.melek.description"),
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Amy Randianodiasan",
      description: t("f1tenth.team1.amy.description"),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Kahina Moulfi",
      description: t("f1tenth.team1.kahina.description"),
    },
  ];

  const team2 = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Alban Sarrazin",
      description: t("f1tenth.team2.alban.description"),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Alexandre Laforest",
      description: t("f1tenth.team2.alexandre.description"),
    },
    {
      icon: <UserRoundCog className="w-8 h-8" />,
      title: "Jade Piller Cammal",
      description: t("f1tenth.team2.jade.description"),
    },
    {
      icon: <Rotate3d className="w-8 h-8" />,
      title: "Karima Habbout",
      description: t("f1tenth.team2.karima.description"),
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Simon Gouin",
      description: t("f1tenth.team2.simon.description"),
    },
  ];

  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>
          F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Projet F1Tenth : développement de voitures de course autonomes à l'échelle 1/10. Intelligence artificielle, vision par ordinateur, LIDAR et conduite autonome par le Club IA ULaval."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="F1Tenth, voiture autonome, course autonome, vision par ordinateur, LIDAR, ROS, véhicule autonome, robotique, Club IA ULaval, VAUL, intelligence artificielle, projet étudiant, course robotique"
        />

        {/* Auteur */}
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval"
        />
        <meta
          property="og:description"
          content="Découvrez notre projet F1Tenth : voitures de course autonomes à l'échelle 1/10 avec IA, vision par ordinateur et LIDAR."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/project/f1tenthcar.png"
        />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/f1tenth" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval"
        />
        <meta
          name="twitter:description"
          content="Projet de voitures de course autonomes avec IA, vision par ordinateur et LIDAR."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/project/f1tenthcar.png"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/f1tenth" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "F1Tenth - Voiture Autonome de Course",
              "url": "https://cia.ift.ulaval.ca/f1tenth",
              "description": "Projet de développement de voitures de course autonomes à l'échelle 1/10 utilisant intelligence artificielle, vision par ordinateur et LIDAR",
              "applicationCategory": "RoboticsApplication",
              "operatingSystem": "ROS",
              "author": {
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
              },
              "sponsor": {
                "@type": "Organization",
                "name": "VAUL - Véhicule Autonome Université Laval",
                "description": "Laboratoire de recherche en véhicules autonomes de l'Université Laval"
              },
              "creator": [
                {
                  "@type": "Organization",
                  "name": "Équipe F1Tenth #1",
                  "member": [
                    {
                      "@type": "Person",
                      "name": "Deoth Guei",
                      "jobTitle": "Chef d'équipe"
                    },
                    {
                      "@type": "Person",
                      "name": "Théophile Berteloot",
                      "jobTitle": "Développeur IA"
                    },
                    {
                      "@type": "Person",
                      "name": "Felix Ly",
                      "jobTitle": "Ingénieur système"
                    },
                    {
                      "@type": "Person",
                      "name": "Melek Sebri",
                      "jobTitle": "Spécialiste vision"
                    },
                    {
                      "@type": "Person",
                      "name": "Amy Randianodiasan",
                      "jobTitle": "Développeuse"
                    },
                    {
                      "@type": "Person",
                      "name": "Kahina Moulfi",
                      "jobTitle": "Analyste données"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "name": "Équipe F1Tenth #2",
                  "member": [
                    {
                      "@type": "Person",
                      "name": "Alban Sarrazin",
                      "jobTitle": "Chef d'équipe"
                    },
                    {
                      "@type": "Person",
                      "name": "Alexandre Laforest",
                      "jobTitle": "Développeur IA"
                    },
                    {
                      "@type": "Person",
                      "name": "Jade Piller Cammal",
                      "jobTitle": "Ingénieure système"
                    },
                    {
                      "@type": "Person",
                      "name": "Karima Habbout",
                      "jobTitle": "Spécialiste navigation"
                    },
                    {
                      "@type": "Person",
                      "name": "Simon Gouin",
                      "jobTitle": "Développeur"
                    }
                  ]
                }
              ],
              "featureList": [
                "Voitures autonomes échelle 1/10",
                "Vision par ordinateur temps réel",
                "Navigation LIDAR",
                "Algorithmes de course autonome",
                "Détection d'obstacles",
                "Planification de trajectoire",
                "Système ROS intégré"
              ],
              "keywords": [
                "F1Tenth",
                "voiture autonome",
                "course autonome",
                "vision par ordinateur",
                "LIDAR",
                "ROS",
                "robotique",
                "navigation autonome"
              ],
              "screenshot": "https://cia.ift.ulaval.ca/project/f1tenth.png",
              "image": "https://cia.ift.ulaval.ca/project/f1tenthcar.png",
              "codeRepository": "https://github.com/cia-ulaval/F1-team-1",
              "programmingLanguage": ["Python", "C++", "ROS"],
              "requirements": "Plateforme F1Tenth, LIDAR, caméra, ordinateur embarqué"
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
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                <div className="w-full lg:w-1/2 lg:order-2">
                  <img
                    src="/project/f1tenthcar.png"
                    alt={t("f1tenth.hero.imageAlt")}
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-justify space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                      {t("f1tenth.hero.title")}
                    </span>
                  </h1>
                  <div className="space-y-4">
                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                      {t("f1tenth.hero.description1")}
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {t("f1tenth.hero.description2")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="team1"
              className="mb-12 sm:mb-20 mt-12 sm:mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-8 sm:mb-12">
                {t("f1tenth.team1.title")}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-6">
                {team1.map((value, index) => (
                  <TeamMemberCard
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
            </motion.section>

            <motion.section
              id="team2"
              className="mb-12 sm:mb-20 mt-12 sm:mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-8 sm:mb-12">
                {t("f1tenth.team2.title")}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-6">
                {team2.map((value, index) => (
                  <TeamMemberCard
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
            </motion.section>

            <motion.section
              id="sponsor"
              className="mt-20 mb-12 sm:mb-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">
                {t("f1tenth.sponsor.title")}
              </h2>
              <div className="flex flex-col items-center">
                <img
                  src="/project/vaul.png"
                  alt="VAUL Logo"
                  className="w-40 h-auto mb-4"
                />
                <p className="text-gray-400 max-w-2xl">
                  {t("f1tenth.sponsor.description")}
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default F1Tenth;
