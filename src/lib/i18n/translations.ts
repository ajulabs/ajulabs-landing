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

    homepage: {
      hero: {
        title: 'O futuro do seu projeto começa aqui',
        subtitle: 'Na AjuLabs, transformamos ideias em soluções digitais que conectam inovação, design e performance. Mais do que desenvolver tecnologia, criamos parcerias que impulsionam negócios e conectam pessoas ao futuro.',
        cta: 'Comece um projeto com a gente',
      },
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
    homepage: {
      hero: {
        title: 'The future of your project starts here',
        subtitle: 'At AjuLabs, we transform ideas into digital solutions that connect innovation, design and performance. More than just developing technology, we create partnerships that propel businesses and connect people to the future.',
        cta: 'Start a project with us',
      },
    },
  },
};

