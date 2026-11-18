import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Wrench, Menu, X, ArrowUpRight, ShieldCheck, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenParts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenParts }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section scroll-spy
      const sections = ['services', 'mastered-cars', 'speed-parts', 'heritage', 'blog', 'dual-hubs'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services Matrix', href: '#services', id: 'services' },
    { label: 'Mastered Cars', href: '#mastered-cars', id: 'mastered-cars' },
    { label: 'OEM Spares', href: '#speed-parts', id: 'speed-parts' },
    { label: '1960 Heritage', href: '#heritage', id: 'heritage' },
    { label: 'Journal', href: '#blog', id: 'blog' },
    { label: 'Hubs & FAQ', href: '#dual-hubs', id: 'dual-hubs' },
  ];

  return (
    <>
      {/* Topmost Workshop Live Telemetry Bar */}
      <div className="bg-[#08090C] border-b border-white/[0.08] text-xs py-1.5 px-4 hidden md:block select-none">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between font-mono text-[11px] tracking-wide text-zinc-300">
          {/* Left: Real-time Workshop Capacity & Location */}
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>M.G. MARG BAY: <strong className="text-white font-bold">4/6 ACTIVE</strong></span>
            </span>

            <span className="h-3 w-px bg-white/15" aria-hidden="true" />

            <span className="flex items-center gap-1.5 text-zinc-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-crimson shrink-0" />
              <span>56, M.G. Marg & Medical Chauraha</span>
            </span>

            <span className="hidden xl:inline-block h-3 w-px bg-white/15" aria-hidden="true" />

            <span className="hidden xl:flex items-center gap-1.5 text-zinc-400 whitespace-nowrap">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span>OPEN TODAY: <strong className="text-zinc-200">09:00 - 20:00 IST</strong></span>
            </span>
          </div>

          {/* Right: Cashless Claims & Hotline */}
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="hidden lg:flex items-center gap-1.5 text-zinc-300 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-cobalt-bright shrink-0" />
              <span>6+ Cashless Insurance Partners</span>
            </span>

            <span className="hidden lg:inline-block h-3 w-px bg-white/15" aria-hidden="true" />

            <a
              href="tel:+918796576868"
              className="text-white hover:text-crimson font-mono font-medium tracking-wider transition-colors flex items-center gap-1.5 whitespace-nowrap group"
            >
              <Phone className="w-3 h-3 text-crimson group-hover:scale-110 transition-transform" />
              <span>HOTLINE: <strong className="text-white font-bold tracking-normal">+91 87965 76868</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0E12]/96 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.85)] py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#0D0E12]/95 via-[#0D0E12]/60 to-transparent py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo & Dual-Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0 min-w-0" aria-label="Hindustan Garage Home">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#1E2028] to-[#121318] border border-white/15 group-hover:border-crimson/80 flex items-center justify-center relative overflow-hidden transition-all shadow-inner shrink-0">
              <span className="font-display font-extrabold text-sm sm:text-base text-white tracking-wider">HG</span>
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-crimson via-crimson to-cobalt" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xs xs:text-sm sm:text-base tracking-[0.05em] text-white group-hover:text-zinc-100 transition-colors whitespace-nowrap">
                  HINDUSTAN GARAGE
                </span>
                <span className="text-[8px] xs:text-[9px] font-mono px-1.5 py-0.5 rounded bg-crimson/15 border border-crimson/40 text-crimson-bright font-bold tracking-widest shrink-0">
                  EST. 1960
                </span>
              </div>
              <p className="text-[8px] xs:text-[9px] font-mono tracking-[0.16em] text-zinc-400 uppercase flex items-center gap-1.5">
                <span>ATELIER</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-cobalt-bright font-semibold">SPEED PARTS</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Enabled on xl: >= 1280px for uncompromised spacing) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-sans font-medium tracking-[0.04em] uppercase relative py-1.5 transition-colors whitespace-nowrap group ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Underline sweep indicator */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-crimson rounded-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'scale-x-100 shadow-[0_0_8px_rgba(184,29,19,0.8)]' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop xl+) */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Secondary Speed Parts Hotline / WhatsApp Pill (Shown on 2XL screens) */}
            <button
              onClick={onOpenParts}
              data-cursor="WHATSAPP"
              data-magnetic="true"
              className="btn-press group hidden 2xl:flex px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider text-zinc-200 bg-[#161820] border border-cobalt/40 hover:border-cobalt-bright hover:bg-cobalt/15 transition-all items-center gap-2 min-h-[38px]"
            >
              <Wrench className="w-3.5 h-3.5 text-cobalt-bright group-hover:rotate-45 transition-transform" />
              <span>SPEED PARTS</span>
            </button>

            {/* Primary Atelier Booking Button */}
            <button
              onClick={onOpenBooking}
              data-cursor="VIEW BAY"
              data-magnetic="true"
              className="btn-press group pl-4 pr-2.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-white bg-crimson hover:bg-crimson-bright shadow-[0_2px_14px_rgba(184,29,19,0.35)] hover:shadow-[0_4px_20px_rgba(184,29,19,0.55)] transition-all flex items-center gap-2.5 min-h-[38px] shrink-0"
            >
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">BOOK BAY</span>
              </div>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>

          {/* Tablet & Mobile Controls (< 1280px) */}
          <div className="xl:hidden flex items-center gap-2.5">
            {/* Direct Book CTA available on tablet/mobile header */}
            <button
              onClick={onOpenBooking}
              className="btn-press pl-3.5 pr-2 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-white bg-crimson hover:bg-crimson-bright shadow-sm flex items-center gap-1.5 min-h-[36px]"
            >
              <Calendar className="w-3 h-3" />
              <span>BOOK BAY</span>
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-2.5 h-2.5 text-white" />
              </span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg bg-[#161820] border border-white/10 text-white hover:text-crimson flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-crimson"
              aria-label="Toggle Navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#0D0E12]/98 backdrop-blur-2xl border-b border-white/[0.08] px-5 py-6 animate-fadeIn shadow-2xl">
            <div className="flex flex-col mb-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[44px] py-3 flex items-center justify-between text-zinc-300 hover:text-white border-b border-white/[0.06] text-xs font-mono uppercase tracking-wider transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-crimson font-mono text-[10px] tabular-nums font-bold">0{idx + 1}.</span>
                    <span className="font-sans font-medium text-[13px]">{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-crimson transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-press w-full min-h-[44px] py-3 bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Service Bay
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenParts();
                }}
                className="btn-press w-full min-h-[44px] py-3 bg-[#161820] border border-cobalt/60 hover:border-cobalt-bright text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4 text-cobalt-bright" />
                Inquire Speed Parts (WhatsApp)
              </button>

              <a
                href="tel:+918796576868"
                className="btn-press w-full min-h-[44px] py-2 text-center text-zinc-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-crimson" />
                <span>Direct Hotline: <strong className="text-white">+91 87965 76868</strong></span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
