import React from "react";
import Layout from "../../Components/Layout";
import PayPalBtn from "../../Components/PayPalBtn/PayPalBtn";

function Payment() {
  return (
    <Layout id="payment">
      <div>
        <PayPalBtn></PayPalBtn>
      </div>
    </Layout>
  );
}

export default Payment;
