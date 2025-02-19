import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FlappyEEG from "./pages/FlappyEEG";
import Footer from "./components/Footer";
import DecisionTree from "./pages/DecisionTree";
import MangaAI from "./pages/MangaAI";
import Lenia from "./pages/Lenia";
import F1Tenth from "./pages/F1Tenth";
import Managment from "./pages/Managment";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-red-800/20 to-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managment" element={<Managment />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/flappyeeg" element={<FlappyEEG />} />
          <Route path="/mangaai" element={<MangaAI />} />
          <Route path="/f1tenth" element={<F1Tenth />} />
          <Route path="/decisiontree" element={<DecisionTree />} />
          <Route path="/lenia" element={<Lenia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
