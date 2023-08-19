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
            <select onChange={loadSearchResults} id="leagueSelect">
              <option value="">Please Choose a League</option>
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
                <option value="Major League Soccer">Major League Soccer</option>
                <option value="LaLiga">LaLiga</option>
                <option value="Serie A">Serie A</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Ligue 1">Ligue 1</option>
                <option value="Chinese Super League">
                  Chinese Super League
                </option>
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
