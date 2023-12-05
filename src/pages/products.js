import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import ProductCard from './ProductCard'; // Assuming ProductCard is in the same directory

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const productsCollectionRef = collection(db, 'Products'); 
            const data = await getDocs(productsCollectionRef);
            const items = [];
            data.docs.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id });
            });
            setProducts(items);
        };

        getProducts();
    }, []);

    // Using a for loop to create ProductCard components
    const productCards = [];
    for (const product of products) {
        productCards.push(<ProductCard key={product.id} product={product} />);
    }

    return (
        <div>
            <h1>Products</h1>
            <div className='products-container'>
                {productCards}
            </div>
        </div>
    );
};

export default Products;
