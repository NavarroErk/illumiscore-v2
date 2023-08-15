import React from "react";

function STSearchPopup({ popupTitle, onClose, children }) {
  return (
    <section id="searchSTPopup">
      <div id="searchSTPopupContent">
        <div id="searchSTPopupContentHeader">
          <div> {popupTitle} </div>
          <button onClick={onClose} id="searchSTPopupCloseBtn">
            X
          </button>
        </div>
        {children}
      </div>
    </section>
  );
}

export default STSearchPopup;
