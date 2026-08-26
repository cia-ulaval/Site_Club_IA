import type { LogoCarouselItem } from '../components/ui/logo-carousel';

/* Current sponsors only, grouped by tier (Or > Argent > Bronze). Home's
   partner rail and the Collaboration page's sponsor wall share this list. */
export const partners: LogoCarouselItem[] = [
  // Or
  { src: '/banner/aesgul.webp', href: 'https://www.aesgul.com/accueil', alt: 'AESGUL' },
  { src: '/banner/logo-vooban.webp', href: 'https://vooban.com/', alt: 'Vooban' },
  { src: '/banner/utilim.webp', href: 'https://www.utili-m.com/', alt: 'Utili-M' },
  // Argent
  { src: '/banner/asetin.webp', href: 'https://www.asetin.ca/', alt: 'ASETIN' },
  {
    src: '/banner/bentley.webp',
    href: 'https://www.bentley.com/',
    alt: 'Bentley Systems',
  },
  { src: '/banner/avenirti.webp', href: 'https://monavenirti.org/', alt: 'MonAvenir TI' },
  // Bronze
  { src: '/banner/cadeul.webp', href: 'https://www.cadeul.com/', alt: 'CADEUL' },
  { src: '/banner/logo-cofomo.webp', href: 'https://www.cofomo.com/', alt: 'COFOMO' },
  { src: '/banner/cgi.webp', href: 'https://www.cgi.com/', alt: 'CGI' },
];
