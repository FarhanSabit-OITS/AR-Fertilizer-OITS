
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Knowledge Base</h1>
          <p className="text-emerald-200 text-xl max-w-2xl mx-auto font-medium">
            Technical insights, industry news, and breakthrough research in animal health and nutrition.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <Link to={`/blog/${post.id}`} className="block h-72 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-emerald-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-10">
                  <div className="flex items-center space-x-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-emerald-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={14} className="text-emerald-500" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-slate-500 mb-8 leading-relaxed font-medium line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center space-x-2 text-emerald-600 font-black uppercase tracking-widest text-xs hover:text-emerald-700 transition-colors"
                  >
                    <span>Read Full Insight</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6">
        <div className="bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight relative z-10">Stay Updated with Global Research</h2>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto mb-12 font-medium relative z-10">
            Subscribe to our technical bulletin to receive the latest scientific breakthroughs directly in your inbox.
          </p>
          <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-emerald-200 focus:outline-none focus:bg-white/20 transition-all font-bold"
            />
            <button className="bg-white text-emerald-600 font-black px-12 py-5 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
