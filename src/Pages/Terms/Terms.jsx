import React from "react";
import "./Terms.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Terms() {
  return (
    <>
      <Header></Header>
      <main id="terms">
        <section id="termsContent">
          <h1 id="termsHeader">Terms of Service</h1>

          <p className="termsPara">
            <strong>1. Acceptance of Terms</strong>
          </p>
          <p className="termsPara">
            By accessing Illumiscore.com, you accept and agree to these Terms of
            Service. Do not use the website if you disagree with any term.
          </p>

          <p className="termsPara">
            <strong>2. User Accounts</strong>
          </p>
          <p className="termsPara">
            You may need to create a user account to access certain features of
            the Website. You are responsible for maintaining the confidentiality
            of your account information and for all activities that occur under
            your account.
          </p>

          <p className="termsPara">
            <strong>3. Privacy and Data Security</strong>
          </p>
          <p className="termsPara">
            Your privacy is of utmost importance to us. Any personal information
            you provide to us is treated with care and discretion. We employ
            security measures to protect your data from unauthorized access.
          </p>

          <p className="termsPara">
            <strong>4. Usage Restrictions</strong>
          </p>
          <p className="termsPara">
            You are prohibited from using the Website in any way that might
            cause harm to us or any third party. This includes, but is not
            limited to, any form of hacking, scraping, or distribution of
            malware.
          </p>

          <p className="termsPara">
            <strong>5. Intellectual Property</strong>
          </p>
          <p className="termsPara">
            All content, design, graphics, and other intellectual property
            related to the Website are owned by or licensed to Thompson SWE LLC
            and are protected under intellectual property laws. Unauthorized use
            or duplication of such materials is prohibited.
          </p>

          <p className="termsPara">
            <strong>6. Disclaimers</strong>
          </p>
          <p className="termsPara">
            The services provided by Illumiscore.com are on an "as-is" basis
            without any warranties. We cannot guarantee uninterrupted or
            error-free services. The integration with LIFX lights and the
            AllSportsAPI might face occasional disruptions.
          </p>

          <p className="termsPara">
            <strong>7. LIFX Integration Terms</strong>
          </p>
          <p className="termsPara">
            For services and products integrated with LIFX, users are also
            subject to LIFX's terms and conditions. Before using these
            integrated features, please ensure you are in agreement with{" "}
            <a
              href="https://www.lifx.com/pages/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIFX's Terms of Service
            </a>
            .
          </p>

          <p className="termsPara">
            <strong>8. Changes to Terms</strong>
          </p>
          <p className="termsPara">
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting to the Website.
            It is your responsibility to review these terms regularly.
          </p>

          <p className="termsPara">
            <strong>9. Governing Law</strong>
          </p>
          <p className="termsPara">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of Georgia. Any disputes
            arising under or in connection with these terms shall be subject to
            the exclusive jurisdiction of the courts in the State of Georgia.
          </p>

          <p className="termsPara">
            <strong>10. Contact</strong>
          </p>
          <p className="termsPara">
            For any queries or clarifications related to these terms or any
            other aspect of the Website, feel free to reach out to us at
            support@illumiscore.com.
          </p>

          <p className="termsPara">
            <em>Last Updated: 2023</em>
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Terms;
