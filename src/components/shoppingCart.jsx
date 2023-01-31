import { RiShoppingCartFill } from "react-icons/ri";
import "../stylesheets/shoppingCart.css";

const ShoppingCart = ({ quantity }) => {
  return (
    <div className="cart-container">
      <h3 className="quantity">{quantity}</h3>
      <div className="cart-section">
        <RiShoppingCartFill size={50} fill={"#8c0fff"} />
      </div>
    </div>
  );
};

export default ShoppingCart;
