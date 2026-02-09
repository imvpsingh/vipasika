import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Rocket, ArrowRight, Zap, Cpu, Globe, MousePointer2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-32 pb-10 overflow-hidden bg-[#030712] flex flex-col items-center justify-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] md:h-[600px] bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full opacity-50" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* 1. Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-flex items-center gap-2 md:gap-3 bg-black/40 border border-white/10 px-4 md:px-6 py-2 rounded-full backdrop-blur-xl mb-6 md:mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-400">
             Protocol V2.0 // Active
          </span>
        </motion.div>

        {/* 2. Mega Heading: Added responsive font sizes to prevent overflow */}
        <div className="mb-8 md:mb-10 w-full px-2">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] tracking-tighter text-white uppercase italic"
          >
            Engineering <br />
            <span className="bg-gradient-to-r from-blue-600 via-white to-indigo-500 bg-clip-text text-transparent">
              Tomorrow.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:mt-8 max-w-xs md:max-w-xl mx-auto text-gray-500 text-[10px] md:text-lg font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] leading-relaxed"
          >
            Empowering Bharat's talent with <span className="text-white border-b border-blue-500/50">World-Class</span> Engineering ecosystems.
          </motion.p>
        </div>

        {/* 3. Action Hub: Stacked on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-6 w-full sm:w-auto px-6 sm:px-0">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            INITIATE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button 
            onClick={() => navigate('/internship')}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl border border-white/10 text-white font-black text-sm md:text-lg flex items-center justify-center gap-3 backdrop-blur-md transition-all hover:bg-white/5"
          >
            JOIN NODES <Sparkles size={18} className="text-blue-500" />
          </motion.button>
        </div>

        {/* 4. Infinite Running Line: Adjusted speed and spacing for mobile */}
        <div className="mt-16 md:mt-24 w-full overflow-hidden opacity-20 select-none pointer-events-none border-y border-white/5 py-3 md:py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="whitespace-nowrap flex gap-10 md:gap-20 text-[9px] md:text-xs font-black text-gray-500 uppercase tracking-[0.6em] md:tracking-[1em]"
          >
            <span>Frontend Engineering // Backend Architecture // Cyber Security // AI Automation // Cloud Infrastructure // Distributed Systems //</span>
            <span>Frontend Engineering // Backend Architecture // Cyber Security // AI Automation // Cloud Infrastructure // Distributed Systems //</span>
          </motion.div>
        </div>
      </div>

      {/* --- TRUST FOOTER --- */}
      <div className="mt-auto w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            { title: "Sovereign", val: "BHARAT-FIRST", icon: <Shield size={18} /> },
            { title: "Velocity", val: "LATEST STACK", icon: <Zap size={18} /> },
            { title: "Standard", val: "ENTERPRISE", icon: <Cpu size={18} /> },
            { title: "Delivery", val: "GLOBAL NODES", icon: <Rocket size={18} /> }
          ].map((stat, i) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 md:p-5 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-1 md:gap-2"
            >
               <div className="text-blue-500 opacity-60 mb-1">{stat.icon}</div>
               <div className="text-[7px] md:text-[8px] font-black text-gray-500 uppercase tracking-widest">{stat.title}</div>
               <div className="text-[9px] md:text-xs font-bold text-white uppercase">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;