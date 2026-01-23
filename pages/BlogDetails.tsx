
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Share2, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Insight Not Found</h1>
          <Link to="/blog" className="text-emerald-600 font-bold hover:underline flex items-center justify-center space-x-2">
            <ArrowLeft size={20} />
            <span>Back to Knowledge Base</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Article Header */}
      <section className="bg-slate-900 pt-32 pb-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-emerald-400 font-bold mb-12 hover:text-emerald-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Insights</span>
          </Link>
          <div className="max-w-4xl">
            <span className="bg-emerald-600 text-white text-[10px] font-black px-5 py-2.5 rounded-full uppercase tracking-[0.2em] mb-8 inline-block shadow-lg">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-emerald-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} className="text-emerald-500" />
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Overlay */}
      <section className="container mx-auto px-6 -mt-48 relative z-20">
        <div className="h-[400px] md:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-2xl font-bold text-slate-800 leading-relaxed mb-12 italic border-l-4 border-emerald-600 pl-8">
                {post.excerpt}
              </p>
              <div className="text-slate-600 text-xl leading-relaxed font-medium space-y-8">
                <p>{post.content}</p>
                <p>
                  Zhejiang Shenghua Biok Biology Co., Ltd., formerly named Zhejiang Deqing Biok Biology Co., Ltd. and established in December 1993, is a key hi-tech enterprise authorized by the National Ministry of Science and Technology. As a strategic partner, we share their motto of "Seeking development through science and technology and survival by quality."
                </p>
                <h3 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">Technical Implementation</h3>
                <p>
                  GUANGDONG VTR BIO-TECH CO. LTD is the largest and most professional animal feed enzyme manufacturer in China. With 18 years of professional experience, their technology provides our local market with high-tech products and perfect services. We are willing to work with you for brilliant joint development.
                </p>
                <blockquote className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 my-16">
                   <p className="text-2xl font-black text-slate-900 mb-4 leading-tight italic">"The future of poultry health lies in the intersection of biotechnology and sustainable farming practices."</p>
                   <cite className="text-emerald-600 font-bold uppercase tracking-widest text-sm">— Atiar Rahman, CEO</cite>
                </blockquote>
              </div>
            </div>

            {/* Tags & Share */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap gap-3">
                {['Agriculture', 'Biotech', 'Poultry', 'Research'].map(tag => (
                  <span key={tag} className="flex items-center space-x-2 bg-slate-50 text-slate-500 font-bold px-4 py-2 rounded-xl text-sm border border-slate-100">
                    <Tag size={14} className="text-emerald-500" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-slate-400 font-black uppercase tracking-widest text-xs">Share Insight:</span>
                <button className="w-12 h-12 bg-slate-50 hover:bg-emerald-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all border border-slate-100 active:scale-90">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
