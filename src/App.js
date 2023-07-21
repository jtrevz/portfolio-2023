import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
