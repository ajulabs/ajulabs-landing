'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useServicesViewModel } from '../viewModels/useSolutionsViewModel';
import arrowUpRightIcon from '../../../../public/arrow-up-right.svg';
import Image from 'next/image';

export function ServicesView() {
  const {
    services,
    expandedService,
    handleServiceHover,
    handleServiceLeave,
    translations,
  } = useServicesViewModel();

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const totalChars = translations.headline.line1.length + translations.headline.line2.length;
    letterRefs.current = new Array(totalChars).fill(null);
    
    const timer = setTimeout(() => {
      if (headlineRef.current) {
        const spans = headlineRef.current.querySelectorAll('span');
        spans.forEach((span, idx) => {
          if (idx < letterRefs.current.length) {
            letterRefs.current[idx] = span as HTMLSpanElement;
          }
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [translations.headline]);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!headlineRef.current) return;

    const hasLetters = letterRefs.current.some((ref) => ref !== null);
    if (!hasLetters) {
      const spans = headlineRef.current.querySelectorAll('span');
      spans.forEach((span, idx) => {
        if (idx < letterRefs.current.length) {
          letterRefs.current[idx] = span as HTMLSpanElement;
        }
      });
    }

    const rect = headlineRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const threshold = 80;

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const letterRect = letterRef.getBoundingClientRect();
      const letterX = letterRect.left + letterRect.width / 2 - rect.left;
      const letterY = letterRect.top + letterRect.height / 2 - rect.top;

      const distance = Math.sqrt(
        Math.pow(mouseX - letterX, 2) + Math.pow(mouseY - letterY, 2)
      );

      if (distance < threshold) {
        const intensity = 1 - distance / threshold;
        gsap.to(letterRef, {
          color: `rgb(${Math.round(31 + (249 - 31) * intensity)}, ${Math.round(41 + (115 - 41) * intensity)}, ${Math.round(55 + (22 - 55) * intensity)})`,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(letterRef, {
          color: '#1f2937',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });
  };

  const handleMouseLeave = () => {
    letterRefs.current.forEach((letterRef) => {
      if (!letterRef) return;
      gsap.to(letterRef, {
        color: '#1f2937',
        duration: 0.6,
        ease: 'power2.out',
      });
    });
  };

  return (
    <section id="solutions" className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-24 services-font">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start mb-20 lg:mb-24">
          <div className="flex items-center gap-3 pt-2 mb-6 lg:mb-0">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            <h2 className="text-gray-800 text-sm font-medium tracking-wider uppercase">
              {translations.sectionTitle}
            </h2>
          </div>

          <div className="text-right" style={{ position: 'relative', zIndex: 1 }}>
            <h3
              ref={headlineRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="text-2xl md:text-2xl xl:text-3xl font-medium leading-tight mb-2 md:mb-4 relative cursor-default inline-block"
              style={{ pointerEvents: 'auto', zIndex: 2 }}
            >
              {translations.headline.line1.split('').map((char, index) => (
                <span
                  key={`line1-${index}`}
                  ref={(el) => {
                    letterRefs.current[index] = el;
                  }}
                  className="inline-block"
                  style={{ color: '#1f2937', pointerEvents: 'none' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
              <br />
              {/* Second line */}
              {translations.headline.line2.split('').map((char, index) => (
                <span
                  key={`line2-${index}`}
                  ref={(el) => {
                    letterRefs.current[translations.headline.line1.length + index] = el;
                  }}
                  className="inline-block"
                  style={{ color: '#1f2937', pointerEvents: 'none' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              {translations.subtitle.line1}
              <br />
              {translations.subtitle.line2}
            </p>
          </div>
        </div>

        {/* Services List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-0"
        >
          {services.map((service, index) => {
            const isExpanded = expandedService === service.id;
            
            const springConfig = {
              type: 'spring' as const,
              stiffness: 104,
              damping: 17.4,
              mass: 1,
            };

            return (
              <motion.div
                key={service.id}
                layout
                onMouseEnter={() => handleServiceHover(service.id)}
                onMouseLeave={handleServiceLeave}
                className="relative hover:border-t hover:border-b hover:border-gray-200 ease-in-out duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-[3rem_1fr_auto] gap-y-2 lg:gap-y-0 lg:grid-cols-[4rem_28rem_1fr_auto] items-start py-15 lg:py-15 sm:py-4 group">
                  
                  <motion.div
                    layout
                    className="text-2xl font-regular shrink-0 order-1"
                    animate={{ 
                      color: isExpanded ? '#f97316' : '#1f2937',
                      y: isExpanded ? [20, 0] : 0,
                    }}
                    transition={springConfig}
                  >
                    {service.number}
                  </motion.div>

                  <motion.div
                    layout
                    className="text-2xl xl:text-md font-regular shrink-0 lg:ml-24 text-start sm:justify-center order-2"
                    animate={{ 
                      color: isExpanded ? '#f97316' : '#1f2937',
                      y: isExpanded ? [20, 0] : 0,
                    }}
                    transition={springConfig}
                  >
                    {service.title}
                  </motion.div>

                  <div className="flex items-start px-15 pt-2 order-4 col-span-3 lg:col-span-1 lg:order-3 w-full">
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }} 
                            exit={{ opacity: 0, y: 10, height: 0 }}
                            transition={{ ...springConfig, duration: 0.3 }}
                            className="w-full"
                        >
                            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mt-2 lg:mt-0 lg:pl-0"> 
                              {service.description.line1}
                              <br />
                              {service.description.line2}
                            </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    layout
                    className="w-6 h-6 lg:w-8 lg:h-8 mt-1 rounded-full flex items-center justify-center shrink-0 justify-self-end order-3 lg:order-4"
                    animate={{ 
                        backgroundColor: isExpanded ? '#f97316' : '#1f2937',
                        y: isExpanded ? [20, 0] : 0,
                    }}
                    transition={springConfig}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image src={arrowUpRightIcon.src} alt="Arrow Up Right" width={15} height={15} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}