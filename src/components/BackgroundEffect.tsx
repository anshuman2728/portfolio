import React from 'react';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Top Ambient Gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)'
        }}
      />

      {/* Thin Horizontal Grid Lines (Very Faint / Editorial Structure) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
};
