import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/faqData';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, ChevronDown, ChevronUp, Wrench, Calendar, ArrowUpRight, MessageSquare } from 'lucide-react';

interface DualHubContactProps {
  onOpenBooking: () => void;
  onOpenParts: () => void;
}

export const DualHubContact: React.FC<DualHubContactProps> = ({ onOpenBooking, onOpenParts }) => {
  const [activeHub, setActiveHub] = useState<'mg-marg' | 'medical-chauraha'>('mg-marg');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const hubs = {
    'mg-marg': {
      name: 'Hindustan Garage Flagship Workshop',
      tagline: 'Multi-Bay Mechanical, Diagnostic & Cashless Paint Atelier',
      address: '56, Mahatma Gandhi Marg (M.G. Marg), Civil Lines, Prayagraj, UP - 211001',
      landmark: 'Near High Court Junction & Civil Lines Bus Station',
      hours: 'Mon - Sat: 09:00 AM - 08:00 PM IST (Sunday Closed)',
      phone: '+91 87965 76868',
      focus: ['6 Specialized Mechanical & Diagnostic Bays', 'Pressurized Heated Downdraft Baking Oven', 'Cashless Insurance Claim Desk', 'Hunter 3D Laser Suspension Rig'],
      gmapsQuery: '56+Mahatma+Gandhi+Marg+Civil+Lines+Prayagraj',
    },
    'medical-chauraha': {
      name: 'Speed Parts Retail & B2B Hub',
      tagline: 'Brand-New Genuine OEM & Wholesale Parts Distribution Center',
      address: 'Medical Chauraha, George Town, Prayagraj, UP - 211002',
      landmark: 'Near M.L.N. Medical College & George Town Commercial Axis',
      hours: 'Mon - Sat: 09:30 AM - 08:30 PM IST (Emergency Dispatch on Call)',
      phone: '+91 87965 76868',
      focus: ['Hyundai Mobis Genuine Spares Price Leader', 'Brembo, Monroe & Bosch Authorized Stockist', 'Over-The-Counter Retail & Garage Wholesale', 'Express 45-Min Local Motorcycle Dispatch'],
      gmapsQuery: 'Medical+Chauraha+George+Town+Prayagraj',
    }
  };

  const currentHubData = hubs[activeHub];

  return (
    <section id="dual-hubs" className="relative py-20 sm:py-24 bg-stone text-carbon border-b border-stone-border bg-grid-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-card border border-stone-border font-mono text-[10px] sm:text-xs font-bold text-crimson uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>TWO STRATEGIC LOCATIONS IN PRAYAGRAJ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-carbon uppercase">
            Dual-Hub Network & Assistance
          </h2>
          <p className="mt-4 font-sans text-carbon-muted text-xs sm:text-base leading-relaxed">
            Whether visiting our 66-year-old Civil Lines flagship atelier for major servicing or stopping at Medical Chauraha for direct genuine spares, we are minutes away.
          </p>
        </div>

        {/* Interactive Dual-Hub Switcher Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="p-1 sm:p-1.5 rounded-xl bg-stone-surface border border-stone-border flex items-center gap-1.5 sm:gap-2 max-w-xl w-full">
            <button
              onClick={() => setActiveHub('mg-marg')}
              className={`flex-1 min-h-[44px] py-2.5 px-2 sm:px-4 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeHub === 'mg-marg'
                  ? 'bg-carbon text-white shadow-lg'
                  : 'text-carbon-muted hover:text-carbon'
              }`}
            >
              <Wrench className="w-4 h-4 text-crimson shrink-0" />
              <span>
                <span className="hidden sm:inline">56, M.G. Marg (Atelier)</span>
                <span className="sm:hidden">Civil Lines</span>
              </span>
            </button>

            <button
              onClick={() => setActiveHub('medical-chauraha')}
              className={`flex-1 min-h-[44px] py-2.5 px-2 sm:px-4 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                activeHub === 'medical-chauraha'
                  ? 'bg-carbon text-white shadow-lg'
                  : 'text-carbon-muted hover:text-carbon'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-cobalt-bright shrink-0" />
              <span>
                <span className="hidden sm:inline">Medical Chauraha (Parts Hub)</span>
                <span className="sm:hidden">Medical Chauraha</span>
              </span>
            </button>
          </div>
        </div>

        {/* Selected Hub Telemetry Card with Kinetic Keying */}
        <div key={activeHub} className="bg-white rounded-2xl border border-stone-border shadow-2xl p-5 sm:p-10 mb-16 sm:mb-20 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-block px-3 py-1 rounded bg-stone-surface border border-stone-border font-mono text-[10px] sm:text-xs font-bold text-crimson">
                {activeHub === 'mg-marg' ? 'HEADQUARTERS & WORKSHOP' : 'LOGISTICS & RETAIL COUNTER'}
              </div>

              <h3 className="font-display font-bold text-xl sm:text-3xl text-carbon">
                {currentHubData.name}
              </h3>
              <p className="font-mono text-xs text-carbon-light">
                {currentHubData.tagline}
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-crimson shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-carbon font-semibold">{currentHubData.address}</strong>
                    <span className="text-xs text-carbon-muted font-mono">{currentHubData.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-cobalt shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-carbon font-semibold">{currentHubData.hours}</strong>
                    <span className="text-xs text-carbon-muted font-mono">Emergency roadside towing available 24/7 across 150 km radius</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-carbon font-semibold tabular-nums">Hotline & WhatsApp: {currentHubData.phone}</strong>
                    <span className="text-xs text-carbon-muted font-mono">Instant counter reservation and part verification desk</span>
                  </div>
                </div>
              </div>

              {/* Station Focus Badges */}
              <div className="pt-3">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-carbon-light block mb-2 font-bold">
                  Key Capabilities at this Location:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentHubData.focus.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-stone-surface border border-stone-border font-mono text-xs text-carbon flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Map Directions & Direct Action Box */}
            <div className="lg:col-span-5 bg-stone-surface rounded-xl border border-stone-border p-5 sm:p-6 flex flex-col justify-between h-full">
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-carbon mb-1 sm:mb-2">
                  Navigate to {activeHub === 'mg-marg' ? 'Civil Lines Atelier' : 'George Town Hub'}
                </h4>
                <p className="text-xs font-sans text-carbon-muted mb-5 sm:mb-6 leading-relaxed">
                  Click below to open precise driving coordinates in Google Maps or call our dispatch desk.
                </p>

                <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-stone-border font-mono text-xs text-carbon space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-carbon-muted">City Catchment:</span>
                    <span className="font-bold">Prayagraj (UP)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-carbon-muted">Postal Code:</span>
                    <span className="font-bold tabular-nums">{activeHub === 'mg-marg' ? '211001' : '211002'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-carbon-muted">Towing Service:</span>
                    <span className="font-bold text-emerald-600">Active (150 KM)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${currentHubData.gmapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="NAVIGATE"
                  data-magnetic="true"
                  className="btn-press group w-full min-h-[44px] pl-5 pr-2.5 py-2.5 rounded-full bg-carbon hover:bg-carbon-muted text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-between sm:justify-center gap-3 shadow transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-crimson" />
                    <span>Open in Google Maps</span>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {activeHub === 'mg-marg' ? (
                  <button
                    onClick={onOpenBooking}
                    data-cursor="BOOK BAY"
                    data-magnetic="true"
                    className="btn-press group w-full min-h-[44px] pl-5 pr-2.5 py-2.5 rounded-full bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-between sm:justify-center gap-3 shadow transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Book Service Bay at M.G. Marg</span>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={onOpenParts}
                    data-cursor="WHATSAPP"
                    data-magnetic="true"
                    className="btn-press group w-full min-h-[44px] pl-5 pr-2.5 py-2.5 rounded-full bg-cobalt hover:bg-cobalt-bright text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-between sm:justify-center gap-3 shadow transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Message Medical Chauraha Parts Desk</span>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Sub-Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-carbon">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm font-sans text-carbon-muted mt-2">
              Everything you need to know about cashless insurance, OEM spare warranty, and turnaround times.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-stone-border overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="group w-full min-h-[48px] p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center items-start gap-1.5 sm:gap-3">
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-crimson bg-stone-surface px-2 py-0.5 rounded border border-stone-border shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-carbon leading-snug group-hover:text-crimson transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-stone-surface text-carbon-light group-hover:text-crimson flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-colors">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm font-sans text-carbon-muted leading-relaxed border-t border-stone-border/40 bg-stone-surface/30 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
