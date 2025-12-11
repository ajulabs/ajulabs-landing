'use client';

import { Hero } from '@/features/homepage/components/Hero/Hero';
import { ServicesView } from '@/features/solutions/components/SolutionsView';

export function HomeView() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <Hero />
      <ServicesView />

    </main> );
}