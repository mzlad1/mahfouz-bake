import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "frozen-dough", name: "Frozen Cookie Dough" },
    { id: "mini-cookies", name: "Mini Cookies" },
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
      category: "frozen-dough",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Classic Chocolate Chip Dough",
      tags: ["Premium", "Frozen", "Ready-to-Bake"],
      description:
        "Premium frozen cookie dough with real chocolate chips. Perfect for consistent baking results.",
    },
    {
      id: 2,
      category: "frozen-dough",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      name: "Oatmeal Raisin Dough",
      tags: ["Premium", "Frozen", "Healthy"],
      description:
        "Wholesome oatmeal cookie dough with plump raisins and natural sweetness.",
    },
    {
      id: 3,
      category: "mini-cookies",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Assorted Mini Cookies",
      tags: ["Mini", "Assorted", "Fresh"],
      description:
        "Perfect bite-sized cookies in various flavors. Ideal for events and catering.",
    },
    {
      id: 4,
      category: "sugar-free-cookies",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Sugar-Free Chocolate Chip",
      tags: ["Sugar-Free", "Healthy", "Diabetic-Friendly"],
      description:
        "Delicious chocolate chip cookies without added sugar. Sweetened naturally.",
    },
    {
      id: 5,
      category: "sugar-free-cookies",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      name: "Sugar-Free Oatmeal",
      tags: ["Sugar-Free", "Healthy", "Fiber-Rich"],
      description:
        "Nutritious oatmeal cookies with natural sweetness and no artificial sweeteners.",
    },
    {
      id: 6,
      category: "sugar-free-muffins",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Sugar-Free Blueberry Muffins",
      tags: ["Sugar-Free", "Healthy", "Fruit"],
      description:
        "Moist blueberry muffins made with fresh berries and natural sweeteners.",
    },
    {
      id: 7,
      category: "sugar-free-muffins",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
      name: "Sugar-Free Chocolate Muffins",
      tags: ["Sugar-Free", "Healthy", "Chocolate"],
      description:
        "Rich chocolate muffins without the sugar. Perfect for health-conscious chocolate lovers.",
    },
    {
      id: 8,
      category: "fudge-brownies",
      image:
        "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop",
      name: "Classic Fudge Brownies",
      tags: ["Premium", "Chocolate", "Fudgy"],
      description:
        "Rich, fudgy brownies made with premium chocolate and clean ingredients.",
    },
    {
      id: 9,
      category: "fudge-brownies",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      name: "Walnut Fudge Brownies",
      tags: ["Premium", "Chocolate", "Nuts"],
      description:
        "Fudgy brownies loaded with crunchy walnuts for added texture and flavor.",
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
            Premium frozen dough and ready-to-sell baked goods for businesses
            and individuals
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
                selectedCategory === "frozen-dough" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("frozen-dough")}
            >
              Frozen Cookie Dough
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "mini-cookies" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("mini-cookies")}
            >
              Mini Cookies
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
