import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://nattyfitness-env.eba-puanptup.us-east-2.elasticbeanstalk.com/api/workouts")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
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
        <ul>
          {workouts.map((w, i) => (
            <li key={i}>
              <strong>{w.name}</strong> — <em>{w.type}</em> — {w.muscles.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
