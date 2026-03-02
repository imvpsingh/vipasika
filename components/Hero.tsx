import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Rocket, ArrowRight, Zap, Cpu, Sparkles, GraduationCap, Briefcase, Trophy } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const words = ["LEARNING", "EARNING", "GROWING", "SUCCEEDING"];

  // Word Animation Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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
              Transforming Students // ViPaSiKa
          </span>
        </motion.div>

        {/* 2. Word Animation Heading */}
        <div className="mb-8 md:mb-10 w-full px-2">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10vw] sm:text-7xl md:text-8xl lg:text-[8rem] font-black leading-[0.9] tracking-tighter text-white uppercase italic"
          >
            From Learning <br />
            <span className="flex items-center justify-center gap-4">
              To 
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-600 via-white to-indigo-500 bg-clip-text text-transparent"
                >
                  {words[index]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <p className="mt-4 text-blue-400 font-bold text-xs md:text-xl uppercase tracking-widest">
            Get Mentored. Get Certified. Get Ahead.
          </p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 md:mt-8 max-w-xs md:max-w-3xl mx-auto text-gray-500 text-[10px] md:text-base font-medium uppercase tracking-tight md:tracking-normal leading-relaxed"
          >
            A structured internship pathway built to transform students into industry-ready professionals. 
            Gain <span className="text-white">hands-on experience</span> through live projects and expert mentorship.
          </motion.p>
        </div>

        {/* 3. Action Hub */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-6 w-full sm:w-auto px-6 sm:px-0">
          <motion.button 
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto group bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            EXPLORE PROGRAMS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button 
            onClick={() => navigate('/internship')}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl border border-white/10 text-white font-black text-sm md:text-lg flex items-center justify-center gap-3 backdrop-blur-md transition-all hover:bg-white/5"
          >
            JOIN NOW <Sparkles size={18} className="text-blue-500" />
          </motion.button>
        </div>

        {/* 4. Infinite Running Line */}
        <div className="mt-16 md:mt-24 w-full overflow-hidden opacity-20 select-none pointer-events-none border-y border-white/5 py-3 md:py-4">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="whitespace-nowrap flex gap-10 md:gap-20 text-[9px] md:text-xs font-black text-gray-500 uppercase tracking-[0.6em] md:tracking-[1em]"
          >
            <span>Expert Mentorship // Live Projects // Industry Certification // Performance Awards // Career Support // Skill Mastery //</span>
            <span>Expert Mentorship // Live Projects // Industry Certification // Performance Awards // Career Support // Skill Mastery //</span>
          </motion.div>
        </div>
      </div>

      {/* --- STATS FOOTER --- */}
      <div className="mt-auto w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {[
            { title: "Students Trained", val: "40,000+", icon: <GraduationCap size={18} /> },
            { title: "Industry Projects", val: "50+", icon: <Briefcase size={18} /> },
            { title: "Performance Award", val: "₹3,000", icon: <Trophy size={18} /> },
          ].map((stat, i) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-1 md:gap-2"
            >
                <div className="text-blue-500 opacity-60 mb-1">{stat.icon}</div>
                <div className="text-[7px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">{stat.title}</div>
                <div className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;