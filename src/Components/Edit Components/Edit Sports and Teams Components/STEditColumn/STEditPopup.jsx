import React, { useContext, useState } from "react";
import "./STEdit.css";
import { GlobalContext } from "../../../..";
import { UpdateUserTeamColors } from "../../../../mongoDBClient";
import { useNavigate } from "react-router-dom";

function STEditPopup({
  popupTitle,
  onClose,
  title,
  userTeamColors,
  defaultTeamColors,
  _id,
}) {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const lifxLights = userData.data.LifxLights;

  const [userTeamColor1, setUserTeamColor1] = useState(userTeamColors[0]);
  const [userTeamColor2, setUserTeamColor2] = useState(userTeamColors[1]);

  // let userTeamColor1 = userTeamColors[0];
  // let userTeamColor2 = userTeamColors[1];

  const [tempColor1, setTempColor1] = useState(userTeamColors[0]);
  const [tempColor2, setTempColor2] = useState(userTeamColors[1]);

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
      selectedValue.apiKey,
      selectedValue.lightId,
      tempColor1,
      tempColor2
    );
  }

  async function updateUserTeamColors() {
    await context.globalState.functionList.UpdateUserTeamColors(
      _id,
      title,
      tempColor1,
      tempColor2
    );
    window.location.reload();
    alert(`Success! ${title} colors have been updated.`);
  }

  return (
    <section id="editSTPopup">
      <div id="editSTPopupContent">
        <button onClick={onClose} id="editSTPopupCloseBtn">
          X
        </button>

        <div id="editSTPopupContentHeader">
          <p id="editSTPopupTitle">Edit {popupTitle} Colors</p>
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
                console.log(light);
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
    </section>
  );
}

export default STEditPopup;
