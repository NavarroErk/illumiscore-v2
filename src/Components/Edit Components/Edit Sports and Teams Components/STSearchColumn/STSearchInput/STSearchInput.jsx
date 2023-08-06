import React from "react";
import "../STSearch.css"


function STSearchInput({searchTitle}) {
    return(
        <div id="searchInput">
            <p id="searchInputPara">Search {searchTitle} </p>
            <input id="searchInputTextbox" type="text" />
        </div>
    )
}

export default STSearchInput