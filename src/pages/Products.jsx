import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "cookies", name: "Cookies" },
    { id: "sugar-free-cookies", name: "Sugar-Free Cookies" },
    { id: "sugar-free-muffins", name: "Sugar-Free Muffins" },
    { id: "fudge-brownies", name: "Fudge Brownies" },
  ];

  const productBenefits = [
    {
      title: "Zero Preservatives, Zero Compromise",
      description: "Every product is made with integrity.",
      icon: "✓",
    },
    {
      title: "Time-Saving Solutions",
      description:
        "Frozen and ready-to-bake or ready-to-sell options for businesses.",
      icon: "⏰",
    },
    {
      title: "Customizable & Scalable",
      description: "Tailored solutions for wholesale partners.",
      icon: "🔧",
    },
    {
      title: "Proven Track Record",
      description: "Trusted by cafés, bakeries, and retailers.",
      icon: "🏆",
    },
  ];

  const products = [
    {
      id: 1,
      category: "cookies",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Red Velvet Cookie",
      tags: ["Premium", "Red Velvet", "Classic"],
      description:
        "Delicious red velvet cookies with a rich, velvety texture and subtle cocoa flavor.",
    },
    {
      id: 2,
      category: "cookies",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      name: "Double Cookie",
      tags: ["Premium", "Double", "Chocolate"],
      description:
        "Double the chocolate, double the deliciousness. Rich and indulgent chocolate cookies.",
    },
    {
      id: 3,
      category: "cookies",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Classic Cookie",
      tags: ["Classic", "Traditional", "Timeless"],
      description:
        "The perfect classic cookie with a golden brown exterior and soft, chewy center.",
    },
    {
      id: 4,
      category: "cookies",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Oats Cookie",
      tags: ["Oats", "Healthy", "Nutritious"],
      description:
        "Wholesome oatmeal cookies with a hearty texture and natural sweetness.",
    },
    {
      id: 5,
      category: "cookies",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      name: "Sprinkles Cookie",
      tags: ["Fun", "Colorful", "Party"],
      description:
        "Festive cookies loaded with colorful sprinkles, perfect for celebrations and parties.",
    },
    {
      id: 6,
      category: "cookies",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Reeses Cookie",
      tags: ["Peanut Butter", "Chocolate", "Reeses"],
      description:
        "Irresistible cookies featuring the perfect combination of peanut butter and chocolate.",
    },
    {
      id: 7,
      category: "sugar-free-cookies",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Sugar-Free Cranberry Cookie",
      tags: ["Sugar-Free", "Cranberry", "Healthy"],
      description:
        "Delicious cranberry cookies without added sugar. Sweetened naturally with cranberries.",
    },
    {
      id: 8,
      category: "sugar-free-cookies",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      name: "Sugar-Free Chocolate Cookie",
      tags: ["Sugar-Free", "Chocolate", "Diabetic-Friendly"],
      description:
        "Rich chocolate cookies without the sugar. Perfect for health-conscious chocolate lovers.",
    },
    {
      id: 9,
      category: "fudge-brownies",
      image:
        "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop",
      name: "Fudge Brownies",
      tags: ["Premium", "Chocolate", "Fudgy"],
      description:
        "Rich, fudgy brownies made with premium chocolate and clean ingredients.",
    },
    {
      id: 10,
      category: "sugar-free-muffins",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Sugar-Free Carrot Muffins",
      tags: ["Sugar-Free", "Carrot", "Healthy"],
      description:
        "Moist carrot muffins made with fresh carrots and natural sweeteners.",
    },
    {
      id: 11,
      category: "sugar-free-muffins",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Sugar-Free Lemon Muffins",
      tags: ["Sugar-Free", "Lemon", "Citrus"],
      description:
        "Refreshing lemon muffins with a bright citrus flavor and no added sugar.",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero section">
        <div className="container">
          <h1 className="products-section-title">OUR PRODUCT RANGE</h1>
          <p className="products-section-subtitle">
            Premium cookies, muffins, and brownies for businesses and
            individuals
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <div className="products-category-filter">
            <button
              className={`products-category-btn ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Products
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "cookies" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("cookies")}
            >
              Cookies
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "sugar-free-cookies" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("sugar-free-cookies")}
            >
              Sugar-Free Cookies
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "sugar-free-muffins" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("sugar-free-muffins")}
            >
              Sugar-Free Muffins
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "fudge-brownies" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("fudge-brownies")}
            >
              Fudge Brownies
            </button>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Features - OUR PRODUCT RANGE */}
      <section className="products-product-features section">
        <div className="container">
          <h2 className="section-title">OUR PRODUCT RANGE</h2>
          <div className="products-features-grid">
            {productBenefits.map((benefit, index) => (
              <div key={index} className="products-feature-card card">
                <div className="products-feature-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
