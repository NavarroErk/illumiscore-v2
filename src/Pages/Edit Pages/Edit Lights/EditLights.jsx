import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Components/Layout";
import "../Edit Sports and Teams/EditSportsTeams.css";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STSearchInput from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchInput/STSearchInput";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import { GlobalContext } from "../../..";

function EditLights() {
  const context = useContext(GlobalContext);
  const userLights = JSON.parse(localStorage.getItem("userData")).data
    .LifxLights;
  const [searchResults, setSearchResults] = useState();
  const [userInput, setUserInput] = useState({
    _id: JSON.parse(localStorage.getItem("userData")).data._id,
    apiKey: "",
  });

  function textboxValueChange(e, inputText) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputText]: e.target.value,
    }));
  }

  async function addApiKeyClicked() {
    const userLightData = await context.globalState.functionList.ListLifxLights(
      userInput.apiKey
    );

    let userLightInfo;

    userLightData.forEach(() => {
      userLightInfo = userLightData.map((userLightInfo, index) => (
        <STSearchCard
          key={index}
          apiKey={userInput.apiKey}
          lightId={userLightInfo.id}
          name={userLightInfo.label}
        ></STSearchCard>
      ));
    });

    setSearchResults(userLightInfo);
  }

  // async function submitLightInfo() {
  //   if (userInput.apiKey.length > 3) {
  //     await context.globalState.functionList.AddLifxLightFromWeb(
  //       userInput._id,
  //       userInput.lightName,
  //       userInput.apiKey,
  //       userInput.lightId
  //     );
  //     const userData = await context.globalState.functionList.GetUserFromWeb(
  //       JSON.parse(localStorage.getItem("userData")).data._id
  //     );
  //     localStorage.setItem("userData", JSON.stringify(userData));
  //     window.location.reload();
  //   } else {
  //     alert("Please enter values");
  //   }
  // }

  return (
    <Layout id="editLights">
      <div className="searchColTS">
        <div id="">
          <h1>Enter LIFX API Key</h1>
          <input
            className="lightInfoFormInput"
            type="text"
            // placeholder="Enter API Key"
            value={userInput.apiKey}
            onChange={(e) => textboxValueChange(e, "apiKey")}
          />
          <button onClick={addApiKeyClicked}>SUBMIT</button>
        </div>

        <div id="searchColContainer"> {searchResults} </div>
      </div>
      <div className="editColTS">
        <div>
          <p className="editColTSTitle">Your Lights</p>
        </div>
        <div className="editColContainer">
          {userLights.map((light, index) => (
            <STEditCard
              key={index}
              title={light.lightName}
              lightApiKey={light.ApiKey}
              lightId={light.LightIds}
              lightName={light.LightName}
            ></STEditCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default EditLights;
