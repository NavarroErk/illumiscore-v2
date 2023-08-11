import React from "react";
import "./PrivacyPolicy.css";
import Layout from "../../Components/Layout";

function PrivacyPolicy() {
  return (
    <Layout id="privacyPolicy">
      <section id="privacyPolicyContent">
        <h1 id="privacyPolicyHeader">Privacy Policy</h1>

        <p className="privacyPolicyPara">
          <strong>1. Information Collection and Usage</strong>
        </p>
        <p className="privacyPolicyPara">
          We collect the following information to provide our services: Lifx API
          keys, Light IDs, Light Names, MLB team preferences, and JWT credential
          sub. This data is used to synchronize lighting effects with MLB team
          scores.
        </p>

        <p className="privacyPolicyPara">
          <strong>2. Data Security</strong>
        </p>
        <p className="privacyPolicyPara">
          We take measures to protect your data, including encryption and secure
          storage. However, no data transmission over the internet or electronic
          storage is entirely secure, and we cannot guarantee absolute security.
        </p>

        <p className="privacyPolicyPara">
          <strong>6. Your Choices</strong>
        </p>
        <p className="privacyPolicyPara">
          You have the right to access, correct, or delete your personal
          information. You can manage your preferences in your user profile or
          by contacting our support team.
        </p>

        <p className="privacyPolicyPara">
          <strong>7. Changes to Privacy Policy</strong>
        </p>
        <p className="privacyPolicyPara">
          We may update our Privacy Policy from time to time. Changes will be
          posted on this page, and the updated Privacy Policy will be effective
          immediately upon posting.
        </p>

        <p className="privacyPolicyPara">
          <strong>8. Contact Information</strong>
        </p>
        <p className="privacyPolicyPara">
          If you have any questions about our Privacy Policy or Terms of
          Service, you can contact us at{" "}
          <a href="mailto:support@illumiscore.com">support@illumiscore.com</a>.
        </p>

        <p className="privacyPolicyPara">
          <em>Last Updated: 2023</em>
        </p>
      </section>
    </Layout>
  );
}

export default PrivacyPolicy;
