import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import InternModal from './components/InternModal';
import CertificatePreview from './components/CertificatePreview';
import LegalPages from './components/LegalPages';
import VerifyPage from './components/VerifyPage'; // Make sure path is correct
import ApplyPage from './components/ApplyPage';
import ScrollToTop from './components/ScrollToTop';

// --- MAIN LANDING PAGE COMPONENT ---
// Ise alag kiya hai taaki routing clean rahe
const LandingPage = ({ onOpenModal, setActiveLegal }: any) => (
  <main className="relative z-10">
    <Hero onOpenModal={onOpenModal} />
    <Services />
    <CertificatePreview />
    <Internship onOpenModal={onOpenModal} />
    <Contact />
  </main>
);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLegal, setActiveLegal] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router> {/* <-- SABSE ZAROORI: Poora app Router ke andar hona chahiye */}
      <div className="relative min-h-screen selection:bg-blue-500/30 bg-[#030712] text-white overflow-x-hidden">
        <BackgroundShapes />
        <ScrollToTop />

        {/* Navbar ab Router ke andar hai, toh useNavigate error nahi dega */}
        <Navbar onOpenModal={() => setIsModalOpen(true)} />

        {/* --- ROUTING SYSTEM --- */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/internship" element={<ApplyPage />} /> {/* Ye wala add karo */}
        </Routes>

        <Footer setActiveLegal={setActiveLegal} />

        {/* --- MODAL SYSTEM --- */}
        <AnimatePresence>
          {/* Internship Modal */}
          {isModalOpen && (
            <InternModal onClose={() => setIsModalOpen(false)} />
          )}

          {/* Legal Popup Screens */}
          {activeLegal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-10 backdrop-blur-3xl bg-black/90"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                className="relative w-full max-w-4xl bg-[#0d0d0d] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveLegal(null)}
                  className="absolute top-6 right-6 p-4 bg-white/5 hover:bg-red-500/20 rounded-full text-white z-[60] transition-all"
                >
                  <X size={24} />
                </button>

                <div className="max-h-[80vh] overflow-y-auto p-6 md:p-12 custom-scrollbar">
                  <LegalPages activeSection={activeLegal} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;