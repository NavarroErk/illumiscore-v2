import React from "react";
import "./About.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <>
      <Header></Header>
      <main id="about">
        <section id="aboutContent">
          <h1 id="aboutTitle">About</h1>

          <h2 className="aboutHeader">Join Us in Illuminating the Game-Day Experience</h2>
          <p>
            At Illumiscore.com, we're passionate about bringing the excitement of the game to your living space. Every run, every touchdown, every goal – they're all moments worth celebrating. Join us on this journey of fusing sports and technology, lighting up your game-day experience, one LIFX light at a time.
          </p>

          <h2 className="aboutHeader">Our Vision</h2>
          <p>
            At Illumiscore.com, we envision a world where sports fans can connect even more deeply with their favorite teams, bringing the excitement of the game right into their homes. We believe that every score should be celebrated in style, and our innovative platform makes it possible for you to do just that.
          </p>

          <h2 className="aboutHeader">Our Commitment to You</h2>
          <p>
            Transparency and authenticity are at the heart of our commitment to you. Your personalized experience is of utmost importance to us. We take your privacy seriously, and your LIFX light API keys, light IDs, and names are securely stored to ensure your peace of mind.
          </p>

          <h2 className="aboutHeader">From User Profiles to Game-Day Thrills</h2>
          <p>
            Once you log in to Illumiscore.com, a world of excitement awaits. Create your user profile, where you can add your LIFX lights and select your favorite teams. The magic happens when your chosen team scores – your LIFX lights will come alive, flashing in a symphony of colors that mirror your team’s success. It's a celebration like no other, and you're at the center of it all.
          </p>

          <h2 className="aboutHeader">Your Authentic Identity</h2>
          <p>
            We take authentication seriously to protect your data and ensure the integrity of your experience. Our authentication process involves verifying your Google token against your unique sub number, providing a secure and personalized environment for you to enjoy.
          </p>

          <h2 className="aboutHeader">The Technology Behind the Magic</h2>
          <p>
            Our platform boasts a dynamic and robust tech stack. The frontend is powered by React.js, ensuring a seamless and engaging user experience. MongoDB serves as our database backbone, securely storing your essential information, such as your LIFX light API keys and MLB team preferences.
          </p>

          <h2 className="aboutHeader">Who we are</h2>
          <p>
            We are a dedicated and diverse team of student veterans. We know service - and it is our mission to provide each and every user with a unique game day experience.
          </p>

          <p>
            <em>
              Thompson SWE LLC
              <br />
              Software Publishers
            </em>
          </p>

          <h2 className="aboutHeader">
            Compatible lights can be found on{" "}
            <a target="_blank" rel="noreferrer" href="https://amzn.to/3ssRIHZ">
              Amazon
            </a>{" "}
            and at other familiar retail locations
          </h2>
          <p> Here are our Affiliate Links:</p>

          <div id="adColTS">
            <iframe
              className="affiliateAd"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=thompsonswe-20&language=en_US&marketplace=amazon&region=US&placement=B08BL16M81&asins=B08BL16M81&linkId=43b6279d28e2147bcc8490c9038aec2a&show_border=true&link_opens_in_new_window=true"
            ></iframe>

            <iframe
              className="affiliateAd"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=thompsonswe-20&language=en_US&marketplace=amazon&region=US&placement=B08BKXPX3N&asins=B08BKXPX3N&linkId=688b6aa9691e50132d393b6130a82799&show_border=true&link_opens_in_new_window=true"
            ></iframe>

            <iframe
              className="affiliateAd"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=thompsonswe-20&language=en_US&marketplace=amazon&region=US&placement=B08FW7ZNC2&asins=B08FW7ZNC2&linkId=b1fa0f78041c29dc894f0fb23b67a855&show_border=true&link_opens_in_new_window=true"
            ></iframe>

            <iframe
              className="affiliateAd"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=thompsonswe-20&language=en_US&marketplace=amazon&region=US&placement=B091ZT4L78&asins=B091ZT4L78&linkId=d6dfc39b4a047fed7b6cc07c17e1e7d7&show_border=true&link_opens_in_new_window=true"
            ></iframe>

            <iframe
              className="affiliateAd"
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=thompsonswe-20&language=en_US&marketplace=amazon&region=US&placement=B073177QS8&asins=B073177QS8&linkId=896b07d4a5462c0ec6d73727f1282e67&show_border=true&link_opens_in_new_window=true"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default About;
