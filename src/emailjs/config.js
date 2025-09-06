// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Get these from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: "service_78fljva",

  // Your EmailJS Template ID
  TEMPLATE_ID: "template_xsj8iyc",

  // Your EmailJS Public Key
  PUBLIC_KEY: "KdeR9lODRehzdBkLT",

  // Your Gmail address where emails will be sent
  TO_EMAIL: "sinokrotsaseel@gmail.com",
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
