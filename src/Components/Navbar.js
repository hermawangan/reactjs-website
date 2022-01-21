import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/index.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          <p className="nav-brand">
            SATURN <i class="fas fa-globe-asia"></i>
          </p>
        </div>
        <div className="nav-menu">
          <ul className="nav-ul">
            <li className="nav-items">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-items">
              <Link to="product" className="nav-link">
                Product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
