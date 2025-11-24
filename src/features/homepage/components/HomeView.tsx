'use client';

import { Title } from './Title';
import { useHomeViewModel } from '../viewModels/useHomeViewModel';

export function HomeView() {
  const { title } = useHomeViewModel();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Title title={title} />
      <p className="mt-4 text-lg text-gray-500">
        Homepage Feature Setup Complete.
      </p>
    </main>
  );
}

