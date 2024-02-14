import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Oops!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NoPage;
