import React, { useRef, useEffect } from "react";

const Bottom = () => {
  const technicalAnalysisRef = useRef(null);
  const newsRef = useRef(null);

  useEffect(() => {
    // Technical Analysis Widget
    const technicalAnalysisScript = document.createElement("script");
    technicalAnalysisScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    technicalAnalysisScript.async = true;
    technicalAnalysisScript.innerHTML = JSON.stringify({
      interval: "1m",
      width: 425,
      isTransparent: false,
      height: 500, // updated to match the News widget height
      symbol: "NASDAQ:AAPL",
      showIntervalTabs: true,
      displayMode: "single",
      locale: "en",
      colorTheme: "dark",
    });

    if (technicalAnalysisRef.current) {
      technicalAnalysisRef.current.innerHTML = "";
      technicalAnalysisRef.current.appendChild(technicalAnalysisScript);
    }

    // News Widget
    const newsScript = document.createElement("script");
    newsScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    newsScript.async = true;
    newsScript.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
      width: 400,
      height: 500, // updated to match the Technical Analysis widget height
      colorTheme: "dark",
      locale: "en",
    });

    if (newsRef.current) {
      newsRef.current.innerHTML = "";
      newsRef.current.appendChild(newsScript);
    }
  }, []);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "0 20px 50px",
      }}
    >
      {/* News Widget Section */}
      <div
        ref={newsRef}
        style={{
          flex: "1 1 48%",
          maxWidth: "800px",
          height: "500px", // updated to match the Technical Analysis widget height
        }}
        className="tradingview-widget-container"
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>

      {/* Technical Analysis Widget Section */}
      <div
        ref={technicalAnalysisRef}
        style={{
          flex: "1 1 48%",
          maxWidth: "800px",
          height: "500px", // updated to match the News widget height
        }}
        className="tradingview-widget-container"
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </section>
  );
};

export default Bottom;
