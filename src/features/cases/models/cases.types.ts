import { z } from 'zod';

export const caseSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  link: z.string().url(),
  color: z.string(),
  innerColor: z.string(),
});

export type Case = z.infer<typeof caseSchema>;

export type Breakpoint = 'xs' | 'md' | 'lg' | 'xl';

export interface ButtonSizeConfig {
  height: string;
  width: string;
  widthClass: string;
  paddingL: string;
  paddingR: string;
  text: string;
  icon: number;
  iconContainer: string;
  namePadding: string;
}

export const ANIMATION_CONFIG = {
  spring: { stiffness: 300, damping: 30 },
  duration: { fast: 0.3, normal: 0.4, slow: 0.6 },
  ease: {
    smooth: [0.32, 0.72, 0, 1] as const,
    out: 'easeOut' as const,
  },
  stagger: 0.08,
} as const;

export const CAROUSEL_CONFIG = {
  autoplayDelay: 3000,
  gradientThreshold: 80,
} as const;
