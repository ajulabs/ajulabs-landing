import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { CAROUSEL_CONFIG } from '../models/cases.types';

export function useGradientText(text: { line1: string; line2: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const totalChars = text.line1.length + text.line2.length;

  useEffect(() => {
    letterRefs.current = new Array(totalChars).fill(null);
  }, [totalChars]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const threshold = CAROUSEL_CONFIG.gradientThreshold;

    letterRefs.current.forEach((ref) => {
      if (!ref) return;

      const letterRect = ref.getBoundingClientRect();
      const letterX = letterRect.left + letterRect.width / 2 - rect.left;
      const letterY = letterRect.top + letterRect.height / 2 - rect.top;
      const distance = Math.hypot(mouseX - letterX, mouseY - letterY);

      const targetColor = distance < threshold
        ? interpolateColor(1 - distance / threshold)
        : '#1f2937';

      gsap.to(ref, {
        color: targetColor,
        duration: distance < threshold ? 0.3 : 0.5,
        ease: 'power2.out',
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    letterRefs.current.forEach((ref) => {
      if (!ref) return;
      gsap.to(ref, { color: '#1f2937', duration: 0.6, ease: 'power2.out' });
    });
  }, []);

  const setLetterRef = useCallback((index: number) => (el: HTMLSpanElement | null) => {
    letterRefs.current[index] = el;
  }, []);

  return { containerRef, setLetterRef, handleMouseMove, handleMouseLeave };
}

function interpolateColor(intensity: number): string {
  const r = Math.round(31 + (249 - 31) * intensity);
  const g = Math.round(41 + (115 - 41) * intensity);
  const b = Math.round(55 + (22 - 55) * intensity);
  return `rgb(${r}, ${g}, ${b})`;
}
