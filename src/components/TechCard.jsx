import React from 'react';

export const TechCard = ({ tech }) => {
  return (
    <div className="bg-navy-900 p-5 hover:bg-navy-800 transition-colors duration-200">
      <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mb-2">
        {tech.category}
      </div>
      <h3 className="text-[15px] font-semibold text-slate-100 mb-1 font-heading">
        {tech.name}
      </h3>
      <p className="text-xs text-slate-400">
        {tech.description}
      </p>
    </div>
  );
};
