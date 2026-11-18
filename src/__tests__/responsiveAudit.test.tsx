import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { ServiceMatrix } from '../components/sections/ServiceMatrix';
import { PortfolioFilmstrip } from '../components/sections/PortfolioFilmstrip';
import { BookingEngine } from '../components/sections/BookingEngine';
import { SpeedPartsB2B } from '../components/sections/SpeedPartsB2B';
import { LegacyStory } from '../components/sections/LegacyStory';
import { RegionalBlog } from '../components/sections/RegionalBlog';
import { DualHubContact } from '../components/sections/DualHubContact';
import { Footer } from '../components/layout/Footer';

describe('1. Navbar Responsive & Touch Targets', () => {
  it('renders brand identity and mobile hamburger button with >=44px touch target', () => {
    const handleBooking = vi.fn();
    const handleParts = vi.fn();
    render(<Navbar onOpenBooking={handleBooking} onOpenParts={handleParts} />);

    expect(screen.getByText('HINDUSTAN GARAGE')).toBeTruthy();
    expect(screen.getByText('EST. 1960')).toBeTruthy();

    const hamburger = screen.getByLabelText('Toggle Navigation');
    expect(hamburger).toBeTruthy();
    expect(hamburger.className).toContain('min-w-[44px]');
    expect(hamburger.className).toContain('min-h-[44px]');

    // Click hamburger to open flyout
    fireEvent.click(hamburger);
    expect(screen.getByText('Book Service Bay')).toBeTruthy();
    expect(screen.getByText('Inquire Speed Parts (WhatsApp)')).toBeTruthy();
  });
});

