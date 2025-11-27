'use client';

import { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { Service } from '../models/solutions.schema';

export function useServicesViewModel() {
  const { t } = useI18n();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services: Service[] = useMemo(
    () => [
      {
        id: '1',
        number: '01',
        title: t.services.items.websites.title,
        description: t.services.items.websites.description,
        features: t.services.items.websites.features,
      },
      {
        id: '2',
        number: '02',
        title: t.services.items.apps.title,
        description: t.services.items.apps.description,
        features: t.services.items.apps.features,
      },
      {
        id: '3',
        number: '03',
        title: t.services.items.integrations.title,
        description: t.services.items.integrations.description,
        features: t.services.items.integrations.features,
      },
      {
        id: '4',
        number: '04',
        title: t.services.items.ai.title,
        description: t.services.items.ai.description,
        features: t.services.items.ai.features,
      },
    ],
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

