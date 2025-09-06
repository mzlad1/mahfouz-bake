// EmailJS Configuration
// Environment variables are loaded from .env file
// Get these from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,

  // Your EmailJS Template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

  // Your EmailJS Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

  // Your Gmail address where emails will be sent
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL,
};

// EmailJS Template Variables
// These are the variable names used in your EmailJS template
// The template should use: {{from_name}}, {{from_email}}, {{phone}}, {{message}}, {{to_email}}
export const TEMPLATE_VARIABLES = {
  from_name: "from_name",
  from_email: "from_email",
  phone: "phone",
  message: "message",
  to_email: "to_email",
};
