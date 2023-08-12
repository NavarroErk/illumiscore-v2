import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../..";

const PayPalSubBtn = ({ selectedPlan }) => {
  const context = useContext(GlobalContext);
  const userData = localStorage.getItem("userData");

  const _id = userData ? JSON.parse(userData).data._id : null;

  useEffect(() => {
    if (!_id) {
      console.error("UserData not found in local storage.");
      return;
    }
    console.log("Effect triggered with selectedPlan:", selectedPlan);

    // Check if PayPal SDK is loaded
    if (!window.paypal) {
      console.error("PayPal SDK not loaded.");
      return;
    }

    // No operation for Free Plan
    if (selectedPlan === 0) {
      console.log("Free plan selected. No action required.");
      return;
    }

    // Render PayPal Button
    window.paypal.Buttons({
      async createSubscription(data, actions) {
        console.log("Attempting to create subscription with data:", data);
        return actions.subscription.create({
          'plan_id': "P-0B3312413S344771CMTLSR5I", 
        });
      },

      async onApprove(data) {
        console.log("Approval received with data:", data);
        try {
          const responseData = await context.globalState.functionList.CaptureSubscription(data.subscriptionID, _id);
          if (responseData && responseData.success) {
            console.log("Subscription response data:", responseData);
            alert(data.subscriptionID);
          } else {
            console.error("Failed to complete subscription. Response data:", responseData);
          }
        } catch (error) {
          console.error("Error approving subscription:", error);
        }
      }
    }).render("#paypal-button-container");
    console.log("PayPal button rendered.");

  }, [selectedPlan, context.globalState.functionList, _id]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalSubBtn;
