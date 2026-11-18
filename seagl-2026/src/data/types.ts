export interface Restaurant {
  name: string;
  rating: number;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  mustTry: string[];
  hours: string;
  bookingAdvice?: string;
  tip?: string;
  address: string;
  website?: string;
  mapsLink?: string;
  coordinates: [number, number];
  /** Real Resy booking URL — only set when the restaurant is verified to have an actual Resy listing */
  resyUrl?: string;
}

export interface Activity {
  name: string;
  description: string;
  duration?: string;
  time?: string;
  cost?: number;
  currency?: string;
  website?: string;
  mapsLink?: string;
  url?: string;
}

export interface Day {
  date: string;
  label: string;
  theme: string;
  activities: Activity[];
  isConferenceDay?: boolean;
}

export interface IceCreamSpot {
  name: string;
  address: string;
  coordinates: [number, number];
  signatureFlavors: string[];
  mapsLink: string;
  photoNote: string;
}

export interface MapPoint {
  name: string;
  coordinates: [number, number];
  category: 'restaurant' | 'attraction' | 'conference' | 'icecream';
  description?: string;
  website?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  done?: boolean;
}

export interface ChecklistCategory {
  id: string;
  label: string;
  items: ChecklistItem[];
}

export interface BudgetItem {
  id: string;
  label: string;
  estimated: number;
  currency: string;
  note?: string;
}

export interface BudgetCategory {
  id: string;
  label: string;
  icon: string;
  items: BudgetItem[];
}
