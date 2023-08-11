import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <Link id="privacyPolicyLink" className="footerLink" to="/privacyPolicy">
        Privacy
      </Link>
      <Link id="termsLink" className="footerLink" to="/terms">
        Terms
      </Link>
      <Link className="footerLink" to="/about">
        About
      </Link>
      <Link className="footerLink" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Footer;
