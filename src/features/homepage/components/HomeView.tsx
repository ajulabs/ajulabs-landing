'use client';


import { ServicesView } from '@/features/solutions/components/SolutionsView';
import { AboutView } from '@/features/homepage/components/about/components';

export function HomeView() {

  return (
    <main className="flex min-h-screen flex-col">      
      <AboutView />
      <ServicesView />
    </main>
  );
}

