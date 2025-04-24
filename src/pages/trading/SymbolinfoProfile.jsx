import React, { useEffect, useRef, memo } from 'react';

const SymbolInfoProfile = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 600,
      isTransparent: false,
      colorTheme: "dark",
      symbol: "NASDAQ:AAPL",
      locale: "en",
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
        overflow: "hidden",
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

export default memo(SymbolInfoProfile);
