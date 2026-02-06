import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, User, Mail, Phone, ChevronRight, Loader2, 
  CheckCircle, Briefcase, UploadCloud, AlertCircle, Sparkles, CreditCard 
} from 'lucide-react';

interface InternModalProps {
  onClose: () => void;
}

const InternModal: React.FC<InternModalProps> = ({ onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    role: 'Full Stack Intern',
    duration: '1', // Default 1 Month
    resume: null as File | null
  });

  const [totalFee, setTotalFee] = useState(199);

  // --- Fee Calculation Logic ---
  useEffect(() => {
    const fees: { [key: string]: number } = {
      '1': 199,
      '3': 499,
      '6': 899,
      '12': 1599
    };
    setTotalFee(fees[formData.duration] || 199);
  }, [formData.duration]);

  // --- Fixed: handleFileChange Function ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validation: Only PDF and max 5MB
      if (selectedFile.type !== 'application/pdf') {
        setStatus('error');
        setResponseMsg("Please upload a valid PDF file.");
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        setStatus('error');
        setResponseMsg("File is too large. Max limit is 5MB.");
        return;
      }

      setFormData({ ...formData, resume: selectedFile });
      setStatus('idle'); // Clear previous errors if file is valid
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume) {
      setStatus('error');
      setResponseMsg("Professional CV/Resume is required.");
      return;
    }

    setStatus('submitting');
    
    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('email', formData.email);
    fd.append('whatsapp', formData.whatsapp);
    fd.append('role', formData.role);
    fd.append('duration', `${formData.duration} Month(s)`);
    fd.append('fee', `₹${totalFee}`);
    if (formData.resume) fd.append('resume', formData.resume);

    try {
      const res = await fetch('https://vipasika.com/api/intern', {
        method: 'POST',
        body: fd
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('success');
        setResponseMsg(result.message || "Application successfully transmitted to our engineering board.");
        setTimeout(onClose, 4000);
      } else {
        throw new Error(result.message || "Submission failed. Please check your data.");
      }
    } catch (err: any) {
      setStatus('error');
      setResponseMsg(err.message || "Connection timeout. Please try again later.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/90"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-8 md:p-12 relative shadow-2xl overflow-y-auto max-h-[95vh] custom-scrollbar"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-red-500/20 rounded-full text-gray-500 transition-all z-50">
          <X size={20} />
        </button>

        {status === 'success' ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-10 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
              <CheckCircle size={56} className="animate-pulse" />
            </div>
            <h3 className="text-4xl font-black text-white italic mb-4">Transmission Successful</h3>
            <p className="text-gray-400 text-lg font-medium mb-6">{responseMsg}</p>
            <div className="text-[10px] text-blue-500 font-black tracking-widest uppercase">Redirecting...</div>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-10">
              <div className="inline-flex p-4 rounded-3xl bg-blue-600/10 text-blue-500 mb-6"><Sparkles size={32} /></div>
              <h3 className="text-4xl font-black text-white italic tracking-tighter leading-none">Vipasika Talent <br/><span className="text-gray-700">Onboarding</span></h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 pl-14 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email Address" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 pl-14 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700" />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="relative group">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-green-500 transition-colors" size={18} />
                <input required value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} placeholder="WhatsApp Number" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 pl-14 text-white focus:border-green-500 outline-none transition-all placeholder:text-gray-700" />
              </div>

              {/* Selection Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-4 mb-2 block">Specialization</label>
                  <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-gray-400 font-bold appearance-none cursor-pointer focus:border-blue-500 outline-none transition-all">
                    <option className="bg-black text-white" value="frontend">Frontend Engineering (React/Next.js)</option>
<option className="bg-black text-white" value="fullstack">Full Stack Mastery (MERN Stack)</option>
<option className="bg-black text-white" value="app_dev">Native App Development (Flutter)</option>
<option className="bg-black text-white" value="backend_php">Backend Architecture (PHP/Laravel)</option>
<option className="bg-black text-white" value="ui_ux">UI/UX Design Systems</option>
<option className="bg-black text-white" value="cyber_sec">Cyber Security & Defense</option>
<option className="bg-black text-white" value="ai_ml">A.I. & Machine Learning</option>
                  </select>
                  <ChevronRight className="absolute right-5 bottom-4 text-gray-600 rotate-90" size={18} />
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-4 mb-2 block">Tenure Period</label>
                  <select value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-gray-400 font-bold appearance-none cursor-pointer focus:border-blue-500 outline-none transition-all">
                    <option value="1" className="bg-black">1 Month (Basic)</option>
                    <option value="3" className="bg-black">3 Months (Standard)</option>
                    <option value="6" className="bg-black">6 Months (Professional)</option>
                    <option value="12" className="bg-black">12 Months (Architect)</option>
                  </select>
                  <ChevronRight className="absolute right-5 bottom-4 text-gray-600 rotate-90" size={18} />
                </div>
              </div>

              {/* Dynamic Fee Highlight */}
              <div className="p-6 rounded-[2rem] bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 shadow-lg"><CreditCard size={24}/></div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Total Fee Amount</p>
                    <p className="text-white text-3xl font-black tracking-tighter italic">₹{totalFee}</p>
                  </div>
                </div>
                {/* <div className="text-right border-l border-white/5 pl-6">
                   <p className="text-[10px] font-bold text-blue-500 uppercase italic">Hardcopy Certified</p>
                   <p className="text-[9px] text-gray-600 font-bold uppercase">Included in plan</p>
                </div> */}
              </div>

              {/* Resume/PDF Upload */}
              <div onClick={() => fileInputRef.current?.click()} className="w-full bg-white/[0.01] border-2 border-dashed border-white/5 rounded-3xl p-6 text-center cursor-pointer hover:border-blue-500/30 transition-all group overflow-hidden">
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf" />
                <div className="flex items-center justify-center gap-4">
                  <UploadCloud className="text-gray-600 group-hover:text-blue-500 transition-colors" size={24} />
                  <span className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors truncate max-w-[200px]">
                    {formData.resume ? formData.resume.name : 'Upload Professional CV (PDF)'}
                  </span>
                </div>
              </div>

              {/* Error Alert Overlay */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-3 p-4 bg-red-500/10 text-red-400 border border-red-500/20 rounded-2xl text-[11px] font-black uppercase tracking-wider">
                    <AlertCircle size={16} /> {responseMsg}
                  </motion.div>
                )}
              </AnimatePresence>

             {/* Submit Button Section */}
<div className="pt-4 flex justify-center">
  <button 
    disabled={status === 'submitting'} 
    className={`
      group relative overflow-hidden transition-all duration-300 active:scale-95 disabled:opacity-60
      /* Mobile: Compact Width | Desktop: Comfortable Width */
      w-full md:max-w-[80%] 
      py-4 px-8 
      /* Cute Pill Shape */
      rounded-full 
      font-bold text-base md:text-lg
      /* Clean Blue Theme */
      bg-blue-600 text-white
      shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)]
      flex items-center justify-center gap-2
    `}
  >
    {status === 'submitting' ? (
      <>
        <Loader2 className="animate-spin" size={18} />
        <span className="tracking-tight text-sm">Processing...</span>
      </>
    ) : (
      <>
        <span>{formData.duration === '1' ? 'Start Journey' : 'Confirm Enrollment'}</span>
        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </>
    )}

    {/* Subtle Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />
  </button>
</div>

{/* Minimal Security Badge */}
<div className="mt-4 text-center">
  <p className="text-[10px] text-gray-500 font-medium flex items-center justify-center gap-1 opacity-60">
     <CheckCircle size={10} className="text-blue-500" /> Secure checkout powered by Vipasika
  </p>
</div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default InternModal;