'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Case } from '../models/cases.types';
import { ANIMATION_CONFIG } from '../models/cases.types';
import { ActionBar } from './ActionBar';

interface CaseCardProps {
  caseItem: Case;
  index: number;
  isActive: boolean;
  isFirst: boolean;
  canInteract: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  cardWidth: string;
  cardHeight: string;
  onHover: () => void;
  onLeave: () => void;
  viewProjectLabel: string;
}

export function CaseCard({
  caseItem,
  index,
  isActive,
  isFirst,
  canInteract,
  isMobile,
  isTablet,
  isDesktop,
  cardWidth,
  cardHeight,
  onHover,
  onLeave,
  viewProjectLabel,
}: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => canInteract && onHover()}
      onMouseLeave={() => canInteract && onLeave()}
      className="relative group flex flex-col h-full"
      style={{
        minHeight: cardHeight,
        width: cardWidth,
        cursor: canInteract ? 'pointer' : 'default',
      }}
      animate={{
        width: cardWidth,
      }}
      transition={{
        opacity: {
          duration: ANIMATION_CONFIG.duration.normal,
          delay: index * ANIMATION_CONFIG.stagger,
        },
        y: {
          duration: ANIMATION_CONFIG.duration.normal,
          delay: index * ANIMATION_CONFIG.stagger,
        },
        width: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: ANIMATION_CONFIG.ease.smooth,
        },
      }}
    >
      {/* Mockup Frame */}
      <MockupFrame
        caseItem={caseItem}
        isActive={isActive}
        isDesktop={isDesktop}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* Action Bar */}
      <ActionBar
        caseItem={caseItem}
        isActive={isActive}
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        cardWidth={cardWidth}
        viewProjectLabel={viewProjectLabel}
      />
    </motion.div>
  );
}

interface MockupFrameProps {
  caseItem: Case;
  isActive: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

function MockupFrame({
  caseItem,
  isActive,
  isDesktop,
  isMobile,
  isTablet,
}: MockupFrameProps) {
  return (
    <motion.div
      className="relative w-full flex-1 rounded-2xl md:rounded-3xl overflow-hidden cases-font"
      style={{
        backgroundColor: caseItem.color,
        boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.15)',
      }}
      animate={{
        filter: isActive && isDesktop ? 'brightness(1.05)' : 'brightness(1)',
      }}
      transition={{
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.out,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          padding: isMobile ? '12px 8px 0' : isTablet ? '16px 10px 0' : '20px 12px 0',
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            margin: isMobile ? '4px' : isTablet ? '12px' : '20px',
            backgroundColor: caseItem.innerColor,
            border: '0.5px solid rgba(255,255,255,0.5)',
            boxShadow:
              '-6px 0 0 0 rgba(8, 33, 50, 0.3), -5px 4px 20px 0 rgba(8, 33, 50, 0.2)',
            borderRadius: isMobile ? '12px' : isTablet ? '16px' : '20px',
          }}
        >
          <Image
            src={caseItem.image}
            alt={caseItem.name}
            fill
            className="object-cover object-top mt-8 md:mt-10 lg:mt-12"
            style={{
              paddingTop: isMobile ? '8px' : '12px',
              paddingLeft: isMobile ? '4px' : '8px',
            }}
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 320px, 400px"
            priority={true}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 2px 12px rgba(225, 225, 225, 0.5)' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
