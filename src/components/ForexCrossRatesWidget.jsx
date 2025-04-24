import React, { useEffect, useRef } from "react";

const ForexCrossRatesWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.async = true;
    script.type = "text/javascript";
    script.text = JSON.stringify({
      width: "100%",
      height: "550",
      currencies: [
        "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"
      ],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#000000"
    });

    containerRef.current.innerHTML = ""; 
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-auto" id="live-chart" ref={containerRef}>

    </div>
  );
};

export default ForexCrossRatesWidget;
