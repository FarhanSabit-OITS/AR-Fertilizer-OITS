
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Clients', path: '/clients' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappNumber = "8801713011040";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b border-slate-200 shadow-sm py-4 transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-white/75 backdrop-blur-md'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="flex items-center">
            {/* Added a solid background and padding to ensure the logo is visible even if it has transparency */}
            <div className="bg-white rounded-xl p-1 shadow-md border border-slate-100 flex items-center justify-center">
              <img
                src="assets/afrin-logo-02.png"
                alt="AR Animal Health Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col ml-3">
              <span className="text-xl font-extrabold tracking-tight leading-none text-slate-900 group-hover:text-brand-maroon-dark transition-colors">
                AR FERTILIZER
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green-dark">
                Innovation in Agriculture
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-wide hover:text-brand-maroon hover:ring-8 hover:ring-brand-maroon/5 rounded-full px-3 py-1 transition-all relative group ${location.pathname === link.path
                ? 'text-brand-maroon'
                : 'text-slate-900'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-3 right-3 h-0.5 bg-brand-maroon transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
            </Link>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-brand-maroon to-brand-maroon-dark hover:from-brand-maroon-dark hover:to-brand-maroon text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-maroon/20 hover:shadow-brand-maroon/40 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Call Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold py-2 border-b border-slate-100 ${location.pathname === link.path ? 'text-brand-maroon' : 'text-slate-900'
                } transform transition-all duration-300 delay-[${index * 50}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className={`pt-6 transform transition-all duration-500 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-maroon to-brand-maroon-dark text-white py-4 rounded-2xl text-center text-xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-brand-maroon/30 active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={24} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
