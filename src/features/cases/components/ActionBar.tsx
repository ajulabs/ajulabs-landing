'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import { ANIMATION_CONFIG } from '../models/cases.types';
import type { Case } from '../models/cases.types';

interface ActionBarProps {
  caseItem: Case;
  isActive: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  cardWidth: string;
  viewProjectLabel: string;
}

export function ActionBar({
  caseItem,
  isActive,
  isMobile,
  isTablet,
  isDesktop,
  cardWidth,
  viewProjectLabel,
}: ActionBarProps) {
  const sizes = useMemo(() => {
    const width = parseInt(cardWidth, 10) || 300;

    if (isMobile) {
      return {
        button: 'h-10 min-w-[40px]',
        icon: 14,
        iconContainer: 'w-7 h-7',
        text: 'text-xs',
        padding: { left: '12px', right: '4px' },
        namePadding: 'px-3',
        buttonFlexBasis: undefined,
        maxNameWidth: undefined,
      };
    }

    if (isTablet) {
      return {
        button: 'h-11 min-w-[44px]',
        icon: 14,
        iconContainer: 'w-8 h-8',
        text: 'text-sm',
        padding: { left: '16px', right: '5px' },
        namePadding: 'px-4',
        buttonFlexBasis: undefined,
        maxNameWidth: undefined,
      };
    }

    const isProblematicRange = width >= 300 && width < 420;

    if (width < 200) {
      return {
        button: 'h-10 min-w-[40px]',
        icon: 12,
        iconContainer: 'w-7 h-7',
        text: 'text-xs',
        padding: { left: '12px', right: '4px' },
        namePadding: 'px-2',
        buttonFlexBasis: undefined,
        maxNameWidth: undefined,
      };
    }

    if (width < 280) {
      return {
        button: 'h-10 min-w-[42px]',
        icon: 13,
        iconContainer: 'w-7 h-7',
        text: 'text-xs',
        padding: { left: '14px', right: '4px' },
        namePadding: 'px-3',
        buttonFlexBasis: undefined,
        maxNameWidth: undefined,
      };
    }

    if (width < 350) {
      return {
        button: 'h-11 min-w-[44px]',
        icon: 14,
        iconContainer: 'w-8 h-8',
        text: 'text-sm',
        padding: { left: '18px', right: '5px' },
        namePadding: 'px-4',
        buttonFlexBasis: undefined,
        maxNameWidth: undefined,
      };
    }
    if (isProblematicRange) {
      return {
        button: 'h-11 min-w-[48px]',
        icon: 14,
        iconContainer: 'w-8 h-8',
        text: 'text-xs',
        padding: { left: '16px', right: '16px' },
        namePadding: 'px-3',
        buttonFlexBasis: undefined,
        maxNameWidth: '120px',
      };
    }

    if (width < 450) {
      return {
        button: 'h-12 min-w-[48px]',
        icon: 16,
        iconContainer: 'w-9 h-9',
        text: 'text-base',
        padding: { left: '24px', right: '6px' },
        namePadding: 'px-6',
        buttonFlexBasis: undefined,
        maxNameWidth: undefined,
      };
    }

    return {
      button: 'h-12 min-w-[48px]',
      icon: 18,
      iconContainer: 'w-10 h-10',
      text: 'text-base',
      padding: { left: '28px', right: '8px' },
      namePadding: 'px-6',
      buttonFlexBasis: undefined,
      maxNameWidth: undefined,
    };
  }, [cardWidth, isMobile, isTablet]);

  return (
    <div className={`relative w-full mt-4 md:mt-5 flex items-center gap-2 md:gap-3 cases-font`}>
      {/* CTA Button */}
      <motion.a
        href={caseItem.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-orange-500 text-white rounded-full flex items-center overflow-hidden ${sizes.button} ${
          isActive ? 'justify-between' : 'justify-center'
        }`}
        animate={{
          flex: isActive ? '1 1 auto' : '0 0 auto',
          paddingLeft: isActive ? sizes.padding.left : '0px',
          paddingRight: isActive ? sizes.padding.right : '0px',
        }}
        transition={{
          duration: ANIMATION_CONFIG.duration.normal,
          ease: ANIMATION_CONFIG.ease.smooth,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.span
              key="cta-label"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: 1,
                width: 'auto',
              }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: ANIMATION_CONFIG.duration.fast }}
              className={`whitespace-nowrap font-medium ${sizes.text}`}
            >
              {viewProjectLabel}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.div
          layout
          className={`flex items-center justify-center rounded-full shrink-0 transition-colors ${
            isActive ? `${sizes.iconContainer} bg-white` : 'w-full h-full'
          }`}
        >
          <Image
            src={isActive ? '/arrow-right.svg' : '/arrow-up-right.svg'}
            alt=""
            width={sizes.icon}
            height={sizes.icon}
            aria-hidden="true"
          />
        </motion.div>
      </motion.a>

      {/* Name Badge */}
      <motion.div
        layout
        className={`bg-white border border-gray-200 rounded-full text-gray-800 font-medium whitespace-nowrap overflow-hidden flex items-center justify-center ${sizes.button} ${sizes.namePadding} ${sizes.text} ${
          isActive ? 'ml-auto' : ''
        }`}
        style={{
          maxWidth: isActive ? sizes.maxNameWidth : undefined,
        }}
        animate={{
          flex: isActive ? '0 0 auto' : '1 1 auto',
        }}
        transition={{
          duration: ANIMATION_CONFIG.duration.normal,
          ease: ANIMATION_CONFIG.ease.smooth,
        }}
      >
        <span className="truncate">{caseItem.name}</span>
      </motion.div>
    </div>
  );
}
