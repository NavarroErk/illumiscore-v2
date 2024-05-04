import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SetupHelp.css";

function SetupHelp() {
  return (
    <>
      <Header></Header>
      <main id="setup-help">
        <section id="setup-helpContent">
          <p style={{ fontSize: "32px" }}>
            How to Get Your LIFX API Key: A Step-by-Step Guide
          </p>
          <p>
            If you're eager to dive into the world of smart lighting with
            Illumiscore.com, you'll need a LIFX API key to unlock the full
            potential of our product. Don't worry, we're here to guide you
            through the process. Follow these simple steps to obtain your LIFX
            API key and illuminate your game-day experience like never before.
          </p>

          <h2>Step 1: Download the LIFX App</h2>
          <p>
            Before you can obtain your LIFX API key, you'll need to download the
            official LIFX app on your smartphone. The app is available for both
            iOS and Android devices. Visit your device's app store and search
            for "LIFX" to find and download the app.
          </p>

          <h2>Step 2: Create or Log In to Your LIFX Account</h2>
          <p>
            Once the app is installed, open it and either create a new LIFX
            account or log in to your existing one. This account will serve as
            your gateway to managing and controlling your LIFX smart lights.
          </p>

          <h2>Step 3: Set Up Your LIFX Lights</h2>
          <p>
            Follow the on-screen instructions to set up your LIFX smart lights
            within the app. This may involve connecting your lights to your home
            Wi-Fi network and giving them unique names or assigning them to
            specific rooms.
          </p>

          <h2>Step 4: Access Your API Key on cloud.lifx.com</h2>
          <p>
            Now that your lights are set up, it's time to access your LIFX API
            key. To do this, you'll need to visit the LIFX cloud platform at{" "}
            <a target="_blank" rel="noreferrer" href="https://cloud.lifx.com">
              cloud.lifx.com
            </a>{" "}
            using a web browser on your computer or smartphone.
          </p>

          <h2>Step 5: Log In to Your LIFX Cloud Account</h2>
          <p>
            On the LIFX cloud platform, log in using the same credentials as
            your LIFX app account. This will ensure that you have access to all
            the lights associated with your account.
          </p>

          <h2>Step 6: Generate Your API Key</h2>
          <p>
            Once you're logged in, navigate to your account settings (arrow next
            your email on the top right corner of the webpage). Click the
            "Personal access tokens" option on the dropdown menu, then click the
            button labeled "Generate New Token".
          </p>

          <h2>Step 7: Copy and Save Your API Key</h2>
          <p>
            When you generate your API key, it will be displayed on the screen.
            Make sure to copy this key and save it in a secure location. This
            key is like a password for your LIFX lights, so treat it with care
            and never share it publicly.
          </p>

          <h2>Step 8: Connect Your LIFX API Key to Illumiscore.com</h2>
          <p>
            With your LIFX API key in hand, you're almost there. Log in to your
            Illumiscore.com account and navigate to the settings or profile
            section. Here, you should find an option to enter your LIFX API key.
            Paste the key you obtained from the LIFX cloud platform into the
            provided field and save your changes.
          </p>

          <p>
            Congratulations! You've successfully obtained and connected your
            LIFX API key to Illumiscore.com. Now you're all set to experience
            the magic of synchronized smart lighting with your favorite MLB
            teams. As you celebrate every score and home run, your LIFX lights
            will light up your space in vibrant team colors, bringing the
            stadium atmosphere right into your home.
          </p>

          <p>
            If you encounter any issues or have questions along the way, don't
            hesitate to reach out to our dedicated support team at{" "}
            <a href="mailto:support@thompsonswe.com">support@thompsonswe.com</a>
            . We're here to ensure your journey with Illumiscore.com is smooth
            and exciting.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SetupHelp;
