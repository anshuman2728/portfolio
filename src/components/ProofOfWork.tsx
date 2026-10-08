import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { ScrollRevealText } from './ScrollRevealText';

export const ProofOfWork: React.FC = () => {
  return (
    <section id="proof" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span>[ 02 / TECHNICAL PROFILES &amp; CODEBASE GATEWAYS ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="PROFILES & CODEBASES."
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
          Direct access to active source code repositories, verified algorithmic problem-solving history, and professional engineering updates.
        </p>
      </div>

      {/* Coding Profile Links Gateway */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono text-xs text-left">
        {/* GitHub Gateway */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic="true"
          data-cursor="code"
          className="p-6 sm:p-8 bg-[#0B0B0E] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                01 / CODEBASE REPOSITORY
              </span>
              <GithubIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-white">GitHub</h3>
              <p className="text-zinc-400 text-xs mt-1.5 font-sans leading-relaxed">
                @{PERSONAL_INFO.githubUsername} &bull; Open-source systems, project codebases &amp; architectures
              </p>
            </div>
          </div>
          <div className="pt-6 flex items-center justify-between text-zinc-400 group-hover:text-white uppercase tracking-wider text-[11px] transition-colors border-t border-zinc-800/80 mt-6">
            <span>Inspect Repositories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>

        {/* LeetCode Gateway */}
        <a
          href={PERSONAL_INFO.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic="true"
          data-cursor="spec"
          className="p-6 sm:p-8 bg-[#0B0B0E] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                02 / ALGORITHMIC BENCHMARK
              </span>
              <LeetCodeIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-white">LeetCode</h3>
              <p className="text-zinc-400 text-xs mt-1.5 font-sans leading-relaxed">
                @{PERSONAL_INFO.leetcodeUsername} &bull; 175+ Data Structures &amp; Algorithms Problems in Java
              </p>
            </div>
          </div>
          <div className="pt-6 flex items-center justify-between text-zinc-400 group-hover:text-white uppercase tracking-wider text-[11px] transition-colors border-t border-zinc-800/80 mt-6">
            <span>View Solved DSA History</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>

        {/* LinkedIn Gateway */}
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic="true"
          data-cursor="live"
          className="p-6 sm:p-8 bg-[#0B0B0E] border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                03 / PROFESSIONAL NETWORK
              </span>
              <LinkedinIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display text-white">LinkedIn</h3>
              <p className="text-zinc-400 text-xs mt-1.5 font-sans leading-relaxed">
                @{PERSONAL_INFO.linkedinUsername} &bull; Engineering milestones, hackathons &amp; career network
              </p>
            </div>
          </div>
          <div className="pt-6 flex items-center justify-between text-zinc-400 group-hover:text-white uppercase tracking-wider text-[11px] transition-colors border-t border-zinc-800/80 mt-6">
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};
