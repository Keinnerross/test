import { useEffect, useState } from "react";
import "../stylesheets/productCard.css";

const ProductCard = ({ title, price, fonSize, handleSetting, id }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-section">
          <div className="product-img"></div>
          <div className="card-section-title">
            <h3 className="product-title" style={{ fontSize: { fonSize } }}>
              {title}
            </h3>

            <p onClick={() => handleSetting(id)}>edit</p>
          </div>
          <div className="product-section">
            <div className="product-price">{price}</div>
            <input
              className="product-quantity-input"
              type="number"
              placeholder="1"
            />
          </div>
          <div className="product-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            minus laudantium, qui quae quod consequatur, at corrupti officia ut
            dolorem eaque atque asperiores tempore est quidem magni sed eos
            veritatis.
          </div>
          <div className="product-cart-section">
            <button className="product-add-cart-btn">Add to cart</button>
            <a className="product-learn">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
