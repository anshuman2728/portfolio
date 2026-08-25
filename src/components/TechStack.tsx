import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.name)];

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    if (activeCategory !== 'All' && category.name !== activeCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.level && skill.level.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="stack" className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">
            [ 02 / TECHNICAL EXPERTISE ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="COMPETENCIES & TOOLING."
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
          A verified matrix of core programming languages, modern web frameworks, cloud databases, and algorithmic problem-solving.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 mb-12 font-mono text-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-all uppercase cursor-pointer py-1.5 px-3 border ${
                activeCategory === cat
                  ? 'border-white text-white bg-white/5'
                  : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <span>{cat === 'All' ? 'ALL CATEGORIES' : cat}</span>
            </button>
          ))}
        </div>

        {/* Minimal Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="FILTER BY STACK (E.G. JAVA, REACT)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-transparent border border-zinc-800 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 uppercase transition-colors"
          />
        </div>
      </div>

      {/* Editorial Numbered Skills Rows */}
      <div className="space-y-12">
        {filteredCategories.map((category, idx) => {
          if (!category) return null;
          return (
            <div
              key={category.name}
              className="editorial-border-t pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left group"
            >
              {/* Category Label & Number */}
              <div className="lg:col-span-4 space-y-2">
                <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase group-hover:text-zinc-300 transition-colors">
                  ( 0{idx + 1} )
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {category.name}
                </h3>
                <p className="text-xs font-mono text-zinc-500">
                  {category.skills.length} verified competencies
                </p>
              </div>

              {/* Skills Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-sans tracking-tight">
                          {skill.name}
                        </span>
                        {skill.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      {skill.level && (
                        <div className="text-[11px] font-mono text-zinc-400 mt-2 uppercase tracking-wider">
                          {skill.level}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
