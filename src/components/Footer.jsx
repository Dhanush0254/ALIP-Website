import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Globe } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17 0-1.56-.56-2.84-1.5-3.84.15-.38.65-1.82-.15-3.8-1.2-.38-3.9 1.4-3.9 1.4A13.3 13.3 0 0 0 12 3a13.3 13.3 0 0 0-3.3.5s-2.7-1.78-3.9-1.4c-.8 1.98-.3 3.42-.15 3.8-1 1-1.5 2.28-1.5 3.84 0 5.76 3.35 6.78 6.5 7.16A4.8 4.8 0 0 0 8.5 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6 md:px-12 bg-navy-950 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex items-center gap-2 font-heading text-lg font-semibold text-slate-100 hover:text-indigo-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
              <BrainCircuit size={18} />
            </div>
            ALIP
          </Link>
          <p className="text-sm text-slate-400">Adaptive Learning Intelligence Platform</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link to="/how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</Link>
          <Link to="/features" className="hover:text-indigo-400 transition-colors">Features</Link>
          <Link to="/screens" className="hover:text-indigo-400 transition-colors">Screens</Link>
          <Link to="/tech-stack" className="hover:text-indigo-400 transition-colors">Tech Stack</Link>
          <Link to="/team" className="hover:text-indigo-400 transition-colors">Team</Link>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="https://github.com/Dhanush0254" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors p-2 bg-navy-900 rounded-full border border-white/5 hover:border-indigo-500/30">
            <GithubIcon size={18} />
          </a>
          <a href="https://dhanush-a.netlify.app" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors p-2 bg-navy-900 rounded-full border border-white/5 hover:border-indigo-500/30">
            <Globe size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors p-2 bg-navy-900 rounded-full border border-white/5 hover:border-indigo-500/30">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
        © 2025 Dhanush · TKR College of Engineering · B.Tech CSE Final Year Project
      </div>
    </footer>
  );
};
