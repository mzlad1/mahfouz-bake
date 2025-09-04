import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { startLoading } = useLoadingContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    // Only trigger loading if navigating to a different page
    if (location.pathname !== path) {
      startLoading();
      // Scroll to top when navigating to a new page - iOS compatible
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
    }
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => handleNavigation("/")}
        >
          <div className="brand-content">
            <img
              src="/images/logo.png"
              alt="Mahfouz Bake Logo"
              className="navbar-logo"
            />
            <img
              src="/images/mahfouz-baker.png"
              alt="Mahfouz Bake"
              className="navbar-brand-image"
            />
          </div>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={() => handleNavigation("/about")}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`nav-link ${isActive("/products") ? "active" : ""}`}
            onClick={() => handleNavigation("/products")}
          >
            Products
          </Link>
          <Link
            to="/clients"
            className={`nav-link ${isActive("/clients") ? "active" : ""}`}
            onClick={() => handleNavigation("/clients")}
          >
            Clients
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className={`nav-link ${isActive("/faq") ? "active" : ""}`}
            onClick={() => handleNavigation("/faq")}
          >
            FAQ
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
