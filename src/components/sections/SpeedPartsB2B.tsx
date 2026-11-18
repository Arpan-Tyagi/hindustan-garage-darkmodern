import React, { useState } from 'react';
import { SPEED_PARTS_ITEMS, PartItem, generateWhatsAppPartLink } from '../../data/partsData';
import { Wrench, Search, ShieldCheck, MapPin, ArrowUpRight, ChevronDown, ChevronUp, Tag, Truck, Phone } from 'lucide-react';

export const SpeedPartsB2B: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPartId, setExpandedPartId] = useState<string | null>(SPEED_PARTS_ITEMS[0].id);

  const categories = [
    'All',
    'Engine & Clutch',
    'Braking Systems',
    'Suspension & Steering',
    'Filtration & Fluids',
    'Lighting & Body',
    'Sensors & Electrical'
  ];

  const filteredParts = SPEED_PARTS_ITEMS.filter((part) => {
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    const matchesSearch = 
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.compatibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="speed-parts" className="relative py-20 sm:py-24 bg-obsidian text-white border-b border-obsidian-border bg-grid-pattern">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cobalt/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-obsidian-border gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-obsidian-surface border border-cobalt/50 font-mono text-[10px] sm:text-xs font-bold text-cobalt-bright uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt-bright animate-ping" />
              <span>BRAND NEW SUB-VENTURE • 3 MONTHS OF OEM LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              Speed Parts B2B & Retail
            </h2>
            <p className="mt-2 text-xs sm:text-base font-mono text-gray-400 flex items-start sm:items-center gap-2">
              <MapPin className="w-4 h-4 text-crimson shrink-0 mt-0.5 sm:mt-0" />
              <span>Medical Chauraha, George Town, Prayagraj • Direct Factory Procurement</span>
            </p>
          </div>

          <div className="max-w-md bg-obsidian-surface border border-obsidian-border rounded-xl p-4 text-xs font-mono text-gray-300">
            <div className="text-crimson font-bold uppercase mb-1 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Hyundai Genuine & OEM Price Leader</span>
            </div>
            Eliminating showroom distribution markups. Real Mobis, Brembo, Monroe & Bosch spares delivered with zero waiting at 15% - 25% below dealership lists.
          </div>
        </div>

        {/* Filter Controls & Live Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar touch-pan-x max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg font-mono text-xs font-semibold whitespace-nowrap transition-all flex items-center justify-center ${
                  selectedCategory === cat
                    ? 'bg-cobalt text-white border border-cobalt-bright shadow-lg'
                    : 'bg-obsidian-surface text-gray-400 border border-obsidian-border hover:text-white hover:bg-obsidian-card'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SKU or car model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[44px] pl-9 pr-4 py-2.5 rounded-lg bg-obsidian-surface border border-obsidian-border text-white text-xs font-mono focus:border-cobalt-bright focus:outline-none"
            />
          </div>
        </div>

        {/* Interactive Hover Preview List with Inline Drawers */}
        <div className="space-y-3">
          {filteredParts.length > 0 ? (
            filteredParts.map((part) => {
              const isExpanded = expandedPartId === part.id;

              return (
                <div
                  key={part.id}
                  data-cursor="WHATSAPP"
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-obsidian-surface border-cobalt shadow-2xl'
                      : 'bg-obsidian-surface/60 border-obsidian-border hover:border-obsidian-hover hover:bg-obsidian-surface'
                  }`}
                >
                  {/* Summary Bar Header Row */}
                  <div
                    onClick={() => setExpandedPartId(isExpanded ? null : part.id)}
                    className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-obsidian-card border border-obsidian-border flex items-center justify-center shrink-0 text-cobalt-bright">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                          <span className="font-mono text-[10px] sm:text-[11px] font-bold text-crimson bg-crimson/10 px-2 py-0.5 rounded border border-crimson/20">
                            SKU: {part.sku}
                          </span>
                          <span className="font-mono text-[10px] sm:text-[11px] text-gray-400">
                            {part.oemBrand}
                          </span>
                          <span className="font-mono text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 animate-pulse font-bold">
                            SAVE {part.savingsPercentage}%
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-white">
                          {part.name}
                        </h3>
                        <p className="font-mono text-xs text-gray-400 mt-0.5">
                          Fitment: {part.compatibility}
                        </p>
                      </div>
                    </div>

                    {/* Price & Expand Indicator */}
                    <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-obsidian-border/40">
                      <div className="text-left md:text-right">
                        <div className="text-xs font-mono text-gray-500 line-through tabular-nums">
                          ₹{part.dealershipPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-base sm:text-lg font-mono font-bold text-white flex items-center gap-1.5 tabular-nums">
                          <span className="text-cobalt-bright">₹{part.speedPartsPrice.toLocaleString('en-IN')}</span>
                          <span className="text-[10px] font-normal text-gray-400">Hub Price</span>
                        </div>
                      </div>

                      <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-obsidian-card flex items-center justify-center text-gray-400 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Inline Technical Drawer Content */}
                  {isExpanded && (
                    <div className="p-4 sm:p-6 bg-obsidian-card/90 border-t border-obsidian-border animate-fadeIn">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* Part Image */}
                        <div className="lg:col-span-4 h-44 sm:h-56 rounded-xl overflow-hidden border border-obsidian-border">
                          <img
                            src={part.image}
                            alt={part.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Specifications & Inventory Telemetry */}
                        <div className="lg:col-span-8 flex flex-col justify-between h-full">
                          <div className="space-y-3 mb-6">
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                              {part.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                              {part.keySpecs.map((spec, i) => (
                                <div key={i} className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-border font-mono text-[11px] text-gray-300">
                                  <span className="text-cobalt-bright font-bold block mb-0.5">SPEC 0{i + 1}</span>
                                  <span>{spec}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono pt-2 text-gray-400">
                              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                                <Truck className="w-3.5 h-3.5" />
                                {part.stockStatus}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1 text-gray-300">
                                <ShieldCheck className="w-3.5 h-3.5 text-cobalt-bright" />
                                {part.warranty}
                              </span>
                            </div>
                          </div>

                          {/* Zero-Checkout Instant WhatsApp Actions */}
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-obsidian-border">
                            <a
                              href={generateWhatsAppPartLink(part, false)}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="WHATSAPP"
                              data-magnetic="true"
                              className="btn-press group w-full sm:w-auto min-h-[44px] pl-5 sm:pl-6 pr-2.5 sm:pr-3 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-between sm:justify-center gap-3 shadow-lg text-center transition-all"
                            >
                              <span>Instant Counter Hold (Retail WhatsApp)</span>
                              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </span>
                            </a>

                            <a
                              href={generateWhatsAppPartLink(part, true)}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="WHATSAPP"
                              data-magnetic="true"
                              className="btn-press group w-full sm:w-auto min-h-[44px] pl-5 sm:pl-6 pr-2.5 sm:pr-3 py-2.5 rounded-full bg-obsidian-surface border border-cobalt/60 hover:border-cobalt-bright text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center justify-between sm:justify-center gap-3 text-center transition-all"
                            >
                              <span>B2B Garage Bulk Quote</span>
                              <span className="w-6 h-6 rounded-full bg-cobalt-bright/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:translate-x-0.5 transition-transform">
                                <ArrowUpRight className="w-3.5 h-3.5 text-cobalt-bright" />
                              </span>
                            </a>

                            <span className="font-mono text-[11px] text-gray-400 text-center sm:text-left">
                              Direct: +91 87965 76868
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-obsidian-surface rounded-2xl border border-obsidian-border text-gray-400 font-mono text-xs">
              No parts matched &ldquo;{searchQuery}&rdquo;. Call +91 87965 76868 for manual inventory check.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
