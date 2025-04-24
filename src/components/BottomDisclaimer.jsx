import React from "react";

function BottomDisclaimer() {
  return (
    <div style={{ backgroundColor: "#03045E" }} className="mt-auto">
      <div className="container py-4">
        <div
          className="p-3 p-md-4 p-lg-5"
          style={{
            backgroundColor: "rgba(76, 201, 240, 0.03)",
            border: "1px solid rgba(76, 201, 240, 0.15)",
          }}
        >
          <h5
            className="fw-bold mb-4 fs-4 d-inline-block position-relative hover-underline"
            style={{
              color: "#4CC9F0",
              transition: "all 0.3s ease",
            }}
          >
            RISK DISCLOSURE
          </h5>

          {/* Main warning box */}
          <div
            className="p-3 p-md-4 mb-4 hover-box"
            style={{
              backgroundColor: "rgba(76, 201, 240, 0.07)",
              border: "1px solid rgba(76, 201, 240, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            <p
              className="fw-bold mb-3 fs-5 warning-title"
              style={{
                color: "#4CC9F0",
                transition: "all 0.3s ease",
              }}
            >
              <i className="bi bi-exclamation-triangle me-2 warning-icon"></i>
              HIGH RISK INVESTMENT WARNING
            </p>
            <p
              className="text-white-50 mb-0 hover-bright"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                transition: "all 0.3s ease",
              }}
            >
              Trading foreign exchange and derivatives carries a high level of
              risk, including the risk of losing substantially more than your
              initial investment. These products are not suitable for all
              investors. Please ensure that you fully understand the risks
              involved and seek independent advice if necessary.
            </p>
          </div>

          {/* Key points in a structured format */}
          <div className="mb-4">
            <p
              className="text-white-50 mb-4 hover-bright"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                transition: "all 0.3s ease",
              }}
            >
              Before deciding to trade, you should carefully consider your
              investment objectives, level of experience, and risk appetite. You
              should not invest money that you cannot afford to lose.
            </p>

            <p
              className="fw-bold mb-3 hover-underline"
              style={{
                color: "#4CC9F0",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
              }}
            >
              IMPORTANT NOTICES:
            </p>
            <ul
              className="mb-0 ps-4 hover-list"
              style={{
                color: "#CAF0F8",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              <li className="mb-2 hover-list-item">
                Past performance does not guarantee future results
              </li>
              <li className="mb-2 hover-list-item">All trading carries risk</li>
              <li className="mb-2 hover-list-item">
                This information is not investment advice
              </li>
              <li className="mb-2 hover-list-item">
                Trading is not suitable for everyone
              </li>
              <li className="hover-list-item">Your capital is at risk</li>
            </ul>
          </div>

          {/* Jurisdiction notice */}
          <div
            className="p-3 p-md-4 mb-4 hover-box"
            style={{
              backgroundColor: "rgba(76, 201, 240, 0.05)",
              border: "1px solid rgba(76, 201, 240, 0.15)",
              transition: "all 0.3s ease",
            }}
          >
            <p
              className="text-white-50 mb-0 hover-bright"
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                transition: "all 0.3s ease",
              }}
            >
              This website is not directed at any jurisdiction and is not
              intended for any use that would be contrary to local law or
              regulation. The products and services described are not available
              to residents of the United States, Belgium, Canada, Singapore, and
              certain other jurisdictions.
            </p>
          </div>

          {/* Copyright */}
          <div
            className="text-center mt-4 pt-3 hover-fade"
            style={{
              borderTop: "1px solid rgba(76, 201, 240, 0.15)",
              transition: "all 0.3s ease",
            }}
          >
            <p
              style={{
                color: "#4CC9F0",
                fontSize: "0.9rem",
              }}
              className="mb-0"
            >
              © 2025 One Percent. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Add the CSS for hover effects */}
      <style jsx>{`
        .hover-box:hover {
          background-color: rgba(76, 201, 240, 0.1) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(76, 201, 240, 0.1);
        }

        .hover-bright:hover {
          color: #ffffff !important;
        }

        .warning-title:hover .warning-icon {
          transform: scale(1.2);
          display: inline-block;
        }

        .warning-icon {
          transition: all 0.3s ease;
        }

        .hover-list-item {
          transition: all 0.3s ease;
          position: relative;
          padding-left: 5px;
        }

        .hover-list-item:hover {
          color: #ffffff;
          transform: translateX(10px);
        }

        .hover-list-item:hover::before {
          content: "→";
          position: absolute;
          left: -20px;
          color: #4cc9f0;
        }

        .hover-underline {
          position: relative;
        }

        .hover-underline::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #4cc9f0;
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }

        .hover-fade:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

export default BottomDisclaimer;
