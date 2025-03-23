import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              presync<span className="highlight">.tech</span>
            </div>
            <p className="footer-description">
              Transforming businesses through innovative software solutions.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/105935955/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Backend Engineering
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  AI & ML Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-description">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="newsletter-button"
                aria-label="Subscribe to newsletter"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Presync.tech. All rights reserved.
          </p>
          <div className="footer-policies">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
