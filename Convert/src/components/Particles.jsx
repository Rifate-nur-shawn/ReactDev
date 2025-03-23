import React from "react";
import "../styles/Particles.css";

const Particles = () => {
  return (
    <>
      {/* Add these divs to match the presync.tech background structure */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 -z-10"></div>
      <div className="fixed inset-0 bg-black bg-opacity-40 -z-10"></div>
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="tech-particles"></div>
      </div>
    </>
  );
};

export default Particles;
