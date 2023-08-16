import React from "react";
import "./AccountSettings.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function AccountSettings() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const _id = userData.data._id;

  // const sport = "baseball";
  // const league = "mlb";
  // const team = "san-diego-padres";

  // Construct the URL with query parameters
  // const apiUrl = `http://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/scoreboard?teams=${team}`;

  // Make a fetch call to the constructed API endpoint
  function buttonClicked() {
    const sport = "baseball";
    const league = "mlb";

    // Construct the URL with specific sport and league values
    const apiUrl = `https://site.api.espn.com/apis/site/v2/sports/${sport}/${league}/scoreboard`;

    // Make a fetch call to the constructed API endpoint
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (200)
        if (response.ok) {
          return response.json(); // Parse the response body as JSON
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => {
        // Log the data to the console
        console.log(data);
      })
      .catch((error) => {
        // Log any errors that occurred during the fetch
        console.error("Error:", error);
      });
  }

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
            {/* <button onClick={buttonClicked}>CALL MLB DATA</button> */}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default AccountSettings;
