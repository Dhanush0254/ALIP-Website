import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { StepCard } from '../components/StepCard';
import { steps } from '../data/steps';

export const HowItWorks = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <ScrollReveal>
        <div className="mb-16">
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">How it works</div>
          <h1 className="text-[clamp(28px,4vw,48px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4">
            From your documents to a personalized learning OS
          </h1>
          <p className="text-[16px] text-slate-400 leading-[1.7]">
            Five stages that happen once per semester — then every session adapts automatically.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-[21px] top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500 to-indigo-500/10"></div>
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
