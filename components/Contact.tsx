import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Phone, Mail, MapPin, Loader2, 
  MessageSquare, User, Globe, Instagram, Linkedin, Twitter, CheckCircle2, AlertCircle 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // setStatus aur setResponseMsg aapke state hooks hone chahiye
    // const [status, setStatus] = useState('idle');
    // const [responseMsg, setResponseMsg] = useState('');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('userName'), // Ensure name="userName" in input
      email: formData.get('userEmail'), // Ensure name="userEmail" in input
      whatsapp: formData.get('whatsapp'), // Ensure name="whatsapp" in input
      message: formData.get('message'), // Ensure name="message" in textarea
      timestamp: new Date().toISOString()
    };

    try {
      // Fix: Added missing quote in the URL
      const response = await fetch('https://sunilnath.com/vp/vipasika/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setResponseMsg(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "Server rejected the protocol.");
      }
    } catch (err: any) {
      setStatus('error');
      setResponseMsg(err.message || "Terminal Error: Connection to Nodes failed.");
    } finally {
      setLoading(false);
      // Auto-reset message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setResponseMsg('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-6">
            <div className="w-10 h-[2px] bg-blue-500" /> Digital Gateway
          </motion.div>
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            Let’s Build Your <br />
            <span className="text-gray-700 italic">Digital Giant.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side: Contact Cards */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-12">
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-md">
              The blueprint of your success starts with a single message. Reach out for a specialized tech audit.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={22} />, label: "Email Us", val: "support@vipasika.in", color: "blue" },
                { icon: <Phone size={22} />, label: "WhatsApp Support", val: "+91 766-566-5532", color: "green" },
                { icon: <MapPin size={22} />, label: "Global HQ", val: "Jaipur, Rajasthan, IND.", color: "purple" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                  <div className={`w-12 h-12 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 group-hover:bg-${item.color}-500 group-hover:text-white transition-all shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white text-lg font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex gap-4">
              {[Instagram, Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Pro Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[120px] pointer-events-none" />

            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input name="userName" required placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">WhatsApp Contact</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 text-gray-600 group-focus-within:text-green-500 transition-colors" size={18} />
                    <input name="whatsapp" required type="tel" placeholder="9876543210" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input name="userEmail" required type="email" placeholder="john@company.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Project Architecture Brief</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <textarea name="message" required rows={4} placeholder="Describe your technical requirements..." className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] py-4 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all resize-none placeholder:text-gray-700" />
                </div>
              </div>

              {/* Dynamic Status Feedback */}
              <AnimatePresence>
                {status !== 'idle' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-2xl ${status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                  >
                    {status === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    <p className="text-sm font-bold tracking-tight">{responseMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                disabled={loading}
                className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-blue-500 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <Loader2 className="animate-spin" size={24} />
                    <span className="uppercase tracking-widest text-sm">Transmitting Data...</span>
                  </div>
                ) : (
                  <>INITIATE BRIEFING <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;