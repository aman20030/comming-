import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="container">
      {/* ✅ LOGO ABOVE */}
      <div className="logo-wrapper">
        <img
          src="logo.png"
          alt="Viaridez Logo"
          className="logo"
        />
      </div>

      <div className="top-left">#Coming Soon</div>
      <div className="middle-left">
        Stay tuned for exciting updates on fleet management!
      </div>
      <div className="top-right">
        <span className="text-3d">Page Not Found</span>
      </div>
    </div>
  );
};

export default ComingSoon;
