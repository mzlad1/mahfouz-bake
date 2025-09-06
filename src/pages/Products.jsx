import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
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
    },
    {
      title: "Time-Saving Solutions",
      description:
        "Frozen and ready-to-bake or ready-to-sell options for businesses.",
    },
    {
      title: "Customizable & Scalable",
      description: "Tailored solutions for wholesale partners.",
    },
    {
      title: "Proven Track Record",
      description: "Trusted by cafés, bakeries, and retailers.",
    },
  ];

  const products = [
    {
      id: 1,
      category: "cookies",
      images: ["/images/products/WhiteBackground/Red velvet cookie11.jpg"],
      name: "Red Velvet Bliss",
      description:
        "Delicious red velvet cookies with a rich, velvety texture and subtle cocoa flavor.",
    },
    {
      id: 2,
      category: "cookies",
      images: ["/images/products/WhiteBackground/Double cookie11.jpg"],
      name: "Color Pop Cookie",
      description:
        "Double the chocolate, double the deliciousness. Rich and indulgent chocolate cookies.",
    },
    {
      id: 3,
      category: "cookies",
      images: ["/images/products/WhiteBackground/Classic cookie11.jpg"],
      name: "Classic Chocolate",
      description:
        "The perfect classic cookie with a golden brown exterior and soft, chewy center.",
    },
    {
      id: 4,
      category: "cookies",
      images: ["/images/products/WhiteBackground/Oats cookie11.jpg"],
      name: "Oats Cranberry",
      description:
        "Wholesome oatmeal cookies with a hearty texture and natural sweetness.",
    },
    {
      id: 5,
      category: "cookies",
      images: ["/images/products/WhiteBackground/Sprinkles cookie11.jpg"],
      name: "Joyful Sprinkle",
      description:
        "Festive cookies loaded with colorful sprinkles, perfect for celebrations and parties.",
    },
    {
      id: 6,
      category: "cookies",
      images: ["/images/products/WhiteBackground/Reeses cookie11.jpg"],
      name: "Reese's Dream",
      description:
        "Irresistible cookies featuring the perfect combination of peanut butter and chocolate.",
    },
    {
      id: 7,
      category: "sugar-free-cookies",
      images: ["/images/products/WhiteBackground/cranberry11.jpg"],
      name: "Guilt Free Cranberry",
      description:
        "Delicious cranberry cookies without added sugar. Sweetened naturally with cranberries.",
    },
    {
      id: 8,
      category: "sugar-free-cookies",
      images: ["/images/products/WhiteBackground/chocolate11.jpg"],
      name: "Guilt Free Chocolate",
      description:
        "Rich chocolate cookies without the sugar. Perfect for health-conscious chocolate lovers.",
    },
    {
      id: 9,
      category: "fudge-brownies",
      images: ["/images/products/WhiteBackground/Fudge brownies22.jpg"],
      name: "Chocolate Fudge",
      description:
        "Rich, fudgy brownies made with premium chocolate and clean ingredients.",
    },
    {
      id: 10,
      category: "sugar-free-muffins",
      images: ["/images/products/WhiteBackground/carrot11.jpg"],
      name: "Carrot & Walnuts",
      description:
        "Moist carrot muffins made with fresh carrots and natural sweeteners.",
    },
    {
      id: 11,
      category: "sugar-free-muffins",
      images: ["/images/products/WhiteBackground/lemon11.jpg"],
      name: "Lemon Poppy Seeds",
      description:
        "Refreshing lemon muffins with a bright citrus flavor and no added sugar.",
    },
    {
      id: 12,
      category: "fudge-brownies",
      images: ["/images/products/WhiteBackground/Reeses Brownies11.jpg"],
      name: "Pistachio Crunch Brownie",
      description:
        "Decadent brownies loaded with Reeses peanut butter cups for the ultimate chocolate experience.",
    },
    //add peanut choco fusion
    {
      id: 13,
      category: "Cookies",
      images: ["/images/products/WhiteBackground/Peanut choco.jpg"],
      name: "Peanut Choco Fusion",
      description:
        "Delicious brownies loaded with peanut butter and chocolate for the ultimate chocolate experience.",
    },
    //add Choco Overload
    {
      id: 14,
      category: "Cookies",
      images: ["/images/products/WhiteBackground/Choco overload.jpg"],
      name: "Choco Overload",
      description:
        "Delicious Cookies loaded with chocolate for the ultimate chocolate experience.",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of products section
    window.scrollTo({
      top: document.querySelector(".products-category-filter").offsetTop - 100,
      behavior: "smooth",
    });
  };

  // Handle items per page change
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
  };

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
              onClick={() => handleCategoryChange("all")}
            >
              All Products
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "cookies" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("cookies")}
            >
              Cookies
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "sugar-free-cookies" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("sugar-free-cookies")}
            >
              Sugar-Free Cookies
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "sugar-free-muffins" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("sugar-free-muffins")}
            >
              Sugar-Free Muffins
            </button>
            <button
              className={`products-category-btn ${
                selectedCategory === "fudge-brownies" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("fudge-brownies")}
            >
              Fudge Brownies
            </button>
          </div>

          {/* Items Per Page Selector */}

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <div className="products-grid">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-no-products">
              <p>No products found in this category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="products-pagination">
              {/* Previous Button */}
              <button
                className={`pagination-btn ${
                  currentPage === 1 ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ‹ Previous
              </button>

              {/* Page Numbers */}
              <div className="pagination-numbers">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        className={`pagination-number ${
                          page === currentPage ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="pagination-ellipsis">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Next Button */}
              <button
                className={`pagination-btn ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Features - OUR PRODUCT RANGE */}
      <section className="products-product-features section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="products-features-grid">
            {productBenefits.map((benefit, index) => (
              <div key={index} className="products-feature-card card">
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
