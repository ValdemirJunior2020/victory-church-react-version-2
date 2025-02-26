import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation(); // ✅ Detects page changes

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // ✅ Keeps navbar open when clicking "New Member"
  useEffect(() => {
    if (location.pathname !== "/new-member") {
      setClick(false);
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Victory Worship
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>

        {/* Navbar Links */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/prayer-group" className="nav-links" onClick={closeMobileMenu}>
              Prayer Group
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://docs.google.com/forms/d/1MPDs0hocvY4agYSrW9LkDsbEibmlzkhKx6DGCwz3Hkg/preview"
              className="nav-links"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // ✅ Prevents closing navbar
            >
              New Member
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/groups/56003018318" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com/@VictoryWorshipCenter" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
