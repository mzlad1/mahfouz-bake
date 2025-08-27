import { Link, useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import "./Footer.css";

const Footer = () => {
  const { startLoading } = useLoadingContext();
  const location = useLocation();

  const handleNavigation = (path) => {
    // Only trigger loading if navigating to a different page
    if (location.pathname !== path) {
      startLoading();
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
            <p>Phone: 0593 666 676</p>
            <p>Location: Al Teereh, Ramallah, Palestine</p>
            <div className="footer-social-links">
              <a
                href="https://wa.me/970593666676"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://instagram.com/mahfouzbake"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://tiktok.com/@mahfouzbake_"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/tiktok.png"
                  alt="TikTok"
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579324492276"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="footer-social-icon"
                />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <p>Saturday - Thursday: 8:00 AM - 10:00 PM</p>
            <p>Friday: 12:00 PM - 10:00 PM</p>
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
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Mahfouz Bake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
