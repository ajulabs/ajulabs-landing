'use client';

import { ServicesView } from '@/features/homepage/components/solutions';
import { CasesView } from '@/features/homepage/components/cases';
import { ContactView } from '@/features/homepage/components/contact';

export function HomeView() {

  return (
    <main className="flex min-h-screen flex-col">      
      <ServicesView />
      <CasesView />
      <ContactView />
    </main>
  );
}

