import { motion } from "framer-motion";

function JoinUs() {
  return (
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
              Join Us
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Team
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
            Connect with us on Discord to stay updated and collaborate with the
            team.
          </p>
          <a
            href="https://discord.gg/ZPVwCjMpAq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Join Our Discord
          </a>
        </motion.div>

        {/* Application Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Apply for Roles
          </h3>
          <p className="text-lg text-gray-400 mb-6">
            Interested in becoming a Team Lead or Associate? Apply now to join
            our club and contribute to exciting projects.
          </p>
          <a
            href="" //ADD THE GOOGLE FORM LINK HERE
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Apply Here
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default JoinUs;
