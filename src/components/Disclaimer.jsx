import React from "react";

function Disclaimer() {
  return (
    <div style={{ background: "#03045E" }} className="sticky-top">
      <div
        style={{
          borderBottom: "1px solid #48CAE4",
          backgroundColor: "rgba(2, 62, 138, 0.1)",
        }}
      >
        <div className="container px-3 px-lg-0">
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-start py-3 w-100">
              <p
                className="mb-0 px-3 py-2 fs-6 fw-medium letter-spacing-1"
                style={{ color: "#CAF0F8" }}
              >
                <i
                  className="bi bi-info-circle-fill me-3 fs-5"
                  style={{ color: "#48CAE4" }}
                ></i>
                Online Forex/CFDs are complex instruments and come with a high
                risk of losing money rapidly due to leverage. 84.62% of retail
                investor accounts lose money when trading Online Forex/CFDs. You
                should consider whether you understand how CFDs work and whether
                you can afford to take the high risk of losing money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
