import React from 'react';
import { compareData } from '../data/compare';
import { Check, X } from 'lucide-react';

export const CompareTable = () => {
  return (
    <div className="overflow-x-auto w-full mt-16 rounded-xl border border-white/5 bg-navy-900/50">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-white/5">
            <th className="p-4 md:p-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Feature</th>
            <th className="p-4 md:p-5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Generic AI</th>
            <th className="p-4 md:p-5 text-xs font-semibold text-indigo-400 uppercase tracking-wider text-center bg-indigo-500/10 rounded-tr-xl">ALIP</th>
          </tr>
        </thead>
        <tbody>
          {compareData.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0 hover:bg-navy-800/50 transition-colors">
              <td className="p-4 md:p-5 text-sm text-slate-300">{row.feature}</td>
              <td className="p-4 md:p-5 text-center text-slate-500">
                {row.generic ? <Check size={18} className="mx-auto" /> : <X size={18} className="mx-auto" />}
              </td>
              <td className="p-4 md:p-5 text-center text-indigo-400 bg-indigo-500/5">
                {row.alip ? <Check size={18} className="mx-auto" /> : <X size={18} className="mx-auto" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
