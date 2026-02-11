import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, RefreshCcw, Scale, Lock, Gavel, ScrollText } from 'lucide-react';

interface LegalProps {
  activeSection?: string | null;
}

const LegalPages: React.FC<LegalProps> = ({ activeSection }) => {
  return (
    <section className="py-8 md:py-16 px-4 bg-transparent text-gray-300">
      <div className="max-w-4xl mx-auto space-y-8 md:y-12">
        
        {/* Dynamic Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6"
          >
            <ScrollText size={12} /> Compliance Document
          </motion.div>
          
          {/* Mobile optimized title: Added break-words and responsive text size */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic leading-[1.1] break-words overflow-hidden">
            {activeSection ? activeSection.replace('-', ' ') : 'Legal Framework'}
          </h2>
          
          <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase">
            VIPASIKA IT SOLUTIONS <span className="text-blue-500">//</span> EST. 2026
          </p>
        </div>

        {/* 1. Terms of Service */}
        {(!activeSection || activeSection === 'terms') && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 md:gap-5 mb-8 md:mb-10 text-blue-500">
              <div className="p-3 md:p-4 bg-blue-500/10 rounded-xl md:rounded-2xl shrink-0">
                <Scale className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase break-words">Terms of Service</h3>
            </div>
            
            <div className="space-y-6 md:space-y-8 text-xs md:text-base leading-relaxed text-gray-400 font-medium">
              {[
                {id: "01", title: "Program Eligibility", content: "Enrollment is strictly limited to students and professionals seeking technical competency. Verification of academic credentials may be requested."},
                {id: "02", title: "Access Protocol", content: "Credentials will be provisioned within 24-48 hours post-payment. Account sharing or unauthorized distribution of assets is strictly prohibited."},
                {id: "03", title: "Certification Criteria", content: "Official certification is contingent upon the successful deployment of assigned enterprise-grade projects and meeting internal assessment benchmarks."},
                {id: "04", title: "Professional Integrity", content: "Any instance of plagiarism, asset theft, or breach of conduct will result in immediate termination without prior notice."}
              ].map((item) => (
                <div key={item.id} className="flex gap-3 md:gap-5">
                  <span className="text-blue-500 font-black text-sm md:text-xl opacity-40 italic shrink-0">{item.id}</span>
                  <p><strong className="text-white">{item.title}:</strong> {item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. Refund & Cancellation */}
        {(!activeSection || activeSection === 'refund') && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 md:gap-5 mb-8 md:mb-10 text-green-500">
              <div className="p-3 md:p-4 bg-green-500/10 rounded-xl md:rounded-2xl shrink-0">
                <RefreshCcw className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase break-words">Refund & Policy</h3>
            </div>
            <div className="space-y-6 md:space-y-8 text-xs md:text-base leading-relaxed text-gray-400 font-medium">
              <div className="flex gap-3 md:gap-5">
                <span className="text-green-500 font-black text-sm md:text-xl opacity-40 italic shrink-0">01</span>
                <p><strong className="text-white">Non-Refundable Policy:</strong> Given the subsidized nature of the fee (₹199), all registration payments are final.</p>
              </div>
              <div className="flex gap-3 md:gap-5">
                <span className="text-green-500 font-black text-sm md:text-xl opacity-40 italic shrink-0">02</span>
                <p><strong className="text-white">Program Adjustment:</strong> Candidates may request a track modification within 24 hours of enrollment.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. Disclaimer & Privacy */}
        {(!activeSection || activeSection === 'disclaimer' || activeSection === 'privacy') && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group bg-white/[0.02] border border-white/5 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] hover:border-yellow-500/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 md:gap-5 mb-8 md:mb-10 text-yellow-500">
              <div className="p-3 md:p-4 bg-yellow-500/10 rounded-xl md:rounded-2xl shrink-0">
                <ShieldAlert className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase break-words">Disclaimer</h3>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-5 items-start p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5">
                <Lock size={20} className="text-yellow-500 shrink-0 mt-1 md:w-6 md:h-6" />
                <p className="text-[11px] md:text-base font-medium text-gray-400"><strong className="text-white">Data Sovereignty:</strong> User info is processed for credential delivery and is never sold.</p>
              </div>
              <div className="flex gap-3 md:gap-5 items-start p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5">
                <Gavel size={20} className="text-yellow-500 shrink-0 mt-1 md:w-6 md:h-6" />
                <p className="text-[11px] md:text-base font-medium text-gray-400"><strong className="text-white">Jurisdiction:</strong> Disputes subject to courts in <span className="text-white">Jaipur, Rajasthan</span>.</p>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default LegalPages;