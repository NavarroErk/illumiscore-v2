import React, { useContext } from "react";
import STEditPopupColors from "./STEditPopupColors";
import "./STEdit.css";
import { GlobalContext } from "../../../..";

function STEditPopup({ popupTitle, onClose, title }) {
  const context = useContext(GlobalContext);

  async function getTeamColors() {
    // this gets team colors associated to user's profile
    const defaultTeamColors =
      await context.globalState.functionList.GetTeamColors(title);
    console.log(defaultTeamColors);
    // const defaultTeamColorsArr = [default]
  }
  getTeamColors();

  return (
    <section id="editSTPopup">
      <div id="editSTPopupContent">
        <div id="editSTPopupContentHeader">
          <p id="editSTPopupTitle">Edit {popupTitle} Colors</p>
          <button onClick={onClose} id="editSTPopupCloseBtn">
            X
          </button>
        </div>
        <STEditPopupColors color1={"color1"}></STEditPopupColors>
        <STEditPopupColors color2={"color2"}></STEditPopupColors>
      </div>
    </section>
  );
}

export default STEditPopup;
