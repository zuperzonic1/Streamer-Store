import React from 'react';
import images from './images'; 

const ProductCard = ({ product }) => {
    let imageRoute = images[product.image];

    // Split the description into an array of words
    const words = product.description.split(' ');

    // Select the first 20 words and join them back into a string
    const limitedDescription = words.slice(0, 20).join(' ');

    return (
        <div className="product-card">
            <img src={imageRoute} alt={product.name} />
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <p>{limitedDescription}</p>
        </div>
    );
};

export default ProductCard;