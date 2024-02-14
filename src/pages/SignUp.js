import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import img from "../images/1.jpg";

function SignUp(props) {
  const navigate = useNavigate();

  function goToThanks(e) {
    e.preventDefault();
    console.log("takes us to homepage");
    navigate("/categories");
  }

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#8f8f8f" }}
    >
      <h1
        className="mb-4 text-center"
        style={{ color: "#333", fontSize: "2rem" }}
      >
        SIGN UP
      </h1>
      <Image
        src={img}
        className="mb-4"
        alt="kids playing in music park"
        rounded
        fluid
      />
      <Form
        onSubmit={goToThanks}
        className="w-100"
        style={{ maxWidth: "330px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First name ..."
            onChange={props.handleFirstNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last name ..."
            onChange={props.handleLastNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email ..."
            onChange={props.handleEmailChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="text"
            name="age"
            placeholder="Age ..."
            onChange={props.handleAgeChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          SIGN UP
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
