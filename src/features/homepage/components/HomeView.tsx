'use client';

import { ServicesView } from '@/features/solutions/components/SolutionsView';
import { CasesView } from '@/features/cases/components/CasesView';

export function HomeView() {

  return (
    <main className="flex min-h-screen flex-col">      
      <ServicesView />
      <CasesView />
    </main>
  );
}

