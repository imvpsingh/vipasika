import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, ShieldAlert, Loader2, QrCode, 
  CheckCircle2, Cpu, Globe, Share2, Search, Zap, Award, FileDown 
} from 'lucide-react';
import jsPDF from 'jspdf';

const VerifyPage: React.FC = () => {
  const [certId, setCertId] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'verified' | 'failed'>('idle');
  const [studentData, setStudentData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idFromURL = params.get('id');
    if (idFromURL) {
      setCertId(idFromURL.toUpperCase());
      performVerification(idFromURL.toUpperCase());
    }
  }, []);

  const performVerification = async (id: string) => {
    if (!id) return;
    setStatus('searching');
    const startTime = Date.now();

    try {
      const res = await fetch(`https://sunilnath.com/vp/vipasika/verify.php?id=${id}`);
      const data = await res.json();
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 3000 - elapsedTime);

      setTimeout(() => {
        if (data.found) {
          setStudentData(data.student);
          setStatus('verified');
        } else {
          setStatus('failed');
        }
      }, remainingTime);
    } catch (err) {
      setTimeout(() => setStatus('failed'), 3000);
    }
  };

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFillColor(3, 7, 18);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(59, 130, 246);
    doc.setFontSize(22);
    doc.text("VIPASIKA IT SOLUTIONS", 105, 40, { align: "center" });
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("OFFICIAL VERIFICATION RECEIPT", 105, 55, { align: "center" });
    doc.setDrawColor(59, 130, 246);
    doc.line(50, 60, 160, 60);
    doc.setFontSize(12);
    doc.text(`Student Name: ${studentData.name}`, 40, 80);
    doc.text(`Course/Track: ${studentData.track}`, 40, 95);
    doc.text(`Credential ID: ${certId}`, 40, 110);
    doc.text(`Status: AUTHENTICATED & VERIFIED`, 40, 125);
    doc.text(`Issue Date: ${studentData.date}`, 40, 140);
    doc.setTextColor(100, 100, 100);
    doc.text("This is a system-generated document for digital verification.", 105, 280, { align: "center" });
    doc.save(`Vipasika_Verify_${certId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30 overflow-x-hidden relative flex flex-col">
      
      {/* Background Tech Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* Yahan padding-top (pt-32) zaroori hai taaki global navbar 
          ke niche content dikhe bina kisi internal nav ke.
      */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-32 md:pt-44 px-4 pb-20">
        
        {/* Search Input System - Optimized for Mobile */}
        <div className="w-full max-w-2xl mx-auto mb-16 px-2">
          <form 
            onSubmit={(e) => { e.preventDefault(); performVerification(certId); }}
            className="relative group"
          >
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500">
               <Search size={20} />
            </div>
            <input 
              type="text"
              placeholder="ENTER CREDENTIAL ID..."
              value={certId}
              onChange={(e) => setCertId(e.target.value.toUpperCase())}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-full py-5 md:py-7 pl-14 pr-32 md:pr-40 text-white text-lg md:text-xl font-bold placeholder:text-gray-800 outline-none focus:border-blue-500/50 transition-all shadow-2xl"
            />
            <button 
              type="submit"
              disabled={status === 'searching'}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-5 md:px-10 py-3 md:py-5 rounded-xl md:rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-500 transition-all active:scale-95 shadow-xl"
            >
              {status === 'searching' ? <Loader2 className="animate-spin" size={18} /> : 'SEARCH'}
            </button>
          </form>
        </div>

        {/* --- Results Content Area --- */}
        <div className="w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* IDLE STATE */}
            {status === 'idle' && (
              <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: <QrCode size={20} />, title: "SCAN", desc: "Instant QR access." },
                  { icon: <Zap size={20} />, title: "INPUT", desc: "ID based lookup." },
                  { icon: <Award size={20} />, title: "VERIFY", desc: "Secure validation." }
                ].map((step, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">{step.icon}</div>
                    <h4 className="text-white font-black text-[10px] tracking-widest mb-1 uppercase">{step.title}</h4>
                    <p className="text-gray-600 text-[10px] font-bold">{step.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* SEARCHING (Min 3 Seconds) */}
            {status === 'searching' && (
              <motion.div key="searching" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-20">
                <div className="w-20 h-20 relative">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute inset-0 border-2 border-blue-500 border-t-transparent rounded-full" />
                  <Cpu size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" />
                </div>
                <p className="text-blue-500 font-black tracking-[0.5em] text-[10px] mt-8 animate-pulse uppercase italic">DECRYPTING PROTOCOL...</p>
              </motion.div>
            )}

            {/* SUCCESS - PREMIUM ID CARD VIEW */}
            {status === 'verified' && (
              <motion.div key="verified" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full px-2">
                <div className="bg-[#050505] border border-green-500/20 p-6 md:p-12 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden shadow-2xl">
                  
                  {/* Watermark Icon */}
                  <ShieldCheck className="absolute -right-10 -bottom-10 text-green-500/[0.03] rotate-12" size={320} />
                  
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left relative z-10">
                    <div className="shrink-0">
                      <div className="w-28 h-28 md:w-44 md:h-44 bg-green-500/5 rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center text-green-500 border border-green-500/10 shadow-inner">
                        <CheckCircle2 size={64} className="md:w-20 md:h-20" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-6 md:space-y-8 w-full">
                      <div className="space-y-3">
                        <span className="bg-green-500/10 text-green-500 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-500/20">
                          Verified Credential
                        </span>
                        <h2 className="text-3xl md:text-6xl font-black text-white italic tracking-tighter leading-tight uppercase">
                          {studentData?.name}
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                          <p className="text-gray-600 text-[10px] font-black uppercase mb-1">Track</p>
                          <p className="text-white font-bold text-sm md:text-base uppercase">{studentData?.track}</p>
                        </div>
                        <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                          <p className="text-gray-600 text-[10px] font-black uppercase mb-1">Issue Node</p>
                          <p className="text-white font-bold text-sm md:text-base uppercase">{studentData?.date}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button 
                          onClick={downloadReceipt}
                          className="flex-1 bg-white text-black py-4 md:py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95"
                        >
                          <FileDown size={18} /> Download PDF Receipt
                        </button>
                        <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-center text-center sm:text-left">
                           <p className="text-[8px] text-gray-600 font-black uppercase mb-1">REF ID</p>
                           <span className="text-[10px] font-black text-blue-500 font-mono tracking-tighter">{certId}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FAILED */}
            {status === 'failed' && (
              <motion.div key="failed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-6 p-12 bg-red-500/5 border border-red-500/20 rounded-[3rem] text-center">
                <ShieldAlert size={48} className="text-red-500" />
                <div>
                  <h3 className="text-2xl font-black text-white italic uppercase mb-2">Not Found</h3>
                  <p className="text-gray-500 text-sm max-w-xs">Credential ID is not registered in our secure ledger.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-[10px] font-black text-blue-500 border-b border-blue-500/40 pb-1 uppercase tracking-widest">Retry</button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      <footer className="p-10 text-center opacity-20">
        <p className="text-[9px] font-black tracking-[0.5em] uppercase text-gray-500">Rajasthan Node-324005 // VIPASIKA Protocol</p>
      </footer>
    </div>
  );
};

export default VerifyPage;