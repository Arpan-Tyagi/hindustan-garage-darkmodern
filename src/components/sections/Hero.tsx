import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Star, Award, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { CurtainReveal } from '../motion/CurtainReveal';

interface HeroProps {
  isReady?: boolean;
  onOpenBooking: () => void;
  onOpenParts: () => void;
}

// Lightweight RAF counter for silky smooth telemetry count-up
const CounterTicker: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number; active?: boolean }> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 1400,
  active = true
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, active]);

  return <span className="tabular-nums">{prefix}{count}{suffix}</span>;
};

export const Hero: React.FC<HeroProps> = ({ isReady = true, onOpenBooking, onOpenParts }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setIsLoaded(true), 80);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <section className="relative min-h-[92vh] bg-obsidian flex flex-col justify-between overflow-hidden pt-8 pb-14 border-b border-obsidian-border bg-grid-pattern">
      {/* Background Lighting & Atmospheric Gradients with subtle ambient float */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-crimson/15 rounded-full blur-[140px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cobalt/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/40 to-obsidian pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-4 md:pt-10">
        {/* Heritage & Sub-Venture Badge Header */}
        <div className={`inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-full bg-obsidian-card/90 border border-obsidian-border backdrop-blur-md mb-6 sm:mb-8 max-w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center gap-1.5 text-crimson font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest shrink-0">
            <Sparkles className="w-3.5 h-3.5 animate-spin duration-3000" />
            <span>ESTD. 1960</span>
          </div>
          <span className="text-gray-600 font-mono hidden xs:inline">•</span>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-300 uppercase">
            66 YEARS OF ATELIER MASTERY AT 56, M.G. MARG
          </span>
          <span className="text-gray-600 font-mono hidden sm:inline">•</span>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-cobalt-bright font-bold uppercase">
            + SPEED PARTS MEDICAL CHAURAHA
          </span>
        </div>

        {/* Oversized Split-Line Animated Typography */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-display font-extrabold text-[1.95rem] xs:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.06] uppercase break-words">
            <span className="block overflow-hidden">
              <span 
                className={`inline-block transform transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                Prayagraj&apos;s Master
              </span>
            </span>
            <span className="block overflow-hidden">
              <span 
                className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 transform transition-transform duration-800 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                Automotive Atelier
              </span>
            </span>
            <span className="block overflow-hidden text-crimson">
              <span 
                className={`inline-block transform transition-transform duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                Since 1960<span className="text-white">.</span>
              </span>
            </span>
          </h1>
        </div>

        {/* Lead Narrative Description */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <p className={`text-sm sm:text-lg md:text-xl text-gray-300 font-sans font-light leading-relaxed transition-all duration-800 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Where three generations of generational coachbuilding craft meets cutting-edge European diagnostic telemetry. 
            Now paired with <strong className="text-white font-semibold">Speed Parts</strong>—our brand-new genuine OEM & wholesale parts hub at 
            <strong className="text-white font-semibold"> Medical Chauraha, George Town</strong>.
          </p>
        </div>

        {/* Dual B2C / B2B Action Entry Pathways */}
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-800 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {/* B2C Workshop Booking with Button-in-Button Trailing Icon & Magnetic Reticle Trigger */}
          <button
            onClick={onOpenBooking}
            data-cursor="VIEW BAY"
            data-magnetic="true"
            className="btn-press group w-full sm:w-auto min-h-[48px] pl-6 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-full bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(184,29,19,0.35)] flex items-center justify-between sm:justify-center gap-4 transition-all"
          >
            <span>Book Workshop Bay (B2C)</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* B2B Speed Parts Wholesale Pathway with Magnetic Reticle Trigger */}
          <button
            onClick={onOpenParts}
            data-cursor="WHATSAPP"
            data-magnetic="true"
            className="btn-press group w-full sm:w-auto min-h-[48px] pl-6 sm:pl-7 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-full bg-obsidian-surface border border-cobalt/60 hover:border-cobalt-bright hover:bg-cobalt/20 text-white font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between sm:justify-center gap-4 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt-bright group-hover:animate-ping" />
              <span>Speed Parts B2B Inquiry (OEM)</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-cobalt-bright/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-cobalt-bright" />
            </span>
          </button>
        </div>

        {/* Verified Telemetry Trust HUD Grid with Count-Up Animations */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-6 border-t border-obsidian-border/80 transition-all duration-800 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {/* Telemetry 1: Ratings */}
          <div className="p-3 sm:p-4 rounded-xl bg-obsidian-surface/80 border border-obsidian-border backdrop-blur-sm group hover:border-crimson/50 transition-colors">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 text-amber-400">
              <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-amber-400" />
              <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-widest">4.8 / 5.0</span>
            </div>
            <div className="font-display font-bold text-lg sm:text-2xl text-white">
              <CounterTicker target={132} suffix=" Verified" active={isLoaded} />
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-gray-400 tracking-wider uppercase">
              Google & Justdial
            </div>
          </div>

          {/* Telemetry 2: Insurance Partners */}
          <div className="p-3 sm:p-4 rounded-xl bg-obsidian-surface/80 border border-obsidian-border backdrop-blur-sm group hover:border-cobalt-bright/50 transition-colors">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 text-cobalt-bright">
              <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-widest">CASHLESS TIE-UPS</span>
            </div>
            <div className="font-display font-bold text-lg sm:text-2xl text-white">
              <CounterTicker target={6} suffix="+ Insurers" active={isLoaded} />
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-gray-400 tracking-wider uppercase">
              ICICI, HDFC, Bajaj & Tata
            </div>
          </div>

          {/* Telemetry 3: Catchment Radius */}
          <div className="p-3 sm:p-4 rounded-xl bg-obsidian-surface/80 border border-obsidian-border backdrop-blur-sm group hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 text-emerald-400">
              <Compass className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-widest">EASTERN UP</span>
            </div>
            <div className="font-display font-bold text-lg sm:text-2xl text-white">
              <CounterTicker target={150} suffix=" KM Radius" active={isLoaded} />
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-gray-400 tracking-wider uppercase">
              Varanasi, Mirzapur, Rewa
            </div>
          </div>

          {/* Telemetry 4: Heritage */}
          <div className="p-3 sm:p-4 rounded-xl bg-obsidian-surface/80 border border-obsidian-border backdrop-blur-sm group hover:border-crimson/50 transition-colors">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 text-crimson">
              <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-widest">LEGACY ATELIER</span>
            </div>
            <div className="font-display font-bold text-lg sm:text-2xl text-white">
              <CounterTicker target={66} suffix="+ Years" active={isLoaded} />
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-gray-400 tracking-wider uppercase">
              Est. 1960 • M.G. Marg Lineage
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual Feature Bar with Double-Bezel Nested Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 w-full relative z-10">
        <CurtainReveal direction="diagonal" delay={150} isReady={isLoaded}>
          {/* Double-Bezel Outer Shell */}
          <div className="p-2 sm:p-2.5 rounded-[2rem] bg-obsidian-surface/60 border border-white/10 backdrop-blur-md shadow-2xl">
            {/* Double-Bezel Inner Core */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden border border-obsidian-border group">
              <img 
                src="/images/hero_atelier_overview.jpg" 
                alt="Hindustan Garage Precision Bay Floor" 
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 pointer-events-none">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-crimson font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white mb-2 shadow-md">
                    BAY 03 ACTIVE • CLIMATE CONTROLLED BAKING OVEN
                  </span>
                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white leading-tight">
                    PPG Waterborne Digital Refinishing & Celette 3D Chassis Jig
                  </h3>
                </div>

                <div className="font-mono text-[10px] sm:text-xs text-gray-300 bg-obsidian/90 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-obsidian-border text-left sm:text-right max-w-full shadow-lg">
                  <span className="block sm:inline text-white font-medium">LAT: 25.4529° N • LON: 81.8349° E</span>
                  <span className="hidden sm:inline"> </span>
                  <span className="block sm:inline text-crimson font-bold sm:text-gray-300">(56, M.G. Marg)</span>
                </div>
              </div>
            </div>
          </div>
        </CurtainReveal>
      </div>

      {/* Down Scroll Prompt */}
      <div className="flex items-center justify-center pt-8 text-gray-500 font-mono text-[10px] tracking-widest uppercase">
        <a href="#services" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <span>EXPLORE 6 WORKSHOP BAYS</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
