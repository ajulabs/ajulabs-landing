import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { CAROUSEL_CONFIG, ANIMATION_CONFIG } from '../../../models/cases.types';
import type { Case } from '../../../models/cases.types';

gsap.registerPlugin(Draggable);

interface UseGSAPCarouselProps {
  cases: Case[];
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useGSAPCarousel({
  cases,
  isMobile,
  isTablet,
  isDesktop,
}: UseGSAPCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);

  const totalSlides = cases.length;

  const visibleSlides = isMobile
    ? CAROUSEL_CONFIG.visibleSlides.mobile
    : isTablet
    ? CAROUSEL_CONFIG.visibleSlides.tablet
    : CAROUSEL_CONFIG.visibleSlides.desktop;

  const getSlideScale = useCallback((index: number, activeIndex: number) => {
    const distance = Math.abs(index - activeIndex);
    
    if (distance === 0) return CAROUSEL_CONFIG.scale.active;
    if (distance === 1) return CAROUSEL_CONFIG.scale.adjacent;
    return CAROUSEL_CONFIG.scale.default;
  }, []);

  const getSlideOpacity = useCallback((index: number, activeIndex: number) => {
    const distance = Math.abs(index - activeIndex);
    
    if (distance === 0) return 1;
    if (distance === 1) return 0.15;
    return 0.10;
  }, []);

  const animateSlides = useCallback((activeIndex: number, duration = CAROUSEL_CONFIG.transitionDuration) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const adjacentOffset = containerWidth * 0.62;

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      const scale = getSlideScale(index, activeIndex);
      const opacity = getSlideOpacity(index, activeIndex);
      const distance = index - activeIndex;
      
      const offset = distance * adjacentOffset;
      
      const zIndex = distance === 0 ? 10 : Math.abs(distance) === 1 ? 5 : 2;

      gsap.to(slide, {
        x: offset,
        scale,
        opacity,
        zIndex,
        duration,
        ease: ANIMATION_CONFIG.ease.smooth,
      });
    });
  }, [visibleSlides, getSlideScale, getSlideOpacity]);

  const goToSlide = useCallback((index: number) => {
    const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    animateSlides(newIndex);
  }, [totalSlides, animateSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (!isDraggingRef.current && !isHoveringRef.current) {
        nextSlide();
      }
    }, CAROUSEL_CONFIG.autoplayDelay);
  }, [nextSlide]);

  const pauseAutoplay = useCallback(() => {
    isHoveringRef.current = true;
    stopAutoplay();
  }, []);

  const resumeAutoplay = useCallback(() => {
    isHoveringRef.current = false;
    startAutoplay();
  }, [startAutoplay]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const calculateIndexFromDrag = useCallback((dragX: number) => {
    if (!containerRef.current) return currentIndex;
    
    const containerWidth = containerRef.current.offsetWidth;
    const slideWidth = containerWidth;
    const visiblePortion = 0.15;
    const slideSpacing = slideWidth * (1 - visiblePortion);
    
    const slidesMoved = Math.round(-dragX / slideSpacing);
    const newIndex = ((currentIndex + slidesMoved) % totalSlides + totalSlides) % totalSlides;
    
    return newIndex;
  }, [currentIndex, totalSlides]);

  const updateSlidesDuringDrag = useCallback((dragX: number) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const slideWidth = containerWidth;
    const visiblePortion = 0.15;

    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;

      const scale = getSlideScale(index, currentIndex);
      const opacity = getSlideOpacity(index, currentIndex);
      const distance = index - currentIndex;
      
      const baseOffset = distance * slideWidth * (1 - visiblePortion);
      const offset = baseOffset + dragX;
      
      const zIndex = scale === CAROUSEL_CONFIG.scale.active ? 10 : scale === CAROUSEL_CONFIG.scale.adjacent ? 5 : 2;

      gsap.set(slide, {
        x: offset,
        scale,
        opacity,
        zIndex,
      });
    });
  }, [currentIndex, getSlideScale, getSlideOpacity]);

  useEffect(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    animateSlides(currentIndex, 0.6);

    const draggableInstance = Draggable.create(wrapperRef.current, {
      type: 'x',
      inertia: true,
      throwProps: true,
      dragClickables: true,
      allowContextMenu: false,
      minimumMovement: 3,
      edgeResistance: 0.5,
      overshootTolerance: 0,
      onPress: function() {
        isDraggingRef.current = false;
      },
      onDragStart: function() {
        isDraggingRef.current = true;
        stopAutoplay();
      },
      onDrag: function() {
        updateSlidesDuringDrag(this.x);
      },
      onThrowUpdate: function() {
        updateSlidesDuringDrag(this.x);
      },
      onDragEnd: function() {
        const dragDistance = this.x;
        const threshold = CAROUSEL_CONFIG.dragThreshold;

        const newIndex = calculateIndexFromDrag(dragDistance);

        if (Math.abs(dragDistance) > threshold) {
          goToSlide(newIndex);
        } else {
          animateSlides(currentIndex);
        }

        gsap.to(wrapperRef.current, {
          x: 0,
          duration: ANIMATION_CONFIG.duration.fast,
          ease: ANIMATION_CONFIG.ease.smooth,
        });

        setTimeout(() => {
          isDraggingRef.current = false;
          startAutoplay();
        }, ANIMATION_CONFIG.duration.fast * 1000);
      },
    });

    return () => {
      draggableInstance[0].kill();
    };
  }, [currentIndex, animateSlides, nextSlide, prevSlide, startAutoplay, stopAutoplay, updateSlidesDuringDrag, calculateIndexFromDrag, goToSlide]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    const handleResize = () => {
      animateSlides(currentIndex, 0.6);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, animateSlides]);

  return {
    containerRef,
    wrapperRef,
    slidesRef,
    currentIndex,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoplay,
    resumeAutoplay,
  };
}
