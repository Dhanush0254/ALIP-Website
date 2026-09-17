import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TechCard } from '../components/TechCard';
import { techStack, freeTierCosts } from '../data/techStack';

export const TechStack = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <ScrollReveal>
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">Tech stack</div>
          <h1 className="text-[clamp(28px,4vw,48px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4">
            Free-tier optimized, production-grade
          </h1>
          <p className="text-[16px] text-slate-400 leading-[1.7]">
            7 local NLP models handle 80–90% of requests. Groq + Gemini are reserved for actual AI reasoning only.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-xl font-bold font-heading text-slate-100 mb-8">Architecture Flow</h2>
          <div className="bg-navy-900/50 border border-white/5 rounded-xl p-8 overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-6 font-mono text-[11px] text-slate-300">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-navy-800 border border-indigo-500/30 rounded-lg text-indigo-400">Student Uploads</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-white/10 rounded-lg">Doc Processor (OCR/pdfplumber)</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-white/10 rounded-lg">Chunker</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-emerald-500/30 rounded-lg text-emerald-400">Embedder (all-MiniLM)</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-indigo-500/30 rounded-lg text-indigo-400">FAISS Index</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-navy-800 border border-amber-500/30 rounded-lg text-amber-400">Student Query</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-white/10 rounded-lg">BM25+FAISS Hybrid</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-white/10 rounded-lg">Top-K Chunks</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-navy-800 border border-white/10 rounded-lg">Context Builder</div>
                <div className="text-slate-500">→</div>
                <div className="px-4 py-2 bg-indigo-500 text-white rounded-lg">Groq API</div>
              </div>
              <div className="flex items-center gap-4 text-emerald-400/80">
                <span>* Cache check: cosine sim ≥ 0.88 → return cached instantly (Zero API call)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-xl font-bold font-heading text-slate-100 mb-8">Component Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {techStack.map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold font-heading text-slate-100 mb-8">Free Tier Breakdown</h2>
          <div className="overflow-x-auto w-full rounded-xl border border-white/5 bg-navy-900/50">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Component</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tool</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Cost</th>
                </tr>
              </thead>
              <tbody>
                {freeTierCosts.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-b-0 hover:bg-navy-800/50 transition-colors">
                    <td className="p-4 text-sm text-slate-300">{row.component}</td>
                    <td className="p-4 text-sm text-slate-400">{row.tool}</td>
                    <td className="p-4 text-sm text-emerald-400 font-mono text-right">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
