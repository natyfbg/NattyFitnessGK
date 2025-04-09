import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // optional if you want custom styling

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/levels");
  };

  return (
    <div className="home-container">
      <h1>🏋️ Welcome to NattyFitness</h1>
      <p>Explore different workout levels to match your fitness goals.</p>
      <button className="navigate-button" onClick={handleNavigate}>
        Explore Workout Levels
      </button>
    </div>
  );
};

export default Home;
