import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  Plane,
  Target,
  Zap,
  Rocket,
  Trophy,
  Clock,
  AlertCircle,
  Cpu,
  Radio,
  Box,
  Eye,
  Gamepad2,
  CheckCircle,
  Lightbulb,
  Crosshair,
  Users,
  ArrowRight,
} from "lucide-react";
function DroneLaserTag() {
  const { t } = useTranslation();
  const roles = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: t("drone.roles.gel.title"),
      count: t("drone.roles.gel.count"),
      description: t("drone.roles.gel.description"),
      skills: t("drone.roles.gel.skills", { returnObjects: true }) as string[],
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: t("drone.roles.simulation.title"),
      count: t("drone.roles.simulation.count"),
      description: t("drone.roles.simulation.description"),
      skills: t("drone.roles.simulation.skills", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t("drone.roles.ai.title"),
      count: t("drone.roles.ai.count"),
      description: t("drone.roles.ai.description"),
      skills: t("drone.roles.ai.skills", { returnObjects: true }) as string[],
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t("drone.roles.pilots.title"),
      count: t("drone.roles.pilots.count"),
      description: t("drone.roles.pilots.description"),
      skills: t("drone.roles.pilots.skills", {
        returnObjects: true,
      }) as string[],
    },
  ];
  const droneObjectives = t("drone.objectives.drone.items", {
    returnObjects: true,
  }) as string[];
  const aiObjectives = t("drone.objectives.ai.items", {
    returnObjects: true,
  }) as string[];
  const deliverables = t("drone.objectives.deliverables.items", {
    returnObjects: true,
  }) as string[];
  const commitments = t("drone.commitment.items", {
    returnObjects: true,
  }) as string[];
  const benefits = t("drone.benefits.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  return (
    <>
      <Helmet>
        <title>
          Drone Laser Tag - Compétition Drones Autonomes | Club IA ULaval
        </title>
        <meta
          name="description"
          content="Compétition de drones autonomes en laser tag. Conception, IA embarquée, Reinforcement Learning, Isaac Sim. Affrontez les meilleures universités du Québec!"
        />
        <meta
          name="keywords"
          content="drone, laser tag, IA embarquée, reinforcement learning, Isaac Sim, FPV, computer vision, SLAM, robotique, compétition"
        />
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />
        <meta
          property="og:title"
          content="Drone Laser Tag - Compétition Drones Autonomes"
        />
        <meta
          property="og:description"
          content="Projet compétitif de drones autonomes. Conception hardware, IA embarquée et pilotage autonome pour gagner la compétition laser tag!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Drone Laser Tag - Compétition Drones Autonomes"
        />
        <meta
          name="twitter:description"
          content="Affrontez les meilleures universités dans une compétition de drones autonomes!"
        />
        <html lang="fr" />
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "Event", "name": "Compétition de Drone Laser Tag", "description": "Compétition universitaire de drones autonomes avec IA embarquée et laser tag", "organizer": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca" }, "performer": { "@type": "Person", "name": "Anthony Lavertu", "jobTitle": "Team Lead" }, "sponsor": [ { "@type": "Person", "name": "Philippe Giguère" }, { "@type": "Organization", "name": "Tracel AI" } ], "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "eventStatus": "https://schema.org/EventScheduled", "keywords": ["drone", "IA", "reinforcement learning", "robotique", "compétition"] } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div
          className="theme-content-shell theme-surface-primary shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="relative mb-20">
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
                    <Trophy className="w-4 h-4 theme-text-accent" />
                    <span className="text-primary-300 text-sm font-semibold">
                      Compétition Universitaire
                    </span>
                  </div>
                  <h1 className="text-6xl md:text-7xl font-bold mb-6">
                    <span className="theme-text-gradient">
                      Drone <br /> Laser Tag
                    </span>
                  </h1>
                  <p className="text-xl theme-text-muted mb-4 leading-relaxed">
                    {t("drone.hero.paragraph1")}
                  </p>
                  <p className="text-neutral-500 leading-relaxed">
                    {t("drone.hero.paragraph2")}
                  </p>
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary-500/20 via-primary-500/10 to-transparent rounded-3xl flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <Plane className="w-48 h-48 theme-text-accent relative z-10" />
                    <div className="absolute top-8 right-8 w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <Crosshair className="w-8 h-8 theme-text-accent" />
                    </div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center rotate-12">
                      <Target className="w-10 h-10 theme-text-accent" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mb-20 p-6 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <Users className="w-8 h-8 theme-text-accent mx-auto mb-2" />
                <p className="theme-text-secondary font-medium">
                  {t("drone.team.lead")}
                </p>
              </div>
              <div className="h-12 w-px bg-primary-500/30" />
              <div className="text-center">
                <Lightbulb className="w-8 h-8 theme-text-accent mx-auto mb-2" />
                <p className="theme-text-secondary font-medium">
                  {t("drone.team.partner")}
                </p>
              </div>
              <div className="h-12 w-px bg-primary-500/30" />
              <div className="text-center">
                <Trophy className="w-8 h-8 theme-text-accent mx-auto mb-2" />
                <p className="text-primary-300 font-bold text-lg">
                  {t("drone.team.size")}
                </p>
              </div>
            </motion.div>
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 theme-text-gradient">
                {t("drone.objectives.title")}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="lg:col-span-1 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <Plane className="w-6 h-6 theme-text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-accent-300">
                      {t("drone.objectives.drone.title")}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {droneObjectives.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 theme-text-muted"
                      >
                        <CheckCircle className="w-5 h-5 theme-text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="lg:col-span-1 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 theme-text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-accent-300">
                      {t("drone.objectives.ai.title")}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {aiObjectives.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 theme-text-muted"
                      >
                        <CheckCircle className="w-5 h-5 theme-text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="lg:col-span-1 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 theme-text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-accent-300">
                      {t("drone.objectives.deliverables.title")}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {deliverables.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 theme-text-muted"
                      >
                        <Zap className="w-5 h-5 theme-text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 theme-text-gradient">
                {t("drone.roles.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role, index) => {
                  const iconMap = [Radio, Box, Eye, Gamepad2];
                  const Icon = iconMap[index];
                  return (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-900/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-base/60 backdrop-blur-sm rounded-3xl p-6 h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-7 h-7 theme-text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-accent-300 mb-1">
                              {role.title}
                            </h3>
                            <span className="text-primary-300 text-sm font-semibold">
                              {role.count}
                            </span>
                          </div>
                        </div>
                        <p className="theme-text-muted text-sm mb-4">
                          {role.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <motion.div
              className="mb-20 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-500/20 to-primary-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-base/80 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <AlertCircle className="w-10 h-10 theme-text-accent" />
                  <h2 className="text-3xl font-bold text-accent-300">
                    {t("drone.commitment.title")}
                  </h2>
                </div>
                <p className="theme-text-secondary mb-6 text-lg">
                  {t("drone.commitment.subtitle")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {commitments.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-primary-500/5 rounded-xl border theme-border-accent-important"
                    >
                      <Clock className="w-6 h-6 theme-text-accent flex-shrink-0 mt-0.5" />
                      <span className="theme-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 theme-text-gradient">
                {t("drone.benefits.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const icons = [Lightbulb, Trophy, Zap];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="text-center group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-900/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-10 h-10 theme-text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-accent-300 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="theme-text-muted">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-12 h-12 theme-text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent-300 mb-2">
                {t("drone.cta.title")}
              </h3>
              <p className="theme-text-muted mb-2">{t("drone.cta.subtitle")}</p>
              <p className="text-primary-300 font-semibold mb-8">
                {t("drone.cta.description")}
              </p>
              <motion.a
                href="https://discord.gg/ZPVwCjMpAq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-500 hover:from-primary-300 hover:to-primary-300 text-base-inverse font-semibold rounded-2xl shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                {t("drone.cta.button")} <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default DroneLaserTag;
