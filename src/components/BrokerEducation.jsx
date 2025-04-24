import React, { useState } from "react";

const BrokerEducation = () => {
  const [activeTab, setActiveTab] = useState("models");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Forex Broker Education</h2>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "models" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("models")}
          >
            Models & Risk
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "pricing" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("pricing")}
          >
            Fair Pricing
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "legit" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("legit")}
          >
            Is Your Broker Legit?
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "checklist" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("checklist")}
          >
            Trading Checklist
          </a>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === "models" && (
          <div className="tab-pane fade show active">
            <h4>Broker Models & Risk Management</h4>
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Description</th>
                    <th>Risk Management Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>A-Book (STP)</strong>
                    </td>
                    <td>
                      Direct to market, earns via spreads/commission. No
                      conflict of interest.
                    </td>
                    <td>
                      No direct exposure; earns through spreads and commissions.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>B-Book (Market Maker)</strong>
                    </td>
                    <td>Brokers take the opposite side of the trade.</td>
                    <td>
                      Uses internal hedging, risk limits, and spread
                      adjustments.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hybrid Model</strong>
                    </td>
                    <td>
                      Combines A-Book and B-Book depending on trader profiles
                    </td>
                    <td>
                      Profitable traders go to A-Book; less-experienced stay in
                      B-Book.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Risk Hedging</strong>
                    </td>
                    <td>Brokers hedge positions with liquidity providers.</td>
                    <td>Reduces market exposure and maintains stability.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "pricing" && (
          <div className="tab-pane fade show active">
            <h4>Are the Prices You Get Fair?</h4>
            <div className="tab-pane fade show active">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card h-100 border-success">
                    <div className="card-body">
                      <h5 className="card-title text-success">Fair Pricing</h5>
                      <ul className="mb-0">
                        <li>Tied to Interbank Rates (A-Book/ECN model)</li>
                        <li>Tight spreads = less broker interference</li>
                        <li>Regulated brokers = pricing transparency</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 border-danger">
                    <div className="card-body">
                      <h5 className="card-title text-danger">
                        When Prices Might Be Manipulated
                      </h5>
                      <ul className="mb-0">
                        <li>B-Book brokers may manipulate stop-loss levels</li>
                        <li>Widened spreads during news events</li>
                        <li>Frequent slippage or requotes</li>
                        <li>Stop-hunting behavior</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card h-100 border-primary">
                    <div className="card-body">
                      <h5 className="card-title text-primary">How to Check</h5>
                      <ul className="mb-0">
                        <li>Compare prices on TradingView/Bloomberg</li>
                        <li>Use ECN/STP brokers</li>
                        <li>Look for low slippage, fast execution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "legit" && (
          <div className="tab-pane fade show active">
            <h4>Is Your Forex Broker Legit?</h4>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="card h-100 border-success">
                  <div className="card-body">
                    <h5 className="card-title text-success">
                      Signs of a Real Broker
                    </h5>
                    <ul className="mb-0">
                      <li>Regulated by CFTC, FCA, ASIC, CySEC</li>
                      <li>Transparent fees and fast withdrawals</li>
                      <li>Segregated client funds</li>
                      <li>Positive reviews (Trustpilot, ForexPeaceArmy)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-danger">
                  <div className="card-body">
                    <h5 className="card-title text-danger">Red Flags</h5>
                    <ul className="mb-0">
                      <li>Unregulated or offshore registration</li>
                      <li>Promises of “guaranteed profits”</li>
                      <li>Withdrawal issues or stalling tactics</li>
                      <li>Fake price spikes or slippage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-primary">
                  <div className="card-body">
                    <h5 className="card-title text-primary">How to Verify</h5>
                    <ul className="mb-0">
                      <li>
                        Check license numbers on official regulator websites
                      </li>
                      <li>Do a test deposit and withdrawal</li>
                      <li>Search complaints on trader forums</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "checklist" && (
          <div className="tab-pane fade show active">
            <h4>Broker Legitimacy Checklist</h4>
            <div className="card border-warning mb-3">
              <div className="card-body">
                <ol className="mb-0">
                  <li>Where is the broker located?</li>
                  <li>Who owns and runs the company?</li>
                  <li>Do they have a real company registration?</li>
                  <li>Is there a real customer support contact?</li>
                  <li>Are client funds segregated?</li>
                  <li>Is the broker regulated in your country?</li>
                  <li>Can you test their service with a small amount?</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrokerEducation;
