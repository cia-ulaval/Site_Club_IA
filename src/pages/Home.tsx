import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const partners = [
    "/media/aesgul.png",
    "/media/asetin.png",
    "/media/avenirti.png",
    "/media/laval.png",
  ];

  const projects = [
    {
      title: "Brain Controlled Video Game",
      image: "/media/flappycard.jpg",
      description: "Group meeting for flappyeeg project",
      link: "/flappyeeg",
    },
    {
      title: "Muscle controlled race car",
      image: "/media/f1cover.png",
      description: "image representing the f1tenth device",
      link: "/f1tenth",
    },
    {
      title: "Manga automatic translator",
      image: "/media/mangaai2.png",
      description: "image representing the manga ai detection",
      link: "/mangaai",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold gradient-text mb-4">C.I.A.</h1>
        <p className="text-2xl text-gray-300">
          Welcome to the Club d'Intelligence Artificielle (CIA) of Laval
          University!
        </p>
      </header>

      <div className="hero-card mb-16">
        <div className="video-container mb-4">
          <video
            className="w-full h-full object-cover"
            src="/media/testvideo.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/media/test.jpg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors">
          <h2 className="text-2xl font-bold mb-4 gradient-text pl-4">
            About Us
          </h2>
          <p className="text-gray-400 text-lg text-justify p-3">
            The CIA is the artificial intelligence club of the Laval University.
            As the name suggests, we are a group of students interested in
            artificial intelligence and machine learning. Every year, we work on
            different projects that allow us to explore the field of AI and to
            learn new things. We are open to everyone, no matter your level of
            expertise. Keep scrolling to learn more about our projects and how
            to join us!
          </p>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="text-4xl font-bold gradient-text text-center mb-12">
          Some of our work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-red-400 hover:text-orange-800 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold gradient-text mb-8">
          Care to join us?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          We are looking for passionnate people who want to learn and share
          their knowledge with others. We are open to everyone, no matter your
          level of expertise. Apply now by joining our Discord server and
          getting in touch with one of the admins mentionned down below.
        </p>
        <a
          href="https://discord.gg/BWNbhNJNkR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-colors"
        >
          Join our Discord
        </a>
      </section>

      <section className="overflow-hidden mt-24">
        <h6 className="text-2xl text-gray-300 text-center mb-10">
          Our partners
        </h6>
        <div className="relative w-full">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-24 items-center"
              animate={{
                x: [0, -1035],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {partners.map((src, index) => (
                <img
                  key={`first-${index}`}
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              ))}
              {partners.map((src, index) => (
                <img
                  key={`second-${index}`}
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
