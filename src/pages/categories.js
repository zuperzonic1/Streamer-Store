import { Link, Outlet } from "react-router-dom";
import img from "../images/cat-banner.png";
import { Container, Row, Col, Card } from "react-bootstrap";

const Categories = () => {
  return (
    <>
      <Container className="text-center my-4 bg-dark text-light p-3 rounded">
        <img src={img} alt="Category Banner" className="img-fluid mb-3" />
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card
              as={Link}
              to="/categories/texture"
              className="h-100 text-decoration-none"
            >
              <Card.Body className="bg-secondary text-white">
                <Card.Title>TEXTURES</Card.Title>
                <Card.Text>
                  Oh, behold the wonders of randomness, where words frolic and
                  sentences dance in a chaotic symphony of pure, unadulterated
                  chance! Here we are, in the realm of unpredictability, where
                  the sentences are as random as a chicken playing the trombone
                  in a marching band of penguins!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              as={Link}
              to="/categories/chair"
              className="h-100 text-decoration-none"
            >
              <Card.Body className="bg-secondary text-white">
                <Card.Title>CHAIRS</Card.Title>
                <Card.Text>
                  Oh, behold the wonders of randomness, where words frolic and
                  sentences dance in a chaotic symphony of pure, unadulterated
                  chance! Here we are, in the realm of unpredictability, where
                  the sentences are as random as a chicken playing the trombone
                  in a marching band of penguins!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              as={Link}
              to="/categories/layout"
              className="h-100 text-decoration-none"
            >
              <Card.Body className="bg-secondary text-white">
                <Card.Title>LAYOUTS</Card.Title>
                <Card.Text>
                  Oh, behold the wonders of randomness, where words frolic and
                  sentences dance in a chaotic symphony of pure, unadulterated
                  chance! Here we are, in the realm of unpredictability, where
                  the sentences are as random as a chicken playing the trombone
                  in a marching band of penguins!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default Categories;
