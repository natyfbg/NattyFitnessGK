import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SkillLevelWorkout.css";

const levels = [
  {
    title: "Beginner",
    description: "Start your fitness journey with basic movements.",
    path: "/levels/beginner",
  },
  {
    title: "Intermediate",
    description: "Take it up a notch with intermediate workouts.",
    path: "/levels/intermediate",
  },
  {
    title: "Advanced",
    description: "Push your limits with advanced exercises.",
    path: "/levels/advanced",
  },
];

const SkillLevelWorkout = () => {
  const navigate = useNavigate();

  return (
    <div className="level-container">
      <h1 className="level-title">Choose Your Workout Level</h1>
      <div className="level-cards">
        {levels.map((level) => (
          <div
            key={level.title}
            className="level-card"
            onClick={() => navigate(level.path)}
          >
            <h2>{level.title}</h2>
            <p>{level.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillLevelWorkout;
