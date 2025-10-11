import { motion } from "framer-motion";

// Partner logos (src points to /public/banner). Use encodeURI when rendering because some
// filenames contain spaces or special characters.
const partners = [
  {
    src: "/banner/LogoTracel.png",
    link: "https://tracel.ai/",
    alt: "Tracel AI",
  },
  {
    src: "/banner/aesgul.webp",
    link: "https://www.aesgul.com/accueil",
    alt: "AESGUL",
  },
  { src: "/banner/LogoVooban.png", link: "https://vooban.com/", alt: "Vooban" },
  { src: "/banner/ingeno.png", link: "https://ingeno.ca/fr/", alt: "Ingeno" },
  { src: "/banner/asetin.webp", link: "https://www.asetin.ca/", alt: "ASETIN" },
  {
    src: "/banner/SiFiLabs.png",
    link: "https://sifilabs.com/",
    alt: "SiFi Labs",
  },
  {
    src: "/banner/avenirti.webp",
    link: "https://monavenirti.org/",
    alt: "MonAvenir TI",
  },
  {
    src: "/banner/LogoDepartementInfo.png",
    link: "https://www.ift.ulaval.ca/",
    alt: "Département d'informatique - Université Laval",
  },
  { src: "/banner/LogoCRTI.png", link: "https://crti.ulaval.ca/", alt: "CRTI" },
  {
    src: "/banner/SDP.png",
    link: "https://sdp.ulaval.ca/",
    alt: "Service du développement professionnel - Université Laval",
  },
  {
    src: "/banner/ti.webp",
    link: "https://monavenirti.org/",
    alt: "MonAvenir TI (alt)",
  },
];

const IMAGE_WIDTH = 120; // px
const IMAGE_HEIGHT = 80; // px
const IMAGE_MARGIN = 32; // px (mr-8)
const REPEAT_COUNT = 6; // Repeat images 6 times for a much longer loop
const TOTAL_WIDTH =
  (IMAGE_WIDTH + IMAGE_MARGIN) * partners.length * REPEAT_COUNT;

export default function InfiniteScrollBanner() {
  // Repeat the partners array REPEAT_COUNT times
  const repeatedImages = Array(REPEAT_COUNT).fill(partners).flat();

  return (
    <div className="scroll-banner relative w-full bg-black py-4 overflow-hidden">
      <motion.div
        className="flex items-center"
        animate={{
          x: [0, `-${TOTAL_WIDTH}px`],
        }}
        transition={{
          duration: 13 * REPEAT_COUNT,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedImages.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-8 inline-block opacity-90"
            aria-label={item.alt}
          >
            <img
              src={encodeURI(item.src)}
              alt={item.alt}
              className="object-contain"
              style={{
                width: `${IMAGE_WIDTH}px`,
                height: `${IMAGE_HEIGHT}px`,
              }}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
