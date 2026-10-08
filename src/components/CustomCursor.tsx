import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(pointer: fine)').matches || 'ontouchstart' in window || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');

      if (projectCard) {
        setHoverState('project');
      } else if (interactive) {
        setHoverState('pointer');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', checkHover, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let rafId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      rafId = requestAnimationFrame(updateTrailing);
    };
    rafId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', checkHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [position.x, position.y, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Central Sharp Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: hoverState === 'project' ? 0 : 1
        }}
      />

      {/* Trailing Minimalist Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
          hoverState === 'project'
            ? 'w-16 h-16 bg-white text-black text-[9px] font-mono font-bold tracking-widest'
            : hoverState === 'pointer'
            ? 'w-9 h-9 border-white/60 bg-white/10'
            : 'w-7 h-7 border-white/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {hoverState === 'project' && <span>VIEW</span>}
      </div>
    </div>
  );
};
