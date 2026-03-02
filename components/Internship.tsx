import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, CheckCircle2, Award, Users, 
  ArrowRight, Sparkles, Truck, Globe, Rocket, 
  Clock
} from 'lucide-react';

interface InternshipProps {
  onOpenModal: () => void;
}

const Internship: React.FC<InternshipProps> = ({ onOpenModal }) => {
  const navigate = useNavigate();
  const features = [
    { 
      icon: <Clock className="w-6 h-6 text-blue-500" />, 
  title: 'Daily 2 Hour Work', 
  desc: 'Flexible micro-internship model designed for students. Contribute just 2 hours daily to master high-end engineering.'
},
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: '100% Online/Remote', 
      desc: 'Work from anywhere in India with flexible hour-based tracking.' 
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: '1 to 12 Month Plans', 
      desc: 'Choose your track: Foundation (1M) to Master Architect (12M).' 
    },
  ];

  return (
    <section id="internship" className="py-24 px-4 md:px-10 relative overflow-hidden">
      {/* Background Deep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Banner Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-3xl md:rounded-[4rem] mb-20 shadow-2xl"
        >
          <div className="absolute -right-20 -top-20 h-96 w-96 bg-blue-600/20 blur-[100px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 p-10 md:p-20">
            <div className="shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.4)] animate-float">
                <Rocket size={50} />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <p className="text-3xl md:text-5xl lg:text-6xl font-black italic leading-tight tracking-tighter text-white mb-6">
                "We don't just train. We <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">deliver</span> excellence to your door."
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest">Digital + Physical Credentials</span>
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold uppercase tracking-widest">Pan-India Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text & Price Info */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">Vipasika Incubation Program</span>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                Scale Your <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent italic">Legacy Today.</span>
              </h2>
            </div>

            <p className="text-gray-400 text-xl md:text-2xl max-w-xl leading-relaxed font-medium">
              Join India's most flexible online internship. Tailored tracks from 1 to 12 months with verified hardcopy certificates.
            </p>

            {/* Price Highlight Badge */}
            <div className="inline-flex items-center gap-6 p-6 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
               <div className="text-center border-r border-white/10 pr-6">
                 <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Starting At</p>
                 <p className="text-white text-4xl font-black">₹199<span className="text-sm text-gray-500 font-bold">/m</span></p>
               </div>
               <div className="text-left">
                 <p className="text-blue-400 font-bold text-sm">Most Affordable</p>
                 <p className="text-gray-500 text-xs">Premium Tech Mentorship</p>
               </div>
            </div>
            
           <div className="pt-8 flex justify-center md:justify-start">
   <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/internship')}
                className="bg-white text-black px-10 py-5 rounded-full font-black text-xl flex items-center gap-4 hover:bg-blue-600 hover:text-white transition-all shadow-xl"
              > Start Journey<ArrowRight size={20} />
              </motion.button>
</div>
          </motion.div>

          {/* Feature Grid */}
          <div className="lg:col-span-5 space-y-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[3rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.07] transition-all duration-500 flex gap-6 items-center"
              >
                <div className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-blue-600/10 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm font-medium leading-tight">{f.desc}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Special Highlight Card */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="p-8 rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
            >
               <div className="flex items-center gap-4 mb-2">
                 <Sparkles size={24} />
                 <p className="font-black italic tracking-tight">VIPASIKA EXCLUSIVE</p>
               </div>
               <p className="text-sm opacity-90 font-medium">Get real-world experience on projects that matter. Verified by top industry architects.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;