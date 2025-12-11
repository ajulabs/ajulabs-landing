import { useI18n } from '@/lib/i18n/context';

export const useHeroViewModel = () => {
  const { t, locale } = useI18n();

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Seção de contato não encontrada');
    }
  };

  return {
    title: t.hero.title,
    subtitle: t.hero.subtitle,
    ctaText: t.hero.cta,
    onCtaClick: handleCtaClick,
    locale,
  };
};