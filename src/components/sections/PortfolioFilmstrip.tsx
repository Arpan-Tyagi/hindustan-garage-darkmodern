import React, { useState, useRef, useEffect } from 'react';
import { MASTERED_CARS, MasteredCar } from '../../data/carsData';
import { ShieldCheck, ChevronRight, Gauge, ArrowRight, Filter, Eye, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioFilmstripProps {
  onOpenBookingWithCar: (carName: string) => void;
}

export const PortfolioFilmstrip: React.FC<PortfolioFilmstripProps> = ({ onOpenBookingWithCar }) => {
  const [filterTier, setFilterTier] = useState<'All' | 'Luxury Marque' | 'Everyday Four-Wheeler'>('All');
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [activeCarModal, setActiveCarModal] = useState<MasteredCar | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const filteredCars = filterTier === 'All'
    ? MASTERED_CARS
    : MASTERED_CARS.filter((c) => c.tier === filterTier);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCarModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Setup GSAP horizontal scroll pin on desktop (>=1024px) using gsap.matchMedia
  useEffect(() => {
    const container = containerRef.current;
    const filmstrip = filmstripRef.current;
    if (!container || !filmstrip) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // Calculate total horizontal scroll delta safely
      const totalScrollWidth = Math.max(0, filmstrip.scrollWidth - window.innerWidth + 120);

      // If cards fit within screen width, no horizontal pin scrub is needed
      if (totalScrollWidth <= 20) {
        gsap.set(filmstrip, { x: 0 });
        return;
      }

      const tween = gsap.to(filmstrip, {
        x: () => -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalScrollWidth * 1.2}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * filteredCars.length),
              filteredCars.length - 1
            );
            setActiveCarIndex(index);
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill(true, true);
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [filteredCars]);

  // Mobile horizontal swipe observer to track active car index
  const handleMobileScroll = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardEl = el.querySelector('[data-card="filmstrip-card"]') as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 24; // width + gap
    const index = Math.min(Math.round(el.scrollLeft / cardWidth), filteredCars.length - 1);
    if (index >= 0 && index !== activeCarIndex) {
      setActiveCarIndex(index);
    }
  };

  return (
    <section 
      id="mastered-cars" 
      ref={containerRef}
      className="relative bg-obsidian text-white border-b border-obsidian-border overflow-hidden py-14 sm:py-16 lg:py-0"
    >
      {/* Editorial Header & Live Telemetry Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-14 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-obsidian-border">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-obsidian-surface border border-obsidian-border font-mono text-[10px] sm:text-xs font-bold text-crimson uppercase tracking-widest mb-3">
            <Gauge className="w-3.5 h-3.5 text-crimson" />
            <span>CASE STUDIES & RESTORATION ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            Cars We Have Mastered
          </h2>
        </div>

        {/* Filters & Live Progress Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-obsidian-surface rounded-lg border border-obsidian-border font-mono text-xs overflow-x-auto no-scrollbar max-w-full">
            <Filter className="w-3.5 h-3.5 text-gray-400 ml-2 mr-1 shrink-0" />
            {(['All', 'Luxury Marque', 'Everyday Four-Wheeler'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => {
                  setFilterTier(tier);
                  setActiveCarIndex(0);
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
                }}
                className={`min-h-[44px] px-3.5 py-2 rounded-md transition-all font-semibold whitespace-nowrap text-xs flex items-center justify-center ${
                  filterTier === tier
                    ? 'bg-crimson text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tier === 'Everyday Four-Wheeler' ? 'Everyday' : tier}
              </button>
            ))}
          </div>

          {/* Telemetry Progress Indicator */}
          <div className="font-mono text-xs bg-obsidian-card px-4 py-2 rounded-lg border border-obsidian-border flex items-center justify-between sm:justify-start gap-3">
            <span className="text-crimson font-bold whitespace-nowrap tabular-nums">
              BAY 0{activeCarIndex + 1} / 0{filteredCars.length}
            </span>
            <div className="w-20 sm:w-24 h-1.5 bg-obsidian-border rounded-full overflow-hidden shrink-0">
              <div 
                className="h-full bg-crimson transition-all duration-300" 
                style={{ width: `${((activeCarIndex + 1) / filteredCars.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Swipe Guidance Bar */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-4 flex items-center justify-between font-mono text-[11px] text-gray-400">
        <span className="flex items-center gap-1.5 text-crimson font-semibold">
          <span>←</span>
          <span>Swipe horizontally to inspect</span>
          <span>→</span>
        </span>
        <span className="text-gray-500">
          {filteredCars.length} vehicles
        </span>
      </div>

      {/* Filmstrip Viewport: Smooth Scroll Container */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleMobileScroll}
        className="w-full lg:h-[78vh] flex items-center overflow-x-auto lg:overflow-x-visible no-scrollbar py-6 sm:py-8 lg:py-0 px-4 sm:px-8 snap-x snap-mandatory touch-pan-x scroll-smooth"
      >
        <div 
          ref={filmstripRef}
          className="flex items-stretch gap-5 sm:gap-6 lg:gap-8 min-w-max will-change-transform"
        >
          {filteredCars.map((car) => (
            <div
              key={car.id}
              data-card="filmstrip-card"
              data-cursor="INSPECT"
              onClick={() => setActiveCarModal(car)}
              className="w-[86vw] xs:w-[82vw] sm:w-[440px] lg:w-[480px] snap-center sm:snap-start shrink-0 bg-obsidian-surface rounded-2xl border border-obsidian-border hover:border-crimson/60 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image with Telemetry Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden border-b border-obsidian-border">
                <img
                  src={car.image}
                  alt={car.car}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-surface via-transparent to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold bg-obsidian/90 backdrop-blur-md text-crimson px-2.5 py-1 rounded border border-obsidian-border">
                    {car.bayNumber}
                  </span>
                  <span className="font-mono text-xs font-semibold bg-cobalt/90 backdrop-blur-md text-white px-2.5 py-1 rounded border border-cobalt-bright/40">
                    {car.tier}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-gray-300">
                  <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">ODO: {car.odometer}</span>
                  <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">{car.ownerOrigin}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-white group-hover:text-crimson transition-colors mb-1 line-clamp-1">
                    {car.car}
                  </h3>
                  <div className="font-mono text-xs text-gray-400 mb-3">
                    Engine Code: <span className="text-gray-200">{car.engineCode}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-4 leading-relaxed font-sans">
                    {car.scope}
                  </p>

                  {/* Telemetry Micro Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.keyTelemetry.slice(0, 2).map((t, i) => (
                      <div key={i} className="p-2 sm:p-2.5 rounded-lg bg-obsidian-card border border-obsidian-border text-[10px] sm:text-[11px] font-mono">
                        <span className="text-gray-400 block truncate">{t.label}</span>
                        <span className="text-white font-semibold truncate block">{t.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-obsidian-border/80 flex items-center justify-between text-xs font-mono min-h-[44px]">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{car.turnaround}</span>
                  </span>

                  <span className="text-crimson font-bold flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <span>Inspect Dossier</span>
                    <span className="w-6 h-6 rounded-full bg-crimson/20 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:translate-x-0.5 transition-all">
                      <ChevronRight className="w-3.5 h-3.5 text-crimson group-hover:text-white transition-colors" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspect Modal Dialog with Fluid Backdrop Blur & Concentric Double-Bezel */}
      {activeCarModal && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-3.5 sm:p-4 overflow-y-auto transition-opacity duration-300"
          onClick={() => setActiveCarModal(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-obsidian-surface border border-white/10 rounded-[2rem] max-w-2xl w-full max-h-[92vh] overflow-y-auto overscroll-contain p-5 sm:p-8 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] my-auto text-left transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100"
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 z-30 bg-obsidian-surface/95 backdrop-blur-md pb-3 pt-1 -mt-1 flex items-center justify-between border-b border-obsidian-border mb-4">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-crimson uppercase">
                <span className="font-bold">{activeCarModal.bayNumber}</span>
                <span>•</span>
                <span>{activeCarModal.year} MODEL</span>
                <span>•</span>
                <span className="text-cobalt-bright font-bold">{activeCarModal.tier}</span>
              </div>
              <button
                onClick={() => setActiveCarModal(null)}
                className="w-11 h-11 rounded-full bg-obsidian-card border border-obsidian-border text-gray-300 hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] shrink-0 ml-2"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-3xl text-white mb-2 leading-tight">
              {activeCarModal.car}
            </h3>
            <p className="font-mono text-xs text-gray-400 mb-5 sm:mb-6">
              Engine: {activeCarModal.engineCode} • Odometer: {activeCarModal.odometer} • Client: {activeCarModal.ownerOrigin}
            </p>

            <div className="h-48 sm:h-64 rounded-xl overflow-hidden border border-obsidian-border mb-6">
              <img
                src={activeCarModal.image}
                alt={activeCarModal.car}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 mb-6 text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase text-gray-400 mb-1 font-bold">Scope of Master Craft</h4>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">{activeCarModal.scope}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-gray-400 mb-1 font-bold">Diagnostic Log & Root Cause</h4>
                <p className="text-gray-300 bg-obsidian-card p-3 rounded-lg border border-obsidian-border font-mono text-xs leading-relaxed">
                  {activeCarModal.diagnosisReport}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase text-crimson mb-1 font-bold">Master Technician Protocol</h4>
                <blockquote className="border-l-2 border-crimson pl-3 text-gray-300 italic text-xs leading-relaxed">
                  &ldquo;{activeCarModal.masterTechQuote}&rdquo;
                </blockquote>
              </div>

              {/* Telemetry Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {activeCarModal.keyTelemetry.map((t, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-obsidian-card border border-obsidian-border text-xs font-mono">
                    <span className="text-gray-400 block text-[10px] uppercase">{t.label}</span>
                    <span className="text-white font-bold">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-obsidian-border">
              <button
                onClick={() => {
                  const carName = activeCarModal.car;
                  setActiveCarModal(null);
                  onOpenBookingWithCar(carName);
                }}
                className="btn-press w-full min-h-[44px] py-3 bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Book Similar Service For My Car</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
