import React, { useEffect, useState } from 'react';
import "../styles/SkillLevelWorkout.css"; // assuming styles are in /styles

const SkillLevelWorkout = () => {
  const [workouts, setWorkouts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://nattyfitness-env.eba-puanptup.us-east-2.elasticbeanstalk.com/api/workouts')
      .then((res) => res.json())
      .then((data) => {
        const workoutList = data?.by_experience_level || {};
        setWorkouts(workoutList);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching workouts:', err);
        setLoading(false);
      });
  }, []);

  const renderWorkoutsByMuscle = (level, levelWorkouts) => {
    const grouped = {};

    levelWorkouts.forEach((ex) => {
      const muscle = ex.muscle_group?.toLowerCase() || 'unknown';
      if (!grouped[muscle]) grouped[muscle] = [];
      grouped[muscle].push(ex);
    });

    return (
      <div key={level} className="skill-section">
        <h2 className="skill-title">{level.charAt(0).toUpperCase() + level.slice(1)}</h2>
        {Object.entries(grouped).map(([muscle, exList]) => (
          <div key={muscle} className="muscle-section">
            <h3 className="muscle-title">{muscle}</h3>
            <ul className="exercise-list">
              {exList.map((ex, i) => (
                <li key={i} className="exercise-item">
                  <strong>{ex.name}</strong> — <em>{ex.movement_type}</em> —{" "}
                  {ex.target_muscles?.join(", ") || "No muscles listed"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="skill-level-container">
      <h1 className="main-title">Workout Levels</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        Object.entries(workouts).map(([level, exercises]) =>
          renderWorkoutsByMuscle(level, exercises)
        )
      )}
    </div>
  );
};

export default SkillLevelWorkout;
