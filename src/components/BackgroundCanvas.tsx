import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      time += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Moving animated linear/radial gradient from pure black to slightly darkest navy blue at bottom
      const gradient = ctx.createLinearGradient(
        0,
        0,
        Math.sin(time) * 100,
        height
      );

      gradient.addColorStop(0, '#030305'); // Deep pitch black top
      gradient.addColorStop(0.55, '#05060b'); // Ultra dark transition
      gradient.addColorStop(1, '#090f20'); // Slightly darkest navy blue from bottom

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle dynamic bottom ambient glow blob shifting slowly
      const bottomGlowX = width * 0.5 + Math.sin(time * 0.8) * (width * 0.25);
      const bottomGlowY = height + Math.cos(time * 0.5) * 50;

      const radialGlow = ctx.createRadialGradient(
        bottomGlowX,
        bottomGlowY,
        20,
        bottomGlowX,
        bottomGlowY,
        Math.max(width, height) * 0.65
      );
      radialGlow.addColorStop(0, 'rgba(10, 22, 50, 0.45)');
      radialGlow.addColorStop(0.5, 'rgba(6, 12, 28, 0.2)');
      radialGlow.addColorStop(1, 'rgba(3, 3, 5, 0)');

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving Canvas Gradient Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      {/* Soft noise texture overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-40" />
    </div>
  );
};
