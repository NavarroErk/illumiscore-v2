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
  let searchResults = [];
  // let searchResults = context.globalState.functionList.GetTeamsInLeague(
  //   "Major League Baseball"
  // );
  const userTeams = JSON.parse(localStorage.getItem("userData")).data.data
    .MlbTeams;

  // context.setGlobalState((prevState) => ({
  //   ...prevState,
  //   searchResults: context.globalState.functionList.GetTeamsInLeague(
  //     "Major League Baseball"
  //   ),
  // }));

  async function doButtonThing() {
    console.log(
      await context.globalState.functionList.GetTeamsInLeague(
        "Major League Baseball"
      )
    );
  }

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
        <button onClick={doButtonThing}>button</button>
        <div>
          <p className="editColTSTitle">Your Teams</p>
          <Link to="/dashboard/editSports">editSports</Link>
        </div>
        <div className="editColContainer">
          {userTeams.map((filler, index) => (
            <STEditCard key={index} name={filler}></STEditCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default EditTeams;
