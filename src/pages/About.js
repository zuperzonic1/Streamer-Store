import { useNavigate } from "react-router-dom";
import images from "./images";

function Cart({ cart }) {
  const navigate = useNavigate();

  function goToThanks(e) {
    e.preventDefault();
    navigate("/cart/cartconfirmation", { state: { cart } });
  }

  //function to calculate the total cost of the cart items
  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <form className="cart-cont" onSubmit={goToThanks}>
      <h1 className="cart-title">CART & PAYMENT</h1>

      <section className="cart-details-container">
        <div className="cart-items-container">
          <h1 className="cart-title">Your Shopping Cart</h1>
          <section className="cart-items-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  className="item-image"
                  src={images[item.image]}
                  alt={item.image}
                />{" "}
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price}</p>
                <p className="item-quantity">Qty: {item.quantity || 1}</p>
              </div>
            ))}
          </section>
          <div className="cart-total">
            <p>Price: ${calculateTotal()}</p>
            <p>Shipping: $0.00</p>
            <p>tax: ${(calculateTotal() * 0.1).toFixed(2)}</p>
            <p>Total: ${(calculateTotal() * 1.1).toFixed(2)}</p>
          </div>
        </div>

        <div className="billing-info-container">
          {/* had to remove for the sake of time, made it an autopay for astetics */}
        </div>

        <div className="payment-details-container">
          {/* had to remove for the sake of time, made it an autopay for astetics */}
        </div>

        <div className="order-summary-container">
          {/* had to remove for the sake of time, made it an autopay for astetics */}
        </div>
      </section>

      <input
        className="checkout-button"
        type="submit"
        value="Proceed & Autopay"
      />
    </form>
  );
}

export default Cart;
