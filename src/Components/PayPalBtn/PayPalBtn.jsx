import React, { useContext } from "react";
import { GlobalContext } from "../..";

const PayPalBtn = () => {
  const context = useContext(GlobalContext);
  const userData = localStorage.getItem("userData");
  const _id = JSON.parse(userData).data._id;

  React.useEffect(() => {
    if (!window.paypal) {
      console.error("PayPal SDK not loaded.");
      return;
    }

    window.paypal
      .Buttons({
        async createOrder() {
          const cartDetails = {
            cart: [
              {
                sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                quantity: "YOUR_PRODUCT_QUANTITY",
              },
            ],
          };

          try {
            const orderData =
              await context.globalState.functionList.CreateOrder(cartDetails);
            return orderData.id;
          } catch (error) {
            console.error("Error creating order:", error);
          }
        },

        async onApprove(data) {
          try {
            const responseData =
              await context.globalState.functionList.CaptureOrder(
                data.orderID,
                _id
              );
            if (responseData && responseData.success) {
              alert(responseData.message);
            } else {
              console.error("Failed to complete transaction.");
            }
          } catch (error) {
            console.error("Error approving order:", error);
          }
        },
      })
      .render("#paypal-button-container");
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PayPalBtn;
