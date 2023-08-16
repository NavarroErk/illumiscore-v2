import React from "react";
import { Link } from "react-router-dom";
import "./NewDashboardCard.css";

function NewDashboardCard({ title, route, className }) {
  return (
    <div
      className={className}
      // className="dashCardContainer"
    >
      <Link className="dashCardTitle" to={route}>
        {title}
      </Link>
    </div>
  );
}

export default NewDashboardCard;
