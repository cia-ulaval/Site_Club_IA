import {
  CreditCard,
  Rocket,
  Award,
  Users,
  MessageCircle,
  GraduationCap,
  Briefcase,
  BadgeCheck,
  Zap,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

// Sponsorship tiers with benefits
const sponsorshipTiers = [
  {
    name: "Bronze",
    price: "$1,500",
    color: "from-amber-700 to-amber-900",
    hoverColor: "from-amber-600 to-amber-800",
    icon: <Award className="w-8 h-8 text-amber-400" />,
    benefits: [
      "Your logo and link on our website",
      "Your logo presented at our events",
      "Your logo on our t-shirts",
      "Special thanks on our social media",
      "Distribution of your promotional materials",
    ],
  },
  {
    name: "Silver",
    price: "$3,500",
    color: "from-gray-400 to-gray-600",
    hoverColor: "from-gray-300 to-gray-500",
    icon: <Award className="w-8 h-8 text-gray-300" />,
    benefits: [
      "All Bronze benefits",
      "Invitation to our opening events",
      "Repost of two ads",
    ],
  },
  {
    name: "Gold",
    price: "$5,000",
    color: "from-yellow-500 to-yellow-700",
    hoverColor: "from-yellow-400 to-yellow-600",
    icon: <Award className="w-8 h-8 text-yellow-300" />,
    benefits: [
      "All Silver benefits",
      "Sponsorship for one of our projects",
      "Access to our members CV book",
      "Your logo on our projects",
    ],
  },
];

// Funded projects showcase
const fundedProjects = [
  {
    title: "MangaTranslator AI",
    description:
      "AI-powered manga translation system for real-time panel conversion.",
    progress: 85,
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "FlapEEG",
    description:
      "A video game controlled by brain signals using EEG technology.",
    progress: 60,
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: "F1Tenth",
    description:
      "F1 racing with 1/10th scale cars controlled by muscle signals.",
    progress: 60,
    icon: <Zap className="w-6 h-6" />,
  },
];

// Sponsor logos
const currentSponsors = [
  {
    name: "Université Laval",
    tier: "Gold",
    //logo: "/sponsors/.webp",
    //logo can be added if we want
  },
  {
    name: "AESGUL",
    tier: "Gold",
  },
  {
    name: "ASETIN",
    tier: "Gold",
  },
  {
    name: "MonAvenirTI",
    tier: "Gold",
  },
  {
    name: "Kernelor",
    tier: "Bronze",
  },
  {
    name: "Sifi Labs",
    tier: "Silver",
  },
];

// Success metrics
const impactMetrics = [
  {
    metric: "3",
    labelKey: "projectsCompleted",
    icon: <Rocket className="w-8 h-8 text-red-400" />,
  },
  {
    metric: "30+",
    labelKey: "studentResearchers",
    icon: <Users className="w-8 h-8 text-red-400" />,
  },
  {
    metric: "6",
    labelKey: "industryPartners",
    icon: <Briefcase className="w-8 h-8 text-red-400" />,
  },
  {
    metric: "2",
    labelKey: "publishedPapers",
    icon: <GraduationCap className="w-8 h-8 text-red-400" />,
  },
];

interface SponsorshipTierProps {
  tier: {
    name: string;
    price: string;
    color: string;
    hoverColor: string;
    icon: JSX.Element;
    benefits: string[];
  };
  onBecomePartner?: () => void;
}

const SponsorshipTier = ({ tier, onBecomePartner }: SponsorshipTierProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={`p-6 rounded-xl bg-gradient-to-br ${tier.color} border-2 border-red-800/30 hover:border-red-400/70 transition-all duration-300 flex flex-col h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -5,
        backgroundImage: `linear-gradient(to bottom right, ${tier.hoverColor})`,
        transition: { duration: 0.2 },
      }}
    >
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">{tier.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {t(`collaborationPage.sponsorshipTiersNames.${tier.name}`)}
        </h3>
        <div className="text-3xl font-bold text-white mb-4">{tier.price}</div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {tier.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <BadgeCheck className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">
              {t(`collaborationPage.tierBenefits.${benefit}`, benefit)}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 rounded-lg text-white font-semibold transition-all duration-300 mt-auto"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onBecomePartner}
      >
        {t("collaborationPage.becomeSponsorButton", {
          tier: t(
            `collaborationPage.sponsorshipTiersNames.${tier.name}`,
            tier.name
          ),
        })}
      </motion.button>
    </motion.div>
  );
};

interface ProjectProps {
  project: {
    title: string;
    description: string;
    progress: number;
    icon: JSX.Element;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border !border-red-500 hover:border-red-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-4 text-red-400 flex justify-center">
        {project.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 text-center">
        {t(`collaborationPage.fundedProjects.${project.title}`)}
      </h3>
      <p className="text-gray-400 text-center mb-5">
        {t(
          `collaborationPage.fundedProjectsDescriptions.${project.title}`,
          project.description
        )}
      </p>

      <div className="w-full bg-red-900/30 rounded-full h-2.5 mb-2">
        <div
          className="bg-gradient-to-r from-red-400 to-red-600 h-2.5 rounded-full"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{t("collaborationPage.progress")}</span>
        <span>{project.progress}%</span>
      </div>
    </motion.div>
  );
};

const MetricCard = ({ metric }: { metric: (typeof impactMetrics)[0] }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border !border-red-500 text-center transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex justify-center mb-4">{metric.icon}</div>
      <h3 className="text-3xl font-bold text-white mb-1">{metric.metric}</h3>
      <p className="text-gray-400">
        {t(`collaborationPage.impactMetrics.${metric.labelKey}`)}
      </p>
    </motion.div>
  );
};

interface Sponsor {
  name: string;
  tier: string;
}

const CurrentSponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <motion.div
    className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
  >
    <div className="text-white text-lg font-semibold">{sponsor.name}</div>
    <div className="text-xs text-red-400 mt-2">{sponsor.tier}</div>
  </motion.div>
);

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="p-8 rounded-xl bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-800/70 !border-red-500 transition-all duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {t("collaborationPage.contactTitle")}
      </h3>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder={t("collaborationPage.contactName")}
          className="w-full p-3 bg-red-900/20 border !border-red-500 rounded-lg focus:border-red-500 focus:outline-none text-white"
        />
        <input
          type="email"
          placeholder={t("collaborationPage.contactEmail")}
          className="w-full p-3 bg-red-900/20 border !border-red-500 rounded-lg focus:border-red-500 focus:outline-none text-white"
        />
        <input
          type="text"
          placeholder={t("collaborationPage.contactCompany")}
          className="w-full p-3 bg-red-900/20 border !border-red-500 rounded-lg focus:border-red-500 focus:outline-none text-white"
        />
        <textarea
          placeholder={t("collaborationPage.contactMessage")}
          className="w-full p-3 bg-red-900/20 border !border-red-500 rounded-lg focus:border-red-500 focus:outline-none text-white h-32"
        ></textarea>
      </div>

      <motion.button
        className="w-full py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 rounded-lg text-white font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t("collaborationPage.contactButton")}
      </motion.button>
    </motion.div>
  );
};

function Collaboration() {
  const { t } = useTranslation();
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>
          Partenariats et Sponsoring - Club Intelligence Artificielle Université
          Laval | CIA ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants d'intelligence artificielle. Offres Bronze, Silver, Gold. Visibilité, networking et accès aux talents IA."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="sponsoring IA, partenariat Club IA, collaboration entreprise, financement projets IA, sponsoring étudiant, Bronze Silver Gold, networking IA, talents IA, Université Laval, recherche IA"
        />

        {/* Auteur */}
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval"
        />
        <meta
          property="og:description"
          content="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants et accédez aux meilleurs talents en intelligence artificielle."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp"
        />
        <meta
          property="og:url"
          content="https://cia.ift.ulaval.ca/collaboration"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval"
        />
        <meta
          name="twitter:description"
          content="Devenez partenaire du Club IA ULaval ! Sponsorisez nos projets innovants et accédez aux talents IA."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/collaboration" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Partenariats et Sponsoring - Club Intelligence Artificielle Université Laval",
              "url": "https://cia.ift.ulaval.ca/collaboration",
              "description": "Page de partenariats et sponsoring du Club IA ULaval avec offres Bronze, Silver, Gold",
              "mainEntity": {
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
                ],
                "seeks": {
                  "@type": "Partnership",
                  "name": "Sponsoring et Partenariats IA",
                  "description": "Recherche de partenaires pour financer et soutenir nos projets d'intelligence artificielle"
                },
                "sponsor": [
                  {
                    "@type": "Organization",
                    "name": "Université Laval",
                    "category": "Platinum"
                  },
                  {
                    "@type": "Organization",
                    "name": "AESGUL",
                    "category": "Gold"
                  },
                  {
                    "@type": "Organization",
                    "name": "ASETIN", 
                    "category": "Gold"
                  },
                  {
                    "@type": "Organization",
                    "name": "MonAvenirTI",
                    "category": "Gold"
                  },
                  {
                    "@type": "Organization",
                    "name": "Kernelor",
                    "category": "Bronze"
                  }
                ]
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Sponsoring Bronze",
                  "price": "1500",
                  "priceCurrency": "CAD",
                  "description": "Logo sur site web, événements, t-shirts, réseaux sociaux",
                  "category": "Sponsorship"
                },
                {
                  "@type": "Offer",
                  "name": "Sponsoring Silver",
                  "price": "2500",
                  "priceCurrency": "CAD",
                  "description": "Avantages Bronze + invitations événements + promotion ads",
                  "category": "Sponsorship"
                },
                {
                  "@type": "Offer",
                  "name": "Sponsoring Gold",
                  "price": "3500",
                  "priceCurrency": "CAD",
                  "description": "Avantages Silver + sponsoring projet + CV book + logo projets",
                  "category": "Sponsorship"
                }
              ],
              "potentialAction": {
                "@type": "ContactAction",
                "target": "https://cia.ift.ulaval.ca/collaboration#contact",
                "name": "Devenir Partenaire"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Intelligence Artificielle"
                },
                {
                  "@type": "Thing",
                  "name": "Projets Étudiants"
                },
                {
                  "@type": "Thing",
                  "name": "Recherche et Développement"
                },
                {
                  "@type": "Thing",
                  "name": "Partenariats Industriels"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <section className="relative overflow-hidden">
        <h1 className="sr-only">
          {t("collaborationPage.mainTitle")} | Support AI Research
        </h1>
        <div
          className="absolute top-40 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-96 right-20 w-80 h-80 bg-red-800/10 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        ></div>

        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Hero Section - Changé animate en whileInView */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
                {t("collaborationPage.mainTitle")}
              </span>
            </h2>
            <h2 className="text-3xl font-bold text-white mb-6">
              {t("collaborationPage.subtitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("collaborationPage.intro")}
            </p>
          </motion.div>

          {/* Impact Metrics Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              {t("collaborationPage.impactTitle")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </div>
          </motion.div>

          {/* Sponsorship Tiers Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              {t("collaborationPage.tiersTitle")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sponsorshipTiers.map((tier, index) => (
                <SponsorshipTier
                  key={index}
                  tier={tier}
                  onBecomePartner={scrollToContact}
                />
              ))}
            </div>
          </motion.div>

          {/* Funded Projects Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              {t("collaborationPage.projectsTitle")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fundedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </motion.div>

          {/* Current Sponsors Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              {t("collaborationPage.currentSponsorsTitle")}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 px-4 md:px-6">
              {currentSponsors.map((sponsor, index) => (
                <CurrentSponsorLogo key={index} sponsor={sponsor} />
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
                {t("collaborationPage.readyTitle")}
              </h3>
              <p className="text-gray-300 mb-6">
                {t("collaborationPage.readyText1")}
              </p>
              <p className="text-gray-300 mb-6">
                {t("collaborationPage.readyText2")}
              </p>
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-red-400" />
                <span className="text-white">
                  {t("collaborationPage.flexiblePayment")}
                </span>
              </div>
            </div>

            <div ref={contactRef}>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Collaboration;
