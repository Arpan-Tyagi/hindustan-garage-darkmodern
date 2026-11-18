import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, ShieldCheck, ArrowUpRight, Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenParts: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenParts }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#07080A] text-white border-t border-obsidian-border pt-14 sm:pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-obsidian-border/80">
          {/* Brand Column (2 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-obsidian-surface border border-obsidian-border flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-lg text-white">HG</span>
              </div>
              <div>
                <span className="font-display font-bold text-base sm:text-lg text-white block">
                  HINDUSTAN GARAGE
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-crimson font-semibold">
                  ESTD. 1960 • PRAYAGRAJ
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-sans leading-relaxed max-w-sm">
              Prayagraj&apos;s master automotive atelier. 66 years of generational coachbuilding, 
              European diagnostic precision, and our brand-new Speed Parts genuine OEM parts distribution hub at Medical Chauraha.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                6+ Cashless Insurance Partners
              </span>
              <span>•</span>
              <span className="text-amber-400 font-semibold">★ 4.8 / 5.0 (132 Ratings)</span>
            </div>
          </div>

          {/* Hub 1: M.G. Marg Workshop */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-crimson">
              Flagship Atelier
            </h4>
            <div className="space-y-1.5 text-gray-300">
              <p className="text-white font-semibold">56, Mahatma Gandhi Marg</p>
              <p>Civil Lines, Prayagraj, UP - 211001</p>
              <p className="text-[11px] text-gray-400">Near High Court Junction</p>
              <p className="text-gray-300 pt-0.5">Mon - Sat: 09:00 - 20:00 IST</p>
              <a
                href="tel:+918796576868"
                className="text-crimson hover:underline pt-2 font-bold min-h-[44px] flex items-center"
              >
                +91 87965 76868
              </a>
            </div>
          </div>

          {/* Hub 2: Speed Parts */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-cobalt-bright">
              Speed Parts Hub
            </h4>
            <div className="space-y-1.5 text-gray-300">
              <p className="text-white font-semibold">Medical Chauraha</p>
              <p>George Town, Prayagraj, UP - 211002</p>
              <p className="text-[11px] text-gray-400">Near MLN Medical College</p>
              <p className="text-gray-300 pt-0.5">Mon - Sat: 09:30 - 20:30 IST</p>
              <a
                href="https://wa.me/918796576868"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cobalt-bright hover:underline pt-2 font-bold min-h-[44px] flex items-center"
              >
                WhatsApp Spares Desk
              </a>
            </div>
          </div>

          {/* Quick Access */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Portals
            </h4>
            <div className="space-y-1 text-gray-300">
              <button
                onClick={onOpenBooking}
                className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors min-h-[44px] py-1 text-left"
              >
                <span>Book Service Bay</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-crimson" />
              </button>
              <button
                onClick={onOpenParts}
                className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors min-h-[44px] py-1 text-left"
              >
                <span>Speed Parts Catalog</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cobalt-bright" />
              </button>
              <a
                href="#services"
                className="text-gray-300 hover:text-white flex items-center min-h-[44px] py-1 transition-colors"
              >
                6 Mechanical Bays
              </a>
              <a
                href="#mastered-cars"
                className="text-gray-300 hover:text-white flex items-center min-h-[44px] py-1 transition-colors"
              >
                Portfolio Filmstrip
              </a>
              <a
                href="#blog"
                className="text-gray-300 hover:text-white flex items-center min-h-[44px] py-1 transition-colors"
              >
                Regional SEO Blog
              </a>
            </div>
          </div>
        </div>

        {/* Catchment & Regional SEO Anchor Tag Strip */}
        <div className="py-6 border-b border-obsidian-border/50 text-[10px] sm:text-[11px] font-mono text-gray-400 flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2">
          <span className="text-gray-300 font-semibold">Regional Catchment Hubs:</span>
          <span className="text-gray-300">Civil Lines Prayagraj</span>
          <span>•</span>
          <span className="text-gray-300">George Town Spares</span>
          <span>•</span>
          <span className="text-gray-300">Tagore Town</span>
          <span>•</span>
          <span className="text-gray-300">Ashok Nagar</span>
          <span>•</span>
          <span className="text-gray-300">Naini Industrial Hub</span>
          <span>•</span>
          <span className="text-gray-300">Varanasi Catchment</span>
          <span>•</span>
          <span className="text-gray-300">Mirzapur Highway</span>
          <span>•</span>
          <span className="text-gray-300">Rewa 150km Radius</span>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>© 1960 - 2026 Hindustan Garage & Speed Parts. All Rights Reserved.</span>
            {currentTime && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-obsidian-card border border-obsidian-border text-[10px] text-emerald-400 font-bold tabular-nums">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentTime}</span>
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span>Crafted with Pure 2D Motion (Non-WebGL)</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-crimson font-semibold">Awwwards-Tier Architectural Build</span>
            <span className="hidden md:inline">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              data-magnetic="true"
              data-cursor="TOP"
              className="btn-press group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-obsidian-surface border border-obsidian-border hover:border-crimson/50 text-white font-mono text-[11px] transition-all"
            >
              <span>BACK TO TOP</span>
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUp className="w-3 h-3 text-crimson" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
