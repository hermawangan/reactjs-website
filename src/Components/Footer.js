import React from "react";
import { Outlet, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-section">
          <div className="footer-message">
            <h2 className="footer-heading">Thankyou for visiting </h2>
            <p className="footer-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              tenetur maxime voluptatem eius adipisci quisquam aut hic sint
              maiores voluptas!
            </p>
          </div>
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                SATURN
                <i className="fas fa-globe-asia"></i>
              </Link>
            </div>
            <small className="website-rights">SATURN © 2021</small>
            <div className="social-icons">
              <Link
                className="social-icons-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icons-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icons-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icons-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="social-icons-link linkein"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
