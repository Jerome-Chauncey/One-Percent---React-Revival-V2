import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    setMessage("If this email exists, a password reset link has been sent.");
    setTimeout(() => {
      navigate("/login");
    }); 
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="col-xl-6">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="card-body p-4 p-md-5 mx-md-4 w-100">
                  <div className="text-center">
                    <h4 className="mt-1 mb-4">Forgot Password</h4>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-outline mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label className="form-label">Email</label>
                    </div>

                    {message && <div className="text-center mb-3 text-success">{message}</div>}

                    <div className="text-center mb-2">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="button"
                        onClick={handleResetPassword}
                      >
                        Reset Password
                      </button>
                    </div>

                    <div className="text-center mb-3">
                      <a
                        className="text-muted"
                        href="#!"
                        style={{ fontSize: "0.9rem" }}
                        onClick={() => navigate("/login")}
                      >
                        Back to Login
                      </a>
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

export default ForgotPassword;
