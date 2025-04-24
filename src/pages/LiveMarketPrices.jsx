import React, { useState } from "react";
import MarketOverviewWidget from "../components/MarketOverviewWidget";
import AdvancedChart from "../components/AdvancedChart";
import ForexCrossRatesWidget from "../components/ForexCrossRatesWidget";

const LiveMarketPrices = () => {
  const [activeTab, setActiveTab] = useState("crypto");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container py-4">
      <h2 className="mb-4">Live Market Overview</h2>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "crypto" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("crypto")}
          >
            Overview
          </a>
        </li>
        
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "stocks" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("stocks")}
            >
              Forex cross rates
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "commodities" ? "active" : ""
              }`}
              href="#"
              onClick={() => handleTabClick("commodities")}
            >
              Charts
            </a>
          </li>
        
      </ul>

      <div className="tab-content">
        {activeTab === "crypto" && (
          <div className="tab-pane fade show active">
              <MarketOverviewWidget/>
          </div>
        )}
        {activeTab === "commodities" && (
          <div className="tab-pane fade show active">
              <AdvancedChart/>
          </div>
        )}
        {activeTab === "stocks" && (
          <div className="tab-pane fade show active">
            <ForexCrossRatesWidget/>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveMarketPrices;
