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

        <div className="bg-navy-900 border border-white/5 rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-4">
            Full Stack Developer & Project Lead
          </div>
          <h2 className="text-3xl font-bold font-heading text-slate-100 mb-4">Dhanush</h2>
          <p className="text-slate-400 mb-8 leading-[1.7] max-w-2xl">
            <strong className="text-slate-300">Responsibilities:</strong> MERN stack · FastAPI · RAG pipelines · FAISS · Gemini AI integration · System architecture
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="https://github.com/Dhanush0254" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-navy-700 transition-colors">
              GitHub Profile
            </a>
            <a href="https://dhanush-a.netlify.app" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-navy-700 transition-colors">
              Portfolio
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-navy-700 transition-colors">
              LinkedIn
            </a>
          </div>

          <div className="border-t border-white/5 pt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-slate-500 mb-1">CGPA</div>
              <div className="text-lg font-bold text-slate-200">8.46</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">College</div>
              <div className="text-sm font-medium text-slate-200">TKR College of Eng.</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Batch</div>
              <div className="text-sm font-medium text-slate-200">2023–2027</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Branch</div>
              <div className="text-sm font-medium text-slate-200">CSE</div>
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
