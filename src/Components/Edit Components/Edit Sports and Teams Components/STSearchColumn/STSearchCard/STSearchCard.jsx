import React from "react";
import STSearchIcon from "../STSearchIcon/STSearchIcon";
import "../STSearch.css";

function STSearchCard({ name, statement, searchImg, sport }) {
  return (
    <div id="searchCard">
      <STSearchIcon searchImg={searchImg}></STSearchIcon>
      <div id="searchCardDiv">
        <p id="searchCardPara">{name}</p>
        {sport && <p id="searchCardStatement">{sport}</p>}
        {statement && <p id="searchCardStatement">{statement}</p>}
        <div className="searchCardBtnContainer">
          <button className="searchCardAddBtn">+</button>
        </div>
      </div>
    </div>
  );
}

export default STSearchCard;
