'use client';

import { useState } from 'react';
import { Timeline } from '@/components/timeline';
import { InnovatorDialog } from '@/components/innovator-dialog';
import { Button } from '@/components/ui/button';
import { innovators, type Innovator } from '@/lib/data';
import { ArrowLeft, Calendar, Users } from 'lucide-react';
import Link from 'next/link';

export default function TimelinePage() {
  const [selectedInnovator, setSelectedInnovator] = useState<Innovator | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Gallery
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h1 className="text-xl font-bold">Historical Timeline</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{innovators.length} innovators</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 text-center bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Journey Through Time
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Explore the chronological legacy of Islamic Golden Age innovators spanning over 700 years of scientific advancement
          </p>
          <div className="text-sm text-muted-foreground">
            8th - 15th Century CE
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Timeline 
            innovators={innovators}
            onInnovatorClick={setSelectedInnovator}
          />
        </div>
      </section>

      {/* Dialog */}
      <InnovatorDialog
        innovator={selectedInnovator}
        open={!!selectedInnovator}
        onOpenChange={(open) => !open && setSelectedInnovator(null)}
      />
    </div>
  );
}