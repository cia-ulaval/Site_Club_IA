import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, User } from "lucide-react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

interface TeamMember {
  name: string;
  role: string;
  imgSrc?: string;
  linkedIn?: string;
  isVacant?: boolean;
}

const Management: React.FC = () => {
  const { t } = useTranslation();
  // Président
  const president: TeamMember[] = [
    {
      name: "Nathaniel D'Amours",
      role: t("management.roles.president"),
      imgSrc: "/portrait/Nathaniel.webp",
      linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
    },
  ];

  // Leaders principaux
  const logistics: TeamMember[] = [
    {
      name: "Louis-Étienne Messier",
      role: t("management.roles.logisticsLeader"),
      imgSrc: "/portrait/Louis.webp",
      linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
    },
    {
      name: "Alaa Eddine",
      role: t("management.roles.logisticsLeader"),
      imgSrc: "",
      linkedIn: "",
    },
  ];

  // Responsables Talents
  const talentResponsables: TeamMember[] = [
    {
      name: "Jade Piller Cammal",
      role: t("management.roles.talentsLeader"),
      imgSrc: "/portrait/JadePillerCammal.webp",
      linkedIn: "https://linkedin.com/in/jade-piller-cammal-242b88261/",
    },
    {
      name: "Hiba Arfaoui",
      role: t("management.roles.recruitmentManager"),
      imgSrc: "/portrait/HibaArfoui.webp",
      linkedIn: "https://www.linkedin.com/in/hiba-arfaoui-3228b01aa/",
    },
    {
      name: "Rana Azemdroub",
      role: t("management.roles.engagementManager"),
      imgSrc: "/portrait/RanaAzemdroub.webp",
      linkedIn: "https://www.linkedin.com/in/rana-azemdroub/",
    },
  ];

  // Responsables Finances
  const financeResponsables: TeamMember[] = [
    {
      name: "Alexandrine Lehoux",
      role: t("management.roles.financeLeader"),
      imgSrc: "/portrait/Alexandrine.webp",
      linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
    },
    {
      name: "Anthony Lavertu",
      role: t("management.roles.externalRelationsManager"),
      imgSrc: "/portrait/Anthony.webp",
      linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
    },
    {
      name: "Cyrille Bernier",
      role: t("management.roles.partnershipsManager"),
      imgSrc: "/portrait/CyrilleBernier.webp",
      linkedIn: "https://www.linkedin.com/in/cyrille-bernier-31208a252/",
    },
    {
      name: "Adriana Maria Paternina Paez",
      role: t("management.roles.treasuryManager"),
      imgSrc: "/portrait/AdrianaMaria.webp",
      linkedIn: "https://www.linkedin.com/in/adriana-paternina/",
    },
    {
      name: "Hiba Mameri",
      role: t(""),
      imgSrc: "",
      linkedIn: "",
    },
  ];

  // Responsables Marketing
  const marketingResponsables: TeamMember[] = [
    {
      name: "Yves Mamadou Faye",
      role: t("management.roles.marketingLeader"),
      imgSrc: "/portrait/Yves.webp",
      linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
    },
    {
      name: "Dereck Bélanger",
      role: t("management.roles.websiteManager"),
      imgSrc: "/portrait/Dereck.webp",
      linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
    },
    {
      name: "Karima Habbout",
      role: t("management.roles.communicationsManager"),
      imgSrc: "/portrait/KarimaHabbout.webp",
      linkedIn: "https://www.linkedin.com/in/karimahabbout/",
    },
    {
      name: "Youssouf Boubechiche",
      role: t("management.roles.designsManager"),
      imgSrc: "/portrait/YoussoufBoubechiche.webp",
      linkedIn: "https://www.linkedin.com/in/youssouf-boubechiche-62668128a/",
    },
  ];

  // Responsables Activités
  const activitiesResponsables: TeamMember[] = [
    {
      name: "Nathaniel D'Amours",
      role: t("management.roles.activitiesLeader"),
      imgSrc: "/portrait/Nathaniel.webp",
      linkedIn: "https://www.linkedin.com/in/nathaniel-damours/",
    },
    {
      name: "Mathieu Bazinet",
      role: t("management.roles.trainingsManager"),
      imgSrc: "/portrait/Mathieu.webp",
      linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
    },
    {
      name: "Guilhem Ané",
      role: t("management.roles.competitionsManager"),
      imgSrc: "/portrait/GuilhemAne.webp",
      linkedIn: "https://www.linkedin.com/in/guilhemane/",
    },
    {
      name: "William Blanchet Lafrenière",
      role: t("management.roles.socialManager"),
      imgSrc: "/portrait/WilliamBlanchet.webp",
      linkedIn:
        "https://www.linkedin.com/in/william-blanchet-lafrenière-8337282b1/",
    },
    {
      name: "Melek Sebri",
      role: t("management.roles.socialManager"),
      imgSrc: "/portrait/MelekSebri.webp",
      linkedIn: "https://www.linkedin.com/in/melek-sebri/",
    },
    {
      name: "Nora Belattar",
      role: t("management.roles.recognitionManager"),
      imgSrc: "",
      linkedIn: "",
    },
  ];

  // Responsables Projets
  const projectsResponsables: TeamMember[] = [
    {
      name: "Jordan Mathieu",
      role: t("management.roles.projectsLeader"),
      imgSrc: "/portrait/Jordan.webp",
      linkedIn: "https://www.linkedin.com/in/jordan-math/",
    },
    {
      name: "Amen Ouannes",
      role: "ASL-Decoder Team Lead",
      imgSrc: "/portrait/AmenOuannes.webp",
      linkedIn: "https://www.linkedin.com/in/amenallah-massarra-ouannes/",
    },
    {
      name: "Loïc Baret",
      role: "CANlock Team Lead",
      imgSrc: "",
      linkedIn: "",
    },
    {
      name: "Anthony Lavertu",
      role: "Drone Team Lead",
      imgSrc: "/portrait/Anthony.webp",
      linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
    },
    {
      name: "Benjamin Leblanc",
      role: "SGD-Beyond Team Lead",
      imgSrc: "",
      linkedIn: "",
    },
    {
      name: "Eloïse Prevot",
      role: "NutriNov Team Lead",
      imgSrc: "",
      linkedIn: "",
    },
    {
      name: "Cyrille Bernier",
      role: "Poppy Humanoid (Conception) Team Lead",
      imgSrc: "/portrait/CyrilleBernier.webp",
      linkedIn: "https://www.linkedin.com/in/cyrille-bernier-31208a252/",
    },
    {
      name: "Baptiste Gabriel Bonin",
      role: "Poppy Humanoid (Simulation) Team Lead",
      imgSrc: "",
      linkedIn: "",
    },
    {
      name: "Deoth Guei",
      role: "F1 Jedi Team Lead",
      imgSrc: "",
      linkedIn: "",
    },
    {
      name: "Akram Omari",
      role: "FlapEEG Team Lead",
      imgSrc: "",
      linkedIn: "",
    },
  ];

  const renderCards = (
    members: TeamMember[],
    titleKey: string,
    cardSize: "large" | "medium" | "small"
  ) => {
    const cardSizes = {
      large: {
        width: "16rem",
        height: "420px",
        imageHeight: "210px",
        bodyHeight: "210px",
        titleSize: "text-xl",
        roleSize: "text-base",
        headerSize: "text-6xl",
      },
      medium: {
        width: "14rem",
        height: "380px",
        imageHeight: "190px",
        bodyHeight: "190px",
        titleSize: "text-lg",
        roleSize: "text-sm",
        headerSize: "text-5xl",
      },
      small: {
        width: "12rem",
        height: "320px",
        imageHeight: "160px",
        bodyHeight: "160px",
        titleSize: "text-base",
        roleSize: "text-sm",
        headerSize: "text-4xl",
      },
    };

    const size = cardSizes[cardSize];

    return (
      <motion.section
        className="max-w-7xl mx-auto px-4 pb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1
          className={`font-bold mb-4 text-center mt-16 pb-12 ${size.headerSize}`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            {titleKey}
          </span>
        </h1>
        <div
          className={`flex flex-wrap gap-4 justify-center ${
            cardSize === "large" ? "" : cardSize === "medium" ? "" : ""
          }`}
        >
          {members.map((member, idx) => (
            <div key={idx}>
              {member.isVacant ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-900/40 border-2 border-red-800/50 border-dashed text-white mb-12 relative overflow-hidden rounded-lg"
                  style={{
                    width: size.width,
                    height: size.height,
                  }}
                >
                  <div
                    className="bg-red-800/20 flex items-center justify-center"
                    style={{ height: size.imageHeight }}
                  >
                    <User className="w-16 h-16 text-red-400/50" />
                  </div>
                  <div
                    className="text-center flex flex-col justify-center p-2"
                    style={{ height: size.bodyHeight }}
                  >
                    <div className="flex-grow flex flex-col justify-center">
                      <h3
                        className={`text-red-300/70 mb-1 ${size.titleSize} font-semibold`}
                      >
                        {t("management.vacantPosition")}
                      </h3>
                      <p
                        className={`text-red-400/60 ${size.roleSize} leading-tight`}
                      >
                        {member.role}
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-1 text-red-500/50">
                      <small className="text-xs font-medium">
                        {t("management.positionInInterview")}
                      </small>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="no-underline"
                >
                  <div
                    className="bg-red-900/80 border-2 border-red-700 hover:border-red-500 text-white mb-12 relative overflow-hidden rounded-lg transition-all duration-300"
                    style={{
                      width: size.width,
                      height: size.height,
                      cursor: "pointer",
                    }}
                  >
                    {/* Badge LinkedIn - visible au hover */}
                    <div className="absolute top-0 right-0 m-1 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-red-600 hover:bg-red-500 rounded-full p-1.5 shadow-lg transition-colors">
                        <Linkedin className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Overlay hover avec icône */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="text-center">
                        <ExternalLink className="w-6 h-6 text-white mb-1" />
                        <p className="text-white text-xs font-semibold">
                          {t("management.viewLinkedIn")}
                        </p>
                      </div>
                    </div>

                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full object-cover"
                      style={{ height: size.imageHeight }}
                    />
                    <div
                      className="text-center flex flex-col justify-between p-2"
                      style={{ height: size.bodyHeight }}
                    >
                      <div className="flex-grow flex flex-col justify-center">
                        <h3
                          className={`text-gray-200 mb-1 ${size.titleSize} leading-tight`}
                        >
                          {member.name}
                        </h3>
                        <p
                          className={`text-gray-400 ${size.roleSize} leading-tight`}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* Indicateur LinkedIn dans le footer de la carte */}
                      <div className="flex items-center justify-center mt-1 text-red-400 hover:text-red-300 transition-colors">
                        <Linkedin className="w-3 h-3 mr-1" />
                        <small className="text-xs font-medium">
                          {t("management.linkedIn")}
                        </small>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    );
  };

  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>{t("management.pageTitle")}</title>
        {/* Description */}
        <meta name="description" content={t("management.pageDescription")} />

        {/* Mots-clés */}
        <meta name="keywords" content={t("management.pageKeywords")} />

        {/* Auteur */}
        <meta name="author" content={t("management.pageAuthor")} />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta property="og:title" content={t("management.ogTitle")} />
        <meta
          property="og:description"
          content={t("management.ogDescription")}
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp"
        />
        <meta
          property="og:url"
          content="https://cia.ift.ulaval.ca/management"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t("management.ogSiteName")} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("management.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("management.twitterDescription")}
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/management" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "${t("management.structuredData.name")}",
              "url": "https://cia.ift.ulaval.ca/management",
              "description": "${t("management.structuredData.description")}",
              "mainEntity": {
                "@type": "Organization",
                "name": "${t("management.structuredData.organizationName")}",
                "url": "https://cia.ift.ulaval.ca",
                "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp",
                "description": "${t(
                  "management.structuredData.organizationDescription"
                )}",
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
                ],
                "member": [
                  {
                    "@type": "Person",
                    "name": "Nathaniel D'Amours",
                    "jobTitle": "${t("management.roles.president")}",
                    "sameAs": "https://www.linkedin.com/in/nathaniel-damours"
                  },
                  {
                    "@type": "Person",
                    "name": "Jordan Mathieu",
                    "jobTitle": "${t("management.roles.projectsLeader")}",
                    "sameAs": "https://www.linkedin.com/in/jordan-math/"
                  },
                  {
                    "@type": "Person",
                    "name": "Louis-Étienne Messier",
                    "jobTitle": "${t("management.roles.logisticsLeader")}",
                    "sameAs": "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/"
                  },
                  {
                    "@type": "Person",
                    "name": "Alexandrine Lehoux",
                    "jobTitle": "${t("management.roles.financeLeader")}",
                    "sameAs": "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/"
                  },
                  {
                    "@type": "Person",
                    "name": "Yves Faye",
                    "jobTitle": "${t("management.roles.marketingLeader")}",
                    "sameAs": "https://www.linkedin.com/in/yves-faye-3b45062a5/"
                  },
                  {
                    "@type": "Person",
                    "name": "Anthony Lavertu",
                    "jobTitle": "${t(
                      "management.roles.externalRelationsManager"
                    )}",
                    "sameAs": "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/"
                  },
                  {
                    "@type": "Person",
                    "name": "Dereck Bélanger",
                    "jobTitle": "${t("management.roles.websiteManager")}",
                    "sameAs": "https://www.linkedin.com/in/dereck-bélanger-437259338/"
                  },
                  {
                    "@type": "Person",
                    "name": "Mathieu Bazinet",
                    "jobTitle": "${t("management.roles.trainingsManager")}",
                    "sameAs": "https://www.linkedin.com/in/mathieu-bazinet-196523a6"
                  },
                  {
                    "@type": "Person",
                    "name": "Almaoudata Walet",
                    "jobTitle": "${t("management.roles.competitionsManager")}",
                    "sameAs": "https://www.linkedin.com/in/alma-walet-93418b325/"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Président */}
        {renderCards(president, t("management.sections.president"), "large")}

        {/* Leaders */}
        {renderCards(logistics, t("management.sections.leadership"), "medium")}

        {/* Responsables par département */}
        {renderCards(
          talentResponsables,
          t("management.sections.talentTeam"),
          "medium"
        )}
        {renderCards(
          marketingResponsables,
          t("management.sections.marketingTeam"),
          "medium"
        )}
        {renderCards(
          financeResponsables,
          t("management.sections.financeTeam"),
          "medium"
        )}
        {renderCards(
          activitiesResponsables,
          t("management.sections.activitiesTeam"),
          "medium"
        )}
        {renderCards(
          projectsResponsables,
          t("management.sections.projectsTeam"),
          "medium"
        )}
      </motion.div>
    </>
  );
};

export default Management;
