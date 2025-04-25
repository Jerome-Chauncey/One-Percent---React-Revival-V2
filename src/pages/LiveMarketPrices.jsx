import React, { useState } from "react";
import MarketOverviewWidget from "../components/MarketOverviewWidget";
import AdvancedChart from "../components/AdvancedChart";
import ForexCrossRatesWidget from "../components/ForexCrossRatesWidget";
import { LineChart, Activity, BarChart3 } from "lucide-react";

const LiveMarketPrices = () => {
  const [activeTab, setActiveTab] = useState("crypto");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ backgroundColor: "#0A1929" }} className="min-vh-100">
      <div className="container py-4">
        {/* Enhanced header with animation */}
        <h2
          style={{ color: "#3DB9FF" }}
          className="mb-4 d-flex align-items-center"
        >
          <Activity className="me-2" size={32} />
          Live Market Overview
          <span
            className="ms-3 badge rounded-pill d-flex align-items-center"
            style={{
              backgroundColor: "#3DB9FF",
              fontSize: "0.5em",
              animation: "pulse 2s infinite",
            }}
          >
            <span
              className="me-1"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Live
          </span>
        </h2>

        {/* Enhanced navigation tabs */}
        <div
          style={{
            backgroundColor: "#0F2744",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          className="p-3 rounded mb-4"
        >
          <ul className="nav nav-pills">
            <li className="nav-item me-3">
              <a
                className={`nav-link d-flex align-items-center ${
                  activeTab === "crypto" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("crypto");
                }}
                style={{
                  backgroundColor:
                    activeTab === "crypto" ? "#3DB9FF" : "transparent",
                  color: activeTab === "crypto" ? "white" : "#3DB9FF",
                  transition: "all 0.3s ease",
                  padding: "10px 20px",
                  border: activeTab !== "crypto" ? "1px solid #3DB9FF" : "none",
                }}
              >
                <BarChart3 size={18} className="me-2" />
                Overview
              </a>
            </li>

            <li className="nav-item me-3">
              <a
                className={`nav-link d-flex align-items-center ${
                  activeTab === "stocks" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("stocks");
                }}
                style={{
                  backgroundColor:
                    activeTab === "stocks" ? "#3DB9FF" : "transparent",
                  color: activeTab === "stocks" ? "white" : "#3DB9FF",
                  transition: "all 0.3s ease",
                  padding: "10px 20px",
                  border: activeTab !== "stocks" ? "1px solid #3DB9FF" : "none",
                }}
              >
                <Activity size={18} className="me-2" />
                Forex cross rates
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link d-flex align-items-center ${
                  activeTab === "commodities" ? "active" : ""
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick("commodities");
                }}
                style={{
                  backgroundColor:
                    activeTab === "commodities" ? "#3DB9FF" : "transparent",
                  color: activeTab === "commodities" ? "white" : "#3DB9FF",
                  transition: "all 0.3s ease",
                  padding: "10px 20px",
                  border:
                    activeTab !== "commodities" ? "1px solid #3DB9FF" : "none",
                }}
              >
                <LineChart size={18} className="me-2" />
                Charts
              </a>
            </li>
          </ul>
        </div>

        {/* Enhanced content area */}
        <div
          className="card"
          style={{
            backgroundColor: "#0F2744",
            border: "1px solid rgba(61, 185, 255, 0.1)",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          <div className="card-body p-4">
            <div className="tab-content">
              {activeTab === "crypto" && (
                <div
                  className="tab-pane fade show active"
                  style={{ animation: "fadeIn 0.5s ease-in" }}
                >
                  <MarketOverviewWidget />
                </div>
              )}
              {activeTab === "commodities" && (
                <div
                  className="tab-pane fade show active"
                  style={{ animation: "fadeIn 0.5s ease-in" }}
                >
                  <AdvancedChart />
                </div>
              )}
              {activeTab === "stocks" && (
                <div
                  className="tab-pane fade show active"
                  style={{ animation: "fadeIn 0.5s ease-in" }}
                >
                  <ForexCrossRatesWidget />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add required CSS animations */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .nav-link {
            position: relative;
            overflow: hidden;
          }

          .nav-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(61, 185, 255, 0.2);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: #3DB9FF;
            transition: all 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
            left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default LiveMarketPrices;
