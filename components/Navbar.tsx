import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, ArrowRight, Zap, Globe, ShieldCheck, LayoutGrid, Award, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: 'services', icon: <LayoutGrid size={18} />, isExternal: false },
    { name: 'Internship', href: 'internship', icon: <Zap size={18} />, isExternal: false },
    { name: 'Verification', href: '/verify', icon: <Award size={18} />, isExternal: true }, // New Page Link
    { name: 'Contact', href: 'contact', icon: <Mail size={18} />, isExternal: false },
  ];

  const handleNavAction = (link: any) => {
    setMobileMenu(false);
    if (link.isExternal) {
      // Navigates to the Verify Page
      navigate(link.href);
    } else {
      // If we are on verify page, go home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto rounded-2xl md:rounded-full px-4 md:px-10 py-3 flex justify-between items-center transition-all duration-500 border backdrop-blur-2xl ${scrolled ? 'bg-black/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'}`}>
        
        {/* Logo Section */}
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <motion.div 
              whileHover={{ rotate: 90 }}
              className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg"
            >
              <Cpu size={20} />
            </motion.div>
          </div>
          <span className="text-lg md:text-2xl font-black tracking-tighter text-white uppercase">
            VIPASIKA 🦬
            {/* <span className="text-blue-500 italic">.IT</span> */}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 bg-white/5 border border-white/5 p-1 rounded-full px-4 font-bold uppercase tracking-widest text-[10px]">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavAction(link)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-1/3 group-hover:left-1/3" />
              </button>
            ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all"
          >
            Start Journey <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-11 h-11 flex items-center justify-center text-white bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-all" 
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* --- MST MOBILE DRAWER --- */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] lg:hidden"
            />

            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-[#050505] z-[2001] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] border-l border-white/5 flex flex-col lg:hidden"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Cpu className="text-blue-500" size={24} />
                  <span className="text-sm font-black text-white tracking-widest uppercase italic">Navigator</span>
                </div>
                <button onClick={() => setMobileMenu(false)} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white active:bg-blue-600 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-2 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.button 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    key={link.name} onClick={() => handleNavAction(link)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-blue-600/10 hover:border-blue-500/20 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors">
                        {link.icon}
                      </div>
                      <span className="text-lg font-bold text-gray-300 group-hover:text-white uppercase tracking-tight">{link.name}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-600 group-hover:text-blue-500 transition-all" />
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto p-6 space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                    <Globe size={18} className="text-blue-500 mb-2" />
                    <span className="text-[8px] font-black text-gray-500 uppercase">Global Stage</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                    <ShieldCheck size={18} className="text-blue-500 mb-2" />
                    <span className="text-[8px] font-black text-gray-500 uppercase">Certified Hub</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { setMobileMenu(false); onOpenModal(); }}
                  className="w-full bg-blue-600 py-5 rounded-2xl font-black text-white flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg"
                >
                  <Zap size={18} fill="currentColor" /> GET STARTED
                </button>
                
                <p className="text-center text-[8px] text-gray-600 font-bold uppercase tracking-[0.3em]">
                  © Vipasika Protocol 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ChevronRight = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default Navbar;