import React from "react";
import { Link } from "react-router-dom";
import "./DashboardCardTile.css"

function DashboardCardSportTile({img}){
    return(
        <div className="dashboardCardSportTile">
            <img className="dashboardCardSportTileImg" src={img} alt="Sport Icon" />
        </div>
    )
}

export default DashboardCardSportTile