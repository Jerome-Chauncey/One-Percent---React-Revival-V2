import React, { useEffect, useRef } from "react";

const Viewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    // Create the TradingView Symbol Info widget script
    const viewerScript = document.createElement("script");
    viewerScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    viewerScript.async = true;
    viewerScript.innerHTML = JSON.stringify({
      symbol: "NASDAQ:AAPL", // Symbol for the graph
      width: "100%", // Full width
      locale: "en", // Language setting
      colorTheme: "dark", // Theme of the widget
      isTransparent: false, // Transparency
    });

    // Append the widget script to the container
    if (viewerRef.current) {
      viewerRef.current.innerHTML = ""; // Clear any existing content
      viewerRef.current.appendChild(viewerScript);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={viewerRef} style={{ width: "100%", height: "500px" }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default Viewer;
