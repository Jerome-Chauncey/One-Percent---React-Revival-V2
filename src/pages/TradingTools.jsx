import React, { useEffect, useRef } from "react";

function Market() {
  const tickerRef = useRef(null);
  const overviewRef = useRef(null);
  const profileRef = useRef(null);
  const financialsRef = useRef(null);
  const advancedChartRef = useRef(null);
  const technicalAnalysisRef = useRef(null);
  const newsRef = useRef(null); // Ref for the news widget

  useEffect(() => {
    // Ticker
    const tickerScript = document.createElement("script");
    tickerScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    tickerScript.async = true;
    tickerScript.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "FX_IDC:USDKES" },
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    if (tickerRef.current) {
      tickerRef.current.innerHTML = "";
      tickerRef.current.appendChild(tickerScript);
    }

    // Overview
    const overviewScript = document.createElement("script");
    overviewScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    overviewScript.async = true;
    overviewScript.innerHTML = JSON.stringify({
      symbols: [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"],
        ["AMEX:SPY|1D"],
      ],
      chartOnly: false,
      width: "100%",
      height: "100%",
      locale: "en",
      colorTheme: "dark",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "medium",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
    });

    if (overviewRef.current) {
      overviewRef.current.innerHTML = "";
      overviewRef.current.appendChild(overviewScript);
    }

    // Profile
    const profileScript = document.createElement("script");
    profileScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    profileScript.async = true;
    profileScript.innerHTML = JSON.stringify({
      width: "100%",
      height: "500px",
      isTransparent: false,
      colorTheme: "dark",
      symbol: "NASDAQ:AAPL",
      locale: "en",
    });

    if (profileRef.current) {
      profileRef.current.innerHTML = "";
      profileRef.current.appendChild(profileScript);
    }

    // Financials
    const financialsScript = document.createElement("script");
    financialsScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    financialsScript.async = true;
    financialsScript.innerHTML = JSON.stringify({
      isTransparent: false,
      largeChartUrl: "",
      displayMode: "regular",
      width: "100%",
      height: "550",
      colorTheme: "light",
      symbol: "NASDAQ:AAPL",
      locale: "en",
    });

    if (financialsRef.current) {
      financialsRef.current.innerHTML = "";
      financialsRef.current.appendChild(financialsScript);
    }

    // Advanced Chart
    const advancedChartScript = document.createElement("script");
    advancedChartScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    advancedChartScript.async = true;
    advancedChartScript.innerHTML = JSON.stringify({
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

    if (advancedChartRef.current) {
      advancedChartRef.current.innerHTML = "";
      advancedChartRef.current.appendChild(advancedChartScript);
    }

    // Technical Analysis
    const technicalAnalysisScript = document.createElement("script");
    technicalAnalysisScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    technicalAnalysisScript.async = true;
    technicalAnalysisScript.innerHTML = JSON.stringify({
      interval: "1m",
      width: 425,
      isTransparent: false,
      height: 450,
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
      height: 550,
      colorTheme: "dark",
      locale: "en",
    });

    if (newsRef.current) {
      newsRef.current.innerHTML = "";
      newsRef.current.appendChild(newsScript);
    }
  }, []);

  return (
    <div style={{ padding: "0", margin: "0", minHeight: "100vh", overflowY: "auto", background: "#111", color: "#fff" }}>
      {/* Ticker Section */}
      <section ref={tickerRef} style={{ width: "100%", height: "30vh" }} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </section>

      {/* Description Section */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <p style={{ fontSize: "18px" }}>
          This section provides an overview of selected market instruments including major tech stocks and indices. Stay informed on the latest market movements.
        </p>
      </section>

      {/* Advanced Chart Section */}
      <section style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
        <section ref={advancedChartRef} style={{ width: "60%", height: "70vh" }} className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </section>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} style={{ width: "100%", height: "40vh", marginBottom: "50px" }} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" style={{ color: "#1E90FF" }}>
            Track all markets on TradingView
          </a>
        </div>
      </section>

      <hr style={{ margin: "30px auto", width: "90%", border: "1px solid #444" }} />

      {/* Profile + Financials Section (centered) */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", padding: "0 20px 50px" }}>
        {/* Profile */}
        <div ref={profileRef} className="tradingview-widget-container" style={{ width: "100%", maxWidth: "800px", height: "500px" }}>
          <div className="tradingview-widget-container__widget"></div>
        </div>

        {/* Financials */}
        <div ref={financialsRef} className="tradingview-widget-container" style={{ width: "100%", maxWidth: "800px", height: "550px" }}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </section>

      {/* News Widget Section (Now Below Financials) */}
      <section ref={newsRef} style={{ width: "100%", maxWidth: "800px", height: "550px", marginTop: "50px" }} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </section>

      {/* Technical Analysis Section */}
      <section ref={technicalAnalysisRef} style={{ width: "100%", height: "450px" }} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </section>
    </div>
  );
}

export default Market;

