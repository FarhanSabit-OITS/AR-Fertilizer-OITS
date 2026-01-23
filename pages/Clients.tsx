
import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PARTNER_DETAILS } from '../constants';

const TESTIMONIALS = [
  {
    name: "Dr. Hassan Mahmud",
    role: "Proprietor, Mahmud Poultry Farm",
    text: "AR Animal Health has been our primary supplier for enzymes and feed additives for 5 years. Their technical expertise and quality of VTR enzymes have significantly improved our feed conversion ratio.",
    avatar: "assets/clients/client-1.png"
  },
  {
    name: "Engr. Rezaul Karim",
    role: "Director, Green Agri Solutions",
    text: "The mineral sources from Chanhen, distributed by AR Animal Health, are of exceptional purity. Our clients have seen remarkable growth in bone strength and overall livestock vitality.",
    avatar: "assets/clients/client-2.png"
  },
  {
    name: "Md. Aminul Islam",
    role: "Senior Consultant, Agri-Biz BD",
    text: "What sets AR Animal Health apart is their leadership. Mr. Atiar Rahman's deep understanding of the industry ensures that they only bring the best global biotech to our local farmers.",
    avatar: "assets/clients/client-3.png"
  }
];

const Clients: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-emerald-700 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-800/20 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Our Global Partners</h1>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Collaborating with world leaders in biotechnology and mineral research to empower local agriculture.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PARTNER_DETAILS.map((partner, idx) => (
              <div key={idx} className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] md:rounded-[4rem] border border-slate-100 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition-all group">
                <div className="w-full md:w-1/3 aspect-square bg-white rounded-[3rem] shadow-sm flex items-center justify-center p-8 group-hover:scale-105 transition-transform">
                  <h4 className="text-3xl font-black text-emerald-600 text-center tracking-tighter leading-none">{partner.name}</h4>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-emerald-600 font-black uppercase tracking-widest text-[10px] bg-emerald-100 px-4 py-1.5 rounded-full">Primary Partner</span>
                    <ArrowUpRight className="text-slate-300" size={16} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">{partner.name} Chemicals</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
                    {partner.desc}
                  </p>
                  <button className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    <span>Explore Partner Products</span>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-4 block">Client Feedback</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Voices of Success</h2>
          </div>

          <div
            className="max-w-4xl mx-auto relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Display Area */}
            <div className="relative h-[550px] md:h-[400px]">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${idx === currentSlide
                    ? 'opacity-100 translate-x-0 scale-100'
                    : idx < currentSlide
                      ? 'opacity-0 -translate-x-20 scale-95 pointer-events-none'
                      : 'opacity-0 translate-x-20 scale-95 pointer-events-none'
                    }`}
                >
                  <div className="bg-white p-10 md:p-16 rounded-[3.5rem] md:rounded-[4rem] shadow-2xl border border-slate-100 h-full flex flex-col justify-center relative">
                    <div className="absolute top-10 right-16 text-emerald-100">
                      <Quote size={120} className="opacity-40" />
                    </div>

                    <div className="flex mb-8 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                      ))}
                    </div>

                    <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-medium italic mb-10 relative z-10">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-6 pt-8 border-t border-slate-100 relative z-10">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-slate-900 leading-none mb-2">{t.name}</h4>
                        <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-10 bg-emerald-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight relative z-10">Join 10,000+ Farmers Transforming Their Yields</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-medium relative z-10">
              Our products are backed by data and trusted by the largest agricultural business networks in Bangladesh.
            </p>
            <div className="flex justify-center gap-12 flex-wrap relative z-10">
              {['98% Satisfaction', '24/7 Support', 'Global Quality', 'Technical Advisory'].map((badge, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Star className="text-emerald-500 fill-emerald-500" size={16} />
                  <span className="font-bold text-lg">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
