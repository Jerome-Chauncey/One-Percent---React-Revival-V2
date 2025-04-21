import React from "react";

function Cta() {
  return (
    <div className="bg-dark text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mx-md-3 text-white my-3 p-4">
            <h3>Did you know?</h3>
            <p>
              In retail forex trading, neither you nor the broker actually take
              ownership of the currencies being traded. When you place a trade,
              you and your broker enter into an agreement where:
            </p>
            <p className="fw-bold">
              If you predict correctly, you earn the difference between the
              opening and closing price.
            </p>
            <p className="fw-bold">
              If you predict incorrectly, you pay the difference to the broker.
            </p>
          </div>
          <div className="col-12 col-md-4 mx-md-3 text-white my-3 p-4">
            <h3>Assess Broker Risk</h3>
            <p>
              This setup introduces counterparty credit risk the risk that the
              broker may not have enough capital to pay you if they default.
              Since your broker is the other party in your trade, ensuring they
              are well-capitalized and regulated is crucial for security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
