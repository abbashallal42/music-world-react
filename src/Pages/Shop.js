import React, { useState, useEffect } from "react";
import "../styles/homestyle.css";
import "../styles/shopstyle.css";
import "../styles/mobile.css";
import NavBar from "../Components/NavBar";
import ProductCardShop from "../Components/ProductCardShop";

import products from "../data/products";

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div>

      <NavBar cartCount={cartCount} />

      <section className="shop-section">

        <h2>Shop Instruments</h2>

        <div className="shop-grid">

          {products.map((product) => {

            // 🧠 safety check (helps debugging)
            if (!product.id) return null;

            return (
              <ProductCardShop
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.description}
                price={product.price}
                link={`/details/${product.id}`}
              />
            );
          })}

        </div>

      </section>

      <footer>
        <p>&copy; 2026 Music World. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Shop;