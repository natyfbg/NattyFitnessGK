import React, { useEffect, useState } from 'react';

const BeginnerWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://nattyfitness-env.eba-puanptup.us-east-2.elasticbeanstalk.com/api/workouts')
      .then((res) => res.json())
      .then((data) => {
        const beginner = data?.by_experience_level?.beginner || [];
        setWorkouts(beginner);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching beginner workouts:', err);
        setLoading(false);
      });
  }, []);

  const groupedByMuscle = workouts.reduce((acc, workout) => {
    const muscle = workout.muscle_group || 'Unknown';
    if (!acc[muscle]) acc[muscle] = [];
    acc[muscle].push(workout);
    return acc;
  }, {});

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Beginner Workouts</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        Object.entries(groupedByMuscle).map(([muscle, list]) => (
          <div key={muscle} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 capitalize">{muscle}</h2>
            <ul className="list-disc ml-6">
              {list.map((ex, index) => (
                <li key={index}>
                  <strong>{ex.name}</strong> — <em>{ex.movement_type}</em> —{' '}
                  {ex.target_muscles?.join(', ') || 'No muscles listed'}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default BeginnerWorkouts;
