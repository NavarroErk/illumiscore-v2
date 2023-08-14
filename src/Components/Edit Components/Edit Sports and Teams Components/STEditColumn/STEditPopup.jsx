import React, { useContext, useState } from "react";
import "./STEdit.css";
import { GlobalContext } from "../../../..";

function STEditPopup({ popupTitle, onClose, title, userTeamColors }) {
  const context = useContext(GlobalContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const lifxLights = userData.data.LifxLights;

  const [tempColor1, setTempColor1] = useState(userTeamColors[0]);
  const [tempColor2, setTempColor2] = useState(userTeamColors[1]);

  const userTeamColor1 = userTeamColors[0];
  const userTeamColor2 = userTeamColors[1];

  const colorPicker1Changed = (event) => {
    const newColor = event.target.value;
    setTempColor1(newColor);
  };

  const colorPicker2Changed = (event) => {
    const newColor = event.target.value;
    setTempColor2(newColor);
  };

  async function flashLifxFromWeb() {
    //! NEED TO GRAB LIGHT FROM DROPDOWN

    await context.globalState.functionList.FlashLifxFromWeb(
      userData.data.LifxLights[0].ApiKey,
      userData.data.LifxLights[0].LightIds,
      tempColor1,
      tempColor2
    );
  }

  return (
    <section id="editSTPopup">
      <div id="editSTPopupContent">
        <button onClick={onClose} id="editSTPopupCloseBtn">
          X
        </button>

        <div id="editSTPopupContentHeader">
          <p id="editSTPopupTitle">Edit {popupTitle} Colors</p>
        </div>
        <div className="steditPopupColorContainer">
          <div className="steditPopupColorRow">
            <button>Set To Default Team Primary Color</button>
            <input
              id="colorPicker1"
              type="color"
              value={tempColor1}
              onChange={colorPicker1Changed}
            />
            <p className="teamEditColorPara">Primary Color</p>
          </div>
          <div className="steditPopupColorRow">
            <button>Set To Default Team Secondary Color</button>
            <input
              id="colorPicker2"
              type="color"
              value={tempColor2}
              onChange={colorPicker2Changed}
            />
            <p className="teamEditColorPara">Secondary Color</p>
          </div>
          <div className="steditPopupBottomRow">
            <select name="" id="">
              {lifxLights.map((light, index) => (
                <option key={index} value={light.lightName}>
                  {light.lightName}
                </option>
              ))}
            </select>
            <button
              className="steditPopupBottomRowBtn"
              id="steditPopupFlashBtn"
              onClick={flashLifxFromWeb}
            >
              Flash
            </button>
            <button className="steditPopupBottomRowBtn" id="steditPopupSaveBtn">
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default STEditPopup;
