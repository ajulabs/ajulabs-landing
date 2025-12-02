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
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  },
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
}

