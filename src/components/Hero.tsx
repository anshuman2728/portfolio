import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-36 pb-24 sm:pt-48 sm:pb-36 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[90vh]">
      
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 editorial-border-b pb-6 text-xs font-mono tracking-widest text-zinc-500 uppercase animate-in fade-in duration-700">
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>( AVAILABLE FOR FULL-STACK &amp; SDE OPPORTUNITIES )</span>
        </div>
        <div className="flex items-center gap-6">
          <span>NOIDA, INDIA</span>
          <span>B.TECH CSE &bull; 2027</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography with ScrollRevealText */}
      <div className="py-16 sm:py-24 space-y-8 text-left">
        <div className="space-y-3">
          <div className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
            SOFTWARE ENGINEER &amp; AI SYSTEMS ARCHITECT
          </div>
          
          {/* Main Title using ScrollRevealText with Character Reveal */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] font-display text-white">
            <ScrollRevealText
              text="ANSHUMAN SINGH."
              trigger="On Load"
              preset="Fade In Up"
              splitMode="Characters"
              stagger={0.06}
              onLoadDuration={1.2}
              colorHidden="rgba(255, 255, 255, 0.2)"
              colorRevealed="#ffffff"
            />
          </h1>
        </div>

        {/* Supporting Editorial Paragraph with High Contrast & Soft Words Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          <div className="lg:col-span-8 text-left">
            <div className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light leading-snug tracking-tight max-w-3xl">
              <ScrollRevealText
                text="Architecting autonomous AI workflows, resilient distributed backends, and tactile digital products with React 19, Java, Node.js, and Supabase."
                trigger="On Load"
                preset="Soft Words"
                stagger={0.08}
                onLoadDuration={1.4}
                colorHidden="rgba(255, 255, 255, 0.3)"
                colorRevealed="#f4f4f5"
              />
            </div>
          </div>

          {/* CTAs with refined hover interactions */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 font-mono text-xs tracking-widest uppercase">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 text-white hover:text-zinc-400 transition-colors cursor-pointer border-b border-white pb-1"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="https://interv-ai-weld.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <span>LAUNCH INTERVAI (LIVE AI)</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="group flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>VIEW CURRICULUM VITAE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Metrics Strip with Clean Line Dividers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 editorial-border-t editorial-border-b text-left">
        {PERSONAL_INFO.quickMetrics.map((metric, i) => (
          <div 
            key={i} 
            className={`p-6 sm:p-8 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors ${
              i !== 3 ? 'lg:editorial-border-r' : ''
            } ${i % 2 === 0 ? 'border-r sm:border-r-0 lg:border-r border-zinc-800' : ''}`}
          >
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              0{i + 1} / METRIC
            </div>
            
            <div className="my-3">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter group-hover:text-zinc-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-medium text-zinc-300 mt-1 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>

            <div className="text-[11px] text-zinc-500 font-mono">
              {metric.sublabel}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
