
import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-emerald-700 pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Expert Leadership</h1>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto font-medium">
            Our team brings over three decades of agricultural expertise to solve modern farming challenges.
          </p>
        </div>
      </section>

      {/* CEO Special Spotlight */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[600px] lg:h-full relative overflow-hidden">
              <img src={TEAM[0].image} alt={TEAM[0].name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-2">Since 1987</p>
                <h2 className="text-3xl font-black">{TEAM[0].name}</h2>
              </div>
            </div>
            <div className="p-12 lg:p-24 flex flex-col justify-center">
              <span className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-6 block">Our Founder & CEO</span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">{TEAM[0].name}</h2>
              <p className="text-slate-600 text-xl mb-12 leading-relaxed italic font-medium">
                "{TEAM[0].bio} Our commitment to animal health is the cornerstone of AR Group's vision."
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href={`mailto:${TEAM[0].socials.email}`} 
                  className="bg-slate-900 hover:bg-emerald-600 text-white px-10 py-5 rounded-3xl font-black shadow-2xl shadow-slate-900/20 transition-all flex items-center space-x-3 active:scale-95"
                >
                  <Mail size={20} />
                  <span>Email CEO</span>
                </a>
                <a 
                  href={TEAM[0].socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 flex items-center justify-center rounded-3xl transition-all shadow-md active:scale-95"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-4 block">Our Professionals</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Department Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {TEAM.slice(1).map((member) => (
              <div key={member.id} className="group flex flex-col items-center text-center">
                <div className="relative w-72 h-72 mb-10">
                  <div className="absolute inset-0 bg-emerald-600 rounded-[4rem] rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
                  <div className="relative w-full h-full overflow-hidden rounded-[4rem] shadow-2xl border-8 border-white">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{member.name}</h3>
                <p className="text-emerald-600 font-black tracking-widest uppercase text-xs mb-6">{member.role}</p>
                <p className="text-slate-500 max-w-xs mb-8 text-lg font-medium leading-relaxed min-h-[4rem]">
                  {member.bio}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-50 text-slate-400 hover:bg-emerald-600 hover:text-white rounded-2xl flex items-center justify-center transition-all border border-slate-100 shadow-sm active:scale-90"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a 
                      href={member.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-50 text-slate-400 hover:bg-emerald-500 hover:text-white rounded-2xl flex items-center justify-center transition-all border border-slate-100 shadow-sm active:scale-90"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.socials.email && (
                    <a 
                      href={`mailto:${member.socials.email}`} 
                      className="w-12 h-12 bg-slate-50 text-slate-400 hover:bg-emerald-500 hover:text-white rounded-2xl flex items-center justify-center transition-all border border-slate-100 shadow-sm active:scale-90"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
