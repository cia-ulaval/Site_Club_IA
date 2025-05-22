import { motion } from "framer-motion";

const images = [
  "/banner/aesgul.png",
  "/banner/asetin.png",
  "/banner/avenirti.png",
  "/banner/ulaval.png",
];

const IMAGE_WIDTH = 120; // px
const IMAGE_HEIGHT = 80; // px
const IMAGE_MARGIN = 32; // px (mr-8)
const REPEAT_COUNT = 6; // Repeat images 6 times for a much longer loop
const TOTAL_WIDTH = (IMAGE_WIDTH + IMAGE_MARGIN) * images.length * REPEAT_COUNT;

export default function InfiniteScrollBanner() {
  // Repeat the images array REPEAT_COUNT times
  const repeatedImages = Array(REPEAT_COUNT)
    .fill(images)
    .flat();

  return (
    <div className="scroll-banner relative w-full bg-black py-4 overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: [0, `-${TOTAL_WIDTH}px`],
        }}
        transition={{
          duration: 13 * REPEAT_COUNT, // Make the duration proportional to the repeat count
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`banner image ${(index % images.length) + 1}`}
            className="h-20 w-30 object-contain mr-8 inline-block opacity-80"
            style={{
              width: `${IMAGE_WIDTH}px`,
              height: `${IMAGE_HEIGHT}px`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