describe('2. Hero Section Refinement & CTAs', () => {
  it('renders dual B2C & B2B buttons and HUD telemetry cards', () => {
    const handleBooking = vi.fn();
    const handleParts = vi.fn();
    render(<Hero onOpenBooking={handleBooking} onOpenParts={handleParts} />);

    expect(screen.getByText(/Prayagraj's Master/i)).toBeTruthy();
    const bookBtn = screen.getByText(/Book Workshop Bay \(B2C\)/i).closest('button');
    const partsBtn = screen.getByText(/Speed Parts B2B Inquiry/i).closest('button');

    expect(bookBtn).toBeTruthy();
    expect(bookBtn?.className).toContain('min-h-[48px]');
    expect(partsBtn).toBeTruthy();
    expect(partsBtn?.className).toContain('min-h-[48px]');

    // Test CTA clicks
    fireEvent.click(bookBtn!);
    expect(handleBooking).toHaveBeenCalledTimes(1);

    fireEvent.click(partsBtn!);
    expect(handleParts).toHaveBeenCalledTimes(1);
  });
});

describe('3. Service Matrix Interactive Bays & Dossier', () => {
  it('renders 6 certified bays and updates detailed inspection dossier on selection', () => {
    const handleSelectBay = vi.fn();
    render(<ServiceMatrix onSelectBay={handleSelectBay} />);

    expect(screen.getByText('Interactive Service Matrix')).toBeTruthy();
    const bay1Elements = screen.getAllByText('BAY 01');
    expect(bay1Elements.length).toBeGreaterThanOrEqual(1);

    // Click Bay 02
    const bay2Card = screen.getByText('Luxury Marque Servicing & Overhaul');
    fireEvent.click(bay2Card);

    // Verify dossier reflects Bay 02 content
    const bay2Elements = screen.getAllByText('BAY 02');
    expect(bay2Elements.length).toBeGreaterThanOrEqual(1);

    const bookBayBtn = screen.getByText('Book This Bay Now');
    expect(bookBayBtn).toBeTruthy();
    expect(bookBayBtn.closest('button')?.className).toContain('min-h-[44px]');

    fireEvent.click(bookBayBtn);
    expect(handleSelectBay).toHaveBeenCalledWith('bay-02-luxury-marques');
  });

  it('ensures active bay card maintains WCAG AA/AAA compliant text colors on dark background', () => {
    const handleSelectBay = vi.fn();
    render(<ServiceMatrix onSelectBay={handleSelectBay} />);

    // Bay 01 card is active by default in the bay list
    const bay1Heading = screen.getAllByText('Engine & ECM Advanced Diagnostics')[0];
    const categorySpan = bay1Heading.parentElement?.querySelector('span.uppercase');
    expect(categorySpan).toBeTruthy();
    // When active, categorySpan should be text-gray-300 for >10:1 contrast on bg-carbon
    expect(categorySpan?.className).toContain('text-gray-300');
  });
});

describe('4. Portfolio Filmstrip & Inspect Modal', () => {
  it('renders car cards, filters by tier with >=44px touch targets, and opens inspect modal', () => {
    const handleOpenWithCar = vi.fn();
    render(<PortfolioFilmstrip onOpenBookingWithCar={handleOpenWithCar} />);

    expect(screen.getByText('Cars We Have Mastered')).toBeTruthy();

    // Verify filter buttons meet >=44px mobile touch targets
    const filterButtons = screen.getAllByRole('button');
    const luxuryFilter = screen.getByRole('button', { name: 'Luxury Marque' });
    expect(luxuryFilter.className).toContain('min-h-[44px]');

    fireEvent.click(luxuryFilter);

    // Click first car card
    const cardEl = screen.getByText('Mercedes-Benz E-Class W213 (E 220 d)');
    fireEvent.click(cardEl);

    // Modal should be open
    expect(screen.getByText('Scope of Master Craft')).toBeTruthy();
    const closeBtn = screen.getByLabelText('Close dialog');
    expect(closeBtn).toBeTruthy();
    expect(closeBtn.className).toContain('min-h-[44px]');
    expect(closeBtn.className).toContain('min-w-[44px]');

    // Test book similar service button
    const bookSimilarBtn = screen.getByText('Book Similar Service For My Car');
    expect(bookSimilarBtn.closest('button')?.className).toContain('min-h-[44px]');
    fireEvent.click(bookSimilarBtn);
    expect(handleOpenWithCar).toHaveBeenCalled();
  });

  it('closes inspect modal on Escape key press', () => {
    const handleOpenWithCar = vi.fn();
    render(<PortfolioFilmstrip onOpenBookingWithCar={handleOpenWithCar} />);

    const cardEl = screen.getByText('Mercedes-Benz E-Class W213 (E 220 d)');
    fireEvent.click(cardEl);
    expect(screen.getByText('Scope of Master Craft')).toBeTruthy();

    // Press Escape
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByText('Scope of Master Craft')).toBeNull();
  });
});

describe('5. Two-Way Booking Engine Stepper Flow', () => {
  it('navigates through steps 1-4, validates inputs, and produces WhatsApp confirmation voucher', () => {
    render(<BookingEngine />);

    expect(screen.getByText('Book Atelier Service Bay')).toBeTruthy();
    expect(screen.getByText(/Step 1: Vehicle Specifications/i)).toBeTruthy();

    // Fill Step 1
    const makeInput = screen.getByPlaceholderText(/BMW, Mercedes, Hyundai/i);
    const modelInput = screen.getByPlaceholderText(/530d M-Sport, Creta/i);
    fireEvent.change(makeInput, { target: { value: 'BMW' } });
    fireEvent.change(modelInput, { target: { value: '530d' } });

    // Proceed to Step 2
    const nextBtn = screen.getByText(/Proceed to Step 02/i);
    fireEvent.click(nextBtn);

    // Verify Step 2
    expect(screen.getByText(/Step 2: Choose Workshop Discipline/i)).toBeTruthy();
    const step2Next = screen.getByText(/Proceed to Step 03/i);
    fireEvent.click(step2Next);

    // Verify Step 3 Date & Slot
    expect(screen.getByText(/Step 3: Appointment Schedule/i)).toBeTruthy();
    const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement;
    expect(dateInput).toBeTruthy();
    fireEvent.change(dateInput, { target: { value: '2026-04-15' } });

    const step3Next = screen.getByText(/Proceed to Step 04/i);
    fireEvent.click(step3Next);

    // Verify Step 4 Contact Details
    expect(screen.getByText(/Step 4: Owner Telemetry & Contact/i)).toBeTruthy();
    const nameInput = screen.getByPlaceholderText(/Adv. Amit Srivastava/i);
    const phoneInput = screen.getByPlaceholderText(/98390 XXXXX/i);
    const emailInput = screen.getByPlaceholderText(/client@domain.com/i);

    fireEvent.change(nameInput, { target: { value: 'Rajiv Sharma' } });
    fireEvent.change(phoneInput, { target: { value: '9876543210' } });
    fireEvent.change(emailInput, { target: { value: 'rajiv@example.com' } });

    // Submit booking
    const submitBtn = screen.getByText(/Confirm Booking/i);
    fireEvent.click(submitBtn);

    // Voucher screen
    expect(screen.getByText('Bay Reservation Transmitted!')).toBeTruthy();
    expect(screen.getByText(/Rajiv Sharma/i)).toBeTruthy();
    const waLink = screen.getByText(/Send Ticket via WhatsApp/i).closest('a');
    expect(waLink).toBeTruthy();
    expect(waLink?.getAttribute('href')).toContain('https://wa.me/918796576868');
    expect(waLink?.getAttribute('href')).toContain('Rajiv%20Sharma');
  });

  it('synchronizes vehicleModel and selectedService when initial props update', () => {
    const { rerender } = render(<BookingEngine initialBayId="bay-01-diagnostics" initialCarModel="BMW 530d" />);

    const modelInput = screen.getByPlaceholderText(/530d M-Sport, Creta/i) as HTMLInputElement;
    expect(modelInput.value).toBe('BMW 530d');
    const makeInput = screen.getByPlaceholderText(/BMW, Mercedes, Hyundai/i) as HTMLInputElement;
    expect(makeInput.value).toBe('BMW');

    // Rerender with different props (e.g. user selected another car from filmstrip)
    rerender(<BookingEngine initialBayId="bay-02-luxury-marques" initialCarModel="Mercedes-Benz E-Class W213" />);
    expect(modelInput.value).toBe('Mercedes-Benz E-Class W213');
    expect(makeInput.value).toBe('Mercedes-Benz');
  });
});

describe('6. Speed Parts B2B Catalog & Search', () => {
  it('filters spare parts by query and displays instant counter hold CTA', () => {
    render(<SpeedPartsB2B />);

    expect(screen.getByText('Speed Parts B2B & Retail')).toBeTruthy();

    // Verify category filter buttons have >=44px touch targets
    const brakeCategoryBtn = screen.getByRole('button', { name: 'Braking Systems' });
    expect(brakeCategoryBtn.className).toContain('min-h-[44px]');

    const searchInput = screen.getByPlaceholderText(/Search SKU or car model/i);
    expect(searchInput).toBeTruthy();
    expect(searchInput.className).toContain('min-h-[44px]');

    // Search for Creta
    fireEvent.change(searchInput, { target: { value: 'Creta' } });
    const cretaElements = screen.getAllByText(/Creta/i);
    expect(cretaElements.length).toBeGreaterThanOrEqual(1);

    // Verify WhatsApp counter hold link
    const counterHoldLinks = screen.getAllByText(/Instant Counter Hold/i);
    expect(counterHoldLinks[0].closest('a')?.className).toContain('min-h-[44px]');
  });
});

describe('7. Regional Blog & Full Reader Modal', () => {
  it('renders articles and opens reading modal with clean dismiss mechanism', () => {
    const handleBooking = vi.fn();
    render(<RegionalBlog onOpenBooking={handleBooking} />);

    expect(screen.getByText('Regional Insights & Field Notes')).toBeTruthy();
    const readBtn = screen.getAllByText('Read Article')[0];
    fireEvent.click(readBtn);

    // Modal open
    expect(screen.getByText('Executive Summary & Actionable Takeaways')).toBeTruthy();
    const closeBtn = screen.getByLabelText('Close article');
    expect(closeBtn.className).toContain('min-h-[44px]');
    expect(closeBtn.className).toContain('min-w-[44px]');

    // Press Escape to dismiss
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByText('Executive Summary & Actionable Takeaways')).toBeNull();
  });
});

