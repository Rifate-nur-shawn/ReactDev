import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    // Handle smooth scrolling for hash links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        if (targetId === "") return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: "smooth",
          });

          // Update URL hash without jumping
          window.history.pushState(null, "", `#${targetId}`);
        }
      });
    });

    // Check for hash in URL on page load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
