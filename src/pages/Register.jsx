import React, { useState } from "react";import { useNavigate } from "react-router-dom";
import CompanyLogo from "../icons/OnePercentLogo.png";
import "../styles/Login.css";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      shakeForm();
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      shakeForm();
      return;
    }

    setError("");
    setLoading(true);

    const result = await register(email, password);

    setLoading(false);

    if (result.success) {
      navigate("/truth");
    } else {
      setError(result.message || "Registration failed. Please try again.");
      shakeForm();
    }
  };

  const shakeForm = () => {
    const form = document.querySelector(".login-card");
    if (form) {
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 650);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
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

                {error && (
                  <div className="alert custom-alert" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <div
                      className={`input-container ${
                        focusedInput === "email" ? "focused" : ""
                      }`}
                    >
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedInput("email")}
                        onBlur={() => setFocusedInput("")}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <div
                      className={`input-container ${
                        focusedInput === "password" ? "focused" : ""
                      }`}
                    >
                      <input
                        type="password"
                        className="form-control custom-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setFocusedInput("password")}
                        onBlur={() => setFocusedInput("")}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <div
                      className={`input-container ${
                        focusedInput === "confirmPassword" ? "focused" : ""
                      }`}
                    >
                      <input
                        type="password"
                        className="form-control custom-input"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onFocus={() => setFocusedInput("confirmPassword")}
                        onBlur={() => setFocusedInput("")}
                        required
                      />
                    </div>
                  </div>

                  <button
                    className={`btn custom-btn w-100 mb-3 ${
                      loading ? "loading" : ""
                    }`}
                    type="button"
                    onClick={handleRegister}
                    disabled={loading}
                  >
                    <span className="button-text">
                      {loading ? "Registering..." : "Register"}
                    </span>
                  </button>

                  <div className="register-section">
                    <span className="text-light">Already have an account? </span>
                    <button
                      type="button"
                      className="btn btn-link register-link"
                      onClick={handleLoginRedirect}
                    >
                      Login here
                    </button>
                  </div>
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

        .input-container {
          position: relative;
          transition: transform 0.3s ease;
        }

        .input-container.focused {
          transform: translateX(5px);
        }

        .custom-input {
          background-color: #0a1929;
          border: 1px solid rgba(61, 185, 255, 0.2);
          color: #e0e7ff;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .custom-input:focus {
          background-color: #0a1929;
          border-color: #3db9ff;
          box-shadow: 0 0 15px rgba(61, 185, 255, 0.15);
          color: #e0e7ff;
          transform: translateY(-1px);
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
        }

        .custom-btn:hover {
          background-color: #2ea8ee;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(61, 185, 255, 0.2);
        }

        .custom-btn:active {
          transform: translateY(0);
        }

        .custom-btn.loading {
          background-color: #2ea8ee;
        }

        .custom-btn.loading .button-text {
          animation: pulse 1.5s infinite;
        }

        .forgot-password-link,
        .register-link {
          color: #3db9ff;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .forgot-password-link::after,
        .register-link::after {
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

        .forgot-password-link:hover::after,
        .register-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .custom-alert {
          background-color: rgba(220, 53, 69, 0.1);
          border: 1px solid rgba(220, 53, 69, 0.2);
          color: #ff6b6b;
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 1rem;
          animation: slideIn 0.3s ease;
        }

        .register-section {
          margin-top: 1rem;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .register-section:hover {
          opacity: 1;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }

        .shake {
          animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
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

export default Register;
