import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { MockScreen } from '../components/MockScreen';
import { screens } from '../data/screens';

export const Screens = () => {
  const [activeTab, setActiveTab] = useState(screens[0].id);
  const activeScreen = screens.find(s => s.id === activeTab);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <ScrollReveal>
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-3">9 Screens</div>
          <h1 className="text-[clamp(28px,4vw,48px)] font-bold font-heading leading-[1.15] tracking-tight text-slate-100 mb-4">
            Every screen, a deliberate decision
          </h1>
          <p className="text-[16px] text-slate-400 leading-[1.7]">
            From first login to post-exam revision — here's how the platform flows.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 scrollbar-hide">
          {screens.map(screen => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === screen.id 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-navy-900 border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-navy-800'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-text"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-block text-[11px] font-semibold text-indigo-400 tracking-widest uppercase mb-4">
                Screen — {activeScreen.label}
              </div>
              <h2 className="text-[28px] font-bold font-heading leading-[1.2] text-slate-100 mb-4">
                {activeScreen.title}
              </h2>
              <p className="text-[15px] text-slate-400 leading-[1.7] mb-6">
                {activeScreen.description}
              </p>
              <div className="flex flex-col gap-3">
                {activeScreen.points.map((point, i) => (
                  <div key={i} className="flex gap-3 text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full shrink-0 bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-mock"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center lg:justify-end"
            >
              <MockScreen type={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </div>
  );
};
