import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import TeamMemberCard from "../components/TeamMemberCard";

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
            {/* Hero Section */}
            <motion.section
              className="mb-12 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col justify-center mt-6 md:mt-0">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                      Decision Tree
                    </span>
                  </h1>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-justify">
                    Decision trees are inherently interpretable as they provide
                    a simple explanation (based on decision rules) of their
                    decision-making process, making them essential tools for
                    data scientists.
                  </p>
                  <p className="text-gray-400 text-justify">
                    However, when dealing with massive datasets, training
                    algorithms can generate unnecessarily complex trees where
                    the decision-making process becomes obscured by an
                    overabundance of rules. Is it possible to find a
                    representative subset of the data that would produce simpler
                    yet equally effective decision trees? This is the question
                    we aim to answer in this research project.
                  </p>
                </div>
                <div>
                  <img
                    src="/project/decisiontree-hero.png"
                    alt="Decision Tree illustration"
                    className="rounded-xl shadow-2xl mt-4 sm:mt-8 w-full"
                  />
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
                Meet the Team Behind the Project
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
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default DecisionTree;
