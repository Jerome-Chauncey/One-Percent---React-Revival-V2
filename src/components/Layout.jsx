import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomDisclaimer from "./BottomDisclaimer";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BottomDisclaimer />
      <Footer />
    </>
  );
};

export default Layout;
