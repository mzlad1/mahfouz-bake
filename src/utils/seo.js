// SEO utility functions for dynamic meta tag management

export const updatePageTitle = (title) => {
  document.title = title;
};

export const updateMetaTag = (name, content, property = false) => {
  const attribute = property ? "property" : "name";
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

export const updateCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
};

export const addStructuredData = (data) => {
  // Remove existing structured data
  const existingScript = document.querySelector(
    'script[type="application/ld+json"]'
  );
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    title:
      "Mahfouz Bake - Excellence in Every Bite | Premium Frozen Cookie Dough & Baked Goods",
    description:
      "Premium frozen cookie dough and freshly baked goods for businesses and individuals. Established 2023, specializing in clean-label ingredients and consistent quality.",
    keywords:
      "frozen cookie dough, premium baked goods, sugar-free cookies, bakery supplies, B2B bakery, clean-label ingredients, Mahfouz Bake",
    canonical: "https://mahfouzbake.com/",
    ogTitle: "Mahfouz Bake - Excellence in Every Bite",
    ogDescription:
      "Premium frozen cookie dough and freshly baked goods for businesses and individuals. Clean-label ingredients, consistent quality.",
    twitterTitle: "Mahfouz Bake - Excellence in Every Bite",
    twitterDescription:
      "Premium frozen cookie dough and freshly baked goods for businesses and individuals. Clean-label ingredients, consistent quality.",
  },
  products: {
    title:
      "Products of Mahfouz Bake | Premium Baked Goods & Frozen Cookie Dough ",
    description:
      "Explore our range of premium cookies, sugar-free muffins, and fudge brownies. Clean-label ingredients, no preservatives, perfect for businesses and individuals.",
    keywords:
      "premium cookies, sugar-free muffins, fudge brownies, frozen cookie dough, clean-label baking, wholesale bakery products, Mahfouz Bake products",
    canonical: "https://mahfouzbake.com/products",
    ogTitle: "Premium Baked Goods & Frozen Cookie Dough | Mahfouz Bake",
    ogDescription:
      "Explore our range of premium cookies, sugar-free muffins, and fudge brownies. Clean-label ingredients, no preservatives.",
    twitterTitle: "Premium Baked Goods & Frozen Cookie Dough | Mahfouz Bake",
    twitterDescription:
      "Explore our range of premium cookies, sugar-free muffins, and fudge brownies. Clean-label ingredients, no preservatives.",
  },
  about: {
    title: "About Mahfouz Bake - Premium Clean-Label Bakery Since 2023",
    description:
      "Learn about Mahfouz Bake's story, mission, and commitment to quality. Founded in 2023, we specialize in clean-label frozen cookie dough and baked goods.",
    keywords:
      "about Mahfouz Bake, clean-label bakery, premium ingredients, bakery story, mission vision, quality commitment",
    canonical: "https://mahfouzbake.com/about",
    ogTitle: "About Mahfouz Bake - Premium Clean-Label Bakery",
    ogDescription:
      "Learn about Mahfouz Bake's story, mission, and commitment to quality. Founded in 2023, specializing in clean-label products.",
    twitterTitle: "About Mahfouz Bake - Premium Clean-Label Bakery",
    twitterDescription:
      "Learn about Mahfouz Bake's story, mission, and commitment to quality. Founded in 2023, specializing in clean-label products.",
  },
  clients: {
    title:
      "Clients of Mahfouz Bake | B2B Bakery Partners | Wholesale Frozen Cookie Dough",
    description:
      "Partner with Mahfouz Bake for premium frozen cookie dough and baked goods. Serving coffee shops, bakeries, restaurants, and hotels with consistent quality.",
    keywords:
      "B2B bakery partners, wholesale frozen dough, coffee shop suppliers, restaurant bakery, hotel bakery, business partners",
    canonical: "https://mahfouzbake.com/clients",
    ogTitle: "B2B Bakery Partners | Wholesale Frozen Cookie Dough",
    ogDescription:
      "Partner with Mahfouz Bake for premium frozen cookie dough and baked goods. Serving coffee shops, bakeries, restaurants, and hotels.",
    twitterTitle: "B2B Bakery Partners | Wholesale Frozen Cookie Dough",
    twitterDescription:
      "Partner with Mahfouz Bake for premium frozen cookie dough and baked goods. Serving coffee shops, bakeries, restaurants, and hotels.",
  },
  contact: {
    title: "Contact Mahfouz Bake - Get in Touch for Orders & Partnerships",
    description:
      "Contact Mahfouz Bake for wholesale orders, partnerships, and inquiries. Email, phone, and WhatsApp available. Premium frozen cookie dough and baked goods.",
    keywords:
      "contact Mahfouz Bake, wholesale orders, bakery partnerships, frozen dough orders, business inquiries",
    canonical: "https://mahfouzbake.com/contact",
    ogTitle: "Contact Mahfouz Bake - Orders & Partnerships",
    ogDescription:
      "Contact Mahfouz Bake for wholesale orders, partnerships, and inquiries. Premium frozen cookie dough and baked goods.",
    twitterTitle: "Contact Mahfouz Bake - Orders & Partnerships",
    twitterDescription:
      "Contact Mahfouz Bake for wholesale orders, partnerships, and inquiries. Premium frozen cookie dough and baked goods.",
  },
  faq: {
    title: "FAQ - Frequently Asked Questions | Mahfouz Bake",
    description:
      "Find answers to common questions about Mahfouz Bake products, ordering, storage, and services. Everything you need to know about our premium baked goods.",
    keywords:
      "Mahfouz Bake FAQ, frozen dough questions, bakery FAQ, product information, ordering help",
    canonical: "https://mahfouzbake.com/faq",
    ogTitle: "FAQ - Frequently Asked Questions | Mahfouz Bake",
    ogDescription:
      "Find answers to common questions about Mahfouz Bake products, ordering, storage, and services.",
    twitterTitle: "FAQ - Frequently Asked Questions | Mahfouz Bake",
    twitterDescription:
      "Find answers to common questions about Mahfouz Bake products, ordering, storage, and services.",
  },
};

