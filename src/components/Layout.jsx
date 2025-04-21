import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";  
import TickerTape from "./TickerTape";
import Cta from "./Cta";

const Layout = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <TickerTape/>
      <Cta/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
