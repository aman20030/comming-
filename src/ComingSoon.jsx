import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="container">
      {/* ✅ Moving Road Background */}
      <div className="road" />

      {/* ✅ Car on Road */}
      <img src="/car.png" alt="Car" className="car" />

      {/* ✅ Logo */}
      <div className="logo-wrapper">
        <img src="logo.png" alt="Viaridez Logo" className="logo" />
      </div>

      {/* ✅ Top Left Text - UPDATED */}
      <div className="top-left">
        Legacy on wheels finds new sands —
        <br /> eastward ascent begins
      </div>

      {/* ✅ Middle Message */}
      <div className="middle-left">
        <p className="text-line">A smarter way to navigate is on the horizon.</p>
        <p className="text-line">Stay close. The journey begins soon.</p>
      </div>

      {/* ✅ Top Right Text */}
      <div className="top-right">
        <p className="text-line">we are on soon!</p>
      </div>
    </div>
  );
};

export default ComingSoon;
