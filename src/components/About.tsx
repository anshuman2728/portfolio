import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';
import { ArrowUpRight, Compass, Terminal, Layers, Target, Eye } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span>[ 04 / PROFILE &amp; ENGINEERING INTENT ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="ABOUT & INTENT."
              trigger="Scroll"
              preset="Blur Reveal"
              splitMode="Characters"
              stagger={0.05}
              offsetStart={85}
              offsetEnd={30}
              colorHidden="rgba(255, 255, 255, 0.2)"
              colorRevealed="#ffffff"
            />
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
          Computational logic, algorithmic problem solving, and a refined eye for tactile software interfaces.
        </p>
      </div>

      {/* 2-Column Editorial Magazine Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Portrait in Editorial Frame & Academic Credentials */}
        <div className="lg:col-span-5 space-y-6 text-left group">
          <div className="editorial-border p-2 bg-[#0C0C0F] transition-all duration-500 group-hover:border-zinc-700">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src={PERSONAL_INFO.portraitUrl}
                alt="Portrait of Anshuman Singh, Full-Stack Software Engineer"
                loading="lazy"
                decoding="async"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="p-3 text-[11px] font-mono text-zinc-500 tracking-widest uppercase flex items-center justify-between">
              <span>FIG 01. ANSHUMAN SINGH</span>
              <span>NOIDA, UP</span>
            </div>
          </div>

          {/* Academic & Status Metadata */}
          <div className="p-6 bg-zinc-950/80 border border-zinc-800/90 space-y-3 font-mono text-xs text-left group-hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between text-zinc-400">
              <span>DEGREE:</span>
              <span className="text-white font-medium">B.TECH IN CSE (2023–2027)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>INSTITUTION:</span>
              <span className="text-white font-medium">JSS ACADEMY (AKTU NOIDA)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>LOCATION:</span>
              <span className="text-zinc-200">NOIDA, UTTAR PRADESH</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400 pt-1 border-t border-zinc-800/60">
              <span>STATUS:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN FOR SDE OPPORTUNITIES</span>
              </span>
            </div>
          </div>

          {/* Multidisciplinary Edge: Creative Direction & Visual Storytelling */}
          <div className="p-6 bg-[#0B0B0E] border border-zinc-800/80 space-y-2.5 font-mono text-left">
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
              <Eye className="w-3.5 h-3.5 text-zinc-400" />
              <span>THE MULTIDISCIPLINARY EDGE</span>
            </div>
            <h4 className="text-sm font-bold text-white font-display">
              Visual Sensibility &amp; Typographic Rhythm
            </h4>
            <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
              2 years of active involvement in campus Photography and Literature clubs informs my approach to design. I prioritize typographic hierarchy, color restraint, and optical spacing to ensure backend systems have equally thoughtful interfaces.
            </p>
          </div>
        </div>

        {/* Right Column: Structured Engineering Intent Narrative */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Editorial Quote Statement */}
          <blockquote className="text-2xl sm:text-3xl font-light font-display text-white tracking-tight leading-snug">
            <ScrollRevealText
              text="“I build software that balances computational rigor with intentional, reliable system architecture.”"
              trigger="Scroll"
              preset="Soft Words"
              stagger={0.06}
              offsetStart={85}
              offsetEnd={30}
              colorHidden="rgba(255, 255, 255, 0.25)"
              colorRevealed="#ffffff"
            />
          </blockquote>

          {/* 4 Core Authentic Engineering Sections */}
          <div className="space-y-6 pt-2 font-mono text-xs">
            
            {/* 1. WHO I AM */}
            <div className="p-6 bg-zinc-950/70 border border-zinc-800/90 space-y-2.5 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                <Compass className="w-3.5 h-3.5 text-zinc-300" />
                <span>01 / WHO I AM</span>
              </div>
              <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed">
                Computer Science undergraduate (B.Tech '27) at JSS Academy of Technical Education, Noida. Grounded in solid computational fundamentals, I write structured, maintainable code with an emphasis on algorithmic efficiency, system reliability, and modular architecture.
              </p>
            </div>

            {/* 2. WHAT I BUILD */}
            <div className="p-6 bg-zinc-950/70 border border-zinc-800/90 space-y-2.5 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                <Layers className="w-3.5 h-3.5 text-zinc-300" />
                <span>02 / WHAT I BUILD</span>
              </div>
              <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed">
                Full-stack applications, developer tools, and intelligent software systems. My projects include <strong>IntervAI</strong> (an autonomous AI interview evaluator with an in-memory heuristic fallback engine for rate-limit resilience), <strong>Hemant Tiles</strong> (a high-performance digital commerce platform with React 19, TypeScript, and Supabase PostgreSQL), and <strong>Cyber Heist</strong> (a concurrent Core Java application with custom multithreaded game loops).
              </p>
            </div>

            {/* 3. WHAT I'M CURRENTLY FOCUSED ON */}
            <div className="p-6 bg-zinc-950/70 border border-zinc-800/90 space-y-2.5 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                <span>03 / WHAT I&apos;M CURRENTLY FOCUSED ON</span>
              </div>
              <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed">
                Java, DSA, backend development, and AI-enabled applications. Consistently practicing algorithmic problem solving on LeetCode with <strong>175+ DSA problems solved in Java</strong>, designing scalable REST API services with Spring Boot and Node.js, and integrating LLMs into robust real-world evaluation workflows.
              </p>
            </div>

            {/* 4. WHAT I'M LOOKING FOR */}
            <div className="p-6 bg-zinc-950/70 border border-zinc-800/90 space-y-2.5 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>04 / WHAT I&apos;M LOOKING FOR</span>
              </div>
              <p className="text-zinc-300 text-sm font-sans font-light leading-relaxed">
                Software engineering internships and full-time opportunities (SDE / Full-Stack). Eager to contribute to engineering teams solving challenging technical problems, building distributed backends, developer tools, or AI-integrated production systems.
              </p>
            </div>

          </div>

          {/* Quick Action Link */}
          <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs tracking-widest uppercase">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-400 transition-colors"
            >
              <span>DISCUSS OPPORTUNITIES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#proof"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <span>INSPECT PROOF OF WORK &rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
