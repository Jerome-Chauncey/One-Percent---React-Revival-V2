import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white sticky-top">
      <div className="container-fluid">
        {/* Logo + Brand Link */}
        <a
          className="navbar-brand text-white"
          href="https://jerome-chauncey.github.io/One-Percent/"
        >
          <img
            src="/OnePercentLogo.png"
            alt="One Percent Logo"
            className="Logo"
            height="50"
            width="50"
          />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/news">
                NEWS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/livemarketprices">
                LIVE MARKET PRICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/tradingtools">
                TRADING TOOLS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/checklist">
                CHECKLIST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/team">
                TEAM
              </NavLink>
            </li>
            {user ? (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link text-white"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  LOGOUT
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">
                  LOGIN
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
