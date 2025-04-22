import React, { useEffect, useRef } from "react";

function TopStories() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "adaptive",
      width: "100%",
      height: 550,
      colorTheme: "dark",
      locale: "en",
    });
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);
  }, []);
  return (
    <div className="bg-light">
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div
              className="tradingview-widget-container__widget"
              ref={containerRef}
            ></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/"
                rel="noopener nofollow"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopStories;
