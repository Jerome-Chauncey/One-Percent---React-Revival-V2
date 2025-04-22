import React from "react";
import { Outlet } from "react-router-dom";
import Disclaimer from "./Disclaimer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomDisclaimer from "./BottomDisclaimer";

const Layout = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
      <BottomDisclaimer />
    </>
  );
};

export default Layout;
