import React from "react";
import Layout from "../../Components/Layout";
import "./Contact.css";

function Contact() {
  return (
    <Layout id="contact">
      <section id="contactContent">
        <h1>Contact Us</h1>
        <p className="contactPara">
          If you have any questions or need assistance, feel free to get in
          touch with us. We're here to help!
        </p>

        <h2>Get in Touch</h2>
        <p className="contactPara">
          <strong>Email:</strong>{" "}
          <a href="mailto:support@illumiscore.com">support@illumiscore.com</a>
        </p>
        {/* <form action="#" method="post">
          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />
          <br />

          <label for="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <br />

          <label for="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="4" required></textarea>
          <br />
          <br />

          <button type="submit">Send Message</button>
        </form> */}

        <p className="contactPara">
          We'll get back to you as soon as possible.
        </p>

        <p className="contactPara">
          <strong>Thompson SWE</strong>
          <br />A Limited Liability Company
        </p>
      </section>
    </Layout>
  );
}

export default Contact;
