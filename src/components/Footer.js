import React from "react";
import "./Footer.css"; // ✅ Ensure this file exists
import { FaFacebookF, FaYoutube } from "react-icons/fa"; // ✅ Import social icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/groups/56003018318"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <FaFacebookF />
        </a>

        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com/@VictoryWorshipCenter"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="footer-text">© 2025 Victory Worship Center</p>
    </footer>
  );
};

export default Footer;
