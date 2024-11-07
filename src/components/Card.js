// Card.js
import React from "react";
import "./Card.css";

const Card = ({ icon, title, description, buttonText, link }) => {
  const handleButtonClick = () => {
    window.location.href = link; // Redirect to the specified link
  };

  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="explore-more-btn" onClick={handleButtonClick}>
        {buttonText} &rarr;
      </button>
    </div>
  );
};

export default Card;
