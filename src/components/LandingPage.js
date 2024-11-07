// LandingPage.js
import React, { useRef } from "react";
import "./LandingPage.css";

const LandingPage = ({ onGetStartedClick }) => {
  return (
    <div className="landing-page">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source
            src="https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Product Description */}
        <div className="product-description-box">
          <h1>XPredict</h1>
          <p>
            Unlock insights with our prediction market platform—harness team
            predictions on business trends, marketing, and more for smarter
            decisions and a fun, competitive edge.
          </p>
        </div>

        {/* Get Started Button */}
        <button className="get-started-btn" onClick={onGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
