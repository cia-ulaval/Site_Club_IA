import {
  Apple,
  Baby,
  Asterisk,
  Bean,
  Grid,
  ZoomIn,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import TeamMemberCard from "../components/TeamMemberCard";
import { useTranslation } from "next-i18next";

interface ImageWithGlowProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageWithGlow = ({ src, alt, caption }: ImageWithGlowProps) => (
  <motion.div
    className="text-center mb-4 relative overflow-hidden rounded-xl"
    whileHover={{
      scale: 1.03,
      transition: { duration: 0.3 },
    }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full md:w-2/3 mx-auto rounded-xl shadow-xl border border-red-800/30"
      initial={{ y: 10, opacity: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    />
    {caption && <div className="text-xs text-gray-500 mt-2">{caption}</div>}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
  </motion.div>
);

function Lenia() {
  const { t } = useTranslation();

  // Project features with icons
  const features = [
    {
      icon: <Grid className="w-6 h-6 text-red-400" />,
      title: t("lenia.features.continuous.title"),
      description: t("lenia.features.continuous.description"),
    },
    {
      icon: <Sparkles className="w-6 h-6 text-red-400" />,
      title: t("lenia.features.emergent.title"),
      description: t("lenia.features.emergent.description"),
    },
    {
      icon: <ZoomIn className="w-6 h-6 text-red-400" />,
      title: t("lenia.features.research.title"),
      description: t("lenia.features.research.description"),
    },
  ];

  const teamMembers = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Théophile Berteloot",
      description: t("lenia.team.theophile.description"),
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Jordan Mathieu",
      description: t("lenia.team.jordan.description"),
    },
    {
      icon: <Bean className="w-8 h-8" />,
      title: "Louis-Étienne Messier",
      description: t("lenia.team.louis.description"),
    },
    {
      icon: <Asterisk className="w-8 h-8" />,
      title: t("lenia.team.others.title"),
      description: t("lenia.team.others.description"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("lenia.meta.title")}</title>
        <meta name="description" content={t("lenia.meta.description")} />
        <meta name="keywords" content={t("lenia.meta.keywords")} />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={t("lenia.meta.og.title")} />
        <meta property="og:description" content={t("lenia.meta.og.description")} />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta property="og:url" content="https://cialaval.vercel.app/lenia" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("lenia.meta.twitter.title")} />
        <meta name="twitter:description" content={t("lenia.meta.twitter.description")} />
        <meta name="twitter:image" content="/banner/cia_ico.ico" />
      </Head>
      <section className="relative overflow-hidden">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero section with animated title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                Lenia
              </span>
            </h1>
            <h2 className="text-4xl font-bold text-white mb-6">
              {t("lenia.hero.subtitle")}
            </h2>
          </motion.div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-red-900/20 rounded-full border border-red-800/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {feature.icon}
                <span className="text-sm font-medium text-white">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Main content section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <motion.p
                className="w-full md:w-4/5 mx-auto text-lg text-gray-400 text-justify mb-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t("lenia.content.paragraph1")}
                <br /><br />
                {t("lenia.content.paragraph2")}
              </motion.p>

              <ImageWithGlow
                src="/project/lenia.png"
                alt={t("lenia.images.pattern.alt")}
              />

              <motion.p
                className="w-full md:w-4/5 mx-auto text-lg mt-8 text-gray-400 text-justify mb-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t("lenia.content.paragraph3")}
              </motion.p>

              <ImageWithGlow
                src="/project/leniaexample.gif"
                alt={t("lenia.images.animation.alt")}
                caption={t("lenia.images.animation.caption")}
              />

              <motion.p
                className="w-full md:w-4/5 mx-auto text-lg mt-12 text-gray-400 text-justify"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t("lenia.content.paragraph4")}
              </motion.p>
            </div>
          </motion.section>

          {/* Team section */}
          <section className="py-16 relative mb-10 mt-10">
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/5 rounded-full blur-3xl -z-10"></div>

            <motion.h2
              className="text-4xl font-bold gradient-text text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("lenia.team.title")}
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  icon={member.icon}
                  title={member.title}
                  description={member.description}
                />
              ))}
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
}

export default Lenia;
