import React, { useState, useEffect } from "react";
import "../styles/homestyle.css";
import NavBar from "../Components/NavBar";
import "../styles/mobile.css";

const About = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div>
      <NavBar cartCount={cartCount} />

      <section className="contact-section">
        <h2>About Us</h2>

        <div className="info">
          <h6>CSCI390 Web Development Online Music Store Project - Phase 2</h6>
          <h6>Abbas Hallal 42330193 & Abbas Hamdan 42330111</h6>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Music World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;