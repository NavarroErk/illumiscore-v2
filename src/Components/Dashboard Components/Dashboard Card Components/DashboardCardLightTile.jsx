import React from "react";
import { Link } from "react-router-dom";
import "./DashboardCardTile.css"

function DashboardCardLightTile({img}){
    return(
        <div className="dashboardCardLightTile">
            <img className="dashboardCardLightTileImg" src={img} alt="Light Icon" />
        </div>
    )
}

export default DashboardCardLightTile