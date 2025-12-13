export type Locale = 'pt' | 'en';

export interface Translations {
  header: {
    nav: {
      about: string;
      solutions: string;
      projects: string;
      contact: string;
    };
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    sectionTitle: string;
    headline: {
      line1: string;
      line2: string;
    };
    subtitle: {
      line1: string;
      line2: string;
    };
    paragraphs: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    }
  };
  services: {
    sectionTitle: string;
    headline: {
      line1: string;
      line2: string;
    };
    subtitle: {
      line1: string;
      line2: string;
    };
    items: {
      websites: {
        title: string;
        description: {
          line1: string;
          line2: string;
        };
        features: string[];
      };
      apps: {
        title: string;
        description: {
          line1: string;
          line2: string;
        };
        features: string[];
      };
      integrations: {
        title: string;
        description: {
          line1: string;
          line2: string;
        };
        features: string[];
      };
      ai: {
        title: string;
        description: {
          line1: string;
          line2: string;
        };
        features: string[];
      };
    };
  };
  cases: {
    sectionTitle: string;
    headline: {
      line1: string;
      line2: string;
    };
    subtitle: {
      line1: string;
      line2: string;
    };
    viewProject: string;
  };
  contact: {
    sectionTitle: string;
    headline: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    ctaButton: string;
  };
  footer: {
    commercial: string;
    emailLabel: string;
    whatsappLabel: string;
    rights: string;
    legal: string;
    madeBy: string;
  };
}

