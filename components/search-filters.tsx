'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'All' },
  { id: 'medicine', label: 'Medicine' },
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'astronomy', label: 'Astronomy' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'education', label: 'Education' },
];

export function SearchFilters({ 
  searchTerm, 
  onSearchChange, 
  activeFilter, 
  onFilterChange 
}: SearchFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search innovators..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "transition-all duration-200",
              activeFilter === filter.id && "shadow-md"
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}