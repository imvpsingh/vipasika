import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, Code, ShieldCheck, Database, Brain, Zap, 
  ArrowUpRight, X, CheckCircle, Send, Phone, User, 
  MessageSquare, Loader2, Sparkles
} from 'lucide-react';

// 1. Enhanced Data with Deep Insights
const serviceData = [
  {
    id: 'cloud',
    title: 'Bharat Cloud Core',
    desc: 'Localized high-availability clusters with AWS/Azure integration, ensuring data sovereignty.',
    icon: <Cloud />,
    color: '#3b82f6',
    tag: 'Infrastructure',
    detailedData: {
      hero: "Sovereign Cloud Infrastructure for a Digital Bharat.",
      features: ["Multi-region Failover", "Tier-4 Data Centers", "Regulatory Compliance", "Hybrid Strategy"],
      stack: ["AWS", "Azure", "Terraform", "Kubernetes"],
      results: "99.99% uptime for 20+ Indian Enterprises."
    }
  },
  {
    id: 'dev',
    title: 'Full-Stack Forge',
    desc: 'Engineered for Bharat-scale traffic. High-performance ecosystems for millions of users.',
    icon: <Code />,
    color: '#a855f7',
    tag: 'Development',
    detailedData: {
      hero: "High-Performance Applications Built for Mass Scale.",
      features: ["Microservices", "Real-time WebSockets", "PWA/Mobile-First", "API First"],
      stack: ["React", "Node.js", "Next.js", "Python"],
      results: "Handled 1M+ concurrent requests for giants."
    }
  },
  {
    id: 'sec',
    title: 'Cyber Kavach',
    desc: 'Military-grade encryption and threat intelligence protecting modern digital assets.',
    icon: <ShieldCheck />,
    color: '#06b6d4',
    tag: 'Security',
    detailedData: {
      hero: "Proactive Defense for the Modern Threat Landscape.",
      features: ["Zero Trust", "Vulnerability Auditing", "E2E Encryption", "DDoS Protection"],
      stack: ["Sentinel", "Crowdstrike", "Cloudflare", "OpenSSL"],
      results: "Zero-breach record across all managed sites."
    }
  },
  {
    id: 'data',
    title: 'Insight Engine',
    desc: 'Transforming raw data into strategic goldmines using advanced ETL pipelines.',
    icon: <Database />,
    color: '#10b981',
    tag: 'Data',
    detailedData: {
      hero: "Turn Complexity into Profitable Clarity.",
      features: ["Real-time Analytics", "ETL Automation", "Data Lakehouse", "Predictive BI"],
      stack: ["Snowflake", "Databricks", "Apache Spark", "Tableau"],
      results: "Decision speed improved by 40% for clients."
    }
  },
  {
    id: 'ai',
    title: 'A.I. Satyamev',
    desc: 'Neural networks and LLMs trained for local context to automate complex logic.',
    icon: <Brain />,
    color: '#ec4899',
    tag: 'Intelligence',
    detailedData: {
      hero: "Intelligent Automation with Local Context.",
      features: ["LLM Training", "Computer Vision", "NLP", "Indic Language AI"],
      stack: ["PyTorch", "OpenAI", "TensorFlow", "HuggingFace"],
      results: "60% reduction in manual operation tasks."
    }
  },
  {
    id: 'devops',
    title: 'Velocity DevOps',
    desc: 'Indigenous CI/CD frameworks that cut deployment friction and time-to-market.',
    icon: <Zap />,
    color: '#f97316',
    tag: 'Automation',
    detailedData: {
      hero: "Deploy Faster, Scale Safer.",
      features: ["Automated Testing", "IaC", "Continuous Monitoring", "Chaos Engineering"],
      stack: ["GitHub Actions", "Docker", "Jenkins", "Ansible"],
      results: "Deployment cycles slashed to minutes."
    }
  }
];

