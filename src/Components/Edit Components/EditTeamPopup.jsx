import React, { useContext, useState } from "react";
// import "./STEdit.css";
import { GlobalContext } from "../..";
import { UpdateUserTeamColors } from "../../mongoDBClient";
import { useNavigate } from "react-router-dom";
import { activateAlertMessage } from "../../Pages/Tabs/Tabs";

function EditTeamPopup({
  onClose,
  title,
  showEditTeamPopup,
  setShowEditTeamPopup,
  editTeamPopupState,
  userTeamColors,
  defaultTeamColors,
  _id,
  updateTeamColors,
}) {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const lifxLights = userData.data.LifxLights;

  const [userTeamColor1, setUserTeamColor1] = useState(
    editTeamPopupState.color1
  );
  const [userTeamColor2, setUserTeamColor2] = useState(
    editTeamPopupState.color2
  );

  //   // let userTeamColor1 = userTeamColors[0];
  //   // let userTeamColor2 = userTeamColors[1];

  const [tempColor1, setTempColor1] = useState(editTeamPopupState.color1);
  const [tempColor2, setTempColor2] = useState(editTeamPopupState.color2);

  const colorPicker1Changed = (event) => {
    const newColor = event.target.value;
    setTempColor1(newColor);
  };

  const colorPicker2Changed = (event) => {
    const newColor = event.target.value;
    setTempColor2(newColor);
  };

  async function flashLifxFromWeb() {
    const lightSelect = document.querySelector("#lightSelect");
    const selectedValue = JSON.parse(lightSelect.value);

    await context.globalState.functionList.FlashLifxFromWeb(
      userData.data._id,
      selectedValue.lightId,
      tempColor1,
      tempColor2
    );
  }

  async function updateUserTeamColors() {
    try {
      await context.globalState.functionList.UpdateUserTeamColors(
        userData.data._id,
        editTeamPopupState.teamName,
        tempColor1,
        tempColor2
      );
      setTempColor1(tempColor1);
      updateTeamColors(tempColor1, tempColor2);
      activateAlertMessage(
        `Successfully Updated Colors for: ${editTeamPopupState.teamName}`,
        true
      );
    } catch {
      activateAlertMessage(
        `Unable to Update Colors for: ${editTeamPopupState.teamName}`,
        false
      );
    }
  }

  return (
    <div id="editTeamPopup">
      <div id="editTeamPopupContent">
        <button
          onClick={() => setShowEditTeamPopup(false)}
          id="editSTPopupCloseBtn"
        >
          X
        </button>

        <div id="editSTPopupContentHeader">
          <p id="editSTPopupTitle">Edit {editTeamPopupState.teamName} Colors</p>
          <ul id="editSTPopupList">
            <li>Select a colored circle to bring up the color selector</li>
          </ul>
        </div>
        <div className="steditPopupColorContainer">
          <div className="steditPopupColorRow">
            {/* <button>Set To Default Team Primary Color</button> */}
            <input
              className="teamColorPicker"
              id="colorPicker1"
              type="color"
              value={tempColor1}
              onChange={colorPicker1Changed}
            />
            <p className="teamEditColorPara">Primary Color</p>
          </div>
          <div className="steditPopupColorRow">
            {/* <button>Set To Default Team Secondary Color</button> */}
            <input
              className="teamColorPicker"
              id="colorPicker2"
              type="color"
              value={tempColor2}
              onChange={colorPicker2Changed}
            />
            <p className="teamEditColorPara">Secondary Color</p>
          </div>
          <div className="steditPopupBottomRow">
            {/* <label htmlFor="lightSelect">Select a Light to Flash</label> */}
            <select
              name=""
              id="lightSelect"
              onChange={(e) => {
                console.log(e);
              }}
            >
              {lifxLights.map((light, index) => {
                return (
                  <option
                    id={light.LightIds}
                    key={index}
                    value={JSON.stringify({
                      apiKey: light.ApiKey,
                      lightId: light.LightIds,
                    })}
                  >
                    {light.lightName}
                  </option>
                );
              })}
            </select>
            <div id="editPopupBtnContainer">
              <button
                className="steditPopupBottomRowBtn"
                id="steditPopupFlashBtn"
                onClick={flashLifxFromWeb}
              >
                Flash
              </button>
              <button
                className="steditPopupBottomRowBtn"
                id="steditPopupSaveBtn"
                onClick={updateUserTeamColors}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTeamPopup;
