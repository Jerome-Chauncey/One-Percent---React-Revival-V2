import React from "react";
import Disclaimer from "../components/Disclaimer";
import TickerTape from "../components/TickerTape";
import Cta from "../components/Cta";

function Home() {
  return (
    <>
      <Disclaimer />
      <div className="container mt-4">
        <h1>Welcome to One Percent</h1>
        <p></p>
      </div>
      <TickerTape />
      <Cta />
    </>
  );
}

export default Home;
