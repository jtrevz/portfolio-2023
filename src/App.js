import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import AutoForm from "./pages/AutoForm";

function App() {
  return (
    <ParallaxProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/autoform" element={<AutoForm />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
