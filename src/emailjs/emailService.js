import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, TEMPLATE_VARIABLES } from "./config";

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendEmail = async (formData) => {
  try {
    // Prepare template parameters - use the actual variable names that match the template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      message: formData.message,
      to_email: EMAILJS_CONFIG.TO_EMAIL,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
};

// Validate EmailJS configuration
export const validateConfig = () => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  if (
    SERVICE_ID === "YOUR_SERVICE_ID" ||
    TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
    PUBLIC_KEY === "YOUR_PUBLIC_KEY"
  ) {
    return {
      isValid: false,
      message:
        "Please configure your EmailJS credentials in src/emailjs/config.js",
    };
  }

  return { isValid: true };
};
