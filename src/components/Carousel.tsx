import { motion } from 'framer-motion';

type Partner = {
  src: string;
  link: string;
  alt: string;
};

// The sequence is duplicated once
// so a single loop covers one full copy and restarts seamlessly.
const partners: Partner[] = [
  {
    src: '/banner/LogoTracel.png',
    link: 'https://tracel.ai/',
    alt: 'Tracel AI',
  },
  {
    src: '/banner/aesgul.webp',
    link: 'https://www.aesgul.com/accueil',
    alt: 'AESGUL',
  },
  {
    src: '/banner/LogoVooban.png',
    link: 'https://vooban.com/',
    alt: 'Vooban',
  },
  {
    src: '/banner/ingeno.png',
    link: 'https://ingeno.ca/fr/',
    alt: 'Ingeno',
  },
  {
    src: '/banner/asetin.webp',
    link: 'https://www.asetin.ca/',
    alt: 'ASETIN',
  },
  {
    src: '/banner/SiFiLabs.png',
    link: 'https://sifilabs.com/',
    alt: 'SiFi Labs',
  },
  {
    src: '/banner/avenirti.webp',
    link: 'https://monavenirti.org/',
    alt: 'MonAvenir TI',
  },
  {
    src: '/banner/LogoDepartementInfo.png',
    link: 'https://www.ift.ulaval.ca/',
    alt: "Département d'informatique - Université Laval",
  },
  {
    src: '/banner/LogoCRTI.png',
    link: 'https://crti.ulaval.ca/',
    alt: 'CRTI',
  },
  {
    src: '/banner/SDP.png',
    link: 'https://sdp.ulaval.ca/',
    alt: 'Service du développement professionnel - Université Laval',
  },
  {
    src: '/banner/ti.webp',
    link: 'https://monavenirti.org/',
    alt: 'MonAvenir TI (alt)',
  },
];

const repeatedPartners = [...partners, ...partners];

export default function InfiniteScrollBanner() {
  return (
    <section
      className="relative w-full overflow-hidden py-4"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <motion.div
        className="relative z-20 flex w-max items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {repeatedPartners.map((item, index) => (
          <a
            key={`${item.alt}-${index}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.alt}
            className="mr-8 flex-none"
          >
            <img
              src={encodeURI(item.src)}
              alt={item.alt}
              className="h-16 w-28 object-contain opacity-85 transition-opacity duration-300 hover:opacity-100 md:h-20 md:w-32"
            />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
