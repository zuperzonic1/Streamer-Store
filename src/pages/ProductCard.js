import images from "./images";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  let imageRoute = images[product.image];

  // splits the description into an array of words
  const words = product.description.split(" ");

  // selects the first 10 words and join them back into a string
  const limitedDescription = words.slice(0, 10).join(" ");

  // the 'g' makes changes for all the spaces, stands for global.
  const formattedName = product.name.toLowerCase().replace(/ /g, "-");

  return (
    <div className="product-card">
      <Link to={`/product/${formattedName}`}>
        <img src={imageRoute} alt={product.name} />
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <p>{limitedDescription}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
