'use client';

import Galaxy from '@/components/Galaxy';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
      <Galaxy 
        mouseInteraction={true}
        mouseRepulsion={true}
        density={1}
        glowIntensity={0.2}
        saturation={0.3}
        hueShift={240}
        rotationSpeed={0.1}
        starSpeed={0.2}
        twinkleIntensity={0.2}
        repulsionStrength={0.5}
      />
    
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(5, 5, 5, 0.95) 0%, rgba(5, 5, 5, 0.8) 50%, transparent 100%)'
        }}
      />
    </div>
  );
};