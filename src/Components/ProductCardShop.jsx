import React from "react";
import { Link } from "react-router-dom";

const ProductCardShop = ({
  image,
  title,
  description,
  price,
  link
}) => {
  return (
    <div className="shop-card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p className="description">
        {description}
      </p>

      <p className="price">${price}</p>

      <Link to={link} className="details-btn">
        See Details
      </Link>

    </div>
  );
};

export default ProductCardShop;