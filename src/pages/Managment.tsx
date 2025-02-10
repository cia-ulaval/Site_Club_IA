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
  },
  {
    title: "Louis-Étienne Messier",
    text: "Recruiting VP",
    imgSrc: "/media/Louis.jpg",
  },
  {
    title: "Jordan Mathieu",
    text: "Partnership VP",
    imgSrc: "/media/Jordan.jpg",
  },
  {
    title: "Mathieu Bazinet",
    text: "Formation VP",
    imgSrc: "/media/Mathieu.jpg",
  },
  {
    title: "Anthony Lavertu",
    text: "External Affairs VP",
    imgSrc: "/media/Anthony.jpg",
  },
  {
    title: "Alexandrine Lehoux",
    text: "Partnership VP",
    imgSrc: "/media/Alexandrine.jpg",
  },
  {
    title: "Almaoudata Walet Babahmed",
    text: "Competition VP",
    imgSrc: "/media/test.jpg",
  },
  {
    title: "Yves Mamadou Faye",
    text: "Communication VP",
    imgSrc: "/media/Yves.png",
  },
];

const cardData2 = [
  {
    title: "Dereck Bélanger",
    text: "CIA Website Manager",
    imgSrc: "/media/Dereck.HEIC",
  },
  {
    title: "Deoth Guei",
    text: "Team Lead (F1 Tenth Team 1)",
    imgSrc: "/media/test.jpg",
  },
  {
    title: "Alban Sarrazin",
    text: "Team Lead (F1 Tenth Team 2)",
    imgSrc: "/media/test.jpg",
  },
  {
    title: "Benjamin Leblanc",
    text: "Team Lead (TreeCore)",
    imgSrc: "/media/test.jpg",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Team Lead (FlappyEEG)",
    imgSrc: "/media/Louis.jpg",
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
              <Card
                className="bg-red-900/80 border text-white mb-24"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Title className="text-gray-200">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-gray-400">{card.text}</Card.Text>
                </Card.Body>
              </Card>
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
              <Card
                className="bg-red-900/80 border text-white mb-24"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Title className="text-gray-200">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-gray-400">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Management;
