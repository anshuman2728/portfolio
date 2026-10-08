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

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
          ? 'editorial-nav py-3.5' 
          : 'bg-transparent py-5 sm:py-6'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Monogram & Title */}
        <button 
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer"
          aria-label="Anshuman Singh Homepage"
        >
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            ANSHUMAN SINGH
          </span>
          <span className="hidden md:inline-block text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            / SDE &amp; AI
          </span>
        </button>

        {/* Desktop Editorial Navigation Links */}
        <nav 
          className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-widest text-zinc-400"
          aria-label="Desktop Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-all duration-200 uppercase cursor-pointer relative py-1 focus-visible:outline-none focus-visible:text-white ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white animate-in fade-in duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Subtle Availability Badge */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="hidden xl:inline">Available 2026/2027</span>
          </div>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 bg-white/5 hover:bg-white text-zinc-200 hover:text-black border border-white/20 hover:border-white text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Open Curriculum Vitae (Resume)"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white p-1.5 focus-visible:ring-1 focus-visible:ring-white cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[60px] h-[calc(100vh-60px)] bg-[#09090B]/98 backdrop-blur-2xl editorial-border-t p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-navigation"
        >
          <div className="flex flex-col gap-5 pt-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
              ( INDEX NAVIGATION )
            </div>
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left font-display text-2xl sm:text-3xl font-bold transition-colors flex items-center justify-between border-b border-zinc-800/80 pb-3.5 cursor-pointer ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive && <span className="w-2 h-2 rounded-full bg-white inline-block" />}
                    <span>{link.label}</span>
                  </span>
                  <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
                </button>
              );
            })}
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
              className="w-full py-3.5 text-center bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Open Curriculum Vitae (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
