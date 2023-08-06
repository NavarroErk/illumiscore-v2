import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Dashboard.css";
import NewDashboardCard from "../../Components/Dashboard Components/NewDashboardCard";

function Dashboard() {
  const teamData = [];

  const lightData = [
    // {
    //     img: "https://illustoon.com/photo/5770.png"
    // },
    // {
    //     img: "https://illustoon.com/photo/5770.png"
    // },
    // {
    //     img: "https://illustoon.com/photo/5770.png"
    // },
    // {
    //     img: "https://illustoon.com/photo/5770.png"
    // },
    // {
    //     img: "https://illustoon.com/photo/5770.png"
    // },
    // {
    //     img: "https://illustoon.com/photo/5770.png"
    // },
  ];

  return (
    <>
      <Header />
      <main id="dashContainer">
        <section className="section1" id="banner">
          <p id="bannerHeading">Banner</p>
          <div className="bannerContent">Upcoming Games</div>
          <div className="bannerContent">Active Games and Scores</div>
          <div className="bannerContent">Something else</div>
        </section>
        <section className="section2" id="dashContent">
          <NewDashboardCard
            title="Teams"
            route="/dashboard/editTeams"
            tileData={teamData}
          ></NewDashboardCard>
          <NewDashboardCard
            title="Lights"
            route="/dashboard/editLights"
            tileData={lightData}
          ></NewDashboardCard>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
