import React from "react";
import { Link } from "react-router-dom";
import "./NewDashboardCard.css"
import DashboardCardSportTile from "./Dashboard Card Components/DashboardCardSportTile";
import DashboardCardLightTile from "./Dashboard Card Components/DashboardCardLightTile";

function NewDashboardCard({title, tileData, route}){

    
    
    // fetch("endpointToGetImageForTiles").then((response) => {
    //     if (!response.ok) {
    //         throw new Error("Network response was not ok")
    //     }
    //     return response.json();
    // }).then((data) => {
    //     imgData = data; //this will hold urls for dashboard card tile images
    // })


    return(
        <div className="dashCardContainer">
            <p id="dashCardTitle">{title}</p>
            <Link to={route}>
              
                <div className="dashTileContainer">
                  <p>View Your {title}</p>
                {/* {tileData.map((item, index) => (
          title === 'Teams' ? (
            <DashboardCardSportTile key={index} img={item.img} />
          ) : (
            <DashboardCardLightTile key={index} img={item.img} />
          )
        ))} */}
                </div>
                </Link>
        </div>
    )
}

export default NewDashboardCard