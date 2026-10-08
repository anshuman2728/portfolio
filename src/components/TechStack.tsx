import React, { useState } from 'react';
import { 
  Search, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.name)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-white" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-white" />;
      case 'Server':
        return <Server className="w-5 h-5 text-white" />;
      case 'Database':
        return <Database className="w-5 h-5 text-white" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-white" />;
      default:
        return <Cpu className="w-5 h-5 text-white" />;
    }
  };

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
    <section id="stack" className="py-24 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span>[ 03 / TECHNICAL SPECIFICATIONS &amp; COMPETENCIES ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="SKILLS & TOOLING."
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
          Structured inventory of programming languages, frontend/backend technologies, databases, and core computer science fundamentals.
        </p>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 mb-16 font-mono text-xs">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`min-h-[40px] px-3.5 py-1.5 border transition-all duration-200 cursor-pointer uppercase ${
                activeCategory === cat
                  ? 'border-white bg-white text-black font-semibold shadow-sm'
                  : 'border-zinc-800 bg-zinc-950/70 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
              aria-pressed={activeCategory === cat}
            >
              <span>{cat === 'All' ? 'ALL SKILLS' : cat}</span>
            </button>
          ))}
        </div>

        {/* Minimal Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="FILTER (JAVA, SQL, REACT)..."
            aria-label="Filter skills by technology"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-zinc-950/80 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white uppercase transition-colors"
          />
        </div>
      </div>

      {/* Structured Category Rows (Zero Percentage Bars) */}
      <div className="space-y-16">
        {filteredCategories.map((category, idx) => {
          if (!category) return null;
          return (
            <div
              key={category.name}
              className="editorial-border-t pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left group/category"
            >
              {/* Left: Category Label, Icon & Count */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-900 border border-zinc-800">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                      ( 0{idx + 1} )
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-zinc-400">
                  {category.skills.length} verified competencies applied in production and academic coursework.
                </p>
              </div>

              {/* Right: Interactive Skills Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 font-mono">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 bg-zinc-950/70 border border-zinc-800/90 hover:border-zinc-500 hover:bg-zinc-900/40 transition-all duration-200 flex flex-col justify-between group/card"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white font-sans tracking-tight group-hover/card:text-zinc-100 transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90" title="Core Focus" />
                        )}
                      </div>
                      {skill.level && (
                        <div className="text-[11px] font-mono text-zinc-400 mt-2 leading-relaxed">
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
