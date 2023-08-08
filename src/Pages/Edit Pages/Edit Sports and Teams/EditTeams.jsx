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
  const [searchResults, setSearchResults] = useState([]);
  const tempEditFillers = context.globalState.userData.data.MlbTeams;

  //   function logBust() {
  //     context.globalState.bust = "NOBUST";
  //     console.log(context.globalState.bust);
  //   }
  //   logBust();

  async function getTeamsFromMongo(league) {
    const app = new RealmWeb.App({ id: "data-xsksb" });
    const apiKey =
      "eehr9IKwaVhUfgSkvu4FxohCIATY6avl7G5UKNWpjWggWlc4gyfBqTXBslUA5x90";
    const credentials = RealmWeb.Credentials.apiKey(apiKey);
    const user = await app.logIn(credentials);
    const teams = await user.functions.GetTeamsInLeague(league);
    return teams;
  }

  //   useEffect(() => {
  //     // Define an async function inside useEffect to fetch teams and update searchResults
  //     const fetchTeams = async () => {
  //       const teams = await getTeamsFromMongo("Major League Baseball");
  //       setSearchResults(teams);
  //     };

  //     // Call the async function to fetch and update searchResults
  //     fetchTeams();
  //   }, []); // Empty dependency array means this effect runs only once, on component mount

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
          {tempEditFillers.map((filler, index) => (
            <STEditCard key={index} name={filler}></STEditCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default EditTeams;
