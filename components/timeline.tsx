'use client';

import { useMemo } from 'react';
import { TimelineItem } from './timeline-item';
import { Badge } from '@/components/ui/badge';
import { type Innovator } from '@/lib/data';
import { 
  processInnovatorsForTimeline, 
  groupByCentury, 
  getTimelineBounds, 
  generateTimelineMarkers,
  type TimelineInnovator 
} from '@/lib/timeline-utils';

interface TimelineProps {
  innovators: Innovator[];
  onInnovatorClick: (innovator: Innovator) => void;
}

export function Timeline({ innovators, onInnovatorClick }: TimelineProps) {
  const timelineData = useMemo(() => {
    const timelineInnovators = processInnovatorsForTimeline(innovators);
    const { minYear, maxYear } = getTimelineBounds(timelineInnovators);
    const markers = generateTimelineMarkers(minYear, maxYear);
    const centuryGroups = groupByCentury(timelineInnovators);
    
    return {
      timelineInnovators,
      minYear,
      maxYear,
      markers,
      centuryGroups
    };
  }, [innovators]);

  const { timelineInnovators, minYear, maxYear, markers, centuryGroups } = timelineData;

  return (
    <div className="relative">
      {/* Timeline Overview */}
      <div className="mb-12 p-6 bg-card rounded-xl border">
        <h3 className="text-lg font-semibold mb-4">Timeline Overview</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(centuryGroups).map(([century, innovatorsInCentury]) => (
            <Badge key={century} variant="secondary" className="text-xs">
              {century}: {innovatorsInCentury.length} innovators
            </Badge>
          ))}
        </div>
        
        {/* Mini Timeline */}
        <div className="relative h-4 bg-muted rounded-full overflow-hidden">
          {timelineInnovators.map((innovator, index) => {
            const position = ((innovator.midYear - minYear) / (maxYear - minYear)) * 100;
            return (
              <div
                key={innovator.id}
                className="absolute top-0 w-1 h-full bg-primary opacity-60"
                style={{ left: `${position}%` }}
                title={`${innovator.name} (${innovator.years})`}
              />
            );
          })}
          
          {/* Century markers on mini timeline */}
          {markers.map((marker) => {
            const position = ((marker.year - minYear) / (maxYear - minYear)) * 100;
            return (
              <div
                key={marker.year}
                className="absolute top-0 w-0.5 h-full bg-border"
                style={{ left: `${position}%` }}
              />
            );
          })}
        </div>
        
        {/* Year labels */}
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>{minYear} CE</span>
          <span>{maxYear} CE</span>
        </div>
      </div>

      {/* Main Timeline */}
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-px" />
        
        {/* Mobile timeline line */}
        <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        {/* Century Sections */}
        {Object.entries(centuryGroups).map(([century, innovatorsInCentury], sectionIndex) => (
          <div key={century} className="mb-16">
            {/* Century Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-4 bg-background px-6 py-3 rounded-full border border-border shadow-sm">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-xl font-bold">{century}</h3>
                <Badge variant="outline">{innovatorsInCentury.length} innovators</Badge>
              </div>
            </div>

            {/* Innovators in this century */}
            <div className="space-y-8 lg:space-y-12">
              {innovatorsInCentury.map((innovator, index) => (
                <TimelineItem
                  key={innovator.id}
                  innovator={innovator}
                  isEven={(sectionIndex + index) % 2 === 0}
                  onClick={() => onInnovatorClick(innovator)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Timeline End Marker */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border shadow-sm">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-sm text-muted-foreground">Legacy Continues</span>
          </div>
        </div>
      </div>
    </div>
  );
}