'use client';

import { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { NAVIGATION_ITEMS_DATA, type Header } from '../models/header.types';

export function useHeaderViewModel() {
  const { locale, setLocale, t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: Header['locale']) => {
    setLocale(newLocale);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = useMemo(
    () =>
      NAVIGATION_ITEMS_DATA.map((item) => ({
        ...item,
        label: t.header.nav[item.key as keyof typeof t.header.nav],
      })),
    [t]
  );

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

