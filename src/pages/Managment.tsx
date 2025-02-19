import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const cardData = [
  {
    title: "Nathaniel D'Amours",
    text: "President",
    imgSrc: "/media/Nathaniel.jpg",
    linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
  },
  {
    title: "Mathieu Bazinet",
    text: "Formation VP",
    imgSrc: "/media/Mathieu.jpg",
    linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
  },
  {
    title: "Jordan Mathieu",
    text: "Partnership VP",
    imgSrc: "/media/Jordan.jpg",
    linkedIn: "https://www.linkedin.com/in/jordan-math/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Recruiting VP",
    imgSrc: "/media/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
  {
    title: "Anthony Lavertu",
    text: "External Affairs VP",
    imgSrc: "/media/Anthony.jpg",
    linkedIn: "",
  },
  {
    title: "Alexandrine Lehoux",
    text: "Partnership VP",
    imgSrc: "/media/Alexandrine.jpg",
    linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
  },
  {
    title: "Almaoudata Walet Babahmed",
    text: "Competition VP",
    imgSrc: "/media/test.jpg",
    linkedIn: "",
  },
  {
    title: "Yves Mamadou Faye",
    text: "Communication VP",
    imgSrc: "/media/Yves.png",
    linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
  },
];

const cardData2 = [
  {
    title: "Dereck Bélanger",
    text: "CIA Website Manager",
    imgSrc: "/media/Dereck.HEIC",
    linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
  },
  {
    title: "Deoth Guei",
    text: "Team Lead (F1 Tenth Team 1)",
    imgSrc: "/media/test.jpg",
    linkedIn: "",
  },
  {
    title: "Alban Sarrazin",
    text: "Team Lead (F1 Tenth Team 2)",
    imgSrc: "/media/test.jpg",
    linkedIn: "",
  },
  {
    title: "Benjamin Leblanc",
    text: "Team Lead (TreeCore)",
    imgSrc: "/media/test.jpg",
    linkedIn: "",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Team Lead (FlappyEEG)",
    imgSrc: "/media/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
];

const Management = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <h1 className="text-center text-5xl font-bold gradient-text mt-20 mb-20">
          Executive Team
        </h1>
        <Row xs={1} md={3} className="g-3 justify-content-center">
          {cardData.map((card, idx) => (
            <Col
              key={idx}
              sm={6}
              md={cardData.length % 3 === 1 ? 6 : 4}
              className="d-flex justify-content-center"
            >
              <a href={card.linkedIn} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    style={{ height: "300px", objectFit: "cover" }} // Adjust the height as needed
                  />
                  <Card.Body>
                    <Card.Title className="text-gray-200">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="text-gray-400">{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </section>
      <section className="max-w-7xl mx-auto px-4 pt-12">
        <h1 className="text-center text-5xl font-bold gradient-text mt-20 mb-20">
          Leadership Team
        </h1>
        <Row xs={1} md={3} className="g-3 justify-content-center">
          {cardData2.map((card, idx) => (
            <Col
              key={idx}
              sm={6}
              md={cardData2.length % 3 === 1 ? 6 : 4}
              className="d-flex justify-content-center"
            >
              <a href={card.linkedIn} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    style={{ height: "300px", objectFit: "cover" }} // Adjust the height as needed
                  />
                  <Card.Body>
                    <Card.Title className="text-gray-200">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="text-gray-400">{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Management;
