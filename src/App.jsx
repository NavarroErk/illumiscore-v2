// Required dependencies and components
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import NewPricingCard from "./Components/New Pricing Card/NewPricingCard";
import * as RealmWeb from "realm-web";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from ".";
import Layout from "./Components/Layout";
import PayPalBtn from "./Components/PayPalBtn/PayPalBtn";
import PayPalSubBtn from "./Components/PayPalBtn/PayPalSubBtn";

function App() {
  // Accessing global state using context
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  // State to store the selected plan price
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);

  const [showPayPalButton, setShowPayPalButton] = useState(false);

  // Side effect to check for redirection and initialize Google account sign in
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "790870897502-fqdi3s4r49a8741sbeqt19st74k6ddkc.apps.googleusercontent.com",
      callback: attemptToRedirect,
    });

    // Render the Google sign-in button
    google.accounts.id.renderButton(
      document.querySelector("#googleSignInBtn"),
      // Specify theme and size of the button
      { theme: "outline", size: "large" }
    );
  }, []);

  // Try redirecting after sign-in
  async function attemptToRedirect(token) {
    const credential = token.credential;
    if (attemptToRedirectWithLocalStorage !== true) {
      const userData = await context.globalState.functionList.GetDataFromToken(
        credential
      );
      if (userData) {
        localStorage.setItem("illumiScoreJWToken", credential);
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("./dashboard");
      }
    }
  }

  // Check if user data is present in local storage and attempt redirection
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
        return true;
      }
    }
    return null;
  }

  // Set user data to local storage

  // Handler for when a plan is clicked
  function handlePlanClick(price) {
    setSelectedPlanPrice(price);

    // Toggle the visibility of the PayPal button
    if (price !== 0) {
      setShowPayPalButton(!showPayPalButton);
    } else {
      setShowPayPalButton(false); // Hide the PayPal button for the Free Plan
    }
  }

  return (
    <Layout id="app">
      {/* Hero section */}
      <section className="heroSection">
        <h1>Welcome to Illumiscore.com</h1>
        <p>
          Where sports meet magic, lighting up your game-day like never before!
        </p>
      </section>

      {/* Features section */}
      <section className="featuresContainer">
        <h2 id="featuresContainerHeader">Why Choose Illumiscore?</h2>
        <div className="features">
          <div id="syncFeature" className="feature">
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

      {/* Pricing table section */}
      <div className="pricingTable">
        <NewPricingCard
          planName="Free Plan"
          price="$0"
          features={["1 Light", "1 Team"]}
          onClick={() => handlePlanClick(0)} // price for Free Plan
          linkText="Get Started"
        />
        <NewPricingCard
          planName="Standard Plan"
          price="$5"
          features={["Up to 50 Lights", "Unlimited Teams"]}
          onClick={() => handlePlanClick(5)} // price for Standard Plan
          linkText="Upgrade"
        />
        <NewPricingCard
          planName="Premium Plan"
          price="$10"
          features={["Unlimited", "Unlimited Teams"]}
          onClick={() => handlePlanClick(10)} // price for Premium Plan
          linkText="Upgrade"
        />
      </div>

      {/* Conditionally render the PayPal button if a paid plan is selected */}
      {showPayPalButton && (
        <>
          <div className="selected-price">
            Selected Plan Price: ${selectedPlanPrice}
          </div>
          <PayPalSubBtn price={selectedPlanPrice} />
        </>
      )}

      {/* Call to action section */}
      <section className="joinUs">
        <h2>Ready to Light Up Your Game-Day?</h2>
        <p>
          Join the Illumiscore family and transform your sports-watching
          experience forever.
        </p>
        <br />
        <br />
      </section>
    </Layout>
  );
}

export default App;
