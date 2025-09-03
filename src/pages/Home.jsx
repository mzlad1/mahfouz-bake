import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLoadingContext } from "../context/LoadingContext";
import ProductCard from "../components/ProductCard";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const { startLoading } = useLoadingContext();
  const location = useLocation();

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
  };

  // Typing effect hook
  const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    }, [displayedText, text, speed]);

    return { displayedText, isComplete };
  };

  // Social handle typing effect
  const socialTyping = useTypingEffect("@mahfouzbake", 150);
  const heroTyping = useTypingEffect("Every Bite", 400);
  // Sample product data for preview
  const featuredProducts = [
    {
      id: 1,
      images: ["/images/products/WhiteBackground/Red velvet cookie11.jpg"],
      name: "Red Velvet Cookie",
      description:
        "Delicious red velvet cookies with a rich, velvety texture and subtle cocoa flavor.",
    },
    {
      id: 2,
      images: ["/images/products/WhiteBackground/Double cookie11.jpg"],
      name: "Double Cookie",
      description:
        "Double the chocolate, double the deliciousness. Rich and indulgent chocolate cookies.",
    },
    {
      id: 3,
      images: ["/images/products/WhiteBackground/Fudge brownies22.jpg"],
      name: "Fudge Brownies",
      description:
        "Rich, fudgy brownies made with premium chocolate and clean ingredients.",
    },
  ];

  const brandHighlights = [
    {
      title: "Premium Ingredients",
      description:
        "High-quality, natural ingredients, free from preservatives and artificial additives.",
    },
    {
      title: "Consistent Results",
      description:
        "Precision-portioned for uniform size, texture, and flavor every time.",
    },
    {
      title: "Time Saving",
      description:
        "No need for in-house baking expertise; simply bake or sell.",
    },
    {
      title: "Healthy Options",
      description:
        "Sugar-free options that cater to growing market demand for better-for-you treats.",
    },
    {
      title: "Innovative & Growing",
      description:
        "Constantly expanding with new flavors and health-conscious recipes.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-background"></div>
        <div className="home-container">
          <div className="home-hero-content">
            <div className="home-hero-text">
              <h1 className="home-hero-title">
                Excellence in{" "}
                <span className="home-highlight">
                  {heroTyping.displayedText}
                  <span
                    className={`home-cursor ${
                      heroTyping.isComplete ? "blink" : ""
                    }`}
                  >
                    |
                  </span>
                </span>
              </h1>
              <p className="home-hero-subtitle home-fade-in-up">
                Premium frozen cookie dough and freshly baked goods for
                businesses and individuals who demand the best.
              </p>
              <div className="home-hero-buttons home-fade-in-up">
                <Link
                  to="/products"
                  className="home-btn home-btn-primary home-pulse-btn"
                  onClick={() => handleNavigation("/products")}
                >
                  <span>Explore Products</span>
                  <div className="home-btn-shine"></div>
                </Link>
                <Link
                  to="/contact"
                  className="home-btn home-btn-secondary"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="home-hero-image home-floating-element">
            <div className="home-image-wrapper">
              <img
                src="/images/logowithsolgan.png"
                alt="Mahfouz Bake Logo with Slogan"
              />
            </div>
          </div>
        </div>
        <div className="home-scroll-indicator">
          <div className="home-scroll-arrow"></div>
        </div>
      </section>

      {/* Excellence in Every Bite Section */}
      <section className="home-excellence-section home-section">
        <div className="home-container">
          <div className="home-section-header">
            <h2 className="home-section-title home-slide-in-left">
              Excellence in Every Bite
            </h2>
            <div className="home-section-divider"></div>
          </div>
          <div className="home-excellence-grid">
            {brandHighlights.map((highlight, index) => (
              <div key={index} className="home-excellence-item">
                <div className="home-excellence-content">
                  <h3 className="home-excellence-title">{highlight.title}</h3>
                  <p className="home-excellence-description">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Preview */}
      <section className="home-products-preview home-section">
        <div className="home-section-bg-pattern"></div>
        <div className="home-container">
          <div className="home-section-header">
            <h2 className="home-section-title home-fade-in-up">
              Featured Products
            </h2>
            <p className="home-section-subtitle home-fade-in-up">
              Discover our range of premium baked goods and frozen dough
              solutions
            </p>
            <div className="home-section-divider"></div>
          </div>
          <div className="home-products-grid">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`home-product-wrapper home-fade-in-up delay-${
                  index + 1
                }`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="home-text-center home-fade-in-up">
            <Link
              to="/products"
              className="home-btn home-btn-primary"
              onClick={() => handleNavigation("/products")}
            >
              <span>View All Products</span>
              <div className="home-btn-shine"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Banner */}
      <section className="home-social-banner home-section">
        <div className="home-social-bg-gradient"></div>
        <div className="home-container">
          <div className="home-social-content">
            <h2 className="home-social-title">Follow Our Journey</h2>
            <p className="home-social-subtitle">
              Stay updated with our latest creations and behind-the-scenes
              moments
            </p>
            <div className="home-social-handle">
              {socialTyping.displayedText}
              <span
                className={`home-cursor ${
                  socialTyping.isComplete ? "blink" : ""
                }`}
              >
                |
              </span>
            </div>
            <div className="home-social-links">
              <a
                href="https://wa.me/970593666676"
                className="home-social-link home-whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="home-social-icon" />
                <span className="home-social-tooltip">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/mahfouzbake"
                className="home-social-link home-instagram-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="home-social-icon" />
                <span className="home-social-tooltip">Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@mahfouzbake_"
                className="home-social-link home-tiktok-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="home-social-icon" />
                <span className="home-social-tooltip">TikTok</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579324492276"
                className="home-social-link home-facebook-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="home-social-icon" />
                <span className="home-social-tooltip">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
