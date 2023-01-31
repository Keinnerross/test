import { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import "../stylesheets/productCard.css";

const ProductCard = ({
  title,
  price,
  fontSize,
  handleSetting,
  id,
  onSubmit,
}) => {
  const [quantity, setQuantity] = useState("1");

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const sendQuantity = (e) => {
    e.preventDefault();
    onSubmit(quantity);
  };

  return (
    <>
      <div className="card-container">
        <form onSubmit={sendQuantity}>
          <div className="card-section">
            <div className="product-img"></div>
            <div className="card-section-title">
              <h3
                className="product-title"
                style={{ fontSize: `${fontSize}px` }}
              >
                {title}
              </h3>

              <RiEdit2Fill
                onClick={() => handleSetting(id)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="product-section">
              <h3 className="product-price">{price}</h3>
              <input
                className="product-quantity-input"
                step="1"
                type="number"
                onChange={(e) => handleQuantity(e)}
                value={quantity}
              />
            </div>
            <p className="product-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              minus laudantium, qui quae quod consequatur, at corrupti officia
              ut dolorem eaque atque asperiores tempore est quidem magni sed eos
              veritatis.
            </p>
            <div className="product-cart-section">
              <button className="product-add-cart-btn" type="submit">
                Add to cart
              </button>
              <a className="product-learn">Learn more</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductCard;
