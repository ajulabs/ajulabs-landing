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
    services: {
      sectionTitle: 'SERVIÇOS',
      headline: {
        line1: 'TECNOLOGIA FEITA PARA',
        line2: 'TRANSFORMAR NEGÓCIOS E PESSOAS.',
      },
      subtitle: {
        line3: 'Acreditamos que cada projeto é uma ',
        line4: 'oportunidade de expandir possibilidades.',
      },
      items: {
        websites: {
          title: 'Desenvolvimento de Websites',
          description: 'Criamos websites modernos, responsivos e otimizados que transformam visitantes em clientes.',
          features: [
            'Design responsivo e mobile-first',
            'Performance otimizada (SEO e velocidade)',
            'Integração com sistemas de gestão',
            'E-commerce e lojas virtuais',
          ],
        },
        apps: {
          title: 'Desenvolvimento de Aplicativos',
          description: 'Aplicativos nativos e multiplataforma que oferecem experiências excepcionais aos usuários.',
          features: [
            'Apps iOS e Android nativos',
            'Aplicativos multiplataforma (React Native)',
            'UI/UX intuitivo e moderno',
            'Integração com APIs e serviços',
          ],
        },
        integrations: {
          title: 'Integrações & API',
          description: 'Conectamos seus sistemas e automatizamos processos através de APIs robustas e seguras.',
          features: [
            'Desenvolvimento de APIs RESTful',
            'Integração com sistemas terceiros',
            'Automação de processos',
            'Webhooks e integrações em tempo real',
          ],
        },
        ai: {
          title: 'Soluções com IA Integrada',
          description: 'Implementamos inteligência artificial para otimizar processos e criar experiências personalizadas.',
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
    services: {
      sectionTitle: 'SERVICES',
      headline: {
        line1: 'TECHNOLOGY MADE TO',
        line2: 'TRANSFORM BUSINESSES AND PEOPLE.',
      },
      subtitle: {
        line3: 'We believe that every project is an ',
        line4: 'opportunity to expand possibilities.',
      },
      items: {
        websites: {
          title: 'Website Development',
          description: 'We create modern, responsive, and optimized websites that turn visitors into customers.',
          features: [
            'Responsive and mobile-first design',
            'Optimized performance (SEO and speed)',
            'Integration with management systems',
            'E-commerce and online stores',
          ],
        },
        apps: {
          title: 'Application Development',
          description: 'Native and cross-platform applications that deliver exceptional user experiences.',
          features: [
            'Native iOS and Android apps',
            'Cross-platform applications (React Native)',
            'Intuitive and modern UI/UX',
            'Integration with APIs and services',
          ],
        },
        integrations: {
          title: 'Integrations & API',
          description: 'We connect your systems and automate processes through robust and secure APIs.',
          features: [
            'RESTful API development',
            'Third-party system integration',
            'Process automation',
            'Webhooks and real-time integrations',
          ],
        },
        ai: {
          title: 'Integrated AI Solutions',
          description: 'We implement artificial intelligence to optimize processes and create personalized experiences.',
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

