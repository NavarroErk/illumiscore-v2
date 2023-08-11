import React from "react";
import "./Terms.css";
import Layout from "../../Components/Layout";

function Terms() {
  return (
    <Layout id="terms">
      <section id="termsContent">
        <h1 id="termsHeader">Terms of Service</h1>

        <p className="termsPara">
          <strong>1. Acceptance of Terms</strong>
        </p>
        <p className="termsPara">
          By accessing and using Illumiscore.com ("the Website"), you agree to
          comply with and be bound by these Terms of Service. If you do not
          agree with any part of these terms, you must not use the Website.
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
          <strong>7. Changes to Terms</strong>
        </p>
        <p className="termsPara">
          We reserve the right to modify these Terms of Service at any time.
          Changes will be effective immediately upon posting to the Website. It
          is your responsibility to review these terms regularly.
        </p>

        <p className="termsPara">
          <strong>8. Governing Law</strong>
        </p>
        <p className="termsPara">
          These Terms of Service shall be governed by and construed in
          accordance with the laws of the State of Georgia. Any disputes arising
          under or in connection with these terms shall be subject to the
          exclusive jurisdiction of the courts in the State of Georgia.
        </p>

        <p className="termsPara">
          <em>Last Updated: 2023</em>
        </p>
      </section>
    </Layout>
  );
}

export default Terms;
