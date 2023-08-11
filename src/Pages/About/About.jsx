import React from "react";
import Layout from "../../Components/Layout";
import "./About.css";

function About() {
  return (
    <Layout id="about">
      <section id="aboutContent">
        <h1>Welcome to Illumiscore.com</h1>
        <p>
          Where your passion for both sports and smart lighting comes to life!
          Our mission is to elevate your game-day experience by synchronizing
          your LIFX lights with your favorite MLB teams. Imagine the thrill of
          celebrating every homer and run as if you were right there in the
          stands, with your lights flashing in vibrant team colors.
        </p>

        <h2>Our Vision</h2>
        <p>
          At Illumiscore.com, we envision a world where sports fans can connect
          even more deeply with their favorite teams, bringing the excitement of
          the game right into their homes. We believe that every score should be
          celebrated in style, and our innovative platform makes it possible for
          you to do just that.
        </p>

        <h2>The Technology Behind the Magic</h2>
        <p>
          Our platform integrates the world of sports and smart lighting. Our C#
          process leverages the AllSportsAPI to fetch live MLB Baseball scores
          in real-time. When your favorite team scores a run, our system springs
          into action.
        </p>
        <p>
          Using MongoDB Realm, we've created a robust and efficient system. When
          a team scores, a MongoDB Realm function is triggered to identify the
          lights associated with that team. Then, through the LIFX API, we
          command your LIFX lights to perform a mesmerizing light show,
          perfectly synchronizing with the team's colors. It's a breathtaking
          spectacle that brings the stadium atmosphere to your living room.
        </p>

        <h2>Our Commitment to You</h2>
        <p>
          Transparency and authenticity are at the heart of our commitment to
          you. Your personalized experience is of utmost importance to us. We
          take your privacy seriously, and your LIFX light API keys, light IDs,
          and names are securely stored to ensure your peace of mind.
        </p>
        <p>
          Should you ever need assistance or have any questions, our dedicated
          support team is just an email away at{" "}
          <a href="mailto:support@illumiscore.com">support@illumiscore.com</a>.
          We're here to make sure your journey with Illumiscore.com is as smooth
          as possible.
        </p>

        <h2>From User Profiles to Game-Day Thrills</h2>
        <p>
          Once you log in to Illumiscore.com, a world of excitement awaits.
          Create your user profile, where you can add your LIFX lights and
          select your favorite MLB teams. The magic happens when your chosen
          team scores – your LIFX lights will come alive, flashing in a symphony
          of colors that mirror the team's success. It's a celebration like no
          other, and you're at the center of it all.
        </p>

        <h2>The Tech Stack</h2>
        <p>
          Our platform boasts a dynamic and robust tech stack. The frontend is
          powered by React.js, ensuring a seamless and engaging user experience.
          MongoDB serves as our database backbone, securely storing your
          essential information, such as your LIFX light API keys and MLB team
          preferences.
        </p>

        <h2>Your Authentic Identity</h2>
        <p>
          We take authentication seriously to protect your data and ensure the
          integrity of your experience. Our authentication process involves
          verifying your Google token against your unique sub number, providing
          a secure and personalized environment for you to enjoy.
        </p>

        <h2>Join Us in Illuminating the Game-Day Experience</h2>
        <p>
          At Illumiscore.com, we're passionate about bringing the excitement of
          the game to your living space. Every score, every homer, every run –
          they're all moments worth celebrating. Join us in this journey of
          fusing sports and technology, lighting up your game-day experience,
          one LIFX light at a time.
        </p>

        <p>
          <em>
            Thompson SWE LLC
            <br />
            Software Publishers
          </em>
        </p>
      </section>
    </Layout>
  );
}

export default About;
