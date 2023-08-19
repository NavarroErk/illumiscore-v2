import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Dashboard.css";
import NewDashboardCard from "../../Components/Dashboard Components/NewDashboardCard";
import { GetUserFromWeb } from "../../mongoDBClient";

function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  GetUserFromWeb(userData.data._id);
  console.log(userData);

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
    <>
      <Header></Header>
      <main id="dashboard">
        <div id="dashContainer">
          <section id="dashSection1">
            <div id="banner">
              <p id="bannerHeading">Welcome to Your Dashboard</p>
              <div className="bannerContent">
                Manage Your Upcoming Games, Active Games, and More!
              </div>
            </div>
          </section>
          <section id="dashSection2">
            <div id="newDashCardContainer">
              <NewDashboardCard
                lightsAndTeams={userData.data.MlbTeams.length}
                className="newDashboardCard"
                title="Manage Your Teams"
                route="/dashboard/editTeams"
              />
              <NewDashboardCard
                lightsAndTeams={userData.data.LifxLights.length}
                className="newDashboardCard"
                title="Manage Your Lights"
                route="/dashboard/editLights"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
