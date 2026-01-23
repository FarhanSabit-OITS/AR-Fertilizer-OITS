
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { Link } from 'react-router-dom';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const badgeTexts = [
    "Innovation in Growth",
    "10 years of expertise & quality"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative h-[85vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden bg-slate-900">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
            }`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10" />

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl text-white">
                {/* Dynamic Looping Badge */}
                <div className="mb-8">
                  <span className="inline-flex items-center bg-brand-green/80 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-4 duration-700">
                    <Zap size={14} className="mr-2 text-brand-gold fill-brand-gold" />
                    {badgeTexts[index % badgeTexts.length]}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight transition-all duration-700 translate-y-0 opacity-100">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-lg">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/products"
                    className="bg-gradient-to-r from-brand-maroon to-brand-maroon-dark text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center justify-center sm:justify-start space-x-2 shadow-xl shadow-brand-maroon/30 hover:shadow-brand-maroon/50 transform hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    <span>Our Products</span>
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-all w-full sm:w-auto text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-30 flex space-x-3 md:space-x-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-maroon hover:ring-8 hover:ring-brand-maroon/20 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-brand-maroon hover:ring-8 hover:ring-brand-maroon/20 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-brand-gold w-10 shadow-[0_0_15px_rgba(241,196,15,0.5)]' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
