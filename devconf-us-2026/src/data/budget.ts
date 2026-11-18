import type { BudgetCategory } from './types';

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'flights',
    label: 'Flights',
    icon: '✈️',
    items: [
      { id: 'flight-rt', label: 'Round-trip flight (solo)', estimated: 400, currency: 'USD', note: 'Domestic short-haul, book 4–6 weeks in advance' },
      { id: 'airport-transport', label: 'Airport transfers (x2)', estimated: 30, currency: 'USD', note: 'Silver Line SL1 each way, ~$2.40' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-nights', label: 'Hotel (4 nights)', estimated: 800, currency: 'USD', note: 'Based on mid-range ~$200/night; The Verb Hotel or similar' },
    ],
  },
  {
    id: 'intercity-transport',
    label: 'Inter-city Transport',
    icon: '🚂',
    items: [
      { id: 'mbta-passes', label: 'MBTA 7-day pass', estimated: 22, currency: 'USD', note: 'Unlimited subway & bus' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'breakfasts', label: 'Breakfasts (5 days)', estimated: 60, currency: 'USD', note: '~$12/day at bakeries/cafes' },
      { id: 'lunches', label: 'Lunches (5 days)', estimated: 100, currency: 'USD', note: '~$20/day, often near conference' },
      { id: 'dinners', label: 'Dinners (5 days)', estimated: 225, currency: 'USD', note: '~$45/day at recommended restaurants' },
      { id: 'snacks-coffee', label: 'Snacks & coffee', estimated: 40, currency: 'USD', note: 'Boston has great independent coffee shops' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚇',
    items: [
      { id: 'rideshares', label: 'Rideshares (misc)', estimated: 30, currency: 'USD', note: 'For late nights or luggage days' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities',
    icon: '🎭',
    items: [
      { id: 'aquarium', label: 'New England Aquarium', estimated: 32, currency: 'USD' },
      { id: 'mfa', label: 'Museum of Fine Arts', estimated: 27, currency: 'USD' },
      { id: 'freedom-trail', label: 'Freedom Trail (self-guided)', estimated: 0, currency: 'USD', note: 'Free; guided tours ~$14' },
    ],
  },
  {
    id: 'events',
    label: 'DevConf.US',
    icon: '💻',
    items: [
      { id: 'devconf-registration', label: 'Conference registration', estimated: 0, currency: 'USD', note: 'DevConf.US is free to attend — check devconf.us' },
      { id: 'conf-meals', label: 'Conference lunch/snacks', estimated: 30, currency: 'USD', note: 'Some meals provided; supplement as needed' },
      { id: 'social-events', label: 'Evening social events', estimated: 40, currency: 'USD', note: 'Sponsor events, dinners, hallway track drinks' },
    ],
  },
  {
    id: 'icecream',
    label: 'Ice Cream Selfies',
    icon: '🍦',
    items: [
      { id: 'icecream-day1', label: 'Ice cream Day 1 (J.P. Licks)', estimated: 8, currency: 'USD' },
      { id: 'icecream-day2', label: "Ice cream Day 2 (Toscanini's)", estimated: 9, currency: 'USD' },
      { id: 'icecream-extra', label: 'Extra ice cream stops', estimated: 15, currency: 'USD', note: 'Because why not?' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: '🛍️',
    items: [
      { id: 'conference-swag', label: 'Conference merch / swag', estimated: 30, currency: 'USD' },
      { id: 'souvenirs', label: 'Souvenirs & gifts', estimated: 50, currency: 'USD' },
    ],
  },
  {
    id: 'connectivity',
    label: 'Connectivity',
    icon: '📱',
    items: [
      { id: 'roaming', label: 'Data / roaming (if needed)', estimated: 0, currency: 'USD', note: 'Most US plans include domestic coverage; hotel WiFi is usually reliable' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎒',
    items: [
      { id: 'travel-insurance', label: 'Travel insurance', estimated: 35, currency: 'USD' },
      { id: 'tips-gratuities', label: 'Tips & gratuities', estimated: 60, currency: 'USD', note: '15–20% is standard in Boston restaurants' },
      { id: 'misc-buffer', label: 'Miscellaneous buffer', estimated: 100, currency: 'USD' },
    ],
  },
];
