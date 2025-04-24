import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { to: "/news", text: "NEWS" },
    { to: "/livemarketprices", text: "LIVE MARKET PRICES" },
    { to: "/tradingtools", text: "TRADING TOOLS" },
    { to: "/checklist", text: "CHECKLIST" },
    { to: "/team", text: "TEAM" },
  ];

  const loginNavItem = { to: "/login", text: "LOG IN" };

  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: "#03045E" }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/OnePercentLogo.png"
            alt="One Percent Logo"
            height="40"
            width="40"
          />
        </a>

        {/* Mobile Menu */}
        <div className="d-lg-none">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            {!user && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={loginNavItem.to}
                  onClick={() => setIsOpen(false)}
                >
                  {loginNavItem.text}
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  LOGOUT
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="d-none d-lg-block">
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={item.to}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            {!user && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={loginNavItem.to}
                >
                  {loginNavItem.text}
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  LOGOUT
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
