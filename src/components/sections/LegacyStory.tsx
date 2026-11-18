import React from 'react';
import { Award, Compass, Shield, Clock, Sparkles } from 'lucide-react';
import { CurtainReveal } from '../motion/CurtainReveal';

export const LegacyStory: React.FC<LegacyStoryProps> = () => {
  const milestones = [
    {
      year: '1960',
      title: 'Founding at 56, M.G. Marg',
      description: 'Established in the heart of Civil Lines, Allahabad. Hand-beating chassis, custom coachbuilding, and carburettor tuning for vintage British and Indian saloons.'
    },
    {
      year: '1984',
      title: 'The Japanese Mechanical Era',
      description: 'Second-generation expansion into precision overhead-cam engines, Maruti 800 fleets, and Toyota diesel injection timing across eastern Uttar Pradesh.'
    },
    {
      year: '2008',
      title: 'Heated Paint Booth & Cashless Hub',
      description: 'Commissioned the first commercial pressurized downdraft baking oven and computerized Celette frame pulling jig in Prayagraj.'
    },
    {
      year: '2026',
      title: 'Speed Parts & Digital Diagnostics',
      description: 'Third-generation modernization: Inaugurating Speed Parts genuine OEM distribution at Medical Chauraha paired with German DoIP factory telemetry.'
    }
  ];

  return (
    <section id="heritage" className="relative py-20 sm:py-24 bg-obsidian text-white border-b border-obsidian-border bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-obsidian-surface border border-obsidian-border font-mono text-[10px] sm:text-xs font-bold text-crimson uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>SIXTY-SIX YEARS OF LINEAGE (1960 - 2026)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            The Prayagraj Atelier Story
          </h2>
          <p className="mt-4 font-serif italic text-base sm:text-xl text-gray-300">
            &ldquo;A car is not merely an assembly of steel and sensors; it is a mechanical heart that demands the hand of a craftsman.&rdquo;
          </p>
        </div>

        {/* Narrative Columns with Archival Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-gray-300 font-sans leading-relaxed text-xs sm:text-base">
            <p>
              When <strong className="text-white">Hindustan Garage</strong> was founded in 1960 at 56, Mahatma Gandhi Marg, Civil Lines was a peaceful boulevard lined with colonial brick and colonial courts. Over sixty-six years, the skyline of Prayagraj transformed, but the core discipline of our bays remained steadfast: zero guesswork, absolute mechanical honesty, and generational mastery.
            </p>
            <p>
              Our founder began as a coachbuilder—shaping bespoke fenders by hammer, measuring tolerances by feel, and listening to the rhythmic cadence of six-cylinder carburetted engines. That artisanal obsession with structural integrity passed directly to our second and third-generation master mechanics.
            </p>
            <p>
              Today, that same philosophy guides our technicians when interfacing with a high-compression <strong className="text-white">BMW B57 inline-six</strong>, an <strong className="text-white">Audi Quattro transfer case</strong>, or a <strong className="text-white">Hyundai dual-clutch transmission</strong>. We have invested heavily in factory-level DoIP digital scan interfaces and the Yokistar heated baking oven so Prayagraj owners never have to haul their pride to Lucknow or Delhi.
            </p>
            <p className="font-mono text-xs text-crimson font-semibold">
              Now paired with Speed Parts at Medical Chauraha, the atelier controls both the technical craft and the genuine OEM supply chain under one roof.
            </p>
          </div>

          <div className="lg:col-span-6">
            <CurtainReveal direction="up" delay={100}>
              {/* Double-Bezel Outer Shell */}
              <div className="p-2 sm:p-2.5 rounded-[2rem] bg-obsidian-surface/60 border border-white/10 backdrop-blur-md shadow-2xl">
                {/* Double-Bezel Inner Core */}
                <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden border border-obsidian-border group">
                  <img
                    src="/images/heritage_1960_workshop.jpg"
                    alt="Hindustan Garage Heritage Workshop Bay"
                    className="w-full h-72 sm:h-96 object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 font-mono text-[11px] sm:text-xs text-white bg-obsidian-surface/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-obsidian-border shadow-lg pointer-events-none">
                    <div className="text-crimson font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>The Lineage Benchmark</span>
                    </div>
                    Over 14,000 passenger vehicles restored, overhauled, and precision-tuned across Eastern Uttar Pradesh since 1960.
                  </div>
                </div>
              </div>
            </CurtainReveal>
          </div>
        </div>

        {/* Chronological Milestones Strip with Double-Bezel Micro Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-obsidian-surface border border-obsidian-border hover:border-crimson/60 hover:-translate-y-1 transition-all duration-300 relative group cursor-default"
            >
              {/* Active Accent Header Line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-crimson/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display font-extrabold text-2xl sm:text-4xl text-crimson mb-2 group-hover:scale-105 transition-transform origin-left tabular-nums">
                {item.year}
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface LegacyStoryProps {}
