import React from "react";
import "./NewPricingCard.css";

function NewPricingCard({ planName, price, features, onClick, linkText }) {
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
          <div
            className="pricingCardLink"
            onClick={(e) => {
              e.preventDefault(); // This prevents the default navigation behavior
              if (onClick) {
                onClick(); // Calling the passed onClick function
              }
            }}
          >
            {linkText}
          </div>
        </div>
      </div>
      <div className="pricingCardBg"></div>
    </div>
  );
}

export default NewPricingCard;
