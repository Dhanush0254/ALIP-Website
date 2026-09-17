import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BrainCircuit } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Features', path: '/features' },
    { name: 'Screens', path: '/screens' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/85 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-semibold text-slate-100 hover:text-indigo-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
              <BrainCircuit size={18} />
            </div>
            ALIP
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-100'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://github.com/Dhanush0254" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors px-4 py-2 border border-white/10 rounded-lg hover:border-white/25">
              GitHub
            </a>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-sm font-medium bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-400 transition-colors hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(99,102,241,0.2)]">
              View Project
            </button>
          </div>

          <button className="lg:hidden text-slate-300" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-navy-950 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-semibold text-slate-100" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                  <BrainCircuit size={18} />
                </div>
                ALIP
              </Link>
              <button className="text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-lg">
              {links.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium ${location.pathname === link.path ? 'text-indigo-400' : 'text-slate-300'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto flex flex-col gap-4">
              <a href="https://github.com/Dhanush0254" target="_blank" rel="noreferrer" className="text-center font-medium text-slate-300 py-3 border border-white/10 rounded-lg">
                GitHub
              </a>
              <button onClick={() => {setMobileMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'});}} className="font-medium bg-indigo-500 text-white py-3 rounded-lg">
                View Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
