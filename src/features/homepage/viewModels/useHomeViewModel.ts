'use client';
import { useI18n } from '@/lib/i18n/context';
import { useMemo } from 'react';

export function useHomeViewModel() {
  const title = "Welcome to AjuLabs";
  const { t } = useI18n();

  const about = useMemo(() => ({
    sectionTitle: t.about.sectionTitle,
    headline: t.about.headline,
    subtitle: t.about.subtitle,
    paragraphs: t.about.paragraphs,
  }), [t]);

  return {
    title,
    about,
  };
}

