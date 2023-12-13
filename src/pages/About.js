import { useNavigate } from 'react-router-dom';

function Cart({ cart }) {
    const navigate = useNavigate();

    function goToThanks(e) {
        e.preventDefault();
        navigate('/cart/cartconfirmation');
    }

    // Function to calculate the total cost of the cart items
    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);
    };
    
    return (
        <form className='cart-cont' onSubmit={goToThanks}>
            <h1 className='cart-title'>CART & PAYMENT</h1>
            
            <section className='cart-details-container'>
                <div className='cart-items-container'>
                    <h1 className='cart-title'>Your Shopping Cart</h1>
                    <section className='cart-items-list'>
                        {cart.map((item, index) => (
                            <div key={index} className='cart-item'>
                                <p className='item-name'>{item.name}</p>
                                <p className='item-price'>${item.price}</p>
                                <p className='item-quantity'>Qty: {item.quantity || 1}</p>
                            </div>
                        ))}
                    </section>
                    <div className='cart-total'>
                        <p>Total: ${calculateTotal()}</p>
                    </div>
                </div>
                
                <div className='billing-info-container'>
                    {/* Billing Information Form Fields */}
                </div>
                
                <div className='payment-details-container'>
                    {/* Payment Details Form Fields */}
                </div>
                
                <div className='order-summary-container'>
                    {/* Order Summary Section */}
                </div>
            </section>
            
            <input className='checkout-button' type="submit" value="Proceed to Checkout" />
        </form>
    );
}

export default Cart;
