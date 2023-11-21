import {useNavigate} from 'react-router-dom';

// import Contact from "./Contact";

function CartConfirmation(props){

    const navigate = useNavigate();

    function goToThanks(e){
        e.preventDefault();
        console.log("takes us to homepage");
        navigate('/imagine');
    }
    
    return (
        <form className='cont' onSubmit={goToThanks}>
            <section className='cart-container'>
                <h1>CART CONFIRMATION</h1>
                <div className='checkout-list'>
                    <div className='cart-item'>
                        <p>Item 1</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                    <div className='cart-item'>
                        <p>Item 1</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                    <div className='cart-item'>
                        <p>Item 1</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                </div>
                

                <input className='contact-button' type="submit" value="BUY NOW" />
            </section>
        </form>
        )
    }

    export default CartConfirmation;