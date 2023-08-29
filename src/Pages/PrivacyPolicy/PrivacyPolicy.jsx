import React from "react";
import "./PrivacyPolicy.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Header></Header>
      <main id="privacyPolicy">
        <section id="privacyPolicyContent">
          <h1 id="privacyPolicyHeader">Privacy Policy</h1>

          <p className="privacyPolicyPara">
            <strong>1. Information Collection and Usage</strong>
          </p>
          <p className="privacyPolicyPara">
            When you sign in through Google, we collect only your Google sub number. In addition, we collect LIFX API keys, Light IDs, Light Names, MLB team preferences, and PayPal IDs. This information is used to synchronize lighting effects with MLB team scores and offer a personalized user experience.
          </p>

          <p className="privacyPolicyPara">
            <strong>2. Data Security</strong>
          </p>
          <p className="privacyPolicyPara">
            We prioritize the security of your data, and we use advanced technologies and secure methods of data transmission to safeguard your information. We are committed to taking proactive measures to protect against unauthorized access, alteration, or disclosure of your information.
          </p>

          <p className="privacyPolicyPara">
            <strong>3. Payment Information</strong>
          </p>
          <p className="privacyPolicyPara">
            All payments are processed through PayPal. We store only the PayPal transaction IDs, and no sensitive financial information is stored on our servers.
          </p>

          <p className="privacyPolicyPara">
            <strong>4. Data Retention</strong>
          </p>
          <p className="privacyPolicyPara">
            We retain your data for as long as your account remains active or as needed to provide you with our services. Data may be retained for longer periods if required by law or for legitimate business purposes.
          </p>

          <p className="privacyPolicyPara">
            <strong>5. Your Choices</strong>
          </p>
          <p className="privacyPolicyPara">
            You have the right to access, correct, or delete your personal information. You can manage your preferences in your user profile or by contacting our support team.
          </p>

          <p className="privacyPolicyPara">
            <strong>6. Changes to Privacy Policy</strong>
          </p>
          <p className="privacyPolicyPara">
            We may update our Privacy Policy from time to time. We advise our users to review this policy periodically. Changes will be posted on this page, and the updated Privacy Policy will be effective immediately upon posting.
          </p>

          <p className="privacyPolicyPara">
            <strong>7. Contact Information</strong>
          </p>
          <p className="privacyPolicyPara">
            If you have any questions about our Privacy Policy or Terms of Service, you can contact us at{" "}
            <a href="mailto:support@illumiscore.com">support@illumiscore.com</a>.
          </p>

          <p className="privacyPolicyPara">
            <em>Last Updated: 2023</em>
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default PrivacyPolicy;
