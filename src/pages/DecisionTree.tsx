import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";
import { motion } from "framer-motion";

// Team members data
const teamMembers = [
  {
    icon: <TextCursorInput className="w-8 h-8" />,
    title: "Émylie-Rose Desmarais",
    description: "", // Add description
  },
  {
    icon: <SwatchBook className="w-8 h-8" />,
    title: "Benjamin Leblanc",
    description: "", // Add description
  },
  {
    icon: <Rss className="w-8 h-8" />,
    title: "Antoine Jean",
    description: "", // Add description
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
      className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-6"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <div className="text-red-400 mb-4 flex justify-center">
            {member.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{member.title}</h3>
          <p className="text-gray-400">{member.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

function DecisionTree() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="container w-3/4 mx-auto px-6 py-12 rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
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
                overabundance of rules. Is it possible to find a representative
                subset of the data that would produce simpler yet equally
                effective decision trees? This is the question we aim to answer
                in this research project.
              </motion.p>
              <TeamSection />
            </div>
          </motion.section>
        </div>
      </motion.div>
    </section>
  );
}

export default DecisionTree;
