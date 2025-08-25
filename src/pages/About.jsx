import "./About.css";

const About = () => {
  const values = [
    {
      title: "Quality without compromise",
      description: "Only the best natural ingredients.",
      icon: "⭐",
    },
    {
      title: "Consistency at scale",
      description: "Everybite tastes just like the first.",
      icon: "🔄",
    },
    {
      title: "Innovation",
      description:
        "Expanding our range with creative, health-conscious options.",
      icon: "💡",
    },
    {
      title: "Sustainability",
      description: "Reducing waste with efficient production and packaging",
      icon: "🌱",
    },
  ];

  const brandHighlights = [
    {
      title: "Premium Ingredients",
      description:
        "High-quality, natural ingredients, free from preservatives and artificial additives.",
      icon: "✓",
    },
    {
      title: "Consistent Results",
      description:
        "Precision-portioned for uniform size, texture, and flavor every time.",
      icon: "🔄",
    },
    {
      title: "Time Saving",
      description:
        "No need for in-house baking expertise; simply bake or sell.",
      icon: "⏰",
    },
    {
      title: "Healthy Options",
      description:
        "Sugar-free options that cater to growing market demand for better-for-you treats.",
      icon: "🌱",
    },
    {
      title: "Innovative & Growing",
      description:
        "Constantly expanding with new flavors and health-conscious recipes.",
      icon: "💡",
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
                <div className="about-value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="about-brand-highlights section">
        <div className="container">
          <h2 className="section-title">Excellence in Every Bite</h2>
          <div className="about-highlights-grid">
            {brandHighlights.map((highlight, index) => (
              <div key={index} className="about-highlight-item">
                <span className="about-highlight-icon">{highlight.icon}</span>
                <div className="about-highlight-content">
                  <h3 className="about-highlight-title">{highlight.title}</h3>
                  <p className="about-highlight-description">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
    </div>
  );
};

export default About;
