export interface Hotel {
  id: string;
  name: string;
  rating: number;
  pricePerNight: number;
  currency: string;
  tier: 'budget' | 'mid' | 'luxury';
  tags: string[];
  description: string;
  tip?: string;
  address: string;
  website?: string;
  coordinates: [number, number];
  _pii?: string;
}

export interface Restaurant {
  name: string;
  rating: number;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  mustTry: string[];
  hours: string;
  bookingAdvice: string;
  address: string;
  website: string;
  coordinates: [number, number];
}

export interface Activity {
  name: string;
  description: string;
  duration: string;
  cost: number;
  currency: string;
  website?: string;
  mapsLink?: string;
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
  category: 'hotel' | 'restaurant' | 'attraction' | 'conference' | 'icecream';
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

export interface CityData {
  name: string;
  country: string;
  coordinates: [number, number];
  hotels: Hotel[];
  restaurants: Restaurant[];
  days: Day[];
  mapPoints: MapPoint[];
  iceCreamSpots?: IceCreamSpot[];
}
