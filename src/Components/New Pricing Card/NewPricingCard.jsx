import React from "react";
import "./NewPricingCard.css"
import { Link } from "react-router-dom";

function NewPricingCard({planName, price, features, route}){
    return(
        <div className="pricingCard">
            <Link className="pricingCardLink" to={route}>
            <div className="pricingCardBg"></div>
                <h2 className="pricingCardTitle">{planName}</h2>
                <div className="pricingCardContent">
                    <p className="pricingCardPrice">{price} / month</p>
                    <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                </div>
            </Link>
        </div>
    )
}

export default NewPricingCard