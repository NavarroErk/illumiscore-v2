
import React from "react";
import Header from "./Header/Header";

function Layout({ children, id }) {
  return (
    <>
      <Header />
      <main id={id} style={{ height: "calc(100vh - 75px)" }}>{children}</main>
    </>
  );
}

export default Layout;
