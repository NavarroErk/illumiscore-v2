import React from "react";
import "./NewPricingCard.css";
import { Link, useNavigate } from "react-router-dom";

function NewPricingCard({ planName, price, features, route, linkText }) {
  const navigateToPayment = useNavigate("/payment");
  return (
    <div className="pricingCard">
      <h2 className="pricingCardTitle">{planName}</h2>
      <div className="pricingCardContent">
        <p className="price">{price} / month</p>
        <ul>
          {features.map((feature, index) => (
            <li className="pricingCardFeature" key={index}>
              {feature}
            </li>
          ))}
        </ul>
        <div className="pricingCardLinkContainer">
          <Link className="pricingCardLink" to="/payment">
            {linkText}
          </Link>
        </div>
      </div>
      <div className="pricingCardBg"></div>
    </div>
  );
}

export default NewPricingCard;
