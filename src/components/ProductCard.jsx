import { useState, useEffect, useRef } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { images, name, tags, description } = product;

  // Safety check: ensure images array exists and has content
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.warn(
      "ProductCard: Invalid or missing images array for product:",
      product
    );
    return (
      <div className="product-card product-card-error">
        <div className="product-image">
          <div className="product-error-placeholder">
            <span>⚠️ Image not available</span>
          </div>
        </div>
        <div className="product-content">
          <h3 className="product-name">{name || "Product Name"}</h3>
          <p className="product-description">
            {description || "Description not available"}
          </p>
        </div>
      </div>
    );
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);
  const [cachedImages, setCachedImages] = useState(new Set());
  const imageCache = useRef(new Map());

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Preload current image if not cached
    if (!cachedImages.has(images[currentImageIndex])) {
      setIsModalImageLoading(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalImageLoading(false);
  };

  const handleModalImageClick = (e) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  };

  // Cache image function
  const cacheImage = (imageUrl) => {
    if (imageCache.current.has(imageUrl)) {
      return imageCache.current.get(imageUrl);
    }

    const img = new Image();
    const promise = new Promise((resolve, reject) => {
      img.onload = () => {
        imageCache.current.set(imageUrl, img);
        setCachedImages((prev) => new Set([...prev, imageUrl]));
        resolve(img);
      };
      img.onerror = reject;
    });

    img.src = imageUrl;
    return promise;
  };

  // Preload and cache images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        // Cache current image
        await cacheImage(images[currentImageIndex]);

        // Preload adjacent images for smooth navigation
        const nextIndex = (currentImageIndex + 1) % images.length;
        const prevIndex =
          currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

        // Preload next and previous images in background
        Promise.all([
          cacheImage(images[nextIndex]),
          cacheImage(images[prevIndex]),
        ]).catch(() => {
          // Ignore errors for preloaded images
        });
      } catch (error) {
        console.warn("Failed to cache image:", error);
      }
    };

    preloadImages();
  }, [currentImageIndex, images]);

  // Handle modal image loading
  useEffect(() => {
    if (isModalOpen) {
      if (cachedImages.has(images[currentImageIndex])) {
        setIsModalImageLoading(false);
      } else {
        setIsModalImageLoading(true);
        cacheImage(images[currentImageIndex])
          .then(() => setIsModalImageLoading(false))
          .catch(() => setIsModalImageLoading(false));
      }
    }
  }, [currentImageIndex, isModalOpen, images, cachedImages]);

  // Add keyboard event listener when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img
            src={images[currentImageIndex]}
            alt={`${name} - Premium baked goods by Mahfouz Bake - Image ${
              currentImageIndex + 1
            }`}
            onClick={openModal}
            className="clickable-image"
            loading="lazy"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="image-nav-btn image-nav-prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="image-nav-btn image-nav-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="image-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`image-indicator ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Product Tags - Only show if tags exist */}
          {tags && Array.isArray(tags) && tags.length > 0 && (
            <div className="product-tags">
              {tags.map((tag, index) => (
                <span key={index} className="product-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="product-content">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
          {images.length > 1 && (
            <div className="image-counter">
              {currentImageIndex + 1} of {images.length} images
            </div>
          )}
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={handleModalImageClick}>
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>

            {/* Main Image Container */}
            <div className="modal-image-container">
              {/* Loading State */}
              {isModalImageLoading && (
                <div className="modal-loading-placeholder">
                  <div className="modal-loading-spinner"></div>
                  <span>Loading image...</span>
                </div>
              )}

              {/* Actual Image */}
              <img
                src={images[currentImageIndex]}
                alt={`${name} - Premium baked goods by Mahfouz Bake - Image ${
                  currentImageIndex + 1
                }`}
                className={`modal-image ${
                  isModalImageLoading ? "hidden" : "visible"
                }`}
                onLoad={() => setIsModalImageLoading(false)}
                onError={() => setIsModalImageLoading(false)}
              />
            </div>

            {/* Modal Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  className="modal-nav-btn modal-nav-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="modal-nav-btn modal-nav-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Product Info in Modal */}
            <div className="modal-product-info">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
