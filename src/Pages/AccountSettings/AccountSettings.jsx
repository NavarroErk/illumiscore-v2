import React from "react";
import "./AccountSettings.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function AccountSettings() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const _id = userData.data._id;

  return (
    <>
      <Header></Header>
      <main id="accountSettings">
        <div id="accountSettingsContainer">
          <h1>Account Settings</h1>
          <hr />
          <div className="accountSettingsParaContainer">
            <p className="accountSettingsPara">
              {" "}
              UserID: <span className="accountSettingsParaValue">
                {_id}
              </span>{" "}
            </p>
          </div>
          <div className="accountSettingsParaContainer">
            <p className="accountSettingsPara">
              Lights:{" "}
              <span className="accountSettingsParaValue">
                {userData.data.LifxLights.length}
              </span>
            </p>
            <Link
              className="accountSettingsEditLink"
              to="/dashboard/editLights"
            >
              Edit Lights
            </Link>
          </div>
          <div className="accountSettingsParaContainer">
            <p className="accountSettingsPara">
              {" "}
              Teams:{" "}
              <span className="accountSettingsParaValue">
                {userData.data.MlbTeams.length}
              </span>
            </p>
            <Link className="accountSettingsEditLink" to="/dashboard/editTeams">
              Edit Teams
            </Link>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default AccountSettings;
