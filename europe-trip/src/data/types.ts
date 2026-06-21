export interface Hotel {
  id: string;
  name: string;
  rating: number;
  pricePerNight: number;
  currency: string;
  tier: 'budget' | 'mid' | 'upscale' | 'luxury';
  address: string;
  tags: string[];
  description: string;
  tip?: string;
  url?: string;
  coordinates: [number, number];
  _pii?: string;
}

export interface Restaurant {
  name: string;
  rating: number;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  address: string;
  mustTry: string[];
  hours: string;
  bookingAdvice: string;
  url?: string;
  coordinates: [number, number];
}

export interface Activity {
  name: string;
  description: string;
  duration: string;
  cost: number;
  currency: string;
  url?: string;
  mapsLink?: string;
}

export interface Day {
  date: string;
  title: string;
  isConferenceDay?: boolean;
  conferenceTag?: string;
  activities: Activity[];
  meals?: string;
  notes?: string;
}

export interface MapPoint {
  name: string;
  coordinates: [number, number];
  category: 'hotel' | 'restaurant' | 'attraction' | 'conference' | 'transport' | 'icecream';
  description?: string;
  url?: string;
}

export interface IceCreamSpot {
  name: string;
  address: string;
  coordinates: [number, number];
  signatureFlavors: string[];
  mapsLink: string;
  photoNote: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  done?: boolean;
  priority?: 'high' | 'medium' | 'low';
}

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  items: ChecklistItem[];
}

export interface BudgetItem {
  id: string;
  label: string;
  estimated: number;
  currency: string;
  note?: string;
  _pii?: string;
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
  currency: string;
  currencyCode: string;
  coordinates: [number, number];
  mapZoom: number;
  description: string;
  hotels: Hotel[];
  restaurants: Restaurant[];
  days: Day[];
  mapPoints: MapPoint[];
  iceCreamSpots?: IceCreamSpot[];
}
