import type { BudgetCategory } from './types';

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'flights',
    label: 'Flights',
    icon: '✈️',
    items: [
      { id: 'flight-rt', label: 'Round-trip flight SEA ↔ LAX/BUR (solo)', estimated: 380, currency: 'USD', note: 'Short-haul domestic. Padded: the Texas trip airfare came in well over its estimate, so book early and watch both BUR and LAX' },
      { id: 'airport-transport', label: 'Airport transport (x2)', estimated: 90, currency: 'USD', note: 'Rideshare BUR/LAX ↔ Pasadena: roughly $30–35 from BUR, $55–70 from LAX each way' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-nights', label: 'Hotel (3 nights, Apr 1–4)', estimated: 690, currency: 'USD', note: 'Based on ~$229/night plus tax for the official hotel; group rate not published yet' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'breakfasts', label: 'Breakfasts (4 days)', estimated: 60, currency: 'USD', note: '~$15/day — hotel or cafe' },
      { id: 'lunches', label: 'Lunches (4 days)', estimated: 100, currency: 'USD', note: '~$25/day — Old Pasadena casual spots near the venue' },
      { id: 'dinners', label: 'Dinners (4 days)', estimated: 220, currency: 'USD', note: '~$55/day including one splurge dinner' },
      { id: 'snacks-coffee', label: 'Snacks & coffee', estimated: 45, currency: 'USD' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚆',
    items: [
      { id: 'rideshares', label: 'Rideshares / Metro', estimated: 40, currency: 'USD', note: 'Hotels and venue are walkable; Metro L Line covers a trip to downtown LA' },
      { id: 'parking', label: 'Parking (if driving)', estimated: 0, currency: 'USD', note: 'Not planned — venue lots are $15/day and $12/day if that changes' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Sightseeing',
    icon: '🎭',
    items: [
      { id: 'sightseeing', label: 'Sightseeing / museums', estimated: 30, currency: 'USD', note: 'Placeholder for something in Pasadena such as the Huntington or Norton Simon, if time allows' },
    ],
  },
  {
    id: 'events',
    label: 'SCaLE 24x',
    icon: '🐧',
    items: [
      { id: 'scale-registration', label: 'SCaLE Pass registration', estimated: 100, currency: 'USD', note: 'No talk accepted, so registration is paid. 23x early-bird was $80; 24x pricing not yet published. Padded' },
      { id: 'conf-meals', label: 'Conference lunch/snacks', estimated: 20, currency: 'USD' },
      { id: 'social-events', label: 'Evening social events', estimated: 40, currency: 'USD', note: 'Unofficial social events, after-parties' },
    ],
  },
  {
    id: 'icecream',
    label: 'Ice Cream Selfies',
    icon: '🍦',
    items: [
      { id: 'icecream-day1', label: 'Ice cream Day 1 (Wanderlust Creamery)', estimated: 8, currency: 'USD' },
      { id: 'icecream-day2', label: 'Ice cream Day 2 (Salt & Straw)', estimated: 8, currency: 'USD' },
      { id: 'icecream-day3', label: 'Ice cream Day 3 (Ice Cream Lab)', estimated: 9, currency: 'USD' },
      { id: 'icecream-day4', label: 'Ice cream Day 4 (Kinrose Creamery)', estimated: 8, currency: 'USD' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Souvenirs',
    icon: '🛍️',
    items: [
      { id: 'conference-swag', label: 'Conference swag / merch', estimated: 25, currency: 'USD' },
      { id: 'souvenirs', label: 'Old Pasadena souvenirs', estimated: 30, currency: 'USD' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎒',
    items: [
      { id: 'travel-insurance', label: 'Travel insurance', estimated: 30, currency: 'USD' },
      { id: 'tips', label: 'Tips & gratuities', estimated: 60, currency: 'USD', note: '18–20% standard at California restaurants. Padded; past trips have run over on dining' },
      { id: 'misc-buffer', label: 'Miscellaneous buffer', estimated: 100, currency: 'USD' },
    ],
  },
];
