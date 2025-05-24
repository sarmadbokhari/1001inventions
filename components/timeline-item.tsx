'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { type TimelineInnovator } from '@/lib/timeline-utils';
import { getFieldColor, getInnovatorInitials } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Lightbulb } from 'lucide-react';

interface TimelineItemProps {
  innovator: TimelineInnovator;
  isEven: boolean;
  onClick: () => void;
}

export function TimelineItem({ innovator, isEven, onClick }: TimelineItemProps) {
  return (
    <div className={cn(
      "relative flex items-center",
      // Desktop layout: alternate sides
      "lg:justify-center",
      // Mobile layout: always left side
      "justify-start"
    )}>
      {/* Timeline Node */}
      <div className={cn(
        "absolute z-10 w-4 h-4 rounded-full border-4 border-background shadow-lg",
        "bg-gradient-to-br from-blue-500 to-purple-600",
        // Desktop positioning
        "lg:left-1/2 lg:transform lg:-translate-x-1/2",
        // Mobile positioning
        "left-8 transform -translate-x-1/2"
      )} />

      {/* Content Card */}
      <div className={cn(
        "w-full max-w-md group",
        // Desktop layout: alternate sides with margin
        isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8",
        // Mobile layout: always offset from timeline
        "ml-16 lg:ml-0"
      )}>
        <Card 
          className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group-hover:scale-[1.02]"
          onClick={onClick}
        >
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Portrait */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {getInnovatorInitials(innovator.name)}
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {innovator.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>{innovator.years}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{innovator.era}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {innovator.shortDescription}
            </p>

            {/* Fields */}
            <div className="flex flex-wrap gap-1 mb-4">
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

            {/* Key Inventions Preview */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Lightbulb className="h-3 w-3" />
                <span>Key Contributions</span>
              </div>
              <div className="space-y-1">
                {innovator.inventions.slice(0, 2).map((invention) => (
                  <div key={invention} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="line-clamp-1">{invention}</span>
                  </div>
                ))}
                {innovator.inventions.length > 2 && (
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>+{innovator.inventions.length - 2} more...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-4 pt-4 border-t">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Year Label - positioned opposite to card on desktop */}
      <div className={cn(
        "hidden lg:block absolute text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border shadow-sm",
        isEven ? "right-0" : "left-0"
      )}>
        {innovator.startYear} CE
      </div>
    </div>
  );
}

// Add line clamp utility to globals.css
const style = `
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
`;

// Insert styles if not already present
if (typeof document !== 'undefined' && !document.querySelector('#timeline-styles')) {
  const styleElement = document.createElement('style');
  styleElement.id = 'timeline-styles';
  styleElement.textContent = style;
  document.head.appendChild(styleElement);
}