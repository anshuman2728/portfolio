import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, AlertTriangle, Layers, Cpu, Award } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Architectural Specification`}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0A0A0D] border border-zinc-800 p-6 sm:p-10 shadow-2xl text-left text-zinc-300 font-mono scrollbar-thin scrollbar-thumb-zinc-700 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2.5 text-zinc-500 hover:text-white transition-colors cursor-pointer border border-zinc-800/80 hover:border-zinc-700 bg-zinc-950/80 rounded-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="pr-12 border-b border-zinc-800/80 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-[10px] text-zinc-500 uppercase tracking-widest mb-3">
            <span className="px-2 py-0.5 border border-zinc-800 bg-zinc-950 text-zinc-400">
              {project.category}
            </span>
            <span>&bull;</span>
            <span className="text-emerald-400 font-semibold">
              CASE STUDY SPECIFICATION
            </span>
            {project.featured && (
              <>
                <span>&bull;</span>
                <span className="text-zinc-400">FEATURED SYSTEM</span>
              </>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action CTAs & Repository Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 my-6 text-xs uppercase tracking-widest border-b border-zinc-800/60 pb-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              <span>Launch Live Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 bg-zinc-950/80 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div className="ml-auto hidden md:flex items-center gap-4 text-[11px] text-zinc-500">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-zinc-400">{m.label}:</span>
                  <span className="text-zinc-200 font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Core Case Study Content */}
        <div className="space-y-8 text-xs">
          
          {/* 01: Overview */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
              01 / OVERVIEW
            </div>
            <p className="text-zinc-300 leading-relaxed font-sans text-sm sm:text-base font-light">
              {project.description}
            </p>
          </div>

          {/* 02 & 03: Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-zinc-950 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-400/90 font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>02 / THE PROBLEM</span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-xs">
                {project.problem}
              </p>
            </div>

            <div className="p-5 bg-zinc-950 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>03 / THE SOLUTION</span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-xs">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 04: Architecture Topology */}
          <div className="p-5 sm:p-6 bg-black/60 border border-zinc-800 space-y-3">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white font-bold">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>04 / SYSTEM ARCHITECTURE &amp; TOPOLOGY</span>
            </div>
            <p className="text-zinc-300 leading-relaxed text-xs sm:text-[13px]">
              {project.architectureSummary}
            </p>
          </div>

          {/* 05: Key Architectural Features */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              05 / KEY ARCHITECTURAL FEATURES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="p-3.5 bg-zinc-950/60 border border-zinc-800/70 flex items-start gap-3 text-zinc-300 text-xs">
                  <span className="text-zinc-500 font-bold mt-0.5">&bull;</span>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06: Technical Challenges */}
          {project.technicalChallenges && (
            <div className="p-5 bg-zinc-950/80 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                <span>06 / TECHNICAL CHALLENGES &amp; MITIGATION</span>
              </div>
              <p className="text-zinc-300 leading-relaxed text-xs">
                {project.technicalChallenges}
              </p>
            </div>
          )}

          {/* 07: My Contribution */}
          <div className="p-5 bg-zinc-950/80 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white font-bold">
              <Award className="w-3.5 h-3.5 text-zinc-400" />
              <span>07 / PERSONAL CONTRIBUTION &amp; ROLE</span>
            </div>
            <p className="text-zinc-300 leading-relaxed text-xs">
              {project.myContribution}
            </p>
          </div>

          {/* 08: Outcome */}
          {project.outcome && (
            <div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
                08 / PRODUCTION OUTCOME &amp; IMPACT
              </div>
              <p className="text-zinc-300 leading-relaxed text-xs p-4 bg-zinc-950/50 border border-zinc-800/60">
                {project.outcome}
              </p>
            </div>
          )}

          {/* 09: Technologies Deployed */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              09 / TECHNOLOGIES DEPLOYED
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300 font-mono hover:border-zinc-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
          <span>{project.title} &bull; Case Study</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
          >
            [ Close Specification ]
          </button>
        </div>
      </div>
    </div>
  );
};
