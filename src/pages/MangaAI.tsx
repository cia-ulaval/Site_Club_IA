import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import TeamMemberCard from "../components/TeamMemberCard";
import {
  TextCursorInput,
  SwatchBook,
  Rss,
  Zap,
  Languages,
  Layers,
} from "lucide-react";
import { useTranslation } from "react-i18next";

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
      <Helmet>
        {/* Titre */}
        <title>
          MangaAI - Traducteur Automatique de Manga par IA | Club IA ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="MangaAI : traducteur automatique de manga par intelligence artificielle. Détection de texte, traduction contextuelle et génération de bulles. Projet innovant du Club IA ULaval."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="MangaAI, traduction manga, IA créative, traduction automatique, détection texte, OCR manga, génération bulles, anime AI, Club IA ULaval, machine learning, deep learning"
        />

        {/* Auteur */}
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="MangaAI - Traducteur Automatique de Manga par IA"
        />
        <meta
          property="og:description"
          content="Découvrez MangaAI, notre traducteur automatique de manga par intelligence artificielle avec détection de texte et traduction contextuelle."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/project/mangaai2.webp"
        />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/mangaai" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MangaAI - Traducteur Automatique de Manga par IA"
        />
        <meta
          name="twitter:description"
          content="Traducteur automatique de manga par intelligence artificielle avec détection de texte et traduction contextuelle."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/project/mangaai2.webp"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/mangaai" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "MangaAI - Traducteur Automatique de Manga",
              "url": "https://cia.ift.ulaval.ca/mangaai",
              "description": "Traducteur automatique de manga par intelligence artificielle avec détection de texte et traduction contextuelle",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web",
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
              "creator": [
                {
                  "@type": "Person",
                  "name": "Théophile Berteloot"
                },
                {
                  "@type": "Person", 
                  "name": "Loïc Baret"
                },
                {
                  "@type": "Person",
                  "name": "Xavier Legault"
                },
                {
                  "@type": "Person",
                  "name": "Louis-Jacob Lebel"
                },
                {
                  "@type": "Person",
                  "name": "John-William Lebel"
                }
              ],
              "featureList": [
                "Détection automatique de texte dans les mangas",
                "Traduction contextuelle multilingue",
                "Génération automatique de bulles de dialogue",
                "Interface temps réel",
                "Support multiple langues"
              ],
              "screenshot": "https://cia.ift.ulaval.ca/project/mangaai.webp",
              "image": "https://cia.ift.ulaval.ca/project/mangaai2.webp"
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
          {/* Hero section */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
                {t("mangaai.hero.subtitle")}
              </h2>
            </motion.div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1 md:py-2 bg-red-900/20 rounded-full !border !border-red-800"
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
              className="text-base md:text-xl text-gray-300 px-4 md:px-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("mangaai.hero.description")}
            </motion.p>
          </div>

          {/* Approach section */}
          <motion.section
            id="learn-more"
            className="mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              {t("mangaai.approach.title")}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="px-4 md:px-0 text-gray-300 text-base md:text-lg">
                <p className="mb-4 md:mb-6 text-sm md:text-base">
                  {t("mangaai.approach.paragraph1")}
                </p>
                <p className="text-sm md:text-base">
                  {t("mangaai.approach.paragraph2")}
                </p>
              </div>
              <div className="order-first lg:order-last">
                <ImageWithGlow
                  src="/project/manga109.webp"
                  alt={t("mangaai.images.manga109.alt")}
                  caption={t("mangaai.images.manga109.caption")}
                />
              </div>
            </div>
          </motion.section>

          {/* Process section */}
          <section className="mb-12 md:mb-16">
            <h4 className="text-xl md:text-2xl font-semibold mb-8 md:mb-10 text-center text-red-300">
              {t("mangaai.process.title")}
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-8 md:mb-12">
              <div className="px-4 md:px-0">
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

              <div className="flex justify-center lg:justify-end items-center">
                <motion.div
                  className="text-center mb-2 relative overflow-hidden rounded-xl w-full max-w-sm md:max-w-lg mx-auto"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.img
                    src="/project/mangaai.webp"
                    alt={t("mangaai.images.example.alt")}
                    className="w-full object-cover mx-auto rounded-xl shadow-xl border border-red-800/30"
                    style={{ aspectRatio: "4/3", maxHeight: "350px" }}
                    initial={{ y: 10, opacity: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                  <div className="text-xs text-gray-500 mt-2">
                    {t("mangaai.images.example.caption")}
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Future improvements section */}
          <section className="mb-12 md:mb-16">
            <div className="pt-6 md:pt-8 border-t border-red-800/20">
              <h4 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center text-red-300">
                {t("mangaai.future.title")}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-red-900/10 !border !border-red-800 hover:!border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-base md:text-lg font-semibold mb-2 text-red-500">
                    {t("mangaai.future.textResizing.title")}
                  </h5>
                  <p className="text-sm md:text-base text-gray-400">
                    {t("mangaai.future.textResizing.description")}
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-red-900/10 !border !border-red-800 hover:!border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-base md:text-lg font-semibold mb-2 text-red-500">
                    {t("mangaai.future.genderDetection.title")}
                  </h5>
                  <p className="text-sm md:text-base text-gray-400">
                    {t("mangaai.future.genderDetection.description")}
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-red-900/10 !border !border-red-800 hover:!border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-base md:text-lg font-semibold mb-2 text-red-500">
                    {t("mangaai.future.characterId.title")}
                  </h5>
                  <p className="text-sm md:text-base text-gray-400">
                    {t("mangaai.future.characterId.description")}
                  </p>
                </motion.div>

                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-red-900/10 !border !border-red-800 hover:!border-red-500/40 transition-colors"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h5 className="text-base md:text-lg font-semibold mb-2 text-red-500">
                    {t("mangaai.future.contextAware.title")}
                  </h5>
                  <p className="text-sm md:text-base text-gray-400">
                    {t("mangaai.future.contextAware.description")}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team section */}
          <section id="team" className="mb-12 md:mb-16 relative">
            {/* Background design elements */}
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

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-2 md:px-4">
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

          {/* Contact section placeholder */}
          <motion.section
            id="contact"
            className="pt-6 md:pt-8 pb-4 md:pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact content can be added here if needed */}
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}

export default MangaAI;
