import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import "../stylesheets/template.css";
import SettingProductCard from "./settingProductCard";
const Template = () => {
  const [products, setProucts] = useState([
    { title: "Dulcito de Coco", cantidad: 1, fontSize: 14 },
    { title: "Dulcito de Mango", cantidad: 1, fontSize: 14 },
    { title: "Dulcito de Piña", cantidad: 1, fontSize: 14 },
    { title: "Dulcito de Plátano", cantidad: 1, fontSize: 14 },
    { title: "Dulcito de Fresa", cantidad: 1, fontSize: 14 },
    { title: "Dulcito de Limón", cantidad: 1, fontSize: "24px" },
  ]);

  const [productInput, setProductInput] = useState("");
  const [rangeInput, setRangeInput] = useState("");
  const [productSelect, setProductSelect] = useState("0");

  //**Control del producto, como obejto CAPTURAR ID */
  const productActive = (id) => {
    setProductSelect(id);
    console.log(id);
  };

  /**VALOR DEL INPUT CUANDO SE SELECCIONA */

  useEffect(() => {
    const productTitle = products[productSelect].title;
    const productSize = products[productSelect].fontSize;
    setProductInput(productTitle);
  }, [productSelect]);

  /**Control de la info del input */

  const handleSettingChange = (value, range) => {
    setProductInput(value);
    products[productSelect].title = value;
  };

  return (
    <div className="template-container">
      <SettingProductCard
        inputChange={handleSettingChange}
        inputValue={productInput}
      />

      <div className={"products-view-section"}>
        <h2>Dango Store</h2>
        <div className="products-view-section">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              id={i}
              title={product.title}
              fontSize={product.fontSize}
              price="$12.900"
              handleSetting={() => productActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template;
