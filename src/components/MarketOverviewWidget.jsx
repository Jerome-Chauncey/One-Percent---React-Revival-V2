import React, { useEffect, useRef } from "react";

const MarketOverviewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!containerRef.current) return;

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "100%",
        height: "550",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(42, 46, 57, 0)",
        scaleFontColor: "rgba(219, 219, 219, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
          {
            title: "Indices",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500 Index" },
              { s: "FOREXCOM:NSXUSD", d: "US 100 Cash CFD" },
              { s: "FOREXCOM:DJI", d: "Dow Jones Industrial Average Index" },
              { s: "INDEX:NKY", d: "Japan 225" },
              { s: "INDEX:DEU40", d: "DAX Index" },
              { s: "FOREXCOM:UKXGBP", d: "FTSE 100 Index" },
            ],
          },
          {
            title: "Forex",
            symbols: [
              { s: "FX:EURUSD", d: "EUR to USD" },
              { s: "FX:GBPUSD", d: "GBP to USD" },
              { s: "FX:USDJPY", d: "USD to JPY" },
              { s: "FX:USDCHF", d: "USD to CHF" },
              { s: "FX:AUDUSD", d: "AUD to USD" },
              { s: "FX:USDCAD", d: "USD to CAD" },
            ],
          },
          {
            title: "Futures",
            symbols: [
              { s: "BMFBOVESPA:ISP1!", d: "S&P 500 Index Futures" },
              { s: "BMFBOVESPA:EUR1!", d: "Euro Futures" },
              { s: "PYTH:WTI3!", d: "WTI CRUDE OIL" },
              { s: "BMFBOVESPA:ETH1!", d: "Hydrous ethanol" },
              { s: "BMFBOVESPA:CCM1!", d: "Corn" },
            ],
          },
          {
            title: "Bonds",
            symbols: [
              { s: "EUREX:FGBL1!", d: "Euro Bund" },
              { s: "EUREX:FBTP1!", d: "Euro BTP" },
              { s: "EUREX:FGBM1!", d: "Euro BOBL" },
            ],
          },
        ],
      });

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }, 500);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default MarketOverviewWidget;
