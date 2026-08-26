import type { LogoCarouselItem } from '../components/ui/logo-carousel';

/* Every organization backing the club. Home's partner rail and the
   Collaboration page's sponsor wall are the same set of marks and drifted
   apart while they were two hand-kept lists — the same logo pointed at two
   different URLs, and COFOMO appeared on one surface only. */
export const partners: LogoCarouselItem[] = [
  {
    src: '/banner/LogoDepartementInfo.webp',
    href: 'https://www.ift.ulaval.ca/',
    alt: "Département d'informatique - Université Laval",
  },
  { src: '/banner/aesgul.webp', href: 'https://www.aesgul.com/accueil', alt: 'AESGUL' },
  { src: '/banner/asetin.webp', href: 'https://www.asetin.ca/', alt: 'ASETIN' },
  { src: '/banner/avenirti.webp', href: 'https://monavenirti.org/', alt: 'MonAvenir TI' },
  { src: '/banner/LogoTracel.webp', href: 'https://tracel.ai/', alt: 'Tracel AI' },
  { src: '/banner/SiFiLabs.webp', href: 'https://sifilabs.com/', alt: 'SiFi Labs' },
  { src: '/banner/ingeno.webp', href: 'https://ingeno.ca/fr/', alt: 'Ingeno' },
  { src: '/banner/LogoVooban.webp', href: 'https://vooban.com/', alt: 'Vooban' },
  { src: '/banner/LogoCofomo.webp', href: 'https://www.cofomo.com/', alt: 'COFOMO' },
  {
    src: '/banner/SDP.webp',
    href: 'https://sdp.ulaval.ca/',
    alt: 'Service du développement professionnel - Université Laval',
  },
  { src: '/banner/LogoCRTI.webp', href: 'https://crti.ulaval.ca/', alt: 'CRTI' },
];
