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

// Sponsorship tiers with benefits
const sponsorshipTiers = [
  {
    name: "Bronze",
    price: "$500",
    color: "from-amber-700 to-amber-900",
    hoverColor: "from-amber-600 to-amber-800",
    icon: <Award className="w-8 h-8 text-amber-400" />,
    benefits: [
      "Logo on our website",
      "Monthly project updates",
      "Invitation to annual showcase",
    ],
  },
  {
    name: "Silver",
    price: "$1,500",
    color: "from-gray-400 to-gray-600",
    hoverColor: "from-gray-300 to-gray-500",
    icon: <Award className="w-8 h-8 text-gray-300" />,
    benefits: [
      "All Bronze benefits",
      "Social media recognition",
      "Access to student talent pool",
      "Early demos of projects",
    ],
  },
  {
    name: "Gold",
    price: "$5,000",
    color: "from-yellow-500 to-yellow-700",
    hoverColor: "from-yellow-400 to-yellow-600",
    icon: <Award className="w-8 h-8 text-yellow-300" />,
    benefits: ["All Silver benefits", "Project naming rights"],
  },
  {
    name: "Platinum",
    price: "$10,000+",
    color: "from-red-500 to-red-800",
    hoverColor: "from-red-400 to-red-700",
    icon: <Award className="w-8 h-8 text-red-300" />,
    benefits: ["All Gold benefits", "Board member status"],
  },
];

// Funded projects showcase
const fundedProjects = [
  {
    title: "MangaTranslator AI",
    description:
      "AI-powered manga translation system for real-time panel conversion.",
    progress: 85,
    image: "/project/mangaai.png",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "FlapEEG",
    description:
      "A video game controlled by brain signals using EEG technology.",
    progress: 60,
    image: "/project/voiceai.png",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: "F1Tenth",
    description:
      "F1 racing with 1/10th scale cars controlled by muscle signals.",
    progress: 60,
    image: "/project/visionai.png",
    icon: <Zap className="w-6 h-6" />,
  },
];

// Sponsor logos
const currentSponsors = [
  {
    name: "Université Laval",
    tier: "Platinum",
    logo: "/sponsors/.png",
  },
  {
    name: "AESGUL",
    tier: "Gold",
    logo: "/sponsors/.png",
  },
  {
    name: "ASETIN",
    tier: "Gold",
    logo: "/sponsors/.png",
  },
  {
    name: "MonAvenirTI",
    tier: "Gold",
    logo: "/sponsors/.png",
  },
  {
    name: "Kernelor",
    tier: "Bronze",
    logo: "/sponsors/.png",
  },
];

// Success metrics
const impactMetrics = [
  {
    metric: "6",
    label: "Projects Completed",
    icon: <Rocket className="w-8 h-8 text-red-400" />,
  },
  {
    metric: "35+",
    label: "Student Researchers",
    icon: <Users className="w-8 h-8 text-red-400" />,
  },
  {
    metric: "3",
    label: "Industry Partners",
    icon: <Briefcase className="w-8 h-8 text-red-400" />,
  },
  {
    metric: "2",
    label: "Published Papers",
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
}

const SponsorshipTier = ({ tier }: SponsorshipTierProps) => (
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
      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
      <div className="text-3xl font-bold text-white mb-4">{tier.price}</div>
    </div>

    <ul className="space-y-3 mb-8 flex-grow">
      {tier.benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-2">
          <BadgeCheck className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <span className="text-gray-300">{benefit}</span>
        </li>
      ))}
    </ul>

    <motion.button
      className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 rounded-lg text-white font-semibold transition-all duration-300 mt-auto"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      Become a {tier.name} Sponsor
    </motion.button>
  </motion.div>
);

interface ProjectProps {
  project: {
    title: string;
    description: string;
    progress: number;
    image: string;
    icon: JSX.Element;
  };
}

