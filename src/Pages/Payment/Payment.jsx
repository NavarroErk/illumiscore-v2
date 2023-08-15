import React from "react";
import PayPalBtn from "../../Components/PayPalBtn/PayPalBtn";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Payment() {
  return (
    <>
      <Header></Header>
      <main id="payment">
        <div>
          <PayPalBtn></PayPalBtn>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Payment;
