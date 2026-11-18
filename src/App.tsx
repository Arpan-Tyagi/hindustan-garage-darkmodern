import React, { useState } from 'react';
import { Preloader } from './components/motion/Preloader';
import { MagneticCursor } from './components/motion/MagneticCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ServiceMatrix } from './components/sections/ServiceMatrix';
import { PortfolioFilmstrip } from './components/sections/PortfolioFilmstrip';
import { BookingEngine } from './components/sections/BookingEngine';
import { SpeedPartsB2B } from './components/sections/SpeedPartsB2B';
import { LegacyStory } from './components/sections/LegacyStory';
import { RegionalBlog } from './components/sections/RegionalBlog';
import { DualHubContact } from './components/sections/DualHubContact';
import { Footer } from './components/layout/Footer';

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedBayForBooking, setSelectedBayForBooking] = useState<string>('bay-01-diagnostics');
  const [selectedCarForBooking, setSelectedCarForBooking] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('booking');
  };

  const handleOpenParts = () => {
    scrollToSection('speed-parts');
  };

  const handleSelectBay = (bayId: string) => {
    setSelectedBayForBooking(bayId);
    scrollToSection('booking');
  };

  const handleOpenBookingWithCar = (carName: string) => {
    setSelectedCarForBooking(carName);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-[#0D0E12] text-white selection:bg-crimson selection:text-white relative">
      {/* 1.4s Maximum Precision Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Custom Precision Magnetic Reticle Cursor */}
      <MagneticCursor />

      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenParts={handleOpenParts}
      />

      <main className="relative z-10">
        {/* Section 1: Kinetic Editorial Hero */}
        <Hero
          isReady={preloaderDone}
          onOpenBooking={handleOpenBooking}
          onOpenParts={handleOpenParts}
        />

        {/* Section 2: Interactive Service Matrix (Warm Editorial Stone) */}
        <ServiceMatrix
          onSelectBay={handleSelectBay}
        />

        {/* Section 3: Pinned Horizontal Showcase (Cars We Have Mastered) */}
        <PortfolioFilmstrip
          onOpenBookingWithCar={handleOpenBookingWithCar}
        />

        {/* Section 4: Two-Way WhatsApp & Email Booking Engine (Warm Editorial Stone) */}
        <BookingEngine
          initialBayId={selectedBayForBooking}
          initialCarModel={selectedCarForBooking}
        />

        {/* Section 5: Speed Parts B2B & Retail Hub (Medical Chauraha, Deep Obsidian) */}
        <SpeedPartsB2B />

        {/* Section 6: 1960 Heritage & Atelier Craft Story */}
        <LegacyStory />

        {/* Section 7: 4 Regional SEO Blog Posts (Warm Editorial Stone) */}
        <RegionalBlog
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 8: Dual-Hub Telemetry & FAQ Accordion (Civil Lines & Medical Chauraha) */}
        <DualHubContact
          onOpenBooking={handleOpenBooking}
          onOpenParts={handleOpenParts}
        />
      </main>

      {/* Section 9: Architectural Footer with Schema.org & Local NAP */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenParts={handleOpenParts}
      />
    </div>
  );
}

export default App;
