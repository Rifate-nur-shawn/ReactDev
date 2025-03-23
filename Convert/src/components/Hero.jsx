import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const heroCardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Check for mobile viewport
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Initialize animations
    const animateElements = document.querySelectorAll(
      "#home .animate-on-scroll"
    );
    animateElements.forEach((element) => {
      element.classList.add("animated");
    });

    // Only setup mouse interactions on non-mobile devices
    if (!isMobile) {
      // Mouse move effect for hero cards
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          heroRef.current.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        heroCardsRef.current.forEach((card, cardIndex) => {
          if (card) {
            const factor = (cardIndex + 1) * 10;
            card.style.transform = `translate(${x * factor}px, ${
              y * factor
            }px)`;
          }
        });
      };

      const handleMouseLeave = () => {
        heroCardsRef.current.forEach((card) => {
          if (card) {
            card.style.transform = "translate(0, 0)";
          }
        });
      };

      const heroSection = heroRef.current;
      if (heroSection) {
        heroSection.addEventListener("mousemove", handleMouseMove);
        heroSection.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (heroSection) {
          heroSection.removeEventListener("mousemove", handleMouseMove);
          heroSection.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }

    // Counter animation
    const animateCounters = () => {
      const counterElements = document.querySelectorAll(".counter-value");
      const speed = 200;

      counterElements.forEach((counter) => {
        const targetNumber = +counter.dataset.count;
        let currentValue = 0;
        const increment = targetNumber / speed;

        const updateCounter = () => {
          if (currentValue < targetNumber) {
            currentValue += increment;
            counter.textContent = Math.ceil(currentValue);
            setTimeout(updateCounter, 1);
          } else {
            counter.textContent = targetNumber;
          }
        };

        updateCounter();
      });
    };

    // Set up intersection observer for counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(".stats-counter");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div
      className="pt-28 pb-20 text-white relative overflow-hidden px-12"
      ref={heroRef}
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll hero-text">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-800 bg-opacity-40 backdrop-filter backdrop-blur-sm border border-blue-400 border-opacity-30 mb-6 hero-badge">
              <span className="text-blue-200 text-sm font-medium flex items-center badge-content">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-300 mr-2 animate-pulse pulse-dot"></span>
                Leading Software Engineering Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-xl hero-heading">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 gradient-text">
                Digital Reality
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg drop-shadow-md font-medium hero-description">
              We build cutting-edge software solutions that drive business
              growth and innovation using modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 hero-buttons">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center text-center shadow-lg border border-blue-500 border-opacity-20 btn btn-primary"
                aria-label="Get started with Presync.tech"
              >
                <span>Get Started</span>
                <svg
                  className="w-5 h-5 ml-2 btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
              <a
                href="#services"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-filter backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-white border-opacity-30 flex items-center justify-center btn btn-secondary"
                aria-label="View our services"
              >
                <span>Our Services</span>
                <svg
                  className="w-5 h-5 ml-2 btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Stats/Features Section with enhanced visibility */}
            <div className="mt-20 md:block hero-features">
              <p className="text-sm text-blue-100 mb-4 font-medium features-title">
                Why choose Presync.tech:
              </p>
              <div className="grid grid-cols-3 gap-4 features-grid">
                <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:transform hover:-translate-y-1 hover:shadow-lg feature-item">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 shadow-md border border-blue-400 border-opacity-50 feature-icon">
                    <i className="fas fa-check text-blue-100 text-sm"></i>
                  </div>
                  <span className="text-white text-sm font-medium">
                    Enterprise-grade
                  </span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:transform hover:-translate-y-1 hover:shadow-lg feature-item">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 shadow-md border border-blue-400 border-opacity-50 feature-icon">
                    <i className="fas fa-check text-blue-100 text-sm"></i>
                  </div>
                  <span className="text-white text-sm font-medium">
                    99.9% Uptime
                  </span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:transform hover:-translate-y-1 hover:shadow-lg feature-item">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 shadow-md border border-blue-400 border-opacity-50 feature-icon">
                    <i className="fas fa-check text-blue-100 text-sm"></i>
                  </div>
                  <span className="text-white text-sm font-medium">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:w-1/2 flex justify-center relative animate-on-scroll hero-visual"
            style={{ animationDelay: "0.3s" }}
          >
            {/* 3D-like Hero Illustration */}
            <div className="hero-image-container">
              <div className="hero-main-circle bg-gradient-to-br from-blue-800 to-blue-600 rounded-full shadow-2xl border-2 border-blue-500 border-opacity-20"></div>
              <div
                className="hero-card hero-card-1"
                ref={(el) => (heroCardsRef.current[0] = el)}
              >
                <div className="hero-card-icon bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg text-white">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">MERN Stack</h4>
                  <p className="text-blue-200 text-xs">
                    Full-stack Development
                  </p>
                </div>
              </div>
              <div
                className="hero-card hero-card-2"
                ref={(el) => (heroCardsRef.current[1] = el)}
              >
                <div className="hero-card-icon bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg text-white">
                  <i className="fas fa-robot"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">AI & ML</h4>
                  <p className="text-blue-200 text-xs">Intelligent Solutions</p>
                </div>
              </div>
              <div
                className="hero-card hero-card-3"
                ref={(el) => (heroCardsRef.current[2] = el)}
              >
                <div className="hero-card-icon bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg text-white">
                  <i className="fas fa-database"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Data Systems</h4>
                  <p className="text-blue-200 text-xs">Scalable & Secure</p>
                </div>
              </div>
              <div className="hero-dots hero-dots-1"></div>
              <div className="hero-dots hero-dots-2"></div>
              <img
                src="/assets/images/hero2222.svg"
                alt="3D visualization of software development technologies"
                className="hero-center-image"
                width="400"
                height="400"
                loading="eager"
                onError={(e) => {
                  console.warn("Failed to load hero image, using fallback");
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Presync.tech";
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats Counter with improved visibility */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-8 border-t border-white border-opacity-10 stats-counter">
          <div className="transform transition-transform duration-300 hover:-translate-y-2 relative group stat-item">
            <div
              className="text-3xl md:text-4xl font-bold text-white mb-2 counter-value"
              data-count="3"
            >
              0
            </div>
            <p className="text-blue-100 font-medium">Completed Projects</p>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-8"></div>
          </div>
          <div className="transform transition-transform duration-300 hover:-translate-y-2 relative group stat-item">
            <div
              className="text-3xl md:text-4xl font-bold text-white mb-2 counter-value"
              data-count="3"
            >
              0
            </div>
            <p className="text-blue-100 font-medium">Happy Clients</p>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-8"></div>
          </div>
          <div className="transform transition-transform duration-300 hover:-translate-y-2 relative group stat-item">
            <div
              className="text-3xl md:text-4xl font-bold text-white mb-2 counter-value"
              data-count="6"
            >
              0
            </div>
            <p className="text-blue-100 font-medium">Team Experts</p>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-8"></div>
          </div>
          <div className="transform transition-transform duration-300 hover:-translate-y-2 relative group stat-item">
            <div
              className="text-3xl md:text-4xl font-bold text-white mb-2 counter-value"
              data-count="3"
            >
              0
            </div>
            <p className="text-blue-100 font-medium">Years Experience</p>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
