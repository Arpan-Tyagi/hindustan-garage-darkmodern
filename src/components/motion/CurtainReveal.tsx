import React, { useEffect, useRef, useState } from 'react';

interface CurtainRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'diagonal';
  isReady?: boolean;
}

export const CurtainReveal: React.FC<CurtainRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  isReady = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    let timer: NodeJS.Timeout | null = null;

    const triggerReveal = (ms: number) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(true);
      }, ms);
    };

    // Immediate check if element is already within or near viewport
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        triggerReveal(delay);
      }
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          triggerReveal(delay);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '100px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Bulletproof fallback: ensure content is never permanently masked
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 450 + delay);

    return () => {
      if (timer) clearTimeout(timer);
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [delay, isReady]);

  const getClipPath = () => {
    if (isVisible) return 'inset(0% 0% 0% 0%)';
    switch (direction) {
      case 'down':
        return 'inset(0% 0% 100% 0%)';
      case 'diagonal':
        return 'polygon(0 0, 100% 0, 100% 0, 0 0)';
      case 'up':
      default:
        return 'inset(100% 0% 0% 0%)';
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className="overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          clipPath: getClipPath(),
          WebkitClipPath: getClipPath(),
        }}
      >
        <div 
          className={`transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
