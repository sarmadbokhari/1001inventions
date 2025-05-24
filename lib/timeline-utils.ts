import { type Innovator } from './data';

export interface TimelineInnovator extends Innovator {
  startYear: number;
  endYear: number;
  midYear: number;
  century: string;
  era: string;
}

/**
 * Parse year ranges like "965-1039", "Early 13th century", "9th century", etc.
 */
export function parseYearRange(years: string): { startYear: number; endYear: number } {
  // Handle ranges like "965-1039"
  const rangeMatch = years.match(/(\d{3,4})-(\d{3,4})/);
  if (rangeMatch) {
    return {
      startYear: parseInt(rangeMatch[1]),
      endYear: parseInt(rangeMatch[2])
    };
  }

  // Handle ranges with slashes like "1304-1368/70"
  const slashMatch = years.match(/(\d{3,4})-(\d{3,4})\/(\d{1,2})/);
  if (slashMatch) {
    const startYear = parseInt(slashMatch[1]);
    const centuryBase = Math.floor(startYear / 100) * 100;
    const endYear = centuryBase + parseInt(slashMatch[2]);
    return { startYear, endYear };
  }

  // Handle century references like "9th century", "Early 13th century"
  const centuryMatch = years.match(/(\w+\s+)?(\d{1,2})\w{0,2}\s+century/i);
  if (centuryMatch) {
    const centuryNum = parseInt(centuryMatch[2]);
    const startYear = (centuryNum - 1) * 100;
    const endYear = centuryNum * 100 - 1;
    
    // Adjust for "Early", "Mid", "Late" qualifiers
    const qualifier = centuryMatch[1]?.toLowerCase().trim();
    if (qualifier === 'early') {
      return { startYear, endYear: startYear + 33 };
    } else if (qualifier === 'mid' || qualifier === 'middle') {
      return { startYear: startYear + 33, endYear: startYear + 66 };
    } else if (qualifier === 'late') {
      return { startYear: startYear + 66, endYear };
    }
    
    return { startYear, endYear };
  }

  // Default fallback - treat as single year or estimate
  const singleYear = years.match(/(\d{3,4})/);
  if (singleYear) {
    const year = parseInt(singleYear[1]);
    return { startYear: year, endYear: year + 50 }; // Assume 50-year lifespan
  }

  // Ultimate fallback
  return { startYear: 800, endYear: 850 };
}

/**
 * Get century string from year
 */
export function getCentury(year: number): string {
  const century = Math.ceil(year / 100);
  const suffix = century === 1 ? 'st' : century === 2 ? 'nd' : century === 3 ? 'rd' : 'th';
  return `${century}${suffix} century`;
}

/**
 * Get era description based on year
 */
export function getEra(year: number): string {
  if (year < 750) return 'Early Islamic Period';
  if (year < 1000) return 'Classical Period';
  if (year < 1200) return 'High Medieval';
  if (year < 1400) return 'Late Medieval';
  return 'Post-Classical';
}

/**
 * Process innovators for timeline display
 */
export function processInnovatorsForTimeline(innovators: Innovator[]): TimelineInnovator[] {
  return innovators
    .map((innovator) => {
      const { startYear, endYear } = parseYearRange(innovator.years);
      const midYear = Math.floor((startYear + endYear) / 2);
      
      return {
        ...innovator,
        startYear,
        endYear,
        midYear,
        century: getCentury(midYear),
        era: getEra(midYear)
      };
    })
    .sort((a, b) => a.startYear - b.startYear);
}

/**
 * Group innovators by century for timeline sections
 */
export function groupByCentury(timelineInnovators: TimelineInnovator[]): Record<string, TimelineInnovator[]> {
  return timelineInnovators.reduce((groups, innovator) => {
    const century = innovator.century;
    if (!groups[century]) {
      groups[century] = [];
    }
    groups[century].push(innovator);
    return groups;
  }, {} as Record<string, TimelineInnovator[]>);
}

/**
 * Get position percentage for timeline visualization (0-100)
 */
export function getTimelinePosition(year: number, minYear: number, maxYear: number): number {
  return ((year - minYear) / (maxYear - minYear)) * 100;
}

/**
 * Get timeline bounds (min and max years) with padding
 */
export function getTimelineBounds(timelineInnovators: TimelineInnovator[]): { minYear: number; maxYear: number } {
  const years = timelineInnovators.flatMap(i => [i.startYear, i.endYear]);
  const minYear = Math.min(...years) - 50; // Add 50-year padding
  const maxYear = Math.max(...years) + 50;
  
  return { minYear, maxYear };
}

/**
 * Generate timeline markers (century marks)
 */
export function generateTimelineMarkers(minYear: number, maxYear: number): Array<{ year: number; label: string }> {
  const markers = [];
  const startCentury = Math.ceil(minYear / 100);
  const endCentury = Math.floor(maxYear / 100);
  
  for (let century = startCentury; century <= endCentury; century++) {
    const year = (century - 1) * 100;
    if (year >= minYear && year <= maxYear) {
      markers.push({
        year,
        label: getCentury(year)
      });
    }
  }
  
  return markers;
}