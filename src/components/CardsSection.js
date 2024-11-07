import React from "react";
import Card from "./Card";
import "./CardsSection.css";

const CardsSection = () => {
  return (
    <div className="cards-section">
      <Card
        icon="🏢"
        title="Register as an Organization"
        description="Quickly find answers without having to search multiple sources."
        buttonText="Sign Up"
        link="/organization-signup"
      />
      <Card
        icon="👨🏻‍💻"
        title="Sign Up as a User"
        description="Gain insights from data to make better decisions every day."
        buttonText="Sign Up"
        link="/user-signup"
      />
      <Card
        icon="📘"
        title="Learn More"
        description="Access our platform from any device for convenient usage."
        buttonText="Learn More"
        link="/learn-more"
      />
    </div>
  );
};

export default CardsSection;
