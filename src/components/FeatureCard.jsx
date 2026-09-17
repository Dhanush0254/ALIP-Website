import React from 'react';

export const FeatureCard = ({ feature }) => {
  const colorMap = {
    indigo: 'bg-indigo-500/10 text-indigo-400',
    danger: 'bg-red-500/10 text-red-400',
    success: 'bg-emerald-500/10 text-emerald-400',
    warn: 'bg-amber-500/10 text-amber-400'
  };

  return (
    <div className="bg-navy-900 p-8 hover:bg-navy-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(99,102,241,0.15)] rounded-xl border border-white/5 h-full">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-xl ${colorMap[feature.color] || colorMap.indigo}`}>
        {feature.icon}
      </div>
      <h3 className="text-[17px] font-semibold text-slate-100 mb-2 font-heading">{feature.title}</h3>
      <p className="text-sm text-slate-400 leading-[1.7]">{feature.description}</p>
    </div>
  );
};
