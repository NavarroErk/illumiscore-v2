import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Dashboard.css";
import NewDashboardCard from "../../Components/Dashboard Components/NewDashboardCard";
import { GetUserFromWeb } from "../../mongoDBClient";
import Layout from "../../Components/Layout";

function Dashboard() {
  GetUserFromWeb(JSON.parse(localStorage.getItem("userData")).data._id);

  document.addEventListener("DOMContentLoaded", function () {
    const googleSportsView = document.getElementById("googleSportsView");
    const desiredScrollPosition = 200;

    googleSportsView.addEventListener("load", () => {
      googleSportsView.contentWindow.scrollTo(0, desiredScrollPosition);
    });
  });

  // const mlbCookieBanner = document.getElementById("onetrust-banner-sdk");
  // setTimeout(() => {
  //   if (mlbCookieBanner) {
  //     mlbCookieBanner.remove();
  //   } else {
  //     alert("FUCK YOU");
  //   }
  // }, 1000);

  return (
    <Layout id="dashboard">
      <div id="dashContainer">
        {/* <section id="googleSportsViewSection">
          <iframe
            title="googleSportsView"
            id="googleSportsView"
            src="http://mlb.com/scores"
            frameborder="0"
          ></iframe>
        </section> */}
        <section>
          <div className="section1" id="banner">
            <p id="bannerHeading">Welcome to Your Dashboard</p>
            <div className="bannerContent">
              Manage Your Upcoming Games, Active Games, and More!
            </div>
          </div>
          <div className="section2" id="dashContent">
            <NewDashboardCard
              title="Manage Your Teams"
              route="/dashboard/editTeams"
            />
            <NewDashboardCard
              title="Manage Your Lights"
              route="/dashboard/editLights"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Dashboard;
