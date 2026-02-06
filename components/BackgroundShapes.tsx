
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Glow Shapes */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[160px]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 60, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] -right-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] bg-cyan-600/15 rounded-full blur-[180px]"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default BackgroundShapes;
