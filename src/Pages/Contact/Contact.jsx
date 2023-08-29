import React from "react";
import "./Contact.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  return (
    <>
      <Header></Header>
      <main id="contact">
        <section id="contactContent">
          <h1 id="contactTitle">Contact Us</h1>
          <p className="contactPara">
            We're committed to offering you the best experience. If you have
            questions, suggestions, or need assistance, we're here to help.
          </p>

          <h2>Get in Touch</h2>
          <p className="contactPara">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@illumiscore.com">support@illumiscore.com</a>
          </p>
          <p className="contactPara">
            <strong>Support Forum:</strong>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reddit.com/r/illumiscore"
            >
              r/illumiscore
            </a>
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
            You're important to us. We'll respond to your queries as promptly as
            possible.
          </p>

          <h2>Follow Us</h2>
          <p className="contactPara">
            Stay updated with our latest news and features by following us on
            social media.
            <br />
            <br />
            {/* Update with your social media links and icons */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=61550097122790"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/illumiscore"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.reddit.com/r/illumiscore/"
            >
              Reddit
            </a>
            <br />
            <a
              id="feedbackLink"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfpdHYa-riEmPDwr_1b7O0RYHM3aLCkoTT6BDTKCNG7ni_q3A/viewform?usp=pp_url"
            >
              Feedback Form for Beta Testers
            </a>
          </p>

          <p className="contactPara">
            <strong>Thompson SWE</strong>
            <br />A Limited Liability Company
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Contact;
