import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FeatureCard } from '../components/FeatureCard';
import { CompareTable } from '../components/CompareTable';
import { features } from '../data/features';

export const Features = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <ScrollReveal>
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">Core features</div>
          <h1 className="text-[clamp(28px,4vw,48px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4">
            Not a chatbot wrapper. A learning OS.
          </h1>
          <p className="text-[16px] text-slate-400 leading-[1.7]">
            Every feature is built to serve one purpose: help you actually understand your semester syllabus before the exam.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden mb-24">
        {features.map((feature, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <FeatureCard feature={feature} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="max-w-2xl mb-10">
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">Why different</div>
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4">
            Not another learning app
          </h2>
          <p className="text-[16px] text-slate-400 leading-[1.7]">
            Most platforms give everyone the same content. This one starts from your documents and never produces the same dashboard for two people.
          </p>
        </div>
        <CompareTable />
      </ScrollReveal>
    </div>
  );
};
