import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const MagneticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [cursorMode, setCursorMode] = useState<'default' | 'expanded' | 'action'>('default');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOnLight, setIsOnLight] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Add active class to root element so cursor: none only applies once custom cursor is running
    document.documentElement.classList.add('has-custom-cursor');

    // Fast GSAP quickTo setters for zero-latency 60fps tracking
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.12, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power3.out' });
    const scaleXTo = gsap.quickTo(cursor, 'scaleX', { duration: 0.18, ease: 'power2.out' });
    const scaleYTo = gsap.quickTo(cursor, 'scaleY', { duration: 0.18, ease: 'power2.out' });
    const rotateTo = gsap.quickTo(cursor, 'rotation', { duration: 0.2, ease: 'power2.out' });

    let lastX = 0;
    let lastY = 0;
    let velTimer: ReturnType<typeof setTimeout> | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      // First mousemove immediately reveals the cursor
      setIsVisible(true);

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Contrast awareness: check if cursor is over a light background section
      const targetEl = e.target as HTMLElement | null;
      const lightSection = targetEl?.closest('.bg-stone, #services, #booking, #blog, #dual-hubs, .bg-white');
      setIsOnLight(!!lightSection);

      // Check magnetic snap target
      const magneticTarget = targetEl?.closest('[data-magnetic]') as HTMLElement | null;
      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Blend mouse position 42% toward element center for tactile magnetic feel
        const targetX = e.clientX + (centerX - e.clientX) * 0.42;
        const targetY = e.clientY + (centerY - e.clientY) * 0.42;
        xTo(targetX);
        yTo(targetY);
      } else {
        xTo(e.clientX);
        yTo(e.clientY);
      }

      // Dynamic velocity stretch (capped between 0.88 and 1.25)
      if (speed > 4) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const stretch = Math.min(speed / 60, 0.25);
        scaleXTo(1 + stretch);
        scaleYTo(1 - stretch * 0.5);
        rotateTo(angle);

        if (velTimer) clearTimeout(velTimer);
        velTimer = setTimeout(() => {
          scaleXTo(1);
          scaleYTo(1);
          rotateTo(0);
        }, 60);
      }

      lastX = e.clientX;
      lastY = e.clientY;

      // Check contextual cursor mode
      const actionTarget = targetEl?.closest('[data-cursor]') as HTMLElement | null;
      if (actionTarget) {
        const label = actionTarget.getAttribute('data-cursor') || '';
        setCursorLabel(label);
        setCursorMode('action');
      } else {
        const isInteractive = targetEl?.closest('button, a, input, select, textarea, [role="button"], [tabindex="0"]');
        if (isInteractive) {
          setCursorLabel('');
          setCursorMode('expanded');
        } else {
          setCursorLabel('');
          setCursorMode('default');
        }
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (velTimer) clearTimeout(velTimer);
    };
  }, []); // Run on mount only - element is always in DOM

  const isAction = cursorMode === 'action';
  const isExpanded = cursorMode === 'expanded';

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-[width,height,transform,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isMouseDown ? 'scale-90' : 'scale-100'}`}
      style={{
        width: isAction ? '84px' : isExpanded ? '46px' : '26px',
        height: isAction ? '84px' : isExpanded ? '46px' : '26px',
      }}
    >
      {/* Outer Reticle Ring with Dynamic Theme Contrast */}
      <div 
        ref={ringRef}
        className={`absolute inset-0 rounded-full border transition-all duration-200 ${
          isAction 
            ? 'border-crimson bg-crimson/95 backdrop-blur-md shadow-[0_0_28px_rgba(184,29,19,0.6)] scale-100' 
            : isExpanded 
              ? isOnLight
                ? 'border-crimson bg-crimson/15 shadow-[0_0_16px_rgba(184,29,19,0.3)]'
                : 'border-cobalt-bright/90 bg-cobalt/25 backdrop-blur-[2px] shadow-[0_0_16px_rgba(15,76,129,0.4)]' 
              : isOnLight
                ? 'border-carbon/75 bg-carbon/5 shadow-[0_0_8px_rgba(17,18,21,0.2)]'
                : 'border-white/60 bg-white/5 shadow-[0_0_8px_rgba(255,255,255,0.25)]'
        }`}
      />

      {/* Reticle Crosshairs (Visible in default mode) */}
      {!isAction && !isExpanded && (
        <>
          <div className={`absolute w-[1.5px] h-[6px] -top-1 left-1/2 -translate-x-1/2 transition-colors ${
            isOnLight ? 'bg-carbon/80' : 'bg-white/80'
          }`} />
          <div className={`absolute w-[1.5px] h-[6px] -bottom-1 left-1/2 -translate-x-1/2 transition-colors ${
            isOnLight ? 'bg-carbon/80' : 'bg-white/80'
          }`} />
          <div className={`absolute h-[1.5px] w-[6px] -left-1 top-1/2 -translate-y-1/2 transition-colors ${
            isOnLight ? 'bg-carbon/80' : 'bg-white/80'
          }`} />
          <div className={`absolute h-[1.5px] w-[6px] -right-1 top-1/2 -translate-y-1/2 transition-colors ${
            isOnLight ? 'bg-carbon/80' : 'bg-white/80'
          }`} />
          {/* Intense Crimson Center Core - Always Visible on both dark and light */}
          <div className="w-1.5 h-1.5 rounded-full bg-crimson shadow-[0_0_8px_rgba(184,29,19,0.95)]" />
        </>
      )}

      {/* Action Text Label */}
      {isAction && (
        <span 
          ref={labelRef}
          className="relative z-10 text-[9px] font-mono font-extrabold tracking-widest text-white uppercase text-center px-2 select-none animate-fadeIn leading-tight"
        >
          {cursorLabel}
        </span>
      )}
    </div>
  );
};
