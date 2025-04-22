import React, { useEffect, useRef } from "react";

function EconomicCalendar() {
  const containerRef = useRef(null);

  const createWidget = (container, config) => {
    if (!container) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    container.innerHTML = "";
    container.appendChild(script);
  };

  useEffect(() => {
    const config = {
      colorTheme: "dark",
      isTransparent: false,
      width: "100%",
      height: "550",
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    };
    createWidget(containerRef.current, config);
  }, []);
  return (
    <div>
      <div class="tradingview-widget-container" ref={containerRef}> 
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span class="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EconomicCalendar;
