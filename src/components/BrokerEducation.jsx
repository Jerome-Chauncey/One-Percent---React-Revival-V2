import React, { useState, useEffect } from "react";

const fadeDuration = 300; // fade transition duration in ms

const BrokerEducation = () => {
  const [activeTab, setActiveTab] = useState("models");
  const [fadeState, setFadeState] = useState("fade-in"); // for fade animation

  const handleTabClick = (tab) => {
    if (tab === activeTab) return;
    setFadeState("fade-out");
    setTimeout(() => {
      setActiveTab(tab);
      setFadeState("fade-in");
    }, fadeDuration);
  };

  // Colors from your screenshot
  const colors = {
    background: "#031B4E", // deep navy
    highlight: "#00B0FF", // bright blue for active tabs and headings
    textLight: "#A9D6FF", // light blue text
    cardBg: "#0B2D91", // slightly lighter navy for cards
  };

  return (
    <div
      className="container py-4"
      style={{
        backgroundColor: colors.background,
        minHeight: "100vh",
        color: colors.textLight,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        className="mb-4"
        style={{
          color: colors.highlight,
          userSelect: "none",
          fontWeight: "700",
        }}
      >
        Forex Broker Education
      </h2>

      <ul className="nav nav-pills mb-3 flex-wrap" role="tablist">
        {[
          { id: "models", label: "Models & Risk" },
          { id: "pricing", label: "Fair Pricing" },
          { id: "legit", label: "Is Your Broker Legit?" },
          { id: "checklist", label: "Trading Checklist" },
          { id: "structure", label: "Market Structure" },
        ].map(({ id, label }) => (
          <li className="nav-item" key={id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(id);
              }}
              className={`nav-link ${
                activeTab === id ? "active" : "text-light"
              }`}
              style={{
                cursor: "pointer",
                backgroundColor:
                  activeTab === id ? colors.highlight : "transparent",
                color: activeTab === id ? colors.background : colors.textLight,
                fontWeight: activeTab === id ? "600" : "400",
                borderRadius: "0.375rem",
                marginRight: "6px",
                marginBottom: "6px",
                transition: "background-color 0.3s ease, color 0.3s ease",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== id) {
                  e.currentTarget.style.backgroundColor =
                    "rgba(0, 176, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== id) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`tab-content ${fadeState}`}
        style={{
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          opacity: fadeState === "fade-in" ? 1 : 0,
        }}
      >
        {activeTab === "models" && (
          <div className="tab-pane show active">
            <h4 style={{ color: colors.highlight }}>
              Broker Models & Risk Management
            </h4>
            <div className="table-responsive">
              <table
                className="table table-bordered table-striped text-center"
                style={{
                  backgroundColor: colors.cardBg,
                  color: colors.textLight,
                }}
              >
                <thead
                  style={{
                    backgroundColor: colors.highlight,
                    color: colors.background,
                  }}
                >
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
          <div className="tab-pane show active">
            <h4 style={{ color: colors.highlight }}>
              Are the Prices You Get Fair?
            </h4>
            <div className="row g-3">
              <div className="col-md-4">
                <div
                  className="card h-100 border-success"
                  style={{
                    backgroundColor: colors.cardBg,
                    color: colors.textLight,
                  }}
                >
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
                <div
                  className="card h-100 border-danger"
                  style={{
                    backgroundColor: colors.cardBg,
                    color: colors.textLight,
                  }}
                >
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
                <div
                  className="card h-100 border-primary"
                  style={{
                    backgroundColor: colors.cardBg,
                    color: colors.textLight,
                  }}
                >
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
        )}
        {activeTab === "legit" && (
          <div className="tab-pane show active">
            <h4 style={{ color: colors.highlight }}>
              Is Your Forex Broker Legit?
            </h4>
            <div className="row g-3">
              <div className="col-md-4">
                <div
                  className="card h-100 border-success"
                  style={{
                    backgroundColor: colors.cardBg,
                    color: colors.textLight,
                  }}
                >
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
                <div
                  className="card h-100 border-danger"
                  style={{
                    backgroundColor: colors.cardBg,
                    color: colors.textLight,
                  }}
                >
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
                <div
                  className="card h-100 border-primary"
                  style={{
                    backgroundColor: colors.cardBg,
                    color: colors.textLight,
                  }}
                >
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
          <div className="tab-pane show active">
            <h4 style={{ color: colors.highlight }}>
              Broker Legitimacy Checklist
            </h4>
            <div
              className="card border-warning mb-3"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
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
        {activeTab === "structure" && (
          <div className="tab-pane show active">
            <h4 style={{ color: colors.highlight }}>
              How the Market is Set Up
            </h4>

            <div
              className="card-body text-center"
              style={{ color: colors.textLight }}
            >
              <h5 className="card-title">Market Structure Flow</h5>
              <img
                src="/images/smart.png"
                alt="Market Structure Diagram"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  border: "1px solid #eee",
                }}
              />
              <div className="mt-3 text-muted">
                <small>
                  Diagram showing the relationship between investment banks,
                  brokers, and retail traders
                </small>
              </div>
            </div>

            <div
              className="card border-dark mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>Business: Industry Appraisal</h5>
                <ul>
                  <li>Who are the winners?</li>
                  <li>Who are the losers?</li>
                  <li>How is the industry set up?</li>
                  <li>What parameters can I operate in?</li>
                  <li>How do I be successful?</li>
                  <li>What mistakes do I need to avoid?</li>
                </ul>
              </div>
            </div>

            <div
              className="card border-dark mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>Exchange Ownership</h5>
                <ul>
                  <li>Intercontinental Exchange (ICE) owns NYSE / Euronext</li>
                  <li>
                    Chicago Mercantile Exchange (CME) owns CBOT, NYMEX, COMEX
                  </li>
                  <li>
                    Monopolistic / Duopolistic structures may lead to
                    protectionism & maintenance of the status quo.
                  </li>
                  <li>Smart Money vs Dumb Money</li>
                  <li>
                    <strong>Negative of Monopoly:</strong> Pricing Power &
                    Control
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="card border-dark mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>Trading Mindset Notes</h5>
                <ul>
                  <li>
                    Monetary Policy = control of money supply & its distribution
                    channels.
                  </li>
                  <li>
                    Quantitative Easing = central bank buys financial assets to
                    stimulate economy.
                  </li>
                  <li>
                    Build a strong educational foundation understand volatility
                    and go where the money is.
                  </li>
                  <li>
                    Don't define yourself by one asset class or time horizon.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="card border-danger mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>The Broker Conflict of Interest</h5>
                <div className="alert alert-danger">
                  <strong>
                    "They have a 90% win rate on their losing client traders."
                  </strong>{" "}
                  Brokers are incentivized for you to lose money and take the
                  other side of your losing trades.
                </div>
                <ul>
                  <li>
                    Brokers create narratives that increase your chances of
                    losing money
                  </li>
                  <li>
                    They push short-term, high-frequency trading to maximize
                    commissions
                  </li>
                  <li>
                    Revenue streams: (Spread + Commission) + (Financing Fees) +
                    OTC gains from losing trades
                  </li>
                  <li>
                    They want you to trade in the biggest size possible with
                    little or no risk (to them)
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="card border-warning mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>Broker Revenue Model</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card bg-light mb-3">
                      <div className="card-header bg-danger text-white">
                        A-Book (Losing Clients - 90%)
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Trades passed to liquidity provider</li>
                          <li>Take other side automatically</li>
                          <li>Run OTC position naked (no hedge)</li>
                          <li>Client loses → Broker makes money</li>
                          <li>
                            Revenue: Spread + Comm + Finance Fees + OTC Gain
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-light mb-3">
                      <div className="card-header bg-success text-white">
                        B-Book (Winning Clients - 10%)
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Broker acts as counterparty</li>
                          <li>Strategically hedge profitable clients</li>
                          <li>Hedge OTC with underlying</li>
                          <li>Client wins → Broker loses</li>
                          <li>Revenue: Only Spread + Comm + Finance Fees</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card border-info mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>Smart Money vs Dumb Money</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-header bg-info text-white">
                        Smart Money (Professional)
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Understands market structure and COI</li>
                          <li>Trades opposite of retail traders</li>
                          <li>Systematic, diversified approach</li>
                          <li>Focuses on capital preservation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-header bg-warning text-dark">
                        Dumb Money (Retail)
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Believes broker-provided narratives</li>
                          <li>Trades as told by COI participants</li>
                          <li>Focuses on short-term, few positions</li>
                          <li>Often results in capital destruction</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="alert alert-dark mt-3">
                  <strong>Smart Money requires Dumb Money to exist:</strong>{" "}
                  Professionals predict the future while retail reacts to the
                  present, creating wealth transfer.
                </div>
              </div>
            </div>

            <div
              className="card border-secondary mb-4"
              style={{
                backgroundColor: colors.cardBg,
                color: colors.textLight,
              }}
            >
              <div className="card-body">
                <h5>Common Myths & Red Flags</h5>
                <div className="alert alert-warning">
                  "The system is designed to maintain the status quo - the
                  biggest payers (banks, hedge funds) all work together!"
                </div>
                <table
                  className="table table-bordered"
                  style={{ color: colors.textLight }}
                >
                  <thead
                    style={{
                      backgroundColor: colors.highlight,
                      color: colors.background,
                    }}
                  >
                    <tr>
                      <th>Myth</th>
                      <th>Reality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>"Day Trading Works"</td>
                      <td>
                        Guaranteed volume for brokers/educators. Costs (2x
                        spread + commission) eat profits.
                      </td>
                    </tr>
                    <tr>
                      <td>"Monthly income from trading"</td>
                      <td>
                        Educators structure monthly subscriptions for their own
                        income.
                      </td>
                    </tr>
                    <tr>
                      <td>"Trading is easy - just follow charts"</td>
                      <td>
                        Oversimplification. Most educators lack systematic
                        processes.
                      </td>
                    </tr>
                    <tr>
                      <td>"Psychology is everything"</td>
                      <td>
                        Often emphasized by educators who don't understand
                        trading.
                      </td>
                    </tr>
                    <tr>
                      <td>"Risk management alone ensures success"</td>
                      <td>
                        Without a real edge, risk management just slows losses.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="alert alert-danger mt-3">
                  <strong>
                    WHEN DESPERATION MEETS CONFLICTS OF INTEREST ONLY BAD THINGS
                    CAN HAPPEN!
                  </strong>
                  <br />
                  The system is designed to distract you from the truth that
                  most taught strategies lose money.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrokerEducation;
