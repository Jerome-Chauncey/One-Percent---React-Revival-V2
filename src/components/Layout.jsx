import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";  
import TickerTape from "./TickerTape";
import HeroSection from "./Herosection";
import About from "./About";

const Layout = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <TickerTape/>
      <HeroSection/>
      <About/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