const Services: React.FC = () => {
  const [selected, setSelected] = useState<typeof serviceData[0] | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- API Submission Handler ---
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const payload = {
      name: formData.get('userName'),
      whatsapp: formData.get('whatsapp'),
      concern: formData.get('concern'),
      requestedService: selected?.title,
      timestamp: new Date().toISOString()
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert("Briefing Received! Our Lead Architect will contact you on WhatsApp.");
        setIsFormOpen(false);
      }
    } catch (err) {
      alert("Submission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="services" className="py-24 md:py-40 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-28 gap-10">
  
  {/* 1. Left: Main Heading */}
  <div className="max-w-2xl w-full">
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      className="flex items-center gap-2 text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-6"
    >
      <div className="w-10 h-[2px] bg-blue-500" /> Professional Solutions
    </motion.div>
    
    <motion.h2 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
    >
      Engineering <br /> <span className="text-gray-700">Competencies.</span>
    </motion.h2>
  </div>

  {/* 2. Middle: Custom Logo/Image Slot */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="relative flex-1 flex justify-center items-center group"
  >
    {/* Placeholder for your Image/Logo */}
    <div className="relative w-32 h-32 md:w-48 md:h-48">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-600/20 blur-[50px] rounded-full group-hover:bg-blue-600/30 transition-all duration-500" />
      
      {/* Custom Image/SVG logic */}
      <div className="relative z-10 w-full h-full border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        {/* Replace this <img> tag with your real logo later */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" 
          alt="Tech Logo" 
          className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter grayscale group-hover:grayscale-0"
        />
        
        {/* Decorative corner lines */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-500/50" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-500/50" />
      </div>
    </div>
  </motion.div>

  {/* 3. Right: Description Text */}
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="max-w-xs w-full lg:text-right"
  >
    <p className="text-gray-500 font-medium text-lg leading-relaxed">
      Delivering elite innovation with <span className="text-white">Indian precision</span> for the global enterprise stage.
    </p>
    <div className="mt-4 h-[1px] w-full bg-gradient-to-r lg:bg-gradient-to-l from-blue-500/50 to-transparent" />
  </motion.div>

</div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelected(item)}
              className="group cursor-pointer relative p-[1px] rounded-[2.5rem] overflow-hidden bg-white/5"
            >
              <div className="relative h-full bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-10 z-10 flex flex-col border border-white/5 group-hover:border-blue-500/50 transition-all">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 30 })}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 group-hover:text-white">{item.tag}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-600 group-hover:text-blue-500">EXPLORE MORE</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600">
                    <ArrowUpRight size={18} className="text-white group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
{/* --- MODAL 1: SERVICE DETAILS --- */}
<AnimatePresence>
  {selected && !isFormOpen && (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-[10000] flex items-end md:items-center justify-center backdrop-blur-2xl bg-black/80"
    >
      <motion.div 
        initial={{ y: "100%" }} 
        animate={{ y: 0 }} 
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        // pt-20 (mobile) aur md:pt-0 (desktop) Navbar gap ke liye
        className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] bg-[#0d0d0d] rounded-t-[3rem] md:rounded-[3rem] border-x border-t border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row mt-20 md:mt-0"
      >
        <button 
          onClick={() => setSelected(null)} 
          className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white z-[70] active:scale-90"
        >
          <X size={20} />
        </button>
        
        <div className="w-full md:w-1/3 p-6 md:p-10 bg-white/5 flex flex-row md:flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 sticky top-0 z-50 backdrop-blur-3xl shrink-0">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: selected.color }}>
             {React.cloneElement(selected.icon as React.ReactElement, { className: "w-6 h-6 md:w-10 md:h-10 text-white" })}
          </div>
          <div className="ml-4 md:ml-0 md:mt-8">
            <h2 className="text-xl md:text-3xl font-black text-white leading-tight uppercase italic">{selected.title}</h2>
            <p className="text-blue-500 font-black uppercase text-[10px] tracking-widest">{selected.tag}</p>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-16 overflow-y-auto custom-scrollbar">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-8 pr-10 leading-tight">{selected.detailedData.hero}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {selected.detailedData.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <CheckCircle className="text-blue-500 shrink-0" size={18} />
                <span className="text-gray-300 font-bold text-xs md:text-sm">{feat}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 shadow-xl active:scale-95 transition-all"
          >
            TALK TO AN ARCHITECT
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* --- MODAL 2: ARCHITECT CONTACT FORM --- */}
<AnimatePresence>
  {isFormOpen && (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      // z-index 20000 ensures it's above everything
      className="fixed inset-0 z-[20000] flex items-end md:items-center justify-center backdrop-blur-3xl bg-black/95"
    >
      <motion.div 
        initial={{ y: "100%" }} 
        animate={{ y: 0 }} 
        exit={{ y: "100%" }}
        // mt-24 ensures it stays below global navbar even on mobile
        className="relative w-full max-w-lg h-[85vh] md:h-auto bg-[#0d0d0d] border-t md:border border-white/10 rounded-t-[3rem] md:rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-y-auto mt-24 md:mt-0"
      >
        <button 
          onClick={() => setIsFormOpen(false)} 
          className="absolute top-6 right-6 p-3 bg-white/5 rounded-full text-gray-400 z-50"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-10 mt-6">
          <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Briefing Node</h2>
          <p className="text-gray-500 text-sm">Target: <span className="text-blue-500 font-bold">{selected?.title}</span></p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <input name="userName" required placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 outline-none" />
          <input name="whatsapp" required type="tel" placeholder="WhatsApp Number" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 outline-none" />
          <textarea name="concern" required rows={3} placeholder="Project vision..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 outline-none resize-none" />
          <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 shadow-xl active:scale-95 transition-all">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "CONFIRM PROTOCOL"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Services;