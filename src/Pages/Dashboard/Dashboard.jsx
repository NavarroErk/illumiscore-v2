import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Dashboard.css";
import STEditCard from "../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import STSearchCard from "../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import NewDashboardCard from "../../Components/Dashboard Components/NewDashboardCard";
import { GetUserFromWeb } from "../../mongoDBClient";
import { GlobalContext } from "../..";

function Dashboard() {
  //! #region variables from EditTeams.jsx
  const context = useContext(GlobalContext);
  const userTeams = JSON.parse(localStorage.getItem("userData")).data.MlbTeams;
  const [searchResults, setSearchResults] = useState([]);
  const [teamDataState, setTeamDataState] = useState();
  const [teamDefaultColors, setTeamDefaultColors] = useState();

  async function loadSearchResults() {
    const leagueSelect = document.querySelector("#leagueSelect");
    const results = await context.globalState.functionList.GetTeamsInLeague(
      leagueSelect.value
    );
    console.log(results);

    // leagueSelect.addEventListener("change", console.log("BUST"));
    // onclick of specific league button, pass league value into GetTeamsInLeague() function, the code will do the rest

    setSearchResults(results.sort());
  }
  //! #endregion variables from EditTeams.jsx

  //! #region variables from EditLights.jsx
  const [lightDataState, setLightDataState] = useState(
    JSON.parse(localStorage.getItem("userData")).data.LifxLights
  );

  // const [lightDelay, setLightDelay] = useState(
  //   JSON.parse(localStorage.getItem("userData")).data.LifxLights[0].lightDelay
  //     ? JSON.parse(localStorage.getItem("userData")).data.LifxLights[0]
  //         .lightDelay
  //     : "0"
  // );

  const lightDataForDelay = JSON.parse(localStorage.getItem("userData"))?.data
    ?.LifxLights?.[0];
  const lightDelayValue = lightDataForDelay?.lightDelay || "0";

  const [lightDelay, setLightDelay] = useState(lightDelayValue);

  const [userInput, setUserInput] = useState({
    _id: JSON.parse(localStorage.getItem("userData")).data._id,
    apiKey: "",
  });
  const [showHelpComponent, setShowHelpComponent] = useState(false);
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
  }

  function lightsHelpBtnClicked() {
    setShowHelpComponent(true);
  }
  function closeLightsHelpPopup() {
    setShowHelpComponent(false);
  }

  async function setDelayClicked() {
    const lightDelaySlider = document.querySelector(".lightDelaySlider");
    await context.globalState.functionList.AddDelayToLights(
      JSON.parse(localStorage.getItem("userData")).data._id,
      lightDelaySlider.value
    );
    const userData = await context.globalState.functionList.GetUserFromWeb(
      JSON.parse(localStorage.getItem("userData")).data._id
    );
    console.log(userData);
    setLightDelay(userData.data.LifxLights[0].lightDelay);
  }

  function delaySliderChanged(e) {
    const delaySliderPara = document.querySelector("#delaySliderPara");
    delaySliderPara.textContent = e.target.value;
  }
  //! #endregion variables from EditLights.jsx

  GetUserFromWeb(JSON.parse(localStorage.getItem("userData")).data._id);

  document.addEventListener("DOMContentLoaded", function () {
    const googleSportsView = document.getElementById("googleSportsView");
    const desiredScrollPosition = 200;

    googleSportsView.addEventListener("load", () => {
      googleSportsView.contentWindow.scrollTo(0, desiredScrollPosition);
    });
  });

  // const mlbCookieBanner = document.getElementById("onetrust-banner-sdk");
  // setTimeout(() => {
  //   if (mlbCookieBanner) {
  //     mlbCookieBanner.remove();
  //   } else {
  //     alert("FUCK YOU");
  //   }
  // }, 1000);

  return (
    <>
      <Header></Header>
      <main id="dashboard">
        <div id="dashContainer">
          <section id="dashSection1">
            <div id="banner">
              <p id="bannerHeading">Welcome to Your Dashboard</p>
              <div className="bannerContent">
                Manage Your Upcoming Games, Active Games, and More!
              </div>
            </div>
          </section>
          <section id="dashSection2">
            {/* <div id="newDashCardContainer"> */}
            {/* <NewDashboardCard
              className="newDashboardCard"
              title="Manage Your Teams"
              route="/dashboard/editTeams"
            /> */}
            <div id="editTeams">
              <p className="">Your Teams</p>
              <div id="teamCardContainer">
                {userTeams.length === 0 ? (
                  <p id="">Your teams will appear here</p>
                ) : (
                  <></>
                )}
                {userTeams.map((teamObj, index) => (
                  // <STEditCard
                  //   key={index}
                  //   title={teamObj.teamName}
                  //   profileColor1={teamObj.color1}
                  //   profileColor2={teamObj.color2}
                  //   setTeamDataState={setTeamDataState}
                  // ></STEditCard>
                  <div
                    className="teamCard"
                    key={index}
                    profileColor1={teamObj.color1}
                    profileColor2={teamObj.color2}
                    setTeamDataState={setTeamDataState}
                  >
                    <p className="teamCardTitle">{teamObj.teamName}</p>
                    <div className="teamCardBtnContainer">
                      <button className="teamCardEditBtn">Edit</button>
                      <button className="teamCardDeleteBtn">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <NewDashboardCard
              className="newDashboardCard"
              title="Manage Your Lights"
              route="/dashboard/editLights"
            /> */}
            <div className="editColTS">
              <div className="editColContainer">
                <p className="editColTSTitle">Your Lights</p>

                <div className="delayContainer">
                  <div className="delayParaContainer">
                    <p>Flashing Too Early? Set a Delay: </p>
                    {/* <input
                  type="number"
                  className="lightDelayInput"
                  min="0"
                  max="60"
                /> */}
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
                  </div>
                  {JSON.parse(localStorage.getItem("userData")).data
                    .LifxLights[0] ? (
                    <div className="delayParaContainer">
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
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {lightDataState.map((light, index) => (
                  <div
                    className="lightCard"
                    key={index}
                    title={light.lightName}
                    lightName={light.lightName}
                    apiKey={light.ApiKey}
                    lightId={light.LightIds}
                    setLightDataState={setLightDataState}
                  >
                    <p className="lightCardTitle">{light.lightName}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
