import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import TeamMemberCard from '../components/TeamMemberCard';
import { useTranslation } from 'react-i18next';
import BackToProjects from '../components/BackToProjects';
import { useMotion } from '../hooks/useMotion';
function F1Tenth() {
  const { t } = useTranslation();
  const m = useMotion();
  const team1 = [
    { title: 'Deoth Guei', description: t('f1tenth.team1.deoth.description') },
    { title: 'Théophile Bertelot', description: t('f1tenth.team1.theophile.description') },
    { title: 'Felix Ly', description: t('f1tenth.team1.felix.description') },
    { title: 'Melek Sebri', description: t('f1tenth.team1.melek.description') },
    { title: 'Amy Randianodiasan', description: t('f1tenth.team1.amy.description') },
    { title: 'Kahina Moulfi', description: t('f1tenth.team1.kahina.description') },
  ];
  const team2 = [
    { title: 'Alban Sarrazin', description: t('f1tenth.team2.alban.description') },
    { title: 'Alexandre Laforest', description: t('f1tenth.team2.alexandre.description') },
    { title: 'Jade Piller Cammal', description: t('f1tenth.team2.jade.description') },
    { title: 'Karima Habbout', description: t('f1tenth.team2.karima.description') },
    { title: 'Simon Gouin', description: t('f1tenth.team2.simon.description') },
  ];
  return (
    <>
      <Helmet>
        {/* Titre */}
        <title>F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval</title>
        {/* Description */}
        <meta
          name="description"
          content="Projet F1Tenth : développement de voitures de course autonomes à l'échelle 1/10. Intelligence artificielle, vision par ordinateur, LIDAR et conduite autonome par le Club IA ULaval."
        />
        {/* Mots-clés */}
        <meta
          name="keywords"
          content="F1Tenth, voiture autonome, course autonome, vision par ordinateur, LIDAR, ROS, véhicule autonome, robotique, Club IA ULaval, VAUL, intelligence artificielle, projet étudiant, course robotique"
        />
        {/* Auteur */}
        <meta name="author" content="Club Intelligence Artificielle - Université Laval" />
        {/* Open Graph pour Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval"
        />
        <meta
          property="og:description"
          content="Découvrez notre projet F1Tenth : voitures de course autonomes à l'échelle 1/10 avec IA, vision par ordinateur et LIDAR."
        />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/project/f1tenthcar.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/f1tenth" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="F1Tenth - Voiture Autonome de Course | Projet IA Club ULaval"
        />
        <meta
          name="twitter:description"
          content="Projet de voitures de course autonomes avec IA, vision par ordinateur et LIDAR."
        />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/project/f1tenthcar.webp" />
        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/f1tenth" />
        {/* Langue */} <html lang="fr" />
        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {` { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "F1Tenth - Voiture Autonome de Course", "url": "https://cia.ift.ulaval.ca/f1tenth", "description": "Projet de développement de voitures de course autonomes à l'échelle 1/10 utilisant intelligence artificielle, vision par ordinateur et LIDAR", "applicationCategory": "RoboticsApplication", "operatingSystem": "ROS", "author": { "@type": "Organization", "name": "Club Intelligence Artificielle - Université Laval", "url": "https://cia.ift.ulaval.ca", "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp", "description": "Club étudiant d'intelligence artificielle de l'Université Laval", "foundingLocation": { "@type": "Place", "name": "Québec, Canada" }, "parentOrganization": { "@type": "EducationalOrganization", "name": "Université Laval" }, "sameAs": [ "https://www.instagram.com/ciaulaval/", "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all", "https://github.com/cia-ulaval", "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp" ] }, "sponsor": { "@type": "Organization", "name": "VAUL - Véhicule Autonome Université Laval", "description": "Laboratoire de recherche en véhicules autonomes de l'Université Laval" }, "creator": [ { "@type": "Organization", "name": "Équipe F1Tenth #1", "member": [ { "@type": "Person", "name": "Deoth Guei", "jobTitle": "Chef d'équipe" }, { "@type": "Person", "name": "Théophile Berteloot", "jobTitle": "Développeur IA" }, { "@type": "Person", "name": "Felix Ly", "jobTitle": "Ingénieur système" }, { "@type": "Person", "name": "Melek Sebri", "jobTitle": "Spécialiste vision" }, { "@type": "Person", "name": "Amy Randianodiasan", "jobTitle": "Développeuse" }, { "@type": "Person", "name": "Kahina Moulfi", "jobTitle": "Analyste données" } ] }, { "@type": "Organization", "name": "Équipe F1Tenth #2", "member": [ { "@type": "Person", "name": "Alban Sarrazin", "jobTitle": "Chef d'équipe" }, { "@type": "Person", "name": "Alexandre Laforest", "jobTitle": "Développeur IA" }, { "@type": "Person", "name": "Jade Piller Cammal", "jobTitle": "Ingénieure système" }, { "@type": "Person", "name": "Karima Habbout", "jobTitle": "Spécialiste navigation" }, { "@type": "Person", "name": "Simon Gouin", "jobTitle": "Développeur" } ] } ], "featureList": [ "Voitures autonomes échelle 1/10", "Vision par ordinateur temps réel", "Navigation LIDAR", "Algorithmes de course autonome", "Détection d'obstacles", "Planification de trajectoire", "Système ROS intégré" ], "keywords": [ "F1Tenth", "voiture autonome", "course autonome", "vision par ordinateur", "LIDAR", "ROS", "robotique", "navigation autonome" ], "screenshot": "https://cia.ift.ulaval.ca/project/f1tenth.webp", "image": "https://cia.ift.ulaval.ca/project/f1tenthcar.webp", "codeRepository": "https://github.com/cia-ulaval/F1-team-1", "programmingLanguage": ["Python", "C++", "ROS"], "requirements": "Plateforme F1Tenth, LIDAR, caméra, ordinateur embarqué" } `}
        </script>
      </Helmet>
      <section className="relative overflow-hidden">
        <motion.div className="theme-content-shell theme-surface-primary shadow-xl" {...m.fadeIn}>
          <BackToProjects />
          {/* Hero Section */}
          <motion.section className="cia-section" {...m.slideUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center">
                <h1 className="cia-heading-hero mb-4">
                  <span className="theme-text-gradient">{t('f1tenth.hero.title')}</span>
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="theme-media-frame max-w-lg">
                  <img
                    src="/project/f1tenthcar.webp"
                    alt={t('f1tenth.hero.imageAlt')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
          {/* Team 1 Section */}
          <motion.section id="team1" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('f1tenth.team1.title')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {team1.map((value, index) => (
                <motion.div key={index} {...m.stagger(index)}>
                  <TeamMemberCard title={value.title} description={value.description} />
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* Team 2 Section */}
          <motion.section id="team2" className="cia-section" {...m.slideUp}>
            <h2 className="cia-heading-section text-neutral-100 text-center mb-8">
              {t('f1tenth.team2.title')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {team2.map((value, index) => (
                <motion.div key={index} {...m.stagger(index)}>
                  <TeamMemberCard title={value.title} description={value.description} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}
export default F1Tenth;
