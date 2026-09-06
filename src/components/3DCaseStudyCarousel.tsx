import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

// Format Gumlet embed URL for seamless, muted background carousel loop with hidden seek bar and controls
const getCarouselEmbedUrl = (rawUrl: string): string => {
  if (!rawUrl) return '';
  const separator = rawUrl.includes('?') ? '&' : '?';
  return `${rawUrl}${separator}autoplay=true&loop=true&muted=true&background=true&disable_player_controls=true&disable_seek_bar=true&controls=false`;
};

export const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({
  projects,
  onSelectProject,
}) => {
  // 6 case studies for the interactive reel
  const reelProjects = projects.slice(0, 6);
  const total = reelProjects.length; // 6 videos (index 0 to 5)
  const SCROLLS_PER_STEP = 3;
  const TOTAL_SCROLLS = total * SCROLLS_PER_STEP; // 6 * 3 = 18 scrolls total before scrolling to FAQ

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollCountRef = useRef(0);
  const lastWheelTimeRef = useRef(0);
  const isAnimatingToFAQRef = useRef(false);

  // Smooth scroll animation using requestAnimationFrame for 60fps+ fluid transition
  const smoothScrollToTarget = (targetY: number, duration = 950) => {
    isAnimatingToFAQRef.current = true;
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeOutQuart(progress);

      window.scrollTo(0, startY + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        isAnimatingToFAQRef.current = false;
      }
    };

    requestAnimationFrame(step);
  };

  // Wheel interception: exactly 6 scrolls per video, pins ONLY when Our Work is fully centered on screen
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If currently executing smooth scroll animation to FAQ, prevent interruption
      if (isAnimatingToFAQRef.current) {
        if (e.cancelable) e.preventDefault();
        return;
      }

      const el = containerRef.current;
      if (!el) return;

      if (Math.abs(e.deltaY) < 4) return;

      const rect = el.getBoundingClientRect();
      const sectionCenter = (rect.top + rect.bottom) / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

      // Section must be truly centered on the user's screen (not half in hero / half in faq)
      const isFullyCentered = distanceFromCenter <= 70;

      if (!isFullyCentered) return;

      const now = performance.now();
      // Fast notch throttle for precise tick counting and maximum FPS response (65ms)
      if (now - lastWheelTimeRef.current < 65) {
        if (
          e.cancelable &&
          (scrollCountRef.current < TOTAL_SCROLLS || (e.deltaY < 0 && scrollCountRef.current > 0))
        ) {
          e.preventDefault();
        }
        return;
      }
      lastWheelTimeRef.current = now;

      if (e.deltaY > 0) {
        // Scrolling DOWN
        if (scrollCountRef.current < TOTAL_SCROLLS) {
          e.preventDefault();
          scrollCountRef.current += 1;
          const currentCount = scrollCountRef.current;

          // 0-5: vid 0, 6-11: vid 1, 12-17: vid 2, 18-23: vid 3, 24-29: vid 4
          const newIdx = Math.min(total - 1, Math.floor(currentCount / SCROLLS_PER_STEP));
          setActiveIndex(newIdx);

          // Exactly after 6 scrolls on the last video (count = 30), initiate fluid smooth scroll animation to FAQ
          if (currentCount >= TOTAL_SCROLLS) {
            const faqEl = document.getElementById('faq');
            if (faqEl) {
              const targetTop = faqEl.getBoundingClientRect().top + window.scrollY - 20;
              smoothScrollToTarget(targetTop, 900);
            }
          }
        }
      } else if (e.deltaY < 0) {
        // Scrolling UP
        if (scrollCountRef.current > 0) {
          e.preventDefault();
          scrollCountRef.current = Math.max(0, scrollCountRef.current - 1);
          const currentCount = scrollCountRef.current;

          const newIdx = Math.min(total - 1, Math.floor(currentCount / SCROLLS_PER_STEP));
          setActiveIndex(newIdx);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [total, TOTAL_SCROLLS]);

  // Touch gesture support for mobile devices with high-fps response
  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimatingToFAQRef.current) {
        if (e.cancelable) e.preventDefault();
        return;
      }

      const el = containerRef.current;
      if (!el) return;

      const deltaY = startY - e.touches[0].clientY;
      if (Math.abs(deltaY) < 14) return;

      const rect = el.getBoundingClientRect();
      const sectionCenter = (rect.top + rect.bottom) / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

      const isFullyCentered = distanceFromCenter <= 70;

      if (!isFullyCentered) return;

      const now = performance.now();
      if (now - lastWheelTimeRef.current < 75) return;
      lastWheelTimeRef.current = now;

      if (deltaY > 0 && scrollCountRef.current < TOTAL_SCROLLS) {
        if (e.cancelable) e.preventDefault();
        scrollCountRef.current = Math.min(TOTAL_SCROLLS, scrollCountRef.current + 1);
        const currentCount = scrollCountRef.current;
        const newIdx = Math.min(total - 1, Math.floor(currentCount / SCROLLS_PER_STEP));
        setActiveIndex(newIdx);

        if (currentCount >= TOTAL_SCROLLS) {
          const faqEl = document.getElementById('faq');
          if (faqEl) {
            const targetTop = faqEl.getBoundingClientRect().top + window.scrollY - 20;
            smoothScrollToTarget(targetTop, 900);
          }
        }
      } else if (deltaY < 0 && scrollCountRef.current > 0) {
        if (e.cancelable) e.preventDefault();
        scrollCountRef.current = Math.max(0, scrollCountRef.current - 1);
        const currentCount = scrollCountRef.current;
        const newIdx = Math.min(total - 1, Math.floor(currentCount / SCROLLS_PER_STEP));
        setActiveIndex(newIdx);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [total, TOTAL_SCROLLS]);

  // Drag interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = e.clientX - dragStartX.current;
    if (diff < -40 && activeIndex < total - 1) {
      const nextIdx = activeIndex + 1;
      setActiveIndex(nextIdx);
      scrollCountRef.current = nextIdx * SCROLLS_PER_STEP;
    }
    if (diff > 40 && activeIndex > 0) {
      const prevIdx = activeIndex - 1;
      setActiveIndex(prevIdx);
      scrollCountRef.current = prevIdx * SCROLLS_PER_STEP;
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && activeIndex < total - 1) {
        const nextIdx = activeIndex + 1;
        setActiveIndex(nextIdx);
        scrollCountRef.current = nextIdx * SCROLLS_PER_STEP;
      }
      if (e.key === 'ArrowLeft' && activeIndex > 0) {
        const prevIdx = activeIndex - 1;
        setActiveIndex(prevIdx);
        scrollCountRef.current = prevIdx * SCROLLS_PER_STEP;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, total]);

  return (
    <section
      ref={containerRef}
      id="case-studies"
      aria-label="Selected Work & Case Studies"
      className="relative py-16 md:py-24 overflow-hidden bg-transparent z-10 select-none w-full"
    >
      {/* Sitelink Navigation Anchors */}
      <div id="work" className="sr-only" tabIndex={-1} />
      <div id="motion-graphics" className="sr-only" tabIndex={-1} />
      <div id="video-editing" className="sr-only" tabIndex={-1} />
      <div id="saas" className="sr-only" tabIndex={-1} />

      {/* Semantic Headings for Search Engines & Assistive Tech */}
      <div className="sr-only">
        <h2>Video Editing</h2>
        <h2>Motion Graphics</h2>
        <h2>SaaS Animation</h2>
      </div>

      {/* Seamless Gaussian Blur & Atmospheric Blend Layer (No hard solid edges) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ambient gaussian glow matching canvas background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] max-w-[1600px] h-[750px] bg-gradient-to-r from-[#000c0d]/50 via-[#000c0d]/30 to-transparent rounded-full blur-[160px]" />
        {/* Gaussian-feathered soft edge masks */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-transparent via-transparent to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Header — Top Left Corner Garamond */}
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20 text-left pt-2 pb-6 flex items-center justify-between">
        <h2 className="font-garamond text-4xl sm:text-5xl lg:text-6xl text-white font-normal italic tracking-tight">
          Selected Work
        </h2>

        {/* Minimal Subtle Scroll Step Dots Indicator */}
        <div
          role="tablist"
          aria-label="Case Study Selection Dots"
          className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
        >
          {reelProjects.map((p, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Jump to project ${i + 1}: ${p.title}`}
              onClick={() => {
                setActiveIndex(i);
                scrollCountRef.current = i * SCROLLS_PER_STEP;
              }}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeIndex === i ? 'w-7 bg-white' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Expanded Arch Shape Container for Full Desktop Screen Usage */}
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="relative w-full max-w-[1600px] mx-auto h-[500px] sm:h-[600px] md:h-[660px] lg:h-[720px] xl:h-[760px] flex items-center justify-center cursor-grab active:cursor-grabbing px-4"
      >
        {/* Arch videos mapping — Non-wrapping linear offset */}
        {reelProjects.map((project, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);

          // Generous horizontal spacing across widescreen desktops with minimal overlap
          const xFactor =
            typeof window !== 'undefined'
              ? window.innerWidth < 640
                ? 220
                : window.innerWidth < 1024
                ? 380
                : window.innerWidth < 1440
                ? 480
                : 540
              : 480;
          const translateX = offset * xFactor;

          // Gentle crown arch curve
          const translateY = offset * offset * 22 - 20;

          // Subtle 3D rotation along arch
          const rotateZ = offset * 3.5;

          // All videos maintain 100% original scale (no shrinkage when at the back)
          const scale = 1;

          // Full opacity for visible video cards
          const opacity = absOffset > 2 ? 0 : 1;

          return (
            <motion.div
              key={project.id}
              onClick={() => {
                if (isActive) {
                  onSelectProject(project);
                } else {
                  setActiveIndex(index);
                  scrollCountRef.current = index * SCROLLS_PER_STEP;
                }
              }}
              animate={{
                x: translateX,
                y: translateY,
                rotate: rotateZ,
                scale: scale,
                opacity: opacity,
              }}
              /* Fast, snappy spring transition with zero easing delay */
              transition={{
                type: 'spring',
                stiffness: 420,
                damping: 32,
                mass: 0.45,
              }}
              style={{
                zIndex: isActive ? 40 : 20 - absOffset * 5,
                pointerEvents: absOffset > 2 ? 'none' : 'auto',
                willChange: 'transform, opacity',
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
              className={`absolute w-[290px] sm:w-[440px] md:w-[560px] lg:w-[680px] xl:w-[740px] aspect-video rounded-xl overflow-hidden glass-card cursor-pointer border ${
                isActive
                  ? 'border-white/50 shadow-[0_25px_70px_rgba(255,255,255,0.18)] ring-1 ring-white/40'
                  : 'border-white/10 hover:border-white/30 shadow-xl'
              }`}
            >
              {/* Semantic Project Metadata for Search Indexing */}
              <div className="sr-only">
                <h3>{project.title}</h3>
                <p>{project.category} — {project.shortDescription}</p>
              </div>

              {/* Clean Video / Embed Element */}
              {project.embedUrl ? (
                <div
                  style={{ position: 'relative', aspectRatio: '16/9' }}
                  className="w-full h-full bg-black overflow-hidden"
                >
                  <iframe
                    loading="lazy"
                    title={`${project.title} — ${project.category} by Ultra Motions`}
                    src={getCarouselEmbedUrl(project.embedUrl)}
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                    }}
                    referrerPolicy="origin"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
                  />
                  {/* Invisible overlay captures mouse interactions so drag and click behavior on the arch carousel remain perfectly smooth */}
                  <div
                    onContextMenu={(e) => e.preventDefault()}
                    className="absolute inset-0 z-20 bg-transparent cursor-pointer select-none"
                    aria-label={`Select ${project.title} — ${project.category}`}
                  />
                </div>
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                  poster={project.posterUrl}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102 pointer-events-none select-none"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              )}

              {/* Quick Case Study Details link when active */}
              {isActive && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  aria-label={`View Case Study Details for ${project.title}`}
                  className="absolute top-3 right-3 z-30 px-3 py-1 rounded-full text-xs font-medium bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg cursor-pointer"
                  title="View Case Study Details"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};


