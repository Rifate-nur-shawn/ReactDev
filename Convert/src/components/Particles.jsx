import React from "react";
import "../styles/Particles.css";

const Particles = () => {
  console.log("Particles component rendering");
  return (
    <>
      <div className="fixed-bg-gradient"></div>
      <div className="fixed-bg-overlay"></div>
      <div className="tech-particles"></div>
    </>
  );
};

export default Particles;