const ProjectCard = ({ project }: ProjectProps) => (
  <motion.div
    className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30 hover:border-red-500/50 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="mb-4 text-red-400 flex justify-center">{project.icon}</div>

    <h3 className="text-xl font-bold text-white mb-3 text-center">
      {project.title}
    </h3>
    <p className="text-gray-400 text-center mb-5">{project.description}</p>

    <div className="w-full bg-red-900/30 rounded-full h-2.5 mb-2">
      <div
        className="bg-gradient-to-r from-red-400 to-red-600 h-2.5 rounded-full"
        style={{ width: `${project.progress}%` }}
      ></div>
    </div>
    <div className="flex justify-between text-xs text-gray-400">
      <span>Progress</span>
      <span>{project.progress}%</span>
    </div>
  </motion.div>
);

interface MetricProps {
  metric: {
    metric: string;
    label: string;
    icon: JSX.Element;
  };
}

const MetricCard = ({ metric }: MetricProps) => (
  <motion.div
    className="p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30 text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="flex justify-center mb-4">{metric.icon}</div>
    <h3 className="text-3xl font-bold text-white mb-1">{metric.metric}</h3>
    <p className="text-gray-400">{metric.label}</p>
  </motion.div>
);

interface Sponsor {
  name: string;
  tier: string;
  logo: string;
}

const CurrentSponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <motion.div
    className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
  >
    <div className="text-white text-lg font-semibold">{sponsor.name}</div>
    {/* Placeholder for actual logo */}
    <div className="text-xs text-red-400 mt-2">{sponsor.tier}</div>
  </motion.div>
);

const ContactForm = () => (
  <motion.div
    className="p-8 rounded-xl bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-800/30"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-white mb-6 text-center">
      Get in Touch
    </h3>

    <div className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 bg-red-900/20 border border-red-800/30 rounded-lg focus:border-red-500 focus:outline-none text-white"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 bg-red-900/20 border border-red-800/30 rounded-lg focus:border-red-500 focus:outline-none text-white"
      />
      <input
        type="text"
        placeholder="Company"
        className="w-full p-3 bg-red-900/20 border border-red-800/30 rounded-lg focus:border-red-500 focus:outline-none text-white"
      />
      <textarea
        placeholder="How would you like to support our projects?"
        className="w-full p-3 bg-red-900/20 border border-red-800/30 rounded-lg focus:border-red-500 focus:outline-none text-white h-32"
      ></textarea>
    </div>

    <motion.button
      className="w-full py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 rounded-lg text-white font-semibold"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Send Message
    </motion.button>
  </motion.div>
);

function SponsorshipPage() {
  return (
    <section className="relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-96 right-20 w-80 h-80 bg-red-800/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              Become a Sponsor
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-white mb-6">
            Invest in the Future of AI Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our mission to push the boundaries of AI technology. Your
            sponsorship fuels cutting-edge research, empowers student
            innovators, and creates solutions that transform industries.
          </p>
        </motion.div>

        {/* Impact metrics */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
            Our Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>
        </motion.div>

        {/* Sponsorship tiers */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
            Sponsorship Tiers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <SponsorshipTier key={index} tier={tier} />
            ))}
          </div>
        </motion.div>

        {/* Funded projects */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
            Projects You'll Fund
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Current sponsors */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
            Our Current Sponsors
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 px-4 md:px-6">
            {currentSponsors.map((sponsor, index) => (
              <CurrentSponsorLogo key={index} sponsor={sponsor} />
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-500">
              Ready to Partner?
            </h3>
            <p className="text-gray-300 mb-6">
              Join forward-thinking organizations that are shaping the future of
              artificial intelligence. Our partnerships provide more than just
              exposure – they offer direct access to cutting-edge research,
              talented students, and innovative solutions.
            </p>
            <p className="text-gray-300 mb-6">
              Custom sponsorship packages are available for organizations with
              specific research interests or collaboration goals. Let's discuss
              how we can create value together.
            </p>
            <div className="flex items-center gap-4 text-red-400">
              <CreditCard className="w-6 h-6" />
              <span className="text-white">
                Flexible payment options available
              </span>
            </div>
          </div>

          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SponsorshipPage;
