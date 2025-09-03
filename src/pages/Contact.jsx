import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Integrate with Firebase Firestore
      // For now, simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <h1 className="contact-section-title">Contact Us</h1>
          <p className="contact-section-subtitle">
            Get in touch with us to discuss your business needs or place an
            order
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your inquiry or order requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="contact-success-message">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="contact-error-message">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>

              <div className="contact-info-item">
                <h3>Email</h3>
                <p>
                  <a href="mailto:mahfouzbake1@outlook.com">
                    mahfouzbake1@outlook.com
                  </a>
                </p>
              </div>

              <div className="contact-info-item">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+970593666676">+970 593 666 676</a>
                </p>
              </div>

              <div className="contact-info-item">
                <h3>Social Media</h3>
                <div className="contact-social-links">
                  <a
                    href="https://wa.me/970593666676"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="contact-social-icon" />
                  </a>
                  <a
                    href="https://instagram.com/mahfouzbake"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="contact-social-icon" />
                  </a>
                  <a
                    href="https://tiktok.com/@mahfouzbake_"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="contact-social-icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579324492276"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="contact-social-icon" />
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <h3>What We Offer</h3>
                <ul>
                  <li>Premium frozen cookie dough</li>
                  <li>Ready-to-sell baked goods</li>
                  <li>Custom orders for businesses</li>
                  <li>Bulk pricing for partners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="contact-faq-grid">
            <div className="contact-faq-item">
              <h3>What are your minimum order quantities?</h3>
              <p>
                We offer flexible ordering options. For businesses, we recommend
                starting with our sample packs to test quality and demand.
              </p>
            </div>
            <div className="contact-faq-item">
              <h3>Do you deliver to all areas?</h3>
              <p>
                We currently serve the greater region with our delivery network.
                Contact us to confirm availability in your area.
              </p>
            </div>
            <div className="contact-faq-item">
              <h3>How long does frozen dough last?</h3>
              <p>
                Our frozen cookie dough has a shelf life of 6 months when stored
                at the recommended temperature.
              </p>
            </div>
            <div className="contact-faq-item">
              <h3>Can you customize products for our business?</h3>
              <p>
                Yes! We work with partners to create custom flavors, sizes, and
                packaging solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
