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

// Team data for the two groups
const team1 = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Deoth Guei",
    description: "Team Lead, feasibility study, and more",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Théophile Bertelot",
    description: "Helped with conception, research, development and more",
  },
  {
    icon: <UserRoundCog className="w-8 h-8" />,
    title: "Felix Ly",
    description:
      "Helped with software development, optimization, and validation",
  },
  {
    icon: <Rotate3d className="w-8 h-8" />,
    title: "Melek Sebri",
    description:
      "Helped with software development, optimization, and validation",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Amy Randianodiasan",
    description: "Integration with F1 Tenth and partnership",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Kahina Moulfi",
    description: "Partnership optimization and integration",
  },
];

const team2 = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Alban Sarrazin",
    description: "Team Lead",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Alexandre Laforest",
    description: "",
  },
  {
    icon: <UserRoundCog className="w-8 h-8" />,
    title: "Jade Piller Cammal",
    description: "",
  },
  {
    icon: <Rotate3d className="w-8 h-8" />,
    title: "Karima Habbout",
    description: "",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Simon Gouin",
    description: "",
  },
];

function F1Tenth() {
  return (
    <>
      <Head>
        <title>
          F1Tenth - AI-Controlled Miniature Race Car Using Muscle Signals
        </title>
        <meta
          name="description"
          content="Explore F1Tenth, a groundbreaking student project that combines AI and electromyographic muscle signals to control a miniature race car. Learn about the innovative team's challenges and achievements."
        />
        <meta
          name="keywords"
          content="F1Tenth, AI, muscle signals, electromyographic bracelet, miniature race car, AI projects, student innovation"
        />
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
              <div className="flex flex-col md:flex-row gap-6 sm:gap-12">
                <div className="md:w-1/2 md:order-2">
                  <img
                    src="/project/f1tenthcar.png"
                    alt="F1Tenth miniature race car controlled by AI and muscle signals"
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col text-justify">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                      F1Tenth - AI Meets Muscle Signals
                    </span>
                  </h1>
                  <p className="text-gray-400 mb-4 sm:mb-6">
                    Thrill-seeker? This project will capture your interest! F1
                    Tenth is a team of students passionate about AI who have
                    successfully combined human and machine. Using an
                    electromyographic bracelet, they managed to control a
                    miniature race car with their muscles. While the concept may
                    seem simple, months of work and research were necessary to
                    achieve this result. Not only did they need to understand
                    muscle electrical signals, but also translate them into
                    actions and, of course, minimize any latency.
                  </p>
                  <p className="text-gray-400">
                    To be more precise, the team had to train an AI model to
                    read muscle electrical signals and translate them into
                    actions. This involved extensive trial and error to adjust
                    the model's sensitivity and accuracy. The bracelet has
                    multiple sensors, each responsible for a different response
                    like accelerating, braking, or turning. The project was very
                    complex because it required controlling multiple dimensions
                    simultaneously.
                  </p>
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
                Meet Team 1
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
                Meet Team 2
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
                Special Thanks to Our Sponsor
              </h2>
              <div className="flex flex-col items-center">
                <img
                  src="/sponsors/vaul_logo.png"
                  alt="VAUL Logo"
                  className="w-40 h-auto mb-4"
                />
                <p className="text-gray-400 max-w-2xl">
                  We would like to extend our thanks to VAUL, the Laval
                  University autonomous vehicle laboratory, for allowing us to
                  use their equipment and for their support throughout this
                  project.
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
