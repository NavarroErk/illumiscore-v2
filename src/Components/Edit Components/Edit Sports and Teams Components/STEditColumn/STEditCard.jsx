import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import STEditIcon from "./STEditIcon";
import "./STEdit.css";
import STEditPopup from "./STEditPopup";
import { GlobalContext } from "../../../..";

function STEditCard({
  title,
  statement,
  editImg,
  sport,
  lightApiKey,
  lightId,
  lightName,
}) {
  const [showEditComponent, setShowEditComponent] = useState(false);
  const location = useLocation();

  function checkLocation() {
    if (location.pathname === "/dashboard/editTeams") {
      console.log("/dashboard/editTeams");
      removeTeamFromUser();
    } else if (location.pathname === "/dashboard/editLights") {
      removeLightFromUser();
    }
  }

  function editSTBtnClicked() {
    setShowEditComponent(true);
  }

  function closeSTEditPopup() {
    setShowEditComponent(false);
  }

  //   function deleteSTBtnClicked() {
  //     fetch("endpoint to delete sport/team from profile")
  //   }

  const context = useContext(GlobalContext);
  const _id = JSON.parse(localStorage.getItem("userData")).data._id;
  async function removeTeamFromUser() {
    await context.globalState.functionList.RemoveMlbTeamFromUser(_id, title);

    const userData = await context.globalState.functionList.GetUserFromWeb(_id);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload();
  }

  async function removeLightFromUser() {
    await context.globalState.functionList.RemoveLifxLightFromUser(
      _id,
      lightName
    );

    console.log(lightName);
    const userData = await context.globalState.functionList.GetUserFromWeb(_id);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload();
  }

  // async function flashLifxFromWeb() {
  //   var red = "red";
  //   var blue = "blue";
  //   console.log(lightApiKey);
  //   console.log(lightId);
  //   await context.globalState.functionList.FlashLifxFromWeb(
  //     lightApiKey,
  //     lightId,
  //     red,
  //     blue
  //   );
  // }

  return (
    <div className="editCard">
      {/* <STEditIcon editImg={editImg}></STEditIcon> */}
      <div className="editCardDiv">
        <p className="editCardPara">{title}</p>
        {/* {sport && <p className="editCardStatement">{sport}</p>}
            {statement && <p className="editCardStatement">{statement}</p>} */}
        <div className="editCardBtnGroup">
          <button className="editCardEditBtn" onClick={editSTBtnClicked}>
            Edit
          </button>
          <button className="editCardDeleteBtn" onClick={checkLocation}>
            Delete
          </button>
          {/* <button onClick={flashLifxFromWeb}>FLASH</button> */}
        </div>
      </div>
      {showEditComponent && (
        <STEditPopup popupTitle={title} onClose={closeSTEditPopup} />
      )}
    </div>
  );
}

export default STEditCard;
