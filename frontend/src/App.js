import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillLevelWorkout from "./pages/SkillLevelWorkout";




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<SkillLevelWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
