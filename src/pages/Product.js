import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import images from "./images";

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

  // for debugging, checking if i am getting data.
  if (!product) {
    return <div>Loading...</div>;
  }

  let imageRoute = images[product.image];

  return (
    <section className="product-content">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-cont">
        <div className="product-img">
          <img src={imageRoute} alt={product.name} />
        </div>
        <div className="product-details">
          <ul className="product-description-list">
            <li className="product-description-item">
              Name:
              <span className="data-displayed">{product.name}</span>
            </li>
            <li className="product-description-item">
              Size:
              <span className="data-displayed">{product.size}</span>
            </li>
            <li className="product-description-item">
              Description:
              <span className="data-displayed">{product.description}</span>
            </li>
          </ul>
          <p className="product-price">${product.price}</p>
          <button className="product-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
