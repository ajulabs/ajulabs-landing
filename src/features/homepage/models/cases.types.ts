export interface Case {
  id: string;
  name: string;
  image: string;
  link: string;
  color: string;
  innerColor: string;
}

export const CASES_DATA: Case[] = [
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

export const CAROUSEL_CONFIG = {
  autoplayDelay: 4000,
  transitionDuration: 0.6,
  dragThreshold: 50,
  gradientThreshold: 80,
  scale: {
    active: 1,
    adjacent: 0.9,
    default: 0.8,
  },
  spacing: 0,
  visibleSlides: {
    mobile: 3,
    tablet: 4,
    desktop: 5,
  },
} as const;

export const ANIMATION_CONFIG = {
  duration: { fast: 0.25, normal: 0.6, slow: 1 },
  ease: {
    smooth: 'power2.inOut',
    out: 'power2.out',
    in: 'power2.in',
  },
} as const;
