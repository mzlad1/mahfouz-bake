import { Link, useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { startLoading } = useLoadingContext();
  const location = useLocation();

  const handleNavigation = (path) => {
    // Only trigger loading if navigating to a different page
    if (location.pathname !== path) {
      startLoading();
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mahfouz Bake</h3>
            <p>Excellence in Every Bite</p>
            <p>Established 2023</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: mahfouzbake1@outlook.com</p>
            <p>Phone: +970 593 666 676</p>
            <div className="footer-social-links">
              <a
                href="https://wa.me/970593666676"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="footer-social-icon" />
              </a>
              <a
                href="https://instagram.com/mahfouzbake"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer-social-icon" />
              </a>
              <a
                href="https://tiktok.com/@mahfouzbake_"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="footer-social-icon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579324492276"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="footer-social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link
                  to="/products"
                  onClick={() => handleNavigation("/products")}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => handleNavigation("/about")}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  onClick={() => handleNavigation("/clients")}
                >
                  For Businesses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <p>Established 2023</p>
            <p>
              Premium frozen cookie dough and ready-to-sell freshly baked
              cookies
            </p>
            <p>Clean-label ingredients, no preservatives</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Mahfouz Bake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
