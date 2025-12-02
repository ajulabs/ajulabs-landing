'use client';

import { Hero } from './Hero/Hero';
import { ServicesView } from '@/features/solutions/components/SolutionsView';

export function HomeView() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <Hero />
      <ServicesView />

    </main> );
}