import {useNavigate} from 'react-router-dom';

function Cart(props){

    const navigate = useNavigate();

    function goToThanks(e){
        e.preventDefault();
        console.log("takes us to homepage");
        navigate('/cart/cartconfirmation');
    }
    
    return (
        <form className='cart-cont' onSubmit={goToThanks}>
            <h1 className='cart-title'>CART & PAYMENT</h1>
            
            <section className='cart-details-container'>
                <div className='cart-items-container'>
                    <div className='checkout-list'>
                       
                    <div className='cart-cont'>
                        <h1 className='cart-title'>Your Shopping Cart</h1>
                        
                        <section className='cart-items-container'>
                            <div className='cart-item'>
                                <p className='item-name'>Product 1</p>
                                <p className='item-price'>$19.99</p>
                                <p className='item-quantity'>Qty: 2</p>

                            </div>

                            <div className='cart-item'>
                                <p className='item-name'>Product 2</p>
                                <p className='item-price'>$29.99</p>
                                <p className='item-quantity'>Qty: 1</p>

                            </div>

                            <div className='cart-item'>
                                <p className='item-name'>Product 3</p>
                                <p className='item-price'>$15.99</p>
                                <p className='item-quantity'>Qty: 3</p>
                            </div>
                        </section>

                        <div className='cart-total'>
                            <p>Total: $102.95</p>
                        </div>
                    </div>

                    </div>
                </div>
                
                <div className='billing-info-container'>
                    <h2 className='cart-section-title'>Billing Information</h2>
                    <div className='billing-info'>
                        <label className='billing-label'>
                            Full Name:
                            <input className='billing-input' type="text" placeholder="name..." />
                        </label>
                        <label className='billing-label'>
                            Address:
                            <input className='billing-input' type="text" placeholder="123 Street..." />
                        </label>
                    </div>
                </div>
                
                <div className='payment-details-container'>
                    <h2 className='cart-section-title'>Payment Details</h2>
                    <div className='payment-details'>
                        <label className='payment-label'>
                            Card Number:
                            <input className='payment-input' type="text" placeholder="XXXX XXXX XXXX XXXX" />
                        </label>
                        <label className='payment-label'>
                            Expiry Date:
                            <input className='payment-input' type="text" placeholder="MM/YY" />
                        </label>
                    </div>
                </div>
                
                <div className='order-summary-container'>
                    <h2 className='cart-section-title'>Order Summary</h2>
                    <div className='order-summary'>
                        <p className='order-item'>Subtotal:</p>
                        <p className='order-item'>Shipping:</p>
                        <p className='order-item'>Total:</p>
                    </div>
                </div>
            </section>
            
            <input className='checkout-button' type="submit" value="Proceed to Checkout" />
        </form>
    )
}

export default Cart;
