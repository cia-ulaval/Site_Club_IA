import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import MemberModal, { TeamMember } from '../components/MemberModal';

const Management: React.FC = () => {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Président et Vice-Président
  const president: TeamMember[] = [
    {
      name: "Nathaniel D'Amours",
      role: t('management.roles.president'),
      mission: t('management.missions.nathaniel'),
      imgSrc: '/portrait/Nathaniel.webp',
      linkedIn: 'https://www.linkedin.com/in/nathaniel-damours',
    },
    {
      name: 'Cyrille Bernier',
      role: t('management.roles.vicePresident'),
      imgSrc: '/portrait/CyrilleBernier.webp',
      linkedIn: 'https://www.linkedin.com/in/cyrille-bernier-31208a252/',
    },
  ];

  // Pôle Logistique
  const logistics: TeamMember[] = [
    {
      name: 'Louis-Étienne Messier',
      role: t('management.roles.logisticsLeader'),
      mission: t('management.missions.louis'),
      imgSrc: '/portrait/Louis.webp',
      linkedIn: 'https://www.linkedin.com/in/louis-etienne-messier-2361311ba/',
    },
    {
      name: 'Nezar Mahane',
      role: t('management.roles.logisticsManager'),
      imgSrc: '/portrait/NezarMahane.png',
      linkedIn: '',
    },
  ];

  // Pôle Talents
  const talentResponsables: TeamMember[] = [
    {
      name: 'Jade Piller Cammal',
      role: t('management.roles.talentsLeader'),
      mission: t('management.missions.jade'),
      imgSrc: '/portrait/JadePillerCammal.webp',
      linkedIn: 'https://linkedin.com/in/jade-piller-cammal-242b88261/',
    },
    {
      name: 'Douae Sakkat',
      role: t('management.roles.recruitmentManager'),
      mission: t('management.missions.douae'),
      imgSrc: '/portrait/DouaeSakkat.jpeg',
      linkedIn: '',
    },
    {
      name: 'Seynabou Diakité',
      role: t('management.roles.recruitmentManager'),
      imgSrc: '/portrait/SeynabouDiakité.png',
      linkedIn: '',
    },
    {
      name: 'Hiba Arfaoui',
      role: t('management.roles.recruitmentAssistant'),
      mission: '',
      imgSrc: '/portrait/HibaArfoui.webp',
      linkedIn: 'http://linkedin.com/in/hiba-arfaoui/',
    },
    {
      name: 'Rana Azemdroub',
      role: t('management.roles.engagementManager'),
      mission: t('management.missions.rana'),
      imgSrc: '/portrait/RanaAzemdroub.webp',
      linkedIn: 'https://www.linkedin.com/in/rana-azemdroub/',
    },
  ];

  // Pôle Finances
  const financeResponsables: TeamMember[] = [
    {
      name: 'Alexandrine Lehoux',
      role: t('management.roles.financeLeader'),
      mission: t('management.missions.alexandrine'),
      imgSrc: '/portrait/Alexandrine.webp',
      linkedIn: 'https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/',
    },
    {
      name: 'Michal Naumiak',
      role: t('management.roles.partnershipsManager'),
      mission: t('management.missions.mihal'),
      imgSrc: '/portrait/MichalNaumiak.jpg',
      linkedIn: '',
    },
    {
      name: 'Chaima Mohsni',
      role: t('management.roles.partnershipsManager'),
      mission: '',
      imgSrc: '/portrait/ChaimaMohsni.jpg',
      linkedIn: '',
    },
    {
      name: 'Adriana Maria Paternina Paez',
      role: t('management.roles.treasuryManager'),
      mission: t('management.missions.adriana'),
      imgSrc: '/portrait/AdrianaMaria.webp',
      linkedIn: 'https://www.linkedin.com/in/adriana-paternina/',
    },
    {
      name: 'Anthony Lavertu',
      role: t('management.roles.externalRelationsManager'),
      mission: t('management.missions.anthony'),
      imgSrc: '/portrait/Anthony.webp',
      linkedIn: 'https://www.linkedin.com/in/anthony-lavertu-2a29a7179/',
    },
    {
      name: 'Hiba Mameri',
      role: t('management.roles.externalRelationsManager'),
      mission: '',
      imgSrc: '/portrait/HibaMameri.webp',
      linkedIn: 'https://www.linkedin.com/in/hiba-mameri-8a566a261/',
    },
  ];

  // Pôle Marketing
  const marketingResponsables: TeamMember[] = [
    {
      name: 'Yves Mamadou Faye',
      role: t('management.roles.marketingLeader'),
      mission: t('management.missions.yves'),
      imgSrc: '/portrait/Yves.webp',
      linkedIn: 'https://www.linkedin.com/in/yves-faye-3b45062a5/',
    },
    {
      name: 'Hiba Arfaoui',
      role: t('management.roles.communicationsManager'),
      mission: t('management.missions.hibaComm'),
      imgSrc: '/portrait/HibaArfoui.webp',
      linkedIn: 'http://linkedin.com/in/hiba-arfaoui/',
    },
    {
      name: 'Youssouf Boubechiche',
      role: t('management.roles.designsManager'),
      mission: t('management.missions.youssouf'),
      imgSrc: '/portrait/YoussoufBoubechiche.webp',
      linkedIn: 'https://www.linkedin.com/in/youssouf-boubechiche-62668128a/',
    },
    {
      name: 'Mimi Baret',
      role: t('management.roles.designsManager'),
      imgSrc: '/portrait/MimiBaret.jpg',
      linkedIn: '',
    },
    {
      name: 'Dereck Bélanger',
      role: t('management.roles.websiteManager'),
      mission: t('management.missions.dereck'),
      imgSrc: '/portrait/Dereck.webp',
      linkedIn: 'https://www.linkedin.com/in/dereck-bélanger-437259338/',
      github: 'https://github.com/DereckBelanger152',
      portfolio: 'https://dereckbelanger.me',
      additionalDetails: t('management.aboutMe.dereck'),
    },
    {
      name: 'Aboubacar Sylla',
      role: t('management.roles.websiteAuxiliary'),
      imgSrc: '/portrait/AboubacarSylla.jpg',
      linkedIn: '',
    },
  ];

  // Pôle Activités
  const activitiesResponsables: TeamMember[] = [
    {
      name: 'Éléonore Imbeault',
      role: t('management.roles.activitiesLeader'),
      mission: t('management.missions.eleonore'),
      imgSrc: '/portrait/ÉléonoreImbeault.png',
      linkedIn: '',
    },
    {
      name: 'Ulysse Gagné',
      role: t('management.roles.activitiesLeader'),
      mission: t('management.missions.ulysse'),
      imgSrc: '/portrait/UlysseGagné.jpg',
      linkedIn: '',
    },
    {
      name: 'William Blanchet Lafrenière',
      role: t('management.roles.socialManager'),
      mission: t('management.missions.william'),
      imgSrc: '/portrait/WilliamBlanchet.webp',
      linkedIn: 'https://www.linkedin.com/in/william-blanchet-lafrenière-8337282b1/',
    },
    {
      name: 'Félix Larrivée',
      role: t('management.roles.socialManager'),
      mission: '',
      imgSrc: '/portrait/FelixLarrivee.png',
      linkedIn: '',
    },
    {
      name: 'Melek Sebri',
      role: t('management.roles.socialManager'),
      mission: '',
      imgSrc: '/portrait/MelekSebri.webp',
      linkedIn: 'https://www.linkedin.com/in/melek-sebri/',
    },
    {
      name: 'Nora Belattar',
      role: t('management.roles.recognitionManager'),
      mission: t('management.missions.nora'),
      imgSrc: '/portrait/NoraBelattar.webp',
      linkedIn: 'https://www.linkedin.com/in/nora-belattar-77243b302/',
    },
    {
      name: 'Peut-être toi ?',
      role: t('management.roles.readingGroupManager'),
      imgSrc: '',
      linkedIn: '',
      isVacant: true,
    },
    {
      name: 'Peut-être toi ?',
      role: t('management.roles.competitionsManager'),
      imgSrc: '',
      linkedIn: '',
      isVacant: true,
    },
  ];

  // Pôle Projets
  const projectLeads: TeamMember[] = [
    {
      name: 'Jordan Mathieu',
      role: t('management.roles.projectsLeader'),
      mission: t('management.missions.jordan'),
      imgSrc: '/portrait/Jordan.webp',
      linkedIn: 'https://www.linkedin.com/in/jordan-math/',
    },
    {
      name: 'Guilhem Ané',
      role: t('management.roles.trainingsManager'),
      mission: t('management.missions.guilhem'),
      imgSrc: '/portrait/GuilhemAne.webp',
      linkedIn: 'https://www.linkedin.com/in/guilhemane/',
    },
    {
      name: 'Amen Ouannes',
      role: t('management.roles.projectsManager'),
      mission: t('management.missions.amen'),
      imgSrc: '/portrait/AmenOuannes.webp',
      linkedIn: 'https://www.linkedin.com/in/amenallah-massarra-ouannes/',
    },
    {
      name: 'Benjamin Sekpona',
      role: t('management.roles.projectsManager'),
      mission: '',
      imgSrc: '/portrait/BenjaminSekpona.png',
      linkedIn: '',
    },
    {
      name: 'Babacar Thiam',
      role: t('management.roles.projectsManager'),
      mission: '',
      imgSrc: '/portrait/BabacarThiam.jpeg',
      linkedIn: '',
    },
    {
      name: 'Zachary Bois',
      role: t('management.roles.projectsManager'),
      mission: '',
      imgSrc: '/portrait/ZacharyBois.jpg',
      linkedIn: '',
    },
    {
      name: 'Prince Emiliano Akissoe',
      role: t('management.roles.projectsManager'),
      mission: '',
      imgSrc: '/portrait/PrinceEmiliano.jpg',
      linkedIn: '',
    },
    {
      name: 'Teddy Kana',
      role: t('management.roles.projectsManager'),
      mission: '',
      imgSrc: '/portrait/TeddyKana.jpg',
      linkedIn: '',
    },
  ];

  // Team Leads (responsables de projets)
  const teamLeads: TeamMember[] = [
    {
      name: 'Anthony Lavertu',
      role: 'Drone Team Lead',
      imgSrc: '/portrait/Anthony.webp',
      linkedIn: 'https://www.linkedin.com/in/anthony-lavertu-2a29a7179/',
    },
    {
      name: 'Benjamin Leblanc',
      role: 'SGD-Beyond Team Lead',
      imgSrc: '/portrait/Benjamin_Leblanc.webp',
      linkedIn: 'https://www.linkedin.com/in/benjamin-leblanc-a9217128b/',
    },
    {
      name: 'Eloïse Prevot',
      role: 'NutriNov Team Lead',
      imgSrc: '/portrait/Eloise.webp',
      linkedIn: 'https://www.linkedin.com/in/eloise-prevot/',
    },
    {
      name: 'Cyrille Bernier',
      role: 'Poppy Humanoid (Conception) Team Lead',
      imgSrc: '/portrait/CyrilleBernier.webp',
      linkedIn: 'https://www.linkedin.com/in/cyrille-bernier-31208a252/',
    },
    {
      name: 'Baptiste Gabriel Bonin',
      role: 'Poppy Humanoid (Simulation) Team Lead',
      imgSrc: '/portrait/Baptiste.webp',
      linkedIn: 'https://www.linkedin.com/in/baptiste-bonin/',
    },
    {
      name: 'Deoth Guei',
      role: 'F1 Jedi Team Lead',
      imgSrc: '/portrait/Deoth.webp',
      linkedIn: 'https://www.linkedin.com/in/deoth-guei-382269191/',
    },
    {
      name: 'Jérôme Collet',
      role: 'F1 Jedi Team Lead (Team 2)',
      imgSrc: '/portrait/Jerome.webp',
      linkedIn: 'https://ca.linkedin.com/in/jérôme-collet-577953199',
    },
    {
      name: 'Akram Omari',
      role: 'FlapEEG Team Lead',
      linkedIn: '',
      imgSrc: '/portrait/Akram.webp',
    },
  ];

  const renderCards = (
    members: TeamMember[],
    titleKey: string,
    cardSize: 'large' | 'medium' | 'small'
  ) => {
    const cardSizes = {
      large: {
        width: '16rem',
        height: '360px',
        imageHeight: '220px',
        bodyHeight: '140px',
        titleSize: 'text-xl',
        roleSize: 'text-base',
        headerSize: 'text-6xl',
      },
      medium: {
        width: '14rem',
        height: '320px',
        imageHeight: '190px',
        bodyHeight: '130px',
        titleSize: 'text-lg',
        roleSize: 'text-sm',
        headerSize: 'text-5xl',
      },
      small: {
        width: '12rem',
        height: '280px',
        imageHeight: '160px',
        bodyHeight: '120px',
        titleSize: 'text-base',
        roleSize: 'text-sm',
        headerSize: 'text-4xl',
      },
    };

    const size = cardSizes[cardSize];

    return (
      <motion.section
        className="max-w-7xl mx-auto px-4 pb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className={`font-bold mb-4 text-center mt-16 pb-12 ${size.headerSize}`}>
          <span className="theme-text-gradient">{titleKey}</span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => !member.isVacant && setSelectedMember(member)}
              className={`${
                member.isVacant
                  ? 'bg-primary-900/40 border-2 border-primary-800/50 border-dashed cursor-default'
                  : 'bg-primary-900/80 border-2 !border-primary-500/70 hover:!border-accent-500/80 cursor-pointer'
              } text-base-inverse mb-12 relative overflow-hidden rounded-lg transition-all duration-300`}
              style={{
                width: size.width,
                height: size.height,
              }}
            >
              {/* Image Section */}
              <div
                className={`${
                  member.isVacant ? 'bg-primary-800/20' : ''
                } flex items-center justify-center`}
                style={{ height: size.imageHeight }}
              >
                {member.imgSrc && !member.isVacant ? (
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 theme-text-accent" />
                )}
              </div>

              {/* Hover overlay for non-vacant cards */}
              {!member.isVacant && (
                <div className="absolute inset-0 bg-base/0 hover:bg-base/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <p className="text-base-inverse text-sm font-semibold bg-accent-500/85 px-3 py-1 rounded-full">
                    {t('management.viewProfile')}
                  </p>
                </div>
              )}

              {/* Content Section */}
              <div
                className="text-center flex flex-col justify-center p-3"
                style={{ height: size.bodyHeight }}
              >
                <h3
                  className={`${
                    member.isVacant ? 'text-primary-300/70' : 'text-base-inverse'
                  } mb-1 ${size.titleSize} leading-tight font-semibold`}
                >
                  {member.name}
                </h3>
                <p
                  className={`${
                    member.isVacant ? 'theme-text-accent' : '!text-accent-300'
                  } ${size.roleSize} leading-tight`}
                >
                  {member.role}
                </p>
                {member.isVacant && (
                  <p className="text-primary-500/50 text-xs mt-2">
                    {t('management.positionInInterview')}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
            translations={{
              name: t('management.modal.name'),
              role: t('management.modal.role'),
              mission: t('management.modal.mission'),
              aboutMe: t('management.modal.aboutMe'),
              connect: t('management.modal.connect'),
              noDetails: t('management.modal.noDetails'),
            }}
          />
        )}
      </AnimatePresence>

      <Helmet>
        {/* Titre */}
        <title>{t('management.pageTitle')}</title>
        {/* Description */}
        <meta name="description" content={t('management.pageDescription')} />

        {/* Mots-clés */}
        <meta name="keywords" content={t('management.pageKeywords')} />

        {/* Auteur */}
        <meta name="author" content={t('management.pageAuthor')} />

        {/* Open Graph pour Facebook/LinkedIn */}
        <meta property="og:title" content={t('management.ogTitle')} />
        <meta property="og:description" content={t('management.ogDescription')} />
        <meta property="og:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />
        <meta property="og:url" content="https://cia.ift.ulaval.ca/management" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('management.ogSiteName')} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('management.twitterTitle')} />
        <meta name="twitter:description" content={t('management.twitterDescription')} />
        <meta name="twitter:image" content="https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp" />

        {/* URL canonique */}
        <link rel="canonical" href="https://cia.ift.ulaval.ca/management" />

        {/* Langue */}
        <html lang="fr" />

        {/* Données structurées JSON-LD pour Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "${t('management.structuredData.name')}",
              "url": "https://cia.ift.ulaval.ca/management",
              "description": "${t('management.structuredData.description')}",
              "mainEntity": {
                "@type": "Organization",
                "name": "${t('management.structuredData.organizationName')}",
                "url": "https://cia.ift.ulaval.ca",
                "logo": "https://cia.ift.ulaval.ca/banner/CIA_LOGO.webp",
                "description": "${t('management.structuredData.organizationDescription')}",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Québec, Canada"
                },
                "parentOrganization": {
                  "@type": "EducationalOrganization",
                  "name": "Université Laval"
                },
                "sameAs": [
                  "https://www.instagram.com/ciaulaval/",
                  "https://www.linkedin.com/company/cia-ulaval/posts/?feedView=all",
                  "https://github.com/cia-ulaval",
                  "https://www.facebook.com/people/Club-dintelligence-artificielle-de-lUniversité-Laval/100089798911416/?rdid=lgzUe6mitaRXBT9H&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AqQ3bCSQp"
                ],
                "member": [
                  {
                    "@type": "Person",
                    "name": "Nathaniel D'Amours",
                    "jobTitle": "${t('management.roles.president')}",
                    "sameAs": "https://www.linkedin.com/in/nathaniel-damours"
                  },
                  {
                    "@type": "Person",
                    "name": "Jordan Mathieu",
                    "jobTitle": "${t('management.roles.projectsLeader')}",
                    "sameAs": "https://www.linkedin.com/in/jordan-math/"
                  },
                  {
                    "@type": "Person",
                    "name": "Louis-Étienne Messier",
                    "jobTitle": "${t('management.roles.logisticsLeader')}",
                    "sameAs": "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/"
                  },
                  {
                    "@type": "Person",
                    "name": "Jade Piller Cammal",
                    "jobTitle": "${t('management.roles.talentsLeader')}",
                    "sameAs": "https://linkedin.com/in/jade-piller-cammal-242b88261/"
                  },
                  {
                    "@type": "Person",
                    "name": "Alexandrine Lehoux",
                    "jobTitle": "${t('management.roles.financeLeader')}",
                    "sameAs": "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/"
                  },
                  {
                    "@type": "Person",
                    "name": "Yves Faye",
                    "jobTitle": "${t('management.roles.marketingLeader')}",
                    "sameAs": "https://www.linkedin.com/in/yves-faye-3b45062a5/"
                  },
                  {
                    "@type": "Person",
                    "name": "Anthony Lavertu",
                    "jobTitle": "${t('management.roles.externalRelationsManager')}",
                    "sameAs": "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/"
                  },
                  {
                    "@type": "Person",
                    "name": "Dereck Bélanger",
                    "jobTitle": "${t('management.roles.websiteManager')}",
                    "sameAs": "https://www.linkedin.com/in/dereck-bélanger-437259338/"
                  },
                  {
                    "@type": "Person",
                    "name": "Guilhem Ané",
                    "jobTitle": "${t('management.roles.trainingsManager')}",
                    "sameAs": "https://www.linkedin.com/in/guilhemane/"
                  },
                  {
                    "@type": "Person",
                    "name": "Ulysse Gagné",
                    "jobTitle": "${t('management.roles.activitiesLeader')}"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Président */}
        {renderCards(president, t('management.sections.president'), 'large')}

        {/* Leaders */}
        {renderCards(logistics, t('management.sections.leadership'), 'medium')}

        {/* Responsables par département */}
        {renderCards(talentResponsables, t('management.sections.talentTeam'), 'medium')}
        {renderCards(marketingResponsables, t('management.sections.marketingTeam'), 'medium')}
        {renderCards(projectLeads, t('management.sections.projectsTeam'), 'medium')}
        {renderCards(financeResponsables, t('management.sections.financeTeam'), 'medium')}
        {renderCards(activitiesResponsables, t('management.sections.activitiesTeam'), 'medium')}
        {renderCards(teamLeads, t('management.sections.teamLeads'), 'medium')}
      </motion.div>
    </>
  );
};

export default Management;
