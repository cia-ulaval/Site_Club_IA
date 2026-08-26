import type { ProjectPageSpec } from '../projectPages';

/* Rich SoftwareApplication markup the page already carried — kept verbatim
   so the conversion is not an SEO regression. */
const JSON_LD = `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlappyBrain EEG - Jeu Contrôlé par Ondes Cérébrales","url":"https://cia.ift.ulaval.ca/flapeeg","description":"Jeu révolutionnaire contrôlé par EEG et ondes cérébrales utilisant une interface cerveau-ordinateur","applicationCategory":"GameApplication","operatingSystem":"Cross-platform","author":{"@type":"Organization","name":"Club Intelligence Artificielle - Université Laval","url":"https://cia.ift.ulaval.ca","logo":"https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp","description":"Club étudiant d'intelligence artificielle de l'Université Laval","foundingLocation":{"@type":"Place","name":"Québec, Canada"},"parentOrganization":{"@type":"EducationalOrganization","name":"Université Laval"},"sameAs":["https://www.instagram.com/ciaulaval/","https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all","https://github.com/cia-ulaval","https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/"]},"creator":[{"@type":"Person","name":"Louis-Étienne Messier","jobTitle":"Chef d'équipe et développeur principal"},{"@type":"Person","name":"Jordan Mathieu","jobTitle":"Développeur IA et machine learning"},{"@type":"Person","name":"Dereck Bélanger","jobTitle":"Développeur interface utilisateur"},{"@type":"Person","name":"Amen Ouannes","jobTitle":"Développeur backend"},{"@type":"Person","name":"Estelle Tournassat","jobTitle":"Analyste données EEG"},{"@type":"Person","name":"Hedi Braham","jobTitle":"Spécialiste traitement signal"},{"@type":"Person","name":"William Blanchet Lafrenière","jobTitle":"Développeur et testeur"}],"featureList":["Contrôle par ondes cérébrales EEG","Interface cerveau-ordinateur (BCI)","Utilisation du casque Muse","Traitement signal en temps réel","Apprentissage automatique personnalisé","Filtrage numérique des signaux","Interface utilisateur intuitive"],"keywords":["EEG","ondes cérébrales","interface cerveau-ordinateur","BCI","neurotechnologie","Muse headband","jeu mental","brain-computer interface"],"screenshot":"https://cia.ift.ulaval.ca/implication/flappyeegmain.webp","image":"https://cia.ift.ulaval.ca/project/FlappyBrain.webp","codeRepository":"https://github.com/cia-ulaval/FlapEEG_interface_v1","programmingLanguage":["Python","JavaScript","React"],"requirements":"Casque EEG Muse, ordinateur compatible"}`;

export const flapeeg: ProjectPageSpec = {
  key: 'flapeeg',
  edition: 'plate',
  titleKey: 'home.projects.flapeeg.title',
  hero: {
    media: {
      type: 'image',
      src: '/implication/flappyeegmain.webp',
      altKey: 'flapeeg.hero.image.alt',
    },
    bodyKeys: ['flapeeg.hero.description.paragraph1', 'flapeeg.hero.description.paragraph2'],
  },
  blocks: [
    {
      kind: 'team',
      titleKey: 'flapeeg.team.title',
      members: [
        {
          title: 'Louis-Étienne Messier',
          descriptionKey: 'flapeeg.team.members.louis.description',
        },
        { title: 'Jordan Mathieu', descriptionKey: 'flapeeg.team.members.jordan.description' },
        { title: 'Dereck Bélanger', descriptionKey: 'flapeeg.team.members.dereck.description' },
        { title: 'Amen Ouannes', descriptionKey: 'flapeeg.team.members.amen.description' },
        { title: 'Estelle Tournassat', descriptionKey: 'flapeeg.team.members.estelle.description' },
        { title: 'Hedi Braham', descriptionKey: 'flapeeg.team.members.hedi.description' },
        {
          title: 'William Blanchet Lafrenière',
          descriptionKey: 'flapeeg.team.members.william.description',
        },
      ],
    },
    {
      kind: 'split',
      id: 'Week1',
      titleKey: 'flapeeg.timeline.beginning.title',
      subtitleKey: 'flapeeg.timeline.beginning.prototype.title',
      bodyKeys: [
        'flapeeg.timeline.beginning.prototype.description',
        'flapeeg.timeline.beginning.description',
      ],
      media: {
        type: 'video',
        src: '/project/flappyproto.mp4',
        ariaKey: 'flapeeg.timeline.beginning.video.ariaLabel',
      },
    },
    {
      kind: 'split',
      id: 'Week2-4',
      flip: true,
      titleKey: 'flapeeg.timeline.dataCollection.title',
      subtitleKey: 'flapeeg.timeline.dataCollection.subtitle',
      bodyKeys: [
        'flapeeg.timeline.dataCollection.paragraph1',
        'flapeeg.timeline.dataCollection.paragraph2',
      ],
      media: {
        type: 'image',
        src: '/project/FlappyBrain.webp',
        altKey: 'flapeeg.timeline.dataCollection.image.alt',
      },
    },
    {
      kind: 'panel',
      id: 'Week4-6',
      titleKey: 'flapeeg.timeline.filtering.title',
      subtitleKey: 'flapeeg.timeline.filtering.subtitle',
      bodyKeys: ['flapeeg.timeline.filtering.paragraph1', 'flapeeg.timeline.filtering.paragraph2'],
    },
    {
      kind: 'prose',
      tone: 'invert',
      id: 'Week6-9',
      titleKey: 'flapeeg.timeline.challenge.title',
      bodyKeys: ['flapeeg.timeline.challenge.description'],
    },
    {
      kind: 'columns',
      id: 'project-status',
      titleKey: 'flapeeg.status.title',
      columns: [
        {
          titleKey: 'flapeeg.status.current.title',
          itemKeys: [
            'flapeeg.status.current.items.0',
            'flapeeg.status.current.items.1',
            'flapeeg.status.current.items.2',
            'flapeeg.status.current.items.3',
          ],
        },
        {
          titleKey: 'flapeeg.status.next.title',
          itemKeys: [
            'flapeeg.status.next.items.0',
            'flapeeg.status.next.items.1',
            'flapeeg.status.next.items.2',
            'flapeeg.status.next.items.3',
          ],
        },
      ],
    },
  ],
  cta: {
    bodyKeys: ['flapeeg.status.conclusion.line1', 'flapeeg.status.conclusion.line2'],
    emphasisKey: 'flapeeg.status.conclusion.line3',
  },
  seo: {
    title: 'FlappyBrain EEG - Jeu Contrôlé par Ondes Cérébrales',
    description:
      "Découvrez FlappyBrain, un jeu contrôlé par les ondes cérébrales (EEG) développé par le Club IA de l'Université Laval. Interface cerveau-ordinateur et intelligence artificielle.",
    image: '/project/FlappyBrain.webp',
    path: '/flapeeg',
    jsonLd: JSON_LD,
  },
};
