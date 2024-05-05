import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { GlobalContext } from "../..";

import EditTeamPopup from "../../Components/Edit Components/EditTeamPopup";
import AlertMessage from "../../Components/AlertMessage Component/AlertMessage";

export function activateAlertMessage(message, isSuccessful) {
  const alertMessageContainer = document.createElement("div");
  document.body.appendChild(alertMessageContainer);

  ReactDOM.render(
    <AlertMessage
      message={message}
      isSuccessful={isSuccessful}
      alertMessageContainer={alertMessageContainer}
    />,
    alertMessageContainer
  );
}

function DashTabs() {
  //! #region variables from EditTeams.jsx
  const context = useContext(GlobalContext);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [teamSearchResults, setTeamSearchResults] = useState([]);
  const [lightSearchResults, setLightSearchResults] = useState([]);
  const [teamDataState, setTeamDataState] = useState(userData.data.MlbTeams);
  const [lightDataState, setLightDataState] = useState(
    JSON.parse(localStorage.getItem("userData")).data.LifxLights
  );
  const [teamDefaultColors, setTeamDefaultColors] = useState();
  const _id = JSON.parse(localStorage.getItem("userData")).data._id;
  const [showEditTeamPopup, setShowEditTeamPopup] = useState(false);
  const [editTeamPopupState, setEditTeamPopupState] = useState();
  const [lightApiKeyInput, setLightApiKeyInput] = useState();

  const lightDataForDelay = JSON.parse(localStorage.getItem("userData"))?.data
    ?.LifxLights?.[0];
  const lightDelayValue = lightDataForDelay?.lightDelay || "0";
  const [lightDelay, setLightDelay] = useState(lightDelayValue);

  function editTeamClicked(teamObj) {
    setShowEditTeamPopup(!showEditTeamPopup);
    setEditTeamPopupState(teamObj);
  }

  async function loadSearchResults() {
    const leagueSelect = document.querySelector("#leagueSelect");
    const results = await context.globalState.functionList.GetTeamsInLeague(
      leagueSelect.value
    );

    setTeamSearchResults(results.sort());
  }

  async function setDelayClicked() {
    try {
      const lightDelaySlider = document.querySelector(".lightDelaySlider");
      await context.globalState.functionList.AddDelayToLights(
        JSON.parse(localStorage.getItem("userData")).data._id,
        lightDelaySlider.value
      );
      const userData = await context.globalState.functionList.GetUserFromWeb(
        JSON.parse(localStorage.getItem("userData")).data._id
      );
      const secondOrSeconds =
        userData.data.LifxLights[0].lightDelay === "1" ? "second" : "seconds";
      setLightDelay(userData.data.LifxLights[0].lightDelay);
      activateAlertMessage(
        `Successfully Updated Light Delay: ${lightDelaySlider.value} ${secondOrSeconds}`,
        true
      );
    } catch {
      activateAlertMessage(`Unable to Update Light Delay`, false);
    }
  }

  function delaySliderChanged(e) {
    const delaySliderPara = document.querySelector("#delaySliderPara");
    delaySliderPara.textContent = e.target.value;
  }

  async function addTeamToUser(teamName) {
    try {
      await context.globalState.functionList.AddMlbTeamFromWeb(_id, teamName);

      const userData = await context.globalState.functionList.GetUserFromWeb(
        _id
      );

      setTeamDataState(userData.data.MlbTeams);
      activateAlertMessage(`Successfully Added Team: ${teamName}`, true);
    } catch {
      activateAlertMessage(`Unable To Add Team: ${teamName}`, false);
    }
  }

  async function removeTeamFromUser(teamName) {
    try {
      await context.globalState.functionList.RemoveMlbTeamFromUser(
        _id,
        teamName
      );
      const userData = await context.globalState.functionList.GetUserFromWeb(
        _id
      );
      setTeamDataState(userData.data.MlbTeams);
      activateAlertMessage(`Successfully Removed Team: ${teamName}`, true);
    } catch {
      activateAlertMessage(`Unable To Remove Team: ${teamName}`, false);
    }
  }

  function textboxValueChange(e) {
    setLightApiKeyInput(e.target.value);
  }
  async function submitApiKeyClicked() {
    const userLightData = await context.globalState.functionList.ListLifxLights(
      lightApiKeyInput
    );
    const userData = await context.globalState.functionList.GetUserFromWeb(_id);

    const updatedLightData = userLightData.filter((listLight) => {
      return !userData.data.LifxLights.some(
        (profileLight) => listLight.label === profileLight.lightName
      );
    });

    setLightSearchResults(updatedLightData);
  }

  async function addLightToUser(lightName, lightId) {
    try {
      await context.globalState.functionList.AddLifxLightFromWeb(
        _id,
        lightName,
        lightApiKeyInput,
        lightId
      );

      const userData = await context.globalState.functionList.GetUserFromWeb(
        _id
      );
      setLightDataState(userData.data.LifxLights);
      const filteredResults = lightSearchResults.filter(
        (result) => result.label !== lightName
      );
      setLightSearchResults(filteredResults);
      activateAlertMessage(`Successfully Added Light: ${lightName}`, true);
    } catch {
      activateAlertMessage(`Unable To Remove Light: ${lightName}`, false);
    }
  }

  async function removeLightFromUser(lightName) {
    try {
      await context.globalState.functionList.RemoveLifxLightFromUser(
        _id,
        lightName
      );

      console.log(lightName);
      const userData = await context.globalState.functionList.GetUserFromWeb(
        _id
      );
      setLightDataState(userData.data.LifxLights);
      activateAlertMessage(`Successfully Removed Light: ${lightName}`, true);
    } catch {
      activateAlertMessage(`Unable To Remove Light: ${lightName}`, false);
    }
  }
  return (
    <>
      <Tabs>
        <TabList>
          <Tab className="editTeamsTab">Edit Teams</Tab>
          <Tab className="editLightsTab">Edit Lights</Tab>
        </TabList>

        <TabPanel>
          <div id="editTeams">
            <p className="">Your Teams</p>
            <div>
              <div id="addTeamContainer">
                <div id="leagueSelectContainer">
                  <select onChange={loadSearchResults} id="leagueSelect">
                    <option value="">Leagues</option>
                    <optgroup label="Baseball">
                      <option value="Major League Baseball">
                        Major League Baseball
                      </option>
                      <option value="Nippon Professional Baseball">
                        Nippon Professional Baseball
                      </option>
                    </optgroup>
                    <optgroup label="Football">
                      <option value="National Football League">
                        National Football League
                      </option>
                      <option value="American Athletic Conference">
                        American Athletic Conference
                      </option>
                      <option value="ACC (Atlantic Coast Conference)">
                        ACC (Atlantic Coast Conference)
                      </option>
                      <option value="Big 12">Big 12</option>
                      <option value="Big Ten">Big Ten</option>
                      <option value="Conference USA">Conference USA</option>
                      <option value="FBS Independents">FBS Independents</option>
                      <option value="Mid-American">Mid-American</option>
                      <option value="Mountain West">Mountain West</option>
                      <option value="Pac-12">Pac-12</option>
                      <option value="SEC">SEC</option>
                      <option value="Sun Belt">Sun Belt</option>
                    </optgroup>
                    <optgroup label="Hockey">
                      <option value="National Hockey League">
                        National Hockey League
                      </option>
                    </optgroup>
                    <optgroup label="Soccer">
                      <option value="English Football League">
                        English Football League
                      </option>
                      <option value="Major League Soccer">
                        Major League Soccer
                      </option>
                      <option value="LaLiga">LaLiga</option>
                      <option value="Serie A">Serie A</option>
                      <option value="Bundesliga">Bundesliga</option>
                      <option value="Ligue 1">Ligue 1</option>
                      <option value="Chinese Super League">
                        Chinese Super League
                      </option>
                    </optgroup>
                  </select>
                  <p className="">
                    Click the + button to add teams to your profile
                  </p>
                </div>

                <div className="teamResultsContainer">
                  {teamSearchResults.map((team, index) => (
                    <div className="teamResultsCard" key={index}>
                      <p className="">{team}</p>
                      <button onClick={() => addTeamToUser(team)}>+</button>
                    </div>
                  ))}
                </div>
              </div>
              <div id="userTeamCardContainer">
                {teamDataState.length === 0 ? (
                  <p id="">Your teams will appear here</p>
                ) : (
                  <></>
                )}
                {teamDataState.map((teamObj, index) => (
                  <div
                    className="userTeamCard"
                    key={index}
                    teamcolor1={teamObj.color1}
                    teamcolor2={teamObj.color2}
                    teamname={teamObj.teamName}
                  >
                    <p className="userTeamCardTitle">{teamObj.teamName}</p>
                    <div className="userTeamCardBtnContainer">
                      <button
                        className="userTeamCardEditBtn"
                        onClick={() => editTeamClicked(teamObj)}
                      >
                        Edit
                      </button>
                      <button
                        className="userTeamCardDeleteBtn"
                        onClick={() => removeTeamFromUser(teamObj.teamName)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div id="editLights">
            <p id="">Your Lights</p>

            <div id="editLightsContent">
              <div id="delayContainer">
                <div id="addLightsContainer">
                  <div id="lightApiKeyInputContainer">
                    <input
                      id="lightApiKeyInput"
                      type="text"
                      placeholder="LIFX API Key"
                      onChange={textboxValueChange}
                    />
                    <button onClick={() => submitApiKeyClicked()}>
                      Submit
                    </button>
                  </div>
                  <div id="setupLinksContainer">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="http://localhost:3000/setup-help"
                      // href="https://illumiscore.com/setup-help"
                    >
                      Setup Instructions
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://cloud.lifx.com"
                    >
                      Go To LIFX Cloud Website
                    </a>
                  </div>
                </div>
                <div className="setDelayContainer">
                  <p>
                    Flashing Too Early? <br /> Set a Delay:{" "}
                  </p>
                  <div className="delaySliderContainer">
                    <input
                      type="range"
                      className="lightDelaySlider"
                      min="0"
                      max="60"
                      onChange={delaySliderChanged}
                    />
                    <label id="delaySliderPara">50</label>
                  </div>

                  <button onClick={setDelayClicked}>Set Delay</button>
                  {JSON.parse(localStorage.getItem("userData")).data
                    .LifxLights[0] ? (
                    <p id="delayPara">
                      Current Delay:{" "}
                      {(() => {
                        if (lightDelay) {
                          return (
                            lightDelay +
                            (lightDelay === "1" ? " second" : " seconds")
                          );
                        } else {
                          return;
                        }
                      })()}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div id="lightCardContainer">
                {lightDataState.map((light, index) => (
                  <div
                    className="userLightCard"
                    key={index}
                    title={light.lightName}
                    lightname={light.lightName}
                    apikey={light.ApiKey}
                    lightid={light.LightIds}
                    setlightdatastate={setLightDataState}
                  >
                    <p className="userLightCardTitle">{light.lightName}</p>
                    <div className="lightCardBtnContainer">
                      <button
                        className="userLightCardDeleteBtn"
                        onClick={() => removeLightFromUser(light.lightName)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="listLightsContainer">
              {lightSearchResults.length > 0 ? (
                lightSearchResults.map((light, index) => (
                  <div
                    className="listLightsCard"
                    key={index}
                    lightname={light.label}
                    lightid={light.id}
                    setlightdatastate={setLightDataState}
                  >
                    <p className="listLightsCardTitle">{light.label}</p>
                    <div className="lightCardBtnContainer">
                      <button
                        className="listLightsCardDeleteBtn"
                        onClick={() => addLightToUser(light.label, light.id)}
                      >
                        Add Light To Profile
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </TabPanel>
      </Tabs>
      {showEditTeamPopup === false ? (
        <></>
      ) : (
        <EditTeamPopup
          showEditTeamPopup={showEditTeamPopup}
          setShowEditTeamPopup={setShowEditTeamPopup}
          editTeamPopupState={editTeamPopupState}
          updateTeamColors={(color1, color2) => {
            // Update team colors in state
            const updatedTeams = teamDataState.map((team) => {
              if (team.teamName === editTeamPopupState.teamName) {
                return { ...team, color1, color2 };
              }
              return team;
            });
            setTeamDataState(updatedTeams);
          }}
        />
      )}
    </>
  );
}
export default DashTabs;
