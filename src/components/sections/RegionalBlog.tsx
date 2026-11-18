import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/blogData';
import { BookOpen, Clock, Calendar, ArrowRight, User, X, CheckCircle2, HelpCircle } from 'lucide-react';
import { CurtainReveal } from '../motion/CurtainReveal';

interface RegionalBlogProps {
  onOpenBooking: () => void;
}

export const RegionalBlog: React.FC<RegionalBlogProps> = ({ onOpenBooking }) => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="blog" className="relative py-20 sm:py-24 bg-stone text-carbon border-b border-stone-border bg-grid-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-stone-border gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-card border border-stone-border font-mono text-[10px] sm:text-xs font-bold text-crimson uppercase tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PRAYAGRAJ AUTOMOTIVE JOURNAL & REGIONAL ADVISORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-carbon uppercase">
              Regional Insights & Field Notes
            </h2>
          </div>
          <p className="max-w-md font-sans text-carbon-muted text-xs sm:text-sm leading-relaxed">
            Essential engineering guides for vehicle owners navigating eastern UP highway conditions, summer heatwaves, and local spare parts procurement.
          </p>
        </div>

        {/* 4 Cards Grid with Double-Bezel and Dynamic Reticle Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              data-cursor="READ GUIDE"
              onClick={() => setActiveArticle(post)}
              className="bg-white rounded-2xl border border-stone-border overflow-hidden hover:border-crimson/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-52 sm:h-64 overflow-hidden border-b border-stone-border">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="font-mono text-xs font-bold bg-carbon text-white px-3 py-1 rounded shadow">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Meta */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-carbon-light mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-2xl text-carbon group-hover:text-crimson transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-carbon-muted line-clamp-3 leading-relaxed font-sans mb-4">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer with Button-in-Button Trailing Icon */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-stone-border/40 flex items-center justify-between text-xs font-mono min-h-[44px]">
                <span className="text-carbon font-semibold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-crimson" />
                  {post.author}
                </span>

                <span className="text-crimson font-bold flex items-center gap-1.5 group-hover:text-crimson-bright transition-colors">
                  <span>Read Article</span>
                  <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal with Fluid Backdrop */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-4 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-carbon rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto overscroll-contain p-5 sm:p-8 relative shadow-2xl animate-fadeIn my-auto text-left transform transition-all duration-300 scale-100"
          >
            {/* Sticky Modal Header with Close Button */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md pb-3 pt-1 -mt-1 flex items-center justify-between border-b border-stone-border mb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-crimson uppercase tracking-wider font-bold">
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span className="text-carbon-light">{activeArticle.publishDate}</span>
                <span>•</span>
                <span className="text-carbon-light">{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-stone-surface border border-stone-border text-carbon hover:bg-stone-card transition-colors shrink-0 ml-2"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="font-display font-extrabold text-xl sm:text-3xl text-carbon leading-tight mb-2 sm:mb-3">
              {activeArticle.title}
            </h2>
            <p className="text-xs sm:text-base font-mono text-carbon-muted mb-5 sm:mb-6">
              {activeArticle.subtitle}
            </p>

            <div className="h-48 sm:h-72 rounded-xl overflow-hidden border border-stone-border mb-6 sm:mb-8">
              <img
                src={activeArticle.coverImage}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-stone-surface border border-stone-border mb-6 sm:mb-8">
              <h4 className="font-mono text-xs uppercase font-bold text-crimson tracking-widest mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-crimson" />
                <span>Executive Summary & Actionable Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {activeArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-carbon flex items-start gap-2 leading-relaxed">
                    <span className="text-crimson font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Content Sections */}
            <div className="space-y-6 text-xs sm:text-base text-carbon-muted leading-relaxed font-sans mb-8 sm:mb-10">
              {activeArticle.contentSections.map((sec, idx) => (
                <div key={idx}>
                  <h3 className="font-display font-bold text-base sm:text-xl text-carbon mb-2">
                    {sec.heading}
                  </h3>
                  <p>{sec.body}</p>
                </div>
              ))}
            </div>

            {/* Article FAQ */}
            <div className="pt-6 border-t border-stone-border mb-8">
              <h4 className="font-mono text-xs uppercase font-bold text-carbon tracking-widest mb-4 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cobalt" />
                <span>Frequently Asked Questions Regarding This Topic</span>
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {activeArticle.faq.map((f, i) => (
                  <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-stone-surface border border-stone-border">
                    <div className="font-display font-bold text-xs sm:text-sm text-carbon mb-1">{f.q}</div>
                    <div className="font-sans text-xs sm:text-sm text-carbon-muted leading-relaxed">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-stone-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-carbon text-center sm:text-left">
                Author: <strong className="text-carbon font-bold">{activeArticle.author}</strong> ({activeArticle.authorRole})
              </div>

              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenBooking();
                }}
                className="btn-press w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-lg bg-crimson hover:bg-crimson-bright text-white font-mono font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2"
              >
                Schedule Atelier Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
