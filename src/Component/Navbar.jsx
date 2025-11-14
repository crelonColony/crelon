import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../assets/logo-light.png";
import "../Style/Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu((v) => !v);
  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className="nav-3">
      {/* === Logo === */}
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src={Logo1} alt="logo" />
        </Link>
      </div>

      {/* === Desktop Nav === */}
      <div className={`navbar-container ${mobileMenu ? "open" : ""}`}>
        <ul>
          <li className="item">
            <Link to="/" className="linktext" onClick={closeMenu}>
              <i className="fi fi-rr-home"></i> Home
            </Link>
          </li>
          {/* <li className="item">
            <Link to="/about" className="linktext" onClick={closeMenu}>
              <i className="fi fi-rr-info"></i> Info
            </Link>
          </li> */}
          <li className="item">
            <Link to="/programs" className="linktext" onClick={closeMenu}>
              <i className="fi fi-rr-browser"></i> Program
            </Link>
          </li>
          <li className="item">
            <Link to="/community" className="linktext" onClick={closeMenu}>
              <i className="fi fi-rr-users-medical"></i> Community
            </Link>
          </li>
          {/* <li className="item">
            <Link to="/oppotunity" className="linktext" onClick={closeMenu}>
              <i className="fi fi-rr-users-medical"></i> Opportunity
            </Link>
          </li> */}
        </ul>
      </div>

      {/* === Right Section === */}
      <div className="right-section">
        <Link
          to="/login"
          className={`log-btn ${isHomePage ? "on-home" : "not-home"}`}
          onClick={closeMenu}
        >
          Log In
        </Link>

        {/* Hamburger */}
        <div
          className={`menu-toggle ${mobileMenu ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
