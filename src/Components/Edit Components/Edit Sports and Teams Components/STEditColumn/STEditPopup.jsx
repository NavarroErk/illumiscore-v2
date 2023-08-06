import React from "react";
import "./STEdit.css";

function STEditPopup({ popupTitle, onClose }) {
  return (
    <section id="editSTPopup">
      <div id="editSTPopupContent">
        <div id="editSTPopupContentHeader">
          <p id="editSTPopupTitle">Edit {popupTitle} </p>
          <button onClick={onClose} id="editSTPopupCloseBtn">
            X
          </button>
        </div>
      </div>
    </section>
  );
}

export default STEditPopup;
