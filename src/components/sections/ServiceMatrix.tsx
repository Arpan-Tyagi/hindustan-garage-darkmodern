import React, { useState, useRef } from 'react';
import { SERVICE_BAYS, ServiceBay } from '../../data/servicesData';
import { Wrench, Clock, Shield, CheckCircle2, ChevronRight, ArrowRight, Zap, Cpu } from 'lucide-react';
import { CurtainReveal } from '../motion/CurtainReveal';

interface ServiceMatrixProps {
  onSelectBay: (bayId: string) => void;
}

export const ServiceMatrix: React.FC<ServiceMatrixProps> = ({ onSelectBay }) => {
  const [activeBayId, setActiveBayId] = useState<string>(SERVICE_BAYS[0].id);
  const dossierRef = useRef<HTMLDivElement>(null);

  const activeBay = SERVICE_BAYS.find((b) => b.id === activeBayId) || SERVICE_BAYS[0];

  const handleBayClick = (bayId: string) => {
    setActiveBayId(bayId);
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && dossierRef.current) {
      dossierRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-24 bg-stone text-carbon border-b border-stone-border bg-grid-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-stone-border gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-card border border-stone-border font-mono text-[10px] sm:text-xs font-bold text-crimson uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>THE MECHANICAL ATELIER • 6 DEDICATED BAYS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-carbon uppercase">
              Interactive Service Matrix
            </h2>
          </div>
          <p className="max-w-md font-sans text-carbon-muted text-xs sm:text-sm leading-relaxed">
            Every vehicle enters a specific certified bay under a lead master technician. 
            Select any bay to examine real-time tooling, telemetry deliverables, and turnaround SLAs.
          </p>
        </div>

        {/* Master Bento Layout: Left Accordion Selector, Right Telemetry Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Bay Cards List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="lg:hidden text-center text-xs font-mono text-carbon-muted pb-1">
              Tap any bay to view detailed dossier below ↓
            </div>
            {SERVICE_BAYS.map((bay) => {
              const isActive = bay.id === activeBayId;
              return (
                <div
                  key={bay.id}
                  onClick={() => handleBayClick(bay.id)}
                  data-cursor="VIEW BAY"
                  className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group min-h-[44px] ${
                    isActive
                      ? 'bg-carbon text-white border-crimson shadow-xl translate-x-1 sm:translate-x-1.5'
                      : 'bg-white hover:bg-stone-surface border-stone-border text-carbon shadow-sm'
                  }`}
                >
                  {/* Active Indicator Accent Line */}
                  {isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-crimson" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-crimson text-white' : 'bg-stone-card text-carbon'
                      }`}
                    >
                      {bay.bayNumber}
                    </span>
                    <span 
                      className={`font-mono text-[11px] uppercase tracking-wider font-medium transition-colors ${
                        isActive ? 'text-gray-300' : 'text-carbon-light group-hover:text-crimson'
                      }`}
                    >
                      {bay.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight mb-1">
                    {bay.title}
                  </h3>
                  <p className={`text-xs line-clamp-1 ${isActive ? 'text-gray-300' : 'text-carbon-muted'}`}>
                    {bay.subtitle}
                  </p>

                  <div className="mt-3 pt-3 border-t border-stone-border/30 flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1 opacity-80">
                      <Clock className="w-3 h-3" />
                      {bay.turnaround.split('•')[0]}
                    </span>
                    <span className="flex items-center gap-1 text-crimson font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Bay Inspection Dossier (7 Columns) */}
          <div 
            ref={dossierRef}
            className="lg:col-span-7 bg-white rounded-2xl border border-stone-border shadow-xl p-5 sm:p-8 relative overflow-hidden scroll-mt-24"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-stone-border">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-xs sm:text-sm font-bold bg-carbon text-white px-2.5 sm:px-3 py-1 rounded">
                  {activeBay.bayNumber}
                </span>
                <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-crimson bg-crimson/10 px-2 sm:px-2.5 py-1 rounded">
                  {activeBay.category}
                </span>
                {activeBay.insuranceCashless && (
                  <span className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-1 rounded">
                    Cashless Direct
                  </span>
                )}
              </div>

              <div className="font-mono text-xs text-carbon-light">
                Lead: <strong className="text-carbon font-semibold">{activeBay.leadTech}</strong>
              </div>
            </div>

            {/* Bay Title & Imagery with Kinetic Keying */}
            <div key={activeBay.id} className="animate-fadeIn">
              <h3 className="font-display font-extrabold text-xl sm:text-3xl text-carbon mb-1 sm:mb-2">
                {activeBay.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-crimson mb-5 sm:mb-6 font-semibold">
                {activeBay.subtitle}
              </p>

              <div className="mb-6">
                <CurtainReveal key={activeBay.id} direction="up" delay={50}>
                  <div className="h-52 sm:h-64 rounded-xl overflow-hidden border border-stone-border relative bg-carbon shadow-inner">
                    <img
                      src={activeBay.image}
                      alt={activeBay.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3 sm:p-4 pointer-events-none">
                      <span className="font-mono text-[10px] sm:text-xs text-white bg-carbon/85 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded border border-white/20">
                        Live Workshop Bay Photography • 56, M.G. Marg
                      </span>
                    </div>
                  </div>
                </CurtainReveal>
              </div>

              {/* Narrative Overview */}
              <p className="text-xs sm:text-base text-carbon-muted leading-relaxed mb-6 font-sans">
                {activeBay.description}
              </p>

              {/* Tooling Suite */}
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase font-bold text-carbon tracking-widest flex items-center gap-1.5 mb-3">
                  <Wrench className="w-4 h-4 text-crimson" />
                  <span>Station Tooling & Diagnostic Hardware</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeBay.tooling.map((tool, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-stone-surface border border-stone-border text-xs font-mono text-carbon flex items-start gap-2">
                      <span className="text-crimson font-bold tabular-nums">0{idx + 1}.</span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase font-bold text-carbon tracking-widest flex items-center gap-1.5 mb-3">
                <Shield className="w-4 h-4 text-cobalt" />
                <span>Quality Deliverables & Guarantee</span>
              </h4>
              <div className="space-y-2">
                {activeBay.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-carbon-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Bar & Direct Bay Slot CTA */}
            <div className="pt-6 border-t border-stone-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-surface/70 -mx-5 -mb-5 p-5 sm:-mx-8 sm:-mb-8 sm:p-8">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-carbon-light">
                  Estimated Pricing Guideline
                </span>
                <span className="font-mono font-bold text-sm sm:text-base text-carbon">
                  {activeBay.pricingGuideline}
                </span>
              </div>

              <button
                onClick={() => onSelectBay(activeBay.id)}
                data-cursor="VIEW BAY"
                data-magnetic="true"
                className="btn-press group w-full sm:w-auto min-h-[44px] pl-6 pr-3 py-2.5 rounded-full bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-between sm:justify-center gap-3 transition-all"
              >
                <span>Book This Bay Now</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
