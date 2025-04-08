import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Optional, for custom styles

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/workouts");
  };

  return (
    <div className="home-container">
      <h1 className="text-3xl font-bold text-center mb-4">Explore Workout Levels</h1>
      <p className="text-center mb-6">Choose your fitness level to get started.</p>
      
      <div className="flex justify-center items-center space-x-6">
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleClick}
        >
          View Workout Levels
        </button>
      </div>
    </div>
  );
};

export default Home;
