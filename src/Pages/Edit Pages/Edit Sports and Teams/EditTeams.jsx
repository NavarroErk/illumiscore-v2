import React, { useContext, useEffect, useState } from "react";
import "./EditSportsTeams.css";
import Layout from "../../../Components/Layout";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import { GlobalContext } from "../../..";
import { GetUserFromWeb } from "../../../mongoDBClient";

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
    <Layout id="editTeams">
      <div className="searchColTS">
        {/* <STSearchInput searchTitle="Teams"></STSearchInput> */}
        <div id="searchColContainer">
          <p>Click the + button to add teams to your account</p>
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
        <div>
          <p className="editColTSTitle">Your Teams</p>
        </div>
        <div className="editColContainer">
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
    </Layout>
  );
}

export default EditTeams;
