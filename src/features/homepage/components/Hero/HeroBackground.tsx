'use client';

import { useEffect, useRef } from 'react';

export const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();

      containerRef.current.style.setProperty('--x', `${e.clientX - left}px`);
      containerRef.current.style.setProperty('--y', `${e.clientY - top}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden bg-[#050505]"
      style={{
        '--x': '-500px',
        '--y': '-500px',
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-background.png')`,
          maskImage: `radial-gradient(circle 150px at var(--x) var(--y), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at var(--x) var(--y), black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
};