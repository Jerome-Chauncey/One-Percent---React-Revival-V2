import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import CompanyLogo from "../icons/OnePercentLogo.png";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    console.log("Logging in with:", { email, password });

    navigate("/"); 
  };

  const handleCreateAccount = () => {
    navigate("/register"); 
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
                    <img
                      src={CompanyLogo}
                      className="login-logo"
                      alt="logo"
                    />
                    <h4 className="mt-1 mb-4">One Percent</h4>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <p className="text-center">Please login to your account</p>

                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                      />
                      <label className="form-label">Username</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label className="form-label">Password</label>
                    </div>

                    <div className="text-center mb-2">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="button"
                        onClick={handleLogin}
                      >
                        Log in
                      </button>
                    </div>

                    <div className="text-center mb-3">
                      <a
                        className="text-muted"
                        href="#!"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Forgot password?
                      </a>
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
