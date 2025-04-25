import React from "react";
import TickerTape from "./trading/Ticker";
import SymbolFinancials from "./trading/SymbolFinancials";
import SymbolInfoProfile from "./trading/SymbolinfoProfile";
import StockMarket from "./trading/StockMarket";
import NewChart from "./trading/NewChart";
import Viewer from "./trading/Viewer";
import Market from "./trading/Market";
import Bottom from "./trading/Bottom";

const TradingTools = () => {
  return (
    <div style={{ backgroundColor: "#0A1929", minHeight: "100vh" }}>
      <div className="container py-4">
        {/* Ticker Section */}
        <div className="trading-card ticker-section">
          <TickerTape />
        </div>

        {/* Viewer Section */}
        <div className="trading-card viewer-section">
          <Viewer />
        </div>

        {/* NewChart Section */}
        <div className="trading-card chart-section">
          <NewChart />
        </div>

        {/* Market Section */}
        <div className="trading-card market-section">
          <Market />
        </div>

        {/* StockMarket Section */}
        <div className="trading-card stock-section">
          <StockMarket />
        </div>

        {/* SymbolInfoProfile Section */}
        <div className="trading-card profile-section">
          <SymbolInfoProfile />
        </div>

        {/* SymbolFinancials Section */}
        <div className="trading-card financials-section">
          <SymbolFinancials />
        </div>

        {/* Bottom Section */}
        <div className="trading-card bottom-section">
          <Bottom />
        </div>
      </div>

      <style>
        {`
          .trading-card {
            background-color: #0F2744;
            border-radius: 12px;
            border: 1px solid rgba(61, 185, 255, 0.1);
            margin-bottom: 1.5rem;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .trading-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #3DB9FF, #0F2744);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
          }

          .trading-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(61, 185, 255, 0.15);
            border-color: rgba(61, 185, 255, 0.3);
          }

          .trading-card:hover::before {
            transform: scaleX(1);
          }

          .trading-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 12px;
            background: radial-gradient(circle at var(--mouse-x, 0) var(--mouse-y, 0), 
                                      rgba(61, 185, 255, 0.1) 0%, 
                                      transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .trading-card:hover::after {
            opacity: 1;
          }

          /* Specific section enhancements */
          .ticker-section {
            border-left: 3px solid #3DB9FF;
          }

          .chart-section {
            border-right: 3px solid #3DB9FF;
          }

          .market-section {
            border-bottom: 3px solid #3DB9FF;
          }

          .stock-section {
            border-top: 3px solid #3DB9FF;
          }

          /* Pulse animation for active sections */
          @keyframes softPulse {
            0% { box-shadow: 0 0 0 0 rgba(61, 185, 255, 0.2); }
            70% { box-shadow: 0 0 0 10px rgba(61, 185, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(61, 185, 255, 0); }
          }

          /* Shine effect */
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(100%) rotate(45deg); }
          }

          .trading-card:hover::before {
            animation: shine 1.5s ease-in-out;
          }

          /* Interactive hover state */
          .trading-card:active {
            transform: translateY(-2px);
            transition: transform 0.1s;
          }
        `}
      </style>

      {/* Mouse move effect script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.querySelectorAll('.trading-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
              const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
              card.style.setProperty('--mouse-x', x + '%');
              card.style.setProperty('--mouse-y', y + '%');
            });
          });
        `,
        }}
      />
    </div>
  );
};

export default TradingTools;
