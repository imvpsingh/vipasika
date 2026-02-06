import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Shield, Rocket, ArrowRight, Zap, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="home" className="relative pt-32 md:pt-48 pb-16 md:pb-32 px-4 md:px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center">
      
      {/* Background Decorative Elements - Upper Space fix */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-7xl w-full"
      >
        {/* Modern Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-2.5 rounded-full text-blue-400 text-[10px] md:text-xs font-black mb-10 tracking-[0.3em] uppercase backdrop-blur-md shadow-2xl"
        >
          <div className="relative">
            <Zap size={14} className="fill-current animate-pulse" />
            <div className="absolute inset-0 bg-blue-400 blur-md opacity-50 animate-pulse" />
          </div>
          Empowering Bharat's Digital Sovereignty
        </motion.div>
        
       {/* The Emotional Mega Heading */}
<div className="flex flex-col items-center mb-10 md:mb-16">
  {/* Sub-text for Opportunity */}
  <motion.span 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-blue-500 font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
  >
    Your Talent, Our Global Stage.
  </motion.span>

  <h1 className="relative inline-block text-[2.8rem] sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.95] text-white">
    {/* Line 1: Empowering */}
    <span className="block mb-2">
      UNLOCKING <span className="text-gray-500 italic">INDIA'S</span>
    </span>
    
    {/* Line 2: Hidden Potential */}
    <span className="relative inline-block bg-gradient-to-r from-blue-400 via-indigo-500 to-white bg-clip-text text-transparent uppercase">
      HIDDEN GENIUS.
      {/* Mobile underline effect */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        className="absolute -bottom-2 left-0 h-[4px] md:h-[8px] bg-blue-600/30 rounded-full sm:hidden" 
      />
    </span>
  </h1>

  {/* Description for those seeking opportunity */}
  <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-sm md:text-xl font-medium leading-relaxed px-6">
    Ab world-class experience ke liye videsh jane ki zaroorat nahi. We provide the 
    <span className="text-white"> Missing Opportunity </span> 
    to every aspiring tech-leader in Bharat.
  </p>
</div>
        {/* Pro-Level Responsive Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
          {/* Main Action - Pill Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-black text-xl overflow-hidden transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3"
          >
             EXPLORE 
             <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight size={18} />
             </div>
          </motion.button>
          
          {/* Secondary Action */}
          <motion.button 
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className="w-full sm:w-auto backdrop-blur-xl bg-white/5 border border-white/10 text-white px-12 py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 transition-all"
          >
            JOIN VIPASIKA <ChevronRight size={20} className="text-blue-500" />
          </motion.button>
        </div>
      </motion.div>

      {/* Trust Badges - Realistic & Pro */}
      <div className="mt-24 md:mt-40 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 opacity-70 px-6 max-w-6xl mx-auto border-t border-white/5 pt-12">
        {[
          { icon: <Globe size={18} />, text: 'Global Delivery' },
          { icon: <Shield size={18} />, text: 'Enterprise Grade' },
          { icon: <Rocket size={18} />, text: 'Make In India' },
          { icon: <Sparkles size={18} />, text: 'Future Ready' }
        ].map((item, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center lg:items-start gap-4 text-gray-300 font-black uppercase text-[10px] md:text-xs tracking-[0.4em]"
          >
            <div className="text-blue-500 bg-blue-500/10 p-3 rounded-2xl">{item.icon}</div>
            {item.text}
          </div>
        ))}
      </div>

      {/* Smoother Section Transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;