import React from 'react';

const WorkoutLevelCard = ({ level, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-6 w-72 text-center cursor-pointer hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold mb-2">{level}</h3>
      <p className="text-gray-500">See workouts for {level.toLowerCase()} level</p>
    </div>
  );
};

export default WorkoutLevelCard;
