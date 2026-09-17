import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const StepCard = ({ step, index }) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="flex gap-7 items-start py-9 border-b border-white/5 last:border-b-0 relative z-10 bg-navy-950">
        <div className="w-11 h-11 rounded-full shrink-0 bg-navy-800 border border-indigo-500 flex items-center justify-center font-heading text-base font-bold text-indigo-400 relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          {step.id}
        </div>
        <div className="flex-1 pb-2">
          <h3 className="font-heading text-xl font-semibold text-slate-100 mb-2">{step.title}</h3>
          <p className="text-[15px] text-slate-400 leading-[1.7] mb-4">{step.description}</p>
          <div className="flex flex-wrap gap-2">
            {step.tags.map(tag => (
              <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-slate-400 bg-navy-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
