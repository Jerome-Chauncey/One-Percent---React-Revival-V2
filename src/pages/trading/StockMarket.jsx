import React, { useEffect, useRef, memo } from 'react';

const StockMarket = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear any previous widget scripts
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "100%",
      height: 600,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(219, 219, 219, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)"
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <section
      className="tradingview-widget-container"
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "600px",
        marginTop: "2rem",
        backgroundColor: "#0d1117",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        padding: "1rem",
        overflow: "hidden"
      }}
    >
      <div className="tradingview-widget-container__widget" style={{ width: '100%', height: '100%' }} />
      <div className="tradingview-widget-copyright" style={{ textAlign: "center", marginTop: "12px" }}>
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </section>
  );
};

export default memo(StockMarket);
