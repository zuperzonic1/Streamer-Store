import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "../images/logo.png";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";

function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Admin = "admin";
  const Password = "password";

  function goToThanks(e) {
    e.preventDefault();

    if (username === Admin && password === Password) {
      navigate("/categories");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <Container className="d-grid h-100">
      <Card
        className="text-light bg-dark m-auto p-4"
        style={{ maxWidth: "600px", borderRadius: "10px" }}
      >
        <Card.Img
          variant="top"
          src={img}
          className="img-fluid"
          style={{ borderRadius: "5px" }}
        />
        <Card.Body>
          <Card.Title className="text-center">LOG-IN</Card.Title>
          <Form onSubmit={goToThanks}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>USERNAME:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username ..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PASSWORD:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password ..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" className="mt-2">
                Log In
              </Button>
            </div>
          </Form>
          <Row className="mt-3">
            <Col className="text-center">
              <Link to="/signup" className="text-light">
                Sign Up
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="/forgotpassword" className="text-light">
                Forgot Password
              </Link>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">
          <h5 className="text-center">WHO ARE WE ?</h5>
          Oh, behold the wonders of randomness, where words frolic and sentences
          dance in a chaotic symphony of pure, unadulterated chance! Here we
          are, in the realm of unpredictability, where the sentences are as
          random as a chicken playing the trombone in a marching band of
          penguins!
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default LogIn;
