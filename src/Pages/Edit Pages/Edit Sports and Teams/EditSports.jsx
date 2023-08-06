import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Components/Layout";
import "./EditSportsTeams.css";
import STSearchInput from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchInput/STSearchInput";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";

function EditSports() {
  const searchResults = [];

  const tempEditFillers = [
    {
      name: "NBA",
      sport: "Basketball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, autem!",
      editImg:
        "https://www.wallpaperflare.com/static/87/872/942/nba-logo-wallpaper-preview.jpg",
    },
    {
      name: "NHL",
      sport: "Hockey",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, omnis.",
      editImg: "https://1000logos.net/wp-content/uploads/2017/05/NHL-logo.jpg",
    },
    {
      name: "MLB",
      sport: "Baseball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sint!",
      editImg:
        "https://content.sportslogos.net/logos/4/490/full/2585__major_league_baseball-alternate-2019.png",
    },
    {
      name: "NBA",
      sport: "Basketball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, autem!",
      editImg:
        "https://www.wallpaperflare.com/static/87/872/942/nba-logo-wallpaper-preview.jpg",
    },
    {
      name: "NHL",
      sport: "Hockey",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, omnis.",
      editImg: "https://1000logos.net/wp-content/uploads/2017/05/NHL-logo.jpg",
    },
    {
      name: "MLB",
      sport: "Baseball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sint!",
      editImg:
        "https://content.sportslogos.net/logos/4/490/full/2585__major_league_baseball-alternate-2019.png",
    },
    {
      name: "NBA",
      sport: "Basketball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, autem!",
      editImg:
        "https://www.wallpaperflare.com/static/87/872/942/nba-logo-wallpaper-preview.jpg",
    },
    {
      name: "NHL",
      sport: "Hockey",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, omnis.",
      editImg: "https://1000logos.net/wp-content/uploads/2017/05/NHL-logo.jpg",
    },
    {
      name: "MLB",
      sport: "Baseball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sint!",
      editImg:
        "https://content.sportslogos.net/logos/4/490/full/2585__major_league_baseball-alternate-2019.png",
    },
    {
      name: "NBA",
      sport: "Basketball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, autem!",
      editImg:
        "https://www.wallpaperflare.com/static/87/872/942/nba-logo-wallpaper-preview.jpg",
    },
    {
      name: "NHL",
      sport: "Hockey",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, omnis.",
      editImg: "https://1000logos.net/wp-content/uploads/2017/05/NHL-logo.jpg",
    },
    {
      name: "MLB",
      sport: "Baseball",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sint!",
      editImg:
        "https://content.sportslogos.net/logos/4/490/full/2585__major_league_baseball-alternate-2019.png",
    },
  ];

  return (
    <Layout id="editSports">
      <div className="searchColTS">
        <STSearchInput searchTitle="Sports"></STSearchInput>
        <div id="searchColContainer">
          {searchResults.map((result, index) => (
            <STSearchCard
              key={index}
              name={result.name}
              sport={result.sport}
              searchImg={result.searchImg}
            ></STSearchCard>
          ))}
        </div>
      </div>
      <div className="editColTS">
        <div>
          <p className="editColTSTitle">Your Sports</p>
          <Link to="/dashboard/editTeams">editTeams</Link>
        </div>
        <div className="editColContainer">
          {tempEditFillers.map((filler, index) => (
            <STEditCard
              key={index}
              name={filler.name}
              statement={filler.statement}
              sport={filler.sport}
              editImg={filler.editImg}
            ></STEditCard>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default EditSports;
