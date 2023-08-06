import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <Link to="../" id="headerTitle">
        ILLUMISCORE
      </Link>
      <nav id="headerNav">
        <Link className="headerLink" to="/dashboard">
          Home
        </Link>
        <Link className="headerLink" to="/about">
          About
        </Link>
        <Link className="headerLink" to="/contact">
          Contact
        </Link>
        <div id="googleSignOutBtn"></div>
      </nav>
    </header>
  );
}

export default Header;
