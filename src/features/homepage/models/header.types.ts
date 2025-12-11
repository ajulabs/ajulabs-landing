export interface Header {
  locale: 'pt' | 'en';
  navigationItems: NavigationItem[];
  ctaText: string;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export interface NavigationItem {
  key: string;
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS_DATA = [
  { key: 'about', href: '#about' },
  { key: 'solutions', href: '#solutions' },
  { key: 'projects', href: '#cases' },
  { key: 'contact', href: '#contact' },
] as const;
