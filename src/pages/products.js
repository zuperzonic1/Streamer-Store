import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const Products = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsCollectionRef = collection(db, "Products");
      const data = await getDocs(productsCollectionRef);
      const items = [];
      data.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });

      // Filter products by category
      const filteredProducts = items.filter(
        (item) => item.category === category
      );

      setProducts(filteredProducts);
    };

    getProducts();
  }, [category]);

  return (
    <Container className="my-5">
      <h1 className="text-center text-uppercase mb-4 text-white">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
