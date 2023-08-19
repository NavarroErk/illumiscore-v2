import React, { useContext, useEffect, useState } from "react";
import "./EditSportsTeams.css";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import { GlobalContext } from "../../..";
import { GetUserFromWeb } from "../../../mongoDBClient";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

function EditTeams() {
  const context = useContext(GlobalContext);
  const userTeams = JSON.parse(localStorage.getItem("userData")).data.MlbTeams;
  const [searchResults, setSearchResults] = useState([]);
  const [teamDataState, setTeamDataState] = useState();

  GetUserFromWeb(JSON.parse(localStorage.getItem("userData")).data._id);

  async function loadSearchResults() {
    const leagueSelect = document.querySelector("#leagueSelect");
    console.log(leagueSelect.value);
    const results = await context.globalState.functionList.GetTeamsInLeague(
      leagueSelect.value
    );
    console.log(results);

    // leagueSelect.addEventListener("change", console.log("BUST"));
    // onclick of specific league button, pass league value into GetTeamsInLeague() function, the code will do the rest

    setSearchResults(results);
  }

  // useEffect(() => {
  //   loadSearchResults();
  // }, []);

  return (
    <>
      <Header></Header>
      <main id="editTeams">
        <div className="searchColTS">
          {/* <STSearchInput searchTitle="Teams"></STSearchInput> */}
          <div id="searchColContainer">
            <h1>Add Teams</h1>
            <p className="searchColContainerPara">
              Click the + button to add teams to your account
            </p>
            <select onChange={loadSearchResults} name="" id="leagueSelect">
              <option value="">Please Choose a League</option>
              <optgroup label="Baseball">
                <option value="Major League Baseball">MLB</option>
              </optgroup>
              <optgroup label="Football">
                <option value="National Football League">NFL</option>
              </optgroup>
              <optgroup label="Hockey">
                <option value="National Hockey League">NHL</option>
              </optgroup>
              <optgroup label="Soccer">
                <option value="fifa">FIFA</option>
              </optgroup>
            </select>
            {searchResults.length === 0 ? (
              <div style={{ color: "#efefef" }}>
                List of teams will appear here
              </div>
            ) : (
              searchResults.map((result, index) => (
                <STSearchCard
                  key={index}
                  name={result}
                  setTeamDataState={setTeamDataState}
                ></STSearchCard>
              ))
            )}
          </div>
        </div>
        <div className="editColTS">
          <div className="editColContainer">
            <p className="editColTSTitle">Your Teams</p>
            {userTeams.length === 0 ? (
              <p id="editColTSPara">Your teams will appear here</p>
            ) : (
              <></>
            )}
            {userTeams.map((teamObj, index) => (
              <STEditCard
                key={index}
                title={teamObj.teamName}
                profileColor1={teamObj.color1}
                profileColor2={teamObj.color2}
                setTeamDataState={setTeamDataState}
              ></STEditCard>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default EditTeams;
