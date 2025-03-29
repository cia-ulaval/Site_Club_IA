import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";

// Team members data
const teamMembers = [
  {
    icon: <TextCursorInput className="w-8 h-8" />,
    title: "Émylie-Rose Desmarais",
    description: "",
  },
  {
    icon: <SwatchBook className="w-8 h-8" />,
    title: "Benjamin Leblanc",
    description: "",
  },
  {
    icon: <Rss className="w-8 h-8" />,
    title: "Antoine Jean",
    description: "",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Tadagbé Dhossou",
    description: "",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Alamaoudata Walet",
    description: "",
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Mathieu Bazinet",
    description: "",
  },
];

// Motion variants for animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TeamSection = () => (
  <motion.section
    className="mb-20"
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
  >
    <h2 className="text-3xl font-bold gradient-text text-center mb-12">
      The Team
    </h2>
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border custom-border-red hover:border-red-500/50 transition-all duration-300 text-center group"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <div className="text-red-400 mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
            {member.icon}
          </div>
          <h3 className="text-base md:text-xl font-bold text-white mb-1">
            {member.title}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            {member.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

function DecisionTree() {
  return (
    <>
      <Head>
        <title>
          Decision Tree - Simplifying Complex Data for Better Insights
        </title>
        <meta
          name="description"
          content="Discover how decision trees simplify complex datasets while maintaining interpretability. Learn about our research project and the team behind it."
        />
        <meta
          name="keywords"
          content="Decision Tree, Data Science, Interpretability, Research, Simplified Models"
        />
        <meta name="author" content="Dereck Bélanger" />
        <link rel="canonical" href="https://cialaval.vercel.app/decisiontree" />
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
              className="mb-20"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <div className="text-center max-w-3xl mx-auto">
                <motion.h1
                  className="text-6xl font-bold gradient-text mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  Decision Tree Research Project
                </motion.h1>
                <motion.h2
                  id="test"
                  className="text-5xl font-bold gradient-text mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  Decision Tree
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-400 mb-16 text-justify mx-6"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  Decision trees are inherently interpretable as they provide a
                  simple explanation (based on decision rules) of their
                  decision-making process, making them essential tools for data
                  scientists. However, when dealing with massive datasets,
                  training algorithms can generate unnecessarily complex trees
                  where the decision-making process becomes obscured by an
                  overabundance of rules. Is it possible to find a
                  representative subset of the data that would produce simpler
                  yet equally effective decision trees? This is the question we
                  aim to answer in this research project.
                </motion.p>
                <TeamSection />
              </div>
            </motion.section>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default DecisionTree;
