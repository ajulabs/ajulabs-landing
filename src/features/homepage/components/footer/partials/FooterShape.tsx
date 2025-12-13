'use client';

import React from 'react';
import Image from 'next/image';
import Aurora from './Aurora';
import { motion } from 'framer-motion';

export const FooterShape = () => {
  return (
    <motion.div 
      className="relative w-full pt-[80px] md:pt-[220px] pointer-events-none"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ 
        duration: 1.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      
      <div className="absolute top-[-50px] left-0 w-full h-[calc(100%+50px)] z-0">
        <Aurora 
          speed={2.0}
          blend={1.5}
          amplitude={1.3} 
        />
      </div>

      <div className="relative w-full z-20"> 
        
        <div className="
            absolute inset-0 z-10 mix-blend-screen pointer-events-none top-0 lg:top-5">
           <Image 
             src="/footer-glass.png" 
             alt="Glass"
             fill
             className="object-fill"
             priority
           />
        </div>

        <div className="relative z-20 w-full h-auto pointer-events-none">
          <Image
            src="/footer-white.png"
            alt="Curve"
            width={1920}
            height={300}
            className="w-full h-auto block"
            priority
          />
        </div>
        
      </div>

    </motion.div>
  );
};