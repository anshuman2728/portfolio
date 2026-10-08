import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Anshuman Singh Curriculum Vitae"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0B0B0E] editorial-border shadow-2xl overflow-hidden text-left text-zinc-300 font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 editorial-border-b bg-black/60">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-white" />
            <div>
              <h2 className="text-sm font-bold text-white font-display uppercase tracking-wider">
                ANSHUMAN SINGH &bull; CURRICULUM VITAE
              </h2>
              <p className="text-[10px] text-zinc-500 uppercase">
                FULL-STACK SOFTWARE ENGINEER &bull; B.TECH CSE (2027)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Anshuman_Singh_Resume.pdf"
              className="px-3 py-1.5 bg-white text-black font-bold text-[11px] uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1 text-zinc-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#09090B]">
          
          {/* Header Identity */}
          <div className="editorial-border-b pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                  ANSHUMAN SINGH
                </h1>
                <div className="text-zinc-400 text-xs mt-1 uppercase tracking-widest">
                  FULL-STACK SOFTWARE ENGINEER &amp; AI SYSTEMS DEVELOPER
                </div>
              </div>

              <div className="text-[11px] text-zinc-400 space-y-0.5 sm:text-right uppercase">
                <div>NOIDA, UTTAR PRADESH, INDIA</div>
                <div>{PERSONAL_INFO.phone} &bull; {PERSONAL_INFO.email}</div>
                <div className="text-white">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LINKEDIN</a> &bull;{' '}
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GITHUB</a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800 leading-relaxed text-zinc-300 font-sans text-xs sm:text-sm font-light">
              Results-oriented Software Engineer and Full-Stack Developer with strong expertise in Java, React, Node.js, and scalable web architectures. Proven track record in developing autonomous AI-driven assessment tools, responsive e-commerce platforms, and interactive Java applications. Possesses a solid foundation in Data Structures and Algorithms (DSA), complex problem-solving, API design, and database management. Adept at building clean, performance-optimised solutions for modern IT and AI environments.
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
              [ 01 / TECHNICAL SKILLS ]
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">PROGRAMMING LANGUAGES</span>
                <span className="text-white font-medium">Java, JavaScript, TypeScript, HTML5/CSS3, SQL</span>
              </div>
              <div className="p-3.5 bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">CORE COMPETENCIES</span>
                <span className="text-white font-medium">DSA (175+ Solved), Problem Solving, System Design, OOP</span>
              </div>
              <div className="p-3.5 bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">FRONTEND TECHNOLOGIES</span>
                <span className="text-white font-medium">React 19, Next.js 16, Tailwind CSS, Radix UI, Framer Motion</span>
              </div>
              <div className="p-3.5 bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">BACKEND &amp; DATABASES</span>
                <span className="text-white font-medium">Node.js, Express.js, RESTful APIs, MongoDB, Supabase (PostgreSQL), ChromaDB</span>
              </div>
              <div className="p-3.5 bg-zinc-950 border border-zinc-800 sm:col-span-2 lg:col-span-2">
                <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">TOOLS &amp; METHODOLOGIES</span>
                <span className="text-white font-medium">Git/GitHub, Vite, Postman, Agile/Scrum, Prompt Engineering</span>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
              [ 02 / TECHNICAL PROJECTS ]
            </div>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="p-5 bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-white font-display text-sm tracking-tight">
                    {proj.title} <span className="text-zinc-500 font-normal text-xs font-mono">&bull; {proj.tagline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-xs font-mono flex items-center gap-1 hover:underline uppercase tracking-wider"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white text-xs font-mono flex items-center gap-1 hover:underline uppercase tracking-wider"
                      >
                        <span>GITHUB</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-zinc-400">
                  STACK: {proj.techStack.join(' / ')}
                </div>

                <div className="space-y-1 pt-1 text-zinc-300 font-sans text-xs font-light">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-zinc-600">&bull;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
              [ 03 / CERTIFICATIONS &amp; ACHIEVEMENTS ]
            </div>

            <div className="space-y-2 text-zinc-300">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-3.5 bg-zinc-950 border border-zinc-800 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-500 font-bold">&bull;</span>
                    <div>
                      <span className="text-white font-bold">{ach.title}</span> ({ach.issuer}): {ach.description}
                    </div>
                  </div>
                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white text-[11px] font-mono flex items-center gap-1 shrink-0 uppercase tracking-wider underline ml-2"
                    >
                      <span>VIEW</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
              [ 04 / EDUCATION ]
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-white font-display">JSS ACADEMY OF TECHNICAL EDUCATION, NOIDA, UP</div>
                <div className="text-zinc-400 text-xs">BACHELOR OF TECHNOLOGY (B.TECH) IN COMPUTER SCIENCE AND ENGINEERING</div>
              </div>
              <div className="text-right text-xs text-white">
                <div>2023 – 2027</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 editorial-border-t bg-black/80 flex items-center justify-between">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">VERIFIED CURRICULUM VITAE &bull; 2026</span>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Anshuman_Singh_Resume.pdf"
            className="px-4 py-2 bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-colors uppercase tracking-widest"
          >
            DOWNLOAD OFFICIAL PDF
          </a>
        </div>

      </div>
    </div>
  );
};
