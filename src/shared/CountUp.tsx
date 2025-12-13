"use client";

import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ReactCountUp from 'react-countup';

interface AnimatedCountUpProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
    threshold?: number;
    once?: boolean;
}

export function AnimatedCountUp({
    end,
    suffix = '',
    prefix = '',
    duration = 2,
    className = '',
    threshold = 0.3,
    once = false,
}: AnimatedCountUpProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once, amount: threshold });
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        if (isInView) {
            setAnimationKey(prev => prev + 1);
        }
    }, [isInView]);

    return (
        <span ref={containerRef} className={className}>
            {isInView && (
                <>
                    <ReactCountUp
                        key={`countup-${end}-${animationKey}`}
                        start={0}
                        end={end}
                        prefix={prefix}
                        duration={duration}
                    />
                    {suffix && <span style={{ marginLeft: '0.25em' }}>{suffix}</span>}
                </>
            )}
        </span>
    );
}

