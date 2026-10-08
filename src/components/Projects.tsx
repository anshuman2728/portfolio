import React, { useState } from 'react';
import { ArrowUpRight, Plus, Database, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { ScrollRevealText } from './ScrollRevealText';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">
            [ 01 / SELECTED WORK ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="FEATURED SYSTEMS."
              trigger="Scroll"
              preset="Blur Reveal"
              splitMode="Characters"
              stagger={0.06}
              offsetStart={85}
              offsetEnd={30}
              colorHidden="rgba(255, 255, 255, 0.2)"
              colorRevealed="#ffffff"
            />
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
          Production web platforms, autonomous AI evaluators, and resilient full-stack systems built with modern engineering standards.
        </p>
      </div>

      {/* Flagship Projects Editorial List */}
      <div className="space-y-24 sm:space-y-36">
        
        {/* Project 01: IntervAI */}
        <article 
          data-cursor="project"
          className="editorial-border-t pt-12 sm:pt-16 group/card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Numbering & Identity */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="font-mono text-base font-semibold text-zinc-500 tracking-widest group-hover/card:text-white transition-colors">
                ( 01 )
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
                  AUTONOMOUS AI &bull; LIVE PLATFORM
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter leading-tight group-hover/card:text-zinc-200 transition-colors">
                  IntervAI
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-2 tracking-wider uppercase">
                  Technical Interview Assessment Engine
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                Full-stack, multi-turn AI technical evaluation engine. Features real-time software engineering assessment via OpenRouter LLMs and an in-memory heuristic fallback system for 100% enterprise uptime during API rate limits.
              </p>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  STACK DEPLOYED
                </div>
                <div className="text-xs font-mono text-zinc-300 tracking-wider">
                  Next.js 16 / React / Node.js / Express / MongoDB / OpenRouter API / Tailwind CSS / TypeScript
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest uppercase">
                <a
                  href="https://interv-ai-weld.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1.5 text-white border-b border-white pb-1 hover:text-zinc-400 transition-colors"
                >
                  <span>LAUNCH LIVE DEMO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => setSelectedProject(PROJECTS[0])}
                  className="group/btn flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer border-b border-zinc-700 pb-1"
                >
                  <span>SPECIFICATION</span>
                  <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
                </button>

                <a
                  href="https://github.com/anshuman2728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Terminal & Spec Visual */}
            <div className="lg:col-span-8 editorial-panel p-6 sm:p-8 space-y-6 text-left group-hover/card:border-zinc-700 transition-all duration-500">
              <div className="flex items-center justify-between editorial-border-b pb-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYSTEM ARCHITECTURE TELEMETRY</span>
                </div>
                <span>STATUS: VERIFIED &bull; VERCEL</span>
              </div>

              {/* Architecture Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / REASONING ENGINE</div>
                  <div className="text-white font-medium">OpenRouter Multi-Turn Evaluator</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Dynamic grading across algorithms &amp; system design</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / FAULT TOLERANCE</div>
                  <div className="text-emerald-400 font-medium">In-Memory Heuristic Pipeline</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Zero-downtime degradation under rate limits</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">03 / TELEMETRY</div>
                  <div className="text-white font-medium">MongoDB Candidate Portal</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Personalized scorecards &amp; historical analytics</div>
                </div>
              </div>

              {/* Highlight List */}
              <div className="space-y-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Engineered a full-stack AI technical interviewer for dynamic, multi-turn software engineering assessments.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Integrated OpenRouter API to evaluate system design and agentic workflows, generating detailed performance scorecards.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Architected a dual-engine system with in-memory heuristic fallbacks, ensuring zero downtime during API rate limits.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Built a responsive React and Tailwind CSS candidate portal with personalised learning telemetry data.</span>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* Project 02: Hemant Tiles */}
        <article 
          data-cursor="project"
          className="editorial-border-t pt-12 sm:pt-16 group/card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Numbering & Identity */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="font-mono text-base font-semibold text-zinc-500 tracking-widest group-hover/card:text-white transition-colors">
                ( 02 )
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
                  DIGITAL COMMERCE &bull; LIVE PLATFORM
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter leading-tight group-hover/card:text-zinc-200 transition-colors">
                  Hemant Tiles
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-2 tracking-wider uppercase">
                  Building Material Commerce Platform
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                Responsive digital storefront optimizing architectural material discovery, multi-category navigation, and commercial inquiries powered by React 19, TypeScript, and Supabase PostgreSQL.
              </p>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  STACK DEPLOYED
                </div>
                <div className="text-xs font-mono text-zinc-300 tracking-wider">
                  React 19 / TypeScript / Vite / Supabase (PostgreSQL) / Tailwind CSS / Zod / React Hook Form
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest uppercase">
                <a
                  href="https://hemanttilesandbuildingmaterial.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1.5 text-white border-b border-white pb-1 hover:text-zinc-400 transition-colors"
                >
                  <span>LAUNCH STOREFRONT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="group/btn flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer border-b border-zinc-700 pb-1"
                >
                  <span>SPECIFICATION</span>
                  <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
                </button>

                <a
                  href="https://github.com/anshuman2728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Overview */}
            <div className="lg:col-span-8 editorial-panel p-6 sm:p-8 space-y-6 text-left group-hover/card:border-zinc-700 transition-all duration-500">
              <div className="flex items-center justify-between editorial-border-b pb-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-zinc-400" />
                  <span>SUPABASE DATA ARCHITECTURE</span>
                </div>
                <span>ENGINE: REACT 19 + POSTGRESQL</span>
              </div>

              {/* Architecture Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / FRONTEND</div>
                  <div className="text-white font-medium">React 19 &amp; TypeScript</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Atomic component library with high-speed Vite bundling</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / DATA PERSISTENCE</div>
                  <div className="text-white font-medium">Supabase PostgreSQL</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Relational product catalog and customer inquiry storage</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">03 / VALIDATION</div>
                  <div className="text-white font-medium">Zod Type Contracts</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Schema enforcement with React Hook Form</div>
                </div>
              </div>

              {/* Highlight List */}
              <div className="space-y-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Developed a responsive digital storefront optimising product discovery and seamless customer navigation.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Built scalable UI components using React 19 and TypeScript, integrating Supabase for secure backend data management.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Implemented structured form handling with Zod validation and React Hook Form to streamline customer inquiries.</span>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* Project 03: Cyber Heist */}
        <article 
          data-cursor="project"
          className="editorial-border-t pt-12 sm:pt-16 group/card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="font-mono text-base font-semibold text-zinc-500 tracking-widest group-hover/card:text-white transition-colors">
                ( 03 )
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
                  CORE JAVA &bull; STANDALONE APPLICATION
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter leading-tight group-hover/card:text-zinc-200 transition-colors">
                  Cyber Heist
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-2 tracking-wider uppercase">
                  Interactive Java Game Application
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                Fully functional standalone game applying core Java concepts, advanced object-oriented programming (OOP), multithreading, and event handling with custom physics game loops and leak-free memory management routines.
              </p>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  STACK DEPLOYED
                </div>
                <div className="text-xs font-mono text-zinc-300 tracking-wider">
                  Core Java / OOP / Multithreading / Event Handling / Game Loops / Collision Detection / UI/UX
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest uppercase">
                <a
                  href="https://github.com/anshuman2728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1.5 text-white border-b border-white pb-1 hover:text-zinc-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>VIEW REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => setSelectedProject(PROJECTS[2])}
                  className="group/btn flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer border-b border-zinc-700 pb-1"
                >
                  <span>SPECIFICATION</span>
                  <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 editorial-panel p-6 sm:p-8 space-y-6 text-left group-hover/card:border-zinc-700 transition-all duration-500">
              <div className="flex items-center justify-between editorial-border-b pb-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-zinc-400" />
                  <span>CORE JAVA RUNTIME ARCHITECTURE</span>
                </div>
                <span>RUNTIME: JVM &bull; MULTITHREADED</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / CONCURRENCY</div>
                  <div className="text-white font-medium">Multithreaded Loops</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Decoupled physics updates &amp; event listener threads</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / GAME MECHANICS</div>
                  <div className="text-white font-medium">Collision &amp; State</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Collision detection &amp; dynamic entity state machines</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">03 / STABILITY</div>
                  <div className="text-emerald-400 font-medium">Zero Memory Leaks</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Optimised asset rendering &amp; frame rate routines</div>
                </div>
              </div>

              <div className="space-y-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Developed a fully functional standalone game applying core Java concepts, including advanced OOP, multithreading, and event handling.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Engineered custom game loops, collision detection algorithms, and dynamic entity state management to ensure smooth runtime execution.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Optimised asset rendering and memory management routines to maintain consistent frame rates and optimal performance without memory leaks.</span>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* Project 04: Jeevan Setu */}
        <article 
          data-cursor="project"
          className="editorial-border-t pt-12 sm:pt-16 group/card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4 space-y-6 text-left">
              <div className="font-mono text-base font-semibold text-zinc-500 tracking-widest group-hover/card:text-white transition-colors">
                ( 04 )
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 block mb-2">
                  FULL-STACK SYSTEM &bull; GAMIFICATION
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tighter leading-tight group-hover/card:text-zinc-200 transition-colors">
                  Jeevan Setu
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-2 tracking-wider uppercase">
                  Disaster Management Education Platform
                </p>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                Full-stack gamified web portal built to prepare students for disaster safety protocols through interactive simulation games, real-time emergency news APIs, and scoring state machines.
              </p>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  STACK DEPLOYED
                </div>
                <div className="text-xs font-mono text-zinc-300 tracking-wider">
                  Node.js / Spring Boot / REST APIs / JavaScript / HTML5/CSS3 / MySQL / Live APIs
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest uppercase">
                <button
                  onClick={() => setSelectedProject(PROJECTS[3])}
                  className="group/btn flex items-center gap-1.5 text-white border-b border-white pb-1 hover:text-zinc-400 transition-colors cursor-pointer"
                >
                  <span>VIEW SPECIFICATION</span>
                  <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform duration-300" />
                </button>

                <a
                  href="https://github.com/anshuman2728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 editorial-panel p-6 sm:p-8 space-y-6 text-left group-hover/card:border-zinc-700 transition-all duration-500">
              <div className="flex items-center justify-between editorial-border-b pb-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <span>SYSTEM &amp; GAMIFICATION PIPELINE</span>
                <span>STATE: RESTful ARCHITECTURE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / GAMIFIED ADVISORY</div>
                  <div className="text-white font-medium">Scenario Game Engine</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Interactive quiz logic and user safety decision trees</div>
                </div>

                <div className="p-4 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / LIVE BROADCAST</div>
                  <div className="text-white font-medium">Emergency News Data Feed</div>
                  <div className="text-zinc-400 text-[11px] mt-2">Real-time national alert ingestion via third-party APIs</div>
                </div>
              </div>

              <div className="space-y-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Developed gamified learning modules demonstrating natural disaster safety protocols.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>Integrated real-time emergency APIs to stream critical safety advisories directly to students.</span>
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>

      {/* Project Case Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
