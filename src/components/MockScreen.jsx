import React from 'react';
import { Badge } from './Badge';

export const MockScreen = ({ type }) => {
  const Chrome = ({ children, title }) => (
    <div className="bg-navy-900 border border-white/10 rounded-xl overflow-hidden font-body w-full max-w-lg mx-auto shadow-2xl shadow-indigo-500/10 text-left">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-navy-800/50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
        <span className="text-[11px] text-slate-400 ml-2 font-medium tracking-wide">{title}</span>
      </div>
      <div className="p-4 bg-navy-950">
        {children}
      </div>
    </div>
  );

  switch(type) {
    case 'dashboard':
      return (
        <Chrome title="alip / dashboard">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm font-semibold text-slate-100">Good morning, Dhanush 👋</div>
              <div className="text-[11px] text-slate-400">3 exams in the next 2 weeks</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500 flex items-center justify-center text-xs font-bold text-indigo-400">D</div>
          </div>
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">Exam countdown</div>
          <div className="flex gap-2 mb-4">
            <div className="flex-1 bg-red-500/5 border border-red-500/20 rounded-lg p-2.5">
              <Badge variant="danger">Critical</Badge>
              <div className="font-heading text-[22px] font-bold text-red-400 mt-1">4</div>
              <div className="text-[10px] text-slate-400">days · DBMS</div>
              <div className="h-1 bg-white/5 rounded-full mt-2 overflow-hidden"><div className="h-full bg-red-400 w-[38%]"></div></div>
              <div className="text-[9px] text-red-400/70 mt-1">38% complete</div>
            </div>
            <div className="flex-1 bg-amber-500/5 border border-amber-500/20 rounded-lg p-2.5">
              <Badge variant="warn">On Track</Badge>
              <div className="font-heading text-[22px] font-bold text-amber-400 mt-1">9</div>
              <div className="text-[10px] text-slate-400">days · OS</div>
              <div className="h-1 bg-white/5 rounded-full mt-2 overflow-hidden"><div className="h-full bg-amber-400 w-[55%]"></div></div>
              <div className="text-[9px] text-amber-400/70 mt-1">55% complete</div>
            </div>
            <div className="flex-1 bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-2.5">
              <Badge variant="success">Safe</Badge>
              <div className="font-heading text-[22px] font-bold text-emerald-400 mt-1">15</div>
              <div className="text-[10px] text-slate-400">days · CN</div>
              <div className="h-1 bg-white/5 rounded-full mt-2 overflow-hidden"><div className="h-full bg-emerald-400 w-[20%]"></div></div>
              <div className="text-[9px] text-emerald-400/70 mt-1">20% complete</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">Study today</div>
          <div className="flex items-center justify-between bg-navy-800 border border-white/5 rounded-lg p-2.5 mb-1.5">
            <div>
              <div className="text-xs text-slate-100 font-medium">Normalization (2NF, 3NF)</div>
              <div className="text-[10px] text-slate-400 mt-0.5">DBMS · Unit 2 · Not started</div>
            </div>
            <button className="text-[10px] bg-indigo-500 text-white px-2.5 py-1.5 rounded-md font-medium">Start →</button>
          </div>
          <div className="flex items-center justify-between bg-navy-800 border border-white/5 rounded-lg p-2.5">
            <div>
              <div className="text-xs text-slate-100 font-medium">Relational Algebra</div>
              <div className="text-[10px] text-slate-400 mt-0.5">DBMS · Unit 2 · Confused last time</div>
            </div>
            <button className="text-[10px] bg-indigo-500 text-white px-2.5 py-1.5 rounded-md font-medium">Start →</button>
          </div>
        </Chrome>
      );
    case 'topic':
      return (
        <Chrome title="alip / dbms / normalization">
          <div className="text-[10px] text-slate-400 mb-2.5">Dashboard → DBMS → Unit 2 → Normalization</div>
          <div className="flex items-center justify-between mb-3">
            <div className="font-heading text-base font-bold text-slate-100">Normalization</div>
            <div className="text-[10px] font-semibold px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full">🔍 Full Explanation</div>
          </div>
          <div className="bg-navy-800 border border-white/5 rounded-lg p-3 text-xs text-slate-300 leading-[1.7] mb-2.5">
            <strong className="text-slate-100 font-semibold">Concept:</strong> Normalization reduces redundancy in relational databases by applying normal forms.<br/><br/>
            <strong className="text-slate-100 font-semibold">Real Example:</strong> A student table storing TeacherName with every row is redundant. Split it into a Teachers table — refer by ID instead.<br/><br/>
            <strong className="text-slate-100 font-semibold">1NF → 2NF → 3NF:</strong> Atomic values → no partial deps → no transitive deps.
          </div>
          <div className="mb-3">
            <span className="inline-flex items-center text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 gap-1.5">
              📄 From your notes: DBMS_Unit2.pdf
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <button className="text-[11px] font-medium bg-indigo-500 text-white py-2 rounded-lg">✓ I understood this</button>
            <button className="text-[11px] font-medium border border-white/10 text-slate-300 py-2 rounded-lg hover:bg-white/5">💡 I'm confused about this</button>
          </div>
        </Chrome>
      );
    case 'chatbot':
      return (
        <Chrome title="alip / dbms / chat">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 -mx-4 px-4 bg-navy-800/30">
            <div>
              <div className="text-[13px] font-semibold text-slate-100">🧠 Subject Master — DBMS</div>
              <div className="text-[10px] text-slate-400">Answers from your notes only</div>
            </div>
            <span className="text-slate-400 cursor-pointer text-base">×</span>
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex">
              <div className="bg-navy-800 border border-white/5 rounded-xl rounded-bl-sm p-2 text-xs text-slate-300 max-w-[85%] leading-[1.5]">
                I noticed you haven't covered Unit 3 (Transactions & Concurrency) yet. Want me to walk you through it?
                <div className="text-[9px] text-slate-500 mt-1">📄 From your DBMS notes</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-indigo-500 rounded-xl rounded-br-sm p-2 text-xs text-white max-w-[85%] leading-[1.5]">
                Explain BCNF with an example
              </div>
            </div>
            <div className="flex">
              <div className="bg-navy-800 border border-white/5 rounded-xl rounded-bl-sm p-2 text-xs text-slate-300 max-w-[85%] leading-[1.5]">
                BCNF is stricter than 3NF. For every functional dependency X → Y, X must be a superkey.<br/><br/>
                <strong className="text-slate-100 font-semibold">Example from your notes:</strong> In Course-Teacher-Room, if Room → Teacher but Room isn't a superkey — BCNF is violated.
                <div className="text-[9px] text-slate-500 mt-1">📄 From your DBMS Unit 2 notes</div>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 pt-2.5 border-t border-white/5 -mx-4 px-4">
            <input type="text" className="flex-1 bg-navy-800 border border-white/10 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-300 outline-none focus:border-indigo-500/50" placeholder="Ask anything about DBMS..." />
            <button className="bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs hover:bg-indigo-400">→</button>
          </div>
        </Chrome>
      );
    case 'revision':
      return (
        <Chrome title="alip / dbms / revision">
          <div className="flex gap-2 mb-3.5">
            <div className="flex-1 text-center py-1.5 bg-indigo-500 rounded-lg text-xs font-semibold text-white">Flashcards</div>
            <div className="flex-1 text-center py-1.5 bg-navy-800 border border-white/10 rounded-lg text-xs text-slate-400">One-Mark Q&A</div>
          </div>
          <div className="bg-navy-800 border border-white/10 rounded-xl p-7 text-center mb-3">
            <div className="text-[10px] text-slate-400 mb-2.5">DBMS — Unit 2 · Card 4 of 18</div>
            <div className="font-heading text-lg font-bold text-slate-100 mb-1.5">Normalization</div>
            <div className="text-[11px] text-slate-400">Tap to reveal key points</div>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="text-[11px] px-3 py-1.5 border border-white/10 rounded-lg text-slate-400 hover:bg-white/5">← Prev</button>
            <button className="text-[11px] px-3.5 py-1.5 bg-indigo-500 rounded-lg text-white font-medium hover:bg-indigo-400">Flip Card</button>
            <button className="text-[11px] px-3 py-1.5 border border-white/10 rounded-lg text-slate-400 hover:bg-white/5">Next →</button>
          </div>
        </Chrome>
      );
    case 'setup':
    case 'auth':
    case 'landing':
    case 'subject':
    case 'onboarding':
      return (
        <Chrome title={`alip / ${type}`}>
          <div className="h-32 flex items-center justify-center text-slate-400 text-sm">
            Mockup pending for {type}
          </div>
        </Chrome>
      );
    default:
      return null;
  }
};
