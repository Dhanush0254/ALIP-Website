import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { StatsBar } from '../components/StatsBar';
import { ScrollReveal } from '../components/ScrollReveal';
import { features } from '../data/features';
import { FeatureCard } from '../components/FeatureCard';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsBar />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">How It Works</div>
            <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4 max-w-2xl mx-auto">
              From your documents to a personalized learning OS
            </h2>
            <Link to="/how-it-works" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
              See full process <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-navy-900 border border-white/5 rounded-xl p-8 text-center h-full">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">1. Upload</h3>
              <p className="text-sm text-slate-400">Provide your timetable, syllabus, and notes (PDF/images).</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-navy-900 border border-white/5 rounded-xl p-8 text-center h-full">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">2. Personalize</h3>
              <p className="text-sm text-slate-400">AI extracts topics, builds a knowledge map, and scores exam priority.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="bg-navy-900 border border-white/5 rounded-xl p-8 text-center h-full">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-heading text-lg font-semibold text-slate-100 mb-2">3. Learn</h3>
              <p className="text-sm text-slate-400">Get adaptive explanations grounded entirely in your notes via RAG.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-navy-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-xl">
                <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">Core features</div>
                <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100">
                  Not a chatbot wrapper. A learning OS.
                </h2>
              </div>
              <Link to="/features" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                See all 8 features <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {features.slice(0, 4).map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FeatureCard feature={feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">9 Screens</div>
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-12">
            Every screen, a deliberate decision
          </h2>
          
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x justify-start md:justify-center">
            {['Dashboard', 'Topic Page', 'Subject Master', 'Revision Mode'].map((lbl, i) => (
              <div key={i} className="shrink-0 snap-center w-64 bg-navy-900 border border-white/5 rounded-xl p-5 text-left">
                <div className="w-8 h-8 rounded-lg bg-navy-800 border border-white/10 mb-4"></div>
                <h4 className="font-heading font-semibold text-slate-100 text-sm mb-1">{lbl}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">Carefully designed for maximum focus and zero distractions during study.</p>
              </div>
            ))}
          </div>
          
          <Link to="/screens" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-4">
            View all screens <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-indigo-500/5">
        <ScrollReveal>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold font-heading text-slate-100 mb-4 max-w-2xl mx-auto leading-[1.2]">
            Built for B.Tech students. <br/>By a B.Tech student.
          </h2>
          <p className="text-base text-slate-400 mb-10">Stop wasting time searching YouTube for explanations.</p>
          <button onClick={() => alert("🚀 Platform in development — check back soon!")} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition-all hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(99,102,241,0.3)] text-base">
            Start Learning Free
            <ArrowRight size={18} />
          </button>
        </ScrollReveal>
      </section>
    </div>
  );
};
