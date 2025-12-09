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
    about: {
      sectionTitle: 'CONHEÇA A AJULABS',
      headline: {
        line1: 'CADA NÚMERO CONTA UMA',
        line2: 'HISTÓRIA DE IMPACTO.',
      },
      subtitle: {
        line1: 'Por trás de cada entrega, há uma cultura que combina ',
        line2: 'conhecimento, propósito e inovação para gerar resultados reais.',
      },
      paragraphs: {
        line1: 'TECNOLOGIA E',
        line2: 'CONHECIMENTO',
        line3: 'QUE IMPULSIONAM',
        line4: 'O FUTURO.',
      },
      cards: [
        {
          title: '+ 08 anos',
          description: 'Crescendo com quem acredita na tecnologia como força de transformação.',
        },{
          title: '+ 61 cases',
          description: 'Soluções que conectam desafios complexos a resultados tangíveis.',
        },{
          title: '008k códigos',
          description: 'Cada uma escrita com propósito: gerar impacto humano através da tecnologia.',
        }
      ]
    },
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
    cases: {
      sectionTitle: 'CASES AJULABS',
      headline: {
        line1: 'PROJETOS QUE NASCERAM DA',
        line2: 'CONFIANÇA E VIRARAM REFERÊNCIA.',
      },
      subtitle: {
        line1: 'Trabalhamos lado a lado com nossos parceiros: pesquisando, ',
        line2: 'prototipando e construindo soluções que entregam impacto real.',
      },
      viewProject: 'VISUALIZAR PROJETO',
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
    about: {
      sectionTitle: 'GET TO KNOW AJULABS',
      headline: {
        line1: 'EVERY NUMBER TELLS A',
        line2: 'STORY OF IMPACT.',
      },
      subtitle: {
        line1: 'Behind every delivery, there is a culture that combines ',
        line2: 'knowledge, purpose, and innovation to generate real results.',
      },
      paragraphs: {
        line1: 'TECHNOLOGY AND',
        line2: 'KNOWLEDGE',
        line3: 'THAT DRIVE',
        line4: 'THE FUTURE.',
      },
      cards: [
        {
          title: '+ 08 years',
          description: 'Growing with those who believe in technology as a force for transformation.',
        },{
          title: '+ 61 cases',
          description: 'Solutions that connect complex challenges to tangible results.',
        },{
          title: '008k lines of code',
          description: 'Each written with purpose: generating human impact through technology.',
        }
      ]
    },
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
    cases: {
      sectionTitle: 'AJULABS CASES',
      headline: {
        line1: 'PROJECTS BORN FROM',
        line2: 'TRUST AND BECAME A REFERENCE.',
      },
      subtitle: {
        line1: 'We work side by side with our partners: researching, ',
        line2: 'prototyping and building solutions that deliver real impact.',
      },
      viewProject: 'VIEW PROJECT',
    },
  },
};