describe('8. Dual-Hub Contact & FAQ Accordion', () => {
  it('switches between M.G. Marg and Medical Chauraha hubs with accurate telephone & NAP data', () => {
    const handleBooking = vi.fn();
    const handleParts = vi.fn();
    render(<DualHubContact onOpenBooking={handleBooking} onOpenParts={handleParts} />);

    expect(screen.getByText('Dual-Hub Network & Assistance')).toBeTruthy();
    expect(screen.getByText(/56, Mahatma Gandhi Marg/i)).toBeTruthy();

    // Switch to Medical Chauraha via button click
    const buttons = screen.getAllByRole('button');
    const partsTabBtn = buttons.find((b) => b.textContent?.includes('Medical Chauraha'));
    expect(partsTabBtn).toBeTruthy();
    fireEvent.click(partsTabBtn!);

    expect(screen.getByText('Speed Parts Retail & B2B Hub')).toBeTruthy();
    expect(screen.getByText(/Medical Chauraha, George Town, Prayagraj/i)).toBeTruthy();

    // Initial state: FAQ 01 is open by default
    expect(screen.getByText(/We have direct tie-ups with ICICI Lombard/i)).toBeTruthy();

    // Click FAQ 02 to expand it
    const faq2Question = screen.getByText(/Are Speed Parts components 100% authentic/i);
    fireEvent.click(faq2Question);
    expect(screen.getByText(/Every part sold through Speed Parts/i)).toBeTruthy();
  });
});

