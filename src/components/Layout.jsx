import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Disclaimer from "./Disclaimer";  

const Layout = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
