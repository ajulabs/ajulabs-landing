'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n/context';
import type { Locale } from '../models/header.schema';

export function useHeaderViewModel() {
  const { locale, setLocale, t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { key: 'about', label: t.header.nav.about, href: '#about' },
    { key: 'solutions', label: t.header.nav.solutions, href: '#solutions' },
    { key: 'projects', label: t.header.nav.projects, href: '#projects' },
    { key: 'contact', label: t.header.nav.contact, href: '#contact' },
  ];

  return {
    locale,
    handleLocaleChange,
    navigationItems,
    ctaText: t.header.cta,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}

