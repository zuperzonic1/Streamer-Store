import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;
