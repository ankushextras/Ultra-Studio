import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-hover');

      setIsHovered(isInteractive);
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Center dark black dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#05050a] border border-slate-700/80 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(0,0,0,0.9)]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Smooth outer dark glass ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#000c0d]/80 pointer-events-none z-[9998] bg-[#000c0d]/60 backdrop-blur-[2px]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 12, 13, 0.9)',
          boxShadow: isHovered
            ? '0 0 25px rgba(255, 255, 255, 0.15), 0 0 15px rgba(0, 12, 13, 0.9)'
            : '0 0 15px rgba(0, 0, 0, 0.8)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
};