describe('9. Footer Architectural NAP & Touch Usability', () => {
  it('renders complete dual NAP coordinates, hotline, and quick links with minimum touch targets', () => {
    const handleBooking = vi.fn();
    const handleParts = vi.fn();
    render(<Footer onOpenBooking={handleBooking} onOpenParts={handleParts} />);

    expect(screen.getByText('Flagship Atelier')).toBeTruthy();
    expect(screen.getByText('Speed Parts Hub')).toBeTruthy();
    expect(screen.getByText('© 1960 - 2026 Hindustan Garage & Speed Parts. All Rights Reserved.')).toBeTruthy();

    const bookBayButton = screen.getByText('Book Service Bay').closest('button');
    expect(bookBayButton?.className).toContain('min-h-[44px]');
  });
});

describe('10. WCAG Contrast Compliance Calculation', () => {
  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (hex1: string, hex2: string) => {
    const parse = (hex: string) => {
      const h = hex.replace('#', '');
      return [
        parseInt(h.substring(0, 2), 16),
        parseInt(h.substring(2, 4), 16),
        parseInt(h.substring(4, 6), 16),
      ];
    };
    const [r1, g1, b1] = parse(hex1);
    const [r2, g2, b2] = parse(hex2);
    const l1 = getLuminance(r1, g1, b1);
    const l2 = getLuminance(r2, g2, b2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  it('verifies contrast in Deep Obsidian sections exceeds WCAG AA (4.5:1)', () => {
    const obsidianBg = '#0D0E12';
    const textWhite = '#FFFFFF';
    const textGray300 = '#D1D5DB';
    const textGray400 = '#9CA3AF';

    expect(getContrastRatio(textWhite, obsidianBg)).toBeGreaterThan(16); // AAA
    expect(getContrastRatio(textGray300, obsidianBg)).toBeGreaterThan(10); // AAA
    expect(getContrastRatio(textGray400, obsidianBg)).toBeGreaterThan(6.0); // AA (required 4.5:1)
  });

  it('verifies contrast in Warm Editorial Stone sections exceeds WCAG AA (4.5:1)', () => {
    const stoneBg = '#F4F2EC';
    const carbonText = '#111215';
    const carbonMuted = '#4A4D58';
    const carbonLight = '#525664';

    expect(getContrastRatio(carbonText, stoneBg)).toBeGreaterThan(14); // AAA
    expect(getContrastRatio(carbonMuted, stoneBg)).toBeGreaterThan(7.0); // AAA
    expect(getContrastRatio(carbonLight, stoneBg)).toBeGreaterThan(5.5); // AA (required 4.5:1)
  });
});
