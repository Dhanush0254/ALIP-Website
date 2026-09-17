import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="hero-bg absolute inset-0 z-0"></div>
      <div className="hero-grid absolute inset-0 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-3.5 py-1.5 text-xs font-medium text-indigo-400 tracking-wider uppercase mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          B.Tech Final Year Project — AI / EdTech
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[clamp(36px,6vw,72px)] font-bold font-heading leading-[1.1] tracking-tight text-slate-100 mb-5"
        >
          Your Semester.<br />
          Your Notes. <em className="not-italic bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">Your AI Tutor.</em>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[17px] text-slate-400 max-w-2xl leading-[1.7] mb-10"
        >
          Upload your timetable, syllabus and notes. Get a personalized study plan driven by your exam dates, past results, and learning behavior — powered by RAG and local NLP models.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-4"
        >
          <button onClick={() => alert("🚀 Platform in development — check back soon!")} className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition-all hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(99,102,241,0.3)] text-base">
            Start Learning Free
            <ArrowRight size={18} />
          </button>
          <Link to="/how-it-works" className="px-7 py-3.5 rounded-xl bg-transparent border border-white/10 text-slate-300 font-medium hover:text-slate-100 hover:border-white/25 transition-all text-base">
            See How It Works
          </Link>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xs text-slate-500"
        >
          Free forever · No credit card · Works with your college documents
        </motion.p>
      </div>
    </div>
  );
};
