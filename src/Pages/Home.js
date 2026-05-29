import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../styles/homestyle.css";

import guitar from "../Assets/guitar.jpeg";
import piano from "../Assets/piano.jpeg";
import drums from "../Assets/drums.jpeg";

import NavBar from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

const Home = () => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  const products = [
    {
      id: 1,
      image: guitar,
      title: "Yamaha Acoustic Guitar",
      description: "High quality sound for beginners and pros.",
      oldPrice: 250,
      newPrice: 199,
      link: "/details/guitar"
    },

    {
      id: 2,
      image: piano,
      title: "Casio Digital Piano",
      description: "Perfect for practice and performance.",
      oldPrice: 600,
      newPrice: 499,
      link: "/details/piano"
    },

    {
      id: 3,
      image: drums,
      title: "Pearl Drum Set",
      description: "Powerful and professional drum experience.",
      oldPrice: 800,
      newPrice: 699,
      link: "/details/drums"
    }
  ];

  return (
    <div>

      <NavBar cartCount={cartCount} />

      <section className="hero">

        <div className="hero-text">

          <h2>Find Your Sound</h2>

          <p>
            Discover quality instruments for every musician.
          </p>

          <Link to="/shop" className="btn">
            Shop Now
          </Link>

        </div>

      </section>

      <section className="categories">

        <h2>Shop by Category</h2>

        <div className="category-container">

          <Link
            to="/filter?type=acoustic"
            className="category-link"
          >
            <div className="category-card">

              <h3>Guitars 🎸</h3>

              <p>
                Acoustic, electric, and bass guitars.
              </p>

            </div>
          </Link>

          <Link
            to="/filter?type=piano"
            className="category-link"
          >
            <div className="category-card shop-card">

              <h3>Pianos 🎹</h3>

              <p>
                Digital pianos, keyboards, and more.
              </p>

            </div>
          </Link>

          <Link
            to="/filter?type=drums"
            className="category-link"
          >
            <div className="category-card shop-card">

              <h3>Drums 🥁</h3>

              <p>
                Drum sets, percussion, and accessories.
              </p>

            </div>
          </Link>

        </div>

      </section>

      <section className="featured">

        <h2>Discounted Products</h2>

        <div className="product-container">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              link={product.link}
            />

          ))}

        </div>

      </section>

      <footer>
        <p>&copy; 2026 Music World. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;