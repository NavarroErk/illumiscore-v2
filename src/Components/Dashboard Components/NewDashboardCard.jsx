import React from "react";
import { Link } from "react-router-dom";
import "./NewDashboardCard.css";

function NewDashboardCard({ title, route }) {
  return (
    <div className="dashCardContainer">
      <Link id="dashCardTitle" to={route}>
        {title}
      </Link>
    </div>
  );
}

export default NewDashboardCard;
