'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface HeadlineLines {
    line1: string;
    line2: string;
}

export function useHeadlineEffect(headline: HeadlineLines) {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const totalChars = headline.line1.length + headline.line2.length;
        letterRefs.current = new Array(totalChars).fill(null);

        const timer = setTimeout(() => {
            if (headlineRef.current) {
                const spans = headlineRef.current.querySelectorAll('span');
                spans.forEach((span, idx) => {
                    if (idx < letterRefs.current.length) {
                        letterRefs.current[idx] = span as HTMLSpanElement;
                    }
                });
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [headline]);

    const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
        if (!headlineRef.current) return;

        const hasLetters = letterRefs.current.some((ref) => ref !== null);
        if (!hasLetters) {
            const spans = headlineRef.current.querySelectorAll('span');
            spans.forEach((span, idx) => {
                if (idx < letterRefs.current.length) {
                    letterRefs.current[idx] = span as HTMLSpanElement;
                }
            });
        }

        const rect = headlineRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const threshold = 80;

        letterRefs.current.forEach((letterRef) => {
            if (!letterRef) return;

            const letterRect = letterRef.getBoundingClientRect();
            const letterX = letterRect.left + letterRect.width / 2 - rect.left;
            const letterY = letterRect.top + letterRect.height / 2 - rect.top;

            const distance = Math.sqrt(
                Math.pow(mouseX - letterX, 2) + Math.pow(mouseY - letterY, 2)
            );

            if (distance < threshold) {
                const intensity = 1 - distance / threshold;
                gsap.to(letterRef, {
                    color: `rgb(${Math.round(31 + (249 - 31) * intensity)}, ${Math.round(41 + (115 - 41) * intensity)}, ${Math.round(55 + (22 - 55) * intensity)})`,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            } else {
                gsap.to(letterRef, {
                    color: '#1f2937',
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        });
    };

    const handleMouseLeave = () => {
        letterRefs.current.forEach((letterRef) => {
            if (!letterRef) return;
            gsap.to(letterRef, {
                color: '#1f2937',
                duration: 0.6,
                ease: 'power2.out',
            });
        });
    };

    return {
        headlineRef,
        letterRefs,
        handleMouseMove,
        handleMouseLeave,
    };
}

