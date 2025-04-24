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
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "structure" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("structure")}
          >
            Market Structure
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
        {activeTab === "structure" && (
          <div className="tab-pane fade show active">
            <h4>How the Market is Set Up</h4>

            <div className="card border-dark mb-4">
              <div className="card-body">
                <h5 className="card-title">Business: Industry Appraisal</h5>
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

            <div className="card border-dark mb-4">
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
                  <strong>Negative of Monopoly:</strong> Pricing Power & Control
                </li>
              </ul>
              </div>
            </div>

            <div className="card border-dark mb-4">
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
          </div>
        )}
       {activeTab === "structure" && (
          <div className="tab-pane fade show active">
            <h4>Market Structure & Industry Insights</h4>

            <div className="card border-secondary mb-4">
              <div className="card-body">
                <h5 className="card-title">Regulators Are Passive and Reactionary</h5>
                <ul>
                  <li>In 2010, Contracts for Difference (CFDs) were banned in the US for retail traders because of major losses during the Finomax Crisis.</li>
                  <li>The product was seen as a gambling mechanism due to 10x leverage.</li>
                  <li>In 2010, IB Contracts were banned in Singapore due to conflict of interest.</li>
                  <li>This is typical of regulators – they often act after the event.</li>
                  <li>History shows retail traders must self-regulate rather than depend on regulators.</li>
                </ul>
                <p><strong>Note:</strong> IB = Introducing Broker. They refer clients to brokers and earn a commission for doing so.</p>
              </div>
            </div>

            <div className="card border-info mb-4">
              <div className="card-body">
                <h5 className="card-title">Financial Market Volatility</h5>
                <ul>
                  <li>Volatility in Equities, Currencies, Commodities, and Rates has dropped since the financial crisis.</li>
                  <li>Three Main Reasons:
                    <ul>
                      <li><strong>Monetary Policy:</strong> Low interest rates and QE suppress volatility via relative yield, insurance, and inflation concerns.</li>
                      <li><strong>Technology:</strong> High-frequency trading reduces short-term opportunities for retail traders.</li>
                      <li><strong>Liquidity:</strong> More participants increase liquidity, reducing volatility and profit potential.</li>
                    </ul>
                  </li>
                  <li>Professionals follow market conditions. Retail traders often try to predict or oppose the market.</li>
                </ul>
              </div>
            </div>

            <div className="card border-dark mb-4">
              <div className="card-body">
                <h5 className="card-title">Professional vs Retail Traders</h5>
                <p><strong>Approach</strong></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Professional Trader / HF Manager</th>
                      <th>Retail / Independent / Private Trader</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Systematic, long/short portfolios, fundamental analysis dominant.</td>
                      <td>Focus on short-term trades, quick returns, not monitoring volatility.</td>
                    </tr>
                    <tr>
                      <td>Risk-managed, diversified portfolios with 10–20 positions.</td>
                      <td>Few positions, often speculative (e.g. EUR/USD, SP500).</td>
                    </tr>
                    <tr>
                      <td>Capital preservation and long-term growth.</td>
                      <td>High expectations, often results in capital destruction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card border-warning mb-4">
              <div className="card-body">
                <h5 className="card-title">Margin and Leverage: 90/90/90 Rule</h5>
                <p>90% of retail traders lose 90% of their margin within 90 days.</p>
                <ul>
                  <li>CFD/Spread betting traders do not own underlying assets – they trade contracts.</li>
                  <li>Margin = collateral used to open leveraged positions.</li>
                  <li>Initial margin vs. variable margin: the former is deposited, the latter is used for active trades.</li>
                  <li>High leverage (e.g., 100x) can wipe out traders with only a 1% market move.</li>
                  <li>Forex margin requirement = 1% (e.g., $1000 margin for $100,000 position).</li>
                </ul>
              </div>
            </div>

            <div className="card border-danger mb-4">
              <div className="card-body">
                <h5 className="card-title">Retail Broker Conflicts of Interest</h5>
                <ul>
                  <li>Retail trading infrastructure isn't designed for client benefit.</li>
                  <li>Retail brokers profit from:
                    <ul>
                      <li>Wider spreads</li>
                      <li>Added commissions</li>
                      <li>Financing turns (borrow at 2.15%, lend at 3.75%)</li>
                      <li>OTC Gains by taking the other side of losing trades</li>
                    </ul>
                  </li>
                  <li>Retail clients provide brokers the margin to negotiate credit facilities.</li>
                  <li>That same credit can be used by brokers to bet against clients.</li>
                </ul>
              </div>
            </div>

            <div className="card border-secondary mb-4">
              <div className="card-body">
                <h5 className="card-title">The Inversion Narrative</h5>
                <ul>
                  <li>CFD accounts are easy to open—just ID, address, and risk consent required.</li>
                  <li>Brokers offer high leverage to anyone, regardless of experience.</li>
                  <li>Clients unknowingly fund broker profits and broker credit with their own deposits.</li>
                </ul>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default BrokerEducation;
