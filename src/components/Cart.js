import React, { useState, useEffect } from "react";
import Product from "./Product";
import Modal from "./Modal";
function Cart() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleCloseDetails = () => setSelectedProduct(null);

  return (
    <div className="App">
      <h1>
        Trending <b>Products</b>
      </h1>
      <div className="products-grid">
        {products.map((product) => (
          <Product
            id={product.id} // Move key here for correct usage
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <div>
          <div
            className="product-details-close"
            onClick={handleCloseDetails}
          ></div>
          <Modal
            selectedProduct={selectedProduct}
            handleCloseDetails={handleCloseDetails}
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
