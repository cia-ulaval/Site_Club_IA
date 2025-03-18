import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Management from "./pages/Management";
import Gallery from "./pages/Gallery";
import FlapEEG from "./pages/FlapEEG";
import MangaAI from "./pages/MangaAI";
import F1Tenth from "./pages/F1Tenth";
import Lenia from "./pages/Lenia";
import DecisionTree from "./pages/DecisionTree";
import Projects from "./pages/Projects";
import Collaboration from "./pages/Collaboration";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-red-800/20 to-black">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/flapeeg" element={<FlapEEG />} />
          <Route path="/mangaai" element={<MangaAI />} />
          <Route path="/f1tenth" element={<F1Tenth />} />
          <Route path="/decisiontree" element={<DecisionTree />} />
          <Route path="/lenia" element={<Lenia />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
