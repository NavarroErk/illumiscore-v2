import React from "react";
import "../STSearch.css";

function STSearchInput({ searchTitle, fct, textboxValue }) {
  return (
    <div id="searchInput">
      <p id="searchInputPara">Search {searchTitle} </p>
      <input
        id="searchInputTextbox"
        value={textboxValue}
        onChange={fct}
        type="text"
      />
    </div>
  );
}

export default STSearchInput;
