import { motion } from "framer-motion";

function Gallery() {
  const formationImages = [
    {
      src: "/formation/tuto2.jpg",
      desc: "First CIA tutorial",
    },
  ];

  const competitionImages = [
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
  ];

  const projectImages = [
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
  ];

  const communityImages = [
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
      src: "/implication/second-image.png",
      desc: "",
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
  ];

  const renderImages = (
    images: { src: string; desc: string }[],
    title: string
  ) => (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold gradient-text mb-8 pt-12 sm:pt-20">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={`${title} image ${index + 1}`}
              className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-center p-2 text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.section
      className="container mx-auto p-4 text-center rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
          Gallery
        </span>
      </h1>
      {renderImages(formationImages, "Formations/Discussions")}
      {renderImages(competitionImages, "Competitions")}
      {renderImages(projectImages, "Projects")}
      {renderImages(communityImages, "Community Implications")}
    </motion.section>
  );
}

export default Gallery;
