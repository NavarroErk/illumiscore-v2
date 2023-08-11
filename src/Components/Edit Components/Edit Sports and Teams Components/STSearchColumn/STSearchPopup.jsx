import React from "react";

function STSearchPopup({ popupTitle, onClose, children }) {
  return (
    <section id="searchSTPopup">
      <div id="searchSTPopupContent">
        <div id="searchSTPopupContentHeader">
          <p id="searchSTPopupTitle"> {popupTitle} </p>
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
