import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children, id }) {
  return (
    <>
      <Header />
      <main id={id}>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
