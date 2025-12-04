'use client';

import { useState,  useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCasesViewModel } from '../viewModels/useCasesViewModel';
import { useGradientText } from '../hooks/useGradientText';
import { CaseCard } from './CaseCard';
import { ANIMATION_CONFIG } from '../models/cases.types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

export function CasesView() {
  const vm = useCasesViewModel();
  const gradientText = useGradientText(vm.translations.headline);
  const [current, setCurrent] = useState(0);

  const handleApiChange = (api: CarouselApi) => {
    if (!api) return;

    vm.setCarouselApi(api);

    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  };

  return (
    <motion.section
      id="cases"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.out,
      }}
      className="relative w-full bg-white py-12 md:py-16 lg:py-24 overflow-hidden px-6 md:px-12 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto">
        <Header translations={vm.translations} gradientText={gradientText} />

        <div className="w-full">
          <Carousel
            setApi={handleApiChange}
            opts={{
              align: vm.isMobile ? 'center' : 'start',
              loop: vm.shouldAutoplay,
              skipSnaps: false,
              dragFree: false,
              containScroll: 'trimSnaps',
              slidesToScroll: 1,
            }}
            plugins={vm.autoplayPlugin ? [vm.autoplayPlugin] : undefined}
            className="w-full"
          >
            <CarouselContent
              className={cn(
                'flex',
                vm.isMobile && '-ml-4',
                vm.isTablet && '-ml-4 md:-ml-6',
                vm.isDesktop && '-ml-4 md:-ml-6 lg:-ml-8'
              )}
            >
              {vm.cases.map((caseItem, index) => {
                const isFirst = index === 0;
                const isActive = vm.activeCardId === caseItem.id;
                const canInteract = vm.canInteract(caseItem.id, isFirst);

                return (
                  <CarouselItem
                    key={caseItem.id}
                    className={cn(
                      'shrink-0',
                      vm.isMobile && 'pl-4 basis-[85vw]',
                      vm.isTablet && 'pl-4 md:pl-6',
                      vm.isDesktop && 'pl-4 md:pl-6 lg:pl-8'
                    )}
                    style={
                      !vm.isMobile
                        ? { flexBasis: 'auto', minWidth: '28%' }
                        : undefined
                    }
                  >
                    <CaseCard
                      caseItem={caseItem}
                      index={index}
                      isActive={isActive}
                      isFirst={isFirst}
                      canInteract={canInteract}
                      isMobile={vm.isMobile}
                      isTablet={vm.isTablet}
                      isDesktop={vm.isDesktop}
                      cardWidth={vm.getCardWidth(caseItem.id, isFirst)}
                      cardHeight={vm.getCardHeight()}
                      onHover={() => vm.handleCaseHover(caseItem.id)}
                      onLeave={vm.handleCaseLeave}
                      viewProjectLabel={vm.translations.viewProject}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {(vm.isMobile || vm.isTablet) && (
            <div className="flex justify-center gap-2 mt-6">
              {vm.cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => vm.setCarouselApi?.(undefined)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    current === index
                      ? 'bg-orange-500 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  )}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface HeaderProps {
  translations: {
    sectionTitle: string;
    headline: { line1: string; line2: string };
    subtitle: { line1: string; line2: string };
  };
  gradientText: ReturnType<typeof useGradientText>;
}

function Header({ translations, gradientText }: HeaderProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-0 mb-16 lg:mb-20 cases-font">
      <div className="flex items-center gap-3 pt-2 mb-6 lg:mb-0 lg:justify-end order-1 lg:order-2">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
        <h2 className="text-gray-800 text-sm font-medium tracking-wider uppercase">
          {translations.sectionTitle}
        </h2>
      </div>

      <div className="text-left order-2 lg:order-1 relative z-1">
        <h3
          ref={gradientText.containerRef}
          onMouseMove={gradientText.handleMouseMove}
          onMouseLeave={gradientText.handleMouseLeave}
          className="text-2xl md:text-2xl xl:text-3xl font-medium leading-tight mb-2 md:mb-4 cursor-default inline-block"
        >
          <GradientLine
            text={translations.headline.line1}
            startIndex={0}
            setRef={gradientText.setLetterRef}
          />
          <br />
          <GradientLine
            text={translations.headline.line2}
            startIndex={translations.headline.line1.length}
            setRef={gradientText.setLetterRef}
          />
        </h3>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          {translations.subtitle.line1}
          <br />
          {translations.subtitle.line2}
        </p>
      </div>
    </div>
  );
}

function GradientLine({
  text,
  startIndex,
  setRef,
}: {
  text: string;
  startIndex: number;
  setRef: (index: number) => (el: HTMLSpanElement | null) => void;
}) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={`${startIndex}-${i}`}
          ref={setRef(startIndex + i)}
          className="inline-block pointer-events-none cases-font"
          style={{ color: '#1f2937' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}
