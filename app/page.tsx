'use client';

import { useState, useMemo } from 'react';
import { InnovatorCard } from '@/components/innovator-card';
import { InnovatorDialog } from '@/components/innovator-dialog';
import { SearchFilters } from '@/components/search-filters';
import { Button } from '@/components/ui/button';
import { innovators, type Innovator } from '@/lib/data';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [selectedInnovator, setSelectedInnovator] = useState<Innovator | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredInnovators = useMemo(() => {
    return innovators.filter((innovator) => {
      // Filter by search term
      const matchesSearch = 
        innovator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        innovator.fields.some(field => field.toLowerCase().includes(searchTerm.toLowerCase())) ||
        innovator.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter by category
      const matchesFilter = activeFilter === 'all' || 
        innovator.fields.some(field => 
          field.toLowerCase().includes(activeFilter.toLowerCase())
        );

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up">
            1001 Inventions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Discover the brilliant minds of the Islamic Golden Age who shaped our modern world
          </p>
          <div className="flex justify-center gap-8 text-center animate-slide-up">
            <div>
              <div className="text-3xl font-bold text-primary">{innovators.length}</div>
              <div className="text-sm text-muted-foreground">Innovators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Inventions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">700+</div>
              <div className="text-sm text-muted-foreground">Years of Legacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <SearchFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
            <div className="flex items-center gap-2">
              <Link href="/timeline">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Timeline View
                </Button>
              </Link>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredInnovators.length} of {innovators.length} innovators
            </p>
          </div>

          {/* Innovators Grid */}
          {filteredInnovators.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInnovators.map((innovator, index) => (
                <div
                  key={innovator.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <InnovatorCard
                    innovator={innovator}
                    onClick={() => setSelectedInnovator(innovator)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No innovators found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 1001 Inventions. Celebrating the legacy of Islamic Golden Age innovation.
          </p>
        </div>
      </footer>

      {/* Dialog */}
      <InnovatorDialog
        innovator={selectedInnovator}
        open={!!selectedInnovator}
        onOpenChange={(open) => !open && setSelectedInnovator(null)}
      />
    </div>
  );
}