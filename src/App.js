import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
