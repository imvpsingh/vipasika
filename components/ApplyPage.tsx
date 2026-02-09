import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, ArrowLeft, Send,
  Sparkles, Zap, Laptop, Award, Cpu, Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ApplyPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Auto-scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const payload = {
      name: formData.get('userName'),
      whatsapp: formData.get('whatsapp'),
      track: formData.get('track'),
      plan: formData.get('tenure'), // Ye radio button se value uthayega
      timestamp: new Date().toLocaleString()
    };

    try {
      const response = await fetch('https://sunilnath.com/vp/vipasika/enternData.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === 'success') {
        alert("🚀 Application Encrypted & Sent to Vipasika Nodes!");
        navigate('/');
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (err) {
      alert("📡 Connection Failed. Node is unreachable.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden relative flex flex-col">

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* NAVBAR FIX: 
          Added pt-24 (mobile) and md:pt-32 (desktop) to ensure content 
          starts AFTER the global fixed navbar.
      */}
      <nav className="relative z-[100] pt-24 md:pt-32 px-6 md:px-10 flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all font-black text-[10px] uppercase tracking-widest"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back Home
        </button>
        <div className="flex items-center gap-2 opacity-50">
           <Cpu size={16} className="text-blue-500" />
           <span className="font-black tracking-tighter uppercase italic text-xs">Vipasika<span className="text-blue-500">.IT</span></span>
        </div> */}
      </nav>

      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: CONTENT & PRICE TAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 space-y-8 md:space-y-12"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-500 text-[9px] font-black uppercase tracking-widest">
                <Sparkles size={12} /> Enrollment Node: 2026.01
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter leading-[0.9] uppercase">
                Build the <br /> <span className="text-blue-600">Future.</span>
              </h1>

              {/* Pricing Highlight Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-[1px] rounded-3xl inline-block shadow-xl shadow-blue-500/10">
                <div className="bg-[#030712] rounded-[1.7rem] px-6 py-4 flex items-center gap-6">
                  <div className="border-r border-white/10 pr-6">
                    <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Access Fee</p>
                    <p className="text-2xl md:text-3xl font-black text-white italic">₹199<span className="text-xs text-gray-500">/mo</span></p>
                  </div>
                  <p className="text-[10px] md:text-xs font-bold text-blue-400 uppercase leading-tight tracking-widest">
                    Subsidized <br /> Engineering Hub
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Laptop size={18} />, text: "Online / Remote" },
                { icon: <Award size={18} />, text: "Hardcopy Certificate" },
                { icon: <Zap size={18} />, text: "Elite Mentors" },
                { icon: <ShieldCheck size={18} />, text: "Verified Certificate" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-blue-500 shrink-0">{item.icon}</div>
                  <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-6 bg-[#080808] border border-white/10 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative"
          >
            <div className="relative z-10">
              <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase">Application Node</h2>
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Vipasika.IT Secure Session</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">Human Identifier</label>
                  <input
                    name="userName"
                    required
                    placeholder="Enter Full Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 md:py-5 px-6 text-white text-sm md:text-base focus:border-blue-500 outline-none transition-all placeholder:text-gray-800"
                  />
                </div>

                {/* WhatsApp Input */}
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">Communication (WhatsApp)</label>
                  <input
                    name="whatsapp"
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 md:py-5 px-6 text-white text-sm md:text-base focus:border-blue-500 outline-none transition-all placeholder:text-gray-800"
                  />
                </div>

                {/* Track Selection */}
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">Core Engineering Track</label>
                  <select
                    name="track"
                    required
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl py-4 md:py-5 px-6 text-white text-sm md:text-base focus:border-blue-500 outline-none appearance-none cursor-pointer"
                  >

                    <option value="" disabled selected>Target Track...</option>

                    <optgroup label="Development">
                      <option value="Frontend (React/Next.js)">Frontend (React/Next.js)</option>
                      <option value="Backend (PHP/Node)">Backend (PHP/Node)</option>
                      <option value="Full Stack (MERN)">Full Stack (MERN)</option>
                      <option value="App Dev (Flutter/Kotlin)">App Dev (Flutter/Kotlin)</option>
                    </optgroup>

                    <optgroup label="Automation & Tech">
                      <option value="Workflow Automation (n8n/Make)">Workflow Automation (n8n/Make)</option>
                      <option value="Python Automation/AI">Python Automation/AI</option>
                      <option value="Cyber Security">Cyber Security</option>
                    </optgroup>

                    <optgroup label="Marketing & Creative">
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO & Blogging">SEO & Blogging</option>
                      <option value="Digital Marketing/SMM">Digital Marketing/SMM</option>
                      <option value="Video Editing/Content Creation">Video Editing/Content Creation</option>
                    </optgroup>

                    <option value="Other">Other</option>

                  </select>
                </div>

                {/* Tenure/Duration Selection */}
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] ml-2">Duration / Subscription Plan</label>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      { l: "1 Month", p: "₹199" },
                      { l: "3 Months", p: "₹499" },
                      { l: "6 Months", p: "₹899" },
                      { l: "1 Year", p: "₹1599" }
                    ].map((item) => (
                      <label key={item.l} className="relative cursor-pointer group">
                        {/* Yahan name="tenure" lagana zaroori hai */}
                        <input type="radio" name="tenure" value={item.l} className="peer sr-only" required />
                        <div className="p-3 md:p-4 text-center rounded-2xl border border-white/5 bg-white/[0.01] peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all font-black text-[10px] md:text-xs uppercase text-gray-600 peer-checked:text-white">
                          {item.l} <br />
                          <span className="text-[8px] opacity-60 font-bold">{item.p}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 md:pt-6">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-white text-black hover:bg-blue-600 hover:text-white py-5 md:py-6 rounded-2xl md:rounded-full font-black text-base uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <>INITIATE ENROLLMENT <Send size={18} /></>}
                  </button>
                  <p className="text-[7px] md:text-[8px] text-gray-700 font-black uppercase text-center mt-6 tracking-[0.4em]">Vipasika IT Security Layer // 2026.44.X</p>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </main>

      <footer className="p-10 text-center opacity-10">
        <p className="text-[9px] font-black tracking-[0.5em] uppercase text-gray-500">Kota Node-324005 // VIPASIKA Protocol</p>
      </footer>
    </div>
  );
};

export default ApplyPage;