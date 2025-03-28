import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";
import Head from "next/head";

const cardData = [
  {
    title: "Nathaniel D'Amours",
    text: "President",
    imgSrc: "/portrait/Nathaniel.jpg",
    linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
  },
  {
    title: "Mathieu Bazinet",
    text: "Formation VP",
    imgSrc: "/portrait/Mathieu.jpg",
    linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
  },
  {
    title: "Jordan Mathieu",
    text: "Partnership VP",
    imgSrc: "/portrait/Jordan.jpg",
    linkedIn: "https://www.linkedin.com/in/jordan-math/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Recruiting VP",
    imgSrc: "/portrait/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
  {
    title: "Anthony Lavertu",
    text: "External Affairs VP",
    imgSrc: "/portrait/Anthony.jpg",
    linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
  },
  {
    title: "Alexandrine Lehoux",
    text: "Partnership VP",
    imgSrc: "/portrait/Alexandrine.jpg",
    linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
  },
  {
    title: "Almaoudata Walet Babahmed",
    text: "Competition VP",
    imgSrc: "/portrait/almaoudata.jpeg",
    linkedIn: "https://www.linkedin.com/in/alma-walet-93418b325/",
  },
  {
    title: "Yves Mamadou Faye",
    text: "Communication VP",
    imgSrc: "/portrait/Yves.png",
    linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
  },
  {
    title: "Deoth Guei",
    text: "Team Lead (F1 Tenth Team 1)",
    imgSrc: "/portrait/deoth.jpeg",
    linkedIn: "https://www.linkedin.com/in/deoth-guei-382269191/",
  },
  {
    title: "Alban Sarrazin",
    text: "Team Lead (F1 Tenth Team 2)",
    imgSrc: "/portrait/alban.jpeg",
    linkedIn: "https://www.linkedin.com/in/alban-sarrazin-561803252/",
  },
  {
    title: "Benjamin Leblanc",
    text: "Team Lead (TreeCore)",
    imgSrc: "/portrait/benjamin.jpeg",
    linkedIn: "https://www.linkedin.com/in/benjamin-leblanc-a9217128b/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Team Lead (FlappyEEG)",
    imgSrc: "/portrait/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
  {
    title: "Dereck Bélanger",
    text: "CIA Website Manager",
    imgSrc: "/portrait/Dereck.HEIC",
    linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
  },
];

const Management = () => {
  const renderCards = (
    cards: { title: string; text: string; imgSrc: string; linkedIn: string }[],
    title: string
  ) => (
    <motion.section
      className="max-w-7xl mx-auto px-4 pb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-bold mb-4 text-center mt-20 pb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
          {title}
        </span>
      </h1>
      <Row xs={1} sm={2} md={3} className="g-3 justify-content-center">
        {cards.map((card, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <motion.a
              href={card.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                style={{
                  width: "90%",
                  maxWidth: "14rem",
                  minHeight: "300px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body
                  className="text-center d-flex flex-column justify-content-between"
                  style={{ flexGrow: 1 }}
                >
                  <Card.Title className="text-gray-200">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-gray-400">{card.text}</Card.Text>
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
        <title>Management Team | EEG Website</title>
        <meta
          name="description"
          content="Meet the Executive, Leadership, and Associate teams of the EEG organization. Learn more about their roles and connect with them on LinkedIn."
        />
        <meta
          name="keywords"
          content="EEG, Management, Team, Leadership, Executive, Associates, LinkedIn"
        />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Management Team | EEG Website" />
        <meta
          property="og:description"
          content="Meet the Executive, Leadership, and Associate teams of the EEG organization. Learn more about their roles and connect with them on LinkedIn."
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
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {renderCards(cardData.slice(0, 8), "Executive Team")}
        {renderCards(cardData.slice(8, 12), "Leadership Team")}
        {renderCards(cardData.slice(12), "Associates")}
      </motion.div>
    </>
  );
};

export default Management;
