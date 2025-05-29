import { useState, useRef, useEffect } from "react";
import {
  Users,
  Lightbulb,
  Target,
  Rocket,
  Braces,
  Rotate3d,
  Radical,
} from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import TeamMemberCard from "../components/TeamMemberCard";
import { useTranslation } from "next-i18next";

function FlapEEG() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);

  const teamMembers = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Louis-Étienne Messier",
      description: t("team.members.louis.description"),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Jordan Mathieu",
      description: t("team.members.jordan.description"),
    },
    {
      icon: <Rotate3d className="w-8 h-8" />,
      title: "Dereck Bélanger",
      description: t("team.members.dereck.description"),
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Amen Ouannes",
      description: t("team.members.amen.description"),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estelle Tournassat",
      description: t("team.members.estelle.description"),
    },
    {
      icon: <Radical className="w-8 h-8" />,
      title: "Hedi Braham",
      description: t("team.members.hedi.description"),
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "William Blanchet Lafrenière",
      description: t("team.members.william.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="canonical" href="https://cialaval.vercel.app/flapeeg" />
        <meta name="keywords" content={t("meta.keywords")} />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={t("meta.og.title")} />
        <meta property="og:description" content={t("meta.og.description")} />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta property="og:url" content="https://cialaval.vercel.app/flapeeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.twitter.title")} />
        <meta
          name="twitter:description"
          content={t("meta.twitter.description")}
        />
        <meta name="twitter:image" content="/banner/cia_ico.ico" />
      </Head>

      <motion.div
        className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className="sr-only">{t("hero.title")}</h1>

          {/* Hero Section */}
          <motion.section
            className="mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="sr-only">{t("hero.subtitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <img
                  src="/implication/flappyeegmain.jpeg"
                  alt={t("hero.image.alt")}
                  className="rounded-xl shadow-2xl mt-4 sm:mt-8 w-full"
                />
              </div>
              <div className="flex flex-col justify-center mt-6 md:mt-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                    FlapEEG
                  </span>
                </h1>
                <p className="sr-only">{t("hero.description.sr")}</p>
                <p className="text-gray-400 mb-4 sm:mb-6 text-justify">
                  {t("hero.description.paragraph1")}
                </p>
                <p className="text-gray-400 text-justify">
                  {t("hero.description.paragraph2")}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-12 sm:mb-20 mt-12 sm:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text text-center mb-8 sm:mb-12">
              {t("team.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:px-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.07 * index, duration: 0.5 }}
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

          {/* Timeline Section */}
          <section id="Week1" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6 sm:mb-8 text-center">
              {t("timeline.beginning.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
              <div
                className="flex-1 bg-gradient-to-br from-black/40 to-red-900/10 rounded-2xl shadow-lg p-6"
                style={{ border: "2px solid #ef4444" }}
              >
                <div className="video-container relative rounded-xl overflow-hidden shadow-lg mb-4">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/project/flappyproto.mp4"
                    autoPlay
                    loop
                    playsInline
                    poster="/project/flappyproto-poster.jpg"
                    aria-label={t("timeline.beginning.video.ariaLabel")}
                  />
                </div>
                <div>
                  <span className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                    <Rocket className="w-6 h-6 text-red-400" />
                    {t("timeline.beginning.prototype.title")}
                  </span>
                  <p className="text-gray-400 leading-relaxed">
                    {t("timeline.beginning.prototype.description")}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex items-center gap-3 mb-2"></div>
                <p className="text-gray-400">
                  {t("timeline.beginning.description")}
                </p>
              </div>
            </div>
          </section>

          <section id="Week2-4" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6 text-center">
              {t("timeline.dataCollection.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-red-400" />
                  <span className="text-lg font-semibold text-white">
                    {t("timeline.dataCollection.subtitle")}
                  </span>
                </div>
                <p className="text-gray-400">
                  {t("timeline.dataCollection.paragraph1")}
                </p>
                <p className="text-gray-400 mt-4 sm:mt-6">
                  {t("timeline.dataCollection.paragraph2")}
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src="/project/FlappyBrain.png"
                  alt={t("timeline.dataCollection.image.alt")}
                  className="rounded-2xl shadow-2xl w-full max-w-lg"
                  style={{
                    border: "2px solid #ef4444",
                    boxShadow: "0 4px 20px rgba(255, 0, 0, 0.5)",
                  }}
                />
              </div>
            </div>
          </section>

          <section id="Week4-6" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6 text-center">
              {t("timeline.filtering.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
              <div
                className="flex-1 bg-gradient-to-br from-black/40 to-red-900/10 rounded-2xl shadow-lg p-6"
                style={{ border: "2px solid #ef4444" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Braces className="w-6 h-6 text-red-400" />
                  <span className="text-lg font-semibold text-white">
                    {t("timeline.filtering.subtitle")}
                  </span>
                </div>
                <p className="text-gray-400 pb-3 sm:pb-4">
                  {t("timeline.filtering.paragraph1")}
                </p>
                <p className="text-gray-400">
                  {t("timeline.filtering.paragraph2")}
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Radical className="w-24 h-24 text-red-500 opacity-30" />
              </div>
            </div>
          </section>

          <section id="Week6-9" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6 mt-12 sm:mt-20 text-center">
              {t("timeline.challenge.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
              <div className="flex-1 flex items-center">
                <Target className="w-10 h-10 text-red-400 mr-4" />
                <p className="text-gray-400 m-0">
                  {t("timeline.challenge.description")}
                </p>
              </div>
            </div>
          </section>

          <section id="project-status" className="mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 sm:mb-6 mt-12 sm:mt-20 text-center">
              {t("status.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div
                className="flex-1 bg-gradient-to-br from-black/40 to-red-900/10 rounded-2xl shadow-lg p-6"
                style={{ border: "2px solid #ef4444" }}
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2">
                  {t("status.current.title")}
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t("status.current.items.0")}</li>
                  <li>{t("status.current.items.1")}</li>
                  <li>{t("status.current.items.2")}</li>
                  <li>{t("status.current.items.3")}</li>
                </ul>
              </div>
              <div
                className="flex-1 bg-gradient-to-br from-black/40 to-red-900/10 rounded-2xl shadow-lg p-6"
                style={{ border: "2px solid #ef4444" }}
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2">
                  {t("status.next.title")}
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t("status.next.items.0")}</li>
                  <li>{t("status.next.items.1")}</li>
                  <li>{t("status.next.items.2")}</li>
                  <li>{t("status.next.items.3")}</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center pt-20">
              <Rocket className="w-12 h-12 text-red-400 mb-4" />
              <p className="text-lg text-gray-200 font-medium text-center">
                {t("status.conclusion.line1")}
                <br />
                {t("status.conclusion.line2")}
                <br />
                <span className="text-red-400 font-bold">
                  {t("status.conclusion.line3")}
                </span>
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
}

export default FlapEEG;
