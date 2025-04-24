// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
          "width": "100%",
          "height": "500",
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_side_toolbar": false,
          "hide_volume": true,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        });
      const containerElement = container.current; //cleanup function
      containerElement.appendChild(script);
      return () => {
        if (containerElement?.contains(script)) {
          containerElement.removeChild(script);
        }
      };
    },
    []
  );

  return (
    <div className="tradingview-widget-container w-auto" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
