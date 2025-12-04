import { useMemo } from 'react';
import type { Breakpoint, ButtonSizeConfig } from '../models/cases.types';

const SIZE_PRESETS: Record<string, ButtonSizeConfig> = {
  xs: { height: 'h-10', width: '36px', widthClass: 'w-10', paddingL: '12px', paddingR: '4px', text: 'text-xs', icon: 12, iconContainer: 'w-7 h-7', namePadding: 'px-2' },
  sm: { height: 'h-10', width: '38px', widthClass: 'w-10', paddingL: '14px', paddingR: '4px', text: 'text-xs', icon: 12, iconContainer: 'w-7 h-7', namePadding: 'px-3' },
  md: { height: 'h-10', width: '40px', widthClass: 'w-10', paddingL: '16px', paddingR: '4px', text: 'text-xs', icon: 13, iconContainer: 'w-7 h-7', namePadding: 'px-3' },
  lg: { height: 'h-11', width: '44px', widthClass: 'w-11', paddingL: '20px', paddingR: '5px', text: 'text-sm', icon: 14, iconContainer: 'w-8 h-8', namePadding: 'px-4' },
  xl: { height: 'h-12', width: '48px', widthClass: 'w-12', paddingL: '24px', paddingR: '6px', text: 'text-base', icon: 16, iconContainer: 'w-9 h-9', namePadding: 'px-6' },
};

export function useButtonSize(
  breakpoint: Breakpoint,
  windowWidth: number,
  cardWidth: string
): ButtonSizeConfig {
  return useMemo(() => {
    if (breakpoint === 'xs') return SIZE_PRESETS.xs;
    if (breakpoint === 'xl') return SIZE_PRESETS.xl;

    const cardWidthPx = parseCardWidth(cardWidth, windowWidth);

    if (breakpoint === 'md') {
      if (cardWidthPx >= 380) return SIZE_PRESETS.lg;
      if (cardWidthPx >= 320) return SIZE_PRESETS.md;
      return SIZE_PRESETS.sm;
    }

    if (cardWidthPx >= 280) return SIZE_PRESETS.lg;
    if (cardWidthPx >= 250) return SIZE_PRESETS.md;
    if (cardWidthPx >= 220) return SIZE_PRESETS.sm;
    return SIZE_PRESETS.xs;
  }, [breakpoint, windowWidth, cardWidth]);
}

function parseCardWidth(cardWidth: string, windowWidth: number): number {
  if (cardWidth.includes('vw')) {
    return (parseFloat(cardWidth) / 100) * windowWidth;
  }
  if (cardWidth.includes('%')) {
    return windowWidth - 48;
  }
  if (cardWidth.includes('px')) {
    return parseFloat(cardWidth);
  }
  return windowWidth * 0.4;
}
