import React from "react";
import "./AlertMessage.css";

function AlertMessage({ message, isSuccessful, alertMessageContainer }) {
  const handleAnimationEnd = (event) => {
    const alertMessage = event.target;
    const alertMessageContainer = alertMessage.parentNode;
    alertMessageContainer.removeChild(alertMessage);

    if (alertMessageContainer.childNodes.length === 0) {
      alertMessageContainer.parentNode.removeChild(alertMessageContainer);
    }
  };

  const backgroundColor =
    isSuccessful === true ? "rgba(0, 150, 0, 0.9)" : "rgba(255, 0, 0, 0.9)";

  return (
    <div
      className="alertMessage"
      style={{ backgroundColor }}
      onAnimationEnd={handleAnimationEnd}
    >
      <p>{message}</p>
    </div>
  );
}

export default AlertMessage;
