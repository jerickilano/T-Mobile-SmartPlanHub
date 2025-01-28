import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage.js";
import PlanFinder from "./routes/PlanFinder.js";
import PlanDetails from "./routes/PlanDetails.js";
import StoreFinder from "./routes/StoreFinder.js";
import Navbar from "./routes/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plans" element={<PlanFinder />} />
        <Route path="/plan-details/:id" element={<PlanDetails />} />
        <Route path="/store-finder" element={<StoreFinder />} />
      </Routes>
    </Router>
  );
}

export default App;

