'use client';

import { Hero } from './Hero/Hero';

export function HomeView() {
  return (
    <main className="flex min-h-screen flex-col">
      
      <Hero />

      <section id="contact" className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-black text-3xl font-bold">coming soon...</h2>
      </section>
      
    </main>
  );
}