import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { GlobalContext } from "../..";

function Header() {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  function signOutClicked() {
    localStorage.removeItem("userData");
    localStorage.removeItem("illumiScoreJWToken");
    navigate("/");
  }

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
        <button onClick={signOutClicked} className="headerLink" id="signOutBtn">
          Sign Out
        </button>
        <div id="googleSignOutBtn"></div>
      </nav>
    </header>
  );
}

export default Header;