// Structured data templates
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mahfouz Bake",
    url: "https://mahfouzbake.com",
    logo: "https://mahfouzbake.com/images/logo.png",
    description:
      "Premium frozen cookie dough and freshly baked goods for businesses and individuals. Clean-label ingredients, consistent quality.",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Palestine",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+970593666676",
      contactType: "customer service",
      email: "mahfouzbake1@outlook.com",
    },
    sameAs: [
      "https://instagram.com/mahfouzbake",
      "https://tiktok.com/@mahfouzbake_",
      "https://www.facebook.com/profile.php?id=61579324492276",
    ],
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mahfouz Bake",
    description:
      "Premium frozen cookie dough and freshly baked goods for businesses and individuals",
    url: "https://mahfouzbake.com",
    telephone: "+970593666676",
    email: "mahfouzbake1@outlook.com",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Palestine",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
  },
  breadcrumbList: (pathname) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mahfouzbake.com",
      },
      ...(pathname !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: pathname.charAt(1).toUpperCase() + pathname.slice(2),
              item: `https://mahfouzbake.com${pathname}`,
            },
          ]
        : []),
    ],
  }),
};

// Function to apply SEO for a specific page
export const applyPageSEO = (pageKey, pathname = "") => {
  const config = seoConfig[pageKey];
  if (!config) return;

  // Update title
  updatePageTitle(config.title);

  // Update meta tags
  updateMetaTag("description", config.description);
  updateMetaTag("keywords", config.keywords);
  updateMetaTag("og:title", config.ogTitle, true);
  updateMetaTag("og:description", config.ogDescription, true);
  updateMetaTag("og:url", config.canonical, true);
  updateMetaTag("twitter:title", config.twitterTitle);
  updateMetaTag("twitter:description", config.twitterDescription);

  // Update canonical URL
  updateCanonicalUrl(config.canonical);

  // Add structured data
  addStructuredData(structuredData.organization);
  addStructuredData(structuredData.localBusiness);
  addStructuredData(structuredData.breadcrumbList(pathname));
};
