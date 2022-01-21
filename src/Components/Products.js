import React from "react";
import ProductSection from "./ProductSection";

function Products() {
  return (
    <div className="products-container">
      <h2 className="products-title">Checkout these awesome destination</h2>
      <div className="products-wrapper">
        <ul className="products-item">
          <ProductSection
            src="images/img-9.jpg"
            title="Adventure to the East"
            country="Indonesia"
            text="the best Indonesia place to chill"
          />
          <ProductSection
            src="images/img-2.jpg"
            title="Adventure to the South East"
            country="Indonesia"
            text="Travel through the Islands of Bali in a Private Cruise"
          />
          <ProductSection
            src="images/img-3.jpg"
            title="Relaxing with South Afica"
            country="South Africa"
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          />
        </ul>
        <ul className="products-item">
          <ProductSection
            src="images/img-4.jpg"
            title="Execise in the Mountain"
            country="Nepal"
            text="Experience Football on Top of the Himilayan Mountains"
          />
          <ProductSection
            src="images/img-8.jpg"
            title="Adventure with camel"
            country="Egypt"
            text="Ride through the Sahara Desert on a guided camel tour"
          />
        </ul>
      </div>
    </div>
  );
}

export default Products;
