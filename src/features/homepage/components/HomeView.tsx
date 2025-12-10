'use client';

import { Hero } from './Hero/Hero';
import { ServicesView } from '@/features/solutions/components/SolutionsView';
import { AboutView } from '@/features/homepage/components/about/components';
import { ServicesView } from '@/features/homepage/components/solutions';
import { CasesView } from '@/features/homepage/components/cases';

export function HomeView() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServicesView />
    <main className="flex min-h-screen flex-col">      
      <AboutView />
      <ServicesView />
      <CasesView />
    </main>
  );
}

    </main> );
}