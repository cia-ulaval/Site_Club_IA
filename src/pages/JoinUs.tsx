import { motion } from "framer-motion";
import Head from "next/head";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

function JoinUs() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("joinus.pageTitle")}</title>
        <meta name="description" content={t("joinus.pageDescription")} />
        <meta name="keywords" content={t("joinus.pageKeywords")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cialaval.vercel.app/join-us" />
      </Head>

      <section className="relative overflow-hidden pt-20">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                {t("joinus.heroTitle")}
              </span>
            </h1>
            <h2 className="text-4xl font-bold text-white mb-6">
              {t("joinus.heroSubtitle")}
            </h2>
          </motion.div>

          {/* Discord Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-400 mb-4">
              {t("joinus.discordText")}
            </p>
            <a
              href="https://discord.gg/ZPVwCjMpAq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-64 h-16 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300 text-center"
            >
              {t("joinus.discordButton")}
            </a>
          </motion.div>

          {/* Collaboration Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              {t("joinus.collabTitle")}
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              {t("joinus.collabText")}
            </p>
            <a
              href="/collaboration"
              className="inline-flex items-center justify-center w-64 h-16 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300 text-center"
            >
              {t("joinus.collabButton")}
            </a>
            {/* Contact Buttons Section */}
            <div className="flex justify-center gap-10 pt-16">
              <a
                href="https://www.linkedin.com/company/cia-ulaval/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-red-400 transition"
              >
                <Linkedin size={40} />
              </a>
              <a
                href="mailto:cia@ulaval.ca"
                aria-label="Email"
                className="text-gray-400 hover:text-red-400 transition"
              >
                <Mail size={40} />
              </a>
              <a
                href="https://www.instagram.com/ciaulaval/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-red-400 transition"
              >
                <Instagram size={40} />
              </a>
              <a
                href="https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-red-400 transition"
              >
                <Facebook size={40} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default JoinUs;
