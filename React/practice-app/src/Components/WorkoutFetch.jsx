import React, { useEffect, useState } from "react";

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://edb-1r5r.onrender.com/exercises?limit=12");
        const data = await response.json();
        console.log("Data fetched:", data);
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl text-gray-700">Loading workouts...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">💪 Workout Exercises</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4"
          >
            <div className="flex justify-center bg-gray-100 rounded-md overflow-hidden mb-4">
              <img
                src={workout.gifUrl}
                alt={workout.name}
                className="h-48 w-full object-contain"
                loading="lazy"
              />
            </div>

            <h2 className="text-lg font-semibold mb-2 capitalize">
              {workout.name}
            </h2>
            <p className="text-sm text-gray-600">
              <strong>Body Part:</strong> {workout.bodyPart}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Target:</strong> {workout.target}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Equipment:</strong> {workout.equipment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
