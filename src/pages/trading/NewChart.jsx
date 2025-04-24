import React, { useEffect, useRef } from "react";

const NewChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
    });

    if (chartRef.current) {
      chartRef.current.innerHTML = "";
      chartRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#131722", // Optional: to match chart theme
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        ref={chartRef}
        style={{
          width: "100%",
          height: "calc(100% - 40px)", // reserve space for footer text
        }}
      ></div>
      <div
        className="tradingview-widget-copyright"
        style={{
          marginTop: "8px",
          textAlign: "center",
          color: "#aaa",
          fontSize: "12px",
          width: "100%",
        }}
      >
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          style={{ color: "#42a5f5", textDecoration: "none" }}
        >
        </a>
      </div>
    </div>
  );
  
};

export default NewChart;
