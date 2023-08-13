import React, { useContext } from "react";
import STSearchIcon from "../STSearchIcon/STSearchIcon";
import "../STSearch.css";
import { GlobalContext } from "../../../../..";
import { useLocation } from "react-router-dom";

function STSearchCard({
  name,
  searchImg,
  lightId,
  apiKey,
  setLightDataState,
  setTeamDataState,
}) {
  const context = useContext(GlobalContext);
  const location = useLocation();
  const _id = JSON.parse(localStorage.getItem("userData")).data._id;

  function addToUser() {
    if (location.pathname === "/dashboard/editTeams") {
      addTeamToUser();
    } else if (location.pathname === "/dashboard/editLights") {
      addLightToUser();
    }
  }

  async function addTeamToUser() {
    console.log("addTeamToUser has run");
    await context.globalState.functionList.AddMlbTeamFromWeb(_id, name);

    const userData = await context.globalState.functionList.GetUserFromWeb(_id);

    //! maybe add MlbTeams.teamName?
    setTeamDataState(userData.data.MlbTeams);
  }

  async function addLightToUser() {
    await context.globalState.functionList.AddLifxLightFromWeb(
      _id,
      name,
      apiKey,
      lightId
    );

    const userData = await context.globalState.functionList.GetUserFromWeb(_id);
    setLightDataState(userData.data.LifxLights);
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
    <div id="searchCard">
      {/* <STSearchIcon searchImg={searchImg}></STSearchIcon> */}
      <div id="searchCardDiv">
        <p id="searchCardPara">{name}</p>
        {/* {sport && <p id="searchCardStatement">{sport}</p>}
        {statement && <p id="searchCardStatement">{statement}</p>} */}
        <div className="searchCardBtnContainer">
          {location.pathname === "/dashboard/editLights" ? (
            <button className="searchCardFlashBtn" onClick={flashLifxFromWeb}>
              Flash
            </button>
          ) : (
            <div></div>
          )}
          <button className="searchCardAddBtn" onClick={addToUser}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default STSearchCard;
