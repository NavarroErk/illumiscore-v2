import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import NewPricingCard from "./Components/New Pricing Card/NewPricingCard";
import * as RealmWeb from "realm-web";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from ".";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout";

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
      { theme: "outline", size: "large" }
    );
  }, []);

  async function attemptToRedirect(token) {
    const credential = token.credential;
    if (attemptToRedirectWithLocalStorage !== true) {
      const userData = await context.globalState.functionList.GetDataFromToken(
        credential
      );
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
        // navigate("./dashboard");
        return true;
      }
    }
    return null;
  }

  function setUserDataLocalStorage(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  function paymentCardClicked() {
    navigate("/payment");
  }

  return (
    <Layout id="app">
      <section className="heroSection">
        <h1>Welcome to Illumiscore.com</h1>
        <p>
          Where sports meet magic, lighting up your game-day like never before!
        </p>
      </section>

      <section className="featuresContainer">
        <h2 id="featuresContainerHeader">Why Choose Illumiscore?</h2>
        <div className="features">
          <div id="syncFeature" className="feature">
            {/* <h3>Real-time Synchronization</h3>
            <p>
              Feel every score! Watch your LIFX lights dance in real-time with
              your favorite MLB teams’ performance.
            </p> */}
            <div className="featureContent">
              <h3>Real-time Synchronization</h3>
              <p>
                Feel every score! Watch your LIFX lights dance in real-time with
                your favorite MLB teams’ performance.
              </p>
            </div>
          </div>
          <div id="stadiumFeature" className="feature">
            <h3>Stadium Experience</h3>
            <p>
              Experience the thrill of being in the stadium from the comfort of
              your couch. Every run, every homer, every light show!
            </p>
          </div>
          <div id="securityFeature" className="feature">
            <h3>Secure & Reliable</h3>
            <p>
              Your data is safe with us. Enjoy a seamless, hassle-free
              experience backed by our robust tech stack.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="pricingHeaderContainer">
          <h2 id="pricingHeader">Pricing Plans</h2>
          <p>Choose the perfect plan to light up your game day!</p>
        </div>

        <div className="pricingTable">
          {/* <div className="pricingCard">
            <h3>Free Plan</h3>
            <span className="price">$0</span>
            <ul>
              <li>1 Light</li>
              <li>1 Team</li>
            </ul>
            <Link to="/payment" className="btn">
              Get Started
            </Link>
          </div> */}
          <NewPricingCard
            planName="Free Plan"
            price="$0"
            features={["1 Light", "1 Team"]}
            route="/payment"
            linkText="Get Started"
          ></NewPricingCard>
          <NewPricingCard
            planName="Standard Plan"
            price="$5"
            features={["Up to 50 Lights", "Unlimited Teams"]}
            route="/payment"
            linkText="Upgrade"
          ></NewPricingCard>
          <NewPricingCard
            planName="Premium Plan"
            price="$10"
            features={["Unlimited", "Unlimited Teams"]}
            route="/payment"
            linkText="Upgrade"
          ></NewPricingCard>
        </div>
      </section>

      <section className="joinUs">
        <h2>Ready to Light Up Your Game-Day?</h2>
        <p>
          Join the Illumiscore family and transform your sports-watching
          experience forever.
        </p>
        <br />
        <br />
      </section>
      {/* <main id="homeContainer">
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
      </main> */}
    </Layout>
  );
}

export default App;
