import React from "react";
import Disclaimer from "../components/Disclaimer";
import TickerTape from "../components/TickerTape";
import Cta from "../components/Cta";
import HeroSection from "../components/Herosection";
import About from "../components/About";

function Home() {
  return (
    <>
      <Disclaimer />
      <TickerTape />
      <HeroSection />
      <About />
      <Cta />

    </>
  );
}

export default Home;
