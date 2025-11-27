'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfigHeadline = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfigHeadline);
  const y = useSpring(mouseY, springConfigHeadline);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!headlineRef.current) return;
    const rect = headlineRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeaveHeadline = () => {
    if (!headlineRef.current) return;
    const rect = headlineRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  return (
    <section id="solutions" className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-24 services-font">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 items-start mb-20 lg:mb-24"
        >
          {/* Section Title */}
          <div className="flex items-center gap-3 pt-2 mb-6 lg:mb-0">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            <h2 className="text-gray-800 text-sm font-medium tracking-wider uppercase">
              {translations.sectionTitle}
            </h2>
          </div>

          {/* Headline */}
          <div className="text-right">
            <motion.h3
              ref={headlineRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeaveHeadline}
              className="text-2xl md:text-2xl xl:text-3xl font-medium leading-tight mb-2 md:mb-4 relative cursor-default inline-block"
            >
              <span className="relative z-10 text-gray-800 select-none pointer-events-none">
                {translations.headline.line1}
                <br />
                {translations.headline.line2}
              </span>
              <motion.span
                className="absolute inset-0 select-none pointer-events-none ease-in-out duration-300"
                style={{
                  background: useTransform(
                    [x, y],
                    ([xVal, yVal]) => {
                      const gradientSize = 50;
                      return `radial-gradient(circle ${gradientSize}px at ${xVal}px ${yVal}px, rgba(249, 115, 22, 0.9) 0%, rgba(249, 115, 22, 0.5) 35%, transparent 65%)`;
                    }
                  ),
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {translations.headline.line1}
                <br />
                {translations.headline.line2}
              </motion.span>
            </motion.h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              {translations.subtitle.line3}
              <br />
              {translations.subtitle.line4}
            </p>
          </div>
        </motion.div>

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
                className="relative hover:border-t hover:border-gray-200 ease-in-out duration-300"
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
                                {service.description}
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