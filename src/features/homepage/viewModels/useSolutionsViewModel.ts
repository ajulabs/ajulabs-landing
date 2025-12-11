'use client';

import { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { SERVICES_DATA, type Service, type ServiceKey } from '../models/solutions.types';

export function useServicesViewModel() {
  const { t } = useI18n();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services: Service[] = useMemo(
    () =>
      SERVICES_DATA.map((item) => {
        const translationKey = item.key as ServiceKey;
        const itemTranslations = t.services.items[translationKey];
        return {
          id: item.id,
          number: item.number,
          title: itemTranslations.title,
          description: itemTranslations.description,
          features: itemTranslations.features,
          image: undefined,
        };
      }),
    [t]
  );

  const handleServiceHover = (serviceId: string) => {
    setExpandedService(serviceId);
  };

  const handleServiceLeave = () => {
    setExpandedService(null);
  };

  return {
    services,
    expandedService,
    handleServiceHover,
    handleServiceLeave,
    translations: t.services,
  };
}

