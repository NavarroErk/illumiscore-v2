import React, { useContext } from "react";
import STSearchIcon from "../STSearchIcon/STSearchIcon";
import "../STSearch.css";
import { GlobalContext } from "../../../../..";

function STSearchCard({ name, statement, searchImg, sport }) {
  const context = useContext(GlobalContext);
  const _id = JSON.parse(localStorage.getItem("userData")).data._id;

  async function addTeamToUser() {
    console.log(context.globalState.functionList);
    await context.globalState.functionList.AddMlbTeamFromWeb(_id, name);

    const userData = await context.globalState.functionList.GetUserFromWeb(_id);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload();
  }

  return (
    <div id="searchCard">
      <STSearchIcon searchImg={searchImg}></STSearchIcon>
      <div id="searchCardDiv">
        <p id="searchCardPara">{name}</p>
        {sport && <p id="searchCardStatement">{sport}</p>}
        {statement && <p id="searchCardStatement">{statement}</p>}
        <div className="searchCardBtnContainer">
          <button className="searchCardAddBtn" onClick={addTeamToUser}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default STSearchCard;
