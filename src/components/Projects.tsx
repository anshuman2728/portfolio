import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Plus, 
  Database, 
  Cpu, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  Flame,
  Radio
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
  const [featuredTab, setFeaturedTab] = useState<'stream' | 'telemetry'>('stream');

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  const featuredProject = PROJECTS.find((p) => p.id === 'intervai') || PROJECTS[0];
  const showFeaturedHero = activeFilter === 'ALL' || activeFilter === 'AI';

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

      {/* 1. VISUALLY DOMINANT FEATURED PROJECT TREATMENT (IntervAI) */}
      {showFeaturedHero && (
        <div className="mb-24 sm:mb-32 text-left">
          <div className="relative border border-zinc-700/80 bg-[#0B0B0E] p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_-25px_rgba(255,255,255,0.08)] group/featured hover:border-zinc-500 transition-all duration-500">
            {/* Featured Badge Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-8 text-xs font-mono tracking-widest uppercase">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 text-white border border-white/20 font-semibold text-[11px]">
                  <Flame className="w-3.5 h-3.5 text-amber-300" />
                  <span>FLAGSHIP SYSTEM</span>
                </span>
                <span className="text-zinc-400 hidden sm:inline">&bull;</span>
                <span className="text-zinc-400 hidden sm:inline">01 / FEATURED ARCHITECTURE</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>STATUS: VERIFIED ON VERCEL</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Core Identity & Editorial Specifications */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-1">
                    PROJECT NUMBER: 01
                  </div>
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2 tracking-wide uppercase">
                    {featuredProject.tagline}
                  </p>
                </div>

                {/* Problem & Solution Mini-Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-1">
                  <div className="p-4 bg-zinc-950/80 border border-zinc-800 space-y-1.5">
                    <div className="text-[10px] text-amber-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3" />
                      <span>THE PROBLEM</span>
                    </div>
                    <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                      {featuredProject.problem}
                    </p>
                  </div>

                  <div className="p-4 bg-zinc-950/80 border border-zinc-800 space-y-1.5">
                    <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>THE SOLUTION</span>
                    </div>
                    <p className="text-zinc-300 font-sans leading-relaxed text-xs">
                      {featuredProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2 pt-1 font-mono text-xs">
                  <div className="text-[11px] text-zinc-500 uppercase tracking-widest">
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </div>
                  <div className="space-y-1.5 text-zinc-300">
                    {featuredProject.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="text-zinc-500 font-bold">&bull;</span>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-2 font-mono">
                  <div className="text-[11px] text-zinc-500 uppercase tracking-widest mb-2">
                    TECHNOLOGY STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-300 hover:border-zinc-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* My Contribution */}
                <div className="p-4 bg-black/40 border border-zinc-800/80 text-xs font-mono space-y-1">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">
                    MY CONTRIBUTION &amp; ROLE:
                  </span>
                  <p className="text-zinc-300 leading-relaxed font-sans">
                    {featuredProject.myContribution}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest uppercase">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-5 py-3 bg-white text-black font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-sm"
                    >
                      <span>LAUNCH LIVE PLATFORM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="min-h-[44px] px-4 py-3 border border-zinc-700 text-zinc-200 hover:text-white hover:border-zinc-500 bg-zinc-900/80 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>CASE STUDY SPEC</span>
                    <Plus className="w-4 h-4" />
                  </button>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-3 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GITHUB</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Animated Project Preview & Telemetry Console */}
              <div className="lg:col-span-6 space-y-4">
                <div className="border border-zinc-800 bg-black/90 p-5 sm:p-6 space-y-5 shadow-2xl relative overflow-hidden">
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                      </div>
                      <span className="text-zinc-400 tracking-wider text-[11px] ml-2 font-mono">
                        intervai-engine-v16.2
                      </span>
                    </div>

                    {/* Console Tab Toggle */}
                    <div className="flex items-center border border-zinc-800 p-0.5 bg-zinc-950 text-[10px]">
                      <button
                        onClick={() => setFeaturedTab('stream')}
                        className={`px-2 py-1 transition-colors ${
                          featuredTab === 'stream' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        REASONING STREAM
                      </button>
                      <button
                        onClick={() => setFeaturedTab('telemetry')}
                        className={`px-2 py-1 transition-colors ${
                          featuredTab === 'telemetry' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        SCORECARD
                      </button>
                    </div>
                  </div>

                  {/* Terminal Content based on Tab */}
                  {featuredTab === 'stream' ? (
                    <div className="space-y-4 font-mono text-xs">
                      {/* Active Prompt Simulation */}
                      <div className="p-3 bg-zinc-950 border border-zinc-800/80 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5 text-zinc-400">
                            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                            <span>ACTIVE CANDIDATE CHALLENGE [TURN 03/05]</span>
                          </span>
                          <span>LATENCY: 240MS</span>
                        </div>
                        <p className="text-zinc-200 text-xs font-medium">
                          &gt; &quot;Explain how you would design an in-memory heuristic fallback when OpenRouter API encounters rate limits (429 Too Many Requests).&quot;
                        </p>
                      </div>

                      {/* Autonomous Reasoning Stream */}
                      <div className="p-3.5 bg-zinc-950/60 border border-zinc-800/80 space-y-2">
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
                          <span className="text-white font-bold flex items-center gap-1.5">
                            <Terminal className="w-3 h-3 text-zinc-400" />
                            EVALUATOR REASONING TRACE
                          </span>
                          <span className="text-emerald-400 text-[10px]">VERIFIED 100% UPTIME</span>
                        </div>
                        <div className="space-y-1 text-zinc-300 text-[11px] leading-relaxed">
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

                      {/* Engine Dual Redundancy Spec */}
                      <div className="grid grid-cols-2 gap-3 text-left">
                        <div className="p-3 bg-zinc-950 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase">PRIMARY ENGINE</div>
                          <div className="text-white font-bold mt-0.5">OpenRouter API</div>
                          <div className="text-[10px] text-zinc-400 mt-1">Multi-turn context streaming</div>
                        </div>
                        <div className="p-3 bg-zinc-950 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase">REDUNDANCY</div>
                          <div className="text-emerald-400 font-bold mt-0.5">Heuristic Fallback</div>
                          <div className="text-[10px] text-zinc-400 mt-1">Zero downtime resilience</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 font-mono text-xs">
                      {/* Rubric Scorecard */}
                      <div className="space-y-3">
                        <div className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                          <span>SYSTEM GRADING RUBRIC</span>
                          <span className="text-emerald-400">OVERALL: 94.2% (EXCELLENT)</span>
                        </div>

                        {/* Bar 1 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] text-zinc-300">
                            <span>System Architecture &amp; Scalability</span>
                            <span className="text-white font-bold">95%</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-1000" style={{ width: '95%' }} />
                          </div>
                        </div>

                        {/* Bar 2 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] text-zinc-300">
                            <span>Data Structures &amp; Algorithmic Depth</span>
                            <span className="text-white font-bold">92%</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-1000" style={{ width: '92%' }} />
                          </div>
                        </div>

                        {/* Bar 3 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] text-zinc-300">
                            <span>Edge Cases &amp; Concurrency Handling</span>
                            <span className="text-white font-bold">96%</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-1000" style={{ width: '96%' }} />
                          </div>
                        </div>

                        {/* Bar 4 */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[11px] text-zinc-300">
                            <span>Dual-Engine Fallback Resilience</span>
                            <span className="text-emerald-400 font-bold">100%</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 transition-all duration-1000" style={{ width: '100%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Candidate Portal Summary */}
                      <div className="p-3 bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 leading-relaxed">
                        Data persisted directly to MongoDB with candidate feedback diagnostics, radar metrics, and session transcripts.
                      </div>
                    </div>
                  )}

                  {/* Architecture Topology Badge */}
                  <div className="p-3 bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Next.js 16 &bull; Express &bull; MongoDB</span>
                    </span>
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="text-white hover:underline cursor-pointer"
                    >
                      [ View Full Architecture &rarr; ]
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. CURATED EDITORIAL PROJECTS SHOWCASE (All projects matching filter) */}
      <div className="space-y-20 sm:space-y-28">
        {filteredProjects.map((project, index) => {
          const projectNum = `0${index + 1}`.slice(-2);

          return (
            <article 
              key={project.id}
              data-cursor="project"
              className="editorial-border-t pt-12 sm:pt-16 group/card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Column: Numbering, Value Proposition, Problem, Solution, Contribution */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  {/* Project Number */}
                  <div className="font-mono text-sm sm:text-base font-semibold text-zinc-500 tracking-widest group-hover/card:text-white transition-colors flex items-center justify-between">
                    <span>( {projectNum} )</span>
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
                        className="min-h-[44px] px-4 py-2.5 bg-white text-black font-semibold flex items-center gap-1.5 hover:bg-zinc-200 transition-colors shadow-sm"
                      >
                        <span>LAUNCH DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
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
                        className="min-h-[44px] px-3.5 py-2.5 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Architectural Panel & Key Features Breakdown */}
                <div className="lg:col-span-7 editorial-panel p-6 sm:p-8 space-y-6 text-left group-hover/card:border-zinc-700 transition-all duration-500">
                  <div className="flex items-center justify-between editorial-border-b pb-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    <div className="flex items-center gap-2">
                      {project.id === 'intervai' && <Cpu className="w-4 h-4 text-emerald-400" />}
                      {project.id === 'hemant-tiles' && <Database className="w-4 h-4 text-blue-400" />}
                      {project.id === 'cyber-heist' && <Cpu className="w-4 h-4 text-purple-400" />}
                      {project.id === 'jeevan-setu' && <Layers className="w-4 h-4 text-amber-400" />}
                      <span>SYSTEM ARCHITECTURE &amp; SPECS</span>
                    </div>
                    {project.liveUrl ? (
                      <span className="text-emerald-400 font-semibold">STATUS: LIVE PRODUCTION</span>
                    ) : (
                      <span className="text-zinc-500 font-semibold">STATUS: REPOSITORY VERIFIED</span>
                    )}
                  </div>

                  {/* Architecture Summary */}
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

                  {/* Metrics Bar */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-zinc-800/60 font-mono">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 bg-zinc-950/70 border border-zinc-800">
                          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{m.label}</div>
                          <div className="text-xs font-bold text-white mt-1">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deep Dive Action Prompt */}
                  <div className="pt-2 text-right">
                    <button
                      onClick={() => setSelectedProject(project)}
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
