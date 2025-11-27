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
    services: {
      sectionTitle: 'SERVIÇOS',
      headline: {
        line1: 'TECNOLOGIA FEITA PARA',
        line2: 'TRANSFORMAR NEGÓCIOS E PESSOAS.',
      },
      subtitle: {
        line1: 'Acreditamos que cada projeto é uma ',
        line2: 'oportunidade de expandir possibilidades.',
      },
      items: {
        websites: {
          title: 'Desenvolvimento de Websites',
          description: {
            line1: 'Criamos websites modernos, responsivos e ',
            line2: 'otimizados que transformam visitantes em clientes.',
          },
          features: [
            'Design responsivo e mobile-first',
            'Performance otimizada (SEO e velocidade)',
            'Integração com sistemas de gestão',
            'E-commerce e lojas virtuais',
          ],
        },
        apps: {
          title: 'Desenvolvimento de Aplicativos',
          description: {
            line1: 'Aplicativos nativos e multiplataforma que oferecem ',
            line2: 'experiências excepcionais aos usuários.',
          },
          features: [
            'Apps iOS e Android nativos',
            'Aplicativos multiplataforma (React Native)',
            'UI/UX intuitivo e moderno',
            'Integração com APIs e serviços',
          ],
        },
        integrations: {
          title: 'Integrações & API',
          description: {
            line1: 'Conectamos seus sistemas e automatizamos ',
            line2: 'processos através de APIs robustas e seguras.',
          },
          features: [
            'Desenvolvimento de APIs RESTful',
            'Integração com sistemas terceiros',
            'Automação de processos',
            'Webhooks e integrações em tempo real',
          ],
        },
        ai: {
          title: 'Soluções com IA Integrada',
          description: {
            line1: 'Implementamos inteligência artificial para otimizar ',
            line2: 'processos e criar experiências personalizadas.',
          },
          features: [
            'Chatbots inteligentes',
            'Análise preditiva de dados',
            'Automação com machine learning',
            'Processamento de linguagem natural',
          ],
        },
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
    services: {
      sectionTitle: 'SERVICES',
      headline: {
        line1: 'TECHNOLOGY MADE TO',
        line2: 'TRANSFORM BUSINESSES AND PEOPLE.',
      },
      subtitle: {
        line1: 'We believe that every project is an ',
        line2: 'opportunity to expand possibilities.',
      },
      items: {
        websites: {
          title: 'Website Development',
          description: {
            line1: 'We create modern, responsive, and optimized ',
            line2: 'websites that turn visitors into customers.',
          },
          features: [
            'Responsive and mobile-first design',
            'Optimized performance (SEO and speed)',
            'Integration with management systems',
            'E-commerce and online stores',
          ],
        },
        apps: {
          title: 'Application Development',
          description: 
          {
            line1: 'Native and cross-platform applications ',
            line2: 'that deliver exceptional user experiences.',
          },
          features: [
            'Native iOS and Android apps',
            'Cross-platform applications (React Native)',
            'Intuitive and modern UI/UX',
            'Integration with APIs and services',
          ],
        },
        integrations: {
          title: 'Integrations & API',
          description: {
            line1: 'We connect your systems and automate ',
            line2: 'processes through robust and secure APIs.',
          },
          features: [
            'RESTful API development',
            'Third-party system integration',
            'Process automation',
            'Webhooks and real-time integrations',
          ],
        },
        ai: {
          title: 'Integrated AI Solutions',
          description: {
            line1: 'We implement artificial intelligence to optimize ',
            line2: 'processes and create personalized experiences.',
          },
          features: [
            'Intelligent chatbots',
            'Predictive data analysis',
            'Machine learning automation',
            'Natural language processing',
          ],
        },
      },
    },
  },
};

