import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Target,
  Braces,
  Rotate3d,
  UserRoundCog,
} from "lucide-react";
import Head from "next/head";
import TeamMemberCard from "../components/TeamMemberCard";
import { useTranslation } from "next-i18next";

function F1Tenth() {
  // Changez cette ligne pour utiliser le namespace par défaut
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
      <Head>
        <title>{t("f1tenth.meta.title")}</title>
        <meta name="description" content={t("f1tenth.meta.description")} />
        <meta name="keywords" content={t("f1tenth.meta.keywords")} />
        <meta name="author" content="Dereck Bélanger" />
        <link rel="canonical" href="https://cialaval.vercel.app/f1tenth" />
      </Head>
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
                  src="/sponsors/vaul_logo.png"
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
