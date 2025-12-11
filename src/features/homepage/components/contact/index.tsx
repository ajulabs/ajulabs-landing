'use client';

import { motion } from 'framer-motion';
import { useContactViewModel } from '../../viewModels/useContactViewModel';

export function ContactView() {
  const { translations, handleCtaClick } = useContactViewModel();

  return (
    <section
      id="contact"
      className="relative w-full bg-white py-18 px-6 pb-24 md:px-12 lg:px-24 contact-font"
    >
      <div className="max-w-4xl mx-auto text-center">        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
             <div className="flex items-start justify-center sm:items-start md:justify-center sm:flex sm:justify-start ">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse mr-1.5 sm:mr-2 ml-1.5 mt-1.5" />
            <span className="text-gray-600 text-[10px] sm:text-xs font-regular uppercase">
              {translations.sectionTitle}
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-regular text-gray-800 leading-tight mb-6"
        >
          {translations.headline.line1}
          <br />
          {translations.headline.line2}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-sm leading-relaxed mb-9 max-w-2xl mx-auto"
        >
          {translations.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={handleCtaClick}
            className="group relative px-10 py-4 sm:px-14 sm:py-4 md:px-16 text-white font-regular text-xs sm:text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-105 rounded-[36px] 
            bg-[linear-gradient(180deg,#FF862F_5%,#FF862F_25%,#FF862F_75%,#FF6B00_100%)]
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-5px_2px_rgba(0,0,0,0.16),inset_0_0_8px_rgba(255,255,255,0.4)]
             
            hover:shadow-[0_2px_14px_rgba(242,118,15,0.30),0_4px_16px_rgba(242,118,15,0.20),0_8px_18px_rgba(242,118,15,0.20),0_9px_20px_rgba(242,118,15,0.20),0_10px_22px_rgba(242,118,15,0.20),0_12px_38px_rgba(242,118,15,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-5px_2px_rgba(0,0,0,0.16),inset_0_0_8px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            <motion.span
              className="absolute inset-0 rounded-[36px] bg-linear-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
            />
            
            <span className="relative z-10 font-medium">{translations.ctaButton}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}