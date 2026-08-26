import type { ProjectPageSpec } from '../projectPages';

/* Rich SoftwareApplication markup the page already carried — kept verbatim
   so the conversion is not an SEO regression. */
const JSON_LD = `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"F1Tenth - Voiture Autonome de Course","url":"https://cia.ift.ulaval.ca/f1tenth","description":"Projet de développement de voitures de course autonomes à l'échelle 1/10 utilisant intelligence artificielle, vision par ordinateur et LIDAR","applicationCategory":"RoboticsApplication","operatingSystem":"ROS","author":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca","logo":"https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp","description":"Club étudiant d'intelligence artificielle de l'Université Laval","foundingLocation":{"@type":"Place","name":"Québec, Canada"},"parentOrganization":{"@type":"EducationalOrganization","name":"Université Laval"},"sameAs":["https://www.instagram.com/ciaulaval/","https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all","https://github.com/cia-ulaval","https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/"]},"sponsor":{"@type":"Organization","name":"VAUL - Véhicule Autonome Université Laval","description":"Laboratoire de recherche en véhicules autonomes de l'Université Laval"},"creator":[{"@type":"Organization","name":"Équipe F1Tenth #1","member":[{"@type":"Person","name":"Deoth Guei","jobTitle":"Chef d'équipe"},{"@type":"Person","name":"Théophile Berteloot","jobTitle":"Développeur IA"},{"@type":"Person","name":"Felix Ly","jobTitle":"Ingénieur système"},{"@type":"Person","name":"Melek Sebri","jobTitle":"Spécialiste vision"},{"@type":"Person","name":"Amy Randianodiasan","jobTitle":"Développeuse"},{"@type":"Person","name":"Kahina Moulfi","jobTitle":"Analyste données"}]},{"@type":"Organization","name":"Équipe F1Tenth #2","member":[{"@type":"Person","name":"Alban Sarrazin","jobTitle":"Chef d'équipe"},{"@type":"Person","name":"Alexandre Laforest","jobTitle":"Développeur IA"},{"@type":"Person","name":"Jade Piller Cammal","jobTitle":"Ingénieure système"},{"@type":"Person","name":"Karima Habbout","jobTitle":"Spécialiste navigation"},{"@type":"Person","name":"Simon Gouin","jobTitle":"Développeur"}]}],"featureList":["Voitures autonomes échelle 1/10","Vision par ordinateur temps réel","Navigation LIDAR","Algorithmes de course autonome","Détection d'obstacles","Planification de trajectoire","Système ROS intégré"],"keywords":["F1Tenth","voiture autonome","course autonome","vision par ordinateur","LIDAR","ROS","robotique","navigation autonome"],"screenshot":"https://cia.ift.ulaval.ca/project/f1tenth.webp","image":"https://cia.ift.ulaval.ca/project/f1tenthcar.webp","codeRepository":"https://github.com/cia-ulaval/F1-team-1","programmingLanguage":["Python","C++","ROS"],"requirements":"Plateforme F1Tenth, LIDAR, caméra, ordinateur embarqué"}`;

/* Two crews built this, and the page is mostly the roster — so the media
   leads on the left and the rest of the page is people. */
export const f1tenth: ProjectPageSpec = {
  key: 'f1tenth',
  edition: 'field',
  titleKey: 'home.projects.f1tenth.title',
  hero: {
    media: {
      type: 'image',
      src: '/project/f1tenthcar.webp',
      altKey: 'f1tenth.hero.imageAlt',
    },
    bodyKeys: ['f1tenth.hero.description1', 'f1tenth.hero.description2'],
  },
  blocks: [
    {
      kind: 'team',
      id: 'team1',
      titleKey: 'f1tenth.team1.title',
      members: [
        { title: 'Deoth Guei', descriptionKey: 'f1tenth.team1.deoth.description' },
        { title: 'Théophile Bertelot', descriptionKey: 'f1tenth.team1.theophile.description' },
        { title: 'Felix Ly', descriptionKey: 'f1tenth.team1.felix.description' },
        { title: 'Melek Sebri', descriptionKey: 'f1tenth.team1.melek.description' },
        { title: 'Amy Randianodiasan', descriptionKey: 'f1tenth.team1.amy.description' },
        { title: 'Kahina Moulfi', descriptionKey: 'f1tenth.team1.kahina.description' },
      ],
    },
    {
      kind: 'plate',
      bleed: true,
      figure: true,
      media: { type: 'image', src: '/project/f1cover.webp' },
    },
    {
      kind: 'team',
      id: 'team2',
      titleKey: 'f1tenth.team2.title',
      members: [
        { title: 'Alban Sarrazin', descriptionKey: 'f1tenth.team2.alban.description' },
        { title: 'Alexandre Laforest', descriptionKey: 'f1tenth.team2.alexandre.description' },
        { title: 'Jade Piller Cammal', descriptionKey: 'f1tenth.team2.jade.description' },
        { title: 'Karima Habbout', descriptionKey: 'f1tenth.team2.karima.description' },
        { title: 'Simon Gouin', descriptionKey: 'f1tenth.team2.simon.description' },
      ],
    },
  ],
  seo: {
    title: 'F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval',
    description:
      "Projet F1Tenth : développement de voitures de course autonomes à l'échelle 1/10. Intelligence artificielle, vision par ordinateur, LIDAR et conduite autonome par le Club IA ULaval.",
    image: '/project/f1tenthcar.webp',
    path: '/f1tenth',
    jsonLd: JSON_LD,
  },
};
