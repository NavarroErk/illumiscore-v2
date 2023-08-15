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
    const results = await context.globalState.functionList.GetTeamsInLeague(
      "Major League Baseball"
    );
    setSearchResults(results);
  }

  useEffect(() => {
    loadSearchResults();
  }, []);

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
            {searchResults.map((result, index) => (
              <STSearchCard
                key={index}
                name={result}
                setTeamDataState={setTeamDataState}
              ></STSearchCard>
            ))}
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
