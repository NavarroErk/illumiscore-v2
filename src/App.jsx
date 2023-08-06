import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import NewPricingCard from "./Components/New Pricing Card/NewPricingCard";
import * as RealmWeb from "realm-web";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from ".";

function App() {
  const navigate = useNavigate();

  attemptToRedirectWithCookies();

  useEffect(() => {
    /* global google */
    getGoogleToken();
    console.log("BUST");

    google.accounts.id.renderButton(
      document.querySelector("#googleSignInBtn"),
      // theme and size of button
      { theme: "outline", size: "medium" }
    );
  }, []);

  function getGoogleToken() {
    google.accounts.id.initialize({
      client_id:
        "790870897502-fqdi3s4r49a8741sbeqt19st74k6ddkc.apps.googleusercontent.com",
      // if someone logs in, what function to call?
      callback: getDataFromMongo,
    });
  }

  async function getDataFromMongo(data) {
    const token = data.credential;
    if (!token) {
      return null;
    } else {
      Cookies.set("illumiScoreJWToken", token);
      const userData = getDataFromMongoToken(token);
      console.log("userData: " + userData);
      attemptToRedirect(userData);
    }
  }

  function attemptToRedirect(result) {
    if (result) {
      navigate("./dashboard");
    }
  }
  async function attemptToRedirectWithCookies() {
    let browserCookies = Cookies.get("illumiScoreJWToken");
    if (browserCookies) {
      const result = await getDataFromMongoToken(browserCookies);
      if (result) {
        navigate("./dashboard");
      }
    }
  }

  async function HERESYOURBUTTONJERRY() {
    const app = new RealmWeb.App({ id: "data-xsksb" });
    const apiKey =
      "eehr9IKwaVhUfgSkvu4FxohCIATY6avl7G5UKNWpjWggWlc4gyfBqTXBslUA5x90";
    const credentials = RealmWeb.Credentials.apiKey(apiKey);
    const user = await app.logIn(credentials);
    const teams = await user.functions.FlashTeamFromWeb("Los Angeles Dodgers");
    return teams;
  }

  async function getDataFromMongoToken(_id) {
    const app = new RealmWeb.App({ id: "data-xsksb" });
    const apiKey =
      "eehr9IKwaVhUfgSkvu4FxohCIATY6avl7G5UKNWpjWggWlc4gyfBqTXBslUA5x90";
    const credentials = RealmWeb.Credentials.apiKey(apiKey);
    const user = await app.logIn(credentials);

    const result = await user.functions.GetDataFromToken(_id);
    if (result) {
      GlobalContext.userData = result;
    } else {
      console.log("oh shit");
    }
    console.log(GlobalContext.userData);
    return result;
  }
  GlobalContext.getDataFromMongoToken = getDataFromMongoToken();

  const pricingOptions = [
    {
      planName: "Basic",
      price: "$9.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      route: "/buybasic",
    },
    {
      planName: "Pro",
      price: "$19.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      route: "/buypro",
    },
  ];
  return (
    <>
      <header id="homeHeader">
        <nav id="homeNav">
          <div id="homeNavBrandDiv">
            <p id="homeNavBrand">ILLUMISCORE</p>
            <button onClick={HERESYOURBUTTONJERRY}>
              HERES YOUR BUTTON JERRY
            </button>
            <div id="googleSignInBtn"></div>
          </div>
        </nav>
      </header>

      <main id="homeContainer">
        <iframe
          className="homeItem"
          id="homeItem1"
          width="51.5%"
          height="500px"
          src="https://www.youtube.com/embed/8WaTd3z8sHE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <section className="homeItem" id="homeItem2">
          <h1>Clever Headline Goes Here</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sequi
            pariatur et quidem labore ut vel provident praesentium reprehenderit
            facere corporis corrupti, itaque.
          </p>
          <Link to="/dashboard">Sign In</Link>
        </section>
        <section className="features homeItem" id="homeItem3">
          <h2>Features?</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, ratione?
            </li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              laborum provident quisquam facilis numquam!
            </li>
          </ul>
        </section>

        <section className="pricing homeItem" id="homeItem4">
          <h2>
            Pricing <br />
          </h2>
          <div id="pricingDiv">
            {pricingOptions.map((option, index) => (
              <NewPricingCard className="pricingCard" key={index} {...option} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
