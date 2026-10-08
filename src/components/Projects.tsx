import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Plus, 
  Database, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  Radio, 
  Gamepad2, 
  AlertCircle 
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project, ProjectFilterCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { ScrollRevealText } from './ScrollRevealText';

const FILTER_CATEGORIES: { id: ProjectFilterCategory; label: string }[] = [
  { id: 'ALL', label: 'ALL' },
  { id: 'AI', label: 'AI' },
  { id: 'FULL STACK', label: 'FULL STACK' },
  { id: 'WEB', label: 'WEB' },
  { id: 'OTHER', label: 'OTHER' },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('ALL');

  // Interactive Project Tab States
  const [intervaiTab, setIntervaiTab] = useState<'stream' | 'telemetry'>('stream');
  const [hemantTab, setHemantTab] = useState<'spec' | 'catalog'>('spec');
  const [hemantFilter, setHemantFilter] = useState<'All' | 'Tiles' | 'Granite' | 'Sanitary'>('All');
  const [cyberTab, setCyberTab] = useState<'spec' | 'loop'>('spec');
  const [jeevanTab, setJeevanTab] = useState<'spec' | 'sim'>('spec');
  const [jeevanChoice, setJeevanChoice] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span>[ 01 / ENGINEERING REPOSITORY &amp; WORK ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="SYSTEMS SHOWCASE."
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
          Production full-stack platforms, autonomous AI evaluation engines, and multithreaded systems built with verified software engineering discipline.
        </p>
      </div>

      {/* Subtle Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-16 sm:mb-20 pb-4 text-xs font-mono tracking-wider">
        <span className="text-zinc-500 text-[11px] uppercase mr-2 hidden sm:inline-block">FILTER:</span>
        {FILTER_CATEGORIES.map((category) => {
          const count = category.id === 'ALL' 
            ? PROJECTS.length 
            : PROJECTS.filter(p => p.filterCategory === category.id).length;
          const isActive = activeFilter === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              data-magnetic="true"
              className={`min-h-[40px] px-3.5 py-1.5 border transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'border-white bg-white text-black font-semibold shadow-sm'
                  : 'border-zinc-800/80 bg-zinc-950/60 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
              aria-pressed={isActive}
            >
              <span>{category.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-zinc-200 text-black' : 'bg-zinc-900 text-zinc-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Unified Flagship Engineering Showcase */}
      <div className="space-y-20 sm:space-y-32">
        {filteredProjects.map((project, index) => {
          const projectNum = `0${index + 1}`.slice(-2);
          const isIntervai = project.id === 'intervai';
          const isHemant = project.id === 'hemant-tiles';
          const isCyber = project.id === 'cyber-heist';
          const isJeevan = project.id === 'jeevan-setu';

          return (
            <article 
              key={project.id}
              data-cursor="project"
              className="editorial-border-t pt-12 sm:pt-16 group/card transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Numbering, Value Proposition, Problem, Solution, Contribution */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  {/* Project Number & Status */}
                  <div className="font-mono text-sm sm:text-base font-semibold text-zinc-500 tracking-widest group-hover/card:text-white transition-colors flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span>( {projectNum} )</span>
                      {isIntervai && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-semibold">
                          <Flame className="w-3 h-3 text-amber-300" />
                          <span>FLAGSHIP SYSTEM</span>
                        </span>
                      )}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Name & One-Line Value Proposition */}
                  <div>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight group-hover/card:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2 tracking-wide uppercase">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description Overview */}
                  <p className="text-zinc-300 text-sm font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution Detailed Breakdown */}
                  <div className="space-y-3 pt-1">
                    <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 font-bold flex items-center gap-1.5">
                        <AlertTriangle className="w-3 h-3" />
                        <span>PROBLEM STATEMENT</span>
                      </div>
                      <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>ENGINEERING SOLUTION</span>
                      </div>
                      <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* My Contribution Block */}
                  <div className="p-4 bg-black/40 border border-zinc-800/80 text-xs font-mono space-y-1">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                      MY CONTRIBUTION &amp; ROLE:
                    </span>
                    <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                      {project.myContribution}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                      TECH STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest uppercase">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="live"
                        data-magnetic="true"
                        className="min-h-[44px] px-4 py-2.5 bg-white text-black font-semibold flex items-center gap-1.5 hover:bg-zinc-200 transition-colors shadow-sm"
                      >
                        <span>LAUNCH DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      data-cursor="spec"
                      data-magnetic="true"
                      className="min-h-[44px] px-4 py-2.5 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-zinc-950/80 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>SPECIFICATION</span>
                      <Plus className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="code"
                        data-magnetic="true"
                        className="min-h-[44px] px-3.5 py-2.5 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Architectural Panel & Interactive Lightweight Showcase */}
                <div className="lg:col-span-7 editorial-panel p-6 sm:p-8 space-y-6 text-left group-hover/card:border-zinc-600 transition-all duration-500">
                  
                  {/* Top Bar of Architecture Panel */}
                  <div className="flex items-center justify-between editorial-border-b pb-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    <div className="flex items-center gap-2">
                      {isIntervai && <Terminal className="w-4 h-4 text-emerald-400" />}
                      {isHemant && <Database className="w-4 h-4 text-blue-400" />}
                      {isCyber && <Gamepad2 className="w-4 h-4 text-purple-400" />}
                      {isJeevan && <Layers className="w-4 h-4 text-amber-400" />}
                      <span>
                        {isIntervai 
                          ? 'AI REASONING & TELEMETRY ENGINE' 
                          : isHemant 
                            ? 'COMMERCE DATA ARCHITECTURE' 
                            : isCyber 
                              ? 'CORE JAVA RUNTIME ARCHITECTURE' 
                              : 'CRISIS ALERT & SIMULATION PIPELINE'}
                      </span>
                    </div>

                    {project.liveUrl ? (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE ON VERCEL</span>
                      </span>
                    ) : (
                      <span className="text-zinc-500 font-semibold">STATUS: VERIFIED REPOSITORY</span>
                    )}
                  </div>

                  {/* 1. INTERVAI INTERACTIVE ENGINE */}
                  {isIntervai && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 text-[11px]">
                          ENGINE: OPENROUTER LLM + HEURISTIC FALLBACK
                        </span>
                        <div className="flex items-center border border-zinc-800 p-0.5 bg-zinc-950 text-[10px]">
                          <button
                            onClick={() => setIntervaiTab('stream')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              intervaiTab === 'stream' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            REASONING STREAM
                          </button>
                          <button
                            onClick={() => setIntervaiTab('telemetry')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              intervaiTab === 'telemetry' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            SCORECARD
                          </button>
                        </div>
                      </div>

                      {intervaiTab === 'stream' ? (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3.5 bg-black/60 border border-zinc-800 space-y-1">
                            <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest">
                              <span className="flex items-center gap-1.5 text-zinc-400">
                                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                                <span>ACTIVE ASSESSMENT CHALLENGE [MULTI-TURN]</span>
                              </span>
                              <span>LATENCY: 240MS</span>
                            </div>
                            <p className="text-zinc-200 text-xs font-medium">
                              &gt; &quot;Explain how you would design an in-memory heuristic fallback when OpenRouter API encounters rate limits (429 Too Many Requests).&quot;
                            </p>
                          </div>

                          <div className="p-3.5 bg-black/40 border border-zinc-800/80 space-y-1.5 text-[11px] leading-relaxed">
                            <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">
                              AUTONOMOUS EVALUATOR REASONING TRACE:
                            </div>
                            <p className="text-zinc-400 font-mono">
                              [0.02s] Intercepting HTTP 429 status code via Axios / Fetch gateway...
                            </p>
                            <p className="text-emerald-400/90 font-mono">
                              [0.08s] Dual-engine failover engaged: routing to local heuristic scoring matrix.
                            </p>
                            <p className="text-zinc-300 font-mono">
                              [0.18s] Evaluating AST keywords: token-bucket algorithm, circuit breaker, exponential backoff.
                            </p>
                            <p className="text-zinc-200 font-mono">
                              [0.24s] Candidate score normalized: 94/100 (Resilience Rubric: A+).
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3.5 bg-black/60 border border-zinc-800 space-y-2.5">
                            <div className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                              <span>DYNAMIC RUBRIC SCORING</span>
                              <span className="text-emerald-400 font-bold">GRADE: 94.2% (EXCELLENT)</span>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px] text-zinc-300">
                                <span>System Architecture &amp; Scalability</span>
                                <span className="text-white font-bold">95%</span>
                              </div>
                              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                                <div className="h-full bg-white transition-all duration-500" style={{ width: '95%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px] text-zinc-300">
                                <span>Algorithmic Depth &amp; Complexity</span>
                                <span className="text-white font-bold">92%</span>
                              </div>
                              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                                <div className="h-full bg-white transition-all duration-500" style={{ width: '92%' }} />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px] text-zinc-300">
                                <span>Fallback Resilience (Heuristic Engine)</span>
                                <span className="text-emerald-400 font-bold">100%</span>
                              </div>
                              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-400 transition-all duration-500" style={{ width: '100%' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3 text-left font-mono">
                        <div className="p-3 bg-black/40 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase">PRIMARY ENGINE</div>
                          <div className="text-white font-bold mt-0.5 text-xs">OpenRouter API</div>
                          <div className="text-[10px] text-zinc-400 mt-1">Multi-turn context evaluation</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase">HOT REDUNDANCY</div>
                          <div className="text-emerald-400 font-bold mt-0.5 text-xs">Heuristic Fallback</div>
                          <div className="text-[10px] text-zinc-400 mt-1">Zero downtime rate-limit immunity</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. HEMANT TILES INTERACTIVE STOREFRONT */}
                  {isHemant && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 text-[11px]">
                          CATALOG INTERFACE: REACT 19 + SUPABASE POSTGRESQL
                        </span>
                        <div className="flex items-center border border-zinc-800 p-0.5 bg-zinc-950 text-[10px]">
                          <button
                            onClick={() => setHemantTab('spec')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              hemantTab === 'spec' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            ARCHITECTURE
                          </button>
                          <button
                            onClick={() => setHemantTab('catalog')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              hemantTab === 'catalog' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            CATALOG PREVIEW
                          </button>
                        </div>
                      </div>

                      {hemantTab === 'spec' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / FRONTEND</div>
                            <div className="text-white font-medium text-xs">React 19 &amp; TypeScript</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Atomic components with Vite</div>
                          </div>
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / PERSISTENCE</div>
                            <div className="text-white font-medium text-xs">Supabase PostgreSQL</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Catalog &amp; inquiry tables</div>
                          </div>
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">03 / VALIDATION</div>
                            <div className="text-white font-medium text-xs">Zod Contracts</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Type-safe schema checks</div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 bg-black/60 border border-zinc-800 space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between text-[10px] uppercase text-zinc-400">
                            <span>INTERACTIVE CATEGORY FILTERING SIMULATOR</span>
                            <span className="text-emerald-400">REACTIVE STATE</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {(['All', 'Tiles', 'Granite', 'Sanitary'] as const).map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setHemantFilter(cat)}
                                className={`px-2 py-0.5 text-[10px] border transition-colors cursor-pointer ${
                                  hemantFilter === cat
                                    ? 'bg-white text-black border-white font-bold'
                                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div className="p-2.5 bg-zinc-950 border border-zinc-800">
                              <span className="text-zinc-500 text-[9px] block">CATEGORY ITEM</span>
                              <span className="text-white font-bold">
                                {hemantFilter === 'Granite' ? 'Black Pearl Polished Granite' : hemantFilter === 'Sanitary' ? 'Ceramic Basin Suite' : 'Vitrified Glazed Floor Tile'}
                              </span>
                              <span className="text-emerald-400 text-[10px] block mt-1">In Stock &bull; Supabase Sync</span>
                            </div>
                            <div className="p-2.5 bg-zinc-950 border border-zinc-800">
                              <span className="text-zinc-500 text-[9px] block">QUOTATION DISPATCH</span>
                              <span className="text-zinc-300 font-medium">Zod Schema Validated</span>
                              <span className="text-zinc-500 text-[10px] block mt-1">Auto Customer Hook Form</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 3. CYBER HEIST INTERACTIVE PHYSICS MONITOR */}
                  {isCyber && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 text-[11px]">
                          CORE JAVA RUNTIME: JVM MULTITHREADING
                        </span>
                        <div className="flex items-center border border-zinc-800 p-0.5 bg-zinc-950 text-[10px]">
                          <button
                            onClick={() => setCyberTab('spec')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              cyberTab === 'spec' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            ARCHITECTURE
                          </button>
                          <button
                            onClick={() => setCyberTab('loop')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              cyberTab === 'loop' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            GAME LOOP MONITOR
                          </button>
                        </div>
                      </div>

                      {cyberTab === 'spec' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / CONCURRENCY</div>
                            <div className="text-white font-medium text-xs">Multithreaded Loops</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Decoupled physics threads</div>
                          </div>
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / MECHANICS</div>
                            <div className="text-white font-medium text-xs">Collision &amp; States</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Dynamic entity state logic</div>
                          </div>
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">03 / STABILITY</div>
                            <div className="text-emerald-400 font-medium text-xs">Zero Memory Leaks</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Optimised rendering routines</div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 bg-black/60 border border-zinc-800 space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between text-[10px] uppercase text-zinc-400">
                            <span>THREAD TELEMETRY &amp; DELTA-TIME TICK MONITOR</span>
                            <span className="text-emerald-400 font-bold">60.0 FPS LOCKED</span>
                          </div>
                          <div className="space-y-1.5 text-[11px]">
                            <div className="flex justify-between p-2 bg-zinc-950 border border-zinc-800">
                              <span className="text-zinc-400">Thread-0 (Physics Engine):</span>
                              <span className="text-emerald-400 font-bold">16.6ms / frame (Deterministic)</span>
                            </div>
                            <div className="flex justify-between p-2 bg-zinc-950 border border-zinc-800">
                              <span className="text-zinc-400">Thread-1 (Input Listener):</span>
                              <span className="text-white font-bold">Non-blocking polling</span>
                            </div>
                            <div className="flex justify-between p-2 bg-zinc-950 border border-zinc-800">
                              <span className="text-zinc-400">Heap Allocation / GC:</span>
                              <span className="text-zinc-300 font-bold">0 Leaks (Object Pooling Pattern)</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. JEEVAN SETU INTERACTIVE SCENARIO SIMULATOR */}
                  {isJeevan && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 text-[11px]">
                          RESTFUL ADVISORY &amp; DISASTER SCENARIOS
                        </span>
                        <div className="flex items-center border border-zinc-800 p-0.5 bg-zinc-950 text-[10px]">
                          <button
                            onClick={() => setJeevanTab('spec')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              jeevanTab === 'spec' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            ARCHITECTURE
                          </button>
                          <button
                            onClick={() => setJeevanTab('sim')}
                            className={`px-2.5 py-1 transition-colors cursor-pointer ${
                              jeevanTab === 'sim' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            SIMULATION FEED
                          </button>
                        </div>
                      </div>

                      {jeevanTab === 'spec' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">01 / GAMIFIED ADVISORY</div>
                            <div className="text-white font-medium text-xs">Scenario Game Engine</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Interactive quiz decision trees</div>
                          </div>
                          <div className="p-3 bg-black/40 border border-zinc-800">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">02 / LIVE BROADCAST</div>
                            <div className="text-white font-medium text-xs">Emergency News Data Feed</div>
                            <div className="text-zinc-400 text-[11px] mt-1">Live national alert ingestion</div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 bg-black/60 border border-zinc-800 space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between text-[10px] uppercase text-zinc-400">
                            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                              <AlertCircle className="w-3.5 h-3.5" />
                              DISASTER PROTOCOL SCENARIO #04
                            </span>
                            <span className="text-zinc-500">SCORE: +50 PTS</span>
                          </div>
                          <p className="text-zinc-200 text-xs">
                            &quot;Seismic alert triggered. You are indoors on the 3rd floor. What is the immediate safety protocol?&quot;
                          </p>
                          <div className="space-y-1.5 pt-1">
                            {[
                              { id: 1, text: 'A) Run to the elevator immediately', correct: false },
                              { id: 2, text: 'B) Drop, Cover, and Hold On beneath a sturdy desk', correct: true },
                              { id: 3, text: 'C) Stand right next to large window glass', correct: false },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => setJeevanChoice(opt.id)}
                                className={`w-full text-left p-2 border text-[11px] transition-colors cursor-pointer ${
                                  jeevanChoice === opt.id
                                    ? opt.correct
                                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-bold'
                                      : 'bg-red-500/10 border-red-500 text-red-300 font-bold'
                                    : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                                }`}
                              >
                                {opt.text}
                              </button>
                            ))}
                          </div>
                          {jeevanChoice !== null && (
                            <p className="text-[10px] text-zinc-400 pt-1">
                              {jeevanChoice === 2
                                ? '✓ Correct: Drop, Cover, Hold On minimizes debris hazard before evacuation.'
                                : '✗ Incorrect: Never use elevators or stand near shatterable glass during tremors.'}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Topology Summary */}
                  <div className="p-4 bg-black/60 border border-zinc-800/80 space-y-1.5">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                      TOPOLOGY OVERVIEW
                    </div>
                    <p className="text-zinc-300 text-xs font-mono leading-relaxed">
                      {project.architectureSummary}
                    </p>
                  </div>

                  {/* Key Features Grid */}
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                      KEY ARCHITECTURAL FEATURES
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                      {project.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="p-3 bg-black/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                            0{idx + 1} / FEATURE
                          </div>
                          <div className="text-zinc-200 text-xs leading-snug">
                            {feat}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Highlights List */}
                  <div className="space-y-2.5 pt-2 font-mono text-xs text-zinc-300">
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                      IMPLEMENTATION HIGHLIGHTS
                    </div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-zinc-500 font-bold">&bull;</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deep Dive Action Prompt */}
                  <div className="pt-2 text-right">
                    <button
                      onClick={() => setSelectedProject(project)}
                      data-cursor="spec"
                      data-magnetic="true"
                      className="text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Read Complete Case Study Spec &rarr;</span>
                    </button>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* Project Case Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
