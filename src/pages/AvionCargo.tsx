import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Camera,
  Crosshair,
  Navigation,
  Package,
  Eye,
  CheckCircle,
} from "lucide-react";

function AvionCargo() {
  const { t } = useTranslation();

  const pipelineIcons = [Camera, Eye, Crosshair, Navigation, Package];

  const pipeline = t("avionCargo.simple.pipelineSteps", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  const technologies = t("avionCargo.simple.technologies", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <Helmet>
        <title>{t("avionCargo.meta.title")}</title>
        <meta name="description" content={t("avionCargo.meta.description")} />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/avion-cargo" />
      </Helmet>

      <section className="relative overflow-hidden">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.section
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-red-600/30 text-red-400 text-sm font-medium rounded-full">
                    {t("avionCargo.simple.badge")}
                  </span>
                  <span className="px-3 py-1 bg-red-900/40 text-red-300 text-sm font-medium rounded-full flex items-center gap-1">
                    <Crosshair className="w-3 h-3" />
                    {t("avionCargo.simple.precisionBadge")}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                    {t("avionCargo.simple.title")}
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-4 font-medium leading-relaxed">
                  {t("avionCargo.simple.subtitle")}
                </p>
                <p className="text-gray-400 mb-3 text-justify leading-relaxed">
                  {t("avionCargo.simple.description1")}
                </p>
                <p className="text-gray-500 text-justify leading-relaxed">
                  {t("avionCargo.simple.description2")}
                </p>
              </div>

              <motion.div
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-red-500/20 rounded-3xl blur-3xl"
                  animate={{ opacity: [0.3, 0.55, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden !border !border-red-500/20 shadow-2xl shadow-red-900/30">
                  <img
                    src="/project/AvionCargo.jpg"
                    alt={t("avionCargo.simple.imageAlt")}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl !border !border-red-500/30 flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-red-400" />
                    <span className="text-white text-sm font-semibold">
                      {t("avionCargo.simple.imageBadge")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text gradient-text-red">
              {t("avionCargo.simple.technologiesTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-red-900/30 to-black/40 !border !border-red-700/30 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xl font-extrabold text-red-400">{tech}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text gradient-text-red">
              {t("avionCargo.simple.pipelineTitle")}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
              {t("avionCargo.simple.pipelineSubtitle")}
            </p>

            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {pipeline.map((item, index) => {
                  const Icon = pipelineIcons[index] ?? Camera;
                  return (
                    <motion.div
                      key={index}
                      className="relative flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-600/40 to-red-900/40 rounded-2xl flex items-center justify-center !border !border-red-500/40 shadow-lg shadow-red-900/20">
                          <Icon className="w-7 h-7 text-red-400" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-white font-bold mb-2 text-sm leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {item.description}
                      </p>
                      {index < pipeline.length - 1 && (
                        <div className="lg:hidden text-red-700/50 w-6 h-6 mt-3 self-center rotate-90" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl p-6 !border !border-red-900/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("avionCargo.simple.summaryTitle")}
              </h2>
              <ul className="space-y-3">
                {(
                  t("avionCargo.simple.summaryItems", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-400"
                  >
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}

export default AvionCargo;
