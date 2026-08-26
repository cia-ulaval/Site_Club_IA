import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Management from './pages/Management';
import Gallery from './pages/Gallery';
import FlapEEG from './pages/FlapEEG';
import F1Tenth from './pages/F1Tenth';
import Collaboration from './pages/Collaboration';
import JoinUs from './pages/JoinUs';
import CANlock from './pages/CANlock';
import Drone from './pages/Drone';
import SGDBeyond from './pages/SGDBeyond';
import NutriNov from './pages/NutriNov';
import PoppyConception from './pages/PoppyConception';
import PoppySimulation from './pages/PoppySimulation';
import ASLDecoder from './pages/ASLDecoder';
import AvionCargo from './pages/AvionCargo';
import Privacy from './pages/Privacy';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import PrivacyConsent, { useAnalyticsConsent } from './components/PrivacyConsent';

function App() {
  const analyticsConsent = useAnalyticsConsent();

  return (
    <Router>
      <div className="min-h-screen cia-page-bg">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/management" element={<Management />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/flapeeg" element={<FlapEEG />} />
            <Route path="/f1tenth" element={<F1Tenth />} />
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
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer onOpenPrivacyChoices={analyticsConsent.openSettings} />
        <ScrollToTopButton />
        {analyticsConsent.choice === 'granted' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        <PrivacyConsent
          choice={analyticsConsent.choice}
          isOpen={analyticsConsent.isOpen}
          onAccept={analyticsConsent.accept}
          onDecline={analyticsConsent.decline}
          onClose={analyticsConsent.close}
        />
      </div>
    </Router>
  );
}

export default App;
