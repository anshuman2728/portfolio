import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS, TIMELINE } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';

export const ExperienceAchievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 editorial-border-b pb-8 gap-6 text-left">
        <div>
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">
            [ 04 / VERIFIED MILESTONES &amp; HONORS ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tighter text-white">
            <ScrollRevealText
              text="HONORS & RECOGNITIONS."
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
          Competitive algorithmic problem solving, official certifications, national hackathons, and public leadership awards.
        </p>
      </div>

      {/* Editorial Milestones Table */}
      <div className="space-y-0 text-left">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={idx}
            className="editorial-border-t py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] transition-colors group"
          >
            {/* Number & Tag */}
            <div className="lg:col-span-3 font-mono text-xs text-zinc-500 tracking-widest uppercase group-hover:text-zinc-300 transition-colors">
              <span>( 0{idx + 1} )</span>
              <span className="block text-zinc-400 mt-1">{item.badge}</span>
            </div>

            {/* Title & Description */}
            <div className="lg:col-span-6 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            {/* Issuer & Link */}
            <div className="lg:col-span-3 lg:text-right font-mono text-xs text-zinc-500 uppercase tracking-wider space-y-1">
              <div className="text-zinc-400">{item.issuer}</div>
              {item.date && <div>{item.date}</div>}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-zinc-400 border-b border-white pt-1 transition-colors group-hover:border-zinc-400"
                >
                  <span>VERIFICATION</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Timeline Section */}
      <div className="mt-24 editorial-border-t pt-16 text-left">
        <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
          [ ACADEMIC &amp; CAMPUS TRAJECTORY ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
          {TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-zinc-950/60 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between text-zinc-500 uppercase tracking-widest">
                <span>0{idx + 1} / {item.type}</span>
                <span className="text-white">{item.period}</span>
              </div>

              <div>
                <h4 className="text-lg font-bold font-display text-white tracking-tight">
                  {item.title}
                </h4>
                <div className="text-zinc-400 text-xs mt-1">
                  {item.organization} &bull; {item.location}
                </div>
              </div>

              <div className="space-y-1.5 pt-2 text-zinc-300 font-sans text-xs sm:text-sm font-light">
                {item.description.map((d, dIdx) => (
                  <p key={dIdx} className="leading-relaxed">
                    &bull; {d}
                  </p>
                ))}
              </div>

              {item.skillsOrTags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skillsOrTags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
