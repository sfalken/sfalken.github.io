import type { BudgetCategory } from './types';

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'driving',
    label: 'Driving',
    icon: '🚗',
    items: [
      { id: 'gas-rt', label: 'Gas — round trip Seattle ↔ Bellingham (~290 km, 19 L/100km)', estimated: 80, currency: 'USD', note: '~55 L total at roughly $1.35/L (WA prices), plus a little local driving' },
      { id: 'parking', label: 'Parking', estimated: 0, currency: 'USD', note: 'Campus parking and hotel parking are expected to be free or cheap — confirm once details are published' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-nights', label: 'Hotel (2 nights, Apr 23–25)', estimated: 380, currency: 'USD', note: 'Based on ~$189/night mid-range; no LFNW group block published for 2027 yet' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'breakfasts', label: 'Breakfasts (3 days)', estimated: 45, currency: 'USD', note: '~$15/day — hotel or Mount Bakery' },
      { id: 'lunches', label: 'Lunches (3 days)', estimated: 75, currency: 'USD', note: '~$25/day' },
      { id: 'dinners', label: 'Dinners (3 days)', estimated: 150, currency: 'USD', note: '~$50/day including one nicer dinner. Padded; past trips have run over on dining' },
      { id: 'snacks-coffee', label: 'Snacks & coffee', estimated: 30, currency: 'USD' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚗',
    items: [
      { id: 'local-rides', label: 'Local rides / WTA bus', estimated: 20, currency: 'USD', note: 'You have your own car; budget only for the odd rideshare after a beer' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Sightseeing',
    icon: '🎭',
    items: [
      { id: 'sightseeing', label: 'Sightseeing', estimated: 25, currency: 'USD', note: 'Fairhaven walk, Boulevard Park, or a Skagit tulip detour (check the bloom)' },
    ],
  },
  {
    id: 'events',
    label: 'LinuxFest Northwest',
    icon: '🐧',
    items: [
      { id: 'lfnw-registration', label: 'Conference registration', estimated: 0, currency: 'USD', note: 'LFNW is described as free to attend; no attendee registration process is published yet' },
      { id: 'conf-meals', label: 'Conference lunch/snacks', estimated: 20, currency: 'USD' },
      { id: 'social-events', label: 'Evening social events', estimated: 30, currency: 'USD' },
    ],
  },
  {
    id: 'icecream',
    label: 'Ice Cream Selfies',
    icon: '🍦',
    items: [
      { id: 'icecream-day1', label: 'Ice cream Day 1 (Mallard)', estimated: 7, currency: 'USD' },
      { id: 'icecream-day2', label: 'Ice cream Day 2 (Sirena Gelato)', estimated: 7, currency: 'USD' },
      { id: 'icecream-day3', label: 'Ice cream Day 3 (Acme Valley)', estimated: 8, currency: 'USD' },
      { id: 'icecream-extra', label: 'Extra scoop (Edaleen Dairy)', estimated: 7, currency: 'USD' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Souvenirs',
    icon: '🛍️',
    items: [
      { id: 'conference-swag', label: 'Conference swag / merch', estimated: 20, currency: 'USD' },
      { id: 'souvenirs', label: 'Fairhaven shops', estimated: 20, currency: 'USD' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎒',
    items: [
      { id: 'tips', label: 'Tips & gratuities', estimated: 40, currency: 'USD' },
      { id: 'misc-buffer', label: 'Miscellaneous buffer', estimated: 75, currency: 'USD' },
    ],
  },
];
