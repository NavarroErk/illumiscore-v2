import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children, id }) {
  return (
    <>
      <Header />
      <main id={id} style={{ height: "calc(100vh - 75px)" }}>
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
