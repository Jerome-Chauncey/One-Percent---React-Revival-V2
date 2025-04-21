import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";  
import TickerTape from "./TickerTape";
import Cta from "./Cta";
import BottomDisclaimer from "./BottomDisclaimer";

const Layout = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <TickerTape/>
      <Cta/>
      <BottomDisclaimer/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
