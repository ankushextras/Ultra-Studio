import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowDown, MoveRight } from 'lucide-react';
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
      {/* Background Video with Slow Zoom Effect — Plays Behind Hero Buttons */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none flex items-center justify-center"
      >
        {/* Aspect Ratio 16/9 Cover Wrapper to prevent letterboxing */}
        <div className="relative w-[100vw] h-[56.25vw] min-h-full min-w-[177.78vh] overflow-hidden">
          <iframe
            loading="eager"
            title="Ultra Motions Showreel — Video Editing & Motion Graphics"
            src="https://play.gumlet.io/embed/6a9d1830f7c3f210e80b469b?autoplay=true&loop=true&mute=true&controls=false&playbutton=false&disablekb=true"
            style={{
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              pointerEvents: 'none',
            }}
            referrerPolicy="origin"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
            className="w-full h-full filter brightness-[0.92] contrast-[1.02]"
          />
        </div>
      </motion.div>

      {/* Cinematic Vignette & Dark Gradient Mask matching #000c0d — lightened for clear showreel visibility */}
      <div className="absolute inset-0 vignette-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000c0d]/80 via-transparent to-[#000c0d]/30 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      {/* Hero Central Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-0"
      >
        {/* Single Primary H1 for Homepage SEO */}
        <h1 className="sr-only">Ultra Motions — Video Editing & Motion Graphics</h1>

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
            aria-label="View Video Editing and Motion Graphics Portfolio"
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
            aria-label="Start a Project with Ultra Motions"
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
