import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink, User } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

interface TeamMember {
  name: string;
  role: string;
  imgSrc?: string;
  linkedIn?: string;
  isVacant?: boolean;
}

const Management: React.FC = () => {
  // Président
  const president: TeamMember[] = [
    {
      name: "Nathaniel D'Amours",
      role: "Président",
      imgSrc: "/portrait/Nathaniel.jpg",
      linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
    },
  ];

  // Leaders principaux
  const leaders: TeamMember[] = [
    {
      name: "Jordan Mathieu",
      role: "Leader des projets",
      imgSrc: "/portrait/Jordan.jpg",
      linkedIn: "https://www.linkedin.com/in/jordan-math/",
    },
    {
      name: "Louis-Étienne Messier",
      role: "Leader en logistique",
      imgSrc: "/portrait/Louis.jpg",
      linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
    },
    {
      name: "Alexandrine",
      role: "Leader des finances",
      imgSrc: "/portrait/Alexandrine.jpg",
      linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
    },
    {
      name: "Yves",
      role: "Leader du marketing",
      imgSrc: "/portrait/Yves.png",
      linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
    },
    {
      name: "",
      role: "Leader des talents",
      imgSrc: "",
      linkedIn: "",
      isVacant: true,
    },
    {
      name: "Julien",
      role: "Leader de la logistique",
      imgSrc: "",
      linkedIn: "",
      isVacant: true, //Enlever quand Julien donne ses infos
    },
  ];

  // Responsables Talents
  const talentResponsables: TeamMember[] = [
    {
      name: "",
      role: "Responsable du recrutement",
      isVacant: true,
    },
    {
      name: "",
      role: "Responsable de l'embarquement",
      isVacant: true,
    },
    {
      name: "",
      role: "Responsable de l'engagement",
      isVacant: true,
    },
  ];

  // Responsables Finances
  const financeResponsables: TeamMember[] = [
    {
      name: "Anthony",
      role: "Responsable des relations externes",
      imgSrc: "/portrait/Anthony.jpg",
      linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
    },
    {
      name: "",
      role: "Responsable des partenariats",
      isVacant: true,
    },
    {
      name: "",
      role: "Responsable du trésor",
      isVacant: true,
    },
  ];

  // Responsables Marketing
  const marketingResponsables: TeamMember[] = [
    {
      name: "Dereck",
      role: "Responsable du site web",
      imgSrc: "/portrait/Dereck.HEIC",
      linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
    },
    {
      name: "",
      role: "Responsable des designs",
      isVacant: true,
    },
    {
      name: "",
      role: "Responsable des communications",
      isVacant: true,
    },
  ];

  // Responsables Activités
  const activitiesResponsables: TeamMember[] = [
    {
      name: "Mathieu Bazinet",
      role: "Responsable des formations",
      imgSrc: "/portrait/Mathieu.jpg",
      linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
    },
    {
      name: "Almaoudata",
      role: "Responsable des compétitions",
      imgSrc: "/portrait/almaoudata.jpeg",
      linkedIn: "https://www.linkedin.com/in/alma-walet-93418b325/",
    },
    {
      name: "",
      role: "Responsable du social",
      isVacant: true,
    },
    {
      name: "",
      role: "Responsable de la reconnaissance",
      isVacant: true,
    },
  ];

  // Responsables Projets
  const projectsResponsables: TeamMember[] = [
    {
      name: "",
      role: "Team lead 1",
      isVacant: true,
    },
    {
      name: "",
      role: "Team lead 2",
      isVacant: true,
    },
    {
      name: "",
      role: "Team lead 3",
      isVacant: true,
    },
  ];

  const renderCards = (
    members: TeamMember[],
    titleKey: string,
    cardSize: "large" | "medium" | "small"
  ) => {
    const cardSizes = {
      large: {
        width: "16rem",
        height: "400px",
        imageHeight: "190px",
        bodyHeight: "210px",
        titleSize: "text-xl",
        roleSize: "text-base",
        headerSize: "text-6xl",
      },
      medium: {
        width: "14rem",
        height: "360px",
        imageHeight: "170px",
        bodyHeight: "190px",
        titleSize: "text-lg",
        roleSize: "text-sm",
        headerSize: "text-5xl",
      },
      small: {
        width: "12rem",
        height: "300px",
        imageHeight: "140px",
        bodyHeight: "160px",
        titleSize: "text-base",
        roleSize: "text-sm",
        headerSize: "text-4xl",
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
        <h1
          className={`font-bold mb-4 text-center mt-16 pb-12 ${size.headerSize}`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            {titleKey}
          </span>
        </h1>
        <div
          className={`flex flex-wrap gap-4 justify-center ${
            cardSize === "large" ? "" : cardSize === "medium" ? "" : ""
          }`}
        >
          {members.map((member, idx) => (
            <div key={idx}>
              {member.isVacant ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-900/40 border-2 border-red-800/50 border-dashed text-white mb-12 relative overflow-hidden rounded-lg"
                  style={{
                    width: size.width,
                    height: size.height,
                  }}
                >
                  <div
                    className="bg-red-800/20 flex items-center justify-center"
                    style={{ height: size.imageHeight }}
                  >
                    <User className="w-16 h-16 text-red-400/50" />
                  </div>
                  <div
                    className="text-center flex flex-col justify-center p-2"
                    style={{ height: size.bodyHeight }}
                  >
                    <div className="flex-grow flex flex-col justify-center">
                      <h3
                        className={`text-red-300/70 mb-1 ${size.titleSize} font-semibold`}
                      >
                        Poste Vacant
                      </h3>
                      <p
                        className={`text-red-400/60 ${size.roleSize} leading-tight`}
                      >
                        {member.role}
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-1 text-red-500/50">
                      <small className="text-xs font-medium">
                        Poste en entrevue
                      </small>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="no-underline"
                >
                  <div
                    className="bg-red-900/80 border-2 border-red-700 hover:border-red-500 text-white mb-12 relative overflow-hidden rounded-lg transition-all duration-300"
                    style={{
                      width: size.width,
                      height: size.height,
                      cursor: "pointer",
                    }}
                  >
                    {/* Badge LinkedIn - visible au hover */}
                    <div className="absolute top-0 right-0 m-1 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-red-600 hover:bg-red-500 rounded-full p-1.5 shadow-lg transition-colors">
                        <Linkedin className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Overlay hover avec icône */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="text-center">
                        <ExternalLink className="w-6 h-6 text-white mb-1" />
                        <p className="text-white text-xs font-semibold">
                          Voir LinkedIn
                        </p>
                      </div>
                    </div>

                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full object-cover"
                      style={{ height: size.imageHeight }}
                    />
                    <div
                      className="text-center flex flex-col justify-between p-2"
                      style={{ height: size.bodyHeight }}
                    >
                      <div className="flex-grow flex flex-col justify-center">
                        <h3
                          className={`text-gray-200 mb-1 ${size.titleSize} leading-tight`}
                        >
                          {member.name}
                        </h3>
                        <p
                          className={`text-gray-400 ${size.roleSize} leading-tight`}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* Indicateur LinkedIn dans le footer de la carte */}
                      <div className="flex items-center justify-center mt-1 text-red-400 hover:text-red-300 transition-colors">
                        <Linkedin className="w-3 h-3 mr-1" />
                        <small className="text-xs font-medium">LinkedIn</small>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Président */}
        {renderCards(president, "Président", "large")}

        {/* Leaders */}
        {renderCards(leaders, "Leadership", "medium")}

        {/* Responsables par département */}
        {renderCards(talentResponsables, "Équipe Talents", "small")}
        {renderCards(financeResponsables, "Équipe Finances", "small")}
        {renderCards(marketingResponsables, "Équipe Marketing", "small")}
        {renderCards(activitiesResponsables, "Équipe Activités", "small")}
        {renderCards(projectsResponsables, "Équipe Projets", "small")}
      </motion.div>
    </>
  );
};

export default Management;
