'use client';

import type { useGradientText } from '../hooks/useGradientText';
import { GradientLine } from './GradientLine';

interface CasesHeaderProps {
  translations: {
    sectionTitle: string;
    headline: { line1: string; line2: string };
    subtitle: { line1: string; line2: string };
  };
  gradientText: ReturnType<typeof useGradientText>;
}

export function CasesHeader({ translations, gradientText }: CasesHeaderProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start mb-20 lg:mb-24 cases-font">
      <div className="text-left order-2 lg:order-1" style={{ position: 'relative', zIndex: 1 }}>
        <h3
          ref={gradientText.containerRef}
          onMouseMove={gradientText.handleMouseMove}
          onMouseLeave={gradientText.handleMouseLeave}
          className="text-2xl md:text-2xl xl:text-3xl font-medium leading-tight mb-2 md:mb-4 relative cursor-default inline-block"
          style={{ pointerEvents: 'auto', zIndex: 2 }}
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

      <div className="flex items-center gap-3 pt-2 mb-6 lg:mb-0 lg:justify-end order-1 lg:order-2">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
        <h2 className="text-gray-800 text-sm font-medium tracking-wider uppercase">
          {translations.sectionTitle}
        </h2>
      </div>
    </div>
  );
}

