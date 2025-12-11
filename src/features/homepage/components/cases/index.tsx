'use client';

import { motion } from 'framer-motion';
import { useCasesViewModel } from '../../viewModels/useCasesViewModel';
import { useGradientText } from './hooks/useGradientText';
import { useGSAPCarousel } from './hooks/useCarousel';
import { CasesHeader } from './partials/CasesHeader';
import { CarouselSlide } from './partials/CarouselSlide';

export function CasesView() {
  const vm = useCasesViewModel();
  const gradientText = useGradientText(vm.translations.headline);

  const carousel = useGSAPCarousel({
    cases: vm.cases,
    isMobile: vm.isMobile,
    isTablet: vm.isTablet,
    isDesktop: vm.isDesktop,
  });

  return (
    <section
      id="cases"
      className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-24 overflow-x-hidden cases-font"
    >
      <div className="max-w-7xl mx-auto">
        <CasesHeader translations={vm.translations} gradientText={gradientText} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full overflow-visible"
        >
          <div
            ref={carousel.containerRef}
            className="relative w-full overflow-visible"
            style={{
              height: 'clamp(400px, 55vh, 750px)',
            }}
            onMouseEnter={carousel.pauseAutoplay}
            onMouseLeave={carousel.resumeAutoplay}
          >
            <div
              ref={carousel.wrapperRef}
              className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
              style={{ 
                touchAction: 'pan-x pan-y',
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
            >
              {vm.cases.map((caseItem, index) => (
                <CarouselSlide
                  key={caseItem.id}
                  caseItem={caseItem}
                  index={index}
                  isActive={carousel.currentIndex === index}
                  onClick={() => carousel.goToSlide(index)}
                  slideRef={(el) => {
                    carousel.slidesRef.current[index] = el;
                  }}
                  viewProjectText={vm.translations.viewProject}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {vm.cases.map((_, index) => (
              <button
                key={index}
                onClick={() => carousel.goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  carousel.currentIndex === index
                    ? 'bg-orange-500 w-8 h-2'
                    : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
