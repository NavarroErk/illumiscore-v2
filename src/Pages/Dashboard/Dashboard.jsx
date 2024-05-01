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
import DashTabs from "../Tabs/Tabs";

function Dashboard() {
  //! #region variables from EditTeams.jsx

  const context = useContext(GlobalContext);
  const userTeams = JSON.parse(localStorage.getItem("userData")).data.MlbTeams;
  const [searchResults, setSearchResults] = useState([]);
  const [teamDataState, setTeamDataState] = useState();
  const [teamDefaultColors, setTeamDefaultColors] = useState();
  GetUserFromWeb(JSON.parse(localStorage.getItem("userData")).data._id);

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
          setlightdatastate={setLightDataState}
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
            <DashTabs></DashTabs>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
