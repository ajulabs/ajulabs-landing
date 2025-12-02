'use client';

import { useRef } from 'react';
import { useHeroViewModel } from '../../viewModels/useHeroViewModel';
import { Button } from '@/components/ui/button';
import { HeroBackground } from './HeroBackground';
import { HeroCurve} from './HeroCurve';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero = () => {
  const { title, subtitle, ctaText, onCtaClick } = useHeroViewModel();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const InicialDelay = 2.0;

    tl.fromTo('.hero-animate', {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
      stagger: 0.2,
      delay: InicialDelay
    }
  );
}, { scope: containerRef }); 

  return (
    <section 
      ref={containerRef}
      className="hero-font relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] pb-20"
    >
      
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1440px] px-4 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          
          <h1 className="hero-animate text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.1] mb-8 text-white">
            {title}
          </h1>

          <p className="hero-animate text-gray-400 text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-light">
            {subtitle}
          </p>

          <div className="hero-animate w-full flex justify-center">
            <Button
              onClick={onCtaClick}
              className="
                relative group overflow-hidden
                h-auto py-3 px-6 text-base md:py-4 md:px-10 md:text-lg
                max-w-full rounded-full font-bold text-white
                bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500
                border-0 ring-0 outline-none
                transition-all duration-300 ease-out
                hover:scale-105 hover:brightness-110
                shadow-[0_0_50px_-10px_rgba(249,115,22,0.8)]
              "
            >
              <span className="relative z-10 whitespace-normal text-center">{ctaText}</span>
            </Button>
          </div>
        </div>
      </div>
      
      <HeroCurve />
    </section>
  );
};
