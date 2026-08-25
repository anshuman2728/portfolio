import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [noidaTime, setNoidaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setNoidaTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-border-t bg-[#070709] py-16 px-6 sm:px-10 font-mono text-xs text-zinc-500 uppercase tracking-widest">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="space-y-1 text-left">
            <div className="text-white font-display text-lg font-bold tracking-tight">
              ANSHUMAN SINGH
            </div>
            <div className="text-zinc-500 text-[11px]">
              FULL-STACK SOFTWARE ENGINEER &amp; AI SYSTEMS DEVELOPER
            </div>
          </div>

          {/* Local Time & Location */}
          <div className="flex items-center gap-6 text-zinc-400">
            <span>NOIDA, INDIA</span>
            <span>&bull;</span>
            <span className="text-white">{noidaTime || '05:54 AM IST'}</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-zinc-400 border-b border-white pb-0.5 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="editorial-border-t pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>
            &copy; 2026 ANSHUMAN SINGH. ALL RIGHTS RESERVED.
          </div>
          <div>
            DESIGNED WITH EDITORIAL RESTRAINT &bull; REACT 19 &bull; TYPESCRIPT
          </div>
        </div>

      </div>
    </footer>
  );
};
