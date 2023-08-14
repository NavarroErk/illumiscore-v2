import React, { useContext, useState, useEffect } from "react";
import Layout from "../../../Components/Layout";
import "../Edit Sports and Teams/EditSportsTeams.css";
import STSearchCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchCard/STSearchCard";
import STEditCard from "../../../Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditCard";
import { GlobalContext } from "../../..";
import { GetUserFromWeb } from "../../../mongoDBClient";
import STSearchPopup from "../../../Components/Edit Components/Edit Sports and Teams Components/STSearchColumn/STSearchPopup";

function EditLights() {
  const context = useContext(GlobalContext);
  const [searchResults, setSearchResults] = useState();
  const [lightDataState, setLightDataState] = useState(
    JSON.parse(localStorage.getItem("userData")).data.LifxLights
  );
  const [userInput, setUserInput] = useState({
    _id: JSON.parse(localStorage.getItem("userData")).data._id,
    apiKey: "",
  });
  const [showHelpComponent, setShowHelpComponent] = useState(false);
  GetUserFromWeb(JSON.parse(localStorage.getItem("userData")).data._id);

  function textboxValueChange(e, inputText) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputText]: e.target.value,
    }));
  }

  async function addApiKeyClicked() {
    const userLightData = await context.globalState.functionList.ListLifxLights(
      userInput.apiKey
    );
    console.log("userLightData: " + JSON.stringify(userLightData));

    let userLightInfo;

    userLightData.forEach(() => {
      userLightInfo = userLightData.map((userLightInfo, index) => (
        <STSearchCard
          key={index}
          apiKey={userInput.apiKey}
          lightId={userLightInfo.id}
          name={userLightInfo.label}
          setLightDataState={setLightDataState}
        ></STSearchCard>
      ));
    });

    setSearchResults(userLightInfo);

    console.log(Array.isArray(lightDataState));
  }

  function lightsHelpBtnClicked() {
    setShowHelpComponent(true);
  }
  function closeLightsHelpPopup() {
    setShowHelpComponent(false);
  }
  return (
    <Layout id="editLights">
      <div className="searchColTS">
        <div id="">
          <h1>Enter LIFX API Key</h1>
          <a target="_blank" rel="noreferrer" href="https://cloud.lifx.com/">
            Go To LIFX Cloud Website
          </a>
          <br />
          <br />
          <button id="lightsHelpBtn" onClick={lightsHelpBtnClicked}>
            HELP ME
          </button>
          <br />
          <input
            className="lightInfoFormInput"
            type="text"
            value={userInput.apiKey}
            onChange={(e) => textboxValueChange(e, "apiKey")}
          />
          <button onClick={addApiKeyClicked}>SUBMIT</button>
        </div>
        <div id="searchColContainer"> {searchResults} </div>
      </div>
      <div className="editColTS">
        <div>
          <p className="editColTSTitle">Your Lights</p>
        </div>
        <div className="editColContainer">
          {lightDataState.map((light, index) => (
            <STEditCard
              key={index}
              title={light.lightName}
              lightName={light.lightName}
              apiKey={light.ApiKey}
              lightId={light.LightIds}
              setLightDataState={setLightDataState}
            ></STEditCard>
          ))}
        </div>
      </div>
      {showHelpComponent && (
        <STSearchPopup
          popupTitle={
            <h1>How to Get Your LIFX API Key: A Step-by-Step Guide</h1>
          }
          onClose={closeLightsHelpPopup}
        >
          {
            <>
              <p>
                If you're eager to dive into the world of smart lighting with
                Illumiscore.com, you'll need a LIFX API key to unlock the full
                potential of our product. Don't worry, we're here to guide you
                through the process. Follow these simple steps to obtain your
                LIFX API key and illuminate your game-day experience like never
                before.
              </p>

              <h2>Step 1: Download the LIFX App</h2>
              <p>
                Before you can obtain your LIFX API key, you'll need to download
                the official LIFX app on your smartphone. The app is available
                for both iOS and Android devices. Visit your device's app store
                and search for "LIFX" to find and download the app.
              </p>

              <h2>Step 2: Create or Log In to Your LIFX Account</h2>
              <p>
                Once the app is installed, open it and either create a new LIFX
                account or log in to your existing one. This account will serve
                as your gateway to managing and controlling your LIFX smart
                lights.
              </p>

              <h2>Step 3: Set Up Your LIFX Lights</h2>
              <p>
                Follow the on-screen instructions to set up your LIFX smart
                lights within the app. This may involve connecting your lights
                to your home Wi-Fi network and giving them unique names or
                assigning them to specific rooms.
              </p>

              <h2>Step 4: Access Your API Key on cloud.lifx.com</h2>
              <p>
                Now that your lights are set up, it's time to access your LIFX
                API key. To do this, you'll need to visit the LIFX cloud
                platform at <a href="https://cloud.lifx.com">cloud.lifx.com</a>{" "}
                using a web browser on your computer or smartphone.
              </p>

              <h2>Step 5: Log In to Your LIFX Cloud Account</h2>
              <p>
                On the LIFX cloud platform, log in using the same credentials as
                your LIFX app account. This will ensure that you have access to
                all the lights associated with your account.
              </p>

              <h2>Step 6: Generate Your API Key</h2>
              <p>
                Once you're logged in, navigate to your account settings (arrow
                next your email on the top right corner of the webpage). Click
                the "Personal access tokens" option on the dropdown menu, then
                click the button labeled "Generate New Token".
              </p>

              <h2>Step 7: Copy and Save Your API Key</h2>
              <p>
                When you generate your API key, it will be displayed on the
                screen. Make sure to copy this key and save it in a secure
                location. This key is like a password for your LIFX lights, so
                treat it with care and never share it publicly.
              </p>

              <h2>Step 8: Connect Your LIFX API Key to Illumiscore.com</h2>
              <p>
                With your LIFX API key in hand, you're almost there. Log in to
                your Illumiscore.com account and navigate to the settings or
                profile section. Here, you should find an option to enter your
                LIFX API key. Paste the key you obtained from the LIFX cloud
                platform into the provided field and save your changes.
              </p>

              <p>
                Congratulations! You've successfully obtained and connected your
                LIFX API key to Illumiscore.com. Now you're all set to
                experience the magic of synchronized smart lighting with your
                favorite MLB teams. As you celebrate every score and home run,
                your LIFX lights will light up your space in vibrant team
                colors, bringing the stadium atmosphere right into your home.
              </p>

              <p>
                If you encounter any issues or have questions along the way,
                don't hesitate to reach out to our dedicated support team at{" "}
                <a href="mailto:support@thompsonswe.com">
                  support@thompsonswe.com
                </a>
                . We're here to ensure your journey with Illumiscore.com is
                smooth and exciting.
              </p>
            </>
          }
        </STSearchPopup>
      )}
    </Layout>
  );
}

export default EditLights;
