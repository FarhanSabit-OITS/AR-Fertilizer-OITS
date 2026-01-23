
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryItem: React.FC<{ item: typeof GALLERY[0], index: number, onOpen: () => void }> = ({ item, index, onOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`group relative h-[350px] md:h-[450px] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] cursor-pointer shadow-xl hover:shadow-[0_35px_60px_-15px_rgba(5,150,105,0.25)] bg-white border border-slate-100 transition-all duration-[600ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      onClick={onOpen}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-[500ms] group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay with Caption - Visible on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-emerald-500 text-white px-5 py-2.5 rounded-full mb-4 inline-block shadow-lg">
            {item.category}
          </span>
          <h3 className="text-3xl font-black tracking-tighter leading-tight drop-shadow-md">
            {item.title}
          </h3>
          <p className="mt-2 text-emerald-200 text-sm font-bold uppercase tracking-widest opacity-80">
            {item.category} Insight
          </p>
        </div>

        {/* Floating Maximize Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-white hover:text-emerald-600 scale-75 group-hover:scale-100">
          <Maximize2 size={32} />
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(GALLERY.map(item => item.category));
    return ['All', ...Array.from(cats)].sort();
  }, []);

  const filteredItems = useMemo(() => {
    return activeTab === 'All'
      ? GALLERY
      : GALLERY.filter(item => item.category === activeTab);
  }, [activeTab]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-maroon py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter">Gallery</h1>
          <p className="text-brand-emerald text-base md:text-xl max-w-2xl leading-relaxed font-medium">
            State-of-the-art facilities and strategic presence across Bangladesh's agricultural landscape.
          </p>
        </div>
      </section>


      {/* Tabs Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedIndex(null); }}
                className={`px-6 md:px-10 py-3 md:py-4 rounded-[1rem] md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${activeTab === tab
                  ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-600/30 scale-105'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onOpen={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Carousel */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/98 flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-10 right-10 w-16 h-16 bg-white/10 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all z-[110] shadow-2xl active:scale-90"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 hover:bg-emerald-600 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-[110] active:scale-90 shadow-2xl"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative overflow-hidden rounded-[3rem] shadow-[0_0_100px_rgba(5,150,105,0.25)]">
              <img
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].title}
                className="max-w-full max-h-[70vh] object-contain animate-in zoom-in duration-700"
                loading="lazy"
              />
            </div>

            <div className="mt-12 text-center max-w-2xl animate-in fade-in slide-in-from-top-6 duration-1000">
              <span className="text-emerald-400 font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">
                {filteredItems[selectedIndex].category}
              </span>
              <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                {filteredItems[selectedIndex].title}
              </h3>

              <div className="flex space-x-3 justify-center">
                {filteredItems.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${selectedIndex === i ? 'w-12 bg-emerald-500' : 'w-2 bg-white/10'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <button
            className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 hover:bg-emerald-600 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-[110] active:scale-90 shadow-2xl"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
