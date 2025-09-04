import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp number from the footer
    const phoneNumber = "970593666676";
    const message = "Hello! I'm interested in your products. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us on WhatsApp!</span>
    </div>
  );
};

export default WhatsAppButton;
