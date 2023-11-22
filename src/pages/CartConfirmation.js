import { useNavigate } from 'react-router-dom';

function CartConfirmation(props) {
    const navigate = useNavigate();

    function goToCategories(e) {
        e.preventDefault();
        navigate('/categories');
    }
    
    return (
        <form className='' onSubmit={goToCategories}>
            <section className='cart-container'>
                <h1>CART CONFIRMATION</h1>

                <div className='confirmation-message'>
                    <p>Thanks for Your order, you can download your files right now by clicking on the download button below</p>
                </div>

                <div className='checkout-list'>
                    <section className='confirmation-items-container'>
                        <div className='confirmation-item'>
                            <p className='product-name'>Product 1</p>
                            <p className='product-price'>$19.99</p>
                            <p className='product-price'>Download</p>
                        </div>

                        <div className='confirmation-item'>
                            <p className='product-name'>Product 2</p>
                            <p className='product-price'>$29.99</p>
                            <p className='product-price'>Download</p>
                        </div>

                        <div className='confirmation-item'>
                            <p className='product-name'>Product 3</p>
                            <p className='product-price'>$39.99</p>
                            <p className='product-price'>Download</p>
                        </div>
                    </section>
                </div>
                <input className='contact-button' type="submit" value="Back to store" />
            </section>
        </form>
    );
}

export default CartConfirmation;
