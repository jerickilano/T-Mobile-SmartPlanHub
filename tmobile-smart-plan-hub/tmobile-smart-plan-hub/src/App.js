import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./routes/landingpage.js";
import Planfinder from "./routes/planfinder.js";
import Plandetails from "./routes/plandetails.js";
import Storefinder from "./routes/storefinder.js";
import Navbar from "./routes/navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/plans" element={<Planfinder />} />
        <Route path="/plan-details/:id" element={<Plandetails />} />
        <Route path="/store-finder" element={<Storefinder />} />
      </Routes>
    </Router>
  );
}

export default App;

