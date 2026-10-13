import type { ProjectPageSpec } from '../projectPages';

const JSON_LD = `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"F1Tenth - Voiture Autonome de Course","url":"https://cia.ift.ulaval.ca/f1tenth","description":"Projet de développement de voitures de course autonomes à l'échelle 1/10 utilisant intelligence artificielle, vision par ordinateur et LIDAR","applicationCategory":"RoboticsApplication","operatingSystem":"ROS","author":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca","logo":"https://cia.ift.ulaval.ca/banner/cia.webp","description":"Club étudiant d'intelligence artificielle de l'Université Laval","foundingLocation":{"@type":"Place","name":"Québec, Canada"},"parentOrganization":{"@type":"EducationalOrganization","name":"Université Laval"},"sameAs":["https://www.instagram.com/ciaulaval/","https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all","https://github.com/cia-ulaval","https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/"]},"creator":{"@type":"Organization","name":"Équipe F1Tenth","member":[{"@type":"Person","name":"Yanis Larabi","jobTitle":"Chef d'équipe"}]},"featureList":["Voitures autonomes échelle 1/10","Vision par ordinateur temps réel","Navigation LIDAR","Algorithmes de course autonome","Détection d'obstacles","Planification de trajectoire","Système ROS intégré"],"keywords":["F1Tenth","voiture autonome","course autonome","vision par ordinateur","LIDAR","ROS","robotique","navigation autonome"],"screenshot":"https://cia.ift.ulaval.ca/project/f1tenth.webp","image":"https://cia.ift.ulaval.ca/project/f1tenth-car.webp","codeRepository":"https://github.com/cia-ulaval/F1-team-1","programmingLanguage":["Python","C++","ROS"],"requirements":"Plateforme F1Tenth, LIDAR, caméra, ordinateur embarqué"}`;

export const f1tenth: ProjectPageSpec = {
  key: 'f1tenth',
  edition: 'field',
  titleKey: 'home.projects.f1tenth.title',
  hero: {
    media: {
      type: 'image',
      src: '/project/f1tenth-car.webp',
      altKey: 'f1tenth.hero.imageAlt',
    },
    bodyKeys: ['f1tenth.hero.description1', 'f1tenth.hero.description2'],
  },
  blocks: [
    {
      kind: 'tags',
      titleKey: 'f1tenth.team.title',
      itemKeys: ['f1tenth.team.leads'],
    },
    {
      kind: 'plate',
      bleed: true,
      figure: true,
      media: { type: 'image', src: '/project/f1tenth-cover.webp' },
    },
  ],
  seo: {
    title: 'F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval',
    description:
      "Projet F1Tenth : développement de voitures de course autonomes à l'échelle 1/10. Intelligence artificielle, vision par ordinateur, LIDAR et conduite autonome par le Club IA ULaval.",
    image: '/project/f1tenth-car.webp',
    path: '/f1tenth',
    jsonLd: JSON_LD,
  },
};
