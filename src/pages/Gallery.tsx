import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Gallery() {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    desc: string;
  } | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const images = {
    formation: [
      {
        src: "/formation/tuto2.webp",
        descKey: "gallery.images.formation.tuto2",
      },
    ],
    competition: [
      {
        src: "/competition/competition-1.webp",
        descKey: "gallery.images.competition.competition1",
      },
      {
        src: "/competition/competition-2.webp",
        descKey: "gallery.images.competition.competition2",
      },
      {
        src: "/competition/competition-3.webp",
        descKey: "gallery.images.competition.competition3",
      },
      {
        src: "/competition/competition-a2024-1.webp",
        descKey: "gallery.images.competition.competitionA2024",
      },
    ],
    project: [
      {
        src: "/project/club2024.webp",
        descKey: "gallery.images.project.club2024",
      },
      {
        src: "/project/clubrencontre.webp",
        descKey: "gallery.images.project.clubrencontre",
      },
      {
        src: "/project/f1tenth.webp",
        descKey: "gallery.images.project.f1tenth",
      },
      {
        src: "/project/f1tenthcar.webp",
        descKey: "gallery.images.project.f1tenthcar",
      },
      {
        src: "/project/flappycard.jpg",
        descKey: "gallery.images.project.flappycard",
      },
    ],
    community: [
      {
        src: "/implication/filleclub.webp",
        descKey: "gallery.images.community.filleclub",
      },
      {
        src: "/implication/eeg-presentation.webp",
        descKey: "gallery.images.community.eegPresentation",
      },
      {
        src: "/implication/flappyeegmain.webp",
        descKey: "gallery.images.community.flappyeegmain",
      },
      {
        src: "/implication/front-image.webp",
        descKey: "gallery.images.community.frontImage",
      },
      {
        src: "/implication/kalven-presenter.webp",
        descKey: "gallery.images.community.kalvenPresenter",
      },
      {
        src: "/implication/kiosque.webp",
        descKey: "gallery.images.community.kiosque",
      },
      {
        src: "/implication/kiosque.webp",
        descKey: "gallery.images.community.kiosque2",
      },
      {
        src: "/implication/presentation.webp",
        descKey: "gallery.images.community.presentation",
      },
      {
        src: "/implication/rencontrecia.jpeg",
        descKey: "gallery.images.community.rencontrecia",
      },
      {
        src: "/implication/table.webp",
        descKey: "gallery.images.community.table",
      },
      {
        src: "/implication/table2.webp",
        descKey: "gallery.images.community.table2",
      },
      {
        src: "/implication/table3.webp",
        descKey: "gallery.images.community.table3",
      },
      {
        src: "/implication/testclub.webp",
        descKey: "gallery.images.community.testclub",
      },
    ],
  };

  const categories = [
    { id: "all", labelKey: "gallery.categories.all" },
    { id: "formation", labelKey: "gallery.categories.formation" },
    { id: "competition", labelKey: "gallery.categories.competition" },
    { id: "project", labelKey: "gallery.categories.project" },
    { id: "community", labelKey: "gallery.categories.community" },
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
      <Helmet>
        {/* Titre */}
        <title>
          Galerie Photos - Club Intelligence Artificielle Université Laval | CIA
          ULaval
        </title>
        {/* Description */}
        <meta
          name="description"
          content="Découvrez la galerie photos du Club IA ULaval : projets EEG, compétitions, formations, événements communautaires et moments marquants de notre club d'intelligence artificielle."
        />

        {/* Mots-clés */}
        <meta
          name="keywords"
          content="galerie Club IA, photos CIA ULaval, projets EEG, compétitions IA, formations machine learning, événements club IA, FlappyBrain photos, F1Tenth images, communauté IA Université Laval"
        />

        {/* Auteur */}
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Galerie Photos - Club Intelligence Artificielle Université Laval"
        />
        <meta
          property="og:description"
          content="Découvrez notre galerie photos : projets EEG, compétitions, formations et moments marquants du Club IA ULaval."
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/implication/front-image.webp"
        />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Galerie Photos - Club Intelligence Artificielle Université Laval"
        />
        <meta
          name="twitter:description"
          content="Découvrez notre galerie : projets EEG, compétitions et événements du Club IA ULaval."
        />
        <meta
          name="twitter:image"
          content="https://cia.ift.ulaval.ca/implication/front-image.webp"
        />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/gallery" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "Galerie Photos - Club Intelligence Artificielle Université Laval",
              "url": "https://cia.ift.ulaval.ca/gallery",
              "description": "Galerie photos du Club IA ULaval présentant nos projets, compétitions, formations et événements communautaires",
              "creator": {
                "@type": "Organization",
                "name": "Club Intelligence Artificielle - Université Laval",
                "url": "https://cia.ift.ulaval.ca",
                "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp",
                "description": "Club étudiant d'intelligence artificielle de l'Université Laval",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Québec, Canada"
                },
                "parentOrganization": {
                  "@type": "EducationalOrganization",
                  "name": "Université Laval"
                },
                "sameAs": [
                  "https://www.instagram.com/ciaulaval/",
                  "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all",
                  "https://github.com/cia-ulaval",
                  "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                ]
              },
              "mainEntity": [
                {
                  "@type": "ImageObject",
                  "name": "Projets EEG et FlappyBrain",
                  "url": "https://cia.ift.ulaval.ca/implication/flappyeegmain.webp",
                  "description": "Démonstration du projet FlappyBrain contrôlé par EEG"
                },
                {
                  "@type": "ImageObject",
                  "name": "Compétitions d'intelligence artificielle",
                  "url": "https://cia.ift.ulaval.ca/competition/competition-a2024webp",
                  "description": "Participation aux compétitions IA automne 2024"
                },
                {
                  "@type": "ImageObject",
                  "name": "Formations et ateliers IA",
                  "url": "https://cia.ift.ulaval.ca/formation/tuto2.webp",
                  "description": "Séances de formation en intelligence artificielle"
                },
                {
                  "@type": "ImageObject",
                  "name": "Événements communautaires",
                  "url": "https://cia.ift.ulaval.ca/implication/kiosque.webp",
                  "description": "Kiosque et événements de promotion du club"
                },
                {
                  "@type": "ImageObject",
                  "name": "Projet F1Tenth",
                  "url": "https://cia.ift.ulaval.ca/project/f1tenthcar.webp",
                  "description": "Voiture autonome du projet F1Tenth"
                }
              ],
              "numberOfItems": 18,
              "image": "https://cia.ift.ulaval.ca/implication/front-image.webp"
            }
          `}
        </script>
      </Helmet>

      {/* Hero section with animated gradient background */}
      <motion.div
        className="w-full py-20 bg-size-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            {t("gallery.heroTitle")}
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mt-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("gallery.heroSubtitle")}
        </motion.p>
      </motion.div>

      <motion.section
        className="container mx-auto px-6 py-12 rounded-3xl"
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
              className={`px-5 py-2 rounded-full text-sm md:text-base transition-all custom-border-red custom-hover-border-red ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(category.labelKey)}
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
              onClick={() =>
                setSelectedImage({
                  src: image.src,
                  desc: t(image.descKey),
                })
              }
            >
              <img
                src={image.src}
                alt={t(image.descKey)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-red-600/80 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg transform translate-y-1 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {t(`gallery.categoryLabels.${image.category}`)}
                </span>
              </div>

              {/* Image description */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">
                  {t(image.descKey)}
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
              aria-label={t("gallery.closeLabel")}
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
