
import React, { useState, useMemo } from 'react';
import {
  Search, Filter, Download, Tag, X, CheckCircle,
  MessageSquare, ArrowRight, Eye, Share2,
  Linkedin, Twitter, Mail, Copy, Check
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [shareProduct, setShareProduct] = useState<Product | null>(null);
  const [copied, setCopied] = useState(false);

  // Dynamic filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const getProductLink = (product: Product) => {
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}#/products?id=${product.id}`;
  };

  const handleCopyLink = (product: Product) => {
    const url = getProductLink(product);
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-brand-maroon py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter">Product Catalog</h1>
          <p className="text-brand-emerald text-base md:text-xl max-w-2xl leading-relaxed font-medium">
            Explore our professional range of additives, fertilizers, and health solutions optimized for the Bangladesh agricultural market.
          </p>
        </div>
      </section>

      {/* Real-time Filter & Search Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm py-4 md:py-6 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-1/3">
              <input
                type="text"
                placeholder="Search by name or benefit..."
                className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-maroon/10 focus:bg-white focus:border-brand-maroon transition-all font-bold text-slate-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-6 top-4 text-slate-400" size={20} />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
              <div className="flex items-center text-slate-400 mr-4 font-black text-[10px] uppercase tracking-widest flex-shrink-0">
                <Filter size={14} className="mr-2" />
                <span>Filter By:</span>
              </div>
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-maroon to-brand-maroon-dark text-white shadow-xl shadow-brand-maroon/30'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-brand-maroon hover:text-brand-maroon'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col h-full relative"
                >
                  {/* Image & Quick Actions Area */}
                  <div className="h-72 relative overflow-hidden bg-slate-50 flex items-center justify-center p-8 cursor-pointer" onClick={() => setSelectedProduct(p)}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center bg-brand-maroon-dark/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg border border-white/10">
                        <Tag size={10} className="mr-2 text-brand-gold" />
                        {p.category}
                      </div>
                    </div>

                    {/* Floating Hover Actions */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={(e) => { e.stopPropagation(); setQuickViewProduct(p); }}
                        className="bg-white hover:bg-brand-maroon text-slate-900 hover:text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center space-x-2 transition-all transform translate-y-4 group-hover:translate-y-0"
                      >
                        <Eye size={16} />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="cursor-pointer" onClick={() => setSelectedProduct(p)}>
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-brand-maroon-dark transition-colors tracking-tight">
                        {p.name}
                      </h3>
                      <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-base line-clamp-3 font-medium">
                        {p.description}
                      </p>
                    </div>

                    {/* Card Footer with prominent Share and Details buttons */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <button
                        onClick={(e) => { e.stopPropagation(); setShareProduct(p); }}
                        className="flex items-center space-x-2 text-slate-400 hover:text-brand-maroon transition-all group/share"
                      >
                        <Share2 size={16} className="group-hover/share:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Share</span>
                      </button>

                      <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => setSelectedProduct(p)}
                      >
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-maroon-dark transition-colors">Details</span>
                        <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-brand-maroon-dark transition-all duration-300 shadow-lg">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-white rounded-[3rem] shadow-sm border-2 border-dashed border-slate-200 max-w-4xl mx-auto">
              <Search size={64} className="mx-auto text-slate-200 mb-8" />
              <h3 className="text-3xl font-black text-slate-900 mb-4">No matching products</h3>
              <p className="text-slate-400 text-lg font-medium mb-10">Try adjusting your search or category filters.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="bg-gradient-to-r from-brand-maroon to-brand-maroon-dark text-white font-black px-10 py-4 rounded-full shadow-xl transition-all hover:shadow-brand-maroon/40 shadow-brand-maroon/20"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 1. Full Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col lg:flex-row border border-white/20 animate-in zoom-in slide-in-from-bottom-10 duration-500">
            <button className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-slate-100 hover:bg-brand-maroon hover:text-white rounded-full flex items-center justify-center text-slate-900 shadow-lg transition-all" onClick={() => setSelectedProduct(null)}>
              <X size={20} md:size={24} />
            </button>
            <div className="lg:w-5/12 h-[30vh] md:h-[40vh] lg:h-auto relative overflow-hidden bg-slate-50 flex items-center justify-center p-8 md:p-12">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain" />
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <span className="bg-brand-maroon-dark text-white text-[9px] md:text-[10px] font-black px-4 md:px-5 py-2 md:py-2.5 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/10">
                  {selectedProduct.category}
                </span>
              </div>
            </div>
            <div className="lg:w-7/12 p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter leading-tight">{selectedProduct.name}</h2>
              <p className="text-slate-600 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed font-medium">{selectedProduct.description}</p>
              <div className="mb-8 md:mb-10">
                <h4 className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 md:mb-6 border-b border-slate-100 pb-2">Technical Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {selectedProduct.specifications.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 md:p-4 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-maroon/5 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-brand-maroon" size={14} md:size={16} />
                      </div>
                      <span className="text-slate-800 font-bold text-xs md:text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-grow bg-gradient-to-r from-brand-maroon to-brand-maroon-dark hover:from-brand-maroon-dark hover:to-brand-maroon text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl flex items-center justify-center space-x-3 shadow-xl shadow-brand-maroon/20 transition-all active:scale-95">
                  <Download size={18} md:size={20} />
                  <span>Download Catalog</span>
                </button>
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-black py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl flex items-center justify-center space-x-3 active:scale-95 transition-all">
                  <MessageSquare size={18} md:size={20} className="text-brand-gold" />
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Streamlined Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setQuickViewProduct(null)}></div>
          <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in slide-in-from-top-10 duration-400">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-100 hover:bg-brand-maroon hover:text-white rounded-full flex items-center justify-center text-slate-900 transition-all shadow-md"
              onClick={() => setQuickViewProduct(null)}
            >
              <X size={20} />
            </button>
            <div className="bg-slate-50 p-12 flex justify-center items-center h-64">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="max-h-full w-auto object-contain" />
            </div>
            <div className="p-10 text-center">
              <span className="text-brand-maroon-dark font-black uppercase tracking-widest text-[9px] mb-2 block">{quickViewProduct.category}</span>
              <div className="w-12 h-1 bg-brand-maroon mx-auto mb-6 rounded-full opacity-30"></div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{quickViewProduct.name}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                {quickViewProduct.description.split('.')[0]}.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => { setSelectedProduct(quickViewProduct); setQuickViewProduct(null); }}
                  className="flex-grow bg-slate-900 hover:bg-brand-maroon-dark text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-brand-maroon/10 active:scale-95 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>View Full Details</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Share Modal */}
      {shareProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShareProduct(null)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 bg-slate-900 text-white flex justify-between items-center border-b border-brand-maroon/20">
              <div className="flex items-center space-x-3">
                <Share2 size={20} className="text-brand-gold" />
                <h3 className="text-xl font-black tracking-tight">Share Product</h3>
              </div>
              <button onClick={() => setShareProduct(null)} className="text-slate-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-slate-500 font-bold text-sm mb-6">Share <span className="text-brand-maroon-dark font-black uppercase tracking-tighter">{shareProduct.name}</span> with your professional network.</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <a
                  href={`mailto:?subject=Product Recommendation: ${shareProduct.name}&body=Hi, check out this high-quality product from AR Animal Health: ${getProductLink(shareProduct)}`}
                  className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all group"
                >
                  <Mail size={24} className="mb-2 text-slate-400 group-hover:text-emerald-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Email</span>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getProductLink(shareProduct))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all group"
                >
                  <Linkedin size={24} className="mb-2 text-slate-400 group-hover:text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=Optimizing agricultural yields with ${shareProduct.name} by AR Animal Health!&url=${encodeURIComponent(getProductLink(shareProduct))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl hover:bg-sky-50 hover:text-sky-500 transition-all group"
                >
                  <Twitter size={24} className="mb-2 text-slate-400 group-hover:text-sky-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Twitter</span>
                </a>
              </div>

              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Direct Product Link</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    readOnly
                    value={getProductLink(shareProduct)}
                    className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none"
                  />
                  <button
                    onClick={() => handleCopyLink(shareProduct)}
                    className={`p-3 rounded-xl transition-all shadow-md active:scale-95 ${copied ? 'bg-brand-maroon text-white' : 'bg-slate-900 text-white hover:bg-brand-maroon-dark'}`}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
