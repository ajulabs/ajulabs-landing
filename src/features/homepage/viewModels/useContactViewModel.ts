'use client';

import { useI18n } from '@/lib/i18n/context';

export function useContactViewModel() {
  const { t } = useI18n();

  const handleCtaClick = () => {
    window.location.href = 'mailto:gabriel@ajulabs.com';
  };

  return {
    translations: t.contact,
    handleCtaClick,
  };
}

