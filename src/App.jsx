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
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  // Accessing global state using context
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  // State to store the selected plan price
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
  const [planId, setPlanId] = useState(null);

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
  function handlePlanClick(price, planId) {
    setSelectedPlanPrice(price);
    setPlanId(planId);

    // Toggle the visibility of the PayPal button
    if (price !== 0) {
      setShowPayPalButton(!showPayPalButton);
    } else {
      setShowPayPalButton(false); // Hide the PayPal button for the Free Plan
    }
  }

  return (
    <>
      <Header></Header>
      <main id="app">
        {/* Hero section */}
        <section className="heroSection">
          <h1>Welcome to Illumiscore.com</h1>
          <p>
            Where sports meets magic, lighting up your game-day like never
            before!
          </p>
        </section>

        {/* Features section */}
        <section className="featuresContainer">
          <h2 id="featuresContainerHeader">Why Choose Illumiscore?</h2>
          <div className="features">
            <div id="syncFeature" className="feature">
              <div className="featureImgPlatform">
                <div id="syncFeatureImg" className="featureContent">
                  <div id="syncFeatureContent">
                    <h3 id="syncFeatureHeader" className="featureHeader">
                      Real-time Synchronization
                    </h3>
                    <p id="syncFeaturePara" className="featurePara">
                      Feel every score! Watch your LIFX lights dance in
                      real-time with your favorite MLB teams’ performance.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="featureParaDiv"></div> */}
            </div>
            <div id="stadiumFeature" className="feature">
              <h3 id="stadiumFeatureHeader" className="featureHeader">
                Stadium Experience
              </h3>
              <p id="stadiumFeaturePara" className="featurePara">
                Experience the thrill of being in the stadium from the comfort
                of your couch. Every run, every homer, every light show!
              </p>
            </div>
            <div id="securityFeature" className="feature">
              <div className="featureImgPlatform">
                <div id="securityFeatureImg" className="featureContent">
                  <div id="securityFeatureContent">
                    <h3 id="securityFeatureHeader" className="featureHeader">
                      Secure & Reliable
                    </h3>
                    <p className="featurePara">
                      Your data is safe with us. Enjoy a seamless, hassle-free
                      experience backed by our robust tech stack.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="featureParaDiv"></div> */}
            </div>
          </div>
        </section>

        {/* Pricing table section */}
        <section className="pricingTable">
          <NewPricingCard
            id="basicPlanCardLink"
            planName="Basic Plan"
            price="$3 / month"
            features={["Up to 5 Lights", "Up to 5 Teams"]}
            onClick={() => handlePlanClick(0)} // price for Free Plan
            linkText="Get Started"
          />
          <NewPricingCard
            id="standardPlanCardLink"
            planName="Standard Plan"
            price="$10 / month"
            features={["Up to 30 Lights", "Up to 30 Teams"]}
            onClick={() => handlePlanClick(5, "P-0B3312413S344771CMTLSR5I")} // price for Standard Plan
            linkText="Upgrade"
            // linkText={linkText}
          />
          <NewPricingCard
            id="premiumPlanCardLink"
            planName="Premium Plan"
            price="$20 / month"
            features={["Up to 100 Lights", "Unlimited Teams"]}
            onClick={() => handlePlanClick(10, "P-8YJ70211W29776809MTLSWOY")} // price for Premium Plan
            linkText="Upgrade"
          />
        </section>

        {/* Conditionally render the PayPal button if a paid plan is selected */}
        {showPayPalButton && (
          <>
            <div className="selected-price">
              Selected Plan Price: ${selectedPlanPrice}
            </div>
            <PayPalSubBtn planId={planId} price={selectedPlanPrice} />
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
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
