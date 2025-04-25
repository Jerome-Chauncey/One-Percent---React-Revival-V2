import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../icons/OnePercentLogo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    console.log(`Password reset link sent to ${email}`);

    setMessage(
      "If this email exists, a password reset link has been sent to you."
    );
    setTimeout(() => {
      navigate("/login");
    });
  };

  return (
    <div className="login-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="login-card">
              <div className="card-body p-5 text-center">
                <div className="logo-container mb-4">
                  <img
                    src={CompanyLogo}
                    alt="One Percent Logo"
                    className="login-logo mb-3"
                  />
                  <h2 className="brand-title">One Percent</h2>
                </div>

                <div className="text-center mb-3 text-success">
                  {message}
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    className="btn custom-btn w-100 mb-3"
                    type="button"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </button>

                  <button
                    type="button"
                    className="btn btn-link forgot-password-link mb-3"
                    onClick={() => navigate("/login")}
                  >
                    Back to Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          background-color: #0a1929;
          display: flex;
          align-items: center;
          background-image: radial-gradient(
              circle at 10% 20%,
              rgba(61, 185, 255, 0.05) 0%,
              transparent 20%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(61, 185, 255, 0.05) 0%,
              transparent 20%
            );
        }

        .login-card {
          background-color: #1a2b3d;
          border: 1px solid rgba(61, 185, 255, 0.2);
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3db9ff, transparent);
          transition: 0.5s;
        }

        .login-card:hover::before {
          left: 100%;
        }

        .logo-container {
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .login-card:hover .logo-container {
          transform: translateY(-5px);
        }

        .login-logo {
          width: 100px;
          height: auto;
          transition: transform 0.3s ease;
        }

        .brand-title {
          color: #3db9ff;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 10px rgba(61, 185, 255, 0.3);
        }

        .custom-input {
          background-color: #0a1929;
          border: 1px solid rgba(61, 185, 255, 0.2);
          color: #e0e7ff;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          width: 100%;
        }

        .custom-input:focus {
          background-color: #0a1929;
          border-color: #3db9ff;
          box-shadow: 0 0 15px rgba(61, 185, 255, 0.15);
          color: #e0e7ff;
          outline: none;
        }

        .custom-input::placeholder {
          color: rgba(224, 231, 255, 0.5);
          transition: color 0.3s ease;
        }

        .custom-input:focus::placeholder {
          color: rgba(224, 231, 255, 0.7);
        }

        .custom-btn {
          background-color: #3db9ff;
          color: white;
          padding: 12px;
          border-radius: 6px;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .custom-btn:hover {
          background-color: #2ea8ee;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(61, 185, 255, 0.2);
        }

        .custom-btn:active {
          transform: translateY(0);
        }

        .forgot-password-link {
          color: #3db9ff;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          font-size: 0.9rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .forgot-password-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #3db9ff;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .forgot-password-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .text-success {
          color: #4caf50;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .login-card {
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
