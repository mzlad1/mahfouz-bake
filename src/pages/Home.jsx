import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = () => {
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
  const heroTyping = useTypingEffect("Every Bite", 200);
  // Sample product data for preview
  const featuredProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Frozen Cookie Dough",
      tags: ["Premium", "Frozen"],
      description:
        "Ready-to-bake premium cookie dough for consistent results every time.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Sugar-Free Cookies",
      tags: ["Sugar-Free", "Healthy"],
      description:
        "Delicious cookies without the sugar, perfect for health-conscious customers.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop",
      name: "Fudge Brownies",
      tags: ["Premium", "Chocolate"],
      description:
        "Rich, fudgy brownies made with premium chocolate and clean ingredients.",
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
                >
                  <span>Explore Products</span>
                  <div className="home-btn-shine"></div>
                </Link>
                <Link to="/contact" className="home-btn home-btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
          <div className="home-hero-image home-floating-element">
            <div className="home-image-wrapper">
              <img
                src="/public/images/heroImage.jpg"
                alt="Freshly baked cookies"
              />
              <div className="home-image-overlay"></div>
            </div>
          </div>
        </div>
        <div className="home-scroll-indicator">
          <div className="home-scroll-arrow"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="home-mission-vision home-section">
        <div className="home-container">
          <div className="home-section-header">
            <h2 className="home-section-title home-slide-in-left">Our Story</h2>
            <div className="home-section-divider"></div>
          </div>
          <div className="home-mission-vision-grid">
            <div className="home-mission-card home-card home-slide-in-left">
              <div className="home-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create exceptional baked goods that combine premium taste,
                clean ingredients, and ultimate convenience, empowering our
                clients to serve their customers with confidence, consistency,
                and joy.
              </p>
              <div className="home-card-accent"></div>
            </div>
            <div className="home-vision-card home-card home-slide-in-right">
              <div className="home-card-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading clean-label bakery brand in the Middle East,
                known for innovation, trust, and irresistible taste, serving
                both B2B and B2C markets across the region and beyond.
              </p>
              <div className="home-card-accent"></div>
            </div>
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
            <Link to="/products" className="home-btn home-btn-primary">
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
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="home-social-icon"
                />
                <span className="home-social-tooltip">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/mahfouzbake"
                className="home-social-link home-instagram-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="home-social-icon"
                />
                <span className="home-social-tooltip">Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@mahfouzbake_"
                className="home-social-link home-tiktok-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/tiktok.png"
                  alt="TikTok"
                  className="home-social-icon"
                />
                <span className="home-social-tooltip">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
