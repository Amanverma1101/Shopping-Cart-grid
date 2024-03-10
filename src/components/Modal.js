const Modal = ({ selectedProduct, handleCloseDetails }) => {
  return (
    <div className="product-details">
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <div className="product-details-content">
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description.split(" ").slice(0, 30).join(" ")}</p>
        <p>
          Price: <strong>₹{selectedProduct.price}</strong>
        </p>
        <button onClick={handleCloseDetails}>Buy Now</button>
      </div>
    </div>
  );
};
export default Modal