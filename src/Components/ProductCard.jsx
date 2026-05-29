import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({
  image,
  title,
  description,
  oldPrice,
  newPrice,
  link
}) => {

  return (

    <Link to={link} className="product-link">

      <div className="product-card">

        <img src={image} alt={title} />

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="discount">
          ${oldPrice}
        </span>

        <span>
          ${newPrice}
        </span>

      </div>

    </Link>

  );
};

export default ProductCard;