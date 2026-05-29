import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
  return (

    <header>

      <nav className="navbar">

        <h1 className="logo">Music World</h1>

        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          <li><Link to="/shop">Shop</Link></li>

          <li><Link to="/filter">Filter</Link></li>

          <li><Link to="/contact">Contact</Link></li>

          <li>
            <Link to="/cart">
              Cart ({cartCount})
            </Link>
          </li>

          <li><Link to="/about">About Us</Link></li>

        </ul>

      </nav>

    </header>
  );
};

export default NavBar;