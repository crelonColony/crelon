import React from "react";
import "../Style/footer.css";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/logo-light.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">

      {/* Brand Section */}
      <div className="footer-col brand">
        <div className="footer-logo">
          <img src={Logo} alt="Crelon Logo" />
        </div>
        <div className="footer-desc">
          Connecting students and startups through innovation and collaboration.
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/crelon-co/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/crelon.co" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
          <a href="mailto:hello@crelon.com"><FaEnvelope /></a>
        </div>
        
      </div>

      {/* Links Section */}
      <div className="footer-col">
        <div className="footer-heading">Platform</div>
        <Link to="/about" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
              About
        </Link>
        <Link to="/programs" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
              Program
        </Link>
        <Link to="/community" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
              Community
        </Link>
        <a href="#">Forums</a>
      </div>

      <div className="footer-col">
        <div className="footer-heading">Support</div>
        <Link to="/#contactform" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
              Help Center
        </Link>
        <Link to="/#faq" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
              FAQ
        </Link>
        <a href="#">Support</a>
        {/* <a href="#">Contact</a> */}
      </div>

      <div className="footer-col">
        <div className="footer-heading">Legal</div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
       
      </div>
    </div>

    <div className="footer-bottom">
      © 2025 Crelon. All rights reserved.
    </div>
  </footer>
);

export default Footer;
