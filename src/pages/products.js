import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import ProductCard from "./ProductCard";

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
    <div>
      {/* change the title to be uppercase */}
      {/* chartAt indexes the charectors*/}
      {/* .slice adds the rest of the text */}
      <h1 className="products-page-title">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
