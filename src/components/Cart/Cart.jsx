import { AiOutlineClose } from "react-icons/ai";
import "./cart.css";
import Footer from "../Footer/Footer";
import { CartContext } from "../CartContext";
import { useContext } from "react";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (key, size, change) => {
    const item = cartItems.find((i) => i.key === key && i.size === size);
    if (item) {
      updateQuantity(key, size, Math.max(1, item.quantity + change));
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.PriceProduct * item.quantity,
      0
    );
  };

  return (
    <div className="main__cart">
      <div className="container">
        <h2 className="cart__content" style={{ paddingTop: "30px" }}>
          Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="messageEmpty">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.key + item.size} className="cart__content">
              <div className="set_style_div">
                <div className="shop__content">
                  <img
                    src={item.ImageSrc}
                    className="ImgProductCheckout"
                    alt="Product"
                  />
                  <div className="set_style_div">
                    <h4>{item.TitleName}</h4>
                    <p>Size: {item.size}</p>
                  </div>
                </div>
              </div>
              <div className="Quantity">
                <span
                  className="btnsize"
                  onClick={() => handleQuantityChange(item.key, item.size, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </span>
                <span className="content-text-productsize">
                  {item.quantity}
                </span>
                <span
                  className="btnsize"
                  onClick={() => handleQuantityChange(item.key, item.size, 1)}
                >
                  +
                </span>
              </div>
              <div className="trigger__product_del">
                <p>SEK {(item.PriceProduct * item.quantity).toFixed(2)}</p>
                <AiOutlineClose
                  onClick={() => removeFromCart(item.key, item.size)}
                />
              </div>
            </div>
          ))
        )}
        <hr />
        <div className="cart__content Add_checkout">
          <div className="totalPrice">
            <div className="info_check">
              <h4>Subtotal</h4>
              <h3>SEK {calculateSubtotal().toFixed(2)}</h3>
            </div>
            <button className="btn checkBtn">Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;