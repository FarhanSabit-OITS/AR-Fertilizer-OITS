
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Linkedin, Instagram, Mail,
  MapPin, PhoneCall, ChevronRight, Send
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Brand */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 mb-8 group">
              <div className="bg-white rounded-xl p-2 shadow-lg group-hover:rotate-3 transition-transform">
                <img
                  src="/assets/afrin-logo-02.png"
                  alt="AR Fertilizer Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">AR FERTILIZER</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Innovation in Agriculture</span>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed font-medium">
              A young and innovative company leading the animal health care and phosphorus chemical industry in Bangladesh since 2010.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Facebook, url: '#' },
                { icon: Twitter, url: '#' },
                { icon: Linkedin, url: '#' },
                { icon: Instagram, url: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center rounded-2xl transition-all shadow-sm active:scale-90"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-emerald-500/20 pb-3 inline-block tracking-tight">Quick Navigation</h4>
            <ul className="grid grid-cols-1 gap-5">
              {['Home', 'About', 'Products', 'Gallery', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-emerald-500 flex items-center space-x-3 transition-all group font-medium"
                  >
                    <ChevronRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-emerald-500/20 pb-3 inline-block tracking-tight">Get In Touch</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-5 group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed font-medium">House-51, Flat: A-6 (6th Floor), Rabindra Sarani Road, Sector-3, Uttara, Dhaka-1230</span>
              </li>
              <li className="flex items-center space-x-5 group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <PhoneCall size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-sm font-bold">+88-02-58951859</span>
                  <span className="text-slate-500 text-xs font-bold">Hotline: +88 01713-011040</span>
                </div>
              </li>
              <li className="flex items-center space-x-5 group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@aranimalhealthltd.com" className="text-slate-400 hover:text-emerald-500 transition-colors font-bold text-sm">info@aranimalhealthltd.com</a>
              </li>
            </ul>
          </div>

          {/* Corporate Newsletter */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-emerald-500/20 pb-3 inline-block tracking-tight">Global Updates</h4>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium text-sm">Subscribe to receive technical insights and industry breakthroughs directly from our partners.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Work Email Address"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-bold placeholder:text-slate-600"
              />
              <button className="absolute right-2 top-2 bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl transition-all shadow-lg active:scale-95 group">
                <Send size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-12 border-t border-slate-800/50 text-center md:flex md:justify-between md:text-left text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
          <p>© 2024 AR ANIMAL HEALTH LTD. ALL RIGHTS RESERVED.</p>
          <div className="mt-6 md:mt-0 flex items-center justify-center space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
