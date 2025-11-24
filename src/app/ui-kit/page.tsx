import { Button } from "@/components/ui/button";

export default function UIKit() {
  return (
    <div className="p-10 space-y-8 min-h-screen bg-background text-foreground">
      <h1 className="text-3xl font-bold">UI Kit</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>
    </div>
  );
}

