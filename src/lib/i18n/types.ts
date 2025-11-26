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
  };
}

