import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [groupedWorkouts, setGroupedWorkouts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://nattyfitness-env.eba-puanptup.us-east-2.elasticbeanstalk.com/api/workouts")
      .then((res) => res.json())
      .then((data) => {
        const workouts = data?.by_muscle_group || [];
        const grouped = {};

        Object.values(workouts).flat().forEach((ex) => {
          const group = ex.muscle_group?.toLowerCase() || "unknown";
          if (!grouped[group]) grouped[group] = [];
          grouped[group].push(ex);
        });

        setGroupedWorkouts(grouped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching workouts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>💪 NattyFitness Workouts</h1>

      {loading ? (
        <p>Loading workouts...</p>
      ) : (
        Object.entries(groupedWorkouts).map(([group, exercises]) => (
          <div key={group}>
            <h2>{group}</h2>
            <ul>
              {exercises.map((ex, idx) => (
                <li key={idx}>
                  <strong>{ex.name || "Unnamed"}</strong> — <em>{ex.movement_type || "Unknown movement"}</em> —{" "}
                  {ex.target_muscles?.join(", ") || "No muscles listed"}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
