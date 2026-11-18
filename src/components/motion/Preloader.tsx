import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [year, setYear] = useState(1960);
  const [progress, setProgress] = useState(0);
  const [isSplitting, setIsSplitting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const totalDuration = 1100; // 1.1s counter run
    const startTime = performance.now();

    const animateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(elapsed / totalDuration, 1);
      
      // Easing calculation (easeOutExpo)
      const easedProgress = progressFraction === 1 ? 1 : 1 - Math.pow(2, -10 * progressFraction);
      
      const currentYear = Math.floor(1960 + (2026 - 1960) * easedProgress);
      setYear(currentYear);
      setProgress(Math.floor(progressFraction * 100));

      if (progressFraction < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        // Trigger bay door split reveal
        setIsSplitting(true);
        setTimeout(() => {
          setIsHidden(true);
          onComplete();
        }, 520); // Wait for the 500ms shutter animation to complete smoothly
      }
    };

    const rafId = requestAnimationFrame(animateCounter);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col ${
        isSplitting ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* Upper Garage Bay Door Shutter */}
      <div 
        className={`w-full h-1/2 bg-[#090A0D] border-b border-obsidian-border flex items-end justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isSplitting ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{ transform: isSplitting ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)' }}
      >
        <div className="pb-6 sm:pb-8 text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian-card rounded border border-obsidian-border mb-3">
            <span className="w-2 h-2 rounded-full bg-crimson animate-ping" />
            <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-gray-400">
              ATELIER SHUTTERS OPENING
            </span>
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white flex items-center justify-center gap-2">
            <span>EST.</span>
            <span className="text-crimson font-display">{year}</span>
          </div>
        </div>
      </div>

      {/* Lower Garage Bay Door Shutter */}
      <div 
        className={`w-full h-1/2 bg-[#090A0D] border-t border-obsidian-border flex items-start justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isSplitting ? 'translate-y-full' : 'translate-y-0'
        }`}
        style={{ transform: isSplitting ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)' }}
      >
        <div className="pt-6 sm:pt-8 text-center max-w-sm px-4">
          <div className="h-1 w-48 sm:w-64 max-w-[75vw] bg-obsidian-card rounded-full overflow-hidden mx-auto mb-3">
            <div 
              className="h-full bg-gradient-to-r from-crimson to-cobalt transition-all duration-75 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-400">
            HINDUSTAN GARAGE • SPEED PARTS PRAYAGRAJ
          </p>
        </div>
      </div>
    </div>
  );
};
