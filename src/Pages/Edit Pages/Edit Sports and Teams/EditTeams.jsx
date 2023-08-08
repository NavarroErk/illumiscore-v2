import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EditSportsTeams.css";
import Layout from "../../../Components/Layout";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STSearchInput from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchInput/STSearchInput";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import { GlobalContext } from "../../..";
import * as RealmWeb from "realm-web";

function EditTeams() {
  const context = useContext(GlobalContext);
  const userTeams = JSON.parse(localStorage.getItem("userData")).data.MlbTeams;
  const [searchResults, setSearchResults] = useState([]);

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
        <STSearchInput searchTitle="Teams"></STSearchInput>
        <div id="searchColContainer">
          {searchResults.map((result, index) => (
            <STSearchCard key={index} name={result}></STSearchCard>
          ))}
        </div>
      </div>
      <div className="editColTS">
        <div>
          <p className="editColTSTitle">Your Teams</p>
          <Link to="/dashboard/editSports">editSports</Link>
        </div>
        <div className="editColContainer">
          {userTeams.map((filler, index) => (
            <STEditCard key={index} title={filler}></STEditCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default EditTeams;
