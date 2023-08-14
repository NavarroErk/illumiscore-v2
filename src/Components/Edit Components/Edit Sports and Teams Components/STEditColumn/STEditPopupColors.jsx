import React from "react";

function STEditPopupColors(color1, color2) {
  return (
    <div className="steditPopupColorContainer">
      <div className="steditPopupColorRow">
        <button>Default</button>
        <input type="color" />
        <p className="teamEditColorPara">Primary Color</p>
      </div>
      <div className="steditPopupColorRow">
        <button>Default</button>
        <input type="color" />
        <p className="teamEditColorPara">Secondary Color</p>
      </div>
    </div>
  );
}

export default STEditPopupColors;
