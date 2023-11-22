import img from '../images/1.jpg';

const Product = () => {
    return (
        <section>
            <h1 className="product-title">Product Name</h1>
            <div className="product-cont">
                <div className="product-img">
                    <img src={img} alt="mockup img" />
                </div>
                <div className="product-details">
                <ul className="product-description-list">
                    <li className="product-description-item">Product description</li>
                    <li className="product-description-item">Product description</li>
                    <li className="product-description-item">Product description</li>
                    <li className="product-description-item">Product description</li>
                </ul>
                    <p className="product-price">$ 9.99</p>
                    <button className="product-btn">Add to Cart</button>
                </div>
            </div>
            <br />
            <h1 className="product-title">Suggested Products</h1>
            <section className='product-card-suggestion-list'>
                <div className="product-card-suggestion">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card-suggestion">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card-suggestion">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <div className="product-card-suggestion">
                    <img src={img} alt="mockup img" />
                    <h1>Product Name</h1>
                    <h2>Price</h2>
                    <p>Product description</p>
                </div>
                <br />
            </section>
        </section>
    );
}

export default Product;