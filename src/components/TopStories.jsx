import React, { useEffect, useRef } from "react";
import { TrendingUp, Clock } from "lucide-react";
import EconomicCalendar from "./EconomicCalendar";

function TopStories() {
  const containerRef = useRef(null);

  const colors = {
    background: "#0a1929",
    accent: "#40E0D0",
    darkBlue: "#0d2644",
    text: "#ffffff",
    textMuted: "#8ba1b7",
    border: "rgba(64, 224, 208, 0.15)",
  };

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
      height: 500,
      colorTheme: "dark",
      locale: "en",
    });
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div style={{ background: colors.background, minHeight: "100vh" }}>
      <div className="container-fluid px-4 py-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h2 style={{ color: colors.accent, fontWeight: "600" }}>
                Market News
              </h2>
              <div
                style={{
                  background: "rgba(64, 224, 208, 0.1)",
                  color: colors.accent,
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                LIVE UPDATES
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Market Updates */}
          <div className="col-12 col-lg-6">
            <div
              className="card h-100"
              style={{
                background: colors.darkBlue,
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 10px 20px rgba(10, 25, 41, 0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="card-header border-bottom"
                style={{
                  background: "rgba(64, 224, 208, 0.03)",
                  borderColor: colors.border,
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <TrendingUp size={20} color={colors.accent} />
                    <h5 className="mb-0" style={{ color: colors.accent }}>
                      Market Updates
                    </h5>
                  </div>
                  <div
                    style={{
                      background: "rgba(64, 224, 208, 0.1)",
                      color: colors.accent,
                      padding: "0.5rem 0.8rem",
                      borderRadius: "4px",
                    }}
                  >
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div
                  className="tradingview-widget-container__widget"
                  ref={containerRef}
                ></div>
              </div>
            </div>
          </div>

          {/* Economic Calendar */}
          <div className="col-12 col-lg-6">
            <div
              className="card h-100"
              style={{
                background: colors.darkBlue,
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 10px 20px rgba(10, 25, 41, 0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="card-header border-bottom"
                style={{
                  background: "rgba(64, 224, 208, 0.03)",
                  borderColor: colors.border,
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <Clock size={20} color={colors.accent} />
                    <h5 className="mb-0" style={{ color: colors.accent }}>
                      Economic Calendar
                    </h5>
                  </div>
                  <div
                    style={{
                      background: "rgba(64, 224, 208, 0.1)",
                      color: colors.accent,
                      padding: "0.5rem 0.8rem",
                      borderRadius: "4px",
                    }}
                  >
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <EconomicCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopStories;
