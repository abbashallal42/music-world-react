import React, { useEffect, useState } from "react";
import "../styles/homestyle.css";
import "../styles/shopstyle.css";
import "../styles/filterstyle.css";

import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

import products from "../data/products";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [price, setPrice] = useState("all");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());

    const matchesType = type === "all" || p.type === type;

    let matchesPrice = true;
    if (price === "low") matchesPrice = p.price < 300;
    if (price === "mid") matchesPrice = p.price >= 300 && p.price <= 500;
    if (price === "high") matchesPrice = p.price > 500;

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div>

      <NavBar cartCount={cartCount} />

      <section className="filter-section">

        <h2>Search & Filter Instruments</h2>

        <div className="filter-controls">

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="acoustic">Acoustic</option>
            <option value="electric">Electric</option>
            <option value="keyboard">Keyboard</option>
            <option value="piano">Piano</option>
            <option value="drums">Drums</option>
            <option value="violin">Violin</option>
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Below $300</option>
            <option value="mid">$300 - $500</option>
            <option value="high">Above $500</option>
          </select>

        </div>

        <div className="shop-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div className="shop-card" key={p.id}>

                <img src={p.image} alt={p.name} />

                <h3>{p.name}</h3>

                <p className="price">${p.price}</p>

                <Link
                  to={`/details/${p.id}`}
                  className="details-btn"
                >
                  See Details
                </Link>

              </div>
            ))
          ) : (
            <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
              Sorry, we do not have that
            </p>
          )}

        </div>

      </section>

      <footer>
        <p>&copy; 2026 Music World. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Filter;