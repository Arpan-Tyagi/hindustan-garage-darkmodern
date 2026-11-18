import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Car, Shield, CheckCircle2, User, Phone, Mail, ArrowRight, ArrowLeft, Sparkles, Send, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingEngineProps {
  initialBayId?: string;
  initialCarModel?: string;
}

export const BookingEngine: React.FC<BookingEngineProps> = ({ initialBayId, initialCarModel }) => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [vehicleMake, setVehicleMake] = useState<string>('');
  const [vehicleModel, setVehicleModel] = useState<string>(initialCarModel || '');
  const [vehicleYear, setVehicleYear] = useState<string>('2022');
  const [regNumber, setRegNumber] = useState<string>('');

  const [selectedService, setSelectedService] = useState<string>(initialBayId || 'bay-01-diagnostics');
  const [serviceDate, setServiceDate] = useState<string>('');
  const [serviceSlot, setServiceSlot] = useState<string>('09:30 AM (Morning Shift)');
  const [needPickup, setNeedPickup] = useState<boolean>(false);
  const [pickupAddress, setPickupAddress] = useState<string>('');

  const [ownerName, setOwnerName] = useState<string>('');
  const [ownerPhone, setOwnerPhone] = useState<string>('');
  const [ownerEmail, setOwnerEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  // Synchronize state when user selects a bay or car externally
  useEffect(() => {
    if (initialBayId) {
      setSelectedService(initialBayId);
    }
  }, [initialBayId]);

  useEffect(() => {
    if (initialCarModel) {
      setVehicleModel(initialCarModel);
      const brands = ['BMW', 'Mercedes-Benz', 'Mercedes', 'Audi', 'Toyota', 'Hyundai', 'Maruti Suzuki', 'Maruti', 'Skoda', 'Volkswagen', 'Tata', 'Mahindra'];
      for (const b of brands) {
        if (initialCarModel.toLowerCase().includes(b.toLowerCase())) {
          setVehicleMake(b);
          break;
        }
      }
    }
  }, [initialCarModel]);

  const serviceOptions = [
    { id: 'bay-01-diagnostics', label: 'Bay 01: Engine & ECM Advanced Diagnostics', icon: '⚡' },
    { id: 'bay-02-luxury-marques', label: 'Bay 02: Luxury Marque Servicing (BMW/Merc/Audi/JLR)', icon: '👑' },
    { id: 'bay-03-paint-booth', label: 'Bay 03: Cashless Body & Heated Paint Booth', icon: '🎨' },
    { id: 'bay-04-suspension', label: 'Bay 04: High-Performance Suspension & 3D Alignment', icon: '🎯' },
    { id: 'bay-05-climate-electrical', label: 'Bay 05: Climate Control & Electrical Atelier', icon: '❄️' },
    { id: 'bay-06-fleet', label: 'Bay 06: Corporate Fleet & Heavy SUV Care', icon: '🛡️' },
  ];

  const slotOptions = [
    '09:30 AM (Morning Shift)',
    '01:30 PM (Afternoon Shift)',
    '04:30 PM (Evening Fast-Track)',
  ];

  const handleNextStep = () => {
    if (step === 1 && (!vehicleMake.trim() || !vehicleModel.trim())) {
      alert('Please enter your vehicle Make and Model.');
      return;
    }
    if (step === 2 && !selectedService) {
      alert('Please select a service bay.');
      return;
    }
    if (step === 3 && !serviceDate) {
      alert('Please select your preferred date.');
      return;
    }
    setStep(step + 1);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName.trim() || !ownerPhone.trim() || !ownerEmail.trim()) {
      alert('Please fill in your name, WhatsApp number, and email.');
      return;
    }

    const generatedId = `HG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedId);
    setBookingConfirmed(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B81D13', '#0F4C81', '#10B981', '#111215'],
      });
    } catch {
      // Fallback
    }
  };

  const generateWhatsAppMessageUrl = () => {
    const serviceObj = serviceOptions.find((s) => s.id === selectedService);
    const serviceName = serviceObj ? serviceObj.label : selectedService;
    
    const text = `*HINDUSTAN GARAGE SERVICE BAY BOOKING CONFIRMATION*
━━━━━━━━━━━━━━━━━━━━━━
• *Booking ID*: ${ticketId}
• *Client*: ${ownerName} (${ownerPhone})
• *Email*: ${ownerEmail}
• *Vehicle*: ${vehicleMake} ${vehicleModel} (${vehicleYear})
• *Reg No*: ${regNumber || 'Pending'}
• *Bay Service*: ${serviceName}
• *Scheduled Date*: ${serviceDate}
• *Preferred Slot*: ${serviceSlot}
• *Concierge Pickup*: ${needPickup ? `Yes (${pickupAddress || 'Prayagraj'})` : 'No (Driving to 56, M.G. Marg)'}
${notes ? `• *Notes*: ${notes}` : ''}
━━━━━━━━━━━━━━━━━━━━━━
Please confirm my workshop bay reservation.`;

    return `https://wa.me/918796576868?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="relative py-20 sm:py-24 bg-stone text-carbon border-b border-stone-border bg-grid-stone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-card border border-stone-border font-mono text-[10px] sm:text-xs font-bold text-crimson uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>TWO-WAY WHATSAPP & TRANSACTIONAL EMAIL PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-carbon uppercase">
            Book Atelier Service Bay
          </h2>
          <p className="mt-3 font-sans text-carbon-muted text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Reserve dedicated ramp time at 56, M.G. Marg. Instant WhatsApp confirmation with verified surveyor and lead diagnostic telemetry.
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="bg-white rounded-2xl border border-stone-border shadow-2xl overflow-hidden p-5 sm:p-10">
          {!bookingConfirmed ? (
            <div>
              {/* Stepper Progress Header */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-stone-border">
                {[
                  { s: 1, full: 'Vehicle Details', short: 'Vehicle' },
                  { s: 2, full: 'Service Bay', short: 'Service' },
                  { s: 3, full: 'Date & Slot', short: 'Schedule' },
                  { s: 4, full: 'Confirm', short: 'Confirm' },
                ].map((item) => (
                  <div key={item.s} className="text-center">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full mx-auto flex items-center justify-center font-mono text-xs font-bold mb-1 transition-all ${
                        step === item.s
                          ? 'bg-crimson text-white ring-4 ring-crimson/20'
                          : step > item.s
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-surface text-carbon-light'
                      }`}
                    >
                      {step > item.s ? '✓' : `0${item.s}`}
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider block text-carbon-muted">
                      <span className="hidden sm:inline">{item.full}</span>
                      <span className="sm:hidden">{item.short}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Vehicle Details */}
              {step === 1 && (
                <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson font-bold uppercase">
                    <Car className="w-4 h-4" />
                    <span>Step 1: Vehicle Specifications</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Vehicle Make *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. BMW, Mercedes, Hyundai, Toyota"
                        value={vehicleMake}
                        onChange={(e) => setVehicleMake(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Model & Variant *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 530d M-Sport, Creta 1.4 DCT, Fortuner"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Manufacturing Year
                      </label>
                      <select
                        value={vehicleYear}
                        onChange={(e) => setVehicleYear(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                      >
                        {[2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, '2014 & Older'].map((yr) => (
                          <option key={yr} value={yr}>{yr}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Registration Number / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. UP 70 AB 1960 (Prayagraj)"
                        value={regNumber}
                        onChange={(e) => setRegNumber(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none uppercase"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Bay / Service Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson font-bold uppercase">
                    <Shield className="w-4 h-4" />
                    <span>Step 2: Choose Workshop Discipline</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedService(opt.id)}
                        className={`min-h-[44px] p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedService === opt.id
                            ? 'bg-carbon text-white border-crimson shadow-md ring-2 ring-crimson/30'
                            : 'bg-stone-surface border-stone-border text-carbon hover:bg-white'
                        }`}
                      >
                        <div className="text-xl mb-1">{opt.icon}</div>
                        <div className="font-display font-bold text-xs sm:text-sm leading-snug">{opt.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date & Slot */}
              {step === 3 && (
                <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson font-bold uppercase">
                    <Clock className="w-4 h-4" />
                    <span>Step 3: Appointment Schedule & Concierge</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Preferred Bay Shift
                      </label>
                      <select
                        value={serviceSlot}
                        onChange={(e) => setServiceSlot(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                      >
                        {slotOptions.map((sl) => (
                          <option key={sl} value={sl}>{sl}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Concierge Pickup Toggle */}
                  <div className="p-4 rounded-xl bg-stone-surface border border-stone-border">
                    <label className="flex items-center gap-3 cursor-pointer min-h-[40px]">
                      <input
                        type="checkbox"
                        checked={needPickup}
                        onChange={(e) => setNeedPickup(e.target.checked)}
                        className="w-4 h-4 text-crimson rounded focus:ring-crimson"
                      />
                      <span className="font-mono text-xs font-bold text-carbon uppercase">
                        Request Driver Pick-Up & Drop (Prayagraj & 150 km Radius)
                      </span>
                    </label>

                    {needPickup && (
                      <div className="mt-3 pt-3 border-t border-stone-border">
                        <input
                          type="text"
                          placeholder="Enter your locality (e.g. Civil Lines, George Town, Naini, or Outstation)"
                          value={pickupAddress}
                          onChange={(e) => setPickupAddress(e.target.value)}
                          className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg border border-stone-border bg-white text-carbon font-sans text-xs focus:border-crimson focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Confirm */}
              {step === 4 && (
                <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-crimson font-bold uppercase">
                    <User className="w-4 h-4" />
                    <span>Step 4: Owner Telemetry & Contact</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Adv. Amit Srivastava"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98390 XXXXX"
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
                        className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                      Email Address (For Digital Job Card & Estimate) *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. client@domain.com"
                      value={ownerEmail}
                      onChange={(e) => setOwnerEmail(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 sm:py-3 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-carbon uppercase mb-1.5 font-semibold">
                      Specific Symptoms or Fault Codes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Steering judder above 80 km/h, check engine lamp on, AC cooling delay"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-border bg-stone-surface text-carbon font-sans text-sm focus:border-crimson focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-stone-border gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-press min-h-[44px] px-4 py-2.5 rounded-lg border border-stone-border bg-stone-surface hover:bg-stone-card text-carbon font-mono text-xs uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    data-cursor="BOOK SLOT"
                    data-magnetic="true"
                    className="btn-press group min-h-[44px] pl-5 sm:pl-6 pr-2.5 sm:pr-3 py-2.5 rounded-full bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider shadow flex items-center gap-2.5 transition-all"
                  >
                    <span>Proceed to Step 0{step + 1}</span>
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    data-cursor="BOOK SLOT"
                    data-magnetic="true"
                    className="btn-press group min-h-[48px] pl-6 sm:pl-7 pr-3 sm:pr-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-3 transition-all"
                  >
                    <span>Confirm Booking</span>
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Booking Confirmation Voucher */
            <div className="text-center py-4 sm:py-6 animate-fadeIn">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              <div className="inline-block px-3 py-1 rounded bg-stone-surface border border-stone-border font-mono text-xs font-bold text-carbon mb-2">
                TICKET: {ticketId}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-carbon mb-2">
                Bay Reservation Transmitted!
              </h3>
              <p className="font-sans text-carbon-muted text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-carbon font-semibold">{ownerName}</strong>. 
                Your service bay has been provisioned at 56, M.G. Marg for <strong className="text-carbon font-semibold">{vehicleMake} {vehicleModel}</strong>.
              </p>

              {/* Digital Job Ticket Details */}
              <div className="bg-stone-surface rounded-xl border border-stone-border p-4 sm:p-5 text-left font-mono text-xs text-carbon space-y-2.5 max-w-lg mx-auto mb-8 shadow-inner">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-stone-border pb-2 gap-1 sm:gap-2">
                  <span className="text-carbon-muted">Date & Shift:</span>
                  <span className="font-bold">{serviceDate} • {serviceSlot}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-stone-border pb-2 gap-1 sm:gap-2">
                  <span className="text-carbon-muted">Client WhatsApp:</span>
                  <span className="font-bold">{ownerPhone}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-stone-border pb-2 gap-1 sm:gap-2">
                  <span className="text-carbon-muted">Discipline:</span>
                  <span className="font-bold text-crimson">
                    {serviceOptions.find((s) => s.id === selectedService)?.label || selectedService}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                  <span className="text-carbon-muted">Concierge Status:</span>
                  <span className="font-bold text-cobalt">
                    {needPickup ? `Pickup at ${pickupAddress || 'Prayagraj'}` : 'Self-Drive to 56, M.G. Marg'}
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Action Webhook Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press w-full sm:w-auto min-h-[44px] px-6 sm:px-7 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Ticket via WhatsApp (+91 87965 76868)</span>
                </a>

                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    setStep(1);
                  }}
                  className="btn-press w-full sm:w-auto min-h-[44px] px-5 py-3.5 rounded-lg border border-stone-border bg-white text-carbon hover:bg-stone-surface font-mono text-xs uppercase tracking-wider flex items-center justify-center"
                >
                  Book Another Bay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
