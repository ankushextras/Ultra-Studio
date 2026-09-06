import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  isMuted?: boolean;
  onToggleMute?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setIsVisible(false); // scrolling down
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Track cursor position for glossy light reflection
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'case-studies', label: 'WORK' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-5 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
          >
            {/* Apple VisionOS / ULTRA MOTION Floating Glass Navigation Pill */}
            <div
              onMouseMove={handleMouseMove}
              className="pointer-events-auto relative flex items-center justify-between gap-2 md:gap-6 px-3 py-2 rounded-full glass-nav border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)] max-w-4xl w-full md:w-auto"
            >
              {/* Glossy Dynamic Specular Reflection */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none opacity-30 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.2), transparent 70%)`,
                }}
              />

              {/* Logo / Brand Mark */}
              <button
                onClick={() => onNavigate('home')}
                aria-label="Ultra Motions Home"
                className="relative flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <img
                  src="/favicon.png"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/tT3Lcbqv/ANKUSH-MOTION-LOGO.png';
                  }}
                  alt="Ultra Motions — Video Editing & Motion Graphics Studio Logo"
                  className="w-10 h-10 rounded-full object-cover filter drop-shadow group-hover:scale-105 transition-transform shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span className="font-syne font-extrabold tracking-widest text-xs uppercase text-white">
                  ULTRA MOTION
                </span>
              </button>

              {/* Desktop Nav Items */}
              <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      aria-label={item.label === 'WORK' ? 'View Selected Work' : item.label}
                      className={`relative px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Controls & Call to Action */}
              <div className="flex items-center gap-2">
                {/* Glass CTA button */}
                <button
                  onClick={() => onNavigate('contact')}
                  aria-label="Start a Project with Ultra Motions"
                  className="relative group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/20 hover:border-white/40 cursor-pointer"
                >
                  <span>Start Project</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-ping" />
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                  className="md:hidden p-2 rounded-full text-white bg-white/10 border border-white/15"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-4 right-4 z-40 p-6 rounded-3xl glass-card border border-white/20 backdrop-blur-3xl md:hidden flex flex-col gap-4 shadow-2xl"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  aria-label={item.label === 'WORK' ? 'View Selected Work' : item.label}
                  className={`py-3 px-4 rounded-xl text-left font-syne text-lg tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-600/30 text-white font-bold border border-blue-500/40'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              aria-label="Start a Project with Ultra Motions"
              className="mt-2 py-3 px-4 rounded-xl text-center font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg cursor-pointer"
            >
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
