import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Pg from "./pages/Pg.jsx";
import Rooms from "./pages/Rooms.jsx";
import Contactus from "./pages/Contactus.jsx";
import ScrollToTop from "./ScrollToTop.jsx"; // ⬅️ add this

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* ⬅️ this fixes the scroll issue */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pg" element={<Pg />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
