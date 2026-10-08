import React from 'react';
import { ArrowDown, Download, ArrowUpRight } from 'lucide-react';
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
    <section 
      id="home" 
      className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[92vh] scroll-mt-24"
      aria-label="Overview & Hero"
    >
      
      {/* Top Subtle Status Line */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 editorial-border-b pb-5 text-xs font-mono tracking-widest text-zinc-400 uppercase animate-in fade-in duration-700">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-zinc-200 font-medium tracking-wider">
            B.Tech CSE &apos;27 &bull; Open to Software Engineering Opportunities
          </span>
        </div>

        <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
          <span>NOIDA, INDIA</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="hidden sm:inline">FULL-STACK &amp; AI SYSTEMS</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography & Narrative */}
      <div className="py-12 sm:py-20 lg:py-24 space-y-8 text-left">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
            <span className="text-zinc-600">[ 00 ]</span>
            <span>COMPUTER SCIENCE ENGINEER &bull; FULL-STACK &amp; INTELLIGENT SYSTEMS</span>
          </div>
          
          {/* Main Title using ScrollRevealText with Character Reveal */}
          <h1 className="text-[2.65rem] leading-[0.92] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter font-display text-white">
            <ScrollRevealText
              text="ANSHUMAN SINGH."
              trigger="On Load"
              preset="Fade In Up"
              splitMode="Characters"
              stagger={0.05}
              onLoadDuration={1.1}
              colorHidden="rgba(255, 255, 255, 0.2)"
              colorRevealed="#ffffff"
            />
          </h1>
        </div>

        {/* Supporting Editorial Paragraph with High Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2">
          <div className="lg:col-span-8 text-left space-y-5">
            <div className="text-xl sm:text-2xl md:text-3xl text-zinc-200 font-light leading-snug tracking-tight max-w-3xl">
              <ScrollRevealText
                text="Architecting autonomous AI systems, resilient full-stack platforms, and high-performance applications with Java, React, Spring Boot, SQL, and algorithmic rigor (DSA)."
                trigger="On Load"
                preset="Soft Words"
                stagger={0.07}
                onLoadDuration={1.3}
                colorHidden="rgba(255, 255, 255, 0.3)"
                colorRevealed="#f4f4f5"
              />
            </div>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              <span className="text-zinc-600">CORE FOCUS:</span>
              <span className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300">JAVA</span>
              <span className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300">REACT 19</span>
              <span className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300">SPRING BOOT</span>
              <span className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300">SQL &amp; SUPABASE</span>
              <span className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300">175+ LEETCODE DSA</span>
              <span className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-800 text-zinc-300">AGENTIC AI</span>
            </div>
          </div>

          {/* CTAs with Refined Hierarchy */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 font-mono text-xs tracking-widest uppercase">
            {/* Primary CTA: "View My Work" */}
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-bold flex items-center justify-center gap-2.5 hover:bg-zinc-200 transition-all duration-300 cursor-pointer shadow-lg shadow-white/5 group focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Secondary CTA: "Download Resume" */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Anshuman_Singh_Resume.pdf"
              className="w-full sm:w-auto px-5 py-3.5 border border-zinc-700 hover:border-white text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group focus-visible:ring-2 focus-visible:ring-white"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* Tertiary Action: Interactive CV Modal */}
            <button
              onClick={onOpenResume}
              className="px-2 py-1.5 text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-[11px]"
            >
              <span>INTERACTIVE CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Metrics Strip with Clean Line Dividers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 editorial-border-t editorial-border-b text-left">
        {PERSONAL_INFO.quickMetrics.map((metric, i) => (
          <div 
            key={i} 
            className={`p-5 sm:p-7 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors ${
              i !== 3 ? 'lg:editorial-border-r' : ''
            } ${i % 2 === 0 ? 'border-r sm:border-r-0 lg:border-r border-zinc-800' : ''}`}
          >
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              0{i + 1} / METRIC
            </div>
            
            <div className="my-2.5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter group-hover:text-zinc-200 transition-colors">
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
