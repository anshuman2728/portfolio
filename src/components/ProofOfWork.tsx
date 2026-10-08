import React from 'react';
import { 
  ArrowUpRight, 
  Terminal, 
  Award, 
  GraduationCap, 
  Cpu, 
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { ScrollRevealText } from './ScrollRevealText';

export const ProofOfWork: React.FC = () => {
  return (
    <section id="proof" className="py-24 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span>[ 02 / PROOF OF WORK &amp; VELOCITY ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="VERIFIED CREDIBILITY."
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
          Tangible evidence of algorithmic problem solving, competitive national hackathons, and production codebases.
        </p>
      </div>

      {/* 1. Core Proof of Work Metric Grid (Verified Only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 text-left font-mono">
        {/* Metric 1: LeetCode DSA */}
        <div className="p-6 bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-500 transition-all duration-300 group space-y-3">
          <div className="flex items-center justify-between text-zinc-500 text-[11px] uppercase tracking-wider">
            <span>ALGORITHMS</span>
            <Terminal className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              175+
            </div>
            <div className="text-xs text-zinc-300 font-semibold mt-1">
              LeetCode DSA Problems
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
            Rigorous problem solving in Java across Arrays, DP, Trees, Graphs, and Hash Maps.
          </p>
        </div>

        {/* Metric 2: Smart India Hackathon */}
        <div className="p-6 bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-500 transition-all duration-300 group space-y-3">
          <div className="flex items-center justify-between text-zinc-500 text-[11px] uppercase tracking-wider">
            <span>HACKATHONS</span>
            <Award className="w-4 h-4 text-amber-400/80 group-hover:text-amber-300 transition-colors" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              SIH
            </div>
            <div className="text-xs text-zinc-300 font-semibold mt-1">
              Smart India Hackathon
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
            National Round 2 Qualifier; also Round 2 qualifier in Adobe Student Hackathon.
          </p>
        </div>

        {/* Metric 3: Academic CSE Degree */}
        <div className="p-6 bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-500 transition-all duration-300 group space-y-3">
          <div className="flex items-center justify-between text-zinc-500 text-[11px] uppercase tracking-wider">
            <span>ACADEMICS</span>
            <GraduationCap className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              2027
            </div>
            <div className="text-xs text-zinc-300 font-semibold mt-1">
              B.Tech in Computer Science
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
            JSS Academy of Technical Education (AKTU Noida). Core CS coursework with distinction.
          </p>
        </div>

        {/* Metric 4: Verified Systems */}
        <div className="p-6 bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-500 transition-all duration-300 group space-y-3">
          <div className="flex items-center justify-between text-zinc-500 text-[11px] uppercase tracking-wider">
            <span>CODEBASES</span>
            <Cpu className="w-4 h-4 text-emerald-400/80 group-hover:text-emerald-300 transition-colors" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              04
            </div>
            <div className="text-xs text-zinc-300 font-semibold mt-1">
              Engineered Systems
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
            IntervAI, Hemant Tiles, Cyber Heist, and Jeevan Setu built with modern tech stacks.
          </p>
        </div>
      </div>

      {/* 2. Coding Profile Links Gateway */}
      <div className="mb-16 text-left">
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
          [ TECHNICAL PROFILES &amp; CODEBASE GATEWAYS ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {/* GitHub Gateway */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#0B0B0E] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  CODEBASE REPOSITORY
                </span>
                <GithubIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">GitHub</h3>
                <p className="text-zinc-400 text-xs mt-1 font-sans">
                  @{PERSONAL_INFO.githubUsername} &bull; Open-source systems &amp; repositories
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-zinc-400 group-hover:text-white uppercase tracking-wider text-[11px] transition-colors border-t border-zinc-800/80 mt-4">
              <span>Inspect Source Repositories</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* LeetCode Gateway */}
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#0B0B0E] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  ALGORITHMIC BENCHMARK
                </span>
                <LeetCodeIcon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">LeetCode</h3>
                <p className="text-zinc-400 text-xs mt-1 font-sans">
                  @{PERSONAL_INFO.leetcodeUsername} &bull; 175+ Problems Solved in Java
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-zinc-400 group-hover:text-white uppercase tracking-wider text-[11px] transition-colors border-t border-zinc-800/80 mt-4">
              <span>View Solved Problem History</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Gateway */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#0B0B0E] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  PROFESSIONAL GRAPH
                </span>
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">LinkedIn</h3>
                <p className="text-zinc-400 text-xs mt-1 font-sans">
                  @{PERSONAL_INFO.linkedinUsername} &bull; Engineering updates &amp; network
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-zinc-400 group-hover:text-white uppercase tracking-wider text-[11px] transition-colors border-t border-zinc-800/80 mt-4">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      {/* 3. CURRENTLY BUILDING Spotlight */}
      <div className="border border-zinc-800 bg-[#0A0A0D] p-6 sm:p-8 text-left group hover:border-zinc-600 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 text-white border border-white/20 font-semibold text-[10px]">
                <Flame className="w-3 h-3 text-amber-300" />
                <span>CURRENTLY BUILDING</span>
              </span>
              <span className="text-emerald-400 text-[11px] flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE SPRINT</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                IntervAI — Dynamic AI Technical Assessment Engine
              </h3>
              <p className="text-zinc-300 text-sm max-w-2xl font-light font-sans mt-2 leading-relaxed">
                Extending autonomous multi-turn software engineering evaluation pipelines with OpenRouter LLM context streams, custom algorithmic scoring rubrics, and in-memory heuristic fallback systems for 100% uptime rate-limit immunity.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400">Next.js 16</span>
              <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400">OpenRouter LLMs</span>
              <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400">Heuristic Engine</span>
              <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400">MongoDB</span>
            </div>
          </div>

          <div className="self-start md:self-center shrink-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-semibold text-xs font-mono tracking-wider uppercase hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>View project &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
