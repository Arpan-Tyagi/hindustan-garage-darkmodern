import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Wrench, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenParts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenParts }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services Matrix', href: '#services' },
    { label: 'Cars Mastered', href: '#mastered-cars' },
    { label: 'Speed Parts (OEM)', href: '#speed-parts' },
    { label: '1960 Heritage', href: '#heritage' },
    { label: 'Regional Journal', href: '#blog' },
    { label: 'Dual Hubs & FAQs', href: '#dual-hubs' },
  ];

  return (
    <>
      {/* Topmost Workshop Live Telemetry Bar */}
      <div className="bg-[#08090C] border-b border-obsidian-border/60 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] text-gray-400">
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              M.G. MARG BAY: 4/6 ACTIVE
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-crimson" />
              56, M.G. Marg & Medical Chauraha
            </span>
            <span className="hidden xl:inline text-gray-600">|</span>
            <span className="hidden xl:inline text-gray-300 whitespace-nowrap">OPEN TODAY: 09:00 - 20:00 IST</span>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <span className="hidden lg:flex items-center gap-1 text-gray-300 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-cobalt-bright" />
              6+ Cashless Insurance Partners
            </span>
            <span className="hidden lg:inline text-gray-600">|</span>
            <a 
              href="tel:+918796576868" 
              className="text-white hover:text-crimson font-mono transition-colors flex items-center gap-1 whitespace-nowrap min-h-[32px]"
            >
              <Phone className="w-3 h-3 text-crimson" />
              HOTLINE: +91 87965 76868
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian/90 backdrop-blur-md border-b border-obsidian-border shadow-2xl py-3.5'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Dual-Brand Identity */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded bg-obsidian-surface border border-obsidian-border flex items-center justify-center relative overflow-hidden group-hover:border-crimson transition-colors shrink-0">
              <span className="font-display font-extrabold text-sm xs:text-base sm:text-lg text-white">HG</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson to-cobalt" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                <span className="font-display font-bold text-xs xs:text-base sm:text-lg tracking-tight text-white group-hover:text-gray-100 whitespace-nowrap">
                  HINDUSTAN GARAGE
                </span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono px-1 sm:px-1.5 py-0.5 rounded bg-crimson/20 border border-crimson/40 text-crimson font-semibold shrink-0">
                  EST. 1960
                </span>
              </div>
              <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono tracking-widest text-gray-400 uppercase flex items-center gap-1 sm:gap-1.5">
                <span>ATELIER</span>
                <span className="w-1 h-1 rounded-full bg-gray-500" />
                <span className="text-cobalt-bright font-semibold">SPEED PARTS</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links with GPU-Accelerated Transform Underline Sweep */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono tracking-wider text-gray-300 hover:text-white transition-colors uppercase relative py-1 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-crimson origin-left transform scale-x-0 transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100 pointer-events-none" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
            <button
              onClick={onOpenParts}
              data-cursor="WHATSAPP"
              data-magnetic="true"
              className="btn-press group px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider text-white bg-obsidian-card border border-cobalt/50 hover:border-cobalt-bright hover:bg-cobalt/20 transition-all flex items-center gap-2 min-h-[40px]"
            >
              <Wrench className="w-3.5 h-3.5 text-cobalt-bright" />
              <span>SPEED PARTS</span>
            </button>

            <button
              onClick={onOpenBooking}
              data-cursor="VIEW BAY"
              data-magnetic="true"
              className="btn-press group pl-4 pr-2 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-white bg-crimson hover:bg-crimson-bright shadow-[0_4px_16px_rgba(184,29,19,0.35)] transition-all flex items-center gap-2 min-h-[40px]"
            >
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK BAY</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded bg-obsidian-surface border border-obsidian-border text-white hover:text-crimson flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-crimson"
              aria-label="Toggle Navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-obsidian/98 border-b border-obsidian-border px-4 py-6 animate-fadeIn shadow-2xl">
            <div className="flex flex-col font-mono text-xs uppercase tracking-wider mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[44px] py-3 flex items-center text-gray-300 hover:text-crimson border-b border-obsidian-border/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-press w-full min-h-[44px] py-3 bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Service Bay
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenParts();
                }}
                className="btn-press w-full min-h-[44px] py-3 bg-obsidian-card border border-cobalt/60 hover:border-cobalt-bright text-white font-mono font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4 text-cobalt-bright" />
                Inquire Speed Parts (WhatsApp)
              </button>

              <a
                href="tel:+918796576868"
                className="btn-press w-full min-h-[44px] py-2.5 text-center text-gray-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-crimson" />
                Hotline: +91 87965 76868
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
