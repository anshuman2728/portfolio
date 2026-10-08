import React, { useEffect, useState, useRef } from 'react';

type CursorMode = 'default' | 'pointer' | 'project' | 'spec' | 'live' | 'code';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const targetMagneticRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Strictly disable on touch or reduced motion devices
    const checkIsTouch = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isTouch = !hasFinePointer || 'ontouchstart' in window || prefersReducedMotion;
      setIsTouchDevice(isTouch);
    };

    checkIsTouch();
    window.addEventListener('resize', checkIsTouch, { passive: true });

    return () => window.removeEventListener('resize', checkIsTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      // Subtle magnetic pull if near a magnetic element
      const target = e.target as HTMLElement | null;
      const magneticEl = target?.closest('[data-magnetic="true"], button, a.group') as HTMLElement | null;

      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(targetX - centerX, targetY - centerY);

        if (dist < 50) {
          // Attract 25% towards center for subtle magnetic feel
          targetX = targetX + (centerX - targetX) * 0.25;
          targetY = targetY + (centerY - targetY) * 0.25;
          targetMagneticRef.current = { x: centerX, y: centerY };
        } else {
          targetMagneticRef.current = null;
        }
      } else {
        targetMagneticRef.current = null;
      }

      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorType === 'project') {
        setCursorMode('project');
      } else if (cursorType === 'spec') {
        setCursorMode('spec');
      } else if (cursorType === 'live') {
        setCursorMode('live');
      } else if (cursorType === 'code') {
        setCursorMode('code');
      } else if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setCursorMode('pointer');
      } else {
        setCursorMode('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', checkHover, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let rafId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22
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

  const isExpanded = cursorMode !== 'default' && cursorMode !== 'pointer';
  let labelText = '';
  if (cursorMode === 'project') labelText = 'VIEW';
  else if (cursorMode === 'spec') labelText = 'SPEC';
  else if (cursorMode === 'live') labelText = 'LIVE';
  else if (cursorMode === 'code') labelText = 'CODE';

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden select-none" aria-hidden="true">
      {/* Central Sharp Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isExpanded ? 0 : 1
        }}
      />

      {/* Trailing Responsive Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out will-change-transform ${
          isExpanded
            ? 'w-16 h-16 bg-white text-black border-white text-[9px] font-mono font-extrabold tracking-widest shadow-2xl scale-100'
            : cursorMode === 'pointer'
            ? 'w-10 h-10 border-white/80 bg-white/10 scale-110'
            : 'w-7 h-7 border-white/30 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {isExpanded && <span>{labelText}</span>}
      </div>
    </div>
  );
};
