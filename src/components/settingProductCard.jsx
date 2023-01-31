import "../stylesheets/settingProductCard.css";

const SettingProductCard = ({
  inputChange,
  inputValue,
  rangeValue,
  isActive,
  toggle,
}) => {
  return (
    <div className={isActive ? "setting-container" : "hidden"}>
      <div className="setting-section">
        <h2>Editar Producto</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-section">
            <label>Título del Producto</label>
            <input
              className="product-title-input"
              type="text"
              onChange={(e) => inputChange(e.target.value)}
              value={inputValue || ""}
            />
          </div>
          <div className="form-section">
            <label>Anchura del Título </label>
            <input
              className="product-size-title-range"
              type="range"
              onChange={(e) => inputChange(inputValue, e.target.value)}
              value={rangeValue || 22}
            />
          </div>
          <div className="controls-section">
            <button className="button-save" onClick={() => toggle()}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingProductCard;
