import Head from "next/head";
import { motion } from "framer-motion";
import TeamMemberCard from "../components/TeamMemberCard";
import {
  TextCursorInput,
  SwatchBook,
  Rss,
  Zap,
  Languages,
  Layers,
} from "lucide-react";
import { useTranslation } from "next-i18next";

interface ImageWithGlowProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageWithGlow = ({ src, alt, caption }: ImageWithGlowProps) => (
  <motion.div
    className="text-center mb-2 relative overflow-hidden rounded-xl max-w-sm md:max-w-lg mx-auto"
    whileHover={{
      scale: 1.03,
      transition: { duration: 0.3 },
    }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full mx-auto rounded-xl shadow-xl border border-red-800/30"
      initial={{ y: 10, opacity: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    />
    {caption && <div className="text-xs text-gray-500 mt-2">{caption}</div>}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
  </motion.div>
);

// Animated step progress component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <motion.div
    className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8"
    initial={{ x: -10, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: number * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="flex-shrink-0">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-bold text-sm md:text-base">
        {number}
      </div>
    </div>
    <div>
      <h4 className="text-lg md:text-xl font-semibold text-white mb-1">
        {title}
      </h4>
      <p className="text-sm md:text-base text-gray-400">{description}</p>
    </div>
  </motion.div>
);

function MangaAI() {
  const { t } = useTranslation();

  const mangaAITeam = [
    {
      icon: <TextCursorInput className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Théophile Berteloot",
      role: "",
      description: t("mangaai.team.theophile.description"),
    },
    {
      icon: <SwatchBook className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Loïc Baret",
      role: "",
      description: t("mangaai.team.loic.description"),
    },
    {
      icon: <Rss className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Xavier Legault",
      role: "",
      description: t("mangaai.team.xavier.description"),
    },
    {
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Louis-Jacob Lebel",
      role: "",
      description: t("mangaai.team.louisjacob.description"),
    },
    {
      icon: <Languages className="w-6 h-6 md:w-8 md:h-8" />,
      title: "John-William Lebel",
      role: "",
      description: t("mangaai.team.johnwilliam.description"),
    },
  ];

  // Project features with icons
  const features = [
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-red-400" />,
      title: t("mangaai.features.realtime.title"),
      description: t("mangaai.features.realtime.description"),
    },
    {
      icon: <Languages className="w-5 h-5 md:w-6 md:h-6 text-red-400" />,
      title: t("mangaai.features.multilang.title"),
      description: t("mangaai.features.multilang.description"),
    },
    {
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-red-400" />,
      title: t("mangaai.features.contextaware.title"),
      description: t("mangaai.features.contextaware.description"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("mangaai.meta.title")}</title>
        <meta name="description" content={t("mangaai.meta.description")} />
        <meta name="keywords" content={t("mangaai.meta.keywords")} />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={t("mangaai.meta.og.title")} />
        <meta property="og:description" content={t("mangaai.meta.og.description")} />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta property="og:url" content="https://cialaval.vercel.app/mangaai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("mangaai.meta.twitter.title")} />
        <meta name="twitter:description" content={t("mangaai.meta.twitter.description")} />
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
            <h1
              id="test"
              className="text-4xl md:text-6xl font-bold mb-2 md:mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                {t("mangaai.hero.title.manga")}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                {t("mangaai.hero.title.translator")}
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              {t("mangaai.hero.subtitle")}
            </h2>
          </motion.div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1 md:py-2 bg-red-900/20 rounded-full border border-red-800/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {feature.icon}
                <span className="text-xs md:text-sm font-medium text-white whitespace-nowrap">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 text-center px-4 md:px-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t("mangaai.hero.description")}
          </motion.p>

          {/* Main content section */}
          <motion.section
            id="learn-more"
            className="mb-12 md:mb-20 text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
                {t("mangaai.approach.title")}
              </h3>

              <div className="grid grid-cols-1 gap-8 md:gap-16 items-center mb-12 md:mb-16">
                <div className="px-4 md:px-0">
                  <p className="mb-4 md:mb-6 text-sm md:text-base">
                    {t("mangaai.approach.paragraph1")}
                  </p>
                  <p className="text-sm md:text-base">
                    {t("mangaai.approach.paragraph2")}
                  </p>
                </div>
                <ImageWithGlow
                  src="/project/manga109.png"
                  alt={t("mangaai.images.manga109.alt")}
                  caption={t("mangaai.images.manga109.caption")}
                />
              </div>

              <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-300">
                {t("mangaai.process.title")}
              </h4>

              <div className="mb-8 md:mb-12 px-4 md:px-0">
                <ProcessStep
                  number={1}
                  title={t("mangaai.process.step1.title")}
                  description={t("mangaai.process.step1.description")}
                />
                <ProcessStep
                  number={2}
                  title={t("mangaai.process.step2.title")}
                  description={t("mangaai.process.step2.description")}
                />
                <ProcessStep
                  number={3}
                  title={t("mangaai.process.step3.title")}
                  description={t("mangaai.process.step3.description")}
                />
                <ProcessStep
                  number={4}
                  title={t("mangaai.process.step4.title")}
                  description={t("mangaai.process.step4.description")}
                />
              </div>

              <ImageWithGlow
                src="/project/mangaai.png"
                alt={t("mangaai.images.example.alt")}
                caption={t("mangaai.images.example.caption")}
              />

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-red-800/20">
                <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-300">
                  {t("mangaai.future.title")}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0">
                  <motion.div
                    className="p-3 md:p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h5 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-red-500">
                      {t("mangaai.future.textResizing.title")}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-400">
                      {t("mangaai.future.textResizing.description")}
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-3 md:p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h5 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-red-500">
                      {t("mangaai.future.genderDetection.title")}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-400">
                      {t("mangaai.future.genderDetection.description")}
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-3 md:p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h5 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-red-500">
                      {t("mangaai.future.characterId.title")}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-400">
                      {t("mangaai.future.characterId.description")}
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-3 md:p-5 rounded-xl bg-red-900/10 border border-red-800/30 hover:border-red-500/40 transition-colors"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h5 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-red-500">
                      {t("mangaai.future.contextAware.title")}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-400">
                      {t("mangaai.future.contextAware.description")}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Team section */}
          <div id="team">
            <section className="py-8 md:py-16 relative">
              {/* Background design element */}
              <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-red-800/5 rounded-full blur-3xl -z-10"></div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t("mangaai.team.title")}
              </motion.h2>

              <motion.p
                className="text-sm md:text-base text-gray-400 text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t("mangaai.team.description")}
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-6">
                {mangaAITeam.map((member, idx) => (
                  <TeamMemberCard
                    key={idx}
                    icon={member.icon}
                    title={member.title}
                    description={member.description}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Footer/Contact section */}
          <motion.section
            id="contact"
            className="pt-6 md:pt-8 pb-8 md:pb-16 px-4 md:px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.section>
        </motion.div>
      </section>
    </>
  );
}

export default MangaAI;
