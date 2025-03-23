import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection for better mobile header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle smooth scrolling for hash links
  const handleScroll = (e, id) => {
    e.preventDefault();
    closeMenu();

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      className={`bg-black bg-opacity-30 text-white shadow-xl px-4 sm:px-8 md:px-12 fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-opacity-80 backdrop-filter backdrop-blur-sm"
          : "py-4"
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              <a href="/" aria-label="Presync.tech Home">
                presync<span className="text-blue-400">.tech</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-10 desktop-menu">
            <a
              href="#home"
              className="hover:text-blue-300 transition duration-300 nav-link"
              aria-label="Go to Home section"
              onClick={(e) => handleScroll(e, "home")}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-300 nav-link"
              aria-label="Learn about Presync.tech"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-blue-300 transition duration-300 nav-link"
              aria-label="View our services"
              onClick={(e) => handleScroll(e, "services")}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-blue-300 transition duration-300 nav-link"
              aria-label="Explore our portfolio"
              onClick={(e) => handleScroll(e, "portfolio")}
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="hover:text-blue-300 transition duration-300 nav-link"
              aria-label="Meet our team"
              onClick={(e) => handleScroll(e, "team")}
            >
              Team
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 transition duration-300 nav-link"
              aria-label="Contact us"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </a>
          </div>
          <div className="md:hidden mobile-menu-button">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-navy-800 pb-4 mobile-menu`}
        aria-labelledby="mobile-menu-button"
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3 mobile-menu-container">
          <a
            href="#home"
            className="block py-2 hover:text-blue-300 transition duration-300 mobile-link"
            onClick={(e) => handleScroll(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-blue-300 transition duration-300 mobile-link"
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-blue-300 transition duration-300 mobile-link"
            onClick={(e) => handleScroll(e, "services")}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block py-2 hover:text-blue-300 transition duration-300 mobile-link"
            onClick={(e) => handleScroll(e, "portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#team"
            className="block py-2 hover:text-blue-300 transition duration-300 mobile-link"
            onClick={(e) => handleScroll(e, "team")}
          >
            Team
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-blue-300 transition duration-300 mobile-link"
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
