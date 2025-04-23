import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../icons/OnePercentLogo.png"; 
import "../styles/Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword || !username) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Registering:", { email, password, username });

    setError("");
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
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
                    <p className="text-center">Create a new account</p>

                    {error && (
                      <div className="text-danger text-center mb-3">
                        {error}
                      </div>
                    )}

                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <label className="form-label">Username</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label className="form-label">Email</label>
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

                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <label className="form-label">Confirm Password</label>
                    </div>

                    <div className="text-center mb-2">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="button"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>

                    <div className="text-center mb-3">
                      <p style={{ fontSize: "0.9rem" }}>
                        Already have an account?
                        <a href="#!" onClick={handleLoginRedirect}>
                          Login here
                        </a>
                      </p>
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

export default Register;
