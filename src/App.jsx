import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import NewPricingCard from "./Components/New Pricing Card/NewPricingCard";
import * as RealmWeb from "realm-web";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from ".";
// import { FlashTeamFromWeb } from "./mongoDBClient";

function App() {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    attemptToRedirectWithLocalStorage();
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "790870897502-fqdi3s4r49a8741sbeqt19st74k6ddkc.apps.googleusercontent.com",
      callback: attemptToRedirect,
    });

    google.accounts.id.renderButton(
      document.querySelector("#googleSignInBtn"),
      // theme and size of button
      { theme: "outline", size: "medium" }
    );
  }, []);

  async function attemptToRedirect(token) {
    const credential = token.credential;
    console.log(token);
    if (attemptToRedirectWithLocalStorage !== true) {
      const userData = await context.globalState.functionList.GetDataFromToken(
        credential
      );
      console.log("break");
      console.log(userData);
      if (userData) {
        localStorage.setItem("illumiScoreJWToken", credential);
        setUserDataLocalStorage(userData);
        navigate("./dashboard");
      }
    }
  }

  async function attemptToRedirectWithLocalStorage() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData == null) {
      return;
    }
    const _id = userData.data._id;
    if (_id) {
      const userData = await context.globalState.functionList.GetUserFromWeb(
        _id
      );
      if (userData) {
        setUserDataLocalStorage(userData);
        navigate("./dashboard");
        return true;
      }
    }
    return null;
  }

  function setUserDataLocalStorage(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

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
