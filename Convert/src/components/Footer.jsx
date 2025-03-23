import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 relative z-10 bg-black bg-opacity-20 text-gray-400 px-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold text-white mb-6">
              presync<span className="text-blue-400">.tech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/105935955/admin/page-posts/published/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "services")}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "services")}
                >
                  Backend Engineering
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "services")}
                >
                  AI & ML Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "services")}
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "services")}
                >
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleScrollTo(e, "team")}
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white"
                aria-label="Your email for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition duration-300 text-white"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Presync.tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
