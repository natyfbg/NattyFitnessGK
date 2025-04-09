import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SkillLevelWorkout from "./pages/SkillLevelWorkout";
import BeginnerWorkouts from "./pages/BeginnerWorkouts";
import IntermediateWorkouts from "./pages/IntermediateWorkouts";
import AdvancedWorkouts from "./pages/AdvancedWorkouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<SkillLevelWorkout />} />
        <Route path="/levels/beginner" element={<BeginnerWorkouts />} />
        <Route path="/levels/intermediate" element={<IntermediateWorkouts />} />
        <Route path="/levels/advanced" element={<AdvancedWorkouts />} />
      </Routes>
    </Router>
  );
}

export default App;
