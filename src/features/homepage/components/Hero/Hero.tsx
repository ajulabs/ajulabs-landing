'use client';

import { motion, Variants } from 'framer-motion';
import localFont from 'next/font/local';
import { useHeroViewModel } from '../../viewModels/useHeroViewModel';
import { Button } from '@/components/ui/button';
import { HeroBackground } from './HeroBackground';
import { HeroCurve} from './HeroCurve';

const chillax = localFont({
    src: [
        { path: '../../../../../public/fonts/OTF/Chillax-Regular.otf', weight: '400', style: 'normal' },
        { path: '../../../../../public/fonts/OTF/Chillax-Medium.otf', weight: '500', style: 'normal' },
        { path: '../../../../../public/fonts/OTF/Chillax-Semibold.otf', weight: '600', style: 'normal' },
    ],
    variable: '--font-chillax',
});

export const Hero = () => {
  const { title, subtitle, ctaText, onCtaClick } = useHeroViewModel();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section className={`${chillax.className} relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pb-20`}>
      <HeroBackground />
      
      <div className='relative z-10 w-full px-4 flex flex-col items-center'>
        <div className='w-full max-w-4xl flex flex-col items-center text-center'>
          
          <motion.h1
            custom={0.1}
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            className='text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight leading-[1.1] mb-8 text-white'
          >
            {title}
          </motion.h1>

          <motion.p
            custom={0.3}
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            className='text-gray-300 text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-light'
          >
            {subtitle}
          </motion.p>

          <motion.div
            custom={0.5}
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            className='w-full flex justify-center'
          >
            <Button
              onClick={onCtaClick}
              className='
                relative group overflow-hidden
                h-auto py-3 px-6 text-base
                md:py-4 md:px-10 md:text-lg
                max-w-full rounded-full font-light text-white
                bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500
                border-0 ring-0 outline-none
                transition-all duration-300 ease-out
                hover:scale-105 hover:brightness-110
                shadow-[0_0_50px_-10px_rgba(249,115,22,0.8)]
              '
            >
              <span className='relative z-10 whitespace-normal text-center'>{ctaText}</span>
              <div className='absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100' />
            </Button>
          </motion.div>
        </div>
      </div>

    <HeroCurve />
    </section>
  );
};