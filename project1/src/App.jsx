import React from "react";
import Calculator from "./components/Calculator";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./components/index.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route  path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
