'use client';

import { useEffect, useRef } from 'react';
import LetterGlitch from '@/features/homepage/components/Hero/LetterGlitch';

export const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandColors = ['#F2760F', '#229952', '#17258E'];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMask = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      container.style.setProperty('--x', `${x}px`);
      container.style.setProperty('--y', `${y}px`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateMask(e.clientX, e.clientY);
      container.style.setProperty('--size', '120px');
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateMask(touch.clientX, touch.clientY);
        container.style.setProperty('--size', '60px');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);

    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 bg-[#050505] overflow-hidden"
      style={{
        '--x': '-1000px',
        '--y': '-1000px',
        '--size': '120px',
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: 'radial-gradient(circle var(--size) at var(--x) var(--y), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle var(--size) at var(--x) var(--y), black 0%, transparent 100%)',
        }}
      >
        <LetterGlitch
          glitchColors={brandColors}
          glitchSpeed={10}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
      </div>
    </div>
  );
};