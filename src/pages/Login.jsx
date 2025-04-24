import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../icons/OnePercentLogo.png";
import "../styles/Login.css";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    setLoading(true);

    const success = await login(email, password);

    setLoading(false);

    if (success) {
      navigate("/truth");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleCreateAccount = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="col-xl-6">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="card-body p-4 p-md-5 mx-md-4 w-100">
                  <div className="text-center">
                    <img src={CompanyLogo} className="login-logo" alt="logo" />
                    <h4 className="mt-1 mb-4">One Percent</h4>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <p className="text-center">Please login to your account</p>

                    {error && (
                      <div className="text-danger text-center mb-3">
                        {error}
                      </div>
                    )}

                    <div className="form-outline mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyPress}
                        required
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyPress}
                        required
                      />
                    </div>

                    <div className="text-center mb-2">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="button"
                        onClick={handleLogin}
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Log in"}
                      </button>
                    </div>

                    <div className="text-center mb-3">
                      <button
                        type="button"
                        className="btn btn-link text-muted p-0"
                        style={{ fontSize: "0.9rem" }}
                        onClick={handleForgotPassword}
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={handleCreateAccount}
                      >
                        Create new
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
