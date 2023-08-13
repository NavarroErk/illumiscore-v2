import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./STEdit.css";
import STEditPopup from "./STEditPopup";
import { GlobalContext } from "../../../..";

function STEditCard({
  title,
  editImg,
  lightName,
  apiKey,
  lightId,
  setLightDataState,
  setTeamDataState,
  teamColor1,
  teamColor2,
}) {
  const [showEditComponent, setShowEditComponent] = useState(false);
  const location = useLocation();

  function removeFromUser() {
    if (location.pathname === "/dashboard/editTeams") {
      removeTeamFromUser();
    } else if (location.pathname === "/dashboard/editLights") {
      removeLightFromUser();
    }
  }

  const context = useContext(GlobalContext);
  const _id = JSON.parse(localStorage.getItem("userData")).data._id;
  async function removeTeamFromUser() {
    await context.globalState.functionList.RemoveMlbTeamFromUser(_id, title);

    const userData = await context.globalState.functionList.GetUserFromWeb(_id);
    setTeamDataState(userData.data.MlbTeams);
  }

  async function removeLightFromUser() {
    await context.globalState.functionList.RemoveLifxLightFromUser(
      _id,
      lightName
    );

    console.log(lightName);
    const userData = await context.globalState.functionList.GetUserFromWeb(_id);
    setLightDataState(userData.data.LifxLights);
  }

  function editSTBtnClicked() {
    setShowEditComponent(true);
  }

  function closeSTEditPopup() {
    setShowEditComponent(false);
  }
  async function flashLifxFromWeb() {
    console.log(apiKey);
    console.log(lightId);
    await context.globalState.functionList.FlashLifxFromWeb(
      apiKey,
      lightId,
      "red",
      "blue"
    );
  }

  return (
    <div className="editCard">
      {/* <STEditIcon editImg={editImg}></STEditIcon> */}
      <div className="editCardDiv">
        <p className="editCardPara">{title}</p>
        {/* {sport && <p className="editCardStatement">{sport}</p>}
            {statement && <p className="editCardStatement">{statement}</p>} */}
        <div className="editCardBtnContainer">
          {/* <button className="editCardEditBtn" onClick={editSTBtnClicked}>
            Edit
          </button> */}
          {location.pathname === "/dashboard/editLights" ? (
            <button className="editCardFlashBtn" onClick={flashLifxFromWeb}>
              Flash
            </button>
          ) : (
            <div></div>
          )}

          <button className="editCardDeleteBtn" onClick={removeFromUser}>
            Delete
          </button>
        </div>
      </div>
      {showEditComponent && (
        <STEditPopup popupTitle={title} onClose={closeSTEditPopup} />
      )}
    </div>
  );
}

export default STEditCard;
