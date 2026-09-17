import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export const StatsBar = () => {
  return (
    <div className="border-y border-white/5 bg-navy-900/50 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center divide-x divide-white/5">
        <div className="px-12 py-8 text-center flex-1 min-w-[200px]">
          <span className="block font-heading text-3xl font-bold text-slate-100 mb-1">
            <CountUp end={85} suffix="%" />
          </span>
          <span className="text-xs text-slate-500">Requests served from cache / local models</span>
        </div>
        <div className="px-12 py-8 text-center flex-1 min-w-[200px]">
          <span className="block font-heading text-3xl font-bold text-slate-100 mb-1">
            <CountUp end={7} />
          </span>
          <span className="text-xs text-slate-500">Local NLP models (zero API cost)</span>
        </div>
        <div className="px-12 py-8 text-center flex-1 min-w-[200px]">
          <span className="block font-heading text-3xl font-bold text-slate-100 mb-1">
            <CountUp end={3} />
          </span>
          <span className="text-xs text-slate-500">Adaptive explanation modes per topic</span>
        </div>
        <div className="px-12 py-8 text-center flex-1 min-w-[200px]">
          <span className="block font-heading text-3xl font-bold text-slate-100 mb-1">
            <CountUp end={9} />
          </span>
          <span className="text-xs text-slate-500">Screens — from onboarding to revision</span>
        </div>
      </div>
    </div>
  );
};
