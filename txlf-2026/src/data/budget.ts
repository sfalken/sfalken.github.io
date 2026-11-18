import type { BudgetCategory } from './types';

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'flights',
    label: 'Flights',
    icon: '✈️',
    items: [
      { id: 'flight-rt', label: 'Round-trip flight SEA ↔ AUS (solo)', estimated: 480, currency: 'USD', note: 'Domestic — book 4–6 weeks in advance for best fares' },
      { id: 'airport-transport', label: 'Airport transport (x2)', estimated: 30, currency: 'USD', note: 'Lyft/Uber from AUS to downtown, ~$25–35 each way' },
    ],
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: '🏨',
    items: [
      { id: 'hotel-nights', label: 'Hotel (3 nights, Nov 5–8)', estimated: 540, currency: 'USD', note: 'Based on mid-range ~$180/night; Hyatt Place or similar' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'breakfasts', label: 'Breakfasts (4 days)', estimated: 48, currency: 'USD', note: '~$12/day — hotel breakfast or taco truck' },
      { id: 'lunches', label: 'Lunches (4 days)', estimated: 80, currency: 'USD', note: '~$20/day — trailers, casual spots near conference' },
      { id: 'dinners', label: 'Dinners (4 days)', estimated: 200, currency: 'USD', note: '~$50/day — Odd Duck, La Barbecue, Uchi area' },
      { id: 'snacks-coffee', label: 'Snacks & coffee', estimated: 40, currency: 'USD', note: 'Austin has great independent coffee shops' },
    ],
  },
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚗',
    items: [
      { id: 'rideshares', label: 'Rideshares (Lyft/Uber)', estimated: 60, currency: 'USD', note: 'Austin lacks good public transit — budget for rides to/from SoCo, East Austin, etc.' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities & Sightseeing',
    icon: '🎭',
    items: [
      { id: 'barton-springs', label: 'Barton Springs Pool', estimated: 9, currency: 'USD' },
      { id: 'bullock-museum', label: 'Bullock Texas State History Museum', estimated: 13, currency: 'USD' },
      { id: 'capitol-tour', label: 'Texas State Capitol tour', estimated: 0, currency: 'USD', note: 'Free self-guided tours' },
      { id: 'live-music', label: 'Live music / cover charges', estimated: 25, currency: 'USD', note: '6th Street, Rainey Street bars — most have free entry' },
    ],
  },
  {
    id: 'events',
    label: 'Texas LinuxFest',
    icon: '🐧',
    items: [
      { id: 'txlf-registration', label: 'Conference registration', estimated: 0, currency: 'USD', note: 'TxLF is community-organized, typically free or low-cost — check texaslinuxfest.org' },
      { id: 'conf-meals', label: 'Conference lunch/snacks', estimated: 20, currency: 'USD', note: 'Supplement if meals are not provided' },
      { id: 'social-events', label: 'Evening social events', estimated: 40, currency: 'USD', note: 'Sponsor dinners, hallway track, after-parties' },
    ],
  },
  {
    id: 'icecream',
    label: 'Ice Cream Selfies',
    icon: '🍦',
    items: [
      { id: 'icecream-day1', label: "Ice cream Day 1 (Amy's Ice Creams)", estimated: 7, currency: 'USD' },
      { id: 'icecream-day2', label: 'Ice cream Day 2 (Lick Honest)', estimated: 8, currency: 'USD' },
      { id: 'icecream-extra', label: 'Extra scoops (Cow Tipping, Jeni\'s)', estimated: 18, currency: 'USD', note: 'Because Austin has too many great options' },
    ],
  },
  {
    id: 'shopping',
    label: 'Shopping & Souvenirs',
    icon: '🛍️',
    items: [
      { id: 'conference-swag', label: 'Conference swag / merch', estimated: 20, currency: 'USD' },
      { id: 'soco-shopping', label: 'SoCo boutiques & Texas souvenirs', estimated: 60, currency: 'USD', note: 'South Congress has great local shops' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎒',
    items: [
      { id: 'travel-insurance', label: 'Travel insurance', estimated: 30, currency: 'USD' },
      { id: 'tips', label: 'Tips & gratuities', estimated: 50, currency: 'USD', note: '18–20% standard in Austin restaurants' },
      { id: 'misc-buffer', label: 'Miscellaneous buffer', estimated: 100, currency: 'USD' },
    ],
  },
];
