import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'projects', label: 'WORK' },
    { id: 'stack', label: 'EXPERTISE' },
    { id: 'about', label: 'ABOUT' },
    { id: 'achievements', label: 'HONORS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'projects', 'stack', 'about', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'editorial-nav py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Monogram & Title */}
        <button 
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
        >
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-zinc-400 transition-colors">
            ANSHUMAN SINGH
          </span>
          <span className="hidden md:inline-block text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            / SDE &amp; AI
          </span>
        </button>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-widest text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors uppercase cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-white'
                    : 'hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Subtle Availability Badge */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden xl:inline">Available 2026/2027</span>
          </div>

          {/* Resume Link */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 text-xs font-mono tracking-widest uppercase text-white hover:text-zinc-400 transition-colors cursor-pointer border-b border-white pb-0.5"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#09090B] editorial-border-t p-8 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 pt-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
              ( INDEX )
            </div>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left font-display text-3xl font-bold text-white hover:text-zinc-400 transition-colors flex items-center justify-between border-b border-zinc-800 pb-4 cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>LOCATION: NOIDA, INDIA</span>
              <span className="text-emerald-400">OPEN TO ROLES</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-4 text-center bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Open Curriculum Vitae (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
