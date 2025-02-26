import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; // ✅ Import About Page
import Contact from "./components/pages/Contact"; 
import Events from "./components/pages/Events"; 
import PrayerGroup from "./components/pages/PrayerGroup"; 
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar stays visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* ✅ About Page Route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/prayer-group" element={<PrayerGroup />} />
      </Routes>
    </Router>
  );
}

export default App;
