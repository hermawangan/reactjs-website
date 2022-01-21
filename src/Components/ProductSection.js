import React from "react";

function ProductSection({ src, title, country, text }) {
  return (
    <>
      <li className="product">
        <img src={src} className="product-image" />
        <div className="product-information">
          <h2 className="product-title">{title}</h2>
          <h3 className="product-country">{country}</h3>
          <p className="poduct-text">{text}</p>
        </div>
      </li>
    </>
  );
}

export default ProductSection;
