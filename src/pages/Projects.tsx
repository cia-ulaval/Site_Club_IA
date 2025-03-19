import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FlapEEG",
    image: "/project/flappycard.jpg",
    description: "A mind controlled video game",
    link: "/flapeeg",
    github: "https://github.com/cia-ulaval/FlapEEG_interface_v1",
  },
  {
    title: "MangaAI",
    image: "/project/mangaai2.png",
    description: "Automatic manga translation and analysis",
    link: "/mangaai",
    github: "https://github.com/cia-ulaval/MangaAutoTranslator",
  },
  {
    title: "Lenia",
    image: "/project/lenia.png",
    description: "Autonomous cellular automata",
    link: "/lenia",
    github: "https://github.com/cia-ulaval/LENIA-frontend",
  },
  {
    title: "F1Tenth",
    image: "/project/f1tenthcar.png",
    description: "EMG racing with 1/10th scale F1 cars",
    link: "/f1tenth",
  },
  {
    title: "Decision Tree",
    image: "/project/decisiontree.jpg", // Added placeholder path
    description: "Research and development of decision trees",
    link: "/decisiontree",
  },
];

function Projects() {
  return (
    <motion.section
      className="overflow-hidden mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl font-extrabold text-white tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
              Projects
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the innovative projects our team is working on.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="container bg-red-900/20 rounded-xl overflow-hidden shadow-lg w-full max-w-sm transition-all duration-300">
                <div
                  className="w-full h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      project.image || "/project/placeholder.jpg"
                    })`,
                    backgroundSize: "cover",
                  }}
                />
                <div className="p-6 flex flex-col h-auto sm:h-48">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto sm:flex-row flex-col">
                    <Link
                      to={project.link}
                      className="px-4 py-2 text-sm text-white font-medium rounded-md bg-red-600 transition-all duration-300 hover:bg-red-500 flex items-center justify-center sm:flex-grow"
                    >
                      Learn More →
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm text-white font-medium rounded-md bg-gray-800 transition-all duration-300 hover:bg-gray-700 flex items-center justify-center sm:flex-grow"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
