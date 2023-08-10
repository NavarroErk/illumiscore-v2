import React, { useContext, useState, useEffect } from "react";
import Layout from "../../../Components/Layout";
import "../Edit Sports and Teams/EditSportsTeams.css";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import { GlobalContext } from "../../..";
import { GetUserFromWeb } from "../../../mongoDBClient";

function EditLights() {
  const context = useContext(GlobalContext);
  const [searchResults, setSearchResults] = useState();
  const [lightDataState, setLightDataState] = useState(
    JSON.parse(localStorage.getItem("userData")).data.LifxLights
  );
  const [userInput, setUserInput] = useState({
    _id: JSON.parse(localStorage.getItem("userData")).data._id,
    apiKey: "",
  });
  GetUserFromWeb(JSON.parse(localStorage.getItem("userData")).data._id);

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
    console.log("userLightData: " + JSON.stringify(userLightData));

    let userLightInfo;

    userLightData.forEach(() => {
      userLightInfo = userLightData.map((userLightInfo, index) => (
        <STSearchCard
          key={index}
          apiKey={userInput.apiKey}
          lightId={userLightInfo.id}
          name={userLightInfo.label}
          setLightDataState={setLightDataState}
        ></STSearchCard>
      ));
    });

    setSearchResults(userLightInfo);

    console.log(Array.isArray(lightDataState));
  }

  return (
    <Layout id="editLights">
      <div className="searchColTS">
        <div id="">
          <h1>Enter LIFX API Key</h1>
          <a href="https://cloud.lifx.com/">Go To LIFX Cloud Website</a>
          <br />
          <br />
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
          {lightDataState.map((light, index) => (
            <STEditCard
              key={index}
              title={light.lightName}
              lightName={light.lightName}
              lightApiKey={light.ApiKey}
              lightId={light.LightIds}
              setLightDataState={setLightDataState}
            ></STEditCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default EditLights;
