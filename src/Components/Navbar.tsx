import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/img/logo.png";
import "../assets/Navbar.css";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="navbar navbar-expand-lg p-4 align-items-center">
      {/* Logo */}
      <Link to="/" className="navbar-brand fw-bold text-white">
        <img
          src={logo}
          alt="SmartPharm Logo"
          style={{
            height: "85px", // Adjusted height for better fit
            width: "auto", // Maintain aspect ratio
          }}
        />
      </Link>

      {/* Navigation Links */}
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white mx-4">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/treatment" className="nav-link text-white mx-4">
              Treatment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chatai" className="nav-link text-white mx-4">
              Chat AI
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/get-help" className="nav-link text-white mx-4">
              Get Help
            </Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-link btn btn-outline-primary rounded-pill px-3 text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
