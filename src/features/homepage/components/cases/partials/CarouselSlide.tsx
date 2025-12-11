'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import GlareHover from '@/components/GlareHover';
import type { Case } from '../../../models/cases.types';

interface CarouselSlideProps {
  caseItem: Case;
  index: number;
  isActive: boolean;
  onClick: () => void;
  slideRef: (el: HTMLDivElement | null) => void;
  viewProjectText: string;
}

export function CarouselSlide({
  caseItem,
  index,
  isActive,
  onClick,
  slideRef,
  viewProjectText,
}: CarouselSlideProps) {

  return (
    <div
      ref={slideRef}
      onClick={onClick}
      className="absolute z-20 top-0 left-1/2 -translate-x-1/2 select-none cases-font"
      style={{
        width: '95%',
        height: '100%',
        transformOrigin: 'center center',
        pointerEvents: 'auto',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transformOrigin: 'center center',
        }}
        whileHover={isActive ? { scale: 1.05 } : {}}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        <GlareHover
        width="100%"
        height="100%"
        background={caseItem.color}
        borderRadius="1.5rem"
        borderColor="transparent"
        glareColor="#ffffff"
        glareOpacity={0.2}
        glareAngle={-45}
        glareSize={200}
        transitionDuration={650}
        className="relative overflow-hidden shadow-2xl"
        style={{
          boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div className="absolute inset-0 p-2.5 md:p-3.5">
          <GlareHover
            width="100%"
            height="100%"
            background={caseItem.innerColor}
            borderRadius="1.5rem"
            borderColor="rgba(255,255,255,0.5)"
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-45}
            glareSize={200}
            transitionDuration={650}
            className="group overflow-hidden relative mt-4 ml-8"
            style={{
              boxShadow:
                '-6px 0 0 0 rgba(8, 33, 50, 0.3), -5px 4px 20px 0 rgba(8, 33, 50, 0.2)',
              pointerEvents: 'auto',
            }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src={caseItem.image}
                alt={caseItem.name}
                fill
                className="object-cover object-top select-none pointer-events-none mt-8 ml-5"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 30vw, 20vw"
                priority={index < 3}
                draggable={false}
              />
            </div>

            <div
              className="absolute inset-0 pointer-events-none z-1"
              style={{ boxShadow: 'inset 0 2px 12px rgba(225, 225, 225, 0.3)' }}
            />

            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none bg-linear-to-t from-black/70 via-black/40 to-transparent"
              />
            )}

            {isActive && (
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2 z-10">
                <a
                  href={caseItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white rounded-full flex items-center overflow-hidden shadow-lg transition-all duration-300 ease-in-out group/cta w-8 h-8 md:w-9 md:h-9 sm:hover:w-auto sm:hover:pl-3 sm:hover:pr-1"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 shrink-0 sm:group-hover/cta:opacity-0 sm:group-hover/cta:scale-0 transition-all duration-200">
                    <Image
                      src="/arrow-up-right.svg"
                      alt="Arrow up right"
                      width={12}
                      height={12}
                      className="brightness-0 invert"
                      unoptimized
                    />
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 h-full opacity-0 w-0 group-hover/cta:opacity-100 group-hover/cta:w-auto transition-all duration-300 delay-100">
                    <span className="whitespace-nowrap font-medium text-[10px] md:text-xs tracking-wide text-start -ml-6 mr-2 sm:mr-1">
                      {viewProjectText}
                    </span>
                    <div className="bg-white rounded-full flex items-center justify-center shrink-0 w-0 h-0 group-hover/cta:w-6 group-hover/cta:h-6 transition-all duration-300 delay-200">
                      <Image
                        src="/arrow-right.svg"
                        alt="Arrow right"
                        width={13}
                        height={13}
                        style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(96%) saturate(1352%) hue-rotate(1deg) brightness(98%) contrast(97%)' }}
                        unoptimized
                      />
                    </div>
                  </div>
                </a>

                <div
                  className="border border-white rounded-full px-4 py-2 backdrop-blur-sm flex items-center"
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <span className="text-white font-light text-[9px] md:text-[10px] tracking-wider whitespace-nowrap uppercase">
                    {caseItem.name}
                  </span>
                </div>
              </div>
            )}
          </GlareHover>
        </div>
      </GlareHover>
      </motion.div>
    </div>
  );
}
