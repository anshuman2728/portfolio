import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Architectural Specification`}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0C0C0F] editorial-border p-6 sm:p-10 shadow-2xl text-left text-zinc-300 font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12 editorial-border-b pb-6">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
            [ ARCHITECTURE SPECIFICATION / {project.category} ]
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light">
            {project.tagline}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-6 my-6 text-xs uppercase tracking-widest">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white border-b border-white pb-1 hover:text-zinc-400 transition-colors"
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
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>

        {/* Overview & Architecture Details */}
        <div className="space-y-6 text-xs">
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
              01 / OVERVIEW
            </h3>
            <p className="text-zinc-300 leading-relaxed font-sans text-sm">
              {project.description}
            </p>
          </div>

          {/* System & Architecture */}
          <div className="p-5 bg-black/60 border border-zinc-800 space-y-2">
            <div className="text-[10px] uppercase tracking-widest text-white font-bold">
              02 / SYSTEM &amp; ARCHITECTURAL TOPOLOGY
            </div>
            <p className="text-zinc-300 leading-relaxed text-xs">
              {project.architectureSummary}
            </p>
          </div>

          {/* Key Contributions */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              03 / ENGINEERING HIGHLIGHTS
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs">
                  <span className="text-zinc-500 font-bold">&bull;</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              04 / TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-black/50 border border-zinc-800 text-left">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{m.label}</div>
                  <div className="text-xs font-bold text-white mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
