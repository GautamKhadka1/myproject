import React from "react";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./components/index.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
