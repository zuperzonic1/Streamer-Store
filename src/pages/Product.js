import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import images from "./images";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";

const Product = ({ addToCart }) => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const productsCollectionRef = collection(db, "Products");
      const data = await getDocs(productsCollectionRef);
      const foundProduct = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .find((p) => p.name.toLowerCase().replace(/ /g, "-") === productName);

      if (foundProduct) {
        setProduct(foundProduct);
      }
    };

    getProduct();
  }, [productName]);

  if (!product) {
    return <Container>Loading...</Container>;
  }

  let imageRoute = images[product.image];

  return (
    <Container
      className="my-5 p-3 bg-dark text-light rounded"
      style={{ border: "1px solid #5f5f5f" }}
    >
      <Row>
        <Col lg={6} className="order-lg-2 mb-3">
          <img
            src={imageRoute}
            alt={product.name}
            className="img-fluid rounded"
          />
        </Col>
        <Col lg={6} className="order-lg-1">
          <h1 className="display-5 mb-3">{product.name}</h1>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark text-light">
              Name: <span className="text-white">{product.name}</span>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light">
              Size: <span className="text-white">{product.size}</span>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light">
              Description:{" "}
              <span className="text-white">{product.description}</span>
            </ListGroup.Item>
          </ListGroup>
          <p className="fs-4 mt-3">${product.price}</p>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
