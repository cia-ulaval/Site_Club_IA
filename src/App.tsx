import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ← Import ici

// imports de pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Management from "./pages/Management";
import Gallery from "./pages/Gallery";
import FlapEEG from "./pages/FlapEEG";
import MangaAI from "./pages/MangaAI";
import F1Tenth from "./pages/F1Tenth";
import Lenia from "./pages/Lenia";
import DecisionTree from "./pages/DecisionTree";
import Collaboration from "./pages/Collaboration";
import JoinUs from "./pages/JoinUs";
import CANlock from "./pages/CANlock";
import Drone from "./pages/Drone";
import SGDBeyond from "./pages/SGDBeyond";
import NutriNov from "./pages/NutriNov";
import PoppyConception from "./pages/PoppyConception";
import PoppySimulation from "./pages/PoppySimulation";
import ASLDecoder from "./pages/ASLDecoder";
import AvionCargo from "./pages/AvionCargo";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
          <Route path="/canlock" element={<CANlock />} />
          <Route path="/drone" element={<Drone />} />
          <Route path="/sgd-beyond" element={<SGDBeyond />} />
          <Route path="/nutrinov" element={<NutriNov />} />
          <Route path="/poppy-conception" element={<PoppyConception />} />
          <Route path="/poppy-simulation" element={<PoppySimulation />} />
          <Route path="/asl-decoder" element={<ASLDecoder />} />
          <Route path="/avion-cargo" element={<AvionCargo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
