import React from "react";
import { useParams } from "react-router-dom";
import "../styles/detailstyle.css";
import "../styles/homestyle.css";
import products from "../data/products";

const ProductsDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  }

  return (
    <div>

      <header>
        <nav className="navbar">
          <h1 className="logo">Music World</h1>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="/cart">
                Cart ({JSON.parse(localStorage.getItem("cart"))?.length || 0})
              </a>
            </li>
          </ul>

        </nav>
      </header>

      <section className="details-section">

        <div className="details-container">

          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="details-info">

            <h2>{product.name}</h2>

            <p className="price">${product.price}</p>

            <p className="description">{product.description}</p>

            <div className="specs">
              <h3>Specifications</h3>
              <p><strong>Type:</strong> {product.type}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Material:</strong> {product.material}</p>
            </div>

            <button className="cart-btn" onClick={addToCart}>
              Add to Cart
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ProductsDetails;