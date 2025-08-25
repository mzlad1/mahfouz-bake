import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { image, name, tags, description } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-tags">
          {tags.map((tag, index) => (
            <span key={index} className="product-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
