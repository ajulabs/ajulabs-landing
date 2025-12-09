import { useState, useEffect, useMemo } from 'react';

type Breakpoint = 'xs' | 'md' | 'lg' | 'xl';

interface BreakpointState {
  breakpoint: Breakpoint;
  windowWidth: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLg: boolean;
  isXl: boolean;
}

export function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<{ breakpoint: Breakpoint; width: number }>({
    breakpoint: 'xl',
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      let bp: Breakpoint;

      if (width < 768) bp = 'xs';
      else if (width < 1024) bp = 'md';
      else if (width < 1280) bp = 'lg';
      else bp = 'xl';

      setState({ breakpoint: bp, width });
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return useMemo(
    () => ({
      breakpoint: state.breakpoint,
      windowWidth: state.width,
      isMobile: state.breakpoint === 'xs',
      isTablet: state.breakpoint === 'md',
      isLg: state.breakpoint === 'lg',
      isXl: state.breakpoint === 'xl',
      isDesktop: state.breakpoint === 'lg' || state.breakpoint === 'xl',
    }),
    [state]
  );
}
