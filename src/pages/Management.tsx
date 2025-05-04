import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const cardData = [
  {
    title: "Nathaniel D'Amours",
    text: "President",
    imgSrc: "/img/Nathaniel.jpg",
    linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
  },
  {
    title: "Mathieu Bazinet",
    text: "Formation VP",
    imgSrc: "/img/Mathieu.jpg",
    linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
  },
  {
    title: "Jordan Mathieu",
    text: "Partnership VP",
    imgSrc: "/img/Jordan.jpg",
    linkedIn: "https://www.linkedin.com/in/jordan-math/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Recruiting VP",
    imgSrc: "/img/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
  {
    title: "Anthony Lavertu",
    text: "External Affairs VP",
    imgSrc: "/img/Anthony.jpg",
    linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
  },
  {
    title: "Alexandrine Lehoux",
    text: "Partnership VP",
    imgSrc: "/img/Alexandrine.jpg",
    linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
  },
  {
    title: "Almaoudata Walet Babahmed",
    text: "Competition VP",
    imgSrc: "/img/test.jpg",
    linkedIn: "",
  },
  {
    title: "Yves Mamadou Faye",
    text: "Communication VP",
    imgSrc: "/img/Yves.png",
    linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
  },
];

const cardData2 = [
  {
    title: "Dereck Bélanger",
    text: "CIA Website Manager",
    imgSrc: "/img/Dereck.HEIC",
    linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
  },
  {
    title: "Deoth Guei",
    text: "Team Lead (F1 Tenth Team 1)",
    imgSrc: "/img/test.jpg",
    linkedIn: "https://www.linkedin.com/in/deoth-guei-382269191/",
  },
  {
    title: "Alban Sarrazin",
    text: "Team Lead (F1 Tenth Team 2)",
    imgSrc: "/img/test.jpg",
    linkedIn: "https://www.linkedin.com/in/alban-sarrazin-561803252/",
  },
  {
    title: "Benjamin Leblanc",
    text: "Team Lead (TreeCore)",
    imgSrc: "/img/test.jpg",
    linkedIn: "https://www.linkedin.com/in/benjamin-leblanc-a9217128b/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Team Lead (FlappyEEG)",
    imgSrc: "/img/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
];

const cardData3 = [
  {
    title: "Dereck Bélanger",
    text: "CIA Website Manager",
    imgSrc: "/Dereck.HEIC",
    linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
  },
];

const Management = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <h1 className="text-center text-5xl font-bold gradient-text mt-20 mb-20">
          Executive Team
        </h1>
        <Row xs={1} sm={2} md={3} className="g-3 justify-content-center">
          {cardData.map((card, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <a href={card.linkedIn} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                  style={{ width: "14rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    style={{ height: "200px", objectFit: "cover" }} // Adjust the height as needed
                  />
                  <Card.Body>
                    <Card.Title className="text-gray-100">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="text-gray-200">{card.text}</Card.Text>
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
        <Row xs={1} sm={2} md={3} className="g-3 justify-content-center">
          {cardData2.map((card, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <a href={card.linkedIn} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                  style={{ width: "14rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    style={{ height: "200px", objectFit: "cover" }} // Adjust the height as needed
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
          Associate
        </h1>
        <Row xs={1} sm={2} md={3} className="g-3 justify-content-center">
          {cardData3.map((card, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <a href={card.linkedIn} target="_blank" rel="noopener noreferrer">
                <Card
                  className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                  style={{ width: "14rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    style={{ height: "200px", objectFit: "cover" }} // Adjust the height as needed
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
