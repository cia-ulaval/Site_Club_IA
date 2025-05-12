import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    desc: string;
  } | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const images = {
    formation: [
      {
        src: "/formation/tuto2.jpg",
        desc: "First CIA tutorial",
      },
    ],
    competition: [
      {
        src: "/competition/competition-1.jpg",
        desc: "Competition winners 2024",
      },
      {
        src: "/competition/competition-2.jpg",
        desc: "During competition",
      },
      {
        src: "/competition/competition-3.jpg",
        desc: "During competition 2",
      },
      {
        src: "/competition/competition-a2024-1.jpg",
        desc: "During competition 3",
      },
    ],
    project: [
      {
        src: "/project/club2024.png",
        desc: "First meeting for flapeeg project 2024",
      },
      {
        src: "/project/clubrencontre.png",
        desc: "Second meeting for flapeeg project 2024",
      },
      {
        src: "/project/f1tenth.jpg",
        desc: "F1Tenth meeting",
      },
      {
        src: "/project/f1tenthcar.png",
        desc: "F1Tenth car",
      },
      {
        src: "/project/flappycard.jpg",
        desc: "Flapeeg meeting winter 2025",
      },
    ],
    community: [
      {
        src: "/implication/filleclub.png",
        desc: "Women and AI club",
      },
      {
        src: "/implication/eeg-presentation.jpg",
        desc: "EEG presentation to students",
      },
      {
        src: "/implication/flappyeegmain.jpeg",
        desc: "Executive team with flapeeg project",
      },
      {
        src: "/implication/front-image.png",
        desc: "CIA presentation to students",
      },
      {
        src: "/implication/kalven-presenter.jpg",
        desc: "Outside presentation",
      },
      {
        src: "/implication/kiosque.jpg",
        desc: "CIA stand presentation",
      },
      {
        src: "/implication/kiosque.jpeg",
        desc: "CIA stand presentation 2",
      },
      {
        src: "/implication/presentation.png",
        desc: "CIA presentation to students 2",
      },
      {
        src: "/implication/rencontrecia.jpeg",
        desc: "CIA presentation to students 3",
      },
      {
        src: "/implication/table.jpeg",
        desc: "Executive team at presentation stand",
      },
      {
        src: "/implication/table2.jpeg",
        desc: "Executive team at presentation stand 2",
      },
      {
        src: "/implication/table3.jpeg",
        desc: "Executive team at presentation stand 3",
      },
      {
        src: "/implication/testclub.png",
        desc: "EEG signal demonstration",
      },
    ],
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "formation", label: "Formations/Discussions" },
    { id: "competition", label: "Competitions" },
    { id: "project", label: "Projects" },
    { id: "community", label: "Community Implications" },
  ];

  // Get all images for "All" category or filter by selected category
  const getDisplayImages = () => {
    if (activeCategory === "all") {
      return Object.entries(images).flatMap(([category, imgs]) =>
        imgs.map((img) => ({ ...img, category }))
      );
    }

    return images[activeCategory as keyof typeof images].map((img) => ({
      ...img,
      category: activeCategory,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Head>
        <title>
          Gallery - Explore EEG Projects, Competitions, and Community Events
        </title>
        <meta
          name="description"
          content="Explore our gallery showcasing EEG projects, competitions, and community events. Learn more about our journey in AI, EEG technology, and community impact."
        />
        <meta
          name="keywords"
          content="EEG, gallery, projects, competitions, community, AI, events, formations"
        />
        <meta name="author" content="Dereck Bélanger" />
        <link rel="canonical" href="https://cialaval.vercel.app/gallery" />
        <meta
          property="og:title"
          content="Gallery - EEG Projects and Competitions"
        />
        <meta
          property="og:description"
          content="Explore EEG projects, competitions, and community involvement in our dynamic gallery."
        />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta property="og:url" content="https://cialaval.vercel.app/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gallery - EEG Projects and Competitions"
        />
        <meta
          name="twitter:description"
          content="Discover the EEG gallery featuring projects, competitions, community involvement, and formation discussions."
        />
        <meta name="twitter:image" content="/banner/cia_ico.ico" />
      </Head>

      {/* Hero section with animated gradient background */}
      <motion.div
        className="w-full py-20 bg-gradient-to-r from-red-900/20 via-gray-900 to-red-900/20 bg-size-200 animate-gradient-x"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            EEG Gallery
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mt-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore our projects, competitions, and community involvement
        </motion.p>
      </motion.div>

      <motion.section
        className="container mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        role="main"
        aria-label="Gallery showcasing EEG projects, competitions, and community involvement"
      >
        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-5">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500/20"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-gray-600"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Image gallery */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {getDisplayImages().map((image: any, index: number) => (
            <motion.div
              key={`${image.category}-${index}`}
              className="group relative overflow-hidden rounded-2xl shadow-xl shadow-black/30 aspect-[3/2] backdrop-blur-sm backdrop-filter hover:shadow-red-900/20 hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.desc}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-red-600/80 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg transform translate-y-1 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {image.category === "formation"
                    ? "Formation"
                    : image.category === "competition"
                    ? "Competition"
                    : image.category === "project"
                    ? "Project"
                    : "Community"}
                </span>
              </div>

              {/* Image description */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">
                  {image.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Lightbox for enlarged image view */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-5xl w-full bg-gray-900/80 rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.desc}
              className="w-full h-auto object-contain max-h-[80vh]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-lg font-medium">
                {selectedImage.desc}
              </p>
            </div>

            <button
              className="absolute top-5 right-5 bg-black/50 hover:bg-red-700 text-white rounded-full p-3 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Gallery;
