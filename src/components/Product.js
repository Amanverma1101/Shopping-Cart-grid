const Product = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <div>
          <h3>{product.title.split(" ").slice(0, 3).join(" ")}</h3>
          <div className="price-desc">
            ₹{product.price}
            <p>
              <s>₹{product.price + 149}</s>
            </p>
            <p className="perc">20% off</p>
          </div>
          {/* <p>{product.category}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
