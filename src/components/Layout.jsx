 import React from "react";
import { Outlet } from "react-router-dom";
import Disclaimer from "./Disclaimer";
import Navbar from "./Navbar";
import BottomDisclaimer from "./BottomDisclaimer";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Disclaimer />
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
