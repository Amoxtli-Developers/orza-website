import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Vision from "./routes/Vision";
import Journey from "./routes/Journey";
import JoinUs from "./routes/JoinUs";
import TechDescription from "./routes/TechDescription";
import "./styles/tailwind.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/tech-description/:index" element={<TechDescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;