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
      <Link to="../" id="headerTitle">
        ILLUMISCORE
      </Link>
      <nav id="headerNav">
        {userSignedIn() ? (
          <Link className="headerLink" to="/dashboard">
            Dashboard
          </Link>
        ) : (
          <div></div>
        )}

        {userSignedIn() ? (
          <>
            <button
              onClick={signOutClicked}
              className="headerLink"
              id="signOutBtn"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <div id="googleSignInBtn"></div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
