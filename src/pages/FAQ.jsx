import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import "./FAQ.css";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
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

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Are your products really free from preservatives?",
      answer:
        "Yes. All Mahfouz Bake products are made with natural ingredients, no additives, and no preservatives.",
    },
    {
      question: "Do you have sugar-free options?",
      answer:
        "Absolutely. We offer a wide range of sugar-free cookies and muffins designed for those who want healthier alternatives without compromising taste.",
    },
    {
      question: "How should I store the frozen cookie dough?",
      answer:
        "Our frozen cookie dough should be stored at -18°C or below in the freezer. Once thawed, it must not be refrozen. Baking instructions are provided with every order to ensure perfect results.",
    },
    {
      question: "Do you sell directly to individuals or only wholesale?",
      answer:
        "We cater to: Wholesale/B2B: Bakeries, coffee shops, restaurants, and hotels can purchase frozen dough in bulk.",
    },
    {
      question: "What is the minimum order quantity for wholesale?",
      answer:
        "For wholesale clients, the minimum order is one carton per flavor (approx. 5 kg each).",
    },
    {
      question: "How can I place an order?",
      answer:
        "Wholesale orders: Contact our sales team via WhatsApp or email to receive a full product menu and pricing.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes. We provide delivery services for wholesale orders and pick-up options for individual customers. Delivery terms may vary by location.",
    },
    {
      question: "Why should I choose Mahfouz Bake?",
      answer:
        "Premium taste & quality – rich flavors, made from scratch. No preservatives – clean-label baking. Sugar-free range – healthy options for every lifestyle. Trusted B2B partner – consistent supply for cafés, bakeries, and hotels",
    },
  ];

  const whyChooseUs = [
    {
      title: "Premium Taste & Quality",
      description:
        "Rich flavors, made from scratch with the finest ingredients.",
    },
    {
      title: "No Preservatives",
      description: "Clean-label baking with natural ingredients only.",
    },
    {
      title: "Sugar-Free Range",
      description:
        "Healthy options for every lifestyle without compromising taste.",
    },
    {
      title: "Trusted B2B Partner",
      description: "Consistent supply for cafés, bakeries, and hotels.",
    },
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero section">
        <div className="container">
          <h1 className="faq-section-title">Frequently Asked Questions</h1>
          <p className="faq-section-subtitle">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-content section">
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item faq-card">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`faq-icon ${openFAQ === index ? "open" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`faq-answer ${openFAQ === index ? "open" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="faq-why-choose section">
        <div className="container">
          <h2 className="section-title">Why Choose Mahfouz Bake?</h2>
          <div className="faq-features-grid">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="faq-feature-card faq-feature-card-wrapper"
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="faq-contact-cta section">
        <div className="container">
          <div className="faq-cta-content">
            <h2>Still have questions?</h2>
            <p>
              Can't find what you're looking for? Our team is here to help you
              with any questions about our products, orders, or services.
            </p>
            <div className="faq-cta-buttons">
              <a
                href="/contact"
                className="btn"
                onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
