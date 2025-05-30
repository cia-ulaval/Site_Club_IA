import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Linkedin, ExternalLink } from "lucide-react";

const Management = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      title: "Nathaniel D'Amours",
      textKey: "management.roles.president",
      imgSrc: "/portrait/Nathaniel.jpg",
      linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
    },
    {
      title: "Mathieu Bazinet",
      textKey: "management.roles.formationVP",
      imgSrc: "/portrait/Mathieu.jpg",
      linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
    },
    {
      title: "Jordan Mathieu",
      textKey: "management.roles.partnershipVP",
      imgSrc: "/portrait/Jordan.jpg",
      linkedIn: "https://www.linkedin.com/in/jordan-math/",
    },
    {
      title: "Louis-Étienne Messier",
      textKey: "management.roles.recruitingVP",
      imgSrc: "/portrait/Louis.jpg",
      linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
    },
    {
      title: "Anthony Lavertu",
      textKey: "management.roles.externalAffairsVP",
      imgSrc: "/portrait/Anthony.jpg",
      linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
    },
    {
      title: "Alexandrine Lehoux",
      textKey: "management.roles.partnershipVP",
      imgSrc: "/portrait/Alexandrine.jpg",
      linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
    },
    {
      title: "Almaoudata Walet Babahmed",
      textKey: "management.roles.competitionVP",
      imgSrc: "/portrait/almaoudata.jpeg",
      linkedIn: "https://www.linkedin.com/in/alma-walet-93418b325/",
    },
    {
      title: "Yves Mamadou Faye",
      textKey: "management.roles.communicationVP",
      imgSrc: "/portrait/Yves.png",
      linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
    },
    {
      title: "Deoth Guei",
      textKey: "management.roles.teamLeadF1Team1",
      imgSrc: "/portrait/deoth.jpeg",
      linkedIn: "https://www.linkedin.com/in/deoth-guei-382269191/",
    },
    {
      title: "Alban Sarrazin",
      textKey: "management.roles.teamLeadF1Team2",
      imgSrc: "/portrait/alban.jpeg",
      linkedIn: "https://www.linkedin.com/in/alban-sarrazin-561803252/",
    },
    {
      title: "Benjamin Leblanc",
      textKey: "management.roles.teamLeadTreeCore",
      imgSrc: "/portrait/benjamin.jpeg",
      linkedIn: "https://www.linkedin.com/in/benjamin-leblanc-a9217128b/",
    },
    {
      title: "Louis-Étienne Messier",
      textKey: "management.roles.teamLeadFlappyEEG",
      imgSrc: "/portrait/Louis.jpg",
      linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
    },
    {
      title: "Dereck Bélanger",
      textKey: "management.roles.websiteManager",
      imgSrc: "/portrait/Dereck.HEIC",
      linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
    },
  ];

  const renderCards = (
    cards: {
      title: string;
      textKey: string;
      imgSrc: string;
      linkedIn: string;
    }[],
    titleKey: string
  ) => (
    <motion.section
      className="max-w-7xl mx-auto px-4 pb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-6xl font-bold mb-4 text-center mt-20 pb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
          {t(titleKey)}
        </span>
      </h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3 justify-content-center">
        {cards.map((card, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <motion.a
              href={card.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-decoration-none"
            >
              <Card
                className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-16 position-relative overflow-hidden"
                style={{
                  width: "12rem", // Réduit de 14rem à 12rem
                  height: "320px", // Réduit de 380px à 320px
                  cursor: "pointer",
                }}
              >
                {/* LinkedIn Badge - visible au hover */}
                <div className="position-absolute top-0 end-0 m-1 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-red-600 hover:bg-red-500 rounded-circle p-1.5 shadow-lg transition-colors">
                    <Linkedin className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Overlay hover avec icône */}
                <div className="position-absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 d-flex align-items-center justify-content-center opacity-0 hover:opacity-100">
                  <div className="text-center">
                    <ExternalLink className="w-6 h-6 text-white mb-1" />
                    <p className="text-white text-xs font-semibold">
                      Voir LinkedIn
                    </p>
                  </div>
                </div>

                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  style={{
                    height: "150px", // Réduit de 180px à 150px
                    objectFit: "cover",
                  }}
                />
                <Card.Body
                  className="text-center d-flex flex-column justify-content-between p-2"
                  style={{
                    height: "170px", // Réduit de 200px à 170px
                    flexGrow: 0,
                  }}
                >
                  <div className="flex-grow-1 d-flex flex-column justify-content-center">
                    <Card.Title
                      className="text-gray-200 mb-1"
                      style={{
                        fontSize: "0.9rem", // Réduit de 1rem à 0.9rem
                        lineHeight: "1.1",
                        minHeight: "2rem", // Réduit de 2.4rem à 2rem
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text
                      className="text-gray-400"
                      style={{
                        fontSize: "0.75rem", // Réduit la taille du texte
                        minHeight: "2.5rem", // Réduit de 3rem à 2.5rem
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: "1.2",
                      }}
                    >
                      {t(card.textKey)}
                    </Card.Text>
                  </div>

                  {/* Indicateur LinkedIn dans le footer de la carte */}
                  <div className="d-flex align-items-center justify-content-center mt-1 text-red-400 hover:text-red-300 transition-colors">
                    <Linkedin className="w-3 h-3 me-1" />
                    <small
                      style={{ fontSize: "0.7rem" }}
                      className="font-medium"
                    >
                      LinkedIn
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </motion.a>
          </Col>
        ))}
      </Row>
    </motion.section>
  );

  return (
    <>
      <Head>
        <title>{t("management.pageTitle")}</title>
        <meta name="description" content={t("management.pageDescription")} />
        <meta name="keywords" content={t("management.pageKeywords")} />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={t("management.pageTitle")} />
        <meta
          property="og:description"
          content={t("management.pageDescription")}
        />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta
          property="og:url"
          content="https://cialaval.vercel.app/management"
        />
        <meta property="og:type" content="website" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {renderCards(cardData.slice(0, 8), "management.executiveTeam")}
        {renderCards(cardData.slice(8, 12), "management.leadershipTeam")}
        {renderCards(cardData.slice(12), "management.associates")}
      </motion.div>
    </>
  );
};

export default Management;
