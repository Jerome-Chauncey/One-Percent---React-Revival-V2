import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";  
import TickerTape from "./TickerTape";

const Layout = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <TickerTape/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
