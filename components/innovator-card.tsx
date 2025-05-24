'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Innovator, getFieldColor, getInnovatorInitials } from "@/lib/data";
import { cn } from "@/lib/utils";

interface InnovatorCardProps {
  innovator: Innovator;
  onClick: () => void;
}

export function InnovatorCard({ innovator, onClick }: InnovatorCardProps) {
  return (
    <Card 
      className="card-hover cursor-pointer group overflow-hidden animate-fade-in"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              {getInnovatorInitials(innovator.name)}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-1 truncate group-hover:text-primary transition-colors">
              {innovator.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {innovator.years}
            </p>
            <div className="flex flex-wrap gap-1">
              {innovator.fields.slice(0, 2).map((field) => (
                <Badge 
                  key={field} 
                  variant="secondary" 
                  className={cn("text-xs", getFieldColor(field))}
                >
                  {field}
                </Badge>
              ))}
              {innovator.fields.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{innovator.fields.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Invention Icons */}
          <div className="flex-shrink-0 hidden sm:flex flex-col gap-1">
            {innovator.inventions.slice(0, 3).map((invention, index) => (
              <div 
                key={invention}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
                title={invention}
              >
                {getInventionEmoji(invention)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile invention indicators */}
        <div className="sm:hidden mt-3 flex gap-2">
          {innovator.inventions.slice(0, 3).map((invention, index) => (
            <div 
              key={invention}
              className="w-6 h-6 rounded bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs"
              title={invention}
            >
              {getInventionEmoji(invention)}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getInventionEmoji(invention: string): string {
  const emojiMap: Record<string, string> = {
    'Water-Raising Machines': '💧',
    'Camera Obscura': '📷',
    'Surgical Instruments': '🔬',
    'Algebra': '📐',
    'Flying Machine': '✈️',
    'University Education System': '🎓',
    'Mechanical Clock Designs': '⏰',
    'Automated Devices': '🤖',
    'Experimental Scientific Method': '🧪',
    'Optics Research': '🔍',
    'Algorithm': '💻',
    'Decimal Positional Number System': '🔢',
    'Canon of Medicine': '📚',
    'Medical Diagnosis Methods': '🩺',
    'Pharmaceutical Knowledge': '💊',
    'Catgut Sutures': '🧵',
    'Surgical Procedures': '⚕️',
    'Higher Learning Institution': '🏛️',
    'Educational Philanthropy': '📖',
    'Crystal Cutting Techniques': '💎',
    'Planetarium Design': '🌟',
  };
  
  return emojiMap[invention] || '⚡';
}