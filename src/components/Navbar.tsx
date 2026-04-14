import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar({ currentSection, setCurrentSection, isDesktop = true }: { currentSection: number, setCurrentSection: (i: number) => void, isDesktop?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const scrolled = isDesktop ? currentSection > 0 : mobileScrolled;

  useEffect(() => {
    if (isDesktop) return;
    const handleScroll = () => {
      setMobileScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, targetId: string) => {
    if (isDesktop) {
      e.preventDefault();
      setCurrentSection(index);
    } else {
      // Allow native anchor tag behavior on mobile but close the menu
      setMobileOpen(false);
      // Wait, if it's mobile, we can also prevent default and do a smooth scroll natively just in case
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/10" : "py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#inicio" onClick={(e) => handleNavClick(e, 0, 'inicio')} className="flex items-center group">
          {/* Using the exact physical PNG file extracted from the chat */}
          <img 
            src="/logo-final-latest.png" 
            alt="GrobaTech Logo Horizontal" 
            className="w-auto h-12 md:h-14 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(59,40,204,0.3)]" 
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#solucoes" onClick={(e) => handleNavClick(e, 1, 'solucoes')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Soluções</a>
          <a href="#como-funciona" onClick={(e) => handleNavClick(e, 2, 'como-funciona')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Como Funciona</a>
          <a href="https://wa.me/5521972706086" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium transition-all hover:scale-105 active:scale-95">
            Falar com Especialista
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 md:hidden">
          <a href="#solucoes" onClick={(e) => handleNavClick(e, 1, 'solucoes')} className="text-slate-300 p-2">Soluções</a>
          <a href="#como-funciona" onClick={(e) => handleNavClick(e, 2, 'como-funciona')} className="text-slate-300 p-2">Como Funciona</a>
          <a href="https://wa.me/5521972706086" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="p-3 text-center rounded-lg bg-primary/20 border border-primary/30 text-primary font-medium">
            Falar com Especialista
          </a>
        </div>
      )}
    </motion.nav>
  );
}
