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

const team1 = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Deoth Guei",
    description: "Team Lead, feasability study, and much more",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Théophile Bertelot",
    description:
      "Jack of all trades: Helped with conception, research, development, deployment communication and more",
  },
  {
    icon: <UserRoundCog className="w-8 h-8" />,
    title: "Felix Ly",
    description:
      "Helped with software development, optimisation and validation",
  },
  {
    icon: <Rotate3d className="w-8 h-8" />,
    title: "Melek Sebri",
    description:
      "Helped with software development, optimisation and validation",
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
        <title>F1Tenth - AI-Controlled Miniature Race Car</title>
        <meta
          name="description"
          content="Discover F1Tenth, a student project combining AI and human muscle signals to control a miniature race car. Learn about the challenges and achievements of this innovative team."
        />
        <meta
          name="keywords"
          content="F1Tenth, AI, muscle signals, electromyographic bracelet, miniature race car, AI projects, student innovation"
        />
        <meta name="author" content="Dereck Bélanger" />
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
                      F1Tenth
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
                Team 1
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 px-4 md:px-6">
                {team1.map((value, index) => (
                  <motion.div
                    key={index}
                    className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-red-400 mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {value.description}
                    </p>
                  </motion.div>
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
                Team 2
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 px-4 md:px-6">
                {team2.map((value, index) => (
                  <motion.div
                    key={index}
                    className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-red-400 mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default F1Tenth;
