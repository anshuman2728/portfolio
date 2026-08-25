import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">
            [ 03 / PROFILE &amp; PHILOSOPHY ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="BACKGROUND & RIGOR."
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
          Balancing computational logic, algorithmic depth, and meticulous visual sensitivity.
        </p>
      </div>

      {/* 2-Column Editorial Magazine Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Portrait in Clean Editorial Frame */}
        <div className="lg:col-span-5 space-y-4 text-left group">
          <div className="editorial-border p-2 bg-[#0C0C0F] transition-all duration-500 group-hover:border-zinc-700">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src={PERSONAL_INFO.portraitUrl}
                alt="Anshuman Singh"
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
          <div className="p-6 bg-zinc-950/60 border border-zinc-800 space-y-3 font-mono text-xs text-left group-hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between text-zinc-400">
              <span>DEGREE:</span>
              <span className="text-white">B.TECH IN CSE (2023–2027)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>INSTITUTION:</span>
              <span className="text-white">JSS ACADEMY (AKTU NOIDA)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>STATUS:</span>
              <span className="text-emerald-400">OPEN FOR SDE ROLES</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Editorial Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Large Quote Statement using ScrollRevealText Soft Words */}
          <blockquote className="text-2xl sm:text-3xl font-light font-display text-white tracking-tight leading-snug">
            <ScrollRevealText
              text="“I build software that balances deep computational logic with the tactile precision of an editorial studio.”"
              trigger="Scroll"
              preset="Soft Words"
              stagger={0.07}
              offsetStart={85}
              offsetEnd={30}
              colorHidden="rgba(255, 255, 255, 0.25)"
              colorRevealed="#ffffff"
            />
          </blockquote>

          <div className="space-y-5 text-zinc-300 text-sm sm:text-base font-light leading-relaxed font-sans">
            <p>
              I am a results-oriented Software Engineer and Computer Science senior at JSS Academy of Technical Education (AKTU), Noida. My technical journey is anchored in algorithmic problem solving—with <strong>150+ Data Structures and Algorithms problems solved in Java on LeetCode</strong>—paired with modern full-stack web application engineering.
            </p>

            <p>
              My work spans architecting autonomous AI interviewers with multi-turn prompt workflows and zero-downtime heuristic fallback resilience in <strong>Next.js 16</strong>, to building scalable digital commerce platforms in <strong>React 19</strong>, <strong>TypeScript</strong>, and <strong>Supabase PostgreSQL</strong>.
            </p>
          </div>

          {/* Dual Edge: Photography & Creative Sensibility */}
          <div className="p-6 sm:p-8 bg-[#0E0E12] border border-zinc-800 space-y-3 font-mono hover:border-zinc-700 transition-colors">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
              [ 04 / THE MULTIDISCIPLINARY EDGE ]
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Creative Direction &amp; Visual Storytelling
            </h4>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
              With 2 years of active involvement in campus <strong>Photography &amp; Literature Clubs</strong>, I bring a refined visual sensibility for typography, optical rhythm, and color harmony. This allows me to bridge complex backend services with interfaces that feel polished, intentional, and expensive.
            </p>
          </div>

          {/* Core Foundations Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-zinc-400 pt-2">
            <div className="p-3 border border-zinc-800 hover:border-zinc-600 transition-colors text-center">
              <span className="text-white font-bold block">150+</span>
              <span className="text-[10px] uppercase">DSA in Java</span>
            </div>
            <div className="p-3 border border-zinc-800 hover:border-zinc-600 transition-colors text-center">
              <span className="text-white font-bold block">Java</span>
              <span className="text-[10px] uppercase">HackerRank Cert</span>
            </div>
            <div className="p-3 border border-zinc-800 hover:border-zinc-600 transition-colors text-center">
              <span className="text-white font-bold block">SIH</span>
              <span className="text-[10px] uppercase">Hackathon</span>
            </div>
            <div className="p-3 border border-zinc-800 hover:border-zinc-600 transition-colors text-center">
              <span className="text-white font-bold block">2025</span>
              <span className="text-[10px] uppercase">Youth Parliament</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
