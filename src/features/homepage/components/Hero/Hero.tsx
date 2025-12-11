'use client';

import { useRef } from 'react';
import { useHeroViewModel } from '../../viewModels/useHeroViewModel';
import { Button } from '@/components/ui/button';
import { HeroBackground } from '@/features/homepage/components/Hero/HeroBackground';
import { HeroCurve} from '@/features/homepage/components/Hero/HeroCurve';
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
      className="hero-font relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] pb-0"
    >
      
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1440px] px-4 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center">
          
          <h1 className="hero-animate mb-8 text-white text-center font-medium text-4xl md:text-6xl lg:text-[80px] leading-[1.01] tracking-[-0.09em]">
            {title}
          </h1>

          <p className="hero-animate text-white text-base font-normal text-[14.6px] leading-[24px] tracking-[-0.08px] text-center max-w-2xl mb-12">
            {subtitle}
          </p>

          <div className="hero-animate w-full flex justify-center opacity-0 mt-8">
            <div
              onClick={onCtaClick}
              className="
                group relative cursor-pointer
                w-[90%] max-w-[350px]
                h-auto min-h-[54px]
                rounded-full p-[2px]
                transition-transform duration-300 ease-out hover:scale-105
                bg-[linear-gradient(273.74deg,#FFFFFF_11.82%,#FFE100_100%)]
                hover:shadow-[0px_0px_15px_0px_rgba(242,118,15,0.3),0px_0px_30px_5px_rgba(242,118,15,0.4),0px_0px_60px_10px_rgba(242,118,15,0.2),inset_0px_0px_8px_0px_rgba(242,118,15,0.5)]
              "
            >
              <Button
                className="
                  w-full h-full rounded-full flex items-center justify-center
                  border-0 ring-0 outline-none relative overflow-hidden
                  bg-[linear-gradient(240deg,rgba(255,134,47,1)_25%,rgba(255,107,0,1)_100%)]
                  shadow-[inset_0px_1px_4px_0px_rgba(255,255,255,0.3),inset_0px_0px_10px_0px_rgba(255,255,255,0.1)]
                "
              >
                <span className="relative z-10 font-chillax font-regular text-sm min-[375px]:text-base text-white tracking-wide cursor-pointer mt-1px whitespace-nowrap">
                  {ctaText}
                </span>

                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <HeroCurve />
    </section>
  );
};