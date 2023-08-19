import React from "react";
import { Link } from "react-router-dom";
import "./NewDashboardCard.css";

function NewDashboardCard({ title, route, className, lightsAndTeams }) {
  return (
    <div
      className={className}
      // className="dashCardContainer"
    >
      <Link className="dashCardTitle" to={route}>
        {title}
        <p>: {lightsAndTeams} </p>
      </Link>
    </div>
  );
}

export default NewDashboardCard;
