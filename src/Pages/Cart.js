import React, { useEffect, useState } from "react";
import "../styles/cartStyle.css";
import "../styles/shopstyle.css";

import NavBar from "../Components/NavBar";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setCartCount(savedCart.length);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  return (
    <div>

      <NavBar cartCount={cartCount} />

      <section className="shop-section">

        <h2>Your Cart</h2>

        <div className="shop-grid">

          {cart.length === 0 ? (
            <p id="emptyCartMessage">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item, index) => (
              <div className="shop-card" key={index}>

                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <p className="price">${item.price}</p>

                <button
                  className="details-btn"
                  onClick={() => removeItem(index)}
                  style={{ backgroundColor: "black" }}
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

      </section>

      <h3 align="center" className="info">
        Please fill in the following:
      </h3>

      <section className="cart">

        <form className="contact-form">

          <input type="text" placeholder="Name" required />
          <input type="number" placeholder="Zip Code" required />
          <input type="number" placeholder="Card Id" required />
          <input type="number" placeholder="Phone Number" required />

        </form>

      </section>

      <footer>
        <p>&copy; 2026 Music World. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Cart;