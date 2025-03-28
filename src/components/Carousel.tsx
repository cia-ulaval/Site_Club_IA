import { motion } from "framer-motion";

const images = [
  "/banner/aesgul.png",
  "/banner/asetin.png",
  "/banner/avenirti.png",
  "/banner/ulaval.png",
];
export default function InfiniteScrollBanner() {
  return (
    <div className="scroll-banner relative w-full bg-black py-4 overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: [0, `-${images.length * 272}px`],
        }}
        transition={{
          duration: 13,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`banner image ${(index % images.length) + 1}`}
            className="h-44 w-52 object-cover mr-24 inline-block opacity-80"
          />
        ))}
      </motion.div>
    </div>
  );
}
