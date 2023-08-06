import React, { useState } from "react";
import STEditIcon from "./STEditIcon";
import "./STEdit.css";
import STEditPopup from "./STEditPopup";

function STEditCard({ name, statement, editImg, sport }) {
  const [showEditComponent, setShowEditComponent] = useState(false);

  function editSTBtnClicked() {
    setShowEditComponent(true);
  }

  function closeSTEditPopup() {
    setShowEditComponent(false);
  }

  //   function deleteSTBtnClicked() {
  //     fetch("endpoint to delete sport/team from profile")
  //   }

  return (
    <div className="editCard">
      {/* <STEditIcon editImg={editImg}></STEditIcon> */}
      <div className="editCardDiv">
        <p className="editCardPara">{name}</p>
        {/* {sport && <p className="editCardStatement">{sport}</p>}
            {statement && <p className="editCardStatement">{statement}</p>} */}
        <div className="editCardBtnGroup">
          <button className="editCardEditBtn" onClick={editSTBtnClicked}>
            Edit
          </button>
          <button className="editCardDeleteBtn">Delete</button>
        </div>
      </div>
      {showEditComponent && (
        <STEditPopup popupTitle={name} onClose={closeSTEditPopup} />
      )}
    </div>
  );
}

export default STEditCard;
