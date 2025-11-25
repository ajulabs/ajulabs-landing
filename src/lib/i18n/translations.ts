import type { Translations } from './types';

export const translations: Record<'pt' | 'en', Translations> = {
  pt: {
    header: {
      nav: {
        about: 'Quem somos',
        solutions: 'Soluções',
        projects: 'Projetos',
        contact: 'Contato',
      },
      cta: 'Fale conosco',
    },
  },
  en: {
    header: {
      nav: {
        about: 'About us',
        solutions: 'Solutions',
        projects: 'Projects',
        contact: 'Contact',
      },
      cta: 'Get in touch',
    },
  },
};

