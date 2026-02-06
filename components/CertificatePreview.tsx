import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, Award, Share2, Cpu, Globe, Zap } from 'lucide-react';

const CertificatePreview: React.FC = () => {
  const features = [
    {
      icon: <Globe className="text-blue-500" size={20} />,
      title: "Global Validation",
      desc: "Linked to our secure digital node for worldwide verification."
    },
    {
      icon: <Zap className="text-blue-500" size={20} />,
      title: "Industry Standard",
      desc: "Recognized by tech firms for engineering excellence."
    },
    {
      icon: <Share2 className="text-blue-500" size={20} />,
      title: "Social Proof",
      desc: "One-click sharing to LinkedIn to boost your profile."
    }
  ];

  return (
    <section id="certificate" className="py-24 md:py-40 px-4 md:px-10 relative overflow-hidden bg-transparent">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 1. Simple Elite Title --- */}
        <div className="flex flex-col items-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic"
          >
            Premium <span className="text-blue-500">Certificate</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-blue-600 mt-4 rounded-full"
          />
        </div>

        {/* --- 2. Information & Proof Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 px-3 py-1 rounded-full text-blue-500 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={12} /> Trusted Credentials
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Our internship certificates are recognized across the industry, proving your 
                mastery in real-world engineering standards and high-performance development.
              </p>
            </div>

            {/* Feature Cards Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- 3. Original Certificate UI --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-6 flex justify-center perspective-1000"
          >
            <div className="relative w-full max-w-[440px] bg-white rounded-sm shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-1 overflow-hidden border-[8px] md:border-[12px] border-[#1e293b]">
              
              <div className="w-full h-full bg-white border-2 md:border-4 border-[#e2e8f0] p-6 md:p-10 flex flex-col items-center text-center relative">
                
                {/* Certificate Header */}
                <div className="flex flex-col items-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-2 shadow-lg">
                    <Cpu size={24} />
                  </div>
                  <h4 className="text-[#1e293b] font-black text-base md:text-lg tracking-tighter leading-none">
                    VIPASIKA 🦬
                    {/* <span className="text-blue-500 italic">.IT</span> */}
                  </h4>
                  <p className="text-[6px] md:text-[7px] font-bold uppercase tracking-[0.3em] text-gray-400">Solutions Excellence</p>
                </div>

                <p className="text-[#1e293b] font-serif text-[10px] md:text-base mb-1 tracking-[0.2em] md:tracking-[0.3em] font-black uppercase">
                  Certificate of Internship
                </p>
                <div className="w-16 md:w-20 h-[1.5px] md:h-[2px] bg-blue-600 mb-6" />
                
                <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-[0.2em] mb-2">This is to certify that</p>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1e293b] mb-1 italic tracking-tight">
                  Krishna Vardhan
                </h3>
                <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent mx-auto mb-6" />
                
                <p className="text-gray-600 text-[9px] md:text-[10px] leading-relaxed mb-8 px-2 md:px-4">
                  For successfully completing a <strong>6-Month Advanced Full-Stack Development</strong> track. During this tenure, the candidate demonstrated exceptional technical skills as per Vipasika Engineering Standards.
                </p>

                <div className="md:mt-auto w-full pt-4 md:pt-0">
                  <div className="flex justify-between items-end gap-2 mb-4">
                    <div className="text-center flex-1 border-r border-gray-100 pr-2">
                      <div className="h-6 md:h-8 flex items-center justify-center">
                        <img src="https://signature.freefire-name.com/img.php?f=10&t=VP Singh" alt="Sign" className="max-w-full h-full object-contain opacity-70" />
                      </div>
                      <div className="w-full h-[1px] bg-gray-200 mb-1" />
                      <p className="text-[5px] md:text-[7px] font-black text-gray-800 uppercase">CTO & Founder</p>
                    </div>

                    <div className="flex flex-col items-center shrink-0 px-2">
                      <div className="p-1 border border-blue-600/20 rounded-lg bg-blue-50">
                        <QrCode size={30} className="text-[#1e293b] md:w-[35px] md:h-[35px]" />
                      </div>
                      <p className="text-[5px] font-black text-blue-600 mt-1 uppercase">ID: VIT-2026-X89</p>
                    </div>

                    <div className="text-center flex-1 border-l border-gray-100 pl-2">
                      <div className="h-6 md:h-8" />
                      <div className="w-full h-[1px] bg-gray-200 mb-1" />
                      <p className="text-[5px] md:text-[7px] font-black text-gray-800 uppercase">Director</p>
                    </div>
                  </div>
                  
                  <p className="text-[6px] md:text-[8px] text-gray-400 font-medium">
                    Verify at <strong className="text-blue-500 underline">vipasika.it/verify</strong>
                  </p>
                </div>

                {/* Golden Seal */}
                <div className="absolute bottom-10 right-2 md:bottom-16 md:right-4 w-10 h-10 md:w-16 md:h-16 opacity-90 pointer-events-none">
                   <div className="w-full h-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 rounded-full shadow-lg flex items-center justify-center p-0.5 border-2 border-white/50">
                      <Award className="text-white drop-shadow-md w-6 h-6 md:w-10 md:h-10" />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatePreview;