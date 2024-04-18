import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Vision from "./routes/Vision";
import Journey from "./routes/Journey";
import "./styles/tailwind.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;