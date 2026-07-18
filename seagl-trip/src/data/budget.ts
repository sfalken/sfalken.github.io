import type { BudgetCategory } from './types';

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'local-transport',
    label: 'Local Transport',
    icon: '🚈',
    items: [
      { id: 'transit-fares', label: 'Link light rail / bus fares (2 days, round trip)', estimated: 15, currency: 'USD', note: '~$3.25/ride peak fare × 4 rides — load an ORCA card in advance' },
    ],
  },
  {
    id: 'food',
    label: 'Food & Dining',
    icon: '🍽️',
    items: [
      { id: 'lunches', label: 'Lunches (2 days)', estimated: 36, currency: 'USD', note: '~$18/day near the venue on University Way NE / University Village' },
      { id: 'snacks-coffee', label: 'Snacks & coffee', estimated: 12, currency: 'USD', note: '~$6/day — plenty of U-District coffee shops' },
      { id: 'social-dinner', label: 'Post-conference dinner or drinks', estimated: 25, currency: 'USD', note: 'Optional — hallway-track hangout at Big Time Brewery or similar' },
    ],
  },
  {
    id: 'event',
    label: 'SeaGL',
    icon: '🐧',
    items: [
      { id: 'seagl-registration', label: 'Conference registration', estimated: 0, currency: 'USD', note: 'SeaGL is free to attend; registration is optional (helps with attendance estimates). Free for accepted speakers regardless.' },
      { id: 'seagl-merch', label: 'Conference merch / donation', estimated: 25, currency: 'USD', note: 'Optional — SeaGL is community-run and donation-supported' },
    ],
  },
  {
    id: 'icecream',
    label: 'Ice Cream Selfies',
    icon: '🍦',
    items: [
      { id: 'icecream-day1', label: "Ice cream Day 1 (Molly Moon's)", estimated: 7, currency: 'USD' },
      { id: 'icecream-day2', label: 'Ice cream Day 2 (Sweet Alchemy)', estimated: 7, currency: 'USD' },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    icon: '🎒',
    items: [
      { id: 'misc-buffer', label: 'Miscellaneous buffer', estimated: 30, currency: 'USD' },
    ],
  },
];
