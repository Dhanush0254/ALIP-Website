import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Team = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-[clamp(28px,4vw,48px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4">
            Built at TKR College of Engineering
          </h1>
          <p className="text-[16px] text-slate-400 leading-[1.7]">
            B.Tech Computer Science · Telangana · 2023–2027 · Final Year Project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-navy-900 border border-white/5 rounded-2xl p-8 shadow-xl">
            <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-6">
              Team Members (Batch D1)
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="font-heading font-semibold text-slate-100">A Dhanush</div>
                <div className="text-sm text-slate-400 font-mono bg-navy-800 px-2 py-1 rounded">23K91A0501</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="font-heading font-semibold text-slate-100">Ale Vijayalaxmi</div>
                <div className="text-sm text-slate-400 font-mono bg-navy-800 px-2 py-1 rounded">23K91A0508</div>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="font-heading font-semibold text-slate-100">Burri Mallikarjun</div>
                <div className="text-sm text-slate-400 font-mono bg-navy-800 px-2 py-1 rounded">23K91A0549</div>
              </div>
              <div className="flex items-center justify-between pb-2">
                <div className="font-heading font-semibold text-slate-100">Atragada Nagatrimurthulu</div>
                <div className="text-sm text-slate-400 font-mono bg-navy-800 px-2 py-1 rounded">23K91A0517</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-navy-900 border border-white/5 rounded-2xl p-8 shadow-xl flex-1">
              <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-4">
                Under the guidance of
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-100 mb-2">Ragahavendra</h2>
              <p className="text-sm text-slate-400">Department of Computer Science & Engineering</p>
            </div>
            
            <div className="bg-navy-900 border border-white/5 rounded-2xl p-8 shadow-xl flex-1">
              <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-4">
                Academic Details
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">College</div>
                  <div className="text-sm font-medium text-slate-200">TKR College of Eng.</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Branch</div>
                  <div className="text-sm font-medium text-slate-200">CSE</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Batch</div>
                  <div className="text-sm font-medium text-slate-200">2023–2027</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Project</div>
                  <div className="text-sm font-medium text-slate-200">Final Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-bold font-heading text-slate-100 mb-6">Domain Tags</h3>
          <div className="flex flex-wrap gap-3">
            {['Artificial Intelligence', 'Learning Analytics', 'Educational Technology', 'RAG', 'Intelligent Tutoring Systems', 'NLP / DL Models', 'Document Analysis'].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold font-heading text-slate-100 mb-6">Project Timeline</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {[
              { m: 'Month 1', task: 'Research + System Design' },
              { m: 'Month 2', task: 'Document Processing Pipeline' },
              { m: 'Month 3', task: 'RAG Engine + FAISS' },
              { m: 'Month 4', task: 'Frontend + Dashboard' },
              { m: 'Month 5', task: 'AI Tutor + Chatbot' },
              { m: 'Month 6', task: 'Testing + Deployment' }
            ].map((item, i) => (
              <div key={i} className="bg-navy-900 p-5">
                <div className="text-xs text-indigo-400 font-semibold mb-2">{item.m}</div>
                <div className="text-sm text-slate-300">{item.task}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
