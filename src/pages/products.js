import img from '../images/1.jpg';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (

        // create cards as components when i have time
        <>
            <h1 className="products-page-title">CATEGORIE NAME</h1>
            <section className='products-list'>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
            </section>
            <section className='products-list'>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
            </section>
        </>
    );
}

export default Products;