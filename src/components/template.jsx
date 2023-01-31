import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import SettingProductCard from "./settingProductCard";
import ShoppingCart from "./shoppingCart.jsx";
import { FaShoppingBag } from "react-icons/fa";
import "../stylesheets/template.css";

const Template = () => {
  const [products, setProducts] = useState([
    { title: "Dulcito de Coco", quantity: 1, fontSize: 22 },
    { title: "Dulcito de Mango", quantity: 5, fontSize: 22 },
    { title: "Dulcito de Piña", quantity: 1, fontSize: 22 },
    { title: "Dulcito de Plátano", quantity: 1, fontSize: 22 },
    { title: "Dulcito de Fresa", quantity: 1, fontSize: 22 },
    { title: "Dulcito de Limón", quantity: 1, fontSize: 22 },
  ]);

  const [productInput, setProductInput] = useState("");
  const [rangeInput, setRangeInput] = useState("");
  const [productId, setProductId] = useState("0");
  const [settingActive, setSettingActive] = useState(false);
  const [productCart, setProductCart] = useState(0);

  const toggleActive = (id) => {
    if (id >= 0 && settingActive) {
      setSettingActive(true);
    } else {
      setSettingActive(!settingActive);
    }
    setProductId(id);
  };

  useEffect(() => {
    if (productId >= 0) {
      const productTitle = products[productId].title;
      const productSize = products[productId].fontSize;
      setProductInput(productTitle);
      setRangeInput(productSize);
    }
  }, [productId]);

  const handleSettingChange = (value, range) => {
    setProductInput(value);
    setRangeInput(range);
    products[productId].title = value;
    products[productId].fontSize = range;
  };

  const addCart = (quantity) => {
    console.log(productInput);
    setProductCart((prevQuantity) => Number(prevQuantity) + Number(quantity));
  };

  return (
    <div className="template-container">
      <SettingProductCard
        inputChange={handleSettingChange}
        inputValue={productInput}
        rangeValue={rangeInput}
        isActive={settingActive}
        toggle={toggleActive}
      />

      <div className="template-section">
        <h1>
          <FaShoppingBag fill="" /> Dango<span className="resalt">Store</span>
        </h1>
        <div className="products-view-section">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              id={i}
              title={product.title}
              fontSize={product.fontSize}
              price="$12.900"
              handleSetting={() => toggleActive(i)}
              onSubmit={addCart}
            />
          ))}
        </div>
      </div>
      <ShoppingCart quantity={productCart} />
    </div>
  );
};

export default Template;
