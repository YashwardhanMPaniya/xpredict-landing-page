//App.js
import React, { useRef } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import CardsSection from "./components/CardsSection";

const App = () => {
  const introRef = useRef(null);

  const scrollToIntro = () => {
    introRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <LandingPage onGetStartedClick={scrollToIntro} />
      <div ref={introRef} className="intro-section">
        <h1>Welcome to XPredict</h1>
        <CardsSection />
      </div>
    </div>
  );
};

export default App;
