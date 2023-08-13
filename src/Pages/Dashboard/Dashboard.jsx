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

  return (
    <Layout id="dashboard">
      <div id="dashContainer">
        <section className="section1" id="banner">
          <p id="bannerHeading">Welcome to Your Dashboard</p>
          <div className="bannerContent">
            Manage Your Upcoming Games, Active Games, and More!
          </div>
        </section>
        <section className="section2" id="dashContent">
          <NewDashboardCard
            title="Manage Your Teams"
            route="/dashboard/editTeams"
          />
          <NewDashboardCard
            title="Manage Your Lights"
            route="/dashboard/editLights"
          />
        </section>
        <iframe
          title="googleSportsView"
          id="googleSportsView"
          src="https://www.google.com/search?q=mlb+game&sca_esv=556231409&rlz=1C1GCEA_enUS1054US1054&sxsrf=AB5stBiPNr1SB3sxl7SenWifyhGJZsmarg%3A1691825488865&ei=UDXXZPCvNM_G0PEP4euGIA&ved=0ahUKEwjwl6SKzdaAAxVPIzQIHeG1AQQQ4dUDCBA&oq=mlb+game+right+now&gs_lp=Egxnd3Mtd2l6LXNlcnAiEm1sYiBnYW1lIHJpZ2h0IG5vd0gAUABYAHAAeAGQAQCYAQCgAQCqAQC4AQzIAQDiAwQYACBB&sclient=gws-wiz-serp"
          frameborder="0"
        ></iframe>
      </div>
    </Layout>
  );
}

export default Dashboard;
