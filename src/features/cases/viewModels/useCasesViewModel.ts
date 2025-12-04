import { useState, useMemo, useCallback, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import type { CarouselApi } from '@/components/ui/carousel';
import { useI18n } from '@/lib/i18n/context';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { CAROUSEL_CONFIG } from '../models/cases.types';
import type { Case } from '../models/cases.types';

const CASES_DATA: Case[] = [
  {
    id: '1',
    name: 'MAVSYSTEMS',
    image: '/mavsystems.png',
    link: 'https://mavsystems.com.br',
    color: '#475598',
    innerColor: '#505EA2',
  },
  {
    id: '2',
    name: 'TINA',
    image: '/tina.png',
    link: 'https://mavsystems.com.br/tina',
    color: '#39FF89',
    innerColor: '#5CD08B',
  },
  {
    id: '3',
    name: 'E-SIRI',
    image: '/e-siri.png',
    link: 'https://e-siri.com/',
    color: '#209CEF',
    innerColor: '#2BAAFF',
  },
];

export function useCasesViewModel() {
  const { t } = useI18n();
  const breakpointState = useBreakpoint();
  const { isMobile, isTablet, isDesktop, isLargeDesktop, windowWidth } = breakpointState;

  const [hoveredCase, setHoveredCase] = useState<string | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const firstCardAlwaysOpen = isLargeDesktop;

  const getActiveCardId = useCallback((): string | null => {
    if (hoveredCase) return hoveredCase;
    if (firstCardAlwaysOpen) return CASES_DATA[0]?.id ?? null;
    return null;
  }, [hoveredCase, firstCardAlwaysOpen]);

  const activeCardId = getActiveCardId();

  const handleCaseHover = useCallback((id: string) => {
    setHoveredCase(id);
  }, []);

  const handleCaseLeave = useCallback(() => {
    setHoveredCase(null);
  }, []);

  const shouldAutoplay = useMemo(() => {
    if (isMobile) return true;
    if (isTablet) return true;
    if (isDesktop && CASES_DATA.length > 3) return true;
    return false;
  }, [isMobile, isTablet, isDesktop]);

  const autoplayPlugin = useMemo(() => {
    if (!shouldAutoplay) return undefined;

    return Autoplay({
      delay: CAROUSEL_CONFIG.autoplayDelay,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      playOnInit: true,
    });
  }, [shouldAutoplay]);

  useEffect(() => {
    if (!carouselApi) return;

    const autoplay = carouselApi.plugins()?.autoplay;

    if (!autoplay) return;

    if (shouldAutoplay) {
      autoplay.play();
    } else {
      autoplay.stop();
    }
  }, [carouselApi, shouldAutoplay]);

  const getCardWidth = useCallback(
    (caseId: string, isFirst: boolean): string => {
      const isActive = activeCardId === caseId;

      if (isMobile) return '100%';
      if (isTablet) return '320px';

      const containerWidth = Math.min(windowWidth - 96, 1184);
      const gap = 32;
      const totalCards = CASES_DATA.length;

      if (isLargeDesktop) {
        if (isFirst && !hoveredCase) {
          return `${Math.floor(containerWidth * 0.35)}px`;
        }
        if (isActive) {
          return `${Math.floor(containerWidth * 0.30)}px`;
        }
        const activeWidth = hoveredCase ? containerWidth * 0.30 : containerWidth * 0.35;
        const remainingWidth = containerWidth - activeWidth - gap * (totalCards - 1);
        return `${Math.floor(remainingWidth / (totalCards - 1))}px`;
      }

      if (windowWidth >= 1024 && windowWidth < 1660) {
        if (isActive) {
          return `${Math.floor(containerWidth * 0.35)}px`;
        }
        return `${Math.floor(containerWidth * 0.26)}px`;
      }

      if (isActive) {
        return `${Math.floor(containerWidth * 0.28)}px`;
      }
      return `${Math.floor(containerWidth * 0.20)}px`;
    },
    [isMobile, isTablet, isLargeDesktop, windowWidth, activeCardId, hoveredCase]
  );

  const getCardHeight = useCallback((): string => {
    if (isMobile) return '480px';
    if (isTablet) return '560px';
    if (windowWidth < 1440) return '620px';
    return '700px';
  }, [isMobile, isTablet, windowWidth]);

  const canInteract = useCallback(
    (caseId: string, isFirst: boolean): boolean => {
      if (!isDesktop) return false;
      if (isLargeDesktop && isFirst) return false;
      return true;
    },
    [isDesktop, isLargeDesktop]
  );

  return {
    cases: CASES_DATA,
    translations: t.cases,
    activeCardId,
    hoveredCase,
    setCarouselApi,
    ...breakpointState,
    handleCaseHover,
    handleCaseLeave,
    canInteract,
    autoplayPlugin,
    getCardWidth,
    getCardHeight,
    shouldAutoplay,
    firstCardAlwaysOpen,
  };
}