import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowDown, Sparkles, MoveRight } from 'lucide-react';
import { SectionId } from '../types';

interface HeroSectionProps {
  onNavigate: (sectionId: SectionId) => void;
  isMuted: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, isMuted }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax zoom & fade scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Background Video with Slow Zoom Effect */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1] scale-105"
          poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-and-dots-mesh-41551-large.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Cinematic Vignette & Dark Gradient Mask */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

      {/* Hero Central Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-0"
      >
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-white/20 text-slate-200 text-xs font-semibold tracking-widest uppercase mb-8 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: '6s' }} />
          <span>Ultra Studio • Motion Graphics</span>
        </motion.div>

        {/* CTA Glass Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Primary View Cases Glass Button */}
          <button
            onClick={() => onNavigate('case-studies')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-2xl"
          >
            <span>See Our Works</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 transition-all">
              <MoveRight className="w-4 h-4 text-white" />
            </div>
          </button>

          {/* Secondary Start a Project Glass Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-slate-200 bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-xl"
          >
            <span>Start a Project</span>
            <div className="w-2 h-2 rounded-full bg-white/80 group-hover:scale-150 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
