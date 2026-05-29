import React, { useState, useEffect } from "react";
import "../styles/homestyle.css";
import "../styles/contactstyle.css";
import NavBar from "../Components/NavBar";


const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(cart.length);
}, []);

  return (
    <div>

      <NavBar cartCount={cartCount} />

      <section className="contact-section">

        <h2>Contact Us</h2>

        {!submitted ? (

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        ) : (

          <div className="successMessage">

            <h3>
              Thank you for contacting Music World.
            </h3>

            <button
              className="contact-formSent"
              onClick={resetForm}
            >
              Send Another Message
            </button>

          </div>

        )}

      </section>

      <footer>
        <p>&copy; 2026 Music World. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Contact;