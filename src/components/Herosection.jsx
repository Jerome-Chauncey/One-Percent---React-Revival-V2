import React from "react";
import { Shield, LineChart, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="gradient-bg min-vh-100 d-flex flex-column align-items-center position-relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="gradient-overlay"></div>
      
      {/* Main Hero Content */}
      <div className="container position-relative z-1 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-3 fw-bolder text-white mb-3 lh-1">
              Empowering
              <br />
              <span className="text-accent">Financial</span>
              <br />
              Self-Regulation
            </h1>
            
            <p className="lead fs-5 text-blue-100 mb-4">
              Stay ahead of the market. Learn to self-regulate before crises happen.
            </p>
            
            <a
              href="/login"
              className="btn btn-accent px-4 py-2 rounded-pill fw-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container position-relative z-1 mt-5 pb-5">
        <div className="row g-4">
          {/* Integrity */}
          <div className="col-md-6 col-lg-3">
            <div className="text-center value-card">
              <Shield className="value-icon mb-3" size={40} />
              <h3 className="mb-3 fs-4 fw-bold text-accent">
                Integrity at the Core
              </h3>
              <p className="text-blue-100">
                We believe integrity is non-negotiable. One Percent empowers traders to act with transparency and fairness.
              </p>
            </div>
          </div>

          {/* Proactive Self-Regulation */}
          <div className="col-md-6 col-lg-3">
            <div className="text-center value-card">
              <LineChart className="value-icon mb-3" size={40} />
              <h3 className="mb-3 fs-4 fw-bold text-accent">
                Proactive Self-Regulation
              </h3>
              <p className="text-blue-100">
                We don't wait for regulations to catch up. We create our own standard of excellence through self-accountability.
              </p>
            </div>
          </div>

          {/* Community-Led Trust */}
          <div className="col-md-6 col-lg-3">
            <div className="text-center value-card">
              <Users className="value-icon mb-3" size={40} />
              <h3 className="mb-3 fs-4 fw-bold text-accent">
                Community-Led Trust
              </h3>
              <p className="text-blue-100">
                We're building a culture of trust where professionals hold each other accountable in restoring faith in the markets.
              </p>
            </div>
          </div>

          {/* Elevating Market Ethics */}
          <div className="col-md-6 col-lg-3">
            <div className="text-center value-card">
              <Award className="value-icon mb-3" size={40} />
              <h3 className="mb-3 fs-4 fw-bold text-accent">
                Elevating Market Ethics
              </h3>
              <p className="text-blue-100">
                One Percent is redefining what it means to trade with honor. We educate, inspire, and lead by example.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-bg {
          background: #03045E;
          position: relative;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(3, 4, 94, 0.9) 0%,
            rgba(0, 119, 182, 0.8) 50%,
            rgba(3, 4, 94, 0.9) 100%
          );
          animation: gradientMove 8s ease infinite;
          background-size: 200% 100%;
        }

        .value-card {
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .value-icon {
          color: #4CC9F0;
        }

        .text-accent {
          color: #4CC9F0;
        }

        .text-blue-100 {
          color: #CAF0F8;
        }

        .btn-accent {
          background-color: #4CC9F0;
          border: none;
          color: #03045E;
        }

        .btn-accent:hover {
          background-color: #90E0EF;
          color: #03045E;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .z-1 {
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
