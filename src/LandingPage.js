// src/LandingPage.js

import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Video Background */}
      <video className="background-video" autoPlay loop muted>
        <source
          //src="https://www.w3schools.com/tags/movie.mp4"
          src="https://videos.pexels.com/video-files/17647948/17647948-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        {/* Add fallback message */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay-content">
        <h1>Welcome to Xpredict</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
