import { useEffect } from "react";

const StructuredData = ({ data }) => {
  useEffect(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Add new structured data
    if (data) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  }, [data]);

  return null; // This component doesn't render anything
};

export default StructuredData;
