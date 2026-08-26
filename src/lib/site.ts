export const SITE = 'https://cia.ift.ulaval.ca';

export const ORG_NAME = 'Club Intelligence Artificielle - Université Laval';

export const OG_SITE_NAME = 'Club IA - Université Laval';

export const DEFAULT_OG_IMAGE = '/banner/cia-logo.webp';

export const DISCORD_URL = 'https://discord.gg/ZPVwCjMpAq';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/ciaulaval/',
  linkedin: 'https://www.linkedin.com/company/cia-ulaval/',
  github: 'https://github.com/cia-ulaval',
  facebook:
    'https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/',
} as const;

const SAME_AS = Object.values(SOCIAL_LINKS);

export const ORGANIZATION_LD = {
  '@type': 'Organization',
  name: ORG_NAME,
  url: SITE,
  logo: `${SITE}${DEFAULT_OG_IMAGE}`,
  description: "Club étudiant d'intelligence artificielle de l'Université Laval",
  foundingLocation: { '@type': 'Place', name: 'Québec, Canada' },
  parentOrganization: { '@type': 'EducationalOrganization', name: 'Université Laval' },
  sameAs: SAME_AS,
} as const;
