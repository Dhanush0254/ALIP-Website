import React from 'react';

export const Badge = ({ variant = 'gray', children }) => {
  const variants = {
    danger: 'bg-red-500/10 text-red-400',
    warn: 'bg-amber-500/10 text-amber-400',
    success: 'bg-emerald-500/10 text-emerald-400',
    blue: 'bg-indigo-500/10 text-indigo-400',
    gray: 'bg-slate-500/10 text-slate-400'
  };

  return (
    <span className={`inline-block text-[10px] font-semibold px-2 py-1 rounded-full ${variants[variant] || variants.gray}`}>
      {children}
    </span>
  );
};
