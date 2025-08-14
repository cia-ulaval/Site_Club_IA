import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Forum
import { ForumRoutes } from "./features/forum";

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/forum/*" element={<ForumRoutes />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
          {/* Vercel Analytics */}
          <Analytics />
          <SpeedInsights />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
