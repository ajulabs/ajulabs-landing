'use client';

import { Hero } from '@/features/homepage/components/Hero/Hero';
import { AboutView } from '@/features/homepage/components/about/components';
import { ServicesView } from '@/features/homepage/components/solutions';
import { CasesView } from '@/features/homepage/components/cases';

export function HomeView() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />   
      <AboutView />
      <ServicesView />
      <CasesView />
    </main>
  );
}