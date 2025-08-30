import "./Clients.css";

const Clients = () => {
  const targetAudiences = [
    {
      category: "Coffee Shops & Cafés",
      description:
        "Looking for consistent, premium cookies and muffins to serve fresh daily without extra labor.",
      benefits: [
        "Consistent quality",
        "Fresh daily",
        "No extra labor",
        "Premium products",
      ],
    },
    {
      category: "Bakeries & Dessert Shops",
      description:
        "Seeking ready-to-bake frozen dough to expand their menu easily.",
      benefits: [
        "Menu expansion",
        "Easy preparation",
        "Quality assurance",
        "Time savings",
      ],
    },
    {
      category: "Restaurants & Hotels",
      description:
        "Offering fresh-baked treats as part of their dining or dessert service.",
      benefits: [
        "Dessert service",
        "Fresh-baked",
        "Professional quality",
        "Service enhancement",
      ],
    },
    {
      category: "Retail Stores & Specialty Shops",
      description:
        "Stocking ready-to-sell packs for health-conscious customers.",
      benefits: [
        "Ready-to-sell",
        "Health-conscious",
        "Customer satisfaction",
        "Easy inventory",
      ],
    },
  ];

  const trustFactors = [
    {
      title: "Established Quality",
      description:
        "Since 2023, we've maintained the highest standards in every product we create.",
    },
    {
      title: "Clean-Label Commitment",
      description:
        "No preservatives, no artificial additives - just pure, quality ingredients.",
    },
    {
      title: "Business Partnership",
      description:
        "We work closely with our partners to ensure their success and satisfaction.",
    },
    {
      title: "Innovation Focus",
      description:
        "Continuously developing new products and flavors to meet market demands.",
    },
  ];

  return (
    <div className="clients-page">
      {/* Hero Section */}
      <section className="clients-hero section">
        <div className="container">
          <h1 className="clients-section-title">For Businesses</h1>
          <p className="clients-section-subtitle">
            We serve customers who value quality, convenience, and clean-label
            ingredients
          </p>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="target-audiences section">
        <div className="container">
          <h2 className="section-title">Who We Serve</h2>
          <div className="clients-audiences-grid">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="clients-audience-card card">
                <h3>{audience.category}</h3>
                <p className="clients-audience-description">
                  {audience.description}
                </p>
                <div className="clients-benefits-list">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="clients-benefit-tag">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="clients-trust-factors section">
        <div className="container">
          <h2 className="section-title">Why Partners Trust Us</h2>
          <div className="clients-trust-grid">
            {trustFactors.map((factor, index) => (
              <div key={index} className="clients-trust-card card">
                <h3>{factor.title}</h3>
                <p>{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="clients-cta-section section">
        <div className="container">
          <div className="clients-cta-content">
            <h2>Ready to Partner?</h2>
            <p>
              Join the growing number of businesses that trust Mahfouz Bake for
              their premium baked goods needs.
            </p>
            <div className="clients-cta-buttons">
              <a href="/contact" className="btn">
                Get Started
              </a>
              <a href="/products" className="btn btn-secondary">
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
