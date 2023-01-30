import { useEffect, useState } from "react";
import "../stylesheets/settingProductCard.css";

const SettingProductCard = ({ inputChange, inputValue, rangeValue }) => {
  return (
    <div className="setting-container">
      <div className="setting-section">
        <h2>Editar Producto</h2>
        <form action="">
          <div className="form-section">
            <label>Título del Producto</label>
            <input
              className="product-title-input"
              type="text"
              onChange={(e) => inputChange(e.target.value)}
              value={inputValue}
            />
          </div>
          <div className="form-section">
            <label>Anchura del Título </label>
            <input
              className="product-size-title-range"
              type="range"
              onChange={(e) => inputChange(inputValue, e.target.value)}
              value={rangeValue}
            />
          </div>
          <button>Listo</button>
        </form>
      </div>
    </div>
  );
};

export default SettingProductCard;
