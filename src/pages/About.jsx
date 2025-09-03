import { Link, useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import "./About.css";

const About = () => {
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

  const values = [
    {
      title: "Quality without compromise",
      description: "Only the best natural ingredients.",
    },
    {
      title: "Consistency at scale",
      description: "Everybite tastes just like the first.",
    },
    {
      title: "Innovation",
      description:
        "Expanding our range with creative, health-conscious options.",
    },
    {
      title: "Sustainability",
      description: "Reducing waste with efficient production and packaging",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <h1 className="about-section-title">About Mahfouz Bake</h1>
          <p className="about-section-subtitle">
            Founded in 2023, we're passionate about bringing joy through
            exceptional baked goods
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story section">
        <div className="container">
          <div className="about-story-content">
            <div className="about-story-text">
              <h2>Our Story</h2>
              <p>
                At Mahfouz Bake, we believe cookies should be more than just a
                sweet treat — they should be a moment ofjoy, a bite ofcomfort,
                anda standard ofquality that never compromises on ingredients
                ortaste.
              </p>
              <p>
                Founded with a passion for clean-labelbaking, we specialize in
                premium frozen cookie dough and ready-to-sellfreshlybaked
                cookies that combine convenience, consistency, and unforgettable
                flavor
              </p>
            </div>
            <div className="about-story-image">
              <img src="/images/aboutus.jpg" alt="Freshly baked cookies" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-our-story section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>
          <div className="about-our-story-grid">
            <div className="about-our-story-card card">
              <h3>Our Mission</h3>
              <p>
                To create exceptional baked goods that combine premium taste,
                clean ingredients, and ultimate convenience, empowering our
                clients to serve their customers with confidence, consistency,
                and joy.
              </p>
            </div>
            <div className="about-our-story-card card">
              <h3>Our Vision</h3>
              <p>
                To be the leading clean-label bakery brand in the Middle East,
                known for innovation, trust, and irresistible taste, serving
                both B2B and B2C markets across the region and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
    </div>
  );
};

export default About;
