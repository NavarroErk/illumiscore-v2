import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  let userSignedIn = function () {
    if (!localStorage.getItem("userData")) {
      return false;
    }
    return true;
  };

  function signOutClicked() {
    localStorage.removeItem("userData");
    localStorage.removeItem("illumiScoreJWToken");
    navigate("/signedOut");
  }

  return (
    <header id="header">
      <Link to="/" id="headerTitle">
        ILLUMISCORE
      </Link>
      <nav id="headerNav">
        {userSignedIn() ? (
          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdownContent">
              <Link
                id="headerDashboardLink"
                className="headerLink"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Link
                id="headerAccountSettingsLink"
                className="headerLink"
                to="/accountSettings"
              >
                Account Settings
              </Link>
              <button
                onClick={signOutClicked}
                className="headerLink"
                id="signOutBtn"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div id="googleSignInBtn"></div>
        )}
      </nav>
    </header>
  );
}

export default Header;
