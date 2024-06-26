import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
// import "./STEdit.css";
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
  profileColor1,
  profileColor2,
}) {
  const [showEditComponent, setShowEditComponent] = useState(false);
  // const [userTeamColors, setUserTeamColors] = useState([color1, color2]);
  let userTeamColors = [profileColor1, profileColor2];
  const location = useLocation();
  const context = useContext(GlobalContext);

  // const userTeamColors = [color1, color2];
  // console.log(userTeamColors);

  function removeFromUser() {
    if (location.pathname === "/dashboard/editTeams") {
      removeTeamFromUser();
    } else if (location.pathname === "/dashboard/editLights") {
      removeLightFromUser();
    }
  }

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
    await context.globalState.functionList.FlashLifxFromWeb(
      // apiKey,
      _id,
      lightId,
      "red",
      "blue"
    );
  }

  // let defaultTeamColorsArr;
  // async function getDefaultTeamColors() {
  //   // this gets team colors associated to user's profile
  //   const defaultTeamColors =
  //     await context.globalState.functionList.GetTeamColors(title);
  //   defaultTeamColorsArr = [
  //     defaultTeamColors.PrimaryColor,
  //     defaultTeamColors.SecondaryColor,
  //   ];
  //   setDefaultTeamColors(defaultTeamColorsArr);
  // }
  // console.log(defaultTeamColors);

  return (
    <div className="teamCard">
      {/* <STEditIcon editImg={editImg}></STEditIcon> */}
      <div className="editCardDiv">
        <p className="editCardPara">{title}</p>
        {/* {sport && <p className="editCardStatement">{sport}</p>}
            {statement && <p className="editCardStatement">{statement}</p>} */}

        <div className="editCardBtnContainer">
          {location.pathname === "/dashboard/editTeams" ? (
            <button className="editCardEditBtn" onClick={editSTBtnClicked}>
              Edit
            </button>
          ) : (
            <></>
          )}

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
        <STEditPopup
          title={title}
          onClose={closeSTEditPopup}
          // setUserTeamColors={setUserTeamColors}
          userTeamColors={userTeamColors}
          _id={_id}
          popupTitle={title}
        />
      )}
    </div>
  );
}

export default STEditCard;
