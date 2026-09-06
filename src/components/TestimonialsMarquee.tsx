import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Star, Quote, MessageSquare } from 'lucide-react';

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

export const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({ testimonials }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items array to create seamless infinite loop
  const marqueeList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-28 overflow-hidden z-10 border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#000c0d] rounded-full blur-[140px] pointer-events-none opacity-80" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4 border border-blue-500/20">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Client Praise</span>
        </div>
        <h2 className="font-syne font-extrabold text-4xl sm:text-5xl tracking-tight text-white">
          Trusted By <span className="font-serif-display italic font-normal text-blue-400">Industry Leaders</span>
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative flex overflow-x-hidden mask-fade"
      >
        <div
          className={`flex gap-6 w-max animate-marquee transition-all duration-300 ${
            isPaused ? '[animation-play-state:paused]' : ''
          }`}
          style={{
            animation: 'marquee 35s linear infinite',
          }}
        >
          {marqueeList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[420px] shrink-0 glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] flex flex-col justify-between space-y-6"
            >
              {/* Quote Icon & Stars */}
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-blue-400/40" />
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light italic">
                "{item.quote}"
              </p>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatarUrl}
                  alt={item.clientName}
                  className="w-12 h-12 rounded-full object-cover border border-blue-400/40 shadow-md"
                />
                <div>
                  <h4 className="font-syne font-bold text-sm text-white">{item.clientName}</h4>
                  <p className="text-xs text-slate-400">{item.clientTitle} • <span className="text-blue-400 font-semibold">{item.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Marquee Keyframe Inline Injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};
