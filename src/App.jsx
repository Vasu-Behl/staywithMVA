import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Pg from "./pages/Pg";
import Contactus from "./pages/Contactus";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 👇 Utility to always scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/staywithMVA">
      <ScrollToTop /> {/* ensures every route starts at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/pg" element={<Pg />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
