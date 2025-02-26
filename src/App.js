import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact"; 
import Events from "./components/pages/Events"; 
import PrayerGroup from "./components/pages/PrayerGroup"; 
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // ✅ Import Footer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/prayer-group" element={<PrayerGroup />} />
      </Routes>
      <Footer /> {/* ✅ Add Footer */}
    </Router>
  );
}

export default App;
