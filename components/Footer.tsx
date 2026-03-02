import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Mail, Phone, MapPin, Linkedin, Twitter, 
  Github, Globe, ExternalLink, ShieldCheck 
} from 'lucide-react';

interface FooterProps {
  setActiveLegal: (type: string | null) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveLegal }) => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Refund Policy', slug: 'refund' },
    { name: 'Terms of Service', slug: 'terms' },
    { name: 'Legal Disclaimer', slug: 'disclaimer' },
    { name: 'Privacy Policy', slug: 'privacy' }
  ];

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden border-t border-white/5 bg-[#030712]">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          
          {/* Brand & Mission */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
          src="/assets/logo.png" 
          alt="VIPASIKA Logo" 
          className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-110" 
        />
              {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Cpu className="text-white" size={26} />
              </div> */}
              <span className="text-2xl font-black tracking-tighter text-white">
                VIPASIKA 🦬
                {/* <span className="text-blue-500 italic">.IT</span> */}
              </span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed">
              Engineering the next generation of digital infrastructure. We empower Indian talent to lead on the global stage.
            </p>
            <div className="flex gap-4">
              {[<Linkedin />, <Twitter />, <Github />, <Globe />].map((icon, i) => (
                <motion.a 
                  key={i} href="#" 
                  whileHover={{ y: -5, color: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 transition-all"
                >
                  {React.cloneElement(icon as React.ReactElement, { size: 18 })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Solutions</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li><a href="#services" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">Bharat Cloud Core <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">Cyber Kavach <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">Full-Stack Forge <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">A.I. Satyamev <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            </ul>
          </div>

          {/* Incubation */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Incubation</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li className="flex items-center gap-2 text-white">
                Online Internship 
                <span className="text-[10px] bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2 py-0.5 rounded-full">₹199/m</span>
              </li>
              <li><a href="#internship" className="hover:text-blue-500 transition-colors">Certificate Delivery</a></li>
              <li><a href="#internship" className="hover:text-blue-500 transition-colors">1-12 Month Tracks</a></li>
              <li><a href="#internship" className="hover:text-blue-500 transition-colors">Verification Ledger</a></li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Headquarters</h4>
            <div className="flex items-start gap-4 text-gray-500">
              <MapPin className="text-blue-500 shrink-0" size={20} />
              <p className="text-sm font-bold leading-relaxed">
                Vipasika IT Solutions, <br />
                Sk Plaza, Jaipur, <br />
                Rajasthan 311605, India
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-500 group cursor-pointer">
              <Mail className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-sm font-bold group-hover:text-white transition-colors underline-offset-4 decoration-blue-500">support@vipasika.com</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3 group hover:border-blue-500/30 transition-all">
              <ShieldCheck className="text-green-500 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Functional Legal Triggers */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <p className="text-gray-600 font-black text-[10px] tracking-[0.3em] uppercase">
              © {currentYear} VIPASIKA IT SOLUTIONS PVT LTD.
            </p>
            <p className="text-gray-700 text-[8px] font-bold tracking-widest mt-1 uppercase">MSME Registered & Verified Business</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {legalLinks.map((link) => (
              <button 
                key={link.slug} 
                onClick={() => setActiveLegal(link.slug)}
                className="text-gray-600 hover:text-blue-500 font-black text-[10px] tracking-widest uppercase transition-all hover:tracking-[0.4em] cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;